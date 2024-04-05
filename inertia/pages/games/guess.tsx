import { useState } from 'react'
import { Card } from '~/components/artist/card'
import { InputSearch } from '~/components/input_search'
import { faCheck, faCompactDisc, faFlagCheckered } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LayoutApp from '~/layouts/app'

const getRandomObject = (array: any) => {
  const randomObject = array[Math.floor(Math.random() * array.length)]
  return randomObject
}

export default function Guess(props: { artists: any }) {
  const [selectedArtists, setSelectedArtists] = useState<any[]>([])
  const [randomData] = useState(() => getRandomObject(props.artists))
  const [minNbAlbums, setMinNbAlbums] = useState<number | null>(null)
  const [maxNbAlbums, setMaxNbAlbums] = useState<number | null>(null)
  const [minYearsStarting, setMinYearsStarting] = useState<number | null>(null)
  const [maxYearsStarting, setMaxYearsStarting] = useState<number | null>(null)

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

      console.log('Artist years active:', artist.yearsStarting)
      console.log('Random years active:', randomData.yearsStarting)

      // Calcul de la différence entre l'année de début de l'artiste et l'année de début aléatoire
      const differenceYears = Math.abs(artist.yearsStarting - randomData.yearsStarting)
      // @ts-ignore
      const currentDifferenceMinYears = Math.abs(minYearsStarting - randomData.yearsStarting)
      // @ts-ignore
      const currentDifferenceMaxYears = Math.abs(maxYearsStarting - randomData.yearsStarting)

      console.log('Difference years:', differenceYears)
      console.log('Current Difference Min years:', currentDifferenceMinYears)
      console.log('Current Difference Max years:', currentDifferenceMaxYears)
      console.log('Min years:', minYearsStarting)
      console.log('Max years:', maxYearsStarting)

      // Mettre à jour minYearsActive et maxYearsActive en fonction de la comparaison
      if (artist.yearsStarting < randomData.yearsStarting) {
        if (differenceYears < currentDifferenceMinYears) {
          console.log('Updating minYearsActive...')
          setMinYearsStarting(artist.yearsStarting)
        }
      } else if (artist.yearsStarting > randomData.yearsStarting) {
        if (differenceYears < currentDifferenceMaxYears) {
          console.log('Updating maxYearsActive...')
          setMaxYearsStarting(artist.yearsStarting)
        }
      } else if (artist.yearsStarting === randomData.yearsStarting) {
        setMinYearsStarting(artist.yearsStarting)
        setMaxYearsStarting(artist.yearsStarting)
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
    messageNbAlbumStudio = `Entre ${minNbAlbums} et ${maxNbAlbums} album(s) studio`
  } else if (minNbAlbums && minNbAlbums !== maxNbAlbums) {
    messageNbAlbumStudio = `Plus de ${minNbAlbums} album(s) studio`
  } else if (maxNbAlbums && minNbAlbums !== maxNbAlbums) {
    messageNbAlbumStudio = `Moins de ${maxNbAlbums} album(s) studio `
  } else if (minNbAlbums === maxNbAlbums && minNbAlbums !== null && maxNbAlbums !== null) {
    messageNbAlbumStudio = (
      <span>
        {minNbAlbums} album(s) studio <FontAwesomeIcon icon={faCheck} />
      </span>
    )
  } else {
    messageNbAlbumStudio = ''
  }

  let yearsStartingRandom = randomData.yearsStarting
  console.log('Years active random:', yearsStartingRandom)

  let yearsActiveSelected = selectedArtists.map((a: any) => a.yearsStarting)
  let yearsStartingSelected = yearsActiveSelected[0]

  let messageYearsActive = null
  if (
    minYearsStarting !== null &&
    maxYearsStarting !== null &&
    minYearsStarting !== maxYearsStarting &&
    yearsStartingRandom >= minYearsStarting &&
    yearsStartingRandom <= maxYearsStarting
  ) {
    // entre 2 dates
    console.log('Entre 2 dates')
    messageYearsActive = `Entre ${minYearsStarting} et ${maxYearsStarting}`
  } else if (yearsStartingSelected < yearsStartingRandom) {
    messageYearsActive = `Plus récent que ${yearsStartingSelected} (Début) `
  } else if (yearsStartingSelected > yearsStartingRandom) {
    messageYearsActive = `Plus ancien que ${yearsStartingSelected} (Début)`
  } else if (yearsStartingSelected === yearsStartingRandom) {
    messageYearsActive = (
      <span>
        {yearsStartingSelected} <FontAwesomeIcon icon={faCheck} />
      </span>
    )
  }

  return (
    <LayoutApp>
      <section id="section_home" className="container">
        <p className="message">{message || "Trouvez l'artiste"}</p>
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
              yearsStarting={a.yearsStarting}
              nbAlbumStudio={a.nbAlbumStudio}
              imgPath={a.imgPath}
              genres={a.genres}
              labels={a.labels}
            />
          ))}
        </div>
      </section>
    </LayoutApp>
  )
}
