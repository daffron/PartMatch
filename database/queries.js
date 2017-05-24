module.exports = {
    findAd
}

function findAd (database, keyword) {
    let arr = new Array
    // database.find((result) => {
    //     if (result.title.contains(keyword) || result.description.contains(keyword) || result.keywords.conatins(keyword)) {
    //         arr.push(result)
    //     }
    for (let i = 0; i<database.length; i++){
        if(database[i].title.includes(keyword) || database[i].description.includes(keyword) || database[i].keywords.includes(keyword)){
            arr.push(database[i])
        }
    }
        console.log(arr)
    return arr    
    }
