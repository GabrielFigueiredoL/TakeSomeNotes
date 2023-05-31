import Header from "../components/Header"
import { Save, Trash2 } from 'react-feather'
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
        conteudo: '',
        cor: '#545454',
        fonte: 'Abel'
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
            navigate('/')})
        .catch((error) => {
            console.log(error)
        })
    }

    useEffect(()=> { 
        receberNotaDatabase()
    }, [location.key])

    console.log(nota)
    return (
        <section>
            <Header />
            <div className="full-note" style={{backgroundColor: nota.cor}}>
                <input
                    type="text"
                    className='title'
                    placeholder='Insira o Titulo da sua nota...'
                    name='titulo'
                    onChange={handleChange}
                    value={nota.titulo}
                    style={{fontFamily: nota.fonte}}

                />
                <textarea
                    className="note-content"
                    cols="30" rows="10"
                    placeholder='Escreva sua nota...'
                    name='conteudo'
                    onChange={handleChange}
                    value={nota.conteudo}
                    style={{fontFamily: nota.fonte}}

                ></textarea>
            </div>
            <div className="buttons">
                    <button onClick={salvarNota}><Save size={40} /></button>
                    <button onClick={excluirNota}><Trash2 size={40} /></button>
                    <input
                        name="cor"
                        type="color" 
                        className="color" 
                        value={nota.cor}
                        onChange={handleChange}
                    />
                    <select name="fonte" onChange={handleChange}>
                        <option style={{fontFamily: 'Abel'}} value="Abel">Abel</option>
                        <option style={{fontFamily: 'Arial'}} value="Arial">Arial</option>
                        <option style={{fontFamily: 'Helvetica'}} value="Helvetica">Helvetica</option>
                        <option style={{fontFamily: 'Times New Roman'}} value="Times New Roman">Times New Roman</option>
                        <option style={{fontFamily: 'Verdana'}} value="Verdana">Verdana</option>
                    </select>
                </div>
        </section>
    )
    
}

export default EditarNota