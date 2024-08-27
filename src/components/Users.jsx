import { useState, useEffect } from "react"
import UsersData from "./UsersData"
import Modal from "./Modal"




export default function Users(){

    const[users, setUsers] = useState([])
    const[values, setValues] = useState({name:'',email:'',username:''})
    const[modal, setModal] = useState(false)

    function open(){
        setModal(true)
    }
    function close(){
        setModal(false)
    }
   


   async function getUsers(){
      const res = await fetch('http://localhost:8000/users')
      const data = await res.json()
      .catch(error=>console.log(error))
      setUsers(data)  
    }

    useEffect(()=>{
        getUsers()
    },[])


    async function postUsers(){
     
        const usersObj = {
            name: values.name,
            email: values.email,
            username: values.username
        }
    

        await fetch('http://localhost:8000/users',{
        method: 'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify(usersObj)
    })
    
    }   



    function handleChange(event){
        const{name,value} = event.target
        setValues(prevVal =>({
            ...prevVal,
            [name]:value
        }))
    }

    
   
    return(
        <>
           
          <form onChange={handleChange}>

          <label>
            <input 
                type="text" 
                placeholder="name"
                name="name"
                value={values.name}
            />
          </label>

          <label>
            <input 
                type="text" 
                placeholder="email"
                name="email"
                value={values.email}
            />
          </label>

          <label>
            <input 
                type="text" 
                placeholder="username"
                name="username"
                value={values.username}
            />
          </label>

         
          <button  onClick={postUsers}>Register</button> 
           

          </form>
       
       
           { 
                users.map(elem =>(
                    <UsersData 
                    key={elem.id}
                    elem ={elem} 
                    getUsers = {getUsers}
                    />
                ))
            }
           
            {users.length === 0 && <p>List is empty ∅</p>}
            
            <Modal 
                isOpen ={modal}
                onClose ={close}
            />
          
        </>
    )
}