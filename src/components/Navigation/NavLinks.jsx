import { useState } from "react";
import { linkNames } from "../../data";

const ShowDropdown = () => {
    return(
        <div id="dropdown" className="dropdown-menu generatecssdotcom_arrow">
            <a href="#" className="btn-link cp td text-center m-t10" role="button">
                Logout
            </a>
        </div>        
    );
}

const DropdownAvatar = () => {    
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    return(
        <div className="account">  
            <button id="drop-btn" className="avatar avatar-text text-md cp" onClick={toggleDropdown}>RL</button>
            {isOpen && ( <ShowDropdown/> )}
        </div>
    );
}

const NavLinks = () => {
    return(
        <div className="nav-items">
            <nav className="icon-section">
                <ul>
                    {linkNames.map((linkValue) => (
                        <li key={linkValue.id}>
                        <a href="#" className="btn-link" role="button">
                            <button className="button-icon nav-icon cp">
                                <i className={linkValue.icon}></i>
                                <span className="textButtonBadge nav-icon-badge">9</span>
                            </button>
                        </a>
                    </li>
                    ))}
                </ul>
            </nav>
            <DropdownAvatar/>
        </div>
    );
}

export { NavLinks }