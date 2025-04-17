export interface ITodo{
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export function toITodo(data: any): ITodo{
  return {
    userId: data.userId,
    id: data.id,
    title: data.title,
    completed: data.completed
  }
}
