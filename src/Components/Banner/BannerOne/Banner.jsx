import React from "react";
import "../BannerOne/Banner.css";
import { bannerOne } from "../BannerData";

const Banner = () => {
  return (
    <>
      <section className="BannerSec">
        <div class="shopBanner">
          <div class="shopBannerWrapper flex justify-center">
            <div class="shopBannerBox w-quater h-48 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-items-center">
              {bannerOne[0].bannerOne.map((item, index) => (
                <a key={index} href={item.href}>
                  <div class="Banner py-4">
                    <div class="BannerImg">
                      <img src={item.img} alt={item.text} />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
