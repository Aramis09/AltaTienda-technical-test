import axios from 'axios'
import { NextResponse } from 'next/server'

export async function PATCH(req: Request, res: Response) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  const body = await req.json()

  let url = 'http://localhost:3000/tasks'
  //* By Id */
  try {
    if (!id) return NextResponse.json({ msg: 'Id not found' })
    url = `${url}/${id}`
    const response = await axios.patch(url, body)
    return NextResponse.json({ msg: 'Task updated', tasks: response.data })
  } catch (error) {
    return NextResponse.json({ msg: 'Ocurrio un error' })
  }
}
