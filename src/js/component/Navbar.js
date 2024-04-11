import React from 'react'

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand text-light" id="str">Start Play</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto pr-3">
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#" >Contac</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
