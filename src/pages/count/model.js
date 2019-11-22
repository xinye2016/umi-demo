export default {
  namespace: 'count',
  state: {
    count: 0
  },
  reducers: {
    increment(state) {
      return {
        count: state.count + 1
      }
    },
    decrement(state) {
      return {
        count: state.count - 1
      }
    }
  },
  effects: {
    *incrementAsync(actions, { put, call }) {
      yield call(delay, 1000)
      yield put({ type: 'increment' })
    },
    *decrementAsync(actions, { put, call }) {
      yield call(delay, 2000)
      yield put({ type: 'decrement' })
    }
  }
}

function delay(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, timeout)
  })
}