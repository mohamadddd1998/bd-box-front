import Link from "next/link";

const DesktopMenu = () => {
  return (
    <ul className="hidden items-center gap-4 md:flex">
      <li className="relative group/item">
        <Link
          href={'/'}
          className="text-grayColor hover:text-darkPrimary hover:font-bold text-sm"
        >
          صفحه اصلی
        </Link>
        <div className="hidden gap-1 absolute group-hover/item:flex">
          <span className="h-1 w-8 rounded-full bg-darkPrimary block"></span>
          <span className="h-1 w-1 rounded-full bg-darkPrimary block"></span>
          <span className="h-1 w-1 rounded-full bg-darkPrimary block"></span>
        </div>
      </li>
      <li className="flex gap-1 items-center flex-row-reverse">
        <Link href={'/kado-creator'} className="text-grayColor text-sm">
          کادوتو بساز
        </Link>
        <div className="w-4 h-4 bg-redColor/10 rounded-full flex justify-center items-center">
          <span className="h-1.5 w-1.5 rounded-full bg-redColor block"></span>
        </div>
      </li>
      <li>
        <a href="#" className="text-grayColor text-sm">
          هدیه کادوباکس
        </a>
      </li>
      <li>
        <a href="#" className="text-grayColor text-sm">
          پرفروش ترین باکس ها
        </a>
      </li>
    </ul>
  );
};
export default DesktopMenu;
