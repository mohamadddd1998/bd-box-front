import BestSales from "@/containers/features/Home/BestSales";
import Offer from "@/containers/features/Home/Offer";
import Promo from "@/containers/features/Home/Promo";
import UserBoxes from "@/containers/features/Home/UserBoxes";
import WhyUs from "@/containers/features/Home/WhyUs";

export default function Home() {
  return (
    <main className="pb-16">
      <WhyUs />
      <BestSales />
      <Offer />
      <UserBoxes />
      <Promo />
    </main>
  );
}
