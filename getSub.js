/**
 * get the content of subscription from KV
 * @param {*} request 
 * @returns Content of the KV 
 */
async function getSub(request) {
  const init = {
    headers: {
      'encode': 'utf-8',
      'content-encoding': 'gzip'
    }
  }
  // Last part of the url is the key
  const target = request.url.split('/link/').pop()
  
  // Get from SubGen KV
  const body = await SubGen.get(target)
  
  return new Response(body, init)
}


module.exports = getSub