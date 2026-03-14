import "./home.scss"
import Stories from "../../components/stories/Stories"
import Share from "../../components/share/Share"
import Posts from "../../components/posts/posts"

const Home = () => {
  return (
   <div className="home">
      <Stories/>
      <Share/>
      <Posts/>
    </div>  
  )
}

export default Home