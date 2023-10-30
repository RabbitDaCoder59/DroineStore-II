import React from "react";
import "../BannerTwo/BannerTwo.css";
import { bannerTwo } from "../BannerData";

const BannerTwo = () => {
  return (
    <div>
      <div className="shopBanner">
        <div className="shopBannerWrapper">
          <div className="shopBannerBox flex-col lg:flex-row">
            {bannerTwo[0].bannerTwo.map((item, index) => (
              <div key={index} className="shopBannerCard">
                <div className="shopBannerContent">
                  <h2>
                    {item.h1}
                    <br /> {item.BrH2}
                  </h2>
                  <div className="contentPrice">{item.contentPrice}</div>
                  <a href={item.shopHref}>{item.shopTxt}</a>
                </div>
                <div className="shopbannerImg">
                  <img
                    className={item.clipper && "clipper"}
                    src={item.img}
                    alt={item.imgAlt}
                  />
                </div>
              </div>
            ))}
            {/* <div className="shopBannerCard">
              <div className="shopBannerContent">
                <h2>Grooming</h2>
                <div className="contentPrice">Starting at $49</div>
                <a href="#">Shop now</a>
              </div>
              <div className="shopbannerImg">
                <img
                  className="clipper"
                  src="https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-grooming.png"
                  alt=""
                />
              </div>
            </div>
            <div className="shopBannerCard">
              <div className="shopBannerContent">
                <h2>
                  Video <br />
                  games
                </h2>
                <div className="contentPrice">Starting at $49</div>
                <a href="#">Shop now</a>
              </div>
              <div className="shopbannerImg">
                <img
                  src="https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-video-games.png"
                  alt=""
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerTwo;
