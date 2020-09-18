var items1 = ["chair", "bench", "pad", "laptop"]
console.log(items1)

var items2 = items1.map(function(item){
    return item + ' is mapped'
})

console.log(items2)

var items3 = [];

items1.forEach(function(item){
    items3.push(item + ' is mapped');
})

console.log(items3)
