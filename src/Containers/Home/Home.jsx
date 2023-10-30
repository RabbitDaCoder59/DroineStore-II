import React from "react";
import Header from "../../Components/Header/Header";
import HomePage from "../../Components/HomePage/HomePage";
import Footer from "../../Components/Footer/Footer";
import Products from "../../Components/Products/Products";
import MainProducts from "../../Components/Products/MainProducts";
import Banner from "../../Components/Banner/BannerOne/Banner";
import BannerTwo from "../../Components/Banner/BannerTwo/BannerTwo";
// import { bannerOne, bannerTwo } from "../../Components/Banner/BannerData";
import marketData from "../../Components/Products/marketData";
const Home = () => {
  return (
    <div className="HomeContainer w-full h-full">
      <Header />
      <HomePage />
      <Products />
      <Banner />
      <MainProducts
        title={marketData.map((item) => item.title)}
        seeMoreTxt={marketData.map((item) => item.MorePage)}
        seeMoreHref={marketData.map((item) => item.href)}
        imgOne={marketData.map((item) =>
          item.contents.map((content) => content.image1.img)
        )}
        imgTwo={marketData.map((item) =>
          item.contents.map((content) => content.image2?.img)
        )}
        // imgOneAlt={marketData.map((item) =>
        //   item.contents.map((content) => content.image1.alt)
        // )}
        // imgTwoAlt={marketData.map((item) =>
        //   item.contents.map((content) => content.image2.alt)
        // )}
      />
      <BannerTwo />
      <Footer />
    </div>
  );
};

export default Home;
