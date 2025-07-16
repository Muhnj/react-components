import ProductCard from "@/components/dementa/ProductCard";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <ProductCard title={"Nike Shoes V1"} desc={"The 1st model of Nike shoes."} />
      <ProductCard title={"Nike Shoes V2"} desc={"The 2nd model of Nike shoes."} />
      <ProductCard title={"Nike Shoes V3"} desc={"The 3rd model of Nike shoes."} />
      <ProductCard title={"Nike Shoes V4"} desc={"The 4th model of Nike shoes."} />
      <ProductCard title={"Nike Shoes V5"} desc={"The 5th model of Nike shoes."} />
      <ProductCard title={"Nike Shoes V6"} desc={"The 6th model of Nike shoes."} />
      <ProductCard title={"Nike Shoes V7"} desc={"The 7th model of Nike shoes."} />
    </div>
  );
}
