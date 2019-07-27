import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header(){
  return (
    <div>
      <h1 className={'title'}>PDX Show Guide</h1>
      <Link to="/"><button>Home</button></Link>
      <Link to="/bands"><button>Bands</button></Link>
      <Link to="/venues"><button>Venues</button></Link>
      <hr/>
    </div>
  );
}

export default Header;
