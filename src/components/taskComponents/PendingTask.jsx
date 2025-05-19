import { useNavigate } from "react-router-dom";
import tasks from "./data/tasks";
import { CircleCheckBig } from "lucide-react";
import { useState } from "react";

function PendingTask(){
    const [isComplete, setIsComplete] = useState(false);

    const navigate =useNavigate();

    function handleEditTask() {
        navigate("/editTask");
    }

    function handleCompleteTask(){
        setIsComplete((prev) => !prev);
    }

    return(
        <>
            <div className="mx-auto p-2 sm:p-4 md:p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {tasks.map((task, index) => (
                <div key={index} className="mb-4 p-4 border rounded bg-white">
                    <h2 className="text-lg font-semibold">{task.taskname}</h2>

                    <div className="text-sm text-gray-600">
                    <p>{task.day}</p>
                    <p>{task.date}</p>
                    </div>

                    <div className="mt-2 flex gap-1">
                        <button onClick={handleCompleteTask} className="bg-green-500 hover:bg-green-700 text-white px-2 py-1 rounded cursor-pointer transition-all text-sm">{isComplete? <CircleCheckBig/> : "Complete"}</button>
                        <button onClick={handleEditTask} className="bg-yellow-500 hover:bg-yellow-700 text-white px-2 py-1 rounded cursor-pointer transition-all text-sm">Edit</button>
                        <button className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded cursor-pointer transition-all text-sm">Delete</button>
                    </div>
                </div>
                ))}

            </div>
        </>
    )
}

export default PendingTask;