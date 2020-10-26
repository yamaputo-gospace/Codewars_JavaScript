function sumTwoSmallestNumbers(numbers) {  
    numbers.sort(function(a, b) {
        return a - b;
    });
    return numbers[0] + numbers[1]
    
}

sumTwoSmallestNumbers([5, 8, 12, 19, 22])