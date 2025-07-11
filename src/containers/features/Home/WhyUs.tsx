import ServiceCard from "@/components/cards/ServiceCard";
import car from "@/assets/images/car.svg";
import consult from "@/assets/images/consult.svg";
import customize from "@/assets/images/customize.svg";
import insurance from "@/assets/images/insurance.svg";
import SectionSubTitle from "@/components/SectionSubTitle";
import SectionTitle from "@/components/SectionTitle";

const WhyUs = () => {
  return (
    <section id="why-us">
      <div className="container flex flex-col gap-4 justify-center items-center py-8">
        <SectionTitle title={"چرا"} subtitle={"کـــادوبـاکس"} />
        <SectionSubTitle text={"طراحان سایت هنگام طراحی قالب سایت"} />
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-8 
        items-center justify-center"
        >
          <ServiceCard
            img={car.src}
            title="ارسال سریع کادو"
            description="بسته بندی و ارسال کادو در همان روز"
          />
          <ServiceCard
            img={consult.src}
            title="مشاوره و پشتیبانی خرید کادو"
            description="مشاوره اختصاصی برای انتخاب بهترین هدیه"
          />
          <ServiceCard
            img={insurance.src}
            title="بیمه هدایا"
            description=" امکان مرجوعی تا 7 روز در صورت مشکل"
          />
          <ServiceCard
            img={customize.src}
            title="امکان شخصی سازی"
            description=" طراحی باکس به صورت اختصاصی"
          />
        </div>
      </div>
    </section>
  );
};
export default WhyUs;
