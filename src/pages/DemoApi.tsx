import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar';

export const DemoApi = () => {
    const [data, setData] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all'); // Replace with your API endpoint
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                const result = await response.json();
                setData((result));
                console.log("mydata",result);

                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (


        <>
            <>
                <Navbar />
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                    {console.log("return",data)}
                        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
                        {/* <h1>Year: {data.year}</h1>
                        <h1>Week Number: {data.weeknum}</h1>
                        <h1>New case: {data.new_case}</h1>
                        <h1>Total case: {data.total_case}</h1>
                        <h1>New case excludeabroad: {data.new_case_excludeabroad}</h1>
                        <h1>Total Cases (excluding abroad): {data.total_case_excludeabroad}</h1> */}
{ data.map((data:any)=> {
                       return <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Year
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Week Number
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            New case
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Total case
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            New case excludeabroad
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Total case excludeabroad
                                            
                        
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {data.year}
                                        </th>
                                        <td className="px-6 py-4">
                                            {data.weeknum}
                                        </td>
                                        <td className="px-6 py-4">
                                            {data.new_case}
                                        </td>
                                        <td className="px-6 py-4">
                                            {data.total_case}
                                        </td>
                                        <td className="px-6 py-4">
                                            {data.new_case_excludeabroad}
                                        </td>
                                        <td className="px-6 py-4">
                                            {data.total_case_excludeabroad}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
})
}





                    </>


                )}
            </>
        </>

    )
}
