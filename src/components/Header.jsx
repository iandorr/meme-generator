import icn from '../assets/icn/icn-troll-face.png'

const Header = () => {
  return (
    <nav className="header">
      <div className="header--left">
        <img src={icn} alt="" />
        <span className="header--title">Meme Generator</span>
      </div>
      <div className="header--right">
        <span className="header--desc">React Course - Project 3</span>
      </div>
    </nav>
  )
}

export default Header