import { useParams } from "react-router-dom"
import questions from "./../../../Data/questions"
import Answers from "./Answers"



const Question = () => {
    const {id:selectedId} = useParams()
    
    
    
    const selectedQuestion = questions.find(({id}) => id == selectedId)
    const {id,question,rightAnswerId,answers} = selectedQuestion || {}


    return(
        <div className="text-lg w-full border-y-2 border-slate-500 border-dashed py-8">
            <div className="my-5" >{id} . {question}</div>
            <Answers answers={answers} rightAnswerId={rightAnswerId} questionId={selectedId} />
        </div>
    )
}



export default Question