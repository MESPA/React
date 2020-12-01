import React, {useState} from 'react';
// import Formulario from './component/Formulario';
// import Jsx from './component/JSX';
// import Contador from './component/JSX';
// import Lista from './component/Lista';
// import FormHook from './component/FormHook';
import TablaUsuario from './CompontCrud/TablaUsuario';
import AddUserForm  from './CompontCrud/AddUserForm ';
import {v4 as uuidv4}  from 'uuid';


function App() {
  const usersData = [

  { id:uuidv4(), name: 'Tania', username: 'floppydiskette' },
  { id:uuidv4(), name: 'Craig', username: 'siliconeidolon' },
  { id:uuidv4(), name: 'Ben', username: 'benisphere' },
]
//state
const [users, setUsers] = useState(usersData);
//agregar usuario
const addUser = (user) => {
  user.id = uuidv4()
  setUsers([
    ...users,user

  ])
}

//eliminar usuario
const deleteUser = (id) => {
  setUsers(users.filter((user) => user.id !== id))
  console.log(id)
}
  return (
    <div className = "container mt-5">
  
  <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Agregar usuario</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>ver usuarios</h2>
          <TablaUsuario users= {users} deleteUser= {deleteUser}/>
        </div>
      </div>
    </div>
  
  
  
   {/* <FormHook/> */}
   {/* <Formulario/> */}
   
   {/* < Jsx />
   < Lista/> */}
  {/* <Contador/> */}
    </div>
  );
}

export default App;
