import './style.css';
import { FiMoreHorizontal } from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io'
import { BsChat, BsEmojiSmile } from 'react-icons/bs'
import { FiSend } from 'react-icons/fi'
import { BsBookmark } from 'react-icons/bs'
import { IconContext } from 'react-icons';

export function PostUm() {

  return (

    <>

      <header className="header-post">
        <div className="infos-post">
          <div className="js-image">
            <img className="img-header-post" src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" />
          </div>
          <p className="info-reactjs">Javascript</p>
        </div>

        <FiMoreHorizontal className="tres-pontinhos" />
      </header>

      <div className="img-post">
        <img src="https://marquesfernandes.com/wp-content/uploads/2020/01/1555172.jpg" />
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
          <span className="javascript-likes">82 curtidas</span>
        </section>

        <div className="legend">
          <p>
            <strong className="javascript-name">javascript</strong> console.log("Olá");.
          </p>
        </div>

        <div className="time-post">
          <time>HÁ 53 MINUTOS.</time>
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