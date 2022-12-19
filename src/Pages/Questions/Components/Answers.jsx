import {BiRadioCircleMarked} from 'react-icons/bi'
import clsx from 'clsx'



const Answers = ({answers,rightAnswerId,answerId,setAnswerId}) => {






    const Answer = ({children , id}) => {
        return(
            <button disabled={answerId} className={clsx('flex grow items-center ml-4 py-1 px-2 border-b shadow-md shadow-black rounded-md my-2 hover:scale-95 cursor-pointer bg-white disabled:opacity-70 disabled:hover:scale-100',
            {'bg-green-400' : answerId && id === rightAnswerId},
            {'bg-red-400' : answerId && answerId === id && id !== rightAnswerId},
            )}
            onClick={() => {
                setAnswerId(id)
            }}
            >
                <span className='pr-4'>
                    <BiRadioCircleMarked />
                </span>
                <span className='grow text-left'>
                    {children}
                </span>
            </button>
        )
    }




    return(
        <div className='w-full flex flex-col'>
            {answers?.map(({id,content}) => {
                return(
                    <Answer key={id} id={id} > 
                        {content}
                    </Answer>
                )
            })}
        </div>
    )
}



export default Answers