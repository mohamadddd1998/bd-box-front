import imoji2 from "@/assets/images/imoji-2.png";
import Button from "@/components/Button";

const Payment = () => {
  return (
    <div className=" flex flex-col items-center max-w-sm justify-center gap-4 text-darkGrayColor mx-auto">
      <img src={imoji2.src} className="w-40" />
      <h1 className="text-2xl font-extrabold">عجب باکسی شد :)</h1>
      <p className="text-center">
        قیمت باکسی که طراحی کـردی ( 420,000 تومان ) شده برای پرداخت و سفارش اون
        از درگاه آنلاین استفاده کن:
      </p>
      <Button variant="primary">افزودن به سبد خرید</Button>
    </div>
  );
};
export default Payment;
