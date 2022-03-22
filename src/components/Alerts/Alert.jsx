
const Alert = ({ action, customClass, closefn, title, description }) => {
    const alertTypes = [
        {
            type: 'success',
            class: 'alert-success',
            icon: 'bi-check2-circle'
        },{
            type: 'warning',
            class: 'alert-warning',
            icon: 'bi-exclamation-circle'
        },{
            type: 'info',
            class: 'alert-info',
            icon: 'bi-info-circle'
        },{
            type: 'error',
            class: 'alert-error',
            icon: 'bi-x-circle'
        }
    ]
    return(<>
        {alertTypes.map( (alert) => {
            if(action === alert.type){
                return(
                    <div key={alert.type} className={`alert ${alert.class} ${customClass || " "}`}>        
                        <span className="alert-icon"><i className={`bi ${alert.icon}`}></i></span>
                        <div className="alert-content ">
                            <h1 className="alert-title">{title}</h1>
                            <h4 className="alert-description">{description}</h4>
                        </div>
                        <span className="alert-icon close-btn end-position cp" onClick={closefn} role={'button'}><i className="bi bi-x"></i></span>
                    </div>
                )
            }          
        })} </>       
    );
}

export {Alert}