import React from 'react'

function Background() {
    return (
        <>
            <div className='fixed z-[2] w-full h-screen '>
                <div className=' absolute w-full py-10 flex justify-center text-zinc-600 text-xl top-[5%] font-semibold'>Documnets.</div>
                <h1 className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none font-semibold text-zinc-900 tracking-tighter'>Docs.</h1>
            </div>

        </>
    )
}

export default Background
