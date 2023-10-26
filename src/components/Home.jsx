import React from 'react'

export default function Home() {
  return (
    // <div className='flex flex-col justify-center items-center w-screen gap-2 bg-yellow-200'>
    //     <div className=''>Home</div>
    //     {/* footer logo */}
    //     <div className="flex w-[120px] h-11 pt-0.5 pb-[1.67px] flex-col justify-center items-center gap-1 inline-flex">
    //     <div className="text-center text-neutral-600 text-xs font-normal font-['Work Sans']">developed by</div>
    //     <div className="w-[120px] h-[22.33px] justify-center items-center inline-flex">
    //         <div className="w-[120px] h-[22.33px] relative">
    //             <div className="w-[22.21px] h-[22.33px] left-0 top-0 absolute">
    //                 <svg xmlns="http://www.w3.org/2000/svg" width="120" height="23" viewBox="0 0 120 23" fill="none">
    //                 <mask id="mask0_409_7920" className="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="-1" width="23" height="24">
    //                     <path d="M2.27176 13.8532C1.56412 13.5972 0.852965 13.4122 0.148183 13.2902C0.361348 14.4426 0.755072 15.5809 1.3476 16.6631C3.07829 19.8241 6.0968 21.809 9.37772 22.3256C9.25834 18.8628 6.47865 15.3757 2.27176 13.8532ZM2.67242 10.3414C8.22587 9.85245 12.5003 5.48401 13.0155 0.172428C10.5961 -0.259953 8.02005 0.108095 5.7022 1.40142C2.33419 3.28076 0.311395 6.66375 0 10.2633C0.866454 10.39 1.76109 10.4216 2.67242 10.3414ZM11.0951 13.822C10.9531 16.9402 11.9277 19.8485 13.6611 22.1549C14.6185 21.9242 15.5617 21.5635 16.4652 21.0595C21.8423 18.0591 23.7918 11.2261 20.8197 5.79778C20.1795 4.62836 19.3623 3.62062 18.4216 2.78743C14.2773 4.74011 11.3197 8.89007 11.0951 13.822Z" fill="white"/>
    //                 </mask>
    //                 <g mask="url(#mask0_409_7920)">
    //                     <path d="M2.27176 13.8532C1.56412 13.5972 0.852965 13.4122 0.148183 13.2902C0.361348 14.4426 0.755072 15.5809 1.3476 16.6631C3.07829 19.8241 6.0968 21.809 9.37772 22.3256C9.25834 18.8628 6.47865 15.3757 2.27176 13.8532ZM2.67242 10.3414C8.22587 9.85245 12.5003 5.48401 13.0155 0.172428C10.5961 -0.259953 8.02005 0.108095 5.7022 1.40142C2.33419 3.28076 0.311395 6.66375 0 10.2633C0.866454 10.39 1.76109 10.4216 2.67242 10.3414ZM11.0951 13.822C10.9531 16.9402 11.9277 19.8485 13.6611 22.1549C14.6185 21.9242 15.5617 21.5635 16.4652 21.0595C21.8423 18.0591 23.7918 11.2261 20.8197 5.79778C20.1795 4.62836 19.3623 3.62062 18.4216 2.78743C14.2773 4.74011 11.3197 8.89007 11.0951 13.822Z" fill="url(#paint0_linear_409_7920)"/>
    //                 </g>
    //                 <path d="M58.9111 20.3405H62.1185V1.63007H58.9111V20.3405Z" fill="black"/>
    //                 <path d="M71.7964 6.7569C70.2 6.7569 68.6722 7.3652 67.6861 8.98833V7.04128H64.7988V20.3406H67.8868V13.2962C67.8868 12.7451 67.9352 12.2178 68.0319 11.8318C68.3871 10.3973 69.3994 9.56421 70.8897 9.56421C72.4292 9.56421 73.3166 10.3423 73.6019 11.8979C73.6705 12.2698 73.7036 12.8001 73.7036 13.2936V20.3406H76.7923V12.4708C76.7923 11.5876 76.7048 10.7896 76.5008 10.1083C75.8309 7.84813 74.0414 6.7569 71.7964 6.7569Z" fill="black"/>
    //                 <path d="M87.1095 17.2943C86.7746 17.374 86.2155 17.4037 85.8542 17.4037H82.3038V12.1282H86.1227C86.4654 12.1282 86.857 12.1629 87.1336 12.2255C88.6348 12.5617 89.2102 13.7574 89.2102 14.7622C89.2102 16.0912 88.3643 16.9961 87.1095 17.2943ZM82.3038 4.56716H85.1516C85.801 4.56716 86.4912 4.65759 86.9343 4.86394C87.7073 5.22331 88.1238 5.89516 88.1238 6.90489C88.1238 7.91947 87.6798 8.6129 86.8922 8.9702C86.498 9.14889 85.9226 9.24339 85.2572 9.24339H84.6484H82.3038V4.56716ZM89.516 10.3405C90.7699 9.3685 91.2972 8.25352 91.2972 6.66073C91.2972 4.27697 89.8338 2.48927 87.6034 1.88037C87.0245 1.72292 86.0841 1.6305 84.9891 1.6305H79.1309V20.3405H85.6925C86.9713 20.3405 87.8284 20.2175 88.6683 19.9185C90.8669 19.135 92.3836 17.4115 92.3836 14.8827C92.3836 12.7713 91.3891 11.2676 89.516 10.3405Z" fill="black"/>
    //                 <path d="M116.687 7.04109L113.388 16.542L110.041 7.04109H106.695L111.927 20.3405H114.778L120 7.04109H116.687Z" fill="black"/>
    //                 <path d="M96.5915 12.6447C96.8131 10.7308 98.3504 9.4726 100.218 9.4726C102.181 9.4726 103.673 10.784 103.893 12.6447H96.5915ZM100.19 6.75702C96.4404 6.75702 93.5264 9.80336 93.5264 13.7841C93.5264 17.4585 96.3957 20.6246 100.321 20.6246C103.189 20.6246 105.41 18.959 106.545 16.2609H103.404C102.696 17.3291 101.748 17.9089 100.374 17.9089C98.3273 17.9089 96.9883 16.6935 96.5821 14.8234H106.863C106.941 14.381 106.962 14.01 106.957 13.5604C106.923 9.98587 104.209 6.75702 100.19 6.75702Z" fill="black"/>
    //                 <path d="M50.7728 17.4014H46.9557V12.0234C47.4396 12.0029 47.9143 11.9919 48.3732 11.9974C51.8444 12.0428 53.8639 13.0627 53.864 14.8778C53.864 16.5113 52.4172 17.4014 50.7728 17.4014ZM46.9557 4.56719H49.6779C50.2997 4.56719 50.821 4.63864 51.1781 4.7562C52.2122 5.09651 52.7761 5.8828 52.7761 7.15081C52.7761 8.32465 52.1907 9.09612 51.2616 9.4509C50.3773 9.29918 49.3885 9.21594 48.2854 9.21499C47.8717 9.21464 47.4166 9.22123 46.9557 9.23588V4.56719ZM29.7716 16.0909L33.8894 5.3306L36.2848 11.782C33.8066 12.9293 31.5972 14.4016 29.7716 16.0909ZM54.1405 10.3667C55.4765 9.38016 55.9492 7.90476 55.9492 6.66077C55.9492 4.27701 54.4856 2.48931 52.2557 1.88024C51.6768 1.72296 50.7366 1.63054 49.6413 1.63054H43.7828V9.5253C42.1474 9.77534 40.5655 10.1658 39.0554 10.6756L35.3986 1.62993H35.3055H32.5151H32.4555L24.8916 20.3405H27.9778C30.6447 17.494 33.8286 15.4514 37.1443 14.0964L39.4629 20.3405H42.9625L40.0333 13.0944C41.2871 12.734 42.5429 12.466 43.7828 12.2836V20.3405L45.3754 20.342L45.3748 20.3451H50.9677C54.9198 20.3451 57.0399 18.0045 57.0399 14.8839C57.0399 12.9913 56.1115 11.3826 54.1405 10.3667Z" fill="black"/>
    //                 <defs>
    //                     <linearGradient id="paint0_linear_409_7920" x1="0" y1="11.1626" x2="22.2101" y2="11.1626" gradientUnits="userSpaceOnUse">
    //                     <stop stop-color="#CD9F28"/>
    //                     <stop offset="1" stop-color="#ECD80B"/>
    //                     </linearGradient>
    //                 </defs>
    //                 </svg>
    //             </div>
    //         </div>
    //     </div>
    //     </div>
    // </div>

    <div className='flex flex-col bg-neutral-100 justify-center items-center'>
        <div className='flex mt-0'>
            <div className="w-[800px] h-[262px] relative">
            <div className="w-[800px] h-[262px] left-0 top-0 absolute bg-white rounded-lg shadow" />
            <div className="w-[198px] h-8 px-12 py-2 left-[578px] top-[198px] absolute bg-zinc-400 rounded justify-center items-center gap-2 inline-flex">
                <div className="w-6 h-6 relative" />
                <div className="w-[141px] justify-center items-center flex">
                    <div className="text-center text-white text-sm font-medium font-['Work Sans']">New ticket response</div>
                </div>
            </div>
            <div className="w-[538px] h-[54px] left-[24px] top-[176px] absolute flex-col justify-center items-start gap-2 inline-flex">
                <div className="text-zinc-800 text-xs font-bold font-['Work Sans']">Zendesk ticket URL</div>
                <div className="w-[538px] pl-2 pr-[431px] py-1.5 bg-white rounded border border-zinc-300 justify-start items-center gap-2 inline-flex">
                    <div className="w-5 h-5 relative flex-col justify-start items-start flex" />
                    <div className="text-zinc-500 text-sm font-normal font-['Work Sans']">Paste URL</div>
                </div>
            </div>
            <div className="w-[666px] left-[67px] top-[32px] absolute text-center"><span className="text-zinc-800 text-2xl font-bold font-['Work Sans']">Insert a Zendesk ticket URL </span><span className="text-zinc-800 text-2xl font-normal font-['Work Sans'] underline">or</span><span className="text-zinc-800 text-2xl font-bold font-['Work Sans']"> ticket information </span><span className="text-zinc-800 text-2xl font-normal font-['Work Sans']">for the ticket that you want to solve</span></div>
            <div className="h-8 left-[183px] top-[112px] absolute">
                <div className="w-[184px] h-8 px-4 py-[5px] left-0 top-0 absolute bg-zinc-800 rounded-lg justify-center items-center gap-2 inline-flex">
                    <div className="text-white text-base font-normal font-['Work Sans'] leading-none">Zendesk ticket URL</div>
                </div>
                <div className="w-[243px] h-8 px-4 py-[5px] left-[192px] top-0 absolute rounded-lg border border-zinc-800 justify-center items-center gap-2 inline-flex">
                    <div className="text-zinc-800 text-base font-normal font-['Work Sans'] leading-none">Zendesk ticket information</div>
                </div>
            </div>
            </div>
        </div>
        <div className='flex mb-0'>Footer</div>
    </div>

  )
}
