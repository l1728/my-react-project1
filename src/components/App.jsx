// const CustomButton = ({ message, children }) => {
//   return <button onClick={() => alert(message)}>{children}</button>;
// };

// export const App = () => {
//   return (
//     <>
//       <CustomButton message="Playing music!">Play some music</CustomButton>
//       <CustomButton message="Uploading your data">Upload data</CustomButton>
//     </>
//   );
// };

import { useState } from 'react';

// const App = () => {
//   // let clicks = 0;
//   const [clicks, setClicks] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     // clicks = clicks + 1;
//     setClicks(clicks + 1);
//   };

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <>
//       <button onClick={handleClick}>Current: {clicks}</button>
//       <button onClick={handleToggle}>{isOpen ? 'Hide' : 'Show'}</button>
//       {isOpen && <p>Now you can see me!</p>}
//     </>
//   );
// };

//

// const ClickCounter = ({ value, onUpdate }) => {
//   return <button onClick={onUpdate}>Current: {value}</button>;
// };

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return (
//     <>
//       <ClickCounter value={clicks} onUpdate={handleClick} />
//       <ClickCounter value={clicks} onUpdate={handleClick} />
//     </>
//   );
// };

// const App = () => {
//   const [values, setValues] = useState({
//     x: 0,
//     y: 0,
//   });

//   const updateX = () => {
//     setValues({
//       ...values,
//       x: values.x + 1,
//     });
//   };

//   const updateY = () => {
//     setValues({
//       ...values,
//       y: values.y + 1,
//     });
//   };

//   return (
//     <div>
//       <p>
//         x: {values.x}, y: {values.y}
//       </p>

//       <button onClick={updateX}>Update x</button>
//       <button onClick={updateY}>Update y</button>
//     </div>
//   );
// };

export default App;
