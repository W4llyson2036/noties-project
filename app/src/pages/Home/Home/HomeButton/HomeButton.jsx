// lib
import { Link } from "react-router-dom";

export function HomeButton(props) {
    const style = {
        backgroundColor: props.bg, 
        padding: '0.4rem',
        textAlign: 'center', 
        borderRadius: '0.4rem',
        position: 'relative'
    };
    
    return (
        <Link to={props.endpoint} onClick={props.name == 'delete' ? props.setRemoveDeck : null }>  
            <div style={style}>
                {props.name}
                {props.name == 'review' && <TotalAvailableCard total={props.availableCard}/>}
            </div>
        </Link>
    )
}

function TotalAvailableCard(props) {
    const style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        height: '20.4px',
        padding: '0.2rem',
        fontSize: '0.7rem',
        width: '30.5333px',
        borderRadius: '0.3rem',
        backgroundColor: '#ffffff',
        boxShadow: 'inset 0 0 1px #494949ac',
        position: 'absolute',
        right: -5,
        top: -5,
    } 

    return (
        <h1 style={style}>{props.total > 100 ? '+99': props.total}</h1>
    )
}