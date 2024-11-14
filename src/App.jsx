//import { useState } from 'react';
import { Search } from 'lucide-react';
import './index.css';

const Interface = () => {
    // State สำหรับจัดการ tab ที่กำลังแสดงผล
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navigation Bar  */}
            <nav className="bg-cyan-600 shadow-sm p-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* ส่วนซ้ายของ Navbar */}
                    <div className="flex items-center space-x-8">
                        <h1 className="text-xl font-bold">Reminder</h1>
                        <div className="flex items-center space-x-4">
                            {/* ช่องค้นหา */}
                            <div className="flex-grow flex justify-center">
                            <div className="relative" >
                                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400 self-center" />
                                <input
                                    type="text"
                                    placeholder="Search tokens, addresses..."
                                    className="pl-10 pr-4 py-2 bg-gray-100 rounded-lg w-64"
                                />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Interface;
