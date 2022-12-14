import { useNavigate } from "react-router-dom"
import FrameTemplate from "../../Common/Components/FrameTemplate"



const Home = () => {



    const navigate = useNavigate()
    return (
        <FrameTemplate>
            <div className="bg-slate-200 p-5 m-5 rounded-lg shadow-md shadow-black flex flex-col items-center">
                <div className="text-center font-semibold text-2xl py-2 border-b border-black">Welcome To quiz</div>
                <div className="p-5 leading-8">
                    <span className="text-lg font-medium">Here</span> we ask you some questions
                    and caculate the time you spent
                    on it then will show you the result 
                    and your score .
                </div>
                <div className="p-5 leading-8">
                    <span className="text-lg font-medium">But</span> first we should know about you , so help us by compeleting this Form :
                </div>
                <button onClick={() => {navigate('/Login')}} className="shadow-md shadow-black py-2 mx-auto bg-slate-300 rounded-lg w-32 hover:scale-90" to='/Login' >Form</button>
            </div>
        </FrameTemplate>
    )
}


export default Home