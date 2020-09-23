try {
    //throw "There are duplicate records"
    throw new Error('This will throw error')
}
catch (ex){
    console.log(ex)
}

try {
    throw {
        id: 16,
        message: "Id can't be duplicated"
    }
}
catch (ex){
    console.log(ex.id)
    console.log(ex.message)
}