import './style.css';
import { FiMoreHorizontal } from 'react-icons/fi';

export function Post() {

  return (

    <>
      <header>

        <div className="infos-post">
          <img src="https://avatars.githubusercontent.com/u/84146275?v=4" />
          <p>Rian Brunelli</p>
        </div>

        <FiMoreHorizontal />

      </header>

      <div className="img-post">
        <img src="https://all.accor.com/magazine/imagerie/ferias-na-praia-o-que-fazer-das-f163.jpg" />
      </div>

      <div className="footer-post">
        <section>
          
        </section>
      </div>

    </>

  )

}