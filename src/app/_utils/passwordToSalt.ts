import bcrypt from 'bcryptjs'

export const passwordToSalt = (password: string) => {
    try {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        return hash
    } catch (error) {
        throw new Error("Error generating Salt for password")
    }
}