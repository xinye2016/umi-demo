import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import { List } from 'antd'
import styles from './index.css'
import { connect } from 'dva'
import { useEffect } from 'react'

function TodoList({ list, getList }) {
  useEffect(() => {
    getList()
  }, [getList])

  return (
    <div className={styles.todoList}>
      <AddTodo></AddTodo>
      <List
        className={styles.list}
        bordered
        dataSource={list}
        renderItem={(item, index) => (
          <List.Item>
            <Todo {...item} index={index}></Todo>
          </List.Item>
        )}
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    list: state.todoList.list
  }
}

const mapDisPatchToProps = dispacth => {
  return {
    getList: () => dispacth({ type: 'todoList/getListAsync' })
  }
}

export default connect(mapStateToProps, mapDisPatchToProps)(TodoList)