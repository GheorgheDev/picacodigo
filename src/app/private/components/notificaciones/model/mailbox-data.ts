export interface MailBoxData {
  username?: string;
  message_id: string,
  user_from_id: string,
  user_to_id: string,
  content: string,
  date: Date,
  read: boolean
}

/* cambiar from y to a fromID y toID : number */