import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import QuizPage from "./pages/quiz/main_loop/QuizPage"; 
import ResultsPage from "./pages/quiz/results/ResultsPage";
import QuizRouter from "./pages/quiz/QuizRouter";
import IntroPage from "./pages/quiz/intro/IntroPage";
import CreateQuizPage from "./pages/create_quiz/CreateQuizPage";
import SignUpPage from "./pages/login/Signup";
import LoginPage from "./pages/login/Login";
import FeedPage from "./pages/feed/FeedPage";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import LoginSignupPage from "./pages/login/LoginSignupPage";

function App() { 

  return (
    // Build V1.1 -- ADD A FUNCTION WHEREIN THE NAVBAR IS HIDDEN WHEN A QUIZ IS BEING TAKEN.
    // FOR now, just make sure it's on top of all the pages.
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/" element={<FeedPage/>}/> 
        <Route path="/quiz" element={<QuizRouter/>}>
            <Route path=":id" element={<IntroPage/>} />
            <Route path=":id/main_loop" element={<QuizPage/>}/>
            <Route path=":id/results" element={<ResultsPage/>}/>
            <Route path="create_quiz" element={<CreateQuizPage/>} />
        </Route>
        <Route path="/user">
            <Route path="id">
              
            </Route>
        </Route>
        <Route element={<LoginSignupPage/>}>
          <Route path="/sign_up" element={<SignUpPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Route>
      </Routes>
    </Router>
  )
}                     
export default App
