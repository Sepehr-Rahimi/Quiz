import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Home,Login,Questions,Result,Question } from "./Pages";



const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Questions" element={<Questions />} />
                <Route path="/Questions/:id" element={<Question />} />
                <Route path="/Result" element={<Result />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router