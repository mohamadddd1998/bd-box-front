import { useFormikContext } from "formik";
import HeartBox from "./BoxSvg/HeartBox";
import CircleBox from "./BoxSvg/CircleBox";
import RectangleBox from "./BoxSvg/RectangleBox";
import HexagonBox from "./BoxSvg/HexagonBox";
import SquareBox from "./BoxSvg/SquareBox";
import { FC } from "react";

const boxComponents: Record<string, FC<any>> = {
  heartBox: HeartBox,
  circleBox: CircleBox,
  rectangleBox: RectangleBox,
  hexagonBox: HexagonBox,
  squareBox: SquareBox,
};

const GiftBoxSvg = () => {
  const {
    values: { shape, color, items },
    setFieldValue,
  } = useFormikContext<any>();

  const onRemoveItem = (innerId: number) => {
    const updatedItems = items.filter((item: any) => item.innerId !== innerId);
    setFieldValue("items", updatedItems);
  };

  const BoxComponent = boxComponents[shape];

  return BoxComponent ? (
    <BoxComponent color={color} items={items} onRemoveItem={onRemoveItem} />
  ) : null;
};

export default GiftBoxSvg;
