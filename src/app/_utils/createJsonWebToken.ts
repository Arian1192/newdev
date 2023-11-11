import jwt from 'jsonwebtoken'

export function createJsonWebToken(payload: string | object): string {
    const secret = process.env.NEXTAUTH_SECRET!
    const token = jwt.sign(payload, secret, {
        expiresIn: 60 * 60 * 24 // 1 day
    })
    return token
}