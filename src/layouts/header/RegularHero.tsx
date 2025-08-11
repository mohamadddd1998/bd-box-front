import imoji1 from "@/assets/images/imoji-1.png";
import Button from "@/components/Button";
import Link from "next/link";

const RegularHero = () => {
  return (
    <div className="text-center py-18 flex flex-col items-center justify-center gap-6">
      <div className="md:text-5xl text-3xl relative font-Bahnman">
        <strong className="text-darkPrimary">
          کــــــــــــــــــــــــــــــــادوتو
        </strong>
        <span className="text-secondaryColor"> خـودت بـساز</span>
        <div className="absolute -top-12 right-1 md:right-8 md:-top-22">
          <img src={imoji1.src} className="max-md:w-18" />
        </div>
      </div>
      <h1 className="border-b-2 border-b-secondaryColor bg-secondaryColor/10 p-1">
        <strong className="md:text-xl text-sm font-extrabold text-darkPrimary">
          کـــادوبــاکس
        </strong>
        <span className="text-secondaryColor md:text-base text-sm">
          ، طـراحی باکس‌ هدیـه به صورت اختصاصی
        </span>
      </h1>
      <div className="flex items-center gap-6 my-4">
        <Link href={"/"}>
          <Button variant="secondary">بریـم که بسـازیمش</Button>
        </Link>
        <a href="#" className="text-xs text-darkGrayColor">
          اطـلاعات بیشتـر
        </a>
      </div>
    </div>
  );
};
export default RegularHero;
