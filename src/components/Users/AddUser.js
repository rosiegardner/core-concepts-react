import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from '../Styles/AddUser.module.css';


const AddUser = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(username, age);
  }

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  }
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input 
          id="username"
          type="text" 
          onChange={usernameChangeHandler}/>
        <label htmlFor="age">Age (Years)</label>
        <input 
          id="age"
          type="number" 
          onChange={ageChangeHandler}/>
          <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;