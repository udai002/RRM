import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import DairyContext from "../../context/DairyDetails";
import TablesData from "../TablesData";

const DairyList = (props)=>{

    const {entries} = props
    console.log(entries)
    const [filterData , setFilterData ] = useState({
        dataSet:[]
      })

      useEffect(()=>{
        setFilterData({dataSet:[...entries]})
      },[entries])

    const colomn = [
        {
            name:"Sno",
            selector:row=>row.sno,

        },
        {
            name:"Book no",
            selector:row=>row.bookNo
        },
        {
            name:"Litres",
            selector:row=>row.litres
        },
        {
            name:"Fat",
            selector:row=>row.fat
        },
    ]

    

    const filterDate = (search)=>{
        console.log("this is the numbers")
        const dataFilter = entries.filter(item=>{
            console.log("testing the code" ,  parseInt(item.bookNo) === parseInt(search))
            if(item.bookNo == search){
                return item
            }
            if(search == ''){
                return item
            }
        })
        console.log(dataFilter)
        setFilterData({dataSet:[...dataFilter]})
    }

    const filterDateTime = () =>{

    }

   
    return <div className="mt-10">
        <div className="flex justify-between items-center">
            <div>
            <label htmlFor="searchBook">Book no</label>
        <input type="number" id="searchBook" className="my-4 mx-2 p-1" onChange={(e)=>{
            console.log(e.target.value)
            filterDate(e.target.value)
            
            }} />

            </div>

            <div>

                <label htmlFor="dateTime">Date</label>
                <input type="date" className="mx-12 p-1" />
            </div>
            
        </div>
        
             <TablesData data={filterData.dataSet} colomn={colomn} />
    </div>
}

export default DairyList
