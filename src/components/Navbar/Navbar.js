import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const logout = () => {
  // alert('logged out');
  localStorage.setItem('token', '');
  localStorage.clear();
  Router.push('/');
};

// const userId = () => {
//   localStorage.setItem('token');
// };

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link href="/">
              <a className="navbar-brand">YelpCamp</a>
            </Link>
          </div>
          {/* {!userId ? ( */}
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link href="/campgrounds">
                  <a>Campgrounds</a>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <a>Login</a>
                </Link>
              </li>
              <li>
                <Link href="/register">
                  <a>Signup</a>
                </Link>
              </li>
              <li
                style={{ paddingTop: '15px', cursor: 'pointer' }}
                onClick={logout}
              >
                logout
              </li>
            </ul>
          </div>
          {/* ) : ( */}
          {/* <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link href="/campgrounds">
                    <a>Campgrounds</a>
                  </Link>
                </li>
                <li>
                  <Link href="/login">
                    <a>Login</a>
                  </Link>
                </li>
                <li>
                  <Link href="/register">
                    <a>Signup</a>
                  </Link>
                </li>

              </ul>
            </div> */}
          {/* )} */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
