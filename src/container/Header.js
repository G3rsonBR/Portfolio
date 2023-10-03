export function Header(){
  return(
    <header className="header">
      <ul className='menu-header'>
        <a href="#home" className="active">
          <li>Home</li>
        </a>
        <a href="#about">
          <li>Sobre Mim</li>
        </a>
        <a href="#tech">
          <li>Tecnologias</li>
        </a>
        <a href="#contact">
          <li>Contato</li>
        </a>
      </ul>
    </header>
  )
}