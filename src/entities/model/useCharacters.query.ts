import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../api/getCharacters.fetch";

const useCharactersQuery = () => {
    const { data, loading, error } = useQuery(GET_CHARACTERS);
    return { data, loading, error };
}

export default useCharactersQuery;