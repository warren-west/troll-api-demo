const request = require('supertest')
const app = require('../src/app')

describe('API Health is OK', () => {
    // test the /health endpoint
    test('Health endpoint responds with a 200, OK', async () => {
        // AAA (Arrange, Act, Assert)
        // Arrange
        const expectedStatusCode = 200
        const expectedStatusText = 'ok'
        
        // Act
        const response = await request(app).get('/health')

        console.log('RESPONSE 📶')
        console.log(response.body)
        
        // Assert
        expect(response.statusCode).toBe(expectedStatusCode)
        expect(response.body.uptime).not.toBeNull()
        expect(response.body.nodeVersion).not.toBeNull()
        expect(response.body.timestamp).not.toBeNull()
        expect(response.body.status).toBe(expectedStatusText)
        expect(response.body.secretMessage).not.toBeNull()
    })
    
    // test the / (index) endpoint
    test('Index endpoint responds with a 200, OK', async () => {
        // AAA (Arrange, Act, Assert)
        // Arrange
        const expectedStatusCode = 200
        const message = 'Welcome to the Troll API!'
        
        // Act
        const response = await request(app).get('/')

        // Assert
        expect(response.statusCode).toBe(expectedStatusCode)
        expect(response.body.message).toBe(message)
    })
})