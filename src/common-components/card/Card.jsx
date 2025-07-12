import './Card.css'
import { Link, useNavigate } from 'react-router-dom'

const Card = (props) => {
  const navigate = useNavigate()

  const handleNavigation = () => {
    navigate('/game/' + props.pageLink)
  }

  return (
    <>
      {/* <Link to="/gaming/rock-paper-scissors"> */}
      <div className="card" onClick={handleNavigation}>
        <div className="image-container">
          <img
            className="card-image"
            src="https://miro.medium.com/v2/resize:fit:1400/1*s4q6EcdHXcWg0yVvqwnpfg.jpeg"
            alt="Card Image"
            draggable="false"
          />
          <img
            className="favourite-icon"
            src="src/assets/images/favourite.svg"
            alt="Favourite"
            draggable="false"
          />
          {/* <i className="bi bi-heart"></i> */}
        </div>
        <div className="play-icon">
          <img
            className="play-icon-img"
            src="src/assets/images/purple_white_border_icon.png"
            alt="Play icon"
          />
        </div>
        <div className="game-info">
          <p className="game-name">{props.title}</p>
          <p className="category">{props.category}</p>
        </div>
      </div>{' '}
      {/* </Link> */}
    </>
  )
}

export default Card
