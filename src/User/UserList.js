import React from "react";
// import Card from "../UI/Card";
import classes from "./UserList.module.css";
const UserList = (props) => {
  let usernumber =0;
  return (

    <div className={classes.maincard}>
      <ul className={classes.card} >
        {props.users.map((userInfo) => {
          return (
            <h3 key={usernumber}>
              {usernumber+=1} - {userInfo.name} ({userInfo.age} Years old)
            </h3>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
