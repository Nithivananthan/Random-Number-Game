import React from "react";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-blue-400 flex justify-center">
      <div>
        <h1 className="bg-white text-blue-900 text-3xl item-center font-bold p-8 rounded-2xl m-10 ">
          Guess The Number
        </h1>
        <h3 className="text-lg font-bold mt-5 ml-20 mb-4 lg:ml-20">
         Note : Number Between 1 to 10
        </h3>
        <input
          type="number"
          className="text-red-900 w-full text-2xl focus:ring-2 focus:ring-red-700 mt-5 font-bold w-min-md rounded-2xl p-5 pl-10 placeholder-gray-900 shadow-sm focus:outline-none"
          placeholder="Enter your Guess"
        ></input>
        <div className="flex justify-center mt-10 transform transition-transform duration-300 hover:scale-110 ">
          <button className="bg-red-600 w-40 h-10 rounded-2xl text-2xl flex items-center justify-center font-bold hover:pointer hover:bg-red-800 hover:text-white ">
            Check
          </button>
        </div>
        <div>
         <h1 className="flex justify-center text-yellow-200 mt-10 text-3xl font-bold">Your Score : 10</h1></div>
      </div>
    </div>
  );
}
export default App;
