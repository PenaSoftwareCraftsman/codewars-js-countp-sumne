const {countPositivesSumNegatives} = require('./../src/index');

describe("countPositivesSumNegatives", ()=>{
    it('Should return a empty array if the input is null', () => {
        expect(countPositivesSumNegatives(null)).toStrictEqual([]);
    });

    it('Should return an empty array if the input is empty', () => {
        expect(countPositivesSumNegatives(null)).toStrictEqual([]);
    });

    it('Should return [2] when the input is [1, 1]', () => {
        expect(countPositivesSumNegatives([1, 1])).toStrictEqual([2]);
    });
})