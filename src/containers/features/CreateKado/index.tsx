"use client";
import Tab from "@/containers/modules/Tab";
import { useState } from "react";
import BoxShape from "./BoxShape";
import BoxColor from "./BoxColor";
import BoxItems from "./BoxItems";
import BoxPayment from "./BoxPayment";
import { kadoTabs } from "@/constants/data";
import GiftBoxSvg from "./GiftBoxSvg";
import Tabs from "@/containers/modules/Tabs";
const KadoCreator = () => {
  const [activTab, setActiveTab] = useState(kadoTabs[0]);

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div
        className="basis-2/3 flex flex-col gap-8 
          max-lg:bg-secondaryColor max-lg:p-4 max-lg:rounded-4xl"
      >
        <Tabs>
          {kadoTabs.map((t, i) => (
            <Tab
              key={i}
              activTab={activTab}
              setActiveTab={setActiveTab}
              isLastItem={kadoTabs.length === i + 1}
              {...t}
            />
          ))}
        </Tabs>
        {
          {
            1: <BoxShape />,
            2: <BoxColor />,
            3: <BoxItems />,
            4: <BoxPayment />,
          }[activTab.tabIndex as number]
        }
      </div>
      <div
        className="basis-1/3 rounded-4xl bg-white p-4 lg:self-baseline 
          h-80 flex justify-center items-center"
      >
        <GiftBoxSvg />
      </div>
    </div>
  );
};
export default KadoCreator;
