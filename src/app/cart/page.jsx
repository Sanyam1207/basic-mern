"use client";

import { useSelector } from "react-redux";

export default function Cart() {
  const items = useSelector((state) => state.cart.items);

  return (
    <div>
      <h1>Cart</h1>

      {items.map((item, id) => (
        <div key={item.id || id}>
          {item.title} - {item.qty}
        </div>
      ))}
    </div>
  );
}
