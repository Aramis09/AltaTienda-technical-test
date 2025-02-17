'use client'
import { Button } from '@/components/ui/button/button'
import { Input } from '@/components/ui/input/input'
import { Loader } from '@/components/ui/loader/loader'
import { Select } from '@/components/ui/select/select'
import { TextArea } from '@/components/ui/textarea/textarea'
import { useEditTask, useGetTaskById } from '@/services/hooks/tasks'
import { priorities } from '@/utils/consts'
import { ChevronLeft, CirclePlus } from 'lucide-react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { type FieldValues, type SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TaskEditSchema } from '@/utils/formsValidators/editTask'
import useGetTags, { useCreateTag } from '@/services/hooks/tags'

export default function TaskEdit() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  const router = useRouter()
  //* UPDATE TASK MUTATION */
  const updateTask = useEditTask()
  const createTag = useCreateTag()

  //* FORM-HOOK CONFIG */
  const {
    register,
    handleSubmit,
    setValue,
    // watch,
    formState: { errors }
  } = useForm<Partial<FormDataCreate>>({
    resolver: zodResolver(TaskEditSchema), //* Activamos las validaciones con zod */
    mode: 'onChange' //* Activamos el formulario dinamico */
  })
  //* Traemos la informacion de las task */
  if (!id) return <p className="bg-red-500">Task no encontrada</p>
  const {
    data: task,
    isLoading,
    isError
  } = useGetTaskById({
    id
  })
  //* Traemos la informacion de los tags */
  const {
    data: tags,
    isLoading: isLoadingTags,
    isError: isErrorTags
  } = useGetTags()

  //* Mostramos el loader si esta cargando alguna de las request */
  if (
    isLoading ||
    !task ||
    isLoadingTags ||
    !tags ||
    createTag.isPending ||
    updateTask.isPending
  ) {
    return <Loader />
  }

  //* Mostramos el error en caso de que se de */
  if (isError || isErrorTags) return <>Ocurrio un error</>

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    await updateTask
      .mutateAsync({
        id,
        body: data
      })
      .then(async () => {
        router.push('/')
      })
      .catch(() => {
        alert('Ocurrio un error...')
      })
  }

  const handlerAddTag = async () => {
    const value = prompt('Write the new tag !')
    if (!value) {
      alert('El valor no debe ser nulo')
      return
    }
    await createTag.mutateAsync({
      body: {
        title: value,
        value
      }
    })
  }

  return (
    <div className="py-10 flex flex-col p-5 pt-20 gap-2 justify-center items-center">
      <h3 className="font-extrabold text-3xl text-center text-white ">
        Edit your task
      </h3>

      <Link href={'/'}>
        <ChevronLeft color="white" className="fixed left-10 top-10" />
      </Link>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex justify-center items-center flex-col gap-5"
      >
        <Input
          title="Title"
          placeholder='Title'
          defaultValue={task.title}
          {...register('title', { required: true })}
          error={errors.title?.message}
        />

        <Select<Priority>
          title="Priority"
          defaultValue={task.priority}
          onItemClick={(value) => {
            setValue('priority', value)
          }}
          items={priorities}
          {...register('priority', { required: 'This field is required' })}
          error={errors.priority?.message}
        />
        <div className="w-full  flex flex-row justify-start items-center gap-2 relative">
          <Select
            title="Tag"
            defaultValue={task.tag}
            defaultChecked={true}
            onItemClick={(value) => {
              setValue('tag', value)
            }}
            items={[...tags, { title: 'None', value: '' }]}
            {...register('tag')}
            error={errors.tag?.message}
            className="w-[85%] "
          />
          <Button
            onClick={handlerAddTag}
            variant={'default'}
            size={'icon'}
            className=" right-0 top-6 absolute"
            type="button"
          >
            <CirclePlus
              color="white"
              style={{
                width: 30,
                height: 20
              }}
            />
          </Button>
        </div>
        <TextArea
          title="Description"
          placeholder='Description'
          defaultValue={task.description}
          {...register('description')}
          error={errors.description?.message}
        />
        <Button type="submit">Edit</Button>
      </form>
    </div>
  )
}
