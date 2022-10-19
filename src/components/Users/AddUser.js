import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
import classes from '../Styles/AddUser.module.css';


const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [username, setUsername] = useState('');
  // const [userAge, setUserAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      // (username.trim().length === 0 || userAge.trim().length === 0)
      setError({
        title: 'Invalid Input',
        message: 'Boxes cannot be empty! Please enter name and age.'
      });
      return;
    }
    if (+enteredAge < 1) {
      // (+userAge < 1)
      setError({
        title: 'Invalid age',
        message: 'Age must be greater than 0'
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value= '';
    // setUsername('');
    // setUserAge('');
  }

  // const usernameChangeHandler = (event) => {
  //   setUsername(event.target.value);
  // }

  // const ageChangeHandler = (event) => {
  //   setUserAge(event.target.value);
  // }

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
            // value={username}
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input 
            id="age"
            type="number"
            // value={userAge} 
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
            <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
    //</React.Fragment> 
  );
}

export default AddUser;