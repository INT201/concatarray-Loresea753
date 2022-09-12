const { template } = require('@babel/core')

// function concatArray(array1, array2) {
//   let str  = []
//   str = str.concat(array1,array2)
  
//   if(str[0]=== undefined&&str[str.length-1]===undefined){ //[],[] 
//     return array1
//   }else if(str[0] === null||str[0] === undefined&&str[str.length-1] === null||str[str.length-1] === undefined){//null,undefined
//     return undefined
//   }else if((str[0] === null||str[0] === undefined)||(str[0] === "")&&(str[str.length-1] !== null&&str[str.length-1] !== undefined)){ //null || undefined,array2
//     return array2
//   }else if((str[0] !== null&&str[0] !== undefined)&&(str[str.length-1] === null||str[str.length-1] === undefined)||(str[str.length-1] === ""))  { // array1,null || undefined
//     return array1
//   }else{// array1, array2
//     return str = array1.concat(array2)
//   }
// }
function concatArray(array1, array2){

  if((array1 === undefined && array2 === undefined) || (array1 === null && array2 === null) ){
    return undefined
  } else if ((array1 === undefined && array2 === null) || (array1 === null && array2 === undefined) ){
    return undefined
  }else{
        let arr1 = []
        arr1 = array1
        let arr2 = []
        arr2 = array2
        if ((array1 === undefined || array1 === null) || arr1.length === 0 && arr2.length !== 0){
          return array2
        }else if (arr1.length !== 0 &&(array2 === undefined || array2 === null)|| arr2.length === 0 ){
          return array1
        }else if(arr1.length === 0 && arr2.length === 0 ){
          return array1
        }else {return arr1.concat(arr2)}
        }
}

console.log(concatArray(undefined, undefined))
module.exports = concatArray
