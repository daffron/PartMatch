import request from 'superagent'

export function apiSearchSell (cb) {
  request.get('/api/searchsell/')
    .end((err, res) => {
      if (err) {
        cb(err.message)
        return
      }
      const result = res.body
      cb(null, result)
    })
}

export function apiSearchWanted (cb) {
  request.get('/api/searchwanted/')
    .end((err, res) => {
      if (err) {
        cb(err.message)
        return
      }
      const result = res.body
      cb(null, result)
    })
}

export function apiGetWantedListing (id, cb) {
  request.get('/api/searchwanted/')
     .end((err, res) => {
       if (err) {
         cb(err.message)
         return
       }
       const result = res.body
       let listing
       result.result.find((eachListing => {
         if (eachListing._id === id) {
           listing = eachListing
         }
       }))
       cb(null, listing)
     })
}

export function apiGetSellListing (id, cb) {
  request.get('/api/searchsell/')
     .end((err, res) => {
       if (err) {
         cb(err.message)
         return
       }
       const result = res.body
       let listing
       result.result.find((eachListing => {
         if (eachListing._id === id) {
           listing = eachListing
         }
       }))
       cb(null, listing)
     })
}

export function apiNewForSale (obj) {
  console.log(obj)
  request.post('/api/newlisting/')
    .send(obj)
    .end((err, res) => {
      if (err) console.log(err)
      console.log(res)
    })
}

export function apiDeleteListing (id) {
  request.del(`/api/deletelisting/${id}`)
    .then(data => {
      const returnedPost = data
      console.log(returnedPost)
      return returnedPost
    })
  .catch(err => {
    console.error(err)
  })
}

export function apiMakeSold (userId, listingId) {
  return request.put(`/api/makelistingsold/${userId}`)
  .send(listingId)
  .then(data => {
    return data.body
  })
  .catch(err => {
    console.log(err.message)
  })
}

export function apiFindUserBought (userId, cb) {
  request.get(`/api/searchbought/${userId}`)
    .end((err, res) => {
      if (err) {
        cb(err.message)
        return
      }
      const result = res.body
      cb(null, result)
    })
}
