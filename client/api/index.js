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

export function apiGetWantedListing(id, cb){
       request.get('/api/searchwanted/')
     .end((err, res) => {
        if (err) {
            cb(err.message)
            return
        }
        const result = res.body
        let listing
        result.result.find((item => {
            if (item._id === id){
                listing = item
            }
        }))
        cb(null, listing)
     })

}

export function apiGetSellListing(id, cb){
     request.get('/api/searchsell/')
     .end((err, res) => {
        if (err) {
            cb(err.message)
            return
        }
        const result = res.body
        let listing
        result.result.find((item => {
            if (item._id === id){
                listing = item
            }
        }))
        cb(null, listing)
     })

}

export function apiNewForSale (obj){
    console.log(obj)
    request.post('/api/newlisting/')
    .send({test: 'tested'})
    .end(( err, res) => {
        if (err) console.log(err)
        console.log(res)
    })
}