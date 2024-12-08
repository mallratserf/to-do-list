import { CiCirclePlus } from "react-icons/ci";
import { LuListTodo } from "react-icons/lu";
import React from "react";

const Todo = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-white w-[450px] p-6 rounded-xl shadow-lg">

        <div className="flex items-center gap-3 mb-4">
          <LuListTodo className="text-xl" />
          <h1 className="text-xl font-semibold ">Tasks</h1>
        </div>
        <input
          type="text"
          placeholder="Add new task"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          ADD +
        </button>
      </div>

        <div>
            
        </div>

    </div>
  );
};

export default Todo;
