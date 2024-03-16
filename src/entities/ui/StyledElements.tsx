import { Box, styled } from "@mui/material";

const CharacterList = styled(Box)(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
}));

export { CharacterList };
