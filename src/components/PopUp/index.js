/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import 'reactjs-popup/dist/index.css'

import './index.css'

const PopUp = () => (
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <button data-testid="hamburgerIconButton">
          <GiHamburgerMenu className="logo" />
        </button>
      }
    >
      {close => (
        <>
          <button data-testid="closeButton">
            <IoMdClose onClick={() => close()} />
          </button>
          <ul>
            <Link to="/">
              <li>
                <AiFillHome />
                <h1>Home</h1>
              </li>
            </Link>
            <Link to="/about">
              <li>
                <BsInfoCircleFill />
                <h1>About</h1>
              </li>
            </Link>
          </ul>
        </>
      )}
    </Popup>
  </div>
)
export default PopUp
