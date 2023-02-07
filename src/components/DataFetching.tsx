import {} from '../hooks/useFetch';
//**useEfech */

// type Repository = {
//   name: string;
//   description: string;
// };

// export function DataFetching() {
//   const { data: repositories, isFetching } = useFetch<Repository[]>(
//     'https://api.github.com/users/diego3g/repos',
//   );

//   return (
//     <ul>
//       {isFetching && <h1>Carregando....</h1>}
//       {repositories?.map((repo) => {
//         return (
//           <li key={repo.name}>
//             <h2>{repo.name}</h2>
//             <p>{repo.description}</p>
//           </li>
//         );
//       })}
//     </ul>
//   );
// }
