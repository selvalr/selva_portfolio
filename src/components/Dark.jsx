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




import React, { useState } from "react";
import "../styles/Dark.css"; // Your CSS goes here

const Dark = () => {
  const [isDay, setIsDay] = useState(false);

  const handleToggle = () => {
    setIsDay(!isDay);
  };

  return (
    <div className={isDay ? "light" : ""}>
      <h1>moon & sun</h1>
      <div
        onClick={handleToggle}
        className={`tdnn ${isDay ? "day" : ""}`}
      >
        <div className={`moon ${isDay ? "sun" : ""}`}></div>
      </div>
    </div>
  );
};

export default Dark;
