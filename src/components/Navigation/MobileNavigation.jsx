import './nav.css';
import { linkMobileNames } from '../../data';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context';
import { useContext } from 'react';

const MobileNavigation = () => {
    const { state, signout } = useContext(UserContext);
    const { tokenPresent } = state;
    return(
        <div className="mobile-nav">
            <input type="checkbox" />
            <span></span><span></span><span></span>
                <ul className="menu-nav">  
                    {linkMobileNames.map((linkValue) => (
                    <li className="no-list" key={linkValue.id}> 
                        <a href="#" className="btn-link" role="button">
                            <button className="button-icon text-uppercase nav-icon cp">{linkValue.link}
                                <i className={linkValue.icon}></i>
                            </button>
                        </a>
                    </li>
                    ))}  
                    { tokenPresent 
                    ? ( <li className="no-list"> 
                            <Link to={'/'} className="btn-link" role="button">
                                <button className="button-icon text-uppercase nav-icon cp" onClick={signout}>
                                    Logout
                                    <i className='bi bi-door-closed'></i>
                                </button>
                            </Link>
                        </li> )
                    : " "
                    }                    
                </ul>
        </div>  
    );
}
export { MobileNavigation }