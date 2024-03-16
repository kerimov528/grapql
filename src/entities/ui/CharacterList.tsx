import { useParams } from "react-router-dom";
import { useCharacterQuery } from "../model/useCharacter.query";
import { Box, Divider, Stack, Typography } from "@mui/material";

export const CharacterList = () => {
    const param = useParams();
    const { data, error, loading } = useCharacterQuery(param.id || '');
    console.log("🚀 ~ CharacterList ~ data:", data)
    return loading ? (
        <Typography variant="body1">Loading...</Typography>
    ) : error ? (
        <Typography variant="body1">Error: {error.message}</Typography>
    ) : (
        <Stack flexDirection='row' spacing={2} px={2} justifyContent='space-between'>
            <Box component={'img'} src={data?.character?.image} alt={data?.character?.name} width={700} height={730} sx={{objectFit: 'cover'}}/>
            <Box pl={2}>
                <Typography variant="h5" fontWeight='bold'>{data?.character?.name}</Typography>
                <Typography variant="h6" fontWeight='bold'>Episodes:</Typography>
                <Divider sx={{my: 2, bgcolor: 'tomato'}}/>
                <Stack height={600} overflow={'hidden auto'} >
                    {data?.character?.episode.map((episode: any) => (
                        <Typography key={episode.id} variant="body1" fontStyle='italic'>{episode.name} - <Box component='span' fontWeight='bold'>{episode.episode}</Box></Typography>
                    ))}
                </Stack>
            </Box>
        </Stack>
    );
};
