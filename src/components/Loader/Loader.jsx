import './loader.css'

const SpinLoader = () => {
    return ( <div className="loader"></div> );
}

const DotsLoader = () => {
    return ( <div className="stage"><div className="dot-pulse"></div></div> );
}

export { SpinLoader, DotsLoader };