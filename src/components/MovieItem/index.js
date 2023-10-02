import './index.css'
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

const MovieItem = props => {
  const {movieDetails} = props
  const {videoUrl, thumbnailUrl} = movieDetails
  return (
    <Popup
      modal
      trigger={<img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />}
      className="popup-content"
    >
      {close => (
        <div className="model-container">
          <button
            type="button"
            onClick={() => close()}
            data-testid="closeButton"
            className="closeButton"
          >
            <IoMdClose size={20} color="#231f20" />
          </button>
          <div className="movie-player-container">
            <ReactPlayer url={videoUrl} controls />
          </div>
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
