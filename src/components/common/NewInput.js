import { useDispatch } from 'react-redux'
import {
  incrementInputValue,
  decrementInputValue,
  setInputValueDefault,
} from '../../features/dataSlice'

const NewInput = ({ item, inputValue, setInputValue }) => {
  const dispatch = useDispatch()

  const handleKeyPress = (event, item, inputValue) => {
    if (event.key === 'Enter') {
      setInputValue(inputValue)
      const data = {
        inputValue,
        id: item.id,
      }
      dispatch(setInputValueDefault(data))
    }
  }

  const handleIncrement = (item) => {
    setInputValue((val) => val + 1)
    dispatch(incrementInputValue(item.id))
  }

  const handleDecrement = (item) => {
    setInputValue((val) => val - 1)
    dispatch(decrementInputValue(item.id))
  }

  return (
    <div className="flex space-x-2 w-1/5">
      <p
        className="text-center cursor-pointer"
        onClick={() => handleDecrement(item)}
      >
        -
      </p>

      <input
        onChange={(e) => setInputValue(Number(e.target.value))}
        value={inputValue}
        onKeyDown={(event) => handleKeyPress(event, item, inputValue)}
        className="w-6 border border-solid border-black text-center"
      />

      <p
        className="text-center cursor-pointer"
        onClick={() => handleIncrement(item)}
      >
        +
      </p>
    </div>
  )
}

export default NewInput
