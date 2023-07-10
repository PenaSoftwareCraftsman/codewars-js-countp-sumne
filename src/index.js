const countPositivesSumNegatives = (input) => {
    let result = [];

    let counterOfPositives = 0;
    let sumNegatives = 0;

    if(input === [] || input === null){
        result = prepareResponse(counterOfPositives, sumNegatives);
        return result;
    }
    else
    {  
        for(let number of input){
            if(number > 0)
                counterOfPositives++
            else
                sumNegatives += number;
        }
    }

    result = prepareResponse(counterOfPositives, sumNegatives);
    return result;
}

let prepareResponse = (counterOfPositives, sumNegatives) => {
    let response = [];
    response.push(counterOfPositives);
    response.push(sumNegatives);
    return response;
}

module.exports = {
    countPositivesSumNegatives
}