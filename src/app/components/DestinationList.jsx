import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { destinationClicked } from '../../redux/slice/destinationSlice';

function DestinationList() {

  const destinationList = useSelector(state => state.destinationStore.destinations)
  const dispatch = useDispatch();

  return (
    <div className='p-4 border text-center'>
      <h4 className='text-success pb-4'>Destination List</h4>

      <div>
        {destinationList.map( (destination,index) => {
          return <div key={index} className='text-center text-white row' style={{borderBottom: "1px solid #333"}}>
            <div className='col-8 col-md-3 offset-md-3 pt-2'>
              {destination.name}
            </div>
            <div className='col-4 col-md-2'>
              <button className='btn btn-success form-control m-1'
              onClick={()=>{dispatch(destinationClicked(destination))}}>
                Details
              </button>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default DestinationList