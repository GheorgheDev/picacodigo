export interface UserData {
  userID: string,
  userUsername: string,
  name: string,
  email?: string,
  password?: string,
  img?: string,
  status?: 'active' | 'inactive',
  google?: boolean,
  role?: 'admin' | 'user'
}

