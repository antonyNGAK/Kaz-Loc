import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import BannerImage from '../assets/home.png'
import NavBar from '../components/NavBar'
import '../styles/scss pages/home.scss'

/**
 * @returns {JSX.Element} Home page
 */

const Home = () => {
  return (
  <> 
  <NavBar/>
  <main className="home">
    <Banner BannerImage={BannerImage} />
    <Gallery/>
  </main>
  </>
  )
}

export default Home