import { gql, useQuery } from "@apollo/client";

const CharacterLists = () => {
    const GET_CHARACTERS = gql`
        {
            characters {
                results {
                    id
                    name
                    image
                }
            }
        }
    `;

    const { loading, error, data } = useQuery(GET_CHARACTERS);

  return loading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>Something went wrong</p>
  ) : (
    <div>
      {data.characters.results.map((character: any) => (
        <div key={character.id}>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
        </div>
      ))}
    </div>
  );
};

export default CharacterLists;
