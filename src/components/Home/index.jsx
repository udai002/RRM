import MilkForm from '../MilkForm'
import DairyList from '../DairyList'
import { useState } from 'react'
import '../../App.css'


const Home =  ()=>{

    const [data , setData] = useState({
        dataSet :[
      
    ]
    })
    
    
    
    
    
    const AddEntries = (newData)=>{
      const {dataSet} = data
      setData({dataSet:[...dataSet ,newData]})
    }
    
    
    const payingBill = ()=>{
    
    }
    
    const SearchBookNO = () =>{
    
    }
    return <div className='p-3 py-10'>
        <MilkForm entries={data.dataSet} AddEntries={AddEntries}/>
        <DairyList entries={data.dataSet}/>
    </div>
}

export default Home