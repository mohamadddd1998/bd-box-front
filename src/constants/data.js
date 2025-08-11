import giftBox1 from "@/assets/images/gift-box-1.png";
import giftBox2 from "@/assets/images/gift-box-2.png";
import giftBox3 from "@/assets/images/gift-box-3.png";
import giftBox4 from "@/assets/images/gift-box-4.png";
import giftBox5 from "@/assets/images/gift-box-5.png";
import redBox from "@/assets/images/red-box.png";
import yellowBox from "@/assets/images/yellow-box.png";
import greenBox from "@/assets/images/green-box.png";
import product1 from "@/assets/images/product-1.png";
import product2 from "@/assets/images/product-2.png";
import product3 from "@/assets/images/product-3.png";

export const kadoTabs = [
  {
    tabIndex: 1,
    title: "نوع باکس",
  },
  {
    tabIndex: 2,
    title: "رنگ باکس",
  },
  {
    tabIndex: 3,
    title: "آیتم های باکس",
  },
  {
    tabIndex: 4,
    title: "پرداخت",
  },
];

export const KadoShapes = [
  {
    name: "heartBox",
    img: giftBox1.src,
    title: "باکس قلبی",
  },
  {
    name: "hexagonBox",
    img: giftBox2.src,
    title: "باکس شش ضلعی",
  },
  {
    name: "rectangleBox",
    img: giftBox3.src,
    title: "باکس مستطیلی",
  },
  {
    name: "squareBox",
    img: giftBox4.src,
    title: "باکس مربعی",
  },
  {
    name: "circleBox",
    img: giftBox5.src,
    title: "باکس دایره ایی",
  },
];

export const KadoColors = [
  {
    value: "#ef4444",
    img: redBox.src,
    title: "باکس قرمز",
  },
  {
    value: "#84cc16",
    img: greenBox.src,
    title: "باکس سبز",
  },
  {
    value: "#eab308",
    img: yellowBox.src,
    title: "باکس زرد",
  },
];

export const KadoProducts = [
  {
    id: 1,
    name: "هندزفری",
    price: 29000,
    img: product1.src,
  },
  { id: 2, name: "رژ لب", price: 35000, img: product2.src },
  {
    id: 3,
    name: "جوراب",
    price: 40000,
    img: product3.src,
  },
];
