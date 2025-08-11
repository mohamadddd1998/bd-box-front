import { darkenColor } from "@/lib/darken-color";
import { FaXmark } from "react-icons/fa6";

interface ICircleBox {
  items: any[];
  color: string;
  onRemoveItem: (innerId: number) => void;
}
const CircleBox = ({ color, items, onRemoveItem }: ICircleBox) => {
  return (
    <svg
      width="250"
      height="250"
      viewBox="0 0 103 131"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx={51.2138}
        cy={79.8878}
        r={50.8915}
        fill={darkenColor(color, 40)}
      />
      <path
        d="M51.8369 0.938477C79.3141 1.27115 101.485 23.649 101.485 51.2051V68.5898C96.3787 45.7688 76.1302 28.6649 51.8369 28.3779V0.938477Z"
        fill={color}
        stroke="#DBDBDB"
        strokeWidth="1.24297"
        strokeLinejoin="round"
      />
      <path
        d="M50.5928 28.3779C26.2982 28.6654 6.04915 45.7715 0.944336 68.5947V51.2051C0.944336 23.6493 23.116 1.27162 50.5928 0.938477V28.3779Z"
        fill={color}
        stroke="#DBDBDB"
        strokeWidth="1.24297"
        strokeLinejoin="round"
      />
      {items.map((item: Record<string, any>, index: number) => {
        const initialSize = 32;
        const itemsPerRow = 3;
        const startX = 6;
        const startY = 15;

        const col = index % itemsPerRow;
        const row = Math.floor(index / itemsPerRow);

        const x = startX + col * initialSize;
        const y = startY + row * initialSize;

        // میشه اینجا چک کرد که emoji ها توی دایره هستن یا نه
        // ولی ساده فرض کنیم همه جا جا میشن
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
              x={x + 20}
              y={y - 2}
              width={8}
              height={8}
              onClick={() => onRemoveItem(item.innerId)}
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
      <path
        d="M0.944336 62.4968C6.04881 85.3205 26.2978 102.426 50.5928 102.714V130.153C23.116 129.82 0.944336 107.443 0.944336 79.8875V62.4968Z"
        fill={color}
        stroke="#DBDBDB"
        strokeWidth="1.24297"
        strokeLinejoin="round"
      />
      <path
        d="M101.485 79.8875C101.485 107.443 79.3141 129.82 51.8369 130.153V102.714C76.1305 102.427 96.379 85.3233 101.485 62.5017V79.8875Z"
        fill={color}
        stroke="#DBDBDB"
        strokeWidth="1.24297"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default CircleBox;
