import React from 'react'

const Navbar = ({ title, nav1, nav2, nav3, mode }) => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">{nav1}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{nav2}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{nav3}</a>
                        </li>
                    </ul>
                    <div className="d-flex">

                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
