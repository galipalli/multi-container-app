const mongoose = require('mongoose');
const { mongoProdURI } = require('../config/keys');

describe('Health Checks', () => {
    test('MongoDB Connection', async () => {
        try {
            await mongoose.connect(mongoProdURI);
            expect(mongoose.connection.readyState).toBe(1);
            await mongoose.connection.close();
        } catch (error) {
            throw error;
        }
    });
}); 