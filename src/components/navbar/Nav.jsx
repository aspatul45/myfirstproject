import {NavLink} from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
    <ul>
        
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        
    </ul>
</nav>
  )
}
