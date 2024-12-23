import { Priority } from '@/interfaces/enums'
import { z, type ZodType } from 'zod'

export const TaskEditSchema: ZodType<Partial<FormDataCreate>> = z
  .object({
    title: z.string().max(40).min(1, 'Title is required').max(40).optional(),
    priority: z.enum([Priority.High, Priority.Medium, Priority.Low]).optional(),
    tag: z.string().max(20).optional(),
    description: z.string().max(200).optional()
  })
// @ts-expect-error Zod no me deja forma poner como requerido al title y priority, entonces choca con FormDataCreate
export const TaskCreateSchema: ZodType<FormDataCreate> = z
  .object({
    title: z.string().max(40).min(1, 'Title is required').max(40),
    priority: z.enum([Priority.High, Priority.Medium, Priority.Low]),
    tag: z.string().max(20).optional(),
    description: z.string().max(200).optional()
  })
