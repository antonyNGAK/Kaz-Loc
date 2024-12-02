import '../styles/scss pages/homeConnect.scss'
import Banner from '../components/Banner'
import BannerImage from '../assets/home.png'
import Gallery from '../components/Gallery'
import NavBarConnect from '../components/NavBarConnect'


/**
 * @returns {JSX.Element} Home page
 */

const HomeConnect= () => {
  return (
  <> 
  <NavBarConnect/>
  <main className="homeConnect">
    <Banner BannerImage={BannerImage} />
    <Gallery/>
  </main>
  </>
  )
}

export default HomeConnect