
import { NextResponse } from 'next/server';
import { DEFAULT_CONTENT } from '../../../lib/constants';

// In-memory store to simulate a database.
let pageContent: string = DEFAULT_CONTENT;

export async function GET() {
  return NextResponse.json({ content: pageContent });
}

export async function POST(request: Request) {
  try {
    const { content } = await request.json();
    
    if (typeof content !== 'string') {
      return NextResponse.json({ success: false, error: 'Invalid content format' }, { status: 400 });
    }

    pageContent = content;
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ success: false, error: 'Failed to save content' }, { status: 500 });
  }
}
