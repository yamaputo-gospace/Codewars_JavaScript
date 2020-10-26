function arrayDiff(a, b) {
    for(let i = 0; i < b.length; i++){
        for(let j = 0; j < a.length; j++){
            if(b[i] === a[j]){
                delete a[j]
            }
        }
    }
    let result = a.filter( function(value) {
//         if(toString(value).length >= 0){
//             return value
//         }
        return toString(value).length >= 0
    })
    return result
}

arrayDiff([], [4,5])