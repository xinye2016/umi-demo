import { Button } from 'antd'
import styles from './index.css'
import { connect } from 'dva'

function Count({ count, increment, decrement, incrementAsync, decrementAsync }) {
  return (
    <div>
      <h3>数量:{count}</h3>
      <div className={styles.buttons}>
        <Button type="primary" onClick={() => { increment() }}>加</Button>
        {' '}
        <Button type="primary" onClick={() => { decrement() }}>减</Button>
      </div>
      <div className={styles.buttons}>
        <Button type="primary" onClick={() => { incrementAsync() }}>延迟1s加</Button>
        {' '}
        <Button type="primary" onClick={() => { decrementAsync() }}>延迟2s减</Button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    count: state.count.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'count/increment' }),
    decrement: () => dispatch({ type: 'count/decrement' }),
    incrementAsync: () => dispatch({ type: 'count/incrementAsync' }),
    decrementAsync: () => dispatch({ type: 'count/decrementAsync' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count)