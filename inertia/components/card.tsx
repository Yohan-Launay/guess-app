interface ArtistProps {
  id: number
  name: string
  origin: string
  yearsActive: string
  nbAlbumStudio: number
  imgPath: string
  genres: { id: number; name: string }[] | null
  labels: { id: number; name: string }[] | null
}

export function Card(props: ArtistProps) {
  const cardStyle = {
    backgroundImage: `url(/uploads/${props.imgPath})`,
  }
  return (
    <div className="card_artist" key={props.id}>
      <div className="card_img" style={cardStyle}></div>
      <div className="card_content">
        <div className="card_content_top">
          <div>
            <h2>{props.name}</h2>
            {props.genres && (
              <div className="genres">
                <ul>
                  {props.genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div>
            {props.labels && props.labels.length > 0 && (
              <div className="labels">
                <ul>
                  {props.labels.map((label) => (
                    <li key={label.id}>{label.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="card_content_bottom">
          <div>
            <h3>{props.origin}</h3>
            <p>Origin</p>
          </div>
          <div>
            <h3>{props.yearsActive}</h3>
            <p>Years active</p>
          </div>
          <div>
            <h3>{props.nbAlbumStudio}</h3>
            <p>Album studio</p>
          </div>
        </div>
      </div>
    </div>
  )
}
