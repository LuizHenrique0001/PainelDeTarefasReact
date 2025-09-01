import {useNavigate, useSearchParams} from "react-router";

function TaskPage(){

    const navigate = useNavigate();

    function returnAndTesks(){
        navigate('/');
    }

    const [searchParams] = useSearchParams();
    const title = searchParams.get('title');
    const description = searchParams.get('description');
    return(
        <div className="bg-slate-400 w-screen h-screen p-6 rounded-sm">
            <div className="w-[500px] space-y-4">
               <div className="flex justify-center relative">
                   <button onClick={() => returnAndTesks()} className="absolute left-0 top-0 bottom-0 text-slate-100">
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                       </svg>
                   </button>
                   <h1 className="text-3xl text-slate-100 font-bold text-center">
                       Detalhes da Tarefa
                   </h1>
               </div>

                <div className="bg-slate-200 p-4 rounded-sm ">
                    <h2 className='text-xl text-slate-600 font-bold text-center'>{title}</h2>
                    <p className='text-slate-600 text-center'>{description}</p>
                </div>
            </div>
        </div>
    )
}
export default TaskPage;