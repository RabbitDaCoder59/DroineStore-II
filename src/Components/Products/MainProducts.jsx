import React from "react";
import "../Products/Products.css";
import { RiShoppingBasketFill } from "react-icons/ri";
import { AiOutlineStar } from "react-icons/ai";
import marketData from "./marketData";
const MainProducts = ({
  title,
  seeMoreTxt,
  seeMoreHref,
  imgOne,
  imgOneAlt,
  imgTwo,
  imgTwoAlt,
  Desc,
  cutPrice,
  Price,
}) => {
  return (
    <>
      <section className="mainProductSec">
        <div className="marketItemWrapper">
          <div className="marketItemTwoBox">
            {marketData.map((item, index) => (
              <div key={index} className="marketItemTwo">
                <div className="marketTitle">
                  <h1>{title}</h1>
                  <a href={seeMoreHref}>{seeMoreTxt}</a>
                </div>
                <div className="row pt-12">
                  <ul className="marketItemTwoCard">
                    {item.contents.map((contentsItem, contentsIndex) => (
                      <li key={contentsIndex}>
                        <a href="#">
                          <div className="marketItemImg relative">
                            <div className="image-container">
                              <img
                                src={contentsItem.image1.img}
                                alt={contentsItem.image1.alt}
                                className={contentsItem.image2 && "hover-image"}
                              />
                              {contentsItem.image2 && (
                                <img
                                  src={contentsItem.image2.img}
                                  alt={contentsItem.image2.alt}
                                  className="hover-image"
                                />
                              )}
                            </div>
                            <div className="marketItemDescription">
                              <div className="rating">
                                <div className="star">
                                  <AiOutlineStar />
                                </div>
                                <div className="star">
                                  <AiOutlineStar />
                                </div>
                                <div className="star">
                                  <AiOutlineStar />
                                </div>
                                <div className="star">
                                  <AiOutlineStar />
                                </div>
                                <div className="star">
                                  <AiOutlineStar />
                                </div>
                              </div>
                              {contentsItem.content.map((content, index) => (
                                <>
                                  <div>
                                    <a href="#" className="Description">
                                      {content.Desc}
                                    </a>
                                  </div>

                                  <div className="price">
                                    <del>{content.price} </del>
                                    {content.cutPrice}
                                  </div>
                                </>
                              ))}
                            </div>
                            <div className="saleCartWrapper">
                              <div className="saleCartItem">
                                <div className="sale">Sale!</div>
                                <div className="Itemcart">
                                  <RiShoppingBasketFill className="cartIcon" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MainProducts;
