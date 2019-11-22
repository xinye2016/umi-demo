import request from 'umi-request'

export default {
  namespace: 'todoList',
  state: {
    list: [
      {
        content: '123',
        completed: false
      }
    ],
  },
  reducers: {
    addTodo(state, { payload: value }) {
      return {
        list: [...state.list, { content: value, completed: false }]
      }
    },
    removeTodo(state, { payload: index }) {
      let newList = state.list.filter((item, i) => i !== index)
      return {
        list: newList
      }
    },
    modifyTodo(state, { payload: index }) {
      let newList = state.list.map((item, i) => {
        let flag = index === i ? !item.completed : item.completed
        return { ...item, completed: flag }
      })
      return {
        list: newList
      }
    },
    getList(state, { payload: list }) {
      return {
        list
      }
    }
  },
  effects: {
    *getListAsync(actions, { put, call }) {
      const res = yield call(request, 'http://106.12.91.122:7300/mock/5dd4fcaebe57800020cce587/react-api/getList')
      yield put({ type: 'getList', payload: res.data.list })
    }
  }
}