import React from 'react'
import { useDispatch } from 'react-redux'
import { resetReduxOPedia } from '../../redux/action/actions';

function ResetApp() {

  const dispatch = useDispatch();
  
  const handleReset = () => {
    dispatch(resetReduxOPedia());
  }

  return (
    <div className='text-center pt-2'>
        <button className='btn btn-warning' onClick={handleReset}>Reset App</button>
    </div>
  )
}

export default ResetApp