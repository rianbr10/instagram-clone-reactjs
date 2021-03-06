import './style.css';
import { FiMoreHorizontal } from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io'
import { BsChat, BsEmojiSmile } from 'react-icons/bs'
import { FiSend } from 'react-icons/fi'
import { BsBookmark } from 'react-icons/bs'
import { IconContext } from 'react-icons';

export function Post() {

  return (

    <>

      <header className="header-post">
        <div className="infos-post">
          <div className="react-image">
            <img className="img-header-post" src="https://ionicframework.com/docs/icons/logo-react-icon.png" />
          </div>
          <p className="info-reactjs">ReactJS</p>
        </div>

        <FiMoreHorizontal className="tres-pontinhos" />
      </header>

      <div className="img-post">
        <img src="https://wallpapercave.com/wp/wp4923981.jpg" />
      </div>

      <div className="footer-post">
        <IconContext.Provider value={{ size: "25px" }}>
          <section className="engagement-post">

            <div className="icons-1">
              <div className="icon"><IoMdHeartEmpty /></div>
              <div className="icon"><BsChat /></div>
              <div className="icon"><FiSend /></div>
            </div>

            <div className="icon"><BsBookmark /></div>
          </section>
        </IconContext.Provider>

        <section className="like">
          <span className="react-curtidas">70 curtidas</span>
        </section>

        <div className="legend">
          <p>
            <strong className="react-name">reactjs</strong> Este é um clone do Instagram feito em ReactJS.
          </p>
        </div>

        <div className="time-post">
          <time>HÁ 25 MINUTOS.</time>
        </div>

        <div className="comment">
          <div className="fake-comment">

            <IconContext.Provider value={{ size: "25px" }}>

              <div className="icon">
                <BsEmojiSmile />
              </div>

            </IconContext.Provider>

            <input placeholder="Adicione um comentário..." />

          </div>

          <button>Publicar</button>

        </div>
      </div>
    </>
  )
}