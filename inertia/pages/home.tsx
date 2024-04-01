import { useState } from 'react'
import { Card } from '~/components/card'
import { InputSearch } from '~/components/input_search'
import { faCheck, faCompactDisc, faFlagCheckered } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const getRandomObject = (array: any) => {
  const randomObject = array[Math.floor(Math.random() * array.length)]
  return randomObject
}

export default function Home(props: { artists: any }) {
  const [selectedArtists, setSelectedArtists] = useState<any[]>([])
  const [randomData] = useState(() => getRandomObject(props.artists))
  const [minNbAlbums, setMinNbAlbums] = useState<number | null>(null)
  const [maxNbAlbums, setMaxNbAlbums] = useState<number | null>(null)
  const [minYearsActive, setMinYearsActive] = useState<number | null>(null)
  const [maxYearsActive, setMaxYearsActive] = useState<number | null>(null)

  const artistNames = props.artists.map((artist: any) => artist.name)

  const addArtist = (artistName: string) => {
    const artist = props.artists.find((a: any) => a.name === artistName)
    if (artist) {
      setSelectedArtists((prevSelectedArtists) => [artist, ...prevSelectedArtists])
      const difference = Math.abs(artist.nbAlbumStudio - randomData.nbAlbumStudio)
      // @ts-ignore
      const currentDifferenceMin = Math.abs(minNbAlbums - randomData.nbAlbumStudio)
      // @ts-ignore
      const currentDifferenceMax = Math.abs(maxNbAlbums - randomData.nbAlbumStudio)

      // console.log('Difference:', difference)
      // console.log('Current Difference Min:', currentDifferenceMin)
      // console.log('Current Difference Max:', currentDifferenceMax)
      // console.log('Min:', minNbAlbums)
      // console.log('Max:', maxNbAlbums)

      if (artist.nbAlbumStudio < randomData.nbAlbumStudio) {
        if (difference < currentDifferenceMin) {
          // console.log('Updating minNbAlbums...')
          setMinNbAlbums(artist.nbAlbumStudio)
        }
      } else if (artist.nbAlbumStudio > randomData.nbAlbumStudio) {
        if (difference < currentDifferenceMax) {
          // console.log('Updating maxNbAlbums...')
          setMaxNbAlbums(artist.nbAlbumStudio)
        }
      } else if (artist.nbAlbumStudio === randomData.nbAlbumStudio) {
        setMinNbAlbums(artist.nbAlbumStudio)
        setMaxNbAlbums(artist.nbAlbumStudio)
      }

      // Convertir les années de début en nombres entiers
      const artistYearsActive = Number.parseInt(artist.yearsActive)
      const randomYearsActive = Number.parseInt(randomData.yearsActive)

      console.log('Artist years active:', artistYearsActive)
      console.log('Random years active:', randomYearsActive)

      // Calcul de la différence entre l'année de début de l'artiste et l'année de début aléatoire
      const differenceYears = Math.abs(artistYearsActive - randomYearsActive)
      // @ts-ignore
      const currentDifferenceMinYears = Math.abs(minYearsActive - randomYearsActive)
      // @ts-ignore
      const currentDifferenceMaxYears = Math.abs(maxYearsActive - randomYearsActive)

      console.log('Difference years:', differenceYears)
      console.log('Current Difference Min years:', currentDifferenceMinYears)
      console.log('Current Difference Max years:', currentDifferenceMaxYears)
      console.log('Min years:', minYearsActive)
      console.log('Max years:', maxYearsActive)

      // Mettre à jour minYearsActive et maxYearsActive en fonction de la comparaison
      if (artistYearsActive < randomYearsActive) {
        if (differenceYears < currentDifferenceMinYears) {
          console.log('Updating minYearsActive...')
          setMinYearsActive(artistYearsActive)
        }
      } else if (artistYearsActive > randomYearsActive) {
        if (differenceYears < currentDifferenceMaxYears) {
          console.log('Updating maxYearsActive...')
          setMaxYearsActive(artistYearsActive)
        }
      } else if (artistYearsActive === randomYearsActive) {
        setMinYearsActive(artistYearsActive)
        setMaxYearsActive(artistYearsActive)
      }
    }
  }

  const artist = selectedArtists.find((a) => a.name === randomData.name)
  const message = artist ? 'Félicitation vous avez trouvé !' : ''
  console.log(randomData)

  const artistOrigin = selectedArtists.find((a) => a.origin === randomData.origin)
  const messageOrigin = artistOrigin ? `${randomData.origin}` : ''

  let messageNbAlbumStudio = null
  if (minNbAlbums && maxNbAlbums && minNbAlbums !== maxNbAlbums) {
    messageNbAlbumStudio = `Entre ${minNbAlbums} et ${maxNbAlbums}`
  } else if (minNbAlbums && minNbAlbums !== maxNbAlbums) {
    messageNbAlbumStudio = `Plus de ${minNbAlbums}`
  } else if (maxNbAlbums && minNbAlbums !== maxNbAlbums) {
    messageNbAlbumStudio = `Moins de ${maxNbAlbums}`
  } else if (minNbAlbums === maxNbAlbums && minNbAlbums !== null && maxNbAlbums !== null) {
    messageNbAlbumStudio = (
      <span>
        {minNbAlbums} <FontAwesomeIcon icon={faCheck} />
      </span>
    )
  } else {
    messageNbAlbumStudio = ''
  }

  // années de début de l'artiste random & parse en number
  let yearsActiveRandom = randomData.yearsActive
  let parseRandom = Number.parseInt(yearsActiveRandom)
  // console.log('yearsActiveRandom:', parseRandom)

  // années de début de l'artiste selectionner
  let yearsActiveSelected = selectedArtists.map((a: any) => a.yearsActive)
  let yearsStartingSelected = yearsActiveSelected[0]
  // Récupérer la première valeur du tableau et la convertir en number
  yearsStartingSelected = Number.parseInt(yearsStartingSelected)
  // console.log('yearsActiveSelected:', yearsStartingSelected)

  // Comparer les années de début de l'artiste random avec les années de début de l'artiste selectionner
  // Si les années de début de l'artiste selectionner est plus petit que les années de début de l'artiste random alors afficher "Plus récent que"
  // Si les années de début de l'artiste selectionner est plus grand que les années de début de l'artiste random alors afficher "Plus ancien que"
  // Si les années de début de l'artiste selectionner est égale aux années de début de l'artiste random alors afficher "Identique à"
  let messageYearsActive = null
  if (
    minYearsActive !== null &&
    maxYearsActive !== null &&
    minYearsActive !== maxYearsActive &&
    parseRandom >= minYearsActive &&
    parseRandom <= maxYearsActive
  ) {
    // entre 2 dates
    console.log('Entre 2 dates')
    messageYearsActive = `Entre ${minYearsActive} et ${maxYearsActive}`
  } else if (yearsStartingSelected < parseRandom) {
    messageYearsActive = `Plus récent que ${yearsStartingSelected} (Début) `
  } else if (yearsStartingSelected > parseRandom) {
    messageYearsActive = `Plus ancien que ${yearsStartingSelected} (Début)`
  } else if (yearsStartingSelected === parseRandom) {
    messageYearsActive = (
      <span>
        {yearsStartingSelected} <FontAwesomeIcon icon={faCheck} />
      </span>
    )
  }

  return (
    <section id="section_home" className="container">
      <p>{message || "Trouvez l'artiste"}</p>
      <InputSearch suggestions={artistNames} onEnter={addArtist} />
      <div className="all_indice">
        {messageOrigin && (
          <p className="indice">
            {messageOrigin} <FontAwesomeIcon icon={faCheck} />
          </p>
        )}
        {messageNbAlbumStudio && (
          <p className="indice">
            <FontAwesomeIcon icon={faCompactDisc} /> {messageNbAlbumStudio}
          </p>
        )}
        {messageYearsActive && (
          <p className="indice">
            <FontAwesomeIcon icon={faFlagCheckered} /> {messageYearsActive}
          </p>
        )}
      </div>
      <div className="content_card">
        {selectedArtists.map((a: any) => (
          <Card
            key={a.id}
            id={a.id}
            name={a.name}
            origin={a.origin}
            yearsActive={a.yearsActive}
            nbAlbumStudio={a.nbAlbumStudio}
            imgPath={a.imgPath}
            genres={a.genres}
            labels={a.labels}
          />
        ))}
      </div>
    </section>
  )
}
