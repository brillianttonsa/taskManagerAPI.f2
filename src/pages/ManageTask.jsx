import Header from "../components/Header";
import { useState } from "react";
import PendingTask from "../components/taskComponents/PendingTask";
import AllTasks from "../components/taskComponents/AllTasksPage";
import CompletedTask from "../components/taskComponents/Completed";

function ManageTask() {
  const [taskView, setTaskView] = useState("all");

  function toggleTaskView(view) {
    setTaskView(view);
  }

  
  return (
    <>
      <Header/>
      <div className="container mx-auto p-4 sm:p-6 md:p-8 flex flex-col gap-4 justify-center items-center bg-white shadow-lg rounded  mt-10">
        <div className="flex flex-col sm:flex-row justify-center items-center w-full bg-yellow-200">
          <button onClick={() => toggleTaskView("all")} className={`border-gray-500 w-full rounded-tl sm:w-1/3 hover:bg-yellow-500 cursor-pointer ${taskView === "all" ? "bg-yellow-500 border-b" : ""}`}>All tasks</button>
          <button onClick={() => toggleTaskView("pending")} className={`border-gray-800 w-full sm:w-1/3 hover:bg-yellow-500 cursor-pointer ${taskView === "pending" ? "bg-yellow-500 border-b" : ""}`}>pending tasks</button>
          <button onClick={() => toggleTaskView("completed")} className={`border-gray-500 w-full sm:w-1/3 rounded-tr hover:bg-yellow-500 cursor-pointer ${taskView === "completed" ? "bg-yellow-500 border-b" : ""}`}>completed tasks</button>
        </div> 
        {taskView === "all" && <AllTasks/>}
        {taskView === "pending" && <PendingTask/>}
        {taskView === "completed" && <CompletedTask/>}
      </div>
    </>
  );
}

export default ManageTask;