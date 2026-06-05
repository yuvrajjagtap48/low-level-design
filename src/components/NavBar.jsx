
const NavBar = () => {
  return (
    <div>
        <header className="text-2xl font-bold py-5 bg-black text-white text-center flex">
        Hello World
        <nav className="px-20 m-2 w-[1200px] flex justify-between text-lg">
          <a href="/">Home </a>
          <a href="/about">About </a>
          <a href="/team">Team </a>
          <a href="/login">Login </a>
          <a href="/Accordion">Accordion </a>
        </nav>
      </header>
    </div>
  )
}

export default NavBar