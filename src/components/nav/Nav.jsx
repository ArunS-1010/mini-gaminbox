import { useNavigate } from 'react-router-dom'
import './Nav.css'

const Nav = (props) => {
  const navigate = useNavigate()
  const redirectToHomePage = () => {
    navigate('/')
  }

  return (
    <div className="main-container">
      <div className="nav-container container-fluid d-flex justify-content-between align-items-center flex-wrap gap-3">
        <div className="logo" onClick={redirectToHomePage}>
          <img
            // src="src/assets/images/mini_gaminBox_PNG.png"
            src="https://github.com/ArunS-1010/mini-gaminbox/blob/main/src/assets/images/mini_gaminBox_PNG.png?raw=true"
            alt="Mini-GaminBox"
            width={180}
          />
        </div>
        {props.isSearch && (
          <div className="search-box-container">
            <input
              className="search-box"
              placeholder="search games..."
              type="text"
            />
            <img
              className="search-icon"
              src="src/assets/images/fi_search.svg"
              alt="Search"
            />
          </div>
        )}
        <div className="username">Welcome User!</div>
      </div>
    </div>
  )
}

export default Nav
