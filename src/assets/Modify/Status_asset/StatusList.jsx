import React, { useEffect, useState } from "react";
import GlobalApi from "../../../api/GlobalApi";

export default function StatusList() {
  const [ticket, setTicket] = useState([]);

  const userid = JSON.parse(localStorage.getItem("user-info")).id;

  useEffect(() => {
    GlobalApi.getModify(userid).then((res) => {
      console.log(res);
      setTicket(res?.modifies);
    });
  }, []);

  return (
    <div className="w-full p-8 bg-slate-100">
      <div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Ticket Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Created Time
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Status Update
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  View Details
                </th>
              </tr>
            </thead>
            <tbody>
              {ticket.map((i) => (
                <tr key={i.id} className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {i.id}
                  </th>
                  <td className="px-6 py-4">{i.createdAt}</td>
                  <td className="px-6 py-4">{i.updatedAt}</td>
                  <td className="px-6 py-4">{i.modifystatus}</td>
                  <td className="px-6 py-4">{i.modifyDesc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
