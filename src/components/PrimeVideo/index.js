import './index.css'
import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    item => item.categoryId === 'ACTION',
  )
  const comedyMoviesList = moviesList.filter(
    item => item.categoryId === 'COMEDY',
  )
  return (
    <div className="mainContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="primeImage"
      />
      <div className="contentContainer">
        <h1 className="heading">Action Movies</h1>
        <MoviesSlider moviesList={actionMoviesList} />

        <h1 className="heading">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMoviesList} />
      </div>
    </div>
  )
}
export default PrimeVideo
