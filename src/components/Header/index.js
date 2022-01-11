import { AiOutlineSearch, AiFillHome } from 'react-icons/ai';
import { BsPlusSquare } from 'react-icons/bs';
import { MdOutlineExplore } from 'react-icons/md';
import { FiHeart } from 'react-icons/fi';
import { FiSend } from 'react-icons/fi'
import { IconContext } from 'react-icons';

import './style.css'

export function Header() {
  return (
    <header className="header">

      <div className="container">

        <img className="logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />

        <div className="input-fake">
          <IconContext.Provider value={{ color: '#8e8e8e' }}>
            <AiOutlineSearch />
          </IconContext.Provider>
          <input placeholder="Pesquisar" />
        </div>

        <div className="menu-icons">
          <IconContext.Provider value={{ size: '25px' }}>

            <div>
              <AiFillHome />
            </div>

            <div>
              <FiSend />
            </div>

            <div>
              <BsPlusSquare />
            </div>

            <div>
              <MdOutlineExplore />
            </div>
            
            <div>
             <FiHeart />
            </div>
      
          </IconContext.Provider>
          <img className="img-user" src="https://media-exp1.licdn.com/dms/image/C4E03AQFNOy4hoxQVTw/profile-displayphoto-shrink_800_800/0/1635520746229?e=1647475200&v=beta&t=2SPrYTaOvOaRWTPPG6ECVwAkmmF7kYCMxxY0yGSHvYk" />
        </div>

      </div>
    </header>
  )
}