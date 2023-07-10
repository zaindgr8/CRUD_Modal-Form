import React,{useState} from 'react'

function Forms({handleAdd, setOpen}){
    const [name,setName]= useState("")
    const [email,setEmail]= useState("")

    const onSubmit =(e)=>{
        e.preventDefault()
        
        const payload={
            name:name,
            email:email,
        }

        handleAdd(payload)
        setOpen(false)
    }
    
  return (
    <div>
        <form className='flex flex-col py- items-center space-y-2 '>
        <lable>Enter Your Name</lable>
        <input type="name" onChange={(e)=>setName(e.target.value)} 
        className='border-2 rounded-lg p-1' placeholder='Name'/>

        <lable>Enter Your Email</lable>
        <input onChange={(e)=>setEmail(e.target.value)} type="email" 
        className='border-2 rounded-lg p-1' placeholder='Email' />
        
        <button onClick={(e)=>onSubmit(e)} className='border-2 font-bold 
        border-black rounded-lg p-1'>Submit</button>
      </form>
    </div>
  )
}

export default Forms