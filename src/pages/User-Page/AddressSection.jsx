import { useState } from "react";
import { AddressCard, CreateAddress } from "../../components";
import { useAddressActions } from "../../context";

const AddressSection = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    const { state } = useAddressActions();
    const { addressInfo } = state;

    return(
        <section className="user-profile-actions">
            <svg width="100%" height="6" className="m-t20" xmlns="http://www.w3.org/2000/svg">
                <line className="divider" x1="0" y1="1" x2="100%" y2="1"></line>
            </svg>

            <section>
                {!isOpen && <button className="btn btn-primary td outline text-uppercase m-t10 hero-btn product-btn user-btn" onClick={open} >
                    Add New Address
                </button>}
                { isOpen && <CreateAddress close={close}/>}
            </section>
            

            { addressInfo && addressInfo.length === 0 
                ?<h3 className="heading2 medium m-t100 text-center font-color">
                    Add Address 🚚
                </h3>
                :<section className="grid-4-cols m-t20 grid-mobile">
                    {addressInfo.map(( cardValue ) => ( <AddressCard cardValue={cardValue}/> ))}
                </section>
            }
        </section>
    );
}
export { AddressSection }