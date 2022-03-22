import { useState } from "react";
import { Link } from "react-router-dom";
import { linkNames } from "../../data";
import { useContext } from 'react';
import { UserContext } from '../../context';

const NavLinks = ( { avatarName } ) => {
    const { state, signout } = useContext(UserContext);
    const { tokenPresent } = state;

    const ShowDropdown = () => {
        return(
            <div id="dropdown" className="dropdown-menu generatecssdotcom_arrow">
                <Link to={'/'} className="btn-link cp td text-center m-t10" role="button" onClick={signout}>
                    Logout
                </Link>
            </div>        
        );
    }
    
    const DropdownAvatar = () => {    
        const [isOpen, setIsOpen] = useState(false);
        const toggleDropdown = () => setIsOpen(!isOpen);
    
        return(
            <div className="account">  
                <button id="drop-btn" className="avatar avatar-text text-md cp" onClick={toggleDropdown}>{avatarName}</button>
                {isOpen && ( <ShowDropdown/> )}
            </div>
        );
    }
    
    const LoginButton = () => {
        return (
            <Link to={'login'} className="btn btn-primary outline login-sign" type="button">Login</Link> 
        );
    }

    return(
        <div className="nav-items">
            <nav className="icon-section">
                <ul>
                    {linkNames.map((linkValue) => (
                        <li key={linkValue.id}>
                        <Link to={linkValue.route} className="btn-link" role="button">
                            <button className="button-icon nav-icon cp">
                                <i className={linkValue.icon}></i>
                                { linkValue.badgePresent 
                                ? <span className="textButtonBadge nav-icon-badge">{linkValue.badgeValue}</span> : ''}
                            </button>
                        </Link>
                    </li>
                    ))}
                </ul>
            </nav>
            {tokenPresent ? <DropdownAvatar/> : <LoginButton/> }            
        </div>
    );
}

export { NavLinks }