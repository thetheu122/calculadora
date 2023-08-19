import './App.scss';

import { useState } from 'react';

function App() {
  
  
  const [numero1, setNumero1] = useState(0)
  const [numero2, setNumero2] = useState(0)
  const [Resultado, setresultado] = useState(0) 
  

  function altN1(e){
    setNumero1(Number(e.target.value))
  }

  
  function altN2(e){
    setNumero2(Number(e.target.value))
  }

  function somar (){
    let x = numero1 + numero2
    setresultado(x)
  }


  function Dividir(){
    let x = numero1 / numero2
    setresultado(x)
  }

  function Multiplicar(){
    let x = numero1 * numero2
    setresultado(x)
  }

  function Subtrair(){
    let x = numero1 - numero2
    setresultado(x)
  }
  
  
  return (
    <div className='pag-app'>
        <div className="App">
            
                <div className='numeros'>
                        <input type='text' onChange={altN1} value={numero1}></input>
                        <input type='text' onChange={altN2} value={numero2}></input>
                        Resultado:{Resultado}
                </div>
              
              <div className='operadores'>
                      <button onClick={somar}>Somar</button>
                      <button onClick={Dividir}>Dividir</button>
                      <button onClick={Multiplicar}>Multiplicar</button>
                      <button onClick={Subtrair}>Subtrair</button>
              </div>
        </div>
    </div>
  );
}

export default App;
