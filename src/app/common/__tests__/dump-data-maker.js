import {ArrayMaker, NUMBER, PARAGRAPH} from '../Utils/dump-data-maker';

describe('verify generated dump data', () => {
    it('should return correct amount of array', () => {
        ArrayMaker.addElement('productId', NUMBER)
        expect(ArrayMaker.get(2).length).toEqual(2);
    })

    it('should return valid array', () => {
        ArrayMaker.addElement('productId', NUMBER);
        ArrayMaker.addElement('name', PARAGRAPH);
        const product = ArrayMaker.get(2).pop();

        expect(product).toHaveProperty('productId');
        expect(product).toHaveProperty('name');
    })
})