import { NextRequest,NextResponse } from 'next/server'
import { PDFLoader } from 'langchain/document_loaders/fs/pdf'
import { join } from 'path'
import { writeFile,unlink } from 'fs/promises';
import { OpenAI } from "@langchain/openai";

export async function POST(request: NextRequest) {
    const data = await request.formData()
    const file: File | null = data.get('file') as unknown as File
    console.log(file)
  
    if(!file) {
      return NextResponse.json({ success: false })
    }
    
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
  
    const path = join('documents',file.name)
    await writeFile(path, buffer)

    console.log(`open ${path} to see the uploaded file`)
  
    const loader = new PDFLoader(path, {
      splitPages: false,
    });
  
    const docs = await loader.load()
    const extractedTexts = docs.map(doc => doc.pageContent);

    console.log(extractedTexts.join('\n\n'));
    // Use the unlink function to delete the file asynchronously.
    await unlink(path);

    const model = new OpenAI({
      modelName: "gpt-3.5-turbo-instruct", // Defaults to "gpt-3.5-turbo-instruct" if no model provided.
      temperature: 0.3,
      openAIApiKey: process.env.OPENAI_API_KEY, 
    });

    const experience = await model.call(
      `This is a resume content:${extractedTexts}, what is mentioned as experience`
    );

    const skills = await model.call(
      `This is a resume content:${extractedTexts}, what is mentioned as skills`
    )
    
    const qualification = await model.call(
      `This is a resume content:${extractedTexts}, what is mentioned as qualification`
    )
    console.log(`Experience: ${experience}`)
    console.log(`Skills:  ${skills}`)
    console.log(`Qualification: ${qualification}`)
  
    return NextResponse.json({
      "data": extractedTexts
    })
  }