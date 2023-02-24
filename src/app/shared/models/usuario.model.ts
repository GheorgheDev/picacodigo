
export class Usuario {

    constructor(
        public nombre: string,
        public email: string,
        public password?: string,
        public img?: string,
        public google?: boolean,
        public role?: 'ADMIN ROLE' | 'USER_ROLE',
        public uid?: string,
    ) {}


}