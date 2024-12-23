type Priority = 'High' | 'Medium' | 'Low'

interface Task {
  id: string | number
  title: string
  description?: string
  priority: Priority
  tag?: string
}

//! Interfaces to create a task
interface FormDataCreate extends Omit<Task, 'id'> { }

interface Tag {
  id: string
  title: string
  value: string
}
