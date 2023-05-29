import Header from "../components/Header"
import { CheckCircle, XCircle } from 'react-feather'
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const EditarNota = () => {
    const location = useLocation()
    const navigate = useNavigate()

    let baseURL = 'http://localhost:3000' + location.pathname

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

    const receberNotaDatabase = async () => {
        await fetch(baseURL)
            .then(resposta => resposta.json())
            .then(data => {
                setNota(data[0])
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const excluirNota = async () => {
        console.log(baseURL)
        await fetch(baseURL, {
            method: 'DELETE'
        })
        .then(() => navigate('/'))
        .catch((error) => {
            console.log(error)
        })
    }

    const salvarNota = async () => {
        await fetch(baseURL, {
            method: 'PUT',
            body: JSON.stringify(nota),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
        })
        .then(()=> {
            console.log(nota)
            navigate('/')})
        .catch((error) => {
            console.log(error)
        })
    }

    console.log(nota.id, nota.titulo, nota.conteudo)

    useEffect(()=> { 
        receberNotaDatabase()
    }, [location.key])

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
                    <button onClick={salvarNota}><CheckCircle size={24} />Salvar nota</button>
                    <button onClick={excluirNota}><XCircle size={24} />Excluir nota</button>
                </div>
            </div>
            
        </section>
    )
    
}

export default EditarNota