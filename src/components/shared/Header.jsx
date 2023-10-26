import React from 'react'

export default function Header() {
  return (
    <div className="h-20 relative shadow">
        <div className="h-20 bg-yellow-50" />
        <div className="w-[44.80px] h-10 px-[5.17px] pt-[5.17px] pb-[5.18px] left-[578px] top-[20px] absolute justify-center items-center inline-flex">
            <div className="w-[34.46px] h-[29.64px] relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" viewBox="0 0 35 30" fill="none">
                <path d="M12.3584 21.8968H34.6307C33.7942 26.0285 30.1509 29.1382 25.7827 29.1382H13.7001C12.9592 29.1382 12.3584 28.5361 12.3584 27.7932V21.8968ZM25.7828 11.0349H12.3585V18.2763H34.6306C33.7942 14.1448 30.1509 11.0349 25.7828 11.0349ZM23.8811 0.174799L13.7003 0.172852C12.9592 0.172694 12.3584 0.774964 12.3584 1.51809V7.41365H31.0171C31.0171 3.44391 27.8298 0.221802 23.8811 0.174799Z" fill="black"/>
                <path d="M2.21168 17.5854C-0.532436 20.4026 -0.511712 24.9172 2.27324 27.7092C3.66332 29.1028 5.48106 29.8055 7.30286 29.8177C9.13082 29.8299 10.9508 29.135 12.3583 27.7571V7.4137L2.21168 17.5854Z" fill="#FFFF00"/>
                </svg>
            </div>
        </div>
        <div className="w-[291px] h-10 left-[877px] top-[20px] absolute justify-end items-center gap-4 inline-flex">
            <div className="text-right"><span className="text-zinc-800 text-base font-medium font-['Work Sans']">Welcome, </span><span className="text-zinc-800 text-base font-semibold font-['Work Sans']">Name Surname</span></div>
            <div className="justify-end items-center gap-2 flex">
                <div className="w-10 h-10 justify-center items-center flex">
                    <img className="w-10 h-10 rounded-full border border-neutral-100" src="../../../public/images/avatar/Ellipse_81.jpg" />
                </div>
                <div className="w-6 h-6 relative" />
            </div>
        </div>
    </div>

  )
}
