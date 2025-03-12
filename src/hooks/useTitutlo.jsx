import { useEffect } from "react"

const useTitutlo = (titulo) => {
  useEffect(()=> {
    document.title = `MatiDev - ${titulo}`
  })
}

export default useTitutlo