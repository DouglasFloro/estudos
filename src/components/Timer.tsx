import { useEffect, useState } from 'react';

// const COUNTDOWN_INITAL_IN_SECONDS = 5;

// export const Timer = () => {
//   const [secondsAmount, setSecondsAmount] = useState(
//     COUNTDOWN_INITAL_IN_SECONDS,
//   );

//   useEffect(() => {
//     if (secondsAmount === 0) {
//       alert('Chegou ao fim!!');
//       return;
//     }
//   }),
//     setTimeout(() => {
//       setSecondsAmount((status) => status - 1);
//     }, 1000);

//   const minutes = Math.floor(secondsAmount / 60);
//   const seconds = secondsAmount % 60;
//   return (
//     <div>
//       <span>{String(minutes).padStart(2, '0')}</span>
//       <span>:</span>
//       <span>{String(seconds).padStart(2, '0')}</span>
//     </div>
//   );
// };
