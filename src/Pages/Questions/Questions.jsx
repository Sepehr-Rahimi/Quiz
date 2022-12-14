import { useTimer } from "react-timer-hook"
import { useNavigate } from "react-router-dom"


function MyTimer({ expiryTimestamp }) {
  const navigate = useNavigate()

    const {
      seconds,
    } = useTimer({ expiryTimestamp,onExpire:() => navigate('/Questions/1') });
  
  
    return (
      <div className="text-[300px]">
        <span>{seconds}</span>
      </div>
    );
  }
  



const Questions = () => {

    const navigate = useNavigate()


    const time = new Date()
    time.setSeconds(time.getSeconds() + 3)

    
    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <div className="font-bold text-2xl">
                The Quiz will start on :
            </div>
            <MyTimer expiryTimestamp={time} />
        </div>
    )
}


export default Questions