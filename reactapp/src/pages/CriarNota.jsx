import Header from "../components/Header"
import { PlusCircle } from 'react-feather'
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const baseURL = 'http://localhost:3000/criar-nota'

const CriarNota = () => {
    const handleChange = e => {
        const { name, value } = e.target
        setNota(dadosNota => {
            const notaTmp = { ...dadosNota, [name]: value }
            return notaTmp
        })
    }

    const [nota, setNota] = useState({
        id: '',
        titulo: '',
        conteudo: ''
    })
    
    const navigate = useNavigate()

    const adicionarNota = async () => {
        console.log('clicado')
        await fetch(baseURL, {
            method: "POST",
            body: JSON.stringify({
                titulo: nota.titulo,
                conteudo: nota.conteudo
            }), headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        })
            .then(() => navigate('/'))
            .catch((error) => {
                console.log(error)
            })
            
    }

    return (
        <section>
            <Header />
            <div className="content">
            <div className="full-note">
                <input
                    type="text"
                    className='title'
                    placeholder='Insira o Titulo da sua nota...'
                    name='titulo'
                    onChange={handleChange}
                    value={nota.titulo}

                />
                <textarea
                    className="note-content"
                    cols="30" rows="10"
                    placeholder='Escreva sua nota...'
                    name='conteudo'
                    onChange={handleChange}
                    value={nota.conteudo}

                ></textarea>
            </div>
                <div className="buttons">
                    <button id="adicionarNota" onClick={adicionarNota}><PlusCircle />Adicionar Nota</button>
                </div>
            </div>
            
        </section>
    )
    
}

export default CriarNota