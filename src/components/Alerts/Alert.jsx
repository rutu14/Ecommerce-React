
const Alert = ({ action, closefn, title, description }) => {
    if( action === 'success' ){
        return(
            <div className="alert alert-success">        
                <span className="alert-icon"><i className="bi bi-check2-circle"></i></span>
                <div className="alert-content ">
                     <h1 className="alert-title">{title}</h1>
                     <h4 className="alert-description">{description}</h4>
                </div>
                <span class="alert-icon close-btn end-position cp" onClick={closefn} role={'button'}><i class="bi bi-x"></i></span>
             </div> 
        );
    }
    if( action === 'warning' ){
        return(
            <div className="alert alert-warning">        
                <span className="alert-icon"><i className="bi bi-exclamation-circle"></i></span>
                <div className="alert-content ">
                     <h1 className="alert-title">{title}</h1>
                     <h4 className="alert-description">{description}</h4>
                </div>
                <span class="alert-icon close-btn end-position cp" onClick={closefn} role={'button'}><i class="bi bi-x"></i></span>
             </div> 
        );
    }
    if( action === 'info' ){
        return(
            <div className="alert alert-info">        
                <span className="alert-icon"><i className="bi bi-info-circle"></i></span>
                <div className="alert-content ">
                     <h1 className="alert-title">{title}</h1>
                     <h4 className="alert-description">{description}</h4>
                </div>
                <span class="alert-icon close-btn end-position cp" onClick={closefn} role={'button'}><i class="bi bi-x"></i></span>
             </div> 
        );
    }
    if( action === 'error' ){
        return(
            <div className="alert alert-error">        
                <span className="alert-icon"><i className="bi bi-x-circle"></i></span>
                <div className="alert-content ">
                     <h1 className="alert-title">{title}</h1>
                     <h4 className="alert-description">{description}</h4>
                </div>
                <span class="alert-icon close-btn end-position cp" onClick={closefn} role={'button'}><i class="bi bi-x"></i></span>
             </div> 
        );
    }
    return(<></>);
}

export {Alert}