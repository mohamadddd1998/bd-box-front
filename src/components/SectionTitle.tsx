import { clsx } from "@/helpers/clsx";

interface SectionTitleProps {
  title: string;
  subtitle: string;
  dir?: "rtl" | "ltr";
}
const SectionTitle = ({
  title,
  subtitle,
  dir = "rtl",
}: SectionTitleProps) => {
  return (
    <div className="flex items-center gap-3">
      <span className="font-extrabold text-xl">{title}</span>
      <div className="relative">
        <div
          className={clsx(
            "bg-primary",
            dir === "rtl" && "arrow-shaped-rtl",
            dir === "ltr" && "arrow-shaped-ltr"
          )}
        >
          <strong className="font-extrabold">{subtitle}</strong>
        </div>
        <div
          className={clsx(
            "bg-secondaryColor absolute  top-0 -z-10",
            dir === "rtl" && "arrow-shaped-rtl left-2",
            dir === "ltr" && "arrow-shaped-ltr right-2"
          )}
        ></div>
      </div>
    </div>
  );
};
export default SectionTitle;
