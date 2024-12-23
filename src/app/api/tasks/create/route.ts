import axios from 'axios'
import { NextResponse } from 'next/server'

export async function POST(req: Request, res: Response) {
  const body = await req.json()
  let url = 'http://localhost:3000/tasks'
  try {
    url = `${url}`
    const response = await axios.post(url, body)
    return NextResponse.json({ msg: 'Task created', tasks: response.data })
  } catch (error) {
    return NextResponse.json({ msg: 'Ocurrio un error' })
  }
}
