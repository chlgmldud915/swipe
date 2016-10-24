let arr = [1, 2, 3, 4, 5]
let obj = {
  'x':1,
  'y':2
} // 연관 배열(map, table), Dictionary
let str = "abc"// 리터럴 literal

console.log(arr)
console.log(obj)
console.log(str)

// for (var variable in arr) {
//   if (arr.hasOwnProperty(variable)) {
//     console.log(variable)
//   }
// }
//
// for (var variable in obj) {
//   if (obj.hasOwnProperty(variable)) {
//     console.log(variable)
//     obj[variable]
//   }
// }

for (variable of arr) {
  console.log(variable)
}

// function varTest() {
//   var x = 1 //원래 x
//   if(true) {
//     var x = 2 //x가 같은값!!
//     console.log(x) // 2
//   }
//   console.log(x) // 2
// }
//
// function letTest() {
//   let x = 1 // 원래 값
//   if(true) {
//     let x = 2 // 같은 값 아님!
//     console.log(x) // 2
//   }
//   console.log(x) // 1
// }
//
// varTest()
// letTest()
