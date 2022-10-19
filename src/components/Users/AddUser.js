import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
// import Wrapper from '../Helpers/Wrapper';
import classes from '../Styles/AddUser.module.css';


const AddUser = (props) => {
  const [username, setUsername] = useState('');
  const [userAge, setUserAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Boxes cannot be empty! Please enter name and age.'
      });
      return;
    }
    if (+userAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Age must be greater than 0'
      });
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

  const errorHandler = () => {
    setError(null);
  }

  return (
    // <React.Fragment>
    <Wrapper>
      { error && 
        <ErrorModal 
          title={error.title} 
          message={error.message}
          onConfirm={errorHandler}
      /> }
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
    </Wrapper>
    //</React.Fragment> 
  );
}

export default AddUser;