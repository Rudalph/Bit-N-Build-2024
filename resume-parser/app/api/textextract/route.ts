import { NextRequest,NextResponse } from 'next/server'
import { PDFLoader } from 'langchain/document_loaders/fs/pdf'
import { join } from 'path'
import fs, { writeFile,unlink } from 'fs/promises';
import pdfParse from 'pdf-parse';

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
  
    return NextResponse.json({
      "data": 'successfully created index and loaded data into pinecone...'
    })
  }