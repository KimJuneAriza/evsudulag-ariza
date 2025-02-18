export interface UserDetail {
    username: string;
    password: string;
    personalDetail: {
        name: string;
        email: string;
        id: number;
        mobile: string;
        address: string;
        imgUrl: string;
    }
    
}

export interface UserLoginModel {
    password: string;
    username: string;
}