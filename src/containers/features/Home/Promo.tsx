import gift1 from "@/assets/images/gift-1.png";
import Button from "@/components/Button";
const Promo = () => {
  return (
    <section id="promo">
      <div className="container max-w-6xl flex flex-col md:flex-row gap-6">
        <div className="flex-1 md:self-center bg-white rounded-8xl p-8">
          <img src={gift1.src} className="w-80 md:w-full rounded-8xl mx-auto" />
        </div>
        <div className="flex-1 py-12 px-4 space-y-4">
          <p className="font-extrabold text-xl">
            <strong className="text-primary">کـادوباکـس</strong>، طراحی و خرید
            اینترنتی کادو و هدیه
          </p>
          <p className="text-grayColor text-sm leading-6">
            طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند
            که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار
            فرما نمیدهد. اگر طراح بخواهد دنبال متن های مرتبط بگردد تمرکزش از روی
            کار اصلی برداشته میشود و اینکار زمان بر خواهد بود. همچنین طراح به
            دنبال این است که پس از ارایه کار نظر دیگران را در مورد طراحی جویا
            شود و نمی‌خواهد افراد روی متن های موجود تمرکز کنند.
          </p>
          <div className="flex items-center gap-6 my-4">
            <Button variant="secondary">بریم که بسازیمش</Button>
            <a href="#" className="text-xs text-darkGrayColor">
              اطـلاعات بیشتـر
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Promo;
