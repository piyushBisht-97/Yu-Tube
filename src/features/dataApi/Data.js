import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { getData } from './dataSlice'



const Data = () => {
    const dispatch = useDispatch()
    useEffect(()=>{

        dispatch(getData())
    },[dispatch]
    
    )
    return (
        <div>
            
        </div>
    )
}

export default Data
