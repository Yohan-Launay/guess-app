import React, { useState } from 'react'
import Autosuggest from 'react-autosuggest'

interface InputSearchProps {
  suggestions: string[]
  onEnter: (artist: string) => void
}

export function InputSearch({ suggestions, onEnter }: InputSearchProps) {
  const [value, setValue] = useState<string>('')
  const [selectedArtist, setSelectedArtist] = useState<string | null>(null)
  const [suggestionsList, setSuggestionsList] = useState<string[]>([])
  const [tempArtist, setTempArtist] = useState<string | null>(null)

  const onChange = (event, { newValue }) => {
    setValue(newValue)
  }

  const onSuggestionsFetchRequested = ({ value }) => {
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length

    setSuggestionsList(
      inputLength === 0
        ? []
        : suggestions.filter(
            (suggestion) => suggestion.toLowerCase().slice(0, inputLength) === inputValue
          )
    )
  }

  const onSuggestionsClearRequested = () => {
    setSuggestionsList([])
  }

  const getSuggestionValue = (suggestion) => suggestion

  const renderSuggestion = (suggestion) => <div>{suggestion}</div>

  const inputProps = {
    placeholder: 'Search',
    value,
    onChange: onChange,
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && selectedArtist) {
      setTempArtist(selectedArtist) // Stocke l'artiste sélectionné dans l'état temporaire
      setValue('') // Réinitialise la valeur de l'input
      setSelectedArtist(null) // Réinitialise l'artiste sélectionné
    }
  }

  // Appelle la fonction onEnter avec l'artiste stocké dans l'état temporaire
  React.useEffect(() => {
    if (tempArtist) {
      onEnter(tempArtist) // Ajoute l'artiste à la liste des artistes sélectionnés
      setTempArtist(null) // Réinitialise l'état temporaire
    }
  }, [tempArtist, onEnter])

  return (
    <div onKeyDown={handleKeyDown}>
      <Autosuggest
        suggestions={suggestionsList}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={(event, { suggestionValue }) => setSelectedArtist(suggestionValue)}
      />
    </div>
  )
}
