
import  classes from'./card.module.css'

function Card(props){

    return (
      <div className={`${props.classcss} ${classes.card}`}>{props.children}</div>
    );
}
export default Card;