import { Outlet, useNavigate, useParams } from "react-router-dom"
import FrameTemplate from './../../Common/Components/FrameTemplate'
import {GrFormPrevious,GrFormNext} from 'react-icons/gr'
import Button from "./Components/Common/Button"
import questions from "../../Data/questions"
import { useStopwatch } from "react-timer-hook"
import { useEffect } from "react"
import { useRef } from "react"



const Questions = () => {
    
    const navigate = useNavigate()
    const {id:selectedId} = useParams()
    const {start,minutes,seconds,pause} = useStopwatch({autoStart:false})
    const countOfAnswered = useRef(0)

    const handleNextPage = () => {
        navigate(`/Questions/${Number(selectedId) + 1}`)
    }
    const handlePrePage = () => {
        navigate(`/Questions/${Number(selectedId) - 1}`)
    }
    const showResult = () => {
        pause()
        localStorage.setItem('spentTimeSec',seconds)
        localStorage.setItem('spentTimeMin',minutes)
        navigate(`/Result`)
    }






    useEffect(() => {
        setTimeout(() => start(),3000)
    },[])
    useEffect(() => {
        countOfAnswered.current = 0
        questions.map((question) => {
            if (JSON.parse(localStorage.getItem(question.id))) {
                countOfAnswered.current = countOfAnswered.current + 1
            }
        })

    },[selectedId])

    


    return (
        <FrameTemplate>
            <div className="w-full h-full shadow-md shadow-black m-4 rounded-md p-4 bg-slate-200 flex flex-col items-center justify-between">
                <div className="flex justify-between items-center w-full">
                    <div>
                        <span>You answered </span>
                        <span className="text-green-600">{countOfAnswered.current} </span>
                        <span>of </span>
                        <span className="text-red-600">{questions.length} </span>
                        <span>questions </span>
                    </div>
                    <div className="border rounded-lg border-slate-500 py-1 px-2 text-lg mr-8">
                        <span>{ minutes < 10 ? '0' + minutes : minutes}</span>
                        <span> : </span>
                        <span>{ seconds < 10 ? '0' + seconds : seconds}</span>
                    </div>
                </div>
                <div className="w-full p-6 overflow-auto">
                    <Outlet />
                </div>
                {selectedId ? 
                <div className="flex justify-between w-full">
                    <Button disabled={selectedId <= 1} onClick={handlePrePage} >
                        <GrFormPrevious />
                        <span>Pre question</span>
                    </Button>
                    {selectedId < questions.length ?
                        <Button disabled={questions.length <= selectedId} onClick={handleNextPage} >
                            <span>Next question</span>
                            <GrFormNext />
                        </Button> :
                        <Button onClick={showResult} >
                            <span>Finish</span>
                            <GrFormNext />
                        </Button>
                    }
                </div> : null
                }
            </div>
        </FrameTemplate>
    )
}


export default Questions