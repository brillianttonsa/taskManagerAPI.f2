import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTask() {
    const [taskContent, setTaskContent] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [taskDay, setTaskDay] = useState("");

    const navigate = useNavigate();
    const handleCancelClick = (e) => {
        navigate("/managetask")
    }

    return (
        <div className="flex items-center mx-auto p-4 sm:p-6 justify-center h-screen bg-gray-100">
            <form action="" className="w-full">
                <div className="bg-white rounded-lg shadow-md p-8 sm:p-12 flex flex-col gap-4 ">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">Task Content:</h1>
                        <input 
                            type="text" 
                            name="taskContent" 
                            id="taskContent" 
                            value={taskContent}
                            onChange={(e) => setTaskContent(e.target.value)}
                            placeholder="Enter task content" 
                            className="border border-gray-700 rounded py-2 px-4 w-full text-gray-700 focus:ring focus:ring-gray-900 focus:border-transparent"
                            required
                        />
                    </div>
                    <div className="mt-4 border-t border-gray-300 py-4 px-4 w-full text-gray-700 focus:ring focus:ring-gray-900 flex flex-col sm:flex-row sm:justify-between items-center">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <h2 className="text-xl sm:text-3xl font-semibold text-gray-800">Date:</h2>
                            <input 
                                type="date" 
                                name="date" 
                                id="date"
                                value={taskDate}
                                onChange={(e) => setTaskDate(e.target.value)}
                                className="border border-gray-700 rounded p-[4px] sm:py-2 sm:px-4  cursor-pointer"
                                required
                            />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-0">
                            <h2 className="text-xl sm:text-3xl font-semibold text-gray-800">Day:</h2>
                            <select 
                                name="day" 
                                id="day"
                                value={taskDay}
                                onChange={(e) => setTaskDay(e.target.value)}
                                className="border border-gray-700 rounded p-[4px] sm:py-2 px-4 cursor-pointer"
                                required>
                                <option value="">Select a day</option>
                                <option value="monday">Monday</option>
                                <option value="tuesday">Tuesday</option>
                                <option value="wednesday">Wednesday</option>
                                <option value="thursday">Thursday</option>
                                <option value="friday">Friday</option>
                                <option value="saturday">Saturday</option>
                                <option value="sunday">Sunday</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between gap-2 mt-2 border-t border-gray-300 py-2">
                        <button 
                            onClick={handleCancelClick} 
                            className={`border rounded-sm p-2 cursor-pointer w-32 transition-colors  bg-gray-300 hover:bg-gray-400 `}>cancel</button>
                            <button 
                                type="submit" 
                                className="border rounded-sm p-2 bg-gray-300 hover:bg-gray-400 cursor-pointer w-32 transition-colors">Add</button>
                    </div>
                 
                </div>
            </form>
        </div>
    );
}

export default AddTask;