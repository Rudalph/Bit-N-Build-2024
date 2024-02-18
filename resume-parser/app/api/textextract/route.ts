import { NextRequest,NextResponse } from 'next/server'
import { TextLoader } from 'langchain/document_loaders/fs/text'
import { DirectoryLoader } from 'langchain/document_loaders/fs/directory'
import { PDFLoader } from 'langchain/document_loaders/fs/pdf'
import { join } from 'path'
import fs, { writeFile,unlink } from 'fs/promises';
import pdfParse from 'pdf-parse';

export async function POST(request: NextRequest) {
    console.log("1")
    const data = await request.formData()
    const file: File | null = data.get('file') as unknown as File
    console.log(file)
  
    if(!file) {
      return NextResponse.json({ success: false })
    }
    
    console.log("2")
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
  
    const path = join('documents',file.name)
    const pathToFile = `resume-parser/documents/${file.name}`
    await writeFile(path, buffer)

    try{
        const text = await fs.readFile(pathToFile);
        console.log("3")
        const parsedData = await pdfParse(text);
        console.log(parsedData)
    }
    catch (err) {
        console.error('Error reading or parsing PDF:', err);
    }

    console.log(`open ${path} to see the uploaded file`)
  
    const loader = new DirectoryLoader('./documents', {
      ".txt": (path) => new TextLoader(path),
      ".md": (path) => new TextLoader(path),
      ".pdf": (path) => new PDFLoader(path)
    })
  
    const docs = await loader.load()
    console.log(`Docs go here: `)
    console.log(docs)
    // Use the unlink function to delete the file asynchronously.
    await unlink(path);
  
    return NextResponse.json({
      "data": 'successfully created index and loaded data into pinecone...'
    })
  }