import { useState } from "react"

const useWordle = (solution) => {
  const [turn, setTurn ] = useState(0)
  const [currentGuess, setCurrentGuess] = useState('')
  const [guesses, setGuesses] = useState([])
  const [history, setHistory] = useState(['hello'])
  const [isCorrect, setIsCorrect] = useState(false)

  const formatGuess = () => {
    console.log('formatting the guess - ', currentGuess)
  }

  const addNewGuess = () => {
    
  }

  const handleKeyup = ({ key }) => {
    if(key === 'Enter') {
      if (turn > 5){
        console.log("you used all your guesses")
        return
      }

      if (history.includes(currentGuess)) {
        console.log('You already tried that word')
        return
      }

      if (currentGuess.length !== 5) {
        console.log('your word must be 5 characters long')
        return
      }

      formatGuess()
    }

    if (key === 'Backspace' || key === 'Delete') {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1)
      })
    }

    if (/^[A-Za-z]$/.test(key)) {
      if(currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key
        })
      }
      // console.log(key)
    }
  }

  return {turn, currentGuess, guesses, history, isCorrect, handleKeyup}

}

export default useWordle