import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import BannerImage from '../assets/home.png'
import '../styles/scss pages/home.scss'

/**
 * @returns {JSX.Element} Home page
 */

const Home = () => {
  return (
  <> 
  <div className='intro'>
      <h1>Bienvenue sur Kaz'Loc</h1>
      <p>Le site de location de logements entre particuliers</p>
      <p>Vous cherchez un logement à louer pour un moment de détente ?</p>
      <p>Vous êtes au bon endroit !</p>
      </div>
  <main className="home">
    <Banner BannerImage={BannerImage} />
    <Gallery/>
  </main>
  </>
  )
}

export default Home