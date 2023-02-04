import classes from "./UsersList.module.css"
import Card from "../Ul/Card";

const UsersList =(props)=>{
    return (
     <Card className={classes.users}>
        <ul>
            {props.users.map((user)=>{
               return (
              <li key={user.id}>
               {user.name} 
               ({user.age} years old)
              </li>
              )
            })}
        </ul>
     </Card>
    )
};

export default UsersList;