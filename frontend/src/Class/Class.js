export class nUser {
    constructor(pseudo = '', email = '' ,password = '' , confirmPassword = '') {
        this.pseudo = pseudo ;
        this.email = email ;
        this.password= password ;
        this.confirmPassword = confirmPassword;
    }
}

export class Client {
    constructor(email= '', password = ''){
        this.email = email;
        this.password = password
    }
}