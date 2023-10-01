import './App.css';
import React , {useState , useMemo , useCallback} from 'react'
import Header from './Components/Header.js';

function App() {
  const [number , setNumber] = useState(0);

  // const data = useMemo(()=> {
  //   return {name : "Zehra"}
  // },[])//buraya bir parametre alırsa ve sürekli olarak operation geçirirse render edilir. çok fazla render daha yavaş çalışma

  const increment = useCallback(() => {
    setNumber((prevState) => prevState + 1 )
  } , []);//number olsaydı da sürekli render olurdu. bunun yerinde prev kullanıcaz

  console.log("render");
  return (
    <div className="App">
      {/* <Header number={number < 5 ? 0 : number} /> */}
      {/* <Header data={data} />  */}
      <Header increment={increment}/>
      <hr/>
      <h1>{number}</h1>
      {/* <button onClick={()=> setNumber(number+1)}>increase</button> */}

    </div>
  );
}

export default App;
