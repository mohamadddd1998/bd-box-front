import imoji1 from "@/assets/images/imoji-1.png";

const SpecialHero = () => {
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
    </div>
  );
};
export default SpecialHero;
