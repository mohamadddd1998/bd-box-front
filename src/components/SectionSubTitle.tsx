interface SectionSubTitleProps {
  text: string;
}
const SectionSubTitle = ({ text }: SectionSubTitleProps) => (
  <h2 className="text-grayColor text-sm">{text}</h2>
);
export default SectionSubTitle;
