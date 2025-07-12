"use client";
import { clsx } from "@/helpers/clsx";
import { Dispatch, SetStateAction } from "react";
import { FaAngleLeft } from "react-icons/fa";

interface TabProps {
  title: string;
  tabIndex: number;
  activTab: { title: string; tabIndex: number };
  setActiveTab: Dispatch<SetStateAction<{ title: string; tabIndex: number }>>;
  isLastItem: boolean;
  [key: string]: any;
}
const Tab = ({
  activTab,
  setActiveTab,
  tabIndex,
  title,
  isLastItem,
  ...rest
}: TabProps) => {
  return (
    <li className="flex items-center" {...rest}>
      <span
        className={clsx(
          "hover:text-white hover:bg-primary rounded-md py-1.5 px-3 cursor-pointer",
          activTab.tabIndex === tabIndex && "text-white bg-primary"
        )}
        onClick={() =>
          setActiveTab({
            tabIndex,
            title,
          })
        }
      >
        {title}
      </span>
      {!isLastItem && <FaAngleLeft />}
    </li>
  );
};
export default Tab;
