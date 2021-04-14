const Router = require('./router')
const updateSub = require('./updateSub')
const getSub = require('./getSub')

/**
 * Example of how router can be used in an application
 *  */
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event))
})

addEventListener("scheduled", event => {
    // event.waitUntil(handleScheduled(event))
    event.waitUntil(updateSub(event))
})
  
// async function handleScheduled(event) {
//     return await updateSub(event)
//     // return updateSub()
// }

// async function updateSub(event) {
//     let body = `# Updated at ${new Date()}\n`

//     if (event.type == 'scheduled') {
//         body += `# Updated by Cron trigger ${new Date(event.scheduledTime)}\n`
//     } else {
//         body += `Manual trigger ${new Date()}\n`
//     }
    
//     target= 'clash'
//     // await SubGen.put(target, `# Updated @ ${new Date()}`)

    
//     await SubGen.put(target, body)
    
    
//     // return "Sucess!"
//     // const result = await SubGen.get(target)
//     return new Response(body, {
//         headers: {
//             'content-type': 'text/plain'
//         }
//     })
// }


// function handler(request) {
//     const init = {
//         headers: { 'content-type': 'application/json' },
//     }
//     const body = JSON.stringify({ some: 'json' })
//     return new Response(body, init)
// }


async function handleRequest(event) {
    const request = event.request
    const r = new Router()
    // Replace with the appropriate paths and handlers
    // r.get('.*/bar', () => new Response('responding for /bar'))
    // r.get('.*/foo', request => handler(request))
    // r.post('.*/foo.*', request => handler(request))
    // r.get('/demos/router/foo', request => fetch(request)) // return the response from the origin

    r.get('/', () => new Response('Hello worker!')) // return a default message for the root route
    // r.get('/', event => updateSub(event))
    // r.get('.*/update', () => Promise.resolve(JSON.stringify(updateSub(event))))
    r.get('.*/update', event => updateSub(event))
    r.get('.*/link/.*', request => getSub(request))

    const resp = await r.route(request)
    return resp
}
