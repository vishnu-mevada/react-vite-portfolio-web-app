import React, { useState, useEffect } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer id="footer-copyright" className="footer-copyright">
        <div className="container">
          <div className="hm-footer-copyright text-center">
            <p>&copy; copyright 2024</p>
          </div>
        </div>

        {showScrollTop && (
          <div id="scroll-Top" onClick={scrollToTop}>
            <div className="return-to-top">
              <i className="fa fa-angle-up" id="scroll-top"></i>
            </div>
          </div>
        )}
      </footer>
    </>
  );
};

export default Footer;
