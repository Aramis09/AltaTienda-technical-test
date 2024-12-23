import { useMutation, useQuery } from '@tanstack/react-query'
import { taskServices } from '../../api'
import { mapGetTasks } from './maps'
import { queryClient } from '@/config/clients/intances'

interface UseGetTasks {
  priority?: Priority
}

//! GET TASK LIST */
export default function useGetTasks({ priority }: UseGetTasks) {
  const res = useQuery({
    queryKey: ['useGetTasks'],
    queryFn: async () =>
      await taskServices.get({
        priority
      })
  })

  if (!res.data?.data.tasks) {
    return {
      ...res,
      data: undefined
    }
  }

  //* Rompemos el contrato con la api haciendo un mapeo de la informacion*/
  const dataToResponse: Task[] = mapGetTasks(res.data.data.tasks)

  return {
    ...res,
    data: dataToResponse
  }
}

//! GET TASK BY ID */
interface UseGetTaskById {
  id: string | number
}
export const useGetTaskById = ({ id }: UseGetTaskById) => {
  const res = useQuery({
    queryKey: ['useGetTaskById', id],
    queryFn: async () =>
      await taskServices.get({
        id
      }),
    enabled: !!id
  })
  if (!res.data?.data.tasks) {
    return {
      ...res,
      data: undefined
    }
  }

  //* Rompemos el contrato con la api haciendo un mapeo de la informacion*/
  const dataToResponse: Task[] = mapGetTasks(res.data.data.tasks)

  return {
    ...res,
    data: dataToResponse[0]
  }
}

export const useDeleteTask = () => {
  const res = useMutation({
    mutationKey: ['useDeleteTask'],
    mutationFn: taskServices.delete,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['useGetTasks']
      })
    }
  })
  return res
}

export const useEditTask = () => {
  const res = useMutation({
    mutationKey: ['useUpdateTask'],
    mutationFn: taskServices.update,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['useGetTasks']
      })
      await queryClient.invalidateQueries({
        queryKey: ['useGetTaskById']
      })
    }
  })
  return res
}

export const useCreateTask = () => {
  const res = useMutation({
    mutationKey: ['useCreateTask'],
    mutationFn: taskServices.create,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['useGetTasks']
      })
    }
  })
  return res
}
