import './Card.css'

function Card(props){
    let calsses = 'card ' + props.className;
    return <div className={calsses}>{props.children}</div>;
}

export default Card;