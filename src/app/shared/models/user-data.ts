export interface UserData {
  user_id: string,
  user_username: string,
  name: string,
  email?: string,
  password?: string,
  img: string,
  status?: 'active' | 'inactive',
  google?: boolean,
  role?: 'admin' | 'user'
}

