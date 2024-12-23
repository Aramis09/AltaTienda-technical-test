import axios, { type AxiosResponse } from 'axios'

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
  headers: {
    'x-access-token': ''
  }
})

export const taskServices = {
  get: async ({ priority, id, value }: { priority?: Priority, id?: string | number, value?: string }): Promise<AxiosResponse<{ tasks: Task[] }>> => {
    const queryParams = new URLSearchParams({
      ...(priority !== undefined ? { priority: priority.toString() } : undefined),
      ...(id !== undefined ? { id: id.toString() } : undefined),
      ...(value !== undefined ? { value: value.toString() } : undefined)

    })
    return await api.get(`/tasks/get?${queryParams.toString()}`)
  },
  delete: async ({ id }: { id: string | number }) => await api.delete(`/tasks/delete?id=${id}`),
  update: async ({ id, body }: { id: string | number, body: Partial<Task> }) => await api.patch(`/tasks/patch?id=${id}`, body),
  create: async ({ body }: { body: Omit<Task, 'id'> }) => await api.post('/tasks/create', body) //! Tengo que probarla
}

export const tagsServices = {
  get: async (): Promise<AxiosResponse<{ tags: Tag[] }>> => {
    return await api.get('/tags/get')
  },
  create: async ({ body }: { body: Omit<Tag, 'id'> }) => await api.post('/tags/create', body)
}
