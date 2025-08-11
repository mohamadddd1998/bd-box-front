import React from "react";

// Types
import { IResponsiveScreens, TColumns } from "#ui/types";

interface ColumnProps extends IResponsiveScreens {
  children: React.ReactNode;
  className?: string;
}

/**
 * Responsive Column Size
 *
 * @param xs Extra Small Screens (0 to 640px)
 * @param sm Small Screens (greater than 640px)
 * @param md Medium Screens (greater than 768px)
 * @param lg Large Screens (greater than 1024px)
 * @param xl Extra Large Screens (greater than 1280px)
 * @param xxl Extra Extra Large Screens (greater than 1536px)
 * @param xxxl Extra Extra Large Screens (greater than 1800px)
 */

const Column: React.FC<ColumnProps> = (props: ColumnProps) => {
  const {
    children,
    xs = 12,
    sm,
    md,
    lg,
    xl,
    xxl,
    xxxl,
    className = "",
  } = props;

  const columnClassMaker = (screen: string, columns?: TColumns): string =>
    screen === "xs" ? `col-span-${columns}` : `${screen}:col-span-${columns}`;

  const classNames = [
    xs ? columnClassMaker("xs", xs) : "",
    sm ? columnClassMaker("sm", sm) : "",
    md ? columnClassMaker("md", md) : "",
    lg ? columnClassMaker("lg", lg) : "",
    xl ? columnClassMaker("xl", xl) : "",
    xxl ? columnClassMaker("2xl", xxl) : "",
    xxxl ? columnClassMaker("3xl", xxxl) : "",
    className,
  ]
    .join(" ")
    .trim();
  return <div className={`${classNames}`}>{children}</div>;
};
export default Column;
