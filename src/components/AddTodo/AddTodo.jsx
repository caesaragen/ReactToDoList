import React from 'react';
import styles from './AddTodo.style';

const AddTodo = () => {
  return (
    <div style={{display:'flex'}}>
      <input style={styles.inputField} placeholder="Enter Todo Item"/>
      <button style={styles.submitButton}>Add</button>
     </div>
       
    
  )
}

export default AddTodo