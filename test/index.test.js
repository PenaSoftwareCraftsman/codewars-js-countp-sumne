const {countPositivesSumNegatives} = require('./../src/index');

describe("countPositivesSumNegatives", ()=>{
    it('Should return a empty array if the input is null', () => {
        expect(countPositivesSumNegatives(null)).toStrictEqual([]);
    });
})