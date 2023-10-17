import React from "react";
import UserTableRow from "./container/UserTableRow";

const UserHighlightTable = ({ userData }) => {
  return (
    <div className="flex flex-col bg-white shadow-lg w-full">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-300">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    User
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Phone Number
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Role
                  </th>
                </tr>
              </thead>
              <tbody>
                {userData.data.map((item, key) =>
                  key < 5 ? <UserTableRow data={item} key={key} /> : null
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHighlightTable;
