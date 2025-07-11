import logo from "@/assets/images/logo.png";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={logo.src} />
      <div className="flex flex-col">
        <strong>کـادو باکس</strong>
        <span className="text-grayColor text-sm">kadobox.ir</span>
      </div>
    </div>
  );
};
export default Logo;
