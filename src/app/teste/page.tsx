'use client'

import React, { useState } from 'react'

function WordSelector() {
  const [inputValue, setInputValue] = useState<string>('')
  const [selectedWords, setSelectedWords] = useState<string[]>([])

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const inputValue = event.target.value
    setInputValue(inputValue)

    const words: string[] = inputValue.split(' ')
    setSelectedWords(words)
  }

  return (
    <div>
      <input
        type='text'
        value={inputValue}
        onChange={handleInputChange}
        placeholder='Digite algo'
      />
      <div>
        <h3>Palavras Selecionadas:</h3>
        <ul>
          {selectedWords.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default WordSelector
