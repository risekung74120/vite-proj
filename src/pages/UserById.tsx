import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import { IFUserMock, usersMock } from "../shared/mock.data";
import { Navbar } from "../components/Navbar";



export const UserById = () => {
    const [user, setUser] = useState<IFUserMock>();
    const { id } = useParams();
    useEffect(() => {
        setUser(usersMock.find((item) => item.id === Number(id)));
    }, []);
    return (
        <>
            <Navbar />
            <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10 bg-red-100">
                <p>ชื่อ : {user?.fullName}</p>
                <p>email : {user?.email}</p>
                <p>อายุ : {user?.age}</p>
                <Link to="/user" className="text-blue-700"> ย้อนกลับ</Link>
            </div>
        </>
    );
};