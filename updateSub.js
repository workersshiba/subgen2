/**
 * Update KV with subscriptions
 * KV Namespace: SubGen
 */

const http_get = require('./http_get.js')
const target = ['clash', 'v2ray', 'ssr', 'quan', 'quanx', 'surfboard']
const CONVERTER_URL = 'https://subcon.dlj.tf/sub'
const SUB_LINKS = [
  'https://nnn3ro.link/link/KXoR4hlVjss8Pg2x?sub=1',
  'https://nnn3ro.link/link/KXoR4hlVjss8Pg2x?sub=2',
  'https://nnn3ro.link/link/2OuLrgmbDhEocFp0?sub=1',
  'https://nnn3ro.link/link/2OuLrgmbDhEocFp0?sub=2'
]

const CONFIG=
function get_sub_url(target) {
  return `${CONVERTER_URL}?target=${target}&url=${SUB_LINKS.join('|')}&config=${config}`
}

async function updateSub(event) {
  // Content to return
  let body = `# Updated at ${new Date()}\n`

  // HEADER
  if (event.type == 'scheduled') {
      body += `# Updated by Cron trigger ${new Date(event.scheduledTime)}\n`
  } else {
      body += `# Manual trigger ${new Date()}\n`
  }
  
  // target = 'clash'
  
  body += await http_get('https://nnn3ro.link/link/KXoR4hlVjss8Pg2x?clash=2&doh=1')
  await SubGen.put(target, body)
  
  return new Response(body, {
      headers: {
          'content-type': 'text/plain'
      }
  })
  // return true
}

module.exports = updateSub