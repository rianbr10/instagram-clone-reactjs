import './style.css'
import { Story } from '../Story'
import { Post } from '../Post'
import { PostUm } from '../PostUm'
import { PostDois } from '../PostDois'
import { Suggestion } from '../Suggestion'

export function Layout() {

  return (
    <>
      <div className="MainGrid">

        <div className="first-column" style={{ gridArea: "firstColumn" }}>
          <div className="box">
            <Story />
          </div>

          <div className="box" style={{ margin: "30px 0" }}>
            <Post />
          </div>
          <div className="box1" style={{ margin: "10px 0" }}>
            <PostUm />
          </div>
          <div className="box2" style={{ margin: "35px 0" }}>
            <PostDois />
          </div>
        </div>

        <div style={{ gridArea: "secondColumn" }}>
          <div className="suggestionBox">
            <Suggestion />
          </div>
        </div>

      </div>
    </>
  )

}