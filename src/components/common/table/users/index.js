import React from "react";

import UserTableRow from "./container/UserTableRow";

const UserTable = ({ userData, handleModal, setData }) => {
  return (
    <div className="flex flex-col bg-white w-full">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-300">
                <tr>
                  <th scope="col" className="xl:px-6 px-2 py-4">
                    User
                  </th>
                  <th scope="col" className="xl:px-6 px-2 py-4">
                    Email
                  </th>
                  <th scope="col" className="xl:px-6 px-2 py-4">
                    Phone Number
                  </th>
                  <th scope="col" className="xl:px-6 px-2 py-4">
                    Role
                  </th>
                  <th scope="col" className="xl:px-6 px-2 py-4"></th>
                </tr>
              </thead>
              <tbody>
                {userData.data.map((item, key) => (
                  <UserTableRow
                    setData={setData}
                    handleModal={handleModal}
                    data={item}
                    key={key}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
