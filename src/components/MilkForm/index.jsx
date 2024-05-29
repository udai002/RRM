import React , { Component } from 'react'
import DairyContext from '../../context/DairyDetails';

class MilkForm extends Component {

    constructor(props){
        super(props)

        this.myRef = React.createRef();
    }


    state = {
        action:"Buy",
        sno: 0,
        bookNo: 0,
        litres: 0,
        fat: 80,
        rate:80,
        isFilled:false
    }

    

    valueCalculator = (fat , litres)=>{
        const value = (fat*80*(litres/10))/10
        console.log(value)
        return value.toFixed(2);
    }

    onFormSubmit = (e) => {
        
        console.log("submitting data")
        this.myRef.current.disabled = true;
        this.myRef.current.textContent = "Loading..."
        e.preventDefault();
        const { sno, bookNo, litres, fat , action , rate } = this.state
        const { AddEntries, entries } = this.props
        let milkDetails = {}
        if(bookNo!==0 && litres!==0){
            if(action === "Buy"){
                milkDetails = {
                    milkId:Date.now(),
                    sno: entries.length + 1,
                    action,
                    bookNo,
                    litres,
                    fat,
                    rate,
                    value:this.valueCalculator(fat , litres),
                    isPaid:false
                }
            }else{
                milkDetails = {
                    milkId:Date.now(),
                    sno: entries.length + 1,
                    action,
                    bookNo,
                    litres,
                    fat,
                    rate,
                    value:litres*rate,
                    isPaid:false,
                }
            }
            AddEntries(milkDetails)
        }else{
            this.setState({isFilled:true})
        }

        this.setState({
            bookNo: 0,
            litres: 0,
            fat: 0,
            rate:80

        })

        setTimeout(()=>{            
                    this.myRef.current.textContent = "Add Details"
                    this.myRef.current.disabled = false;
        },3000)

    }

    


    render() {
        const {action , litres , bookNo , rate , fat ,isFilled } = this.state
        
        return <div>

            <h1 className='font-bold text-2xl '>Add Carrier Details</h1>
            <form onSubmit={this.onFormSubmit}>
                {isFilled?<p className='text-red-700 my-2'>Please Fill the Details</p>:""}
                <div className='flex justify-between mt-10 items-center flex-wrap'>
                    <div>
                        <label htmlFor="Sno">Action</label><br />
                        <select name="Sno" id="Sno" className='p-2 px-3 border-2 bg-[#30302f]' onChange={e=>this.setState({action:e.target.value})}>
                            <option value="Buy">Buy</option>
                            <option value="Sell">Sell</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="Book">Book No</label><br />
                        <input type="number" id='Book' placeholder='Book no' className='p-2 px-3' value={bookNo} onChange={(e) => { this.setState({ bookNo: e.target.value }) }} />
                    </div>
                    <div>
                        <label htmlFor="litres">Litres</label><br />
                        <input type="number" id='litres' placeholder='litres' step={0.01} className='p-2 px-3' value={litres} onChange={(e) => { this.setState({ litres: e.target.value }) }} />
                    </div>
                   {action==="Buy"? <div>
                        <label htmlFor="Fat">Fat</label><br />
                        <input type="number" id='Fat' placeholder='fat' className='p-2 px-3' value={fat} onChange={(e) => { this.setState({ fat: e.target.value }) }} />
                    </div>: <div>
                        <label htmlFor="Rate">Rate/ltr</label><br />
                        <input type="number" id='Rate' placeholder='Rate' value={80} className='p-2 px-3' onChange={(e) => { this.setState({ rate: e.target.value }) }} />
                    </div>}
                   
                    <div>
                        <button type='submit' className='px-4 py-2  rounded mt-6 bg-blue-900 ' ref={this.myRef}>Add Details</button>
                    </div>

                </div>
            </form>
        </div>
    }
}

export default MilkForm 