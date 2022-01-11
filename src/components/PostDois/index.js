import './style.css';
import { FiMoreHorizontal } from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io'
import { BsChat, BsEmojiSmile } from 'react-icons/bs'
import { FiSend } from 'react-icons/fi'
import { BsBookmark } from 'react-icons/bs'
import { IconContext } from 'react-icons';

export function PostDois() {

  return (

    <>

      <header className="header-post">
        <div className="infos-post">
          <div className="nodejs-image">
            <img className="img-header-post" src="https://icons-for-free.com/iconfiles/png/512/js+library+long+shadow+nodejs+web+icon-1320184850167478047.png" />
          </div>
          <p className="info-reactjs">NodeJS</p>
        </div>

        <FiMoreHorizontal className="tres-pontinhos" />
      </header>

      <div className="img-post">
        <img src="https://wallpaperaccess.com/full/3909225.jpg" />
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
          <span className="javascript-likes">63 curtidas</span>
        </section>

        <div className="legend">
          <p>
            <strong className="javascript-name">nodejs</strong> res.send('Olá!').
          </p>
        </div>

        <div className="time-post">
          <time>HÁ 2 HORAS.</time>
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