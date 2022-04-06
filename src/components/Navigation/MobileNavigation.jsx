import './nav.css';
import { linkMobileNames } from '../../data';
import { Link } from 'react-router-dom';
import { useUserActions } from '../../context';

const MobileNavigation = () => {
    const { state, signout } = useUserActions();
    const { tokenPresent } = state;
    return(
        <div className="mobile-nav">
            <input type="checkbox" />
            <span className='hamburger'></span>
            <span className='hamburger'></span>
            <span className='hamburger'></span>
                <ul className="menu-nav">  
                    {linkMobileNames.map((linkValue) => (
                    <li className="no-list" key={linkValue.id}> 
                        <Link to={linkValue.route} className="btn-link" role="button">
                            <button className="button-icon text-uppercase nav-icon cp">{linkValue.link}
                                <i className={linkValue.icon}></i>
                            </button>
                        </Link>
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