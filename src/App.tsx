import { Box, Typography } from '@mui/material'
import './styles/App.css'
// import Character from './pages/Character'
import { Route, Routes } from 'react-router-dom'
import { CharacterList, CharacterLists } from './entities/ui'

function App() {

  return (
    <Box className='App'>
      <Typography variant='h2' textAlign='center' mb={5}>Rick and Morty</Typography>
      <Routes>
        <Route path='/character/:id' element={<CharacterList />} />
        <Route path='/' element={<CharacterLists />} />
        <Route path='*' element={<Typography variant='h1'>Not Found</Typography>} />
      </Routes>
    </Box>
  )
}

export default App
