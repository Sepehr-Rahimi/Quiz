import { useState } from "react"
import ReactPasswordChecklist from "react-password-checklist"
import FrameTemplate from "../../Common/Components/FrameTemplate"
import {useNavigate} from 'react-router-dom'


const Login = () => {

    const [password,setPassword] = useState('')
    const [isPasswordValid,setIsPasswordValid] = useState(false)
    const navigate = useNavigate()


    return (
        <FrameTemplate>
            <div className="flex flex-col items-center bg-slate-200 shadow-md shadow-black w-full px-5  my-2 rounded-lg">
                <div className="font-semibold text-3xl mb-5">Form</div>
                <div className="flex flex-col w-full p-5 shadow-md shadow-black rounded-lg bg-slate-100">
                    <div className=" w-full flex px-2 py-5 border-b border-black items-center">
                        <span>First name : </span>
                        <input className="grow bg-slate-200 px-2 mx-2 border border-slate-500 rounded-md" />
                    </div>
                    <div className=" w-full flex px-2 py-5 border-b border-black items-center">
                        <span>Last name : </span>
                        <input className="grow bg-slate-200 px-2 mx-2 border border-slate-500 rounded-md" />
                    </div>
                    <div className=" w-full flex px-2 py-5 border-b border-black items-center">
                        <span>Email : </span>
                        <input type='email' className="grow bg-slate-200 px-2 mx-2 border border-slate-500 rounded-md" />
                    </div>
                    <div className="flex flex-col border-b border-black
                    ">
                        <div className=" w-full flex px-2 py-5  items-center">
                            <span>Password : </span>
                            <input onChange={({target}) => {setPassword(target.value)}} value={password} type='password' className="grow bg-slate-200 px-2 mx-2 border border-slate-500 rounded-md" />
                        </div>
                        <ReactPasswordChecklist 
                            className=" w-56 h-15 text-xs rounded-lg "
                            rules={['minLength',"capital","lowercase","number","specialChar"]}
                            minLength={8}
                            value={password}
                            onChange={(isValid) => setIsPasswordValid(isValid) }
                            iconSize={13}
                        />
                    </div>
                    <div className=" w-full flex px-2 py-5 border-b border-black items-center ">
                        <span>Age : </span>
                        <input type='number' className="grow bg-slate-200 px-2 mx-2 border border-slate-500 rounded-md" />
                    </div>
                </div>
                <button onClick={() => {navigate('/Questions')}}  disabled={!isPasswordValid} className="border border-black py-1 px-4 my-4 rounded-lg shadow-md shadow-black hover:scale-95 bg-slate-100 disabled:opacity-50" >Start quiz</button>
            </div>
        </FrameTemplate>
    )
}


export default Login