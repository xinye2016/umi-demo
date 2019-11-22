import { Typography, Button } from 'antd';
import styles from './todo.css'
import { connect } from 'dva'

const { Text } = Typography;

function Todo({ completed, content, index, removeTodo, modifyTodo }) {
  return (
    <div className={styles.todo}>
      <Text className={styles.text} delete={completed}>{content}</Text>
      <div className={styles.buttons}>
        <Button type="link" onClick={() => { removeTodo(index) }}>删除</Button>
        <Button type="link" onClick={() => { modifyTodo(index) }}>修改</Button>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    removeTodo: index => dispatch({ type: 'todoList/removeTodo', payload: index }),
    modifyTodo: index => dispatch({ type: 'todoList/modifyTodo', payload: index })
  }
}

export default connect(null, mapDispatchToProps)(Todo)