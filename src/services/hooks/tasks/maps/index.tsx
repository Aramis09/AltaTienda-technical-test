//* useGetTasksMap */

export const mapGetTasks = (apiResponse: Task[]) => apiResponse.map((task) => ({
  id: task.id ?? undefined,
  title: task.title ?? undefined,
  description: task.description ?? undefined,
  priority: task.priority as Priority, // Aseguramos el tipo aquí
  tag: task.tag ?? undefined // Convertimos undefined explícitamente
}))
