const Router = require('./router')
const updateSub = require('./updateSub')
const getSub = require('./getSub')

/**
 * Example of how router can be used in an application
 *  */
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

addEventListener("scheduled", event => {
    event.waitUntil(handleScheduled(event))
})
  
async function handleScheduled(event) {
    return await updateSub()
}


// function handler(request) {
//     const init = {
//         headers: { 'content-type': 'application/json' },
//     }
//     const body = JSON.stringify({ some: 'json' })
//     return new Response(body, init)
// }


async function handleRequest(request) {
    const r = new Router()
    // Replace with the appropriate paths and handlers
    // r.get('.*/bar', () => new Response('responding for /bar'))
    // r.get('.*/foo', request => handler(request))
    // r.post('.*/foo.*', request => handler(request))
    // r.get('/demos/router/foo', request => fetch(request)) // return the response from the origin

    r.get('/', () => new Response('Hello worker!')) // return a default message for the root route
    
    r.get('.*/update', () => new Response(Promise.resolve(updateSub())))
    r.get('.*/link/.*', request => getSub(request))

    const resp = await r.route(request)
    return resp
}
