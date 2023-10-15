import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementMultiplier, decrementMultiplier } from '../../redux/slice/counterSlice'

function Counter() {

  const [multiplier,setMultiplier] = useState(10);

  const count = useSelector(state => state.counterStore.count)
  const dispatch = useDispatch();

  return (
    <div className="mt-2 pt-3 pl-2 text-center">
      <div className="text-white pb-2 h4">
        Counter: {count}
      </div>
      <div className='row'>

        <div className='p-4 col-12 col-md-6'>
          <div className='border p-4'>
            <h4 className='text-success pb-2'>Basic Counter</h4>

            <div className='row'>
              
              <div className='col-6 p-1'>
                <button className='btn btn-primary form-control' onClick={()=>dispatch(increment())}>Add</button>
              </div>
              <div className='col-6 p-1'>
                <button className='btn btn-danger form-control' onClick={()=>dispatch(decrement())}>Remove</button>
              </div>

            </div>
          
          </div>
        </div>

        <div className='p-4 col-12 col-md-6'>
          <div className='border p-4'>
            <h4 className='text-success pb-2'>Multiplier Counter</h4>
            
            <div className='row'>
              
              <div className='col-4 p-1'>
                <input type="text" placeholder='multiplier...' className='form-control' value={multiplier} onChange={e=>setMultiplier(e.target.value)}></input>
              </div>
              <div className='col-4 p-1'>
                <button className='btn btn-primary form-control' onClick={()=>dispatch(incrementMultiplier(multiplier))}>Add</button>
              </div>
              <div className='col-4 p-1'>
                <button className='btn btn-danger form-control' onClick={()=>dispatch(decrementMultiplier(multiplier))}>Remove</button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Counter