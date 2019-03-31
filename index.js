
const arrayOperations = require('./src/arrayOperations/');
const groupArrayElements  = arrayOperations.groupArrayElements;

var array = [1,2,3,4,5,6];
console.log("%j",(groupArrayElements(array, 3)));