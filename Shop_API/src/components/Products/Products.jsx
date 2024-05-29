import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const api = "https://fakestoreapi.com/products";
    fetch(api)
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);
  return (
    <>
      <h2 className="mt-5 underline text-center text-2xl font-bold leading-9 tracking-tight text-orange-700">
        List Of Products
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => {
          return (
            <div className="flex flex-wrap flex-row justify-around m-10 max-w-xs overflow-hidden rounded-lg bg-white shadow-xl">
              <img
                className="h-60 rounded-t-lg object-cover"
                src={product.image}
                alt={product.title}
              />

              <div className="mt-4 px-5 pb-5">
                <h5 className="text-lg font-semibold tracking-tight text-slate-900">
                  {product.title}
                </h5>

                <div className="mt-2.5 mb-5 flex items-center">
                  <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                    {product.rating["rate"]} ({product.rating["count"]})
                  </span>
                </div>
                <div className="flex items-center justify-evenly">
                  <p>
                    <span className="text-2xl font-semibold text-slate-900">
                      ${product.price}
                    </span>
                  </p>
                  <Link
                    to="#"
                    className="flex items-center rounded-md bg-orange-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
