// import React from 'react';
// import PropTypes from 'prop-types'

// // This is a components which is bydefaulty exported
// // There are two types of export 1.default export 2. named export
// // Default export =  
// // Named exports =


// // Prop.types = We can add dynamic values while importing this components (Its like giving arguements while importing)

// export default function Navbar(props){
//   return(
//     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
//     <div className="container-fluid">
//       <a className="navbar-brand" href="/">{props.title}</a>
//       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//           <li className="nav-item">
//             <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="/">{props.about}</a>
//           </li>
//         </ul>
//         <div class="form-check form-switch">
//           <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
//           <label class="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
//         </div>
//       </div>
//     </div>
//   </nav>
//   )
// }


// // Navbar.propTypes = {
// //   title : propTypes.string.isRequired,
// //   home : propTypes.string.isRequired,
// //   about : propTypes.string.isRequired
// // }


// // We can also set default props

// Navbar.defaultProps = {
//   title : 'Set Title Here',
//   home : 'Set home here',
//   about: 'set ABout here'
// }

import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode}&&${props.modeblack} bg-${props.mode}&&${props.modeblack}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.aboutText}</a>
                        </li>
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button cla
                        ssName="btn btn-primary" type="submit">Search</button>
                    </form> */}
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div>
                    <div className={`form-check form-switch text-${props.modeblack==='lightblack'?'dark2':'lightblack'}`}>
                        <input className="form-check-input" onClick={props.toggleModeblack} type="checkbox" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable BlackMode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
  };