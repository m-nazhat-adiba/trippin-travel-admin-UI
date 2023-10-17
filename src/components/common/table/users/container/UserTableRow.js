import clsx from "clsx";
import React from "react";
import { Icon } from "@iconify/react";

const UserTableRow = ({ data }) => {
  return (
    <tr className="border-b dark:border-neutral-300">
      <td className="whitespace-nowrap flex items-center gap-2 px-6 py-4">
        <img
          className="inline-block h-12 w-12 p-1 rounded-full ring-2 ring-white"
          src={data.profilePictureUrl}
          alt="avatar"
        />
        <p>{data.name}</p>
      </td>
      <td className="whitespace-nowrap px-6 py-4">{data.email}</td>
      <td className="whitespace-nowrap px-6 py-4">{data.phoneNumber}</td>
      <td className="whitespace-nowrap px-6 py-4">
        <p
          className={clsx(
            " text-white w-fit px-4 py-1 rounded-full font-medium",
            data.role === "admin" ? "bg-red-600" : "bg-green-600"
          )}
        >
          {data.role}
        </p>
      </td>
      <td className="whitespace-nowrap px-3 py-4">
        <div className="flex text-2xl gap-4 justify-center">
          <Icon icon="akar-icons:edit" />
          <Icon icon="akar-icons:trash-can" className="text-red-700" />
        </div>
      </td>
    </tr>
  );
};

export default UserTableRow;
