export class User {
    id: string;
    name: string;
    email: string;
    password?: string;
    role: 'admin' | 'user';
    constructor(id: string, name: string, email: string, password: string, role: 'user' | 'admin') {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
    }
}