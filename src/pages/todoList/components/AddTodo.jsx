import { Input, Button } from 'antd'
import styles from './addTodo.css'
import { useState } from 'react'
import { connect } from 'dva'

function AddTodo({ addTodo }) {
  const [inputValue, setInputValue] = useState('')

  return (
    <div className={styles.addDiv}>
      <Input placeholder="请输入相关事项" className={styles.input} onChange={(e) => { setInputValue(e.target.value) }} />
      <Button type="primary" onClick={() => { addTodo(inputValue) }}>添加</Button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: value => dispatch({ type: 'todoList/addTodo', payload: value })
  }
}

export default connect(null, mapDispatchToProps)(AddTodo)