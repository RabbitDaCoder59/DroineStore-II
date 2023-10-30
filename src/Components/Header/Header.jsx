import React, { useState } from "react";
import "../../Containers/Home/Home.css";
import "../Header/Header.css";
import Hamburger from "hamburger-react";
import { BiSearch } from "react-icons/bi";
import { HiChevronDown } from "react-icons/hi2";
import { BsFillBasketFill } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";
import linkData from "./NavData";
const Header = () => {
  const [showNavItem, setShowNavItem] = useState(false);
  const [showChevron, setShowChevron] = useState(false);
  const [showCart, setshowCart] = useState(true);

  const toggleCart = () => {
    setshowCart(!showCart);
  };
  const toggleMenu = () => {
    setShowNavItem(!showNavItem); // Toggle the visibility of your menu
  };
  const toggleChevron = () => {
    setShowChevron(!showChevron); // Toggle the visibility of your menu
    console.log("clicked");
  };
  let cartAmount = 0;
  const logo =
    "https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-logo.svg";
  return (
    <>
      <header className="w-full font-inter">
        <div className="w-full h-10 px-8 py-1.5 bg-liteBlue text-white  justify-between items-center hidden lg:flex">
          <div className="text-base font-normal">
            24/7 Customer service <b>1-800-234-5678</b>
          </div>
          <div className="text-base font-normal">
            <a href="#">Shipping & return</a>
            <a href="#" className="ml-7">
              Track order
            </a>
          </div>
        </div>
        <div className="w-full h-20 bg-blue px-10 hidden lg:flex justify-between items-center">
          <div>
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div>
            <form className="flex items-center" method="get">
              <input
                className="w-56 h-13 px-4 placeholder:font-light placeholder:text-secondary-500"
                type="text"
                placeholder="Search products..."
              />
              <button
                className="bg-button-100 px-7 py-4 ml-4 hover:bg-blue"
                type="submit"
              >
                <BiSearch className="text-white text-xl" />
              </button>
            </form>
          </div>
        </div>
        <div className="w-full h-14 bg-blue border-t border-line flex justify-between items-center px-2 lg:px-6">
          <span className="lg:hidden block">
            <Hamburger
              direction="left"
              className="icon"
              toggled={showNavItem} // Pass the state of your menu to control the Hamburger component
              toggle={toggleMenu}
              size={32}
            />
          </span>
          <div className="lg:hidden block">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <nav className="hidden lg:block">
            <ul className="navLinks">
              {linkData.map((item, index) => (
                <li key={index} className={item.submenu ? "SubNav" : ""}>
                  <a href={item.href}>{item.text}</a>
                  {item.submenu && (
                    <ul className="productsMenu">
                      {item.submenu.map((subitem, subindex) => (
                        <li key={subindex}>
                          <a href={subitem.href}>{subitem.text}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="cartLogin flex items-center">
            <a href="#">
              <div className="cart relative" onClick={toggleCart}>
                <BsFillBasketFill className="icon" />
                <div className="cartAmount absolute h-6 w-6 rounded-full bg-gray-100 text-center text-blue-500 bottom-2 left-5">
                  {cartAmount}
                </div>
              </div>
            </a>
            <div className="h-7 border-l border-topHeader mx-7"></div>
            <a href="#">
              <div className="capitalize text-white font-bold">Log in</div>
            </a>
          </div>
        </div>

        {/* Cart Nav Sec */}
        <div
          id={showCart ? "hidden" : ""}
          className="cartSideNav md:w-thrice w-full lg:w-96 h-full aspect-overTwo bg-white text-black fixed right-0 top-0 z-10"
        >
          <div className="head flex justify-between p-3 border-b border-gray-400">
            <span className="capitalize font-bold">shopping cart</span>
            <span>
              <LiaTimesSolid
                onClick={toggleCart}
                className="text-2xl font-bold"
              />
            </span>
          </div>
          <div className="h-thrice flex justify-center items-center py-6 px-3">
            <div className="noStock">
              <span className="text-center font-bold">
                No products in the cart.
              </span>
            </div>
          </div>
          <div className="h-half">
            <div className="cart-Btn flex justify-center py-4">
              <a
                href="#"
                className="block btn w-thrice h-11 bg-secondary-200 text-white capitalize text-center py-2"
              >
                <span className="font-bold"> continue shopping </span>
              </a>
            </div>
          </div>
        </div>
      </header>
      <div
        className="dropMenu  w-screen  bg-white px-9 py-4 "
        id={showNavItem ? "" : "hidden"}
      >
        <div className="dropMenuBox">
          <nav>
            <ul className="dropNavLinks w-full">
              {linkData.map((dropLink, dropIndex) => (
                <li
                  key={dropIndex}
                  className={dropLink.submenu ? "relative w-full" : ""}
                >
                  <a href={dropLink.href}>{dropLink.text}</a>
                  {dropLink.submenu && (
                    <>
                      <span className="float-right chevron">
                        <HiChevronDown onClick={toggleChevron} />
                      </span>
                      <ul className="w-full" id={showChevron ? "" : "hidden"}>
                        {dropLink.submenu.map((dropItem, itemIndex) => (
                          <li key={itemIndex}>
                            <a href={dropItem.href}>{dropItem.text}</a>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
