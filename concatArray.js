const { template } = require('@babel/core')

function concatArray(array1, array2) {
  let str  = []
  str = str.concat(array1,array2)
  
  if(str[0]=== undefined&&str[str.length-1]===undefined){
    return array1
  }else if(str[0] === null||str[0] === undefined&&str[str.length-1] === null||str[str.length-1] === undefined){
    return undefined
  }else if((str[0] === null||str[0] === undefined)||(str[0] === "")&&(str[str.length-1] !== null&&str[str.length-1] !== undefined)){
    return array2
  }else if((str[0] !== null&&str[0] !== undefined)&&(str[str.length-1] === null||str[str.length-1] === undefined)||(str[str.length-1] === ""))  {
    return array1
  }else{
    return str = array1.concat(array2)
  }
}

console.log(concatArray([],[] ))
module.exports = concatArray
