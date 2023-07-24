import { useState } from 'react'
import './App.css'
import { puppyList } from './data'



function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)

console.log(featuredPup)
  console.log("puppyList: ", puppyList);
  
  return (
    <div className="App">
    
      {puppies.map((puppy) => {
        return (
          <p onClick= {()=>{console.log("puppy id: ", puppy.id)}} key={puppy.id}>
            {puppy.name}
          </p>
        );
      })}
    </div>
  );
}
export default App
