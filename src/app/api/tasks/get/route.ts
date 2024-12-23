import axios from 'axios'
import { NextResponse } from 'next/server'

function searchArray(query: string, data: Task[]): Task[] {
  // Convertimos la consulta a minúsculas para hacer la búsqueda insensible a mayúsculas
  const lowerCaseQuery = query.toLowerCase()

  // Filtramos el array de strings, devolviendo solo los que contienen la consulta
  return data.filter(item => item.title.toLowerCase().includes(lowerCaseQuery))
}

export async function GET(req: Request, res: Response) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  const value = searchParams.get('value')

  let url = 'http://localhost:3000/tasks'
  //* By Id */
  try {
    if (id) {
      url = `${url}/${id}`
      const response = await axios.get(url)
      return NextResponse.json({ tasks: [response.data] })
    }

    if (value) {
      const response = await axios.get(url)
      const data = response.data as Task[]
      if (!value) return NextResponse.json({ tasks: data })
      return NextResponse.json({ tasks: searchArray(value, data) })
    }

    const response = await axios.get(url)

    return NextResponse.json({ tasks: response.data })
  } catch (error) {
    return NextResponse.json({ tasks: null })
  }
}
