import { Component } from "react";

class Signin extends Component{
    render(){
        return<>
            <h1 className=" font-bold text-4xl italic pt-10">Ramarao Milk Dairies</h1>
        <div className="flex justify-center pt-10">
            <form className="border-[1px] flex flex-col justify-center items-center p-10 w-[400px] rounded">
                <h1 className="text-2xl font-bold my-1">Login into Account</h1>
                <div className="my-3 flex flex-col justify-center items-start ">
                    <label htmlFor="username" className="relative top-5">Username</label> <br />
                    <input type="text" className="p-2" name="username" id="username" />
                </div>
                <div className="mb-6 flex flex-col items-start">
                    <label htmlFor="username" className="relative top-5">Password</label> <br />
                    <input type="password" className="p-2" name="password" id="password" />
                </div>
                <button className="bg-blue-800 py-2 px-3 self-center w-56 mt-4 rounded"  type="submit">Login</button>

            </form>
        </div>
        </>
    }
}

export default Signin 

