import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { FilterByAll, FiltrebyDone, FiltrebyUnDone } from '../Redux/TodoSlice'

const Filtred = () => {
    const dispatch = useDispatch()
  return (
    <div style={{display:'flex',justifyContent:'center', gap:'10px'}}>
        <Button onClick={()=> dispatch(FiltrebyDone())} variant="primary">DONE</Button>
        <Button onClick={()=> dispatch(FilterByAll())} variant="danger">ALL</Button>
        <Button onClick={()=> dispatch(FiltrebyUnDone())} variant="secondary">UNDONE</Button>

    </div>
  )
}

export default Filtred