export interface UserData {
  userID: number,
  userUsername: string,
  name: string,
  email?: string,
  password?: string,
  img?: string,
  google?: boolean,
  role?: 'ADMIN ROLE' | 'USER_ROLE',
}

