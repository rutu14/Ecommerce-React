import './nav.css';
import { linkMobileNames } from '../../data';

const MobileNavigation = () => {
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
                </ul>
        </div>  
    );
}

export { MobileNavigation }