import { useState } from "react"



const useRerender = () => {
    const [isRerendering,setIsRerendering] = useState(false)

    const rerender = () => setIsRerendering(!isRerendering)



    return {
        rerender
    }


}


export default useRerender