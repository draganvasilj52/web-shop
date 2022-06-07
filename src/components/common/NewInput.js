import { useDispatch } from 'react-redux'
import {
  incrementInputValue,
  decrementInputValue,
  setInputValueDefault,
  removeItemFromShoppingCart

} from '../../features/dataSlice'
import { useState, useRef} from  'react'
import  OutsideClickHook from '../../hooks/OutsideClickHook'
import './cardDeal.css'

const NewInput = ({ item}) => {
 

  const dispatch = useDispatch()
  const inputRef = useRef()

  const [inputValue, setInputValue] = useState('')
  const [error,setError] = useState('')

  OutsideClickHook(inputRef, error !== '' ? () => setError('') : () => {})

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const data = {
        inputValue,
        id: item.id,
      }
      dispatch(setInputValueDefault(data))
    }
  }

  const handleInputChange = (event) => {
   
      if(isNaN(Number(event.target.value))){
        setError('enter number')
        setInputValue(item.quantity)
       
      } else {
        setInputValue(Number(event.target.value))
        setError('')
        dispatch(setInputValueDefault({inputValue:Number(event.target.value),id:item.id}))
      } 

  }

  const handleIncrement = () => {
    setInputValue((val) => val + 1)
    dispatch(incrementInputValue(item.id))
  }

  const handleDecrement = () => {
    if(item.quantity === 1){
      dispatch(removeItemFromShoppingCart(item.id))
      return
    }
    setInputValue((val) => val - 1)
    dispatch(decrementInputValue(item.id))
  }

  return (
 <div className='flex flex-col items-center justify-center mt-6'>
    <div className="flex items-center justify-center space-x-2 w-1/5 ">
      <p
        className="text-center cursor-pointer"
        onClick={handleDecrement}
      >
        -
      </p>
     
      <input
        ref={inputRef}
        onChange={handleInputChange}
        value={item ? item.quantity : '' }
        onKeyDown={handleKeyPress}
        className="w-8 border border-solid border-black text-center"
      />
 
      <p
        className="text-center cursor-pointer"
        onClick={ handleIncrement}
      >
        +
      </p>
    </div>
    <div className='w-20 flex items-center justify-center text-red-600 text-xs minInputHeight '>{error}</div>
    </div>
  )
}

export default NewInput
