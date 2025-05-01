export interface IUser {
  firstName: string | null,
  lastName: string | null,
  middleName: string | null,
  username: string | null,
  avatar: string | null,
  role: string | null,
}

export interface IAuthentication {
  token: string | null,
  expiresIn: number | null,
  isAuth: boolean
}

export class UserUpdate {
  static readonly type = '[User]: Updated'
  constructor(public payload: IUser) {}
}

export class AuthenticationUpdate {
  static readonly type = '[Authentication]: Updated'
  constructor(public payload: IAuthentication) {}
}
