/**
 * @jest-environment node
 */
import { NextRequest } from 'next/server'
import { POST } from '../src/app/api/sign-up/route'

describe('POST /api/sign-up', () => {

    const user = {
        name: 'test',
        email: 'test@test.com',
        password: 'test'
    }

    var mockRequest = {
        json: jest.fn().mockResolvedValue(user),
    } as unknown as NextRequest


    it('should create a new user', async () => {
        const response = await POST(mockRequest)
        console.log(response)
        expect(response.status).toBe(201)
    })

    it('should return 400 if the user already exists', async () => {
        const response = await POST(mockRequest)
        expect(response.status).toBe(400)
    })
})

