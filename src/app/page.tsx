'use client'

import Task from '@/components/common/task/task'
// import { Button } from '@/components/ui/button/button'
import { Loader } from '@/components/ui/loader/loader'
import { SearchInput } from '@/components/ui/search/search'
import useGetTasks from '@/services/hooks/tasks'

export default function Home() {
  //* Traemos todas las tareas */
  const { data: tasksList, isLoading, isError } = useGetTasks({})
  //* Mostramos el loader en caso de que este cargando alguna request */
  if (isLoading) return <Loader />
  //* Mostramos el error en caso de que se de */
  if (isError || !tasksList) return <p>Ocurrio un error</p>

  return (
    <div className="py-10 flex flex-col p-5 pt-0 gap-7 justify-center items-center">
      <div className="z-50 bg-background pt-5 mb-5 flex flex-col w-full gap-7 justify-center items-center sticky top-0 shadow-[0px_50px_15px_rgba(0,0,0,0.5)]">
        <h3 className="font-extrabold text-3xl text-center text-white">
          Your Favorite List !
        </h3>
        <SearchInput />
      </div>
      {tasksList.map((data, index) => (
        <Task key={index} task={data} />
      ))}
    </div>
  )
}
