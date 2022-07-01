import './ExpensesList.css'
import ExpenseItem from '../ExpenseItem/ExpenseItem'

export default function ExpensesList(props){
console.log(props.filteredList)
    if (props.filteredList.length===0){

        return (<h3 className='expenses-list__fallback'>there no expense</h3>
) 
    }else{
return(
    <ul className='expenses-list'>
    { props.filteredList.map((ele)=><ExpenseItem
            key={ele.id}
            title={ele.title}
            date={ele.date}
            amount={ele.amount}
            />)}
   </ul>
   )
    }
}
