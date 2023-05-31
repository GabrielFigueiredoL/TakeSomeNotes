import { Link } from 'react-router-dom'
import { Edit3 } from 'react-feather'
import './LinkNota.css'

const LinkNota = (props) => {
    return(
        <Link to={`/editar-nota/${props.id}`}className='conteiner-note-aside'><div className='note-aside' style={{backgroundColor: props.cor, fontFamily: props.fonte}}><Edit3 size={16}/><p>{props.titulo}</p></div></Link>
    )
}

export default LinkNota