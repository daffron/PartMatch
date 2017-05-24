import request from 'superagent'

export function apiSearchSell( cb){
    request.get('/api/searchsell/')
    .end((err, res) => {
        if (err) {
            cab(err.message)
            return
        }
        const result = res.body
        cb(null, result)


    })
}

export function apiSearchWanted( cb){
    request.get('/api/searchwanted/')
    .end((err, res) => {
        if (err) {
            cab(err.message)
            return
        }
        const result = res.body
        cb(null, result)


    })
}