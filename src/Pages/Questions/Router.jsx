import { BrowserRouter,Routes,Route, Router } from "react-router-dom";
import StartCountdown from "./Components/StartCountdown";
import Questions from './Questions'
import Question from "./Components/Question";


const QuestionsRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<Questions />} >
                <Route path="/" element={<StartCountdown/>} />
                <Route path="/:id" element={<Question/>} />
            </Route>
        </Routes>
    )
}

export default QuestionsRouter