export interface Message {
   /*  mail_to: string,
    message_text: string, */
    content: string;
    date: Date;
    user_from_id: string;
    user_to_id: string;
    read: number;
}