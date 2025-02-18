import { UserDetail } from "../model/UserModel"

export const mockUserDetailData: UserDetail [] = [
    {
        username: 'john@doe.com',
        password: 'pass123',
        personalDetail: {
            name: 'John Doe',
            email: 'john@doe.com',
            id: 1,
            mobile: '+63840389',
            address: 'John Street Horizon City',
            imgUrl: 'face.jpg',
            job: 'Software Developer',
            gender: 'male',
            age: 30,
            civil: 'married',
            birthdate: 'December 2, 1994',
            blood: 'B-'
        }
    },
    {
        username: 'max@gmail.com',
        password: 'max123',
        personalDetail: {
            name: 'Max Darwin',
            email: 'max@gmail.com',
            id: 2,
            mobile: '+63380937',
            address: 'New York City',
            imgUrl: 'person-1.jpg',
            job: 'Software Developer',
            gender: 'male',
            age: 35,
            civil: 'married',
            birthdate: 'July 5, 1989',
            blood: 'A-'
        }
    },
    {
        username: 'melissa@email.com',
        password: 'melissa123',
        personalDetail: {
            name: 'Melissa White',
            email: 'melissa@email.com',
            id: 3,
            mobile: '+63435752',
            address: "Borge's Town",
            imgUrl: 'person-2.jpg',
            job: 'Flight Attendant',
            gender: 'female',
            age: 26,
            civil: 'single',
            birthdate: 'January 8, 1999',
            blood: 'AB+'
        }
    },
    {
        username: 'zack@google.com',
        password: 'zack123',
        personalDetail: {
            name: 'Zack Biden',
            email: 'zack@google.com',
            id: 4,
            mobile: '+6337847',
            address: 'Washington DC',
            imgUrl: 'person-3.jpg',
            job: 'Singer',
            gender: 'male',
            age: 28,
            civil: 'single',
            birthdate: 'August 27, 1996',
            blood: 'A+'
        }
    },
    {
        username: 'kim@june.com',
        password: '1',
        personalDetail : {
            name: 'Kim June Ariza',
            email: 'kim@june.com',
            id: 5,
            mobile: '+631222554',
            address: 'Brgy. Hall',
            imgUrl: 'kim.png',
            job: 'Jobless',
            gender: 'male',
            age: 20,
            civil: 'single',
            birthdate: 'June 26, 2004',
            blood: 'A+'
        }
    
    }
]