import { darkenColor } from "@/lib/darken-color";
import React from "react";
import { FaXmark } from "react-icons/fa6";

interface ISquareBox {
  items: any[];
  color: string;
  onRemoveItem: (innerId: number) => void;
}
const SquareBox = ({ color, items, onRemoveItem }: ISquareBox) => {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 105 105"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.46875"
        y="26.2332"
        width="95.625"
        height="78.2821"
        fill={darkenColor(color, 40)}
      />
      <path
        d="M103.856 78.7739L96.6445 101.033V26.3198L103.856 4.06006V78.7739Z"
        fill={color}
        stroke="#DBDBDB"
        strokeWidth="1.10013"
        strokeLinejoin="round"
      />
      <path
        d="M103.649 1.12744L95.6934 25.6821H1.22559L9.18066 1.12744H103.649Z"
        fill={color}
        stroke="#DBDBDB"
        strokeWidth="1.10013"
        strokeLinejoin="round"
      />
      <path
        d="M103.649 79.4097L95.6934 103.964H1.22559L9.18066 79.4097H103.649Z"
        fill={color}
        stroke="#DBDBDB"
        strokeWidth="1.10013"
        strokeLinejoin="round"
      />
      <path
        d="M8.23047 78.7739L1.01855 101.033V26.3198L8.23047 4.06006V78.7739Z"
        fill={color}
        stroke="#DBDBDB"
        strokeWidth="1.10013"
        strokeLinejoin="round"
      />
      {items.map((item: Record<string, any>, index: number) => {
        const initialSize = 32;
        const itemsPerRow = 3;
        const startX = 5;
        const startY = 15;

        const col = index % itemsPerRow;
        const row = Math.floor(index / itemsPerRow);

        const x = startX + col * initialSize;
        const y = startY + row * initialSize;

        return (
          <g key={index}>
            <image
              key={index}
              href={item.img}
              x={x}
              y={y}
              className="w-7 h-7"
            />
            <foreignObject
              onClick={() => onRemoveItem(item.innerId)}
              x={x + 20}
              y={y - 2}
              width={8}
              height={8}
            >
              <div
                className="text-sm bg-red-500 text-white flex justify-center 
                    items-center h-2 w-2 rounded-2xl cursor-pointer"
              >
                <FaXmark size={6} />
              </div>
            </foreignObject>
          </g>
        );
      })}
    </svg>
  );
};

export default SquareBox;
