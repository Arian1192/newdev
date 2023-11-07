/**
 * @jest-environment node
 */
// import { GET } from '../src/app/api/user/get-users/route'

// describe('GET /api/user', () => {
//     it('should return 200', async () => {
//         const response = await GET()
//         expect(response.status).toBe(200)
//     })
// })
const { Client } = require("pg");
const { PostgreSqlContainer } = require("@testcontainers/postgresql");
const { GET } = require("../src/app/api/user/get-users/route");


describe("Customer Repository", () => {
    jest.setTimeout(60000);

    let postgresContainer: { getConnectionUri: () => any; stop: () => any; };
    let postgresClient: { connect: () => any; end: () => any; };

    beforeAll(async () => {
        postgresContainer = await new PostgreSqlContainer().start();
        postgresClient = new Client({ connectionString: postgresContainer.getConnectionUri() });
        await postgresClient.connect();
    });

    afterAll(async () => {
        await postgresClient.end();
        await postgresContainer.stop();
    });

    it("should return 200", async () => {
        const response = await GET()
        console.log(response)
        expect(response.status).toBe(200)
    });

});