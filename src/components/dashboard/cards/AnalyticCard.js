import React from "react";
import { Icon } from "@iconify/react";

const AnalyticCard = ({
  title = "Total Data",
  icon = "material-symbols:local-activity-rounded",
  data,
}) => {
  return (
    <div className="flex flex-grow bg-white justify-between px-5 py-4 rounded-lg shadow-md">
      <div>
        <h1 className="text-gray-600">{title}</h1>
        <h2 className="font-bold text-lg">{data.length}</h2>
      </div>
      <Icon
        icon={icon}
        className="w-11 h-11 p-2 bg-[#4FD1C5] text-white rounded-xl"
      />
    </div>
  );
};

export default AnalyticCard;
