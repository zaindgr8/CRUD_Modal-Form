import React,{useState} from 'react'

function Forms({handleAdd, setOpen,data}){
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
    React.useEffect(() => {
     if(data!==null ){
      setName(data.name)
      setEmail(data.email)
     }
    }, [data])
    
  return (
    <div>
        <form className='flex flex-col py- items-center space-y-2 '>
        <lable>Enter Your Name</lable>
        <input type="name" onChange={(e)=>setName(e.target.value)} value={name}
        className='border-2 rounded-lg p-1' placeholder='Name'/>

        <lable>Enter Your Email</lable>
        <input onChange={(e)=>setEmail(e.target.value)} type="email" 
        className='border-2 rounded-lg p-1' placeholder='Email' value={email} />
        
        <button onClick={(e)=>onSubmit(e)} className='border-2 font-bold 
        border-black rounded-lg p-1'>Submit</button>
      </form>
    </div>
  )
}

export default Forms