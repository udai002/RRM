const TablesData = (props)=>{
    const onDelete = (id)=>{
        alert(id)
    }

    const onClickEdit= (id)=>{
        alert(id)
    }

    const {data , column} = props
    return <div>
        <table className="w-full">
           <thead>
           <tr className="p-4 bg-[#30302f]">
                <th>sno</th>
                <th>Action</th>
                <th>Book No</th>
                <th>Litres</th>
                <th>fat</th>
                <th>Rate</th>
                <th>Value</th>
                <th>Monthy Value</th>
                <th>Edit/Delete</th>
                <th>M/E</th>
            </tr>
           </thead>
            <tbody>
                {data.map(item=><tr className="even:bg-[#2e2e2e]">
                    <td className="px-2 py-2">{item.sno}</td>
                    <td className="px-2 py-2">{item.action}</td>
                    <td className="px-2 py-2 text-blue-700">{item.bookNo}</td>
                    <td className="px-2 py-2">{item.litres}</td>
                    <td className="px-2 py-2">{item.fat}</td>
                    <td className="px-2 py-2">{item.rate}</td>
                    <td className={`px-2 py-2 ${item.action==="Buy"?"text-red-700":"text-green-700"}`}>{item.value}</td>
                    <td className={`px-2 py-2 ${item.action==="Buy"?"text-red-700":"text-green-700"}`}>{item.value}</td>
                    <td className={`px-2 py-2`}>
                        <button className="px-2 py-[0.5px] bg-blue-700 rounded" onClick={()=>{onClickEdit(item.milkId)}}>Edit</button>
                        <button className="ml-2 px-2 py-[0.5px] bg-blue-700 rounded" onClick={()=>{onDelete(item.milkId)}}>Delete</button>
                        </td>
                        <td className={`px-2 py-2 `}>M</td>
                </tr>)}
                
            </tbody>
        </table>
    </div>
}


export default TablesData