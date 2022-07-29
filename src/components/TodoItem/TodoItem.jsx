import React from 'react';
import styles from './TodoItem.style';

const TodoItem = () => {
  return (
      <div>
          <div style={styles.taskContainer}>
        <div style={styles.taskWrapper}>
          <p style={styles.task}>Cook Dinner</p>
          <div style={styles.iconsWrapper}>
            <i className='fas fa-check-circle'></i>
          </div>
              </div>
          </div>
    </div>
  )
}

export default TodoItem;