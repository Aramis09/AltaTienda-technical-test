import { queryClient } from '@/config/clients/intances'
import { tagsServices } from '@/services/api'
import { useMutation, useQuery } from '@tanstack/react-query'
import { mapGetTags } from './maps'

//! GET TAGS LIST */
export default function useGetTags() {
  const res = useQuery({
    queryKey: ['useGetTags'],
    queryFn: async () =>
      await tagsServices.get()
  })

  if (!res.data?.data.tags) {
    return {
      ...res,
      data: undefined
    }
  }

  //* Rompemos el contrato con la api haciendo un mapeo de la informacion*/
  const dataToResponse: Tag[] = mapGetTags(res.data.data.tags)

  return {
    ...res,
    data: dataToResponse
  }
}

export const useCreateTag = () => {
  const res = useMutation({
    mutationKey: ['useCreateTag'],
    mutationFn: tagsServices.create,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['useGetTags']
      })
    }
  })
  return res
}
