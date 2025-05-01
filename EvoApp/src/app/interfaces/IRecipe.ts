export interface IRecipe{
  id: string
  body: string,
  title: string,
  tags: string[],
  image: string,
  timeCooking: number,
  author: IAuthor,
  createdOn: string,
  updatedOn: string
}

export interface IAuthor {
  id: string,
  avatar: string,
  firstName: string,
  lastName: string,
  middleName: string
}


export function toRecipe(data: any): IRecipe {
  return {
    id: data.id,
    body: data.body,
    title: data.title,
    tags: data.tags,
    image: data.image,
    timeCooking: data.timeCooking,
    author: toAuthor(data.author),
    createdOn: data.createdOn,
    updatedOn: data.updatedOn
  }
}


export function toAuthor(data: any): IAuthor {
  return {
    id: data.id,
    avatar: data.avatar,
    firstName: data.firstName,
    lastName: data.lastName,
    middleName: data.middleName
  }
}
