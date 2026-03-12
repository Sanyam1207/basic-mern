import Image from "next/image";
import Products from "./products/page";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Products />
    </div>
  );
}
