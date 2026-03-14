import Image from "next/image";
import Products from "./products/page";
import Navbar from "./Navbar";
import Carousel from "./Carousel";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* <Products /> */}
      <Carousel />
    </div>
  );
}
