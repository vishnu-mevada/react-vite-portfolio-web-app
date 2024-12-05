import React, {useState} from 'react'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <nav className="navbar navbar-default bootsnav navbar-fixed dark no-background">
                <div className="container">
                    <div className="navbar-header">
                        <button
                            type="button"
                            className="navbar-toggle"
                            onClick={toggleMenu}
                        >
                            <i className="fa fa-bars"></i>
                        </button>
                        <a className="navbar-brand" href="/">
                            <i className="fa fa-home" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div
                        className={`collapse navbar-collapse menu-ui-design ${isOpen ? 'in' : ''}` }
                        id="navbar-menu"
                    >
                        <ul
                            className="nav navbar-nav navbar-right"
                            data-in="fadeInDown"
                            data-out="fadeOutUp"
                        >
                            <li className="smooth-menu">
                                <a href="#about">
                                    about
                                </a>
                            </li>
                            <li className="smooth-menu">
                                <a href="#skills">
                                    skills
                                </a>
                            </li>
                            <li className="smooth-menu">
                                <a href="#experience">
                                    experience
                                </a>
                            </li>
                            <li className="smooth-menu">
                                <a href="#portfolio">
                                    portfolio
                                </a>
                            </li>
                            <li className="smooth-menu">
                                <a href="#contact">
                                    contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
