/**
 * Update KV with subscriptions
 * KV Namespace: SubGen
 */

const http_get = require('./http_get.js')
const target = ['clash', 'v2ray']


async function updateSub(event) {
  // Content to return
  let body = `# Updated at ${new Date()}\n`

  if (event.type == 'scheduled') {
      body += `# Updated by Cron trigger ${new Date(event.scheduledTime)}\n`
  } else {
      body += `Manual trigger ${new Date()}\n`
  }
  
  target= 'clash'
  // await SubGen.put(target, `# Updated @ ${new Date()}`)

  
  await SubGen.put(target, body)
  

  // return new Response(body, {
  //     headers: {
  //         'content-type': 'text/plain'
  //     }
  // })
  return true
}

module.exports = updateSub