// Write your code here
import {useHistory, Link} from 'react-router-dom'
import PopUp from '../PopUp'
import './index.css'

const Header = () => {
  const history = useHistory()

  const home = () => {
    history.push('/')
  }

  const about = () => {
    history.push('/about')
  }

  return (
    <div className="con">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="img"
        />
      </Link>
      <PopUp home={home} about={about} />
    </div>
  )
}

export default Header
