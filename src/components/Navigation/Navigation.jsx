import './nav.css';
import logo from '../../asset/image/logo.svg'
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useUserActions, useFilters } from '../../context';
import { MobileNavigation, NavLinks, ThemeToggle } from '../index';


const Navigation = () => {
    const { pathname } = useLocation();
    const [ avatarName,setAvatarName ] = useState(" ");
    const [ searchInput, setSearchInput ] = useState(" ")
    const { state } = useUserActions();
    const { tokenPresent, userInfo } = state;
    const { dispatch } = useFilters();

    const handleSearchData = () => dispatch({ type:"SEARCH", payload: searchInput });

    const handleResetData = () => { 
        dispatch({ type: "CLEAR" });
        setSearchInput("");
    }

    useEffect(()=>{
        if( tokenPresent ){
            if(userInfo.createdUser){
                setAvatarName( userInfo.createdUser.firstName.charAt(0).toUpperCase()+userInfo.createdUser.lastName.charAt(0).toUpperCase() )
            }else{
                setAvatarName( userInfo.foundUser.firstName.charAt(0).toUpperCase()+userInfo.foundUser.lastName.charAt(0).toUpperCase() )
            }
        }
    },[ tokenPresent ])

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
        ?   <>
                <ThemeToggle customClass={'mobile-avatar'}/>
                <div className="avatar avatar-text text-md mobile-avatar">{avatarName}</div>
            </>  
        :   <>
                <ThemeToggle customClass={'mobile-avatar'}/>
                <Link to={'login'} className="btn btn-primary outline td login-sign mobile-avatar" type="button">Login</Link> 
            </>
        }    

        { pathname === '/product' 
        ? <section className="input-grp input-pos">
            { searchInput !== " " ? <button className="icon-button font-color " onClick={handleResetData} ><i className="bi bi-x"></i></button> : ' ' };  
            <input type="text" value={searchInput} onChange={ e => setSearchInput(e.target.value) } className="input-grp-right text-input input-width inp-border" />
            <button className="icon-button input-grp-btn btn-right inp-border" onClick={handleSearchData} ><i className="bi bi-search"></i></button>
        </section>   
        : ' '
        }

        <NavLinks avatarName={avatarName} />   
     </header>
    );
}

export { Navigation }