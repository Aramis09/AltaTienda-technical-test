import axios, { type AxiosResponse } from 'axios'

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    'x-access-token': ''
  }
})

export const userService = {
  checkEmailUsed: async ({ email }: { email: string }): Promise<AxiosResponse<ResCheckEmailUsed>> => await api.post('/user/validate-repeate-user', {
    email
  })

}
