import BestSales from "@/containers/features/Home/BestSales";
import Offer from "@/containers/features/Home/Offer";
import Promo from "@/containers/features/Home/Promo";
import UserBoxes from "@/containers/features/Home/UserBoxes";
import WhyUs from "@/containers/features/Home/WhyUs";
import RegularHero from "@/layouts/header/RegularHero";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense fallback={<h1>Loading ... </h1>}>
        {" "}
        <RegularHero />
      </Suspense>
      <main className="pb-16">
        <Suspense fallback={<h1>Loading ... </h1>}>
          <WhyUs />
        </Suspense>
        <Suspense fallback={<h1>Loading ... </h1>}>
          <BestSales />
        </Suspense>
        <Suspense fallback={<h1>Loading ... </h1>}>
          <Offer />
        </Suspense>
        <Suspense fallback={<h1>Loading ... </h1>}>
          <UserBoxes />
        </Suspense>
        <Suspense fallback={<h1>Loading ... </h1>}>
          <Promo />
        </Suspense>
      </main>
    </>
  );
}
