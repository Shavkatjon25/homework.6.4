import { useState } from 'react'


function App() {
  const [count, setCount] = useState([])
  const [bir , hil]=useState([]);
 let son = ()=>Math.floor(Math.random()*10);

 const arr=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 const sonlar=[...count]
if(sonlar.length==0){
  arr.forEach(k=>{
    sonlar.push({
      id:k,
      qiymat:son(),
      belgilandi:false,
      birhilmi:false
    })
 })
 setCount(sonlar);
}

let newmass=[];
function Bosildi(id, qiy){
newmass=count.map(n=>{
  return n.id!=id ? n : {...n, belgilandi:true}
})
if(bir.length==0){
  hil([qiy]);
}
Birhil(qiy);
}
function Birhil(mat){
  let mass=[];
  if(bir.length==0){
  mass=newmass.map(b=>{
    return b.qiymat!=mat ? b : {...b, birhilmi:true}
  })
}else{
      mass=newmass.map(b=>{
      return b.qiymat!=bir[0] ? b : {...b, birhilmi:true}
    }
  )
}
  setCount(mass);
}

function rendr(){
  const masiv=count.map(m=>{
    return m.belgilandi && m.birhilmi ? m : {...m, belgilandi:false, birhilmi:false, qiymat: son()}
  });
  setCount(masiv);
  const newMas=masiv.filter(n=>{
    if(!(n.belgilandi)){return n;}
  })
  if (newMas.length==0) {
    setCount([]); 
    hil([])   
  }
}
 

  return (
    <div className="w-[520px] h-[350px] text-center flex flex-col justify-between p-[33px] bg-slate-800">
      <div className='text-white'>
        <h1 className='font-bold text-[26px]'>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      </div>
      <div className='flex flex-wrap w-[450px] gap-5 mb-5' >
      {count.map(a=>{
        return <button key={a.id} onClick={()=>Bosildi(a.id, a.qiymat)} className={ (a.belgilandi && a.birhilmi)  ? 'btn btn-outline w-16  bg-green-500 cursor-no-drop ':' w-16 btn btn-outline btn-info'}>{a.qiymat}</button>
      })}
      </div>
      <div>
        <button className='btn btn-primary w-24' onClick={rendr}>Roll</button>
      </div>
    </div>
  )
}

export default App
