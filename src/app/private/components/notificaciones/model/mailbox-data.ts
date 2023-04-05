export interface MailBoxData {
  username?: string;
  message_id: string,
  user_from_id: string,
  user_to_id: string,
  content: string,
  date: Date,
  read: boolean
}

export interface MailBoxDataDB {
  message_id: string,
  user_from_id: string,
  user_to_id: string,
  content: string,
  date: Date,
  read: number
}

export type NewMailBoxDataDB = Omit<MailBoxDataDB, 'message_id'>

/* cambiar from y to a fromID y toID : number */