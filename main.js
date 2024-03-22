// ANSWER 1
let one = "aaa@bbb@ccc"
let answerone = one.replace(/@/g, "!")

console.log("Ответь  :", answerone);


// ANSWER 2
let two = "HELLOWORLD"
let sliceosv = two.slice(0,10)
let lower = sliceosv.toLowerCase()
let nuull = ""
let slice1 = two.slice(0,1)
let slice2 = lower.slice(1,4)
let slice3 = lower.slice(4,5)
let plus = slice3.concat(" ")
let slice4 = lower.slice(5,10)
let answertwo = nuull.concat(slice1, slice2, plus, slice4)

console.log("Ответь  :", answertwo);


// ANSWER 3
let tree = "Hello, it is HTML"
let nuull2 = ""
let txt = "not JS"
let slice5 = tree.slice(0,5)
let slice6 = tree.slice(6,13)
let answertree = nuull2.concat(slice5, slice6, txt)

console.log("Ответь  :", answertree);


// ANSWER 4
let four = "alex"
let nuull3 = ""
let first = four.slice(0,1)
let second = four.slice(1,4)
let upper = first.toUpperCase()
let answerfour = nuull3.concat(upper, second)

console.log("Ответь  :", answerfour);


// ANSWER 5 
let five = "Lex Luter has a big suit"
let nuull4 = ""
let letter1 = five.slice(11,12)
let big = letter1.toUpperCase()
let letter2 = five.slice(0,1)
let letter3 = five.slice(1,2)
let letter4 = five.slice(2,3)
let answerfive = nuull4.concat(big, letter2, letter3, letter4)

console.log("Ответь  :", answerfive);