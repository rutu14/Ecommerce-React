import './nav.css';
import logo from '../../asset/image/logo.svg'
import { MobileNavigation } from './MobileNavigation';
import { NavLinks } from './NavLinks';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return(
        <header className="nav-header header">
        <MobileNavigation/>
        <div className="header-logo nav-title">
            <Link to={'/'} className="btn-link td header-logo">
                <img className="avatar avatar-md" alt="Logo" src={logo}/>
                <h1 className="heading1 medium brand-name">
                    वयन
                </h1>
            </Link>   
        </div>
        <div className="avatar avatar-text text-md mobile-avatar">RL</div>       
        <form className="input-grp input-pos" id="searchform">
            <input type="text" id="searchterm" className="input-grp-right text-input input-width inp-border" />
            <button className="icon-button input-grp-btn btn-right inp-border"><i className="bi bi-search"></i></button>
        </form>   
        <NavLinks/>   
     </header>
    );
}

export { Navigation }