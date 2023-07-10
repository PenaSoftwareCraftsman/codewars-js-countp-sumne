const countPositivesSumNegatives = (input) => {
    let result = [];

    let countPositives = 0; 

    if(input === [] || input === null)
        return result;
    else
    {  
        for(let number in input){
            countPositives++;
        }
    }

    result.push(countPositives);
    return result;
}

module.exports = {
    countPositivesSumNegatives
}