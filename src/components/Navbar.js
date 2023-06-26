import{Component} from "react";
import React from 'react';
import { MenuItems } from "./MenuItems";


import './NavbarCss.css'


import { Link } from 'react-router-dom';
//import {Link } from "react-dom"


 class Navbar extends Component{
  state = {clicked:false};
  handelClick = () =>{
    this.setState({clicked: !this.state.clicked})
  }
    render(){
        return(
            <nav className="NavbarItems">
              <h1 className="navbar-logo"> Holidays </h1>
              <div className="menu-icons" onClick={this.handelClick}>
               
              <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
             
               </div>

              <ul className={this.state.clicked ? "nav-menu active":"nav-menu"}>
                {MenuItems.map((item, index) =>{
                  return(
                    <li key={index}>
                
                  <Link className={item.cName } to={item.url}>
                  <i className={item.icon}></i> {item.title}
                  </Link>
                </li>

                  )
                })}
                <button> Sign up</button>
                
           
            </ul>
            </nav>
            
        );
    }

 }

 export default Navbar;