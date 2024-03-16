import { useQuery } from "@apollo/client";
import { GET_CHARACTER } from "../api/getCharacter.fetch";

const useCharacterQuery = (id: string) => {
  const { data, loading, error } = useQuery(GET_CHARACTER, {
    variables: { id },
  });

  return { data, loading, error };
};

export  { useCharacterQuery };
