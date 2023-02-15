import { apiService } from '../ApiService';
const { describe, test, expect } = require('@jest/globals');

describe('ApiService', () => {


    test('getSales should return an array of sales', async () => {
        const sales = await apiService.getSales();
        expect(Array.isArray(sales)).toBe(true);
    });

    test('getItems should return an array of items', async () => {
        const items = await apiService.getItems();
        expect(Array.isArray(items)).toBe(true);
    });

    test('saveToDb should return the saved sale object', async () => {
        const sale = {
            "id": Date.now(),
            "title": "MY TITLE",
            "description": "MY DESCRIPTION"
        }
        const savedSale = await apiService.saveToDb(sale);
        expect(savedSale).toHaveProperty('id');
        expect(savedSale).toHaveProperty('title');
        expect(savedSale).toHaveProperty('description');
        expect(savedSale).toMatchObject(sale);
    });

});
