import './header.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

function Header() {
    // const [data, setData] = useState(null);
    // useEffect(() => {
    //     useSelector((state) => setData(state.data));
    // }, []);

   const data = useSelector((state) => state.data);
    return (
        <div className="Header">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">TeeRex Store</a>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className='d-inline-flex'>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mr-custom">
                            <li className="nav-item">
                                <Link className='navLink' to="/">
                                    <a className="nav-link active" aria-current="page">Products</a>
                                </Link>
                            </li>
                        </ul>
                        <div className='shadow-lg bg-body rounded'>
                            <Link className='navLink' to="cart">
                                <a className="btn btn-light position-relative">
                                    <span className="position-absolute top-0 start-100 translate-middle p-2 badge rounded-pill text-danger">
                                        {data ? data.length : 0}
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                    </svg>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
