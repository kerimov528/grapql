import { Box, styled } from "@mui/material";

const CharacterList = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: theme.palette.background.default,
}));

export { CharacterList };
