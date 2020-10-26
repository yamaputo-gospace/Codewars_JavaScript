function findShort(s){
    let sArr = s.split(' ')
    let cnt = sArr[0].length
    for(let i = 1 ; i < sArr.length ; i++){
        if(cnt > sArr[i].length){
        cnt = sArr[i].length
        }
    }
    return cnt
}
  
findShort("bitcoin take over the world maybe who knows perhaps")