module.exports = {
    findAd
}

function findAd (database, keyword) {
    let arr = new Array
    database.find((result) => {
        if (result.title.includes(keyword) || result.description.includes(keyword) || result.keywords.includes(keyword)) {
            arr.push(result)
        }
    return arr    
    })
}