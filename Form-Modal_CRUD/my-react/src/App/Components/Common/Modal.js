import React from 'react';

export default function Modal(props) {
  const { title, children, onClose, open, buttonText } = props;

  return (
    <>
      {open && (
        
            <>
            
            <div className='bg-gray-700 opacity-20 fixed inset-0'></div>
            <div className='flex flex-col fixed items-center justify-center bg-white left-[39%] top-[25%] rounded-[5%] p-16 '>
            <div className='flex flex-row items-center gap-x-2 mb-2 '>
            <h1 className="font-bold text-xl ">{title}</h1>
            <button className="border-2 text-red-500 rounded-lg px-1 border-red-500" onClick={onClose}>
              {buttonText}
            </button>
            </div>
            <p className="italic">{children}</p>
            </div>
            
            </>

         
       
      )}
    </>
  );
}
