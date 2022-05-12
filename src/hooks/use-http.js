import { useEffect, useRef, useState } from 'react'
const useHttp = (url) => {
  const [dataArray, setDataArray] = useState([])
  const isFirstRunRef = useRef(false)

  useEffect(() => {
    if (isFirstRunRef.current === false) {
      isFirstRunRef.current = true

      fetch(url)
        .then((res) => res.json())
        .then((data) => setDataArray(data))
    }
  }, [url])

  return dataArray
}

export default useHttp
