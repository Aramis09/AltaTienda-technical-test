'use client'

import Task from '@/components/common/task/task'
import { Loader } from '@/components/ui/loader/loader'
import { SearchInput } from '@/components/ui/search/search'
import useGetTasks from '@/services/hooks/tasks'
import { useState } from 'react'

export default function Home() {
  const [valueForSearch, setValueForSearch] = useState<string>('')
  //* Traemos todas las tareas */
  const {
    data: tasksList,
    isLoading,
    isError
  } = useGetTasks({
    value: valueForSearch
  })

  return (
    <div className="py-10 flex flex-col p-5 pt-0 gap-7 justify-center items-center">
      <div className="z-50 bg-background pt-5 mb-5 flex flex-col w-full gap-7 justify-center items-center sticky top-0 shadow-[0px_50px_15px_rgba(0,0,0,0.5)]">
        <h3 className="font-extrabold text-3xl text-center text-white">
          Your Favorite List !
        </h3>
        <SearchInput
          value={valueForSearch}
          onChange={(value) => {
            setValueForSearch(value.target.value)
          }}
          onClick={() => {}}
        />
      </div>
      {/* //*  Mostramos el loader en caso de que este cargando alguna request  */}
      {(isLoading && !tasksList) ?? <Loader />}
      {/* //*  Mostramos el error en caso de que se de */}
      {isError && <p>Ocurrio un error</p>}
      {tasksList?.map((data, index) => (
        <Task key={index} task={data} />
      ))}
    </div>
  )
}
