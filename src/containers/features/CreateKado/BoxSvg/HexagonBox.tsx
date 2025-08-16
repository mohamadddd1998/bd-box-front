import { _2DArray } from "@/lib/2D-array";
import { darkenColor } from "@/lib/darken-color";
import React from "react";
import { FaXmark } from "react-icons/fa6";

interface IHexagonBox {
  items: any[];
  color: string;
  onRemoveItem: (innerId: number) => void;
}

const HexagonBox = ({ color, items, onRemoveItem }: IHexagonBox) => {
  return (
    <svg
      width="250"
      height="250"
      viewBox="0 0 122 138"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.777341 77.7005L30.6071 26.0338L90.2668 26.0337L120.097 77.7005L90.2668 129.367L30.6072 129.367L0.777341 77.7005Z"
        fill={darkenColor(color, 40)}
      />
      <path
        d="M32.7383 1.32959L91.2959 1.32959L89.748 25.4839L31.1914 25.4839L32.7383 1.32959Z"
        fill={color}
        stroke="#DBDBDB"
        strokeWidth="1.10013"
        strokeLinejoin="round"
      />
      <path
        d="M92.3184 2.62793L121.156 52.5771L119.666 75.8506L90.8271 25.9033L92.3184 2.62793Z"
        fill={color}
        stroke="#DBDBDB"
        strokeWidth="1.10013"
        strokeLinejoin="round"
      />
      <path
        d="M2.93457 52.6104L31.5254 3.09082L30.0664 25.8701L1.47559 75.3887L2.93457 52.6104Z"
        fill={color}
        stroke="#DBDBDB"
        strokeWidth="1.10013"
        strokeLinejoin="round"
      />
      <path
        d="M92.4258 104.277L121.017 54.7578L119.558 77.5371L90.9668 127.056L92.4258 104.277Z"
        fill={color}
        stroke="#DBDBDB"
        strokeWidth="1.10013"
        strokeLinejoin="round"
      />
      {_2DArray(items, 7).map((elements, index: number) => {
        let offset = index * 15;
        return (
          <>
            {elements.map((element: Record<string, any>, index: number) => {
              const initialSize = 32;
              const itemsPerRow = 3;
              const startX = 12;
              const startY = 15;

              const col = index === 6 ? index % (itemsPerRow) + 1 : index % (itemsPerRow);
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
                    className="w-9 h-9 animate-back-in-down"
                  />
                  <foreignObject
                    x={x + 25}
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
      <path
        d="M2.82715 54.2949L31.665 104.244L30.1748 127.518L1.33594 77.5703L2.82715 54.2949Z"
        fill={color}
        stroke="#DBDBDB"
        strokeWidth="1.10013"
        strokeLinejoin="round"
      />
      <path
        d="M32.7383 104.663L91.2959 104.663L89.748 128.817L31.1914 128.817L32.7383 104.663Z"
        fill={color}
        stroke="#DBDBDB"
        strokeWidth="1.10013"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default HexagonBox;
