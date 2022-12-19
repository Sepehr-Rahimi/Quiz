import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Home,Login,Result,QuestionsRouter } from "./Pages";



const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Questions/*" element={<QuestionsRouter />}/>
                <Route path="/Result" element={<Result />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router