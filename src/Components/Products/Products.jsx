import React from "react";
import "../Products/Products.css";
import product from "./Product";

const Products = () => {
  return (
    <>
      <section className="ProductSec">
        <div className="marketItemWrapper">
          <div className="marketItemBox">
            <div className="marketItem">
              <div className="row">
                <ul className="marketItemCard grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center">
                  {product[0].productImg.map((item) => (
                    <li key={item.text}>
                      <a href={item.href}>
                        <div className="image inline-block">
                          <img src={item.img} alt={item.text} />
                          <h1 className="uppercase font-bold text-sm text-secondary-200 text-center">
                            {item.text}
                          </h1>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
