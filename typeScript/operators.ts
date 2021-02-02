import { type } from "os";

interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person

let key: PersonKeys = 'age' //or 'name'
// key = 'weight' //or 'name'

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // 'name | 'email'
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> 
