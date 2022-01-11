import './style.css';

export function Suggestion() {

  return (
    <div className="container-suggestion">
      <div className="header-suggestion">

        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFNOy4hoxQVTw/profile-displayphoto-shrink_800_800/0/1635520746229?e=1647475200&v=beta&t=2SPrYTaOvOaRWTPPG6ECVwAkmmF7kYCMxxY0yGSHvYk" />

        <div className="user-infos-suggestion">

          <div className="infos">

            <span>rianbrunelli</span>
            <p>Rian Brunelli</p>
          </div>

          <button className="switch">Mudar</button>

        </div>
      </div>

      <div className="header-main-suggestion">

        <p>Sugestões para você</p>

        <span>Ver tudo</span>

      </div>

      <div className="user-suggestion">

        <div className="infos-suggestion">
          <img src="https://cdn-icons-png.flaticon.com/512/919/919832.png" />

          <div className="info-suggestion">
            <span>typescript</span>
            <p>Seguido por javascript</p>
          </div>

          <button className="follow">Seguir</button>
        </div>

      </div>

      <div className="user-suggestion">

        <div className="infos-suggestion">
          <img src="https://cdn-icons-png.flaticon.com/512/919/919830.png" />

          <div className="info-suggestion">
            <span>php</span>
            <p>Seguido por nodejs</p>
          </div>

          <button className="follow">Seguir</button>
        </div>

      </div>

      <div className="user-suggestion">

        <div className="infos-suggestion">
          <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" />

          <div className="info-suggestion">
            <span>python</span>
            <p>Seguido por reactjs</p>
          </div>

          <button className="follow">Seguir</button>
        </div>

      </div>

      <div className="user-suggestion">

        <div className="infos-suggestion">
          <img src="https://iconape.com/wp-content/png_logo_vector/c.png" />

          <div className="info-suggestion">
            <span>c#</span>
            <p>Novo no instagram</p>
          </div>

          <button className="follow">Seguir</button>
        </div>

      </div>

      <div className="user-suggestion">

        <div className="infos-suggestion">
          <img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" />

          <div className="info-suggestion">
            <span>java</span>
            <p>Novo no instagram</p>
          </div>

          <button className="follow">Seguir</button>
        </div>

      </div>

      <footer className="footer-suggestion">

        <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull;
          Termos &bull; Localizações &bull; Principais &bull; contas &bull; Hashtags &bull;
          Idioma &bull; Português (Brasil) &bull;</p>
        <p>&copy; 2022 INSTAGRAM FROM META</p>

      </footer>

    </div>
  )

}