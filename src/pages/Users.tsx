import React, { useEffect, useState } from "react";


import { Link } from "react-router-dom";
import { IFUserMock, usersMock } from "../shared/mock.data";
import { Navbar } from "../components/Navbar";

export const Users = () => {
    const [users, setUsers] = useState<IFUserMock[]>([]);

    useEffect(() => {
        setUsers(usersMock);
    }, []);



    return (
        <>
            <Navbar />
            <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
                <table className="w-full table-fixed">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                                ลำดับ
                            </th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                                ชื่อ
                            </th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                                Email
                            </th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                                อื่นๆ
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {users.map((item, index) => {
                            return (
                                <tr>
                                    <td className="py-4 px-6 border-b border-gray-200 truncate">
                                        {index + 1}
                                    </td>
                                    <td className="py-4 px-6 border-b border-gray-200 truncate">
                                        {item.fullName}
                                    </td>
                                    <td className="py-4 px-6 border-b border-gray-200 truncate">
                                        {item.email}
                                    </td>
                                    <td className="py-4 px-6 border-b border-gray-200">
                                        <Link
                                            to={`/users/${item.id}`}
                                            className="bg-green-500 text-white py-1 px-2 rounded-full text-xs"
                                        >
                                            รายละเอียดเพิ่มเติม
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};