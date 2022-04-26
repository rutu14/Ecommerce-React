import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useUserActions } from "../../context";
import './user-page.css'

const UserPage = () => {
    const navigate = useNavigate();
    const { state } = useUserActions();
    const { tokenPresent, userInfo } = state;
    const [ avatarName, setAvatarName ] = useState(' ');
    const [ creds, setCreds ] = useState({ firstName:' ', lastName:' ', email:' ' })

    useEffect(()=>{
        if( tokenPresent ){
            if(userInfo.createdUser){
                setAvatarName( userInfo.createdUser.firstName.charAt(0).toUpperCase()+userInfo.createdUser.lastName.charAt(0).toUpperCase() )
                setCreds({firstName: userInfo.createdUser.firstName, lastName:userInfo.createdUser.lastName, email:userInfo.createdUser.email});
            }else{
                setAvatarName( userInfo.foundUser.firstName.charAt(0).toUpperCase()+userInfo.foundUser.lastName.charAt(0).toUpperCase() )
                setCreds({firstName: userInfo.foundUser.firstName, lastName:userInfo.foundUser.lastName, email:userInfo.foundUser.email});
            }
        }
    },[ tokenPresent ])

    return(
        <main className="main-container">
            <section className="profile-grid">

                <section>
                    <div className="avatar avatar-text text-xl ">{avatarName}</div> 
                </section>

                <section className="creds-section m-t10">
                    <section className="value-section">
                        <h2 className="text3 medium mobile-font">First Name:</h2>
                        <h3 className="text3 regular mobile-font">{creds.firstName}</h3>
                    </section>
                    <section className="value-section m-t10">
                        <h2 className="text3 medium mobile-font">Last Name:</h2>
                        <h3 className="text3 regular mobile-font">{creds.lastName}</h3>
                    </section>
                    <section className="value-section m-t10">
                        <h2 className="text3 medium mobile-font">Email:</h2>
                        <h3 className="text3 regular mobile-font">{creds.email}</h3>
                    </section>
                </section>
                
                <svg width="100%" height="6" className="m-t20" xmlns="http://www.w3.org/2000/svg">
                    <line className="divider" x1="0" y1="1" x2="100%" y2="1"></line>
                </svg>

                <section className="btn-section m-t20">
                    <Link to={'/'} className="btn btn-primary td outline text-uppercase hero-btn product-btn user-btn cp" type="button">
                        Your Orders
                    </Link>
                    <Link to={'address'} className="btn btn-primary td outline text-uppercase hero-btn product-btn user-btn cp" type="button" >
                        Address
                    </Link>
                </section>
            <Outlet/>
            </section>            
        </main>
    );
}

export { UserPage };