/** gatherResponse awaits and returns a response body as a string.
 * Use await gatherResponse(..) in an async function to get the response body
 * @param {Response} response
 */
async function gatherResponse(response) {
  const { headers } = response
  const contentType = headers.get('content-type')
  if (contentType.includes('application/json')) {
    return await response.json()
  } else if (contentType.includes('application/text')) {
    return await response.text()
  } else if (contentType.includes('text/html')) {
    return await response.text()
  } else {
    return await response.text()
  }
}

/**
 * Get the content from url
 * Usage:
 * http_get = require('./http_get.js')
 * const result = http_get(url)
 * @param {*} url 
 * @returns content of the url 
 */
async function http_get(url) {
  try {
    const result = await fetch(url)
    const response = await gatherResponse(result)
    const { headers } = result.headers

  
    return response
  }
  catch (error) {
    console.error(error)
    
  }
}

module.exports = http_get