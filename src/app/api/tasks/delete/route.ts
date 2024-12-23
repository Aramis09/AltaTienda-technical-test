import axios from 'axios'
import { NextResponse } from 'next/server'

export async function DELETE(req: Request, res: Response) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  let url = 'http://localhost:3000/tasks'
  //* By Id */
  url = `${url}/${id}`
  await axios.delete(url)

  return NextResponse.json({ msg: 'The task was deleted' })
}
