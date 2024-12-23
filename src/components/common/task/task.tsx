import { Button } from '@/components/ui/button/button'
import { Label } from '@/components/ui/label/label'
import { useDeleteTask } from '@/services/hooks/tasks'
import {
  add3dotsFormatter,
  prioritiesFormatterVariant
} from '@/utils/functions'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

interface Props {
  task: Task
}

export default function Task({ task }: Props) {
  const [open, setOpen] = useState<boolean>(false)
  const deleteTask = useDeleteTask()

  const handlerDelete = async () => {
    const res = confirm('Quiere borrar esto ?')

    if (res) {
      await deleteTask.mutateAsync({
        id: task.id
      })
        .catch(() => { alert('There was a problem...!') })
    }
  }

  return (
    <div
      className="bg-gradient-to-r from-[#151b58]  to-[#03093a] w-full p-5 rounded-md text-white cursor-pointer "
    >
      <div className="flex flex-row justify-between items-start">
        <h5 className="font-semibold text-xl">{task.title}</h5>
        <Label variant={prioritiesFormatterVariant(task.priority)}>
          {task.priority}
        </Label>
      </div>
      <p className="text-link">{task.tag}</p>
      {task.description
        ? (
        <div className='flex-col justify-center items-center ' onClick={() => {
          setOpen(!open)
        }}>
          <p className="text-gray-300">
          {!open ? add3dotsFormatter(task.description, 50) : task.description}
        </p>
        {!open ? <ChevronDown width={'100%'} className='animate-bounce'/> : <></>}
        </div>
          )
        : (
        <></>
          )}
      {open
        ? (
        <div className="flex mt-8 flex-row justify-center items-center gap-5">
          <Link href={`/task-edit?id=${task.id}`} className='w-full p-0 m-0'>
            <Button size={'sm'} className="text-base font-medium">
              Edit
            </Button>
          </Link>
          <Button
            variant={'destructive'}
            className="text-base font-medium"
            size={'sm'}
            onClick={handlerDelete}
          >
            Delete
          </Button>
        </div>
          )
        : (
        <></>
          )}

    </div>
  )
}
