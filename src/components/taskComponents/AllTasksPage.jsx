import tasks from "./data/tasks";
import { useNavigate } from "react-router-dom";

function AllTasks() {
  const navigate = useNavigate();
  const handleAddTask = (e) => {
    navigate("/addTask");
  }
    return (
        <div className="w-full">
          
            <button onClick={handleAddTask} className="border py-1 rounded bg-blue-400 px-6 hover:bg-blue-600 cursor-pointer text-white">Add</button>
            <table className="w-full border-collapse border border-gray-300">
              <caption className="font-bold text-center text-xl text-gray-800">Your Tasks</caption>
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2">Task Name</th>
                  <th className="border border-gray-300 p-2">Date</th>
                  <th className="border border-gray-300 p-2">Day</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 p-2">{task.taskname}</td>
                    <td className="border border-gray-300 p-2">{task.date}</td>
                    <td className="border border-gray-300 p-2">{task.day}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
    )
}

export default AllTasks;