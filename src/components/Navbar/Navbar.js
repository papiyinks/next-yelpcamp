import React, { useContext } from 'react';
import Link from 'next/link';
import UserContext from '../UserContext';

const Navbar = () => {
  const { user, signOut } = useContext(UserContext);

  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link href="/">
              <a className="navbar-brand">YelpCamp</a>
            </Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="/campgrounds">Campgrounds</a>
              </li>
              {user ? (
                <li
                  style={{ paddingTop: '15px', cursor: 'pointer' }}
                  onClick={signOut}
                >
                  logout
                </li>
              ) : (
                <>
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
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
