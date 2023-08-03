import React from 'react'

const LeftNavMenuItem = ({ text, icon, action, className }) => {
    return (
        <div className={`${className} text-white text-sm h-10 flex px-3 mb-[1px] items-center cursor-pointer rounded-lg hover:bg-white/[.15]`} onClick={action} >
            <span className='text-xl mr-5'>{icon}</span>
            {text}
        </div>
    )
}

export default LeftNavMenuItem