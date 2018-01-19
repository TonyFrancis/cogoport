import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TODO_ACTION } from './actions/index';

/**
 *  Todo app main Component
 *  connect to redux
 *  contain 2 function add and delete todo list
 * @extends Component
 */
class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const todoes = this.props.todo.map((elem, i) => {
        return(
          <div key={i}>
            {elem}
            <button onClick={() => this.props.onDelete(elem)}>
              Delete
            </button>
          </div>
        )
      });
    return (
      <div>Todo
        {todoes}
        <input value={this.state.todo} onChange={(e) => this.setState({todo: e.target.value})} />
        <button onClick={() => {
          this.props.onAdd(this.state.todo);
          this.setState({ todo: ''})}
        }
        >
          Save
        </button>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  todo: state.todoApp,
});

const mapDispatchToProps = (dispatch) => ({
  onDelete: (item) => dispatch(
    {
      type: TODO_ACTION.DELETE,
      payload: item
    }
  ),
  onAdd: (item) => dispatch(
    {
      type: TODO_ACTION.INSERT,
      payload: item
    }
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
