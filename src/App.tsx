import Card from "./components/Card";
import { useFetchRepositories } from "./hooks/useRepos";
import { useFavoriteReposStore } from "./store/favoriteRepos";

function App() {
  const { data, isLoading } = useFetchRepositories("jereconjota");
  const favoriteRepos = useFavoriteReposStore(
    (state: any) => state.favoriteReposIds
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data?.map((repository) => (
        <Card
          repository={repository}
          key={repository.id}
          isFavorite={favoriteRepos.includes(repository.id)}
        />
      ))}
    </div>
  );
}

export default App;
