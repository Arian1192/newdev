/**
 * @jest-environment node
 */
import { GET } from '../src/app/api/user/get-users/route'

describe('GET /api/user', () => {
    it('should return 200', async () => {
        const response = await GET()
        expect(response.status).toBe(200)
    })
})