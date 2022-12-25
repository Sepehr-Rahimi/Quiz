import FrameTemplate from "../../Common/Components/FrameTemplate"
import questions from "../../Data/questions"
import clsx from 'clsx'
import {useNavigate} from 'react-router-dom'


const Result = () => {
    const navigate = useNavigate()

    const resetQuiz = () => {
        questions.map((question) => {
            localStorage.removeItem(question.id)
        })
        localStorage.removeItem('spentTimeMin')
        localStorage.removeItem('spentTimeSec')
        navigate('/')
    }
    

    return (
        <FrameTemplate>
            <div className="shadow-md shadow-black h-screen overflow-auto border w-full m-3 px-3">
                <div className="flex justify-between items-center sticky top-0 border-b p-3 my-3 border-black bg-white">
                    <span className="font-bold text-2xl text-center">Its The Quiz Result</span>
                    <button onClick={resetQuiz} className="w-15 shadow-black shadow-md rounded-lg px-2 py-1 hover:scale-95">Reset Quiz</button>
                </div>
                <div className="p-3 m-3 text-center border border-slate-400 rounded-lg shadow-md shadow-black text-lg">
                    <span>
                        You did your quiz in : 
                    </span>
                    <span>
                        <span className="text-green-600"> {JSON.parse(localStorage.getItem('spentTimeMin'))} </span>
                        <span> Minutes </span>
                        <span className="text-green-600"> {JSON.parse(localStorage.getItem('spentTimeSec'))} </span>
                        <span> Seconds </span>
                    </span>
                </div>
                <div>
                    {questions.map((question) => {
                        return(
                            <div className="border-slate-400 border rounded-lg p-2 mx-2 my-4  shadow-md shadow-black flex flex-col" key={question.id}>
                                <div>
                                    <span className="font-semibold text-lg">Question : </span>
                                    <span>{question.question}</span>
                                </div>
                                <div className="pl-5 my-3 ">
                                    <div className="bg-green-500 rounded-lg px-3 py-1 my-2">
                                        <span>Right answer : </span>
                                        <span>{question.answers.find(({id}) => id === question.rightAnswerId).content }</span>

                                    </div>
                                    <div className={clsx(
                                        'rounded-lg px-3 py-1 my-2',
                                        {'bg-green-500' : JSON.parse(localStorage.getItem(question.id)) === question.rightAnswerId },
                                        {'bg-red-500' : JSON.parse(localStorage.getItem(question.id)) !== question.rightAnswerId },
                                        {'bg-red-500' : !localStorage.getItem(question.id)},
                                        )}>
                                        <span>Your answer : </span>
                                        <span>{
                                        JSON.parse(localStorage.getItem(question.id)) ? 
                                        question.answers.find(({id}) => id === JSON.parse(localStorage.getItem(question.id))).content : 'No answer'
                                        }</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </FrameTemplate>
    )
}


export default Result