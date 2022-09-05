const { template } = require('@babel/core')

function concatArray(array1, array2) {
  let str  = []
  str = str.concat(array1,array2)
  
  for(i=1;i<str.length;i++){
    if(str[i-1] === null||str[i-1] === undefined&&str[i] === null||str[i] === undefined){
      return undefined
    }else if(str[i-1] === null||str[i-1] === undefined&&(str[i] !== null&&str[i] !== undefined)){
      return array2
    }else if(str[i-1] !== "" && (str[str.length-1] !== null &&str[str.length-1] !== undefined))  {
      return str
    }else{return array1} }
    str = array1.concat(array2)
  return str
}

console.log(concatArray([2, 4, 6, 7], null))
module.exports = concatArray
