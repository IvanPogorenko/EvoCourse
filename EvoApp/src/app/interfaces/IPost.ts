export interface IPost{
  userId: number,
  id: number,
  title: string,
  body: string
}

export function toIPost(data: any): IPost{
  return {
    userId: data.userId,
    id: data.id,
    title: data.title,
    body: data.body
  }
}
