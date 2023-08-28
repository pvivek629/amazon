import React from 'react'
import './header.css'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthenticaton = () => {
      if (user) {
        auth.signOut();
      }
    }
    return (
        <div className='header'>
            <Link to="/" >
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
                {/*Logo*/}
            </Link>

            <div className="header__search">'
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>


            <div className="header__naav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthenticaton} className="header__option">
                        <span className='headeroptionlineOne'>Hello Guest</span>
                        <span className="headeroptionlineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>



                <div className="header__option">
                    <span className='headeroptionlineOne'>Returns</span>
                    <span className='headeroptionlineTwo'>& Orders</span>
                </div>

                <div className="header__option">
                    <span className='headeroptionlineOne'>Your</span>
                    <span className='headeroptionlineTwo'>Prime</span>
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">{basket.length}</span>
                    </div>
                </Link>

            </div>

        </div>
    );
}

export default Header;
