import axios from 'axios'
import { NextResponse } from 'next/server'

export async function GET(req: Request, res: Response) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  let url = 'http://localhost:3000/tasks'
  //* By Id */
  try {
    if (id) {
      url = `${url}/${id}`
      const response = await axios.get(url)
      return NextResponse.json({ tasks: [response.data] })
    }
    const response = await axios.get(url)

    return NextResponse.json({ tasks: response.data })
  } catch (error) {
    return NextResponse.json({ tasks: null })
  }
}
