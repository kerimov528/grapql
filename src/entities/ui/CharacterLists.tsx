import { Box, Typography } from "@mui/material";
import { CharacterList } from "./StyledElements";
import useCharactersQuery from "../model/useCharacters.query";
import { Link } from "react-router-dom";

export const CharacterLists = () => {
    const { loading, error, data } = useCharactersQuery();

  return loading ? (
    <Typography variant="body1">Loading...</Typography>
  ) : error ? (
    <Typography variant="body1">Something went wrong</Typography>
  ) : (
    <CharacterList>
      {data.characters.results.map((character: any) => (
        <Box key={character.id}>
          <Box component='img' src={character.image} alt={character.name} />
          <Link to={`/character/${character.id}`} style={{textDecoration: 'none', color: 'tomato'}}>
          <Typography variant="h5" my={2} fontWeight='bold'>{character.name}</Typography>
          </Link>
        </Box>
      ))}
    </CharacterList>
  );
};
