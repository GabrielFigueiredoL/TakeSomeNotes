import './Header.css'
import { PlusCircle } from 'react-feather'

import React from 'react'
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

import LinkNota from '../components/LinkNota'

const baseURL = 'http://localhost:3000'

const Header = () => {
    const [notas, setNotas] = useState([])

    const receberNotasDatabase = async () => {
        await fetch(baseURL)
            .then(resposta => resposta.json())
            .then(data => {
                setNotas(data)
                return data
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        receberNotasDatabase()
    }, [])

    return (
            <header>
                <h1>Take Some Notes</h1>
                <div className="notes">
                <Link to={`/criar-nota/`}className='conteiner-note-aside'><div className='note-aside'><PlusCircle size={16} /><p>Criar nova nota</p></div></Link>
                    {notas.map((nota) => (
                        <LinkNota id={nota.id} titulo={nota.titulo} key={nota.id} />
                    ))}
                </div>
            </header>
    )
}

export default Header