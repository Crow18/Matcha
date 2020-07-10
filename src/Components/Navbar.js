import React from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import Home from './Home';
import About from './About';
import FAQ from './FAQ';
import Contact from './Contact';

import '../Styles/Navbar.css';
import Logo from '../Images/Matcha.svg'



export default function Navbar() {
    return (
        <Router>
        <nav className="navbar">
            <div className="logo">
                <img src={Logo} width="65%" alt="logo"/>
                <button>LOGIN</button>
            </div>
            <ul className="nav-links">
            <li ><NavLink exact to={'/'} className="nav-link" activeClassName="active-nav-link"> Home </NavLink></li>
            <li ><NavLink exact to={'/About'} className="nav-link" activeClassName="active-nav-link">About</NavLink></li>
            <li ><NavLink exact to={'/Contact'} className="nav-link" activeClassName="active-nav-link">Contact</NavLink></li>
            <li ><NavLink exact to={'/FAQ'} className="nav-link" activeClassName="active-nav-link">FAQ</NavLink></li>
            </ul>
            <button>LOGIN</button>
        </nav>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/About' component={About} />
            <Route path='/FAQ' component={FAQ} />
            <Route path='/Contact' component={Contact} />
        </Switch>
    </Router>
    )
}