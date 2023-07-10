import React from 'react';

export default function Modal(props) {
  const { title, children, onClose, open, buttonText } = props;

  return (
    <>
      {open && (
        
            <div>
            <div className="bg-gray-700 opacity-20 inset-0 fixed"></div>
            <div className='flex flex-col items-center fixed top-[40%] left-[35%] bg-white p-8 rounded-lg'>
            <div className='flex flex-row items-center gap-x-2 mb-2 '>
            <h1 className="font-bold text-xl ">{title}</h1>
            <button className="border-2 text-red-500 rounded-lg px-1 border-red-500" onClick={onClose}>
              {buttonText}
            </button>
            </div>

            <p className="italic">{children}</p>
            </div>
            </div>
         
       
      )}
    </>
  );
}
