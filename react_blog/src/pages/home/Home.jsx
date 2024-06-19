import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/sidebar/SideBar'
import './home.css'

const Home = () => {
  return (
    <>
      <Header></Header>
      <div className="home">
        <Posts></Posts>
        <SideBar/>
      </div>
    </>
  )
}

export default Home