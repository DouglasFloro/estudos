import axios from 'axios';
import { useQuery } from 'react-query';

type Repository = {
  name: string;
  description: string;
};

export function Repos() {
  const { data, isFetching } = useQuery<Repository[]>('repos', async () => {
    const response = await axios.get(
      'https://api.github.com/users/douglasfloro/repos',
    );
    return response.data;
  });

  return (
    <ul>
      {isFetching && <h1>Carregando....</h1>}
      {data?.map((repo) => {
        return (
          <li key={repo.name}>
            <h2>{repo.name}</h2>
            <p>{repo.description}</p>
          </li>
        );
      })}
    </ul>
  );
}
