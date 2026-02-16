type robot = {
    id: number,
    first_name: string,
    last_name: string,
    avatar: string,
    date_of_birth: string,
    age: number,
    gender: string,
    email: string,
    Phone: string,
    location: {
        country: string,
        city: string,
        postal_code: number
    },
    user: {
        username: string,
        password: string,
        userid: string
    },
}