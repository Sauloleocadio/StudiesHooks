import React, {useState, useEffect}from 'react';
import './App.css';


function App() {
  
  const [contador,setContador] = useState(0);
  const [tech,setTech] = useState([]);

  const [input,setIput] = useState('');



  useEffect(()=> {
    const techStorage = localStorage.getItem('tech');

    if(techStorage){
      setTech(JSON.parse(techStorage))
    }

  },[])

  useEffect(()=> {
    localStorage.setItem('tech', JSON.stringify(tech));
  },[tech])


  function addNumber(){
    setContador(contador +1);
  }

  function deleteNumber(){
    if(contador === 0) {
      alert('Chegou a zero');
    }else{
      setContador(contador - 1);
    }

  }

  function addTech(){

    setTech([...tech ,input ])
    setIput('')
  }

  function addInput(e) {
   setIput(e.target.value)
  }


  return (
    <div>
      <p>You clicked {contador} times</p>
      <button onClick={addNumber}>
          Aumentar
      </button>
      <button onClick={deleteNumber}>
          diminuir
      </button>

     <div>

     <ul>
        {tech.map(tech => (
         <li 
         key={tech}
         >
          {tech}
         </li>
       ))}
     </ul>

     <input type="text" value={input} onChange={addInput}/>
     
      <button onClick={addTech}>
          adcionar tech
      </button>

     </div>


    </div>
  );
}

export default App;
