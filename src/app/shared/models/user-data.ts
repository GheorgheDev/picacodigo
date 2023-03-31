export interface UserData {
  user_id: string,
  username: string,
  fullname: string,
  password?: string,
  birthdate?: Date,
  email?: string,
  phone?: string,
  login?: boolean,
  rol?: 'admin' | 'user' | 'guest',
  picture: string,
  status?: 'active' | 'inactive',
}