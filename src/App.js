import { useState } from "react"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Textform from "./components/Textform"
import Alert from "./components/Alert"

const App = () => {
  const[Mode,setDarkmode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
setAlert(null);
    },1500);
  }
  const toggleMode=()=>{
    if(Mode==='light')
    {setDarkmode('dark');
    document.body.style.backgroundColor='#343a40';
    showAlert("dark mode has been enabled","success");
  }
  else
  {
  setDarkmode('light');
  document.body.style.backgroundColor='white';
  showAlert("light mode has been enabled","success");
  
  }
  }
  return (
    <div>
      <Navbar title="TextKaro" about="About TextKaro" mode={Mode} togglemode={toggleMode}></Navbar>
      <div className="container my-3">
        <Alert alert={alert }></Alert>
      <Textform heading="enter ur text" mode={Mode} showalert={showAlert}></Textform>
      {/* <About></About> */}
      
        </div>
    </div>
  )
}

export default App



