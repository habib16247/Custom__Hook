import React, { useEffect, useState } from 'react'

const HookFetch = (url) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  useEffect(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error("Couldn\'t get data from webAPI resource!!!")
        }
        return response.json()
      })
      .then(data => setData(data))
      .catch(error => setError(error.message))
  }, [url])

  return {data, error}
}

export default HookFetch