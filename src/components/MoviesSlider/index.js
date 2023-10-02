import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  const {moviesList} = props
  return (
    <Slider {...settings}>
      {moviesList.map(item => (
        <MovieItem key={item.id} movieDetails={item} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
