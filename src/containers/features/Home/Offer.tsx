import Button from "@/components/Button";
import Link from "next/link";

const Offer = () => {
  return (
    <section id="offer" className="mx-2 lg:mx-0 my-16">
      <div
        className="offerBg container max-w-6xl py-8 flex flex-col gap-4 lg:gap-0 
              justify-around max-lg:bg-secondaryColor rounded-4xl"
      >
        <div className="space-y-2">
          <p className="text-3xl">
            <b className="text-white lg:text-secondaryColor">هدیه</b>
            <strong className="text-darkPrimary">کـــادوباکـــس</strong>
          </p>
          <p className="text-white lg:text-secondaryColor">
            <span className="text-darkPrimary">%30</span> تخفیف برای تمامی باکس
            ها به مناسب روز مـــادر
          </p>
        </div>
        <div className="space-y-4 px-8">
          <p className="lg:text-white text-sm">
            برای دریافت کد تخفیف روی دکمه زیر کلیک کنید:
          </p>
          <Link href={"/"}>
            <Button variant="primary">بریـم که بسـازیمش</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Offer;
