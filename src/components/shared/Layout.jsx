import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

export default function Layout() {
    return (
        // <div className="flex flex-row bg-[#F7F7F7] h-screen w-screen overflow-hidden">
        <div className="flex flex-row bg-[#F7F7F7] h-screen w-screen">
            <Sidebar />
            <div className="flex flex-col w-screen">
                <Header />
                <div>{<Outlet />}</div>
            </div>
        </div>
    )
}
