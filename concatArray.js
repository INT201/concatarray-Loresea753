const { template } = require('@babel/core')

function concatArray(array1, array2) {
  let str  = []
  str = array1.concat(array2)
  
  for(i=1;i<str.length;i++){
    if(str[i-1] === null||str[i-1] === undefined&&str[i] === null||str[i] === undefined){
      return undefined
    }else if(str[i-1] === null||str[i-1] === undefined&&str[i] !== null&&str[i] !== undefined){
      return array2
    }else if(str[i-1] !== "")  {
      return str
    }else{return array1} }
  return str
}

console.log(concatArray([5, 10, 15], [2, 4, 6, 7]))
module.exports = concatArray
