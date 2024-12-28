import React, {useState} from 'react'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const handleScroll = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: "smooth", block: "start"});
        }
    };

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
                                <a href="#about" onClick={(e) => handleScroll(e, "about")}>
                                    about
                                </a>
                            </li>
                            <li className="smooth-menu">
                                <a href="#skills" onClick={(e) => handleScroll(e, "skills")}>
                                    skills
                                </a>
                            </li>
                            <li className="smooth-menu">
                                <a href="#experience" onClick={(e) => handleScroll(e, "experience")}>
                                    experience
                                </a>
                            </li>
                            <li className="smooth-menu">
                                <a href="#portfolio" onClick={(e) => handleScroll(e, "portfolio")}>
                                    portfolio
                                </a>
                            </li>
                            <li className="smooth-menu">
                                <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
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
