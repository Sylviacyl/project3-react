export default function efetchAPI(path, options) {
    return fetch(process.env.SEND_EMAIL_API_URL + path, options)
      .then(response => {
        // Successful
        if (response.ok) {
          // Decode JSON
          return response.json()
        }
        // Error
        else {
          // Client error
          if (response.status >= 400 && response.status < 500) {
            return response.json()
            .then(json => {
              return Promise.reject(json)
            })
          }
          // Server error or redirect
          else {
            // Reject with entire response
            return Promise.reject(response)
          }
        }
      })
}
"Authorization: Bearer YOUR_API_KEY"

const sendheader = 'Authorization: Bearer' + process.env.SEND_EMAIL_HEADER

export function epostAPI(process.env.SEND_EMAIL_API_URL, bodyJSON) {
  return fetchAPI(path, {
      method: 'POST',
      headers: { {sendheader}
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyJSON)
  })
}

export function patchAPI(path, bodyJSON) {
  return fetchAPI(path, {
      method: 'PATCH',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyJSON)
  })
}
