import { Link } from "react-router-dom"

function Header() {
  return (
      <header>
          <Link to="/">
              Fast React Pizza Co.
          </Link>
          <p>
              Learn the last phase 
          </p>
    </header>
  )
}

export default Header