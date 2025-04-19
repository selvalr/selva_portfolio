// import React from 'react';
// import '../styles/Dark.css';

// const Dark = () => {
//   return (
//     <div className="toggle-button">
//       <div id="light">
//         <a href="#light" className="light"></a>
//       </div>
//       <div id="dark">
//         <a href="#dark" className="dark"></a>
//       </div>
//       <div className="content">
//         <div className="satallite">
//           <div className="sun">
//             <div className="moon">
//               <div className="dot dot1"></div>
//               <div className="dot dot2"></div>
//               <div className="dot dot3"></div>
//             </div>
//           </div>
//           <div className="rays">
//             <div className="ray ray1"></div>
//             <div className="ray ray2"></div>
//             <div className="ray ray3"></div>
//           </div>
//         </div>
//         <div className="clouds">
//           <div className="cloudset cloudset1">
//             {[...Array(7)].map((_, i) => (
//               <div key={i} className={`cloud cloud${i + 1}`}></div>
//             ))}
//           </div>
//           <div className="cloudset cloudset2">
//             {[...Array(7)].map((_, i) => (
//               <div key={i} className={`cloud cloud${i + 1}`}></div>
//             ))}
//           </div>
//         </div>
//         <div className="stars">
//           {[...Array(11)].map((_, i) => (
//             <div key={i} className={`star star${i + 1}`}></div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dark;


//2//

// import React, { useState } from "react";
// import "../styles/Dark.css"; // Your CSS goes here

// const Dark = () => {
//   const [isDay, setIsDay] = useState(false);

//   const handleToggle = () => {
//     setIsDay(!isDay);
//   };

//   return (
//     <div className={isDay ? "light" : ""}>
//       <h1>moon & sun</h1>
//       <div
//         onClick={handleToggle}
//         className={`tdnn ${isDay ? "day" : ""}`}
//       >
//         <div className={`moon ${isDay ? "sun" : ""}`}></div>
//       </div>
//     </div>
//   );
// };

// export default Dark;



//3


// import React, { useState } from "react";
// import { Icon } from "@iconify/react";
// import sunIcon from "@iconify-icons/feather/sun";
// import moonIcon from "@iconify-icons/feather/moon";
// import "../styles/Dark.css"; // Assuming you have the styles in a separate CSS file

// const Dark = () => {
//   const [isDark, setIsDark] = useState(false);

//   const toggleTheme = () => {
//     setIsDark(!isDark);
//     document.body.classList.toggle("dark-mode", !isDark); // Optional: toggle dark mode class on body
//   };

//   return (
//     <label>
//       <input
//         className="toggle-checkbox"
//         type="checkbox"
//         checked={isDark}
//         onChange={toggleTheme}
//       />
//       <div className="toggle-slot">
//         <div className="sun-icon-wrapper">
//           <Icon icon={sunIcon} className="sun-icon" />
//         </div>
//         <div className="toggle-button"></div>
//         <div className="moon-icon-wrapper">
//           <Icon icon={moonIcon} className="moon-icon" />
//         </div>
//       </div>
//     </label>
//   );
// };

// export default Dark;



//4


import React, { useState, useEffect } from "react";
import "../styles/Dark.css"; // Optional external CSS for animation/styling

const Dark = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  const handleToggle = () => setIsDark(!isDark);

  return (
    <div className="darkmode-wrapper">
      <input
        type="checkbox"
        id="darkmode-toggle"
        className="sr-only"
        checked={isDark}
        onChange={handleToggle}
      />
      <label htmlFor="darkmode-toggle" className="toggle">
        <span>Toggle dark mode</span>
      </label>
    </div>
  );
};

export default Dark;
