var array = [
    1, 
    "uma", 
    true, 
    null, 
    undefined, 
    function(name){
        return name;
    },
    {name:'uma'},
    ["red","green","blue"]
]
console.log(array[6].name)
console.log(array[5](array[6].name))