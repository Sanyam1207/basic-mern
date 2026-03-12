"use client";
import { addToCart } from "@/redux/cartSlice";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Suspense, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";

const Products = () => {
  const pathname = usePathname();
  const dispath = useDispatch()
  const [allProducts, setAllProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        setAllProducts(res.data.products);
      } catch (error) {
        console.log("Error in fetching products from the api !!");
      }
    };

    fetchProducts();
  }, [pathname]);

  // debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // memoized filter
  const filteredProducts = useMemo(() => {
    return allProducts.filter((prod) =>
      prod.title.toLowerCase().includes(debouncedSearch.toLowerCase()),
    );
  }, [allProducts, debouncedSearch]);

  return (
    <div>
      <div>
        <Link href={'/cart'}>GOTO CART</Link>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search items by name"
        />
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <div>
          {filteredProducts.length > 0 ? (
            <div>
              {filteredProducts.map((prod) => (
                <div key={prod.id}>
                  <h1>{prod.title}</h1>

                  <Image
                    src={prod.images[0]}
                    alt="product image"
                    height={200}
                    width={200}
                    className="h-32 w-auto"
                  />

                  <h4>{prod.price}</h4>
                  <button onClick={() => {dispath(addToCart(prod.id))}}>Add to cart</button>
                </div>
              ))}
            </div>
          ) : (
            <>No products found</>
          )}
        </div>
      </Suspense>
    </div>
  );
};

export default Products;
