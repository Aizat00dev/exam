


export default function UsersData({elem, getUsers}){

    async function deleteUsers(){
       const res = await fetch(`http://localhost:8000/users/${elem.id}`, {
        method: 'DELETE'
       })
       if(res.status === 200){
        getUsers()
       }
    }

    return(
        <>
            <div className="users-data">
                <p>{elem.name}</p>
                <p>{elem.email}</p>
                <p>{elem.username}</p>
                <button onClick={deleteUsers}>Delete</button>
             </div>
        </>
    )
}