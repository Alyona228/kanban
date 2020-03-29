import React from 'react'
import '../styles/Main.css'
import Board from './Board.js'

export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      tasks: [],
    }
  }

  handleAddTask = task => {
    const tasks = this.state.tasks
    tasks.push(task)
    this.setState({
      tasks: tasks,
    })
  }

  render() {
    return (
      <div className='body__boards'>
        <Board
          title='Backlog'
          tasks={this.state.tasks}
          handleAddTask={this.handleAddTask}
          fn={this.addItem}
        />
        <Board
          title='Ready'
          tasks={this.state.tasks}
          handleAddTask={this.handleAddTask}
        />
        <Board
          title='In Progress'
          tasks={this.state.tasks}
          handleAddTask={this.handleAddTask}
        />
        <Board
          title='Finished'
          tasks={this.state.tasks}
          handleAddTask={this.handleAddTask}
        />
      </div>
    )
  }
}
