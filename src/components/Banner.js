import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner() {
  const title = "la maison jungle";
  return (
    <div class='lmj-banner'>
      <img src={logo} alt='La maison jungle' class='lmj-logo' />
      <h1 class='lmj-title'> {title.toUpperCase()} </h1>
    </div>
  );
}

export default Banner