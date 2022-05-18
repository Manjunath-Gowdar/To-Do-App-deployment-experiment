import bcrypt from 'bcryptjs'

const users = [
    {
    name: 'manjunath',
    email: 'manjunath@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'ashok',
    email: 'ashok@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users