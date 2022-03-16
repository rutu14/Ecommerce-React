import './nav.css';
import logo from '../../asset/image/logo.svg'

const Navigation = () => {
    return(
        <header className="nav-header header">
        <div className="mobile-nav">
            <input type="checkbox" />
            <span></span><span></span><span></span>
            <ul className="menu-nav"> 
                <li className="no-list"> 
                    <a href="#" className="btn-link" role="button">
                        <button className="button-icon text-uppercase nav-icon cp">Products
                            <i className="bi bi-basket"></i>
                        </button>
                    </a>
                </li>
                <li className="no-list">
                    <a href="#" className="btn-link" role="button">
                        <button className="button-icon text-uppercase nav-icon cp">Cart
                            <i className="bi bi-cart"></i>
                        </button>
                    </a>
                </li>
                <li className="no-list"> 
                    <a href="#" className="btn-link" role="button">
                        <button className="button-icon text-uppercase nav-icon cp">Wishlist
                            <i className="bi bi-heart"></i>
                        </button>
                    </a>
                </li>
                <li className="no-list"> 
                    <a href="#" className="btn-link td" role="button">
                        <button className="button-icon text-uppercase nav-icon cp">Logout
                            <i className="bi bi-door-closed"></i>
                        </button>
                    </a>   
                </li>                 
            </ul>
       </div>  
        <div className="header-logo nav-title">
            <a href="#" className="btn-link td header-logo">
                <img className="avatar avatar-md" alt="Logo" src={logo}/>
                <h1 className="heading1 medium brand-name">
                    वयन
                </h1>
            </a>   
        </div>
        <div className="avatar avatar-text text-md mobile-avatar">RL</div>       
        <div className="input-grp input-pos" id="searchform">
            <input type="text" id="searchterm" className="input-grp-right text-input input-width inp-border" />
            <button className="icon-button input-grp-btn btn-right inp-border"><i className="bi bi-search"></i></button>
        </div>      
        <div className="nav-items">
            <nav className="icon-section">
                <ul>
                    <li>
                        <a href="#" className="btn-link" role="button">
                            <button className="button-icon nav-icon cp">
                                <i className="bi bi-cart"></i>
                                <span className="textButtonBadge nav-icon-badge">9</span>
                            </button>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="btn-link" role="button">
                            <button className="button-icon nav-icon cp">
                                <i className="bi bi-heart"></i>
                                <span className="textButtonBadge nav-icon-badge">9</span>
                            </button>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="account">  
                <button id="drop-btn" className="avatar avatar-text text-md cp">RL</button>
                <div id="dropdown" className="dropdown-intial">
                    <a href="pages/login.html" className="btn-link cp td text-center m-t10" role="button">
                        Logout
                    </a>
                </div>
            </div>
        </div>
     </header>
    );
}

export { Navigation }