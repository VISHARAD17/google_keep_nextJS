
import bcrypt from 'bcrypt'

export const comparePasswords = async (password:string, userPassword:string) => {
    return bcrypt.compare(password, userPassword);
}
