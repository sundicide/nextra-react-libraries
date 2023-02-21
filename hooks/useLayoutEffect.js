import { useEffect, useRef } from "react"

export default function useLayoutEffect(props) {
  const didMount = useRef(false)

  useEffect(() => {
    if (didMount.current) {
      props()
    } else {
      didMount.current = true
    }
  }, [])
}