"use client";
import Tab from "@/containers/modules/Tab";
import { useState } from "react";
import BoxType from "./BoxType";
import BoxColor from "./BoxColor";
import BoxItems from "./BoxItems";
import Payment from "./Payment";
import { kadoTabs } from "@/constants/data";
import giftBox1 from '@/assets/images/gift-box-1.png'
const KadoCreator = () => {
  const [activTab, setActiveTab] = useState(kadoTabs[2]);
  return (
    <>
      <div className="basis-2/3 flex flex-col gap-8 max-lg:bg-secondaryColor max-lg:p-4 max-lg:rounded-4xl">
        <ul className="flex items-center gap-x-4 gap-y-4  flex-wrap">
          {kadoTabs.map((t, i) => (
            <Tab
              key={i}
              activTab={activTab}
              setActiveTab={setActiveTab}
              isLastItem={kadoTabs.length === i + 1}
              {...t}
            />
          ))}
        </ul>
        <div id="tab-content">
          {
            {
              1: <BoxType />,
              2: <BoxColor />,
              3: <BoxItems />,
              4: <Payment />,
            }[activTab.tabIndex as number]
          }
        </div>
      </div>
      <div className="basis-1/3 rounded-4xl bg-white p-4 lg:self-baseline">
        <img src={giftBox1.src} className="w-80 mx-auto" />
      </div>
    </>
  );
};
export default KadoCreator;
