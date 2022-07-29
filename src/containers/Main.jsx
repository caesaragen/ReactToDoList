import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTodo from '../components/AddTodo/AddTodo';
import TodoItem from '../components/TodoItem/TodoItem';
import styles from './Main.style';

export class Main extends Component {
  render() {
    return (
        <div style={styles.appContainer}>
            <div style={styles.container}>
                <h1 style={styles.title}>Todo List</h1>
                <div style={styles.inputWrapper}>
                    <AddTodo />
          </div>
          <TodoItem/>
            </div>
           
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)