// import { useState } from 'react';
// import './App.css';
// import About from './components/About';
// import Navbar from './components/Navbar';
// import Form from './components/TextForm';



// function App() {
//   const [mode, setMode] = useState('dark');//Hether darmode is enabled or not
//   return (
//     <>
//     {/* // Normal method to initialise/add a comppnent
//       // <Navbar></Navbar> */}
//      {/* Below line shows how to add dynamic props while initialisng component */}
    
//     <Navbar title="Text Analyzer" home="Home" about="About Us"></Navbar>
//     <div className="container my-4">
//         <Form heading="Enter text to analyze below"></Form>
//     </div>

//     {/* <About></About> */}
   
    


//     </>
//   );

// }

// export default App;



// import './App.css';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
// import About from './components/About';
// import Alert from './components/Alert';
// import React, { useState } from 'react';
// import { link } from 'react-router-dom';


// function App() {
//   const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
//   const toggleMode = () => {
//     if (mode === 'light') {
//         setMode('dark');
//         document.body.style.backgroundColor = '#07263E';
//         showAlert("Dark mode has been enable", "success")
       
        
//         setInterval(()=>{
//           document.title = "Blue Mode Enabled";
//         },1500);

//         setInterval(()=>{
//           document.title = "Text Utils - Blue Mode";
//         },1200);
        
//     }
//     else {
//         setMode('light');
//         document.body.style.backgroundColor = 'white';
//         showAlert("Light mode has been enable", "success")
//     }
//   }

//   const [modeblack, setModeblack] = useState('lightblack'); // Whether dark mode is enabled or not
//   const toggleModeblack = () => {
//     if (modeblack === 'lightblack') {
//       setModeblack('dark2');
//         document.body.style.backgroundColor = 'black';
//         showAlert("Black mode has been enable", "success")
        
//         setInterval(()=>{
//           document.title = "Black Mode Enabled";
//         },2000);

//         setInterval(()=>{
//           document.title = "Text Utils - Black Mode";
//         },1200);
//     }
//     else {
//       setModeblack('lightblack');
//         document.body.style.backgroundColor = 'white';
//         showAlert("Light mode has been enable", "success")
//     }
//   }

//   const [alert, setAlert] = useState(null);
//   const showAlert = (message, type) => {
//     setAlert({
//         msg: message,
//         type: type
//     })
//     setTimeout(()=> {
//       setAlert(null);
//     }, 1500);
//   }

//   return (
//     <>
//     <Router>

//       {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
//       {/* <Navbar/> */}
//       {/* <Navbar title="TextUtils" /> */}
//       <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} modeblack={modeblack} toggleModeblack={toggleModeblack} />
//       <Alert alert={alert}/>
    

//       <Switch>
        
//         <Route path="/">
//           <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} modeblack={modeblack}/>
//         </Route>

//         <Route path="/about">
//           <About/>
//         </Route>

//       </Switch>

//     </Router>
//     </> 
//   );
// }
// export default App;

import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
      <Route>
      {/* /users --> Component 1
          /users/home --> Component 2 */}

            <Route path='/' element={ <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>} />
            <Route path='/about' element={  <About />} />

      </Route>
    </Routes>
    </div>
    </Router>
    </> 
  );
}

export default App;
