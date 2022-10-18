import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from '../Styles/AddUser.module.css';


const AddUser = (props) => {
  const [username, setUsername] = useState('');
  const [userAge, setUserAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || userAge.trim().length === 0) {
      return;
    }
    if (+userAge < 1) {
      return;
    }
    props.onAddUser(username, userAge);
    setUsername('');
    setUserAge('');
  }

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setUserAge(event.target.value);
  }
  return (
    <React.Fragment>
      <ErrorModal title="An error occured!" message="Something went wrong!" />
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input 
            id="username"
            type="text" 
            value={username}
            onChange={usernameChangeHandler}/>
          <label htmlFor="age">Age (Years)</label>
          <input 
            id="age"
            type="number"
            value={userAge} 
            onChange={ageChangeHandler}/>
            <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
}

export default AddUser;