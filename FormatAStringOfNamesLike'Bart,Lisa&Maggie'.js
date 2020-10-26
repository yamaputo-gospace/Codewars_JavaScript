function list(names){
    let newArr = []
    for(i = 0 ; i < names.length; i++){
        newArr[i] = names[i].name
    }
    let output = ''
    for(i = 0 ; i < newArr.length; i++){
        if(i == newArr.length -2) {
            output += newArr[i] + ' & '
        }else if(i == newArr.length -1){
            output += newArr[i]
        }else{
            output += newArr[i] + ', '
        }
    }
    return output

}

list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}])