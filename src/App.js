import axios from 'axios'
import Rows from './components/Rows'
import { useState, useEffect } from 'react'

function App() {

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setState(res.data)
        console.log(state);
      })
      .catch((err) => {
        console.log(err);
      })
    return;
  },[]);

  const [state, setState] = useState([]);

  const rows = state.map(item=>{
    return(
      <Rows 
        key = {item.id}
        companyName = {item.company.name}
        name = {item.name}
        city = {item.address.city}
        website = {item.website}
        catchPharse = {item.company.catchPhrase}
        bs = {item.company.bs}
        username = {item.username}
        email = {item.email}
        street = {item.address.street}
        zipcode = {item.address.zipcode}
        suite = {item.address.suite}
        phone = {item.phone}
      />
    )
  })

  return (
    <div className="App flex flex-col justify-center items-center">
      <h1 className="text-3xl p-4 font-bold ">Analystt.ai Leadzen Assignment</h1>
      <div className='mx-8 my-2'>
        {rows}
      </div>
      
    </div>
  );
}

export default App;
