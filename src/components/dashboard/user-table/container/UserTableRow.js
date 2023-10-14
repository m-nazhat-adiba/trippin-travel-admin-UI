import React from "react";

const UserTableRow = () => {
  return (
    <tr className="border-b dark:border-neutral-300">
      <td className="whitespace-nowrap flex items-center gap-2 px-6 py-4">
        <img
          className="inline-block h-12 w-12 p-1 rounded-full ring-2 ring-white"
          src="/favicon.ico"
          alt="avatar"
        />
        <p>Nazhat Adiba</p>
      </td>
      <td className="whitespace-nowrap px-6 py-4">nazhat@dibimbing.id</td>
      <td className="whitespace-nowrap px-6 py-4">081879856874</td>
      <td className="whitespace-nowrap px-6 py-4">
        <p className="bg-red-600 text-white w-fit px-4 py-1 rounded-full font-medium">
          Admin
        </p>
      </td>
    </tr>
  );
};

export default UserTableRow;
