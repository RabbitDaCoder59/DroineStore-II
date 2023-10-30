import React, { useState, useEffect } from "react";
import "../Footer/Footer.css";
import { FaChevronUp } from "react-icons/fa";
import { FaRegEnvelopeOpen } from "react-icons/fa6";
import footerLinks from "./FooterDataLink";
const Footer = () => {
  const ownerText = "© 2023 Droine Store. Powered by Edeh chinedu daniel";
  const logo =
    "https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-logo-mono.svg";
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsButtonVisible(true);
      } else {
        setIsButtonVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="FooterSec">
        <div className="w-full max-w-100: h-full bg-white py-2">
          <div className="SubscribeWrapper flex font-poppins px-8 justify-center  my-5 py-4 ">
            <div className="SubscribeBox grid grid-cols-1 lg:grid-cols-4 place-items-center">
              <div className="SubscribeCard border-r-0 lg:border-r border-gray-300">
                <div className="svgBox">
                  <FaRegEnvelopeOpen className="text-9xl mr-5" />
                </div>
                <h1 className="text-xl font-semibold ml-4 text-secondary-200">
                  Subscribe to our newsletter
                </h1>
              </div>
              <div className="SubscribeCard">
                <div className="text-secondary-300 text-sm ml-0 lg:ml-8">
                  Sign up for all the latest news and special offers
                </div>
              </div>

              <div className="SubscribeCard">
                <form
                  className="subscribeForm ml-6 lg:ml-0"
                  action=""
                  method="post"
                >
                  <input placeholder="Your email" type="text" />
                  <button>subscribe</button>
                </form>
              </div>
            </div>
          </div>

          <footer>
            <div className="footerWrapper flex justify-center font-inter w-full">
              <div className="footerBox grid grid-cols-1 lg:grid-cols-4">
                <div className="footerCard">
                  <img src={logo} alt="logo" />
                </div>
                <div className="footerCard">
                  {footerLinks
                    .filter((titleName) => titleName.title === "Shop")
                    .map((item, index) => (
                      <div key={index}>
                        <div className="footerTitle">{item.title}</div>
                        <nav>
                          {item.links && (
                            <ul className="footerLinks">
                              {item.links.map((link, index) => (
                                <li key={index}>
                                  <a href={link.href}>{link.text}</a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </nav>
                      </div>
                    ))}
                </div>
                <div className="footerCard">
                  {footerLinks
                    .filter((titleName) => titleName.title === "Need help?")
                    .map((item, index) => (
                      <div key={index}>
                        <div className="footerTitle">{item.title}</div>
                        <nav>
                          {item.links && (
                            <ul className="footerLinks">
                              {item.links.map((link, index) => (
                                <li key={index}>
                                  <a href={link.href}>{link.text}</a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </nav>
                      </div>
                    ))}
                </div>
                <div className="footerCard">
                  {footerLinks
                    .filter((titleName) => titleName.title === "Contact")
                    .map((item, index) => (
                      <div key={index}>
                        <div className="footerTitle">{item.title}</div>
                        <nav>
                          {item.links && (
                            <ul className="footerLinks">
                              {item.links.map((link, index) => (
                                <li key={index}>
                                  <a href={link.href}>{link.text}</a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </nav>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </footer>
        </div>

        <div className="footerBottom w-full h-full min-h-16 lg:min-h-20 bg-secondary-200 py-7 lg:px-20">
          <div className="bottomWrapper flex  flex-col lg:flex-row justify-between">
            <div className="bottomCols text-secondary-100 mb-6 lg:mb-0 text-center md:text-start">
              {ownerText}
            </div>
            <div className="bottomCols flex justify-center items-center">
              <div className="payRow">
                <div className="payImg">
                  <img
                    src="https://websitedemos.net/electronic-store/wp-content/uploads/sites/1055/2022/03/electronic-store-footer-payment-gateway-icon.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="">
          {isButtonVisible && (
            <div
              className="takeTop w-8 h-9 bg-blue fixed bottom-8 right-8 flex justify-center items-center text-white rounded"
              onClick={scrollToTop}
            >
              <FaChevronUp />
            </div>
          )}
        </a>
      </section>
    </>
  );
};

export default Footer;
