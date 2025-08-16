import { _2DArray } from "@/lib/2D-array";
import { darkenColor } from "@/lib/darken-color";
import { FaXmark } from "react-icons/fa6";

interface IRectangleBox {
  items: any[];
  color: string;
  onRemoveItem: (innerId: number) => void;
}
const RectangleBox = ({ color, items, onRemoveItem }: IRectangleBox) => {
  return (
    <svg
      width="250"
      height="250"
      viewBox="0 0 178 105"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x={0.0600586}
        y={25.9021}
        width={163.601}
        height={78.2821}
        fill={darkenColor(color, 40)}
      />

      <path
        d="M177.333 78.3855L164.212 102.055V26.0447L177.333 2.37378V78.3855Z"
        fill={color}
        stroke="#DBDBDB"
        strokeWidth="1.10013"
        strokeLinejoin="round"
      />
      <path
        d="M176.949 0.796875L163.338 25.3516H0.995117L14.6055 0.796875H176.949Z"
        fill={color}
        stroke="#DBDBDB"
        strokeWidth="1.10013"
        strokeLinejoin="round"
      />
      <path
        d="M176.949 79.0789L163.338 103.634H0.995117L14.6055 79.0789H176.949Z"
        fill={color}
        stroke="#DBDBDB"
        strokeWidth="1.10013"
        strokeLinejoin="round"
      />
      <path
        d="M13.7314 78.3857L0.610352 102.056V26.0449L13.7314 2.37402V78.3857Z"
        fill={color}
        stroke="#DBDBDB"
        strokeWidth="1.10013"
        strokeLinejoin="round"
      />
      {_2DArray(items, 8).map((elements, index: number) => {
        let offset = index * 15;
        return (
          <>
            {elements.map((element: Record<string, any>, index: number) => {
              const initialSize = 42;
              const itemsPerRow = 4;
              const startX = 5;
              const startY = 15;

              const col = index % itemsPerRow;
              const row = Math.floor(index / itemsPerRow);

              const x = startX + col * initialSize;
              const y = startY + row * initialSize + offset;

              return (
                <g key={index}>
                  <image
                    key={index}
                    href={element.img}
                    x={x}
                    y={y}
                    className="w-10 h-10 animate-back-in-down"
                  />
                  <foreignObject
                    x={x + 28}
                    y={y - 2}
                    width={8}
                    height={8}
                    onClick={() => onRemoveItem(element.innerId)}
                    className="animate-back-in-down"
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
          </>
        );
      })}
    </svg>
  );
};
export default RectangleBox;
