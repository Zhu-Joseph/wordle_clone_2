import React, { useEffect } from "react";
import useWordle from "../hook/useWordle";

export default function Wordle({ solution }) {
  
  const { currentGuess, handleKeyup } = useWordle(solution)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup])

  return (
    <div>
      <div>solution - {solution}</div>
      <div>current guess - {currentGuess}</div>
    </div>
  )
}
