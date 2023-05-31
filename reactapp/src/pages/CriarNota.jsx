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
        conteudo: '',
        cor: '#2F2F2F',
        fonte: 'Abel'
    })
    
    const navigate = useNavigate()

    const adicionarNota = async () => {
        await fetch(baseURL, {
            method: "POST",
            body: JSON.stringify({
                titulo: nota.titulo,
                conteudo: nota.conteudo,
                cor: nota.cor
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
                    <button id="adicionarNota" onClick={adicionarNota}><PlusCircle size={40}/></button>
                    <input
                        name="cor"
                        type="color" 
                        className="color" 
                        value={nota.cor}
                        onChange={handleChange}
                    />
                    <select name="fonte" value={nota.fonte} onChange={handleChange}>
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

export default CriarNota