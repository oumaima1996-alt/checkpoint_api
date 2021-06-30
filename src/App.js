
import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'
import UserList from './UserList'

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/users/')
  .then((res) => setUsers(res.data))
  
  
  console.log('users', users)
 
}, [])
  return (
    <div className="App">
      
      <ul style = {{display:"flex", flexWrap: "wrap", justifyContent:"space-around"}}>
        {users.map(el =><li style = {{listStyle:"none"}}><UserList key = {el.id} user = {el}/></li>)}
      </ul>
      

   
      
    
    </div>
  );
}

export default App;
