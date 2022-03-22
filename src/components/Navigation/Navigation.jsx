import './nav.css';
import logo from '../../asset/image/logo.svg'
import { MobileNavigation } from './MobileNavigation';
import { NavLinks } from './NavLinks';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context';

const Navigation = () => {
    const [ avatarName,setAvatarName ] = useState(" ")
    const { state } = useContext(UserContext);
    const { tokenPresent, userInfo } = state;
    useEffect(()=>{
        if( tokenPresent){
            setAvatarName( userInfo.foundUser.firstName.charAt(0)+userInfo.foundUser.lastName.charAt(0) )
        }
    },[ tokenPresent])

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
        {tokenPresent
        ? <div className="avatar avatar-text text-md mobile-avatar">{avatarName}</div>  
        : <Link to={'login'} className="btn btn-primary outline login-sign mobile-avatar" type="button">Login</Link> 
        }             
        <form className="input-grp input-pos" id="searchform">
            <input type="text" id="searchterm" className="input-grp-right text-input input-width inp-border" />
            <button className="icon-button input-grp-btn btn-right inp-border"><i className="bi bi-search"></i></button>
        </form>   
        <NavLinks avatarName={avatarName} />   
     </header>
    );
}

export { Navigation }