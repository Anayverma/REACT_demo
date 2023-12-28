import { useState ,useCallback,useEffect,useRef} from 'react';
// import './App.css'

function App() {
const [length , setLength]=useState(6);
const[numberAllowed,setNumberAllowed]=useState(false);;
const[charAllowed,setcharAllowed]=useState(false);
const[password,setPass]=useState("");
const passwordref=useRef(null)
const passwordgenerator=useCallback(()=>{
let pass=""
let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
if(numberAllowed) str+="0123456789"
if(charAllowed) str+="!@#$%^&*(){}:'><.,/?|][`~"
for (let i = 0; i < length; i++) {
  let chat=Math.floor(Math.random()*str.length+1);
  pass+=str.charAt(chat);  
}
setPass(pass);
},[length,numberAllowed,charAllowed,setPass]);
useEffect(()=>{
  passwordgenerator()
},[length,numberAllowed,charAllowed,passwordgenerator]);
const copypasswordtoclipboard=useCallback(()=>{
  // if (passwordref.current) {
    passwordref.current?.select();
    window.navigator.clipboard.writeText(password);
  }
 ,[password,passwordref]);
  return (
    < >
     <div className='w-full max-w-md mx-10, shadow-md
     rounded-lg  px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className="text-white text-center my-3">PASSWORD GENERATOR</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
        <input type="text" className="outline-none w-full py-1 px-3" value={password} placeholder='password' readonly   />
      <button
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
      onClick={copypasswordtoclipboard}>
        copy
      </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range"  
          min={6}
          max={100}
          value={length}
          className='cursor-pointer' 
          ref={passwordref}
          onChange={(e)=>{
            setLength(e.target.value);
          }}/>
          <label >Length : {length} </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked={numberAllowed}
          id="numberinput"
          onChange={(e)=>{
            setNumberAllowed((prev)=>!prev);
          }} />
          <label > Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked={charAllowed}
          id="numberinput"
          onChange={(e)=>{
            setcharAllowed((prev)=>!prev);
          }} />
          <label >Special Characters</label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
