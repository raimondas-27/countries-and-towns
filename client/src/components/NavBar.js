import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

class NavBar extends Component {
   state = {}

   render() {
      return (
          <div className={"nav-bar container"}>
             <div className={'navbar__content container'}>
                <div className={'nav-links'}>
                   <Link className={'nav-link'} to={'/'}>
                      Cities and Countries
                   </Link>
                   <Link className={'nav-link'} to={'/formToCreateCityOrCountry'}>
                      Add new Country or City
                   </Link>
                </div>
             </div>
          </div>
      );
   }
}

export default NavBar;