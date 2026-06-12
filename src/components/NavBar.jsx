const NavBar = ({ lang, setLang }) => {
  return (
    <div>
        <header className="text-2xl font-bold py-5 bg-black text-white text-center flex">
        Hello World
        <nav className="px-20 m-2 w-full flex justify-between text-lg">
          <a href="/">Home </a>
          <a href="/about">About </a>
          <a href="/team">Team </a>
          <a href="/login">Login </a>
          <a href="/Accordion">Accordion </a>
          <a href="/image-slider">Image Slider </a>
          <a href="/search-ui">Search UI </a>
        </nav>
        <select value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="sp">Spanish</option>
          <option value="ru">Russian</option>
          <option value="Mr">Marathi</option>
        </select>
      </header>
    </div>
  )
}

export default NavBar