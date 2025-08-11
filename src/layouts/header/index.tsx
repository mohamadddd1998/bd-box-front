import ellipse1 from "@/assets/images/ellipse-1.png";
import ellipse2 from "@/assets/images/ellipse-2.png";
import ellipse3 from "@/assets/images/ellipse-3.png";
import ellipse4 from "@/assets/images/ellipse-4.png";
import box1 from "@/assets/images/box-1.png";
import box2 from "@/assets/images/box-2.png";
import box3 from "@/assets/images/box-3.png";
import box7 from "@/assets/images/box-7.png";
import box4 from "@/assets/images/box-4.png";
import box5 from "@/assets/images/box-5.png";
import box6 from "@/assets/images/box-6.png";
import Devider from "@/components/Devider";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
import Cart from "./Cart";
import User from "./User";

const Header = () => {
  return (
    <header className="relative">
      {/* Eslips*/}
      <div className="absolute top-0 right-0 block md:hidden -z-10">
        <img src={ellipse1.src} />
      </div>
      <div className="absolute top-0 left-0 block md:hidden -z-10">
        <img src={ellipse2.src} />
      </div>
      <div className="absolute top-0 right-0 hidden md:block -z-10">
        <img src={ellipse3.src} />
      </div>
      <div className="absolute top-0 left-0 hidden md:block -z-10">
        <img src={ellipse4.src} />
      </div>
      {/**Desktop Boxes */}
      <div className="absolute top-1/6 left-0 -z-[5] hidden md:block">
        <img src={box1.src} className="w-48" />
      </div>
      <div className="absolute top-1/1 right-0 -z-[5] hidden md:block">
        <img src={box2.src} className="w-72" />
      </div>
      <div className="absolute right-0 top-1/3 -z-[5] hidden md:block">
        <img src={box3.src} className="w-32" />
      </div>
      <div className="absolute left-1/6 -bottom-8 -z-[5] hidden md:block">
        <img src={box7.src} className="w-24 blur-xs" />
      </div>
      {/**Mobile Boxes */}
      <div className="absolute left-0 top-1/4 -z-[5] md:hidden">
        <img src={box4.src} className="w-24 blur-[2px]" />
      </div>
      <div className="absolute left-1/6 -bottom-2 -z-[5] md:hidden">
        <img src={box5.src} className="w-24" />
      </div>
      <div className="absolute right-0 -bottom-8 -z-[5] md:hidden">
        <img src={box6.src} className="w-24 blur-xs" />
      </div>
      {/**nav */}
      <nav className="container flex items-center justify-between py-10">
        <div className="flex items-center gap-12">
          <Logo />
          <DesktopMenu />
        </div>
        <MobileMenu />
        <div className="items-center gap-4 hidden md:flex">
          <User />
          <Cart />
        </div>
      </nav>
      <Devider />
    </header>
  );
};
export default Header;
