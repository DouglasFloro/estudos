import axios from 'axios';
// import { useEffect, useState } from 'react';

// export function useFetch<T = unknown>(url: string) {
//   const [data, setData] = useState<T | null>(null);

//   const [isFetching, setisFetching] = useState(true);

//   const [error, setError] = useState<Error | null>(null);

//   useEffect(() => {
//     axios
//       .get(url)
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((err) => {
//         setError(err);
//       })
//       .finally(() => {
//         setisFetching(false);
//       });
//   }, []);

//   return { data, error, isFetching };
// }
