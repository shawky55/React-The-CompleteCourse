import calsses from './UserList.module.css';
import Card from '../UI/Card';
function UserList(props) {
  return (
    <Card classcss={calsses.users}>
      <ul>
        <small>click on item to delete</small>
        {props.items.map((item, i) => {
          return (
            <li
              key={i}
              onClick={(e) => {
                props.listDeleteHandler(e, i);
              }}
            >
              <span>{item.name}</span>
              <span> ({item.age})</span>
              <br></br>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
export default UserList;
