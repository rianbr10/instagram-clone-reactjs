import './style.css'

export function Story(){

  return (
    <div className="container">

      <div className="user-elements">

        <div>
          <img className="image-user-story" src="https://ionicframework.com/docs/icons/logo-react-icon.png" />
        </div>

        <span className="reactjs">reactjs</span>

      </div>

      <div className="user-elements">

        <div>
          <img className="image-user-story" src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" />
        </div>

        <span className="javascript">javascript</span>

      </div>

      <div className="user-elements">

        <div>
          <img className="image-user-story" src="https://icons-for-free.com/iconfiles/png/512/js+library+long+shadow+nodejs+web+icon-1320184850167478047.png" />
        </div>

        <span className="nodejs">nodejs</span>

      </div>

    </div>
  )

}