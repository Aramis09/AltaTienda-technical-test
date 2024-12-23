import axios from 'axios'
import { NextResponse } from 'next/server'

export async function GET(req: Request, res: Response) {
  const url = 'http://localhost:3000/tags'
  //* By Id */
  try {
    const response = await axios.get(url)
    return NextResponse.json({ tags: response.data })
  } catch (error) {
    return NextResponse.json({ tags: null })
  }
}
