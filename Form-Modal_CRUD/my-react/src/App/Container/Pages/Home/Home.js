import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Modal from '../../../Components/Common/Modal';
import Forms from '../../../Components/Forms/Forms';

function Home() {
  const [edit, setEdit] = useState(null);
  const [open, setOpen] = useState(false);
  const [list, setList] = useState([]);
  const [data, setData] = useState(null);

  const handleAdd = (x) => {
    if (edit !== null) {
      const updatedList = [...list];
      updatedList[edit] = x;
      setList(updatedList);
      setEdit(null);
    } else {
      setList([...list, x]);
    }
  };

  const handleDelete = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };

  const handleEdit = (index, x) => {
    setOpen(true);
    setData(x);
    setEdit(index);
  };

  return (
    <>
      <div>
        <button
          onClick={() => setOpen(!open)}
          className='font-bold border-2 p-2 rounded-xl flex gap-2 items-center'
        >
          <AiOutlinePlus />
          Add
        </button>
      </div>

      <div className='flex flex-wrap gap-4 mt-4'>
        {list.map((x, index) => (
          <div key={index} className='border-2 rounded-xl p-3 max-w-[300px]'>
            <div className='flex items-center'>
              <h1 className='font-bold mr-2'>Name: </h1>
              <h1 className=''>{x.name}</h1>
              <h1 className='font-bold ml-2'>Email: </h1>
              <p className='ml-2 overflow-hidden'>{x.email}</p>
            </div>
            <div className='flex mt-2 justify-between'>
              <button onClick={() => handleDelete(index)} className='border-2 p-2 rounded-xl'>
                Delete
              </button>
              <button onClick={() => handleEdit(index, x)} className='border-2 p-2 rounded-xl'>
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal
        open={open}
        title='This is Modal'
        children={
          <Forms
            data={data}
            handleAdd={handleAdd}
            setOpen={setOpen}
          />
        }
        onClose={() => setOpen(false)}
        buttonText='Close'
      />
    </>
  );
}

export default Home;
