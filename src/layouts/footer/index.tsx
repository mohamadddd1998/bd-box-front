import Devider from "@/components/Devider";
import SocialIcon from "@/components/SocialIcon";

const Footer = () => {
  return (
    <footer>
      <section className="footer pt-8 pb-6">
        <div className="container max-w-6xl flex flex-col items-center gap-4">
          <Devider />
          <div className="flex flex-col gap-2 items-center">
            <strong className="text-darkPrimary font-bold text-2xl">
              کــــــادوبــاکس
            </strong>
            <span className="text-secondaryColor text-sm">
              طراحی باکس‌ هدیه به صورت اختصاصی
            </span>
          </div>
          <div className="flex gap-4">
            <SocialIcon icon={"instagram"} />
            <SocialIcon icon={"telegram"} />
            <SocialIcon icon={"whatsUp"} />
          </div>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
