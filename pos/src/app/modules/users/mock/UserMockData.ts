import { UserDetail } from "../model/UserModel"

export const mockUserDetailData: UserDetail [] = [
    {
        username: 'john@doe.com',
        password: 'pass123',
        personalDetail: {
            name: 'John Doe',
            email: 'john@doe.com',
            id: 1,
            mobile: '+631222554',
            address: 'John Street Horizon City',
            imgUrl: 'kim.png'
        }
    },
    {
        username: 'kim@june.com',
        password: 'pass1234',
        personalDetail : {
            name: 'Kim June',
            email: 'kim@june.com',
            id: 2,
            mobile: '+631222554',
            address: 'Brgy. Hall',
            imgUrl: 'kim.png'
        }
    
    }
]