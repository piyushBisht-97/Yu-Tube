import React from 'react'
import './home.css';
const Home = () => {
    return (
        <div className="container">
<nav className="navbar">

<h1>Yo-Tube</h1>

<input className="search" placeholder="Search"/>

<div>
  <ul className="nav-links">
 <li><a href="/home">HOME</a></li>
 
 <li><a href="/page"><i className="fab fa-github"></i></a></li>
 
 </ul>
 
 </div>

      </nav>
      <sidebar className="sidebar">
          <ul>
              <li><a href="/home">Home <i class="fas fa-home"></i></a></li>
              <li><a href="/playlist">Playlist <i class="fas fa-list-ul"></i></a></li>
              <li><a href="/liked">Liked <i class="far fa-thumbs-up"></i></a></li>
          </ul>
      </sidebar>
      <main className="main">Main</main>
      <footer className="footer">Footer</footer>
            
        </div>
    )
}

export default Home
