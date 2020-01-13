import { INCREMENT, DECREMENT } from '../actionTypes';

const increment = () => ({
  type: INCREMENT,
})

const decrement = () => ({
  type: DECREMENT
})

export default {
  increment,
  decrement
}