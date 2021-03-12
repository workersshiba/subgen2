/**
 * Update KV with subscriptions
 */

target = ['clash', 'v2ray']

async function updateSub() {
  await SubGen.put("clash", `# Updated @ ${new Date()}`)
  
  return "Sucess!"
}

module.exports = updateSub