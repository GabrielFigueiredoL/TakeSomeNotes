import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CriarNota from './CriarNota'
import EditarNota from './EditarNota'


const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/criar-nota' element={<CriarNota />}/>
                <Route path='/editar-nota/:id' element={<EditarNota />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas