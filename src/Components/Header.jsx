import React from "react";
import {NavLink} from "react-router";
const Header = function () {
  return (
    <>
      <div
        className="w-full h-28"
        style={{
          background:
            "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
        }}
      >
        <h2
          className="text-6xl text-white text-center pt-5 font-medium"
          style={{fontFamily: "Sour Gummy", color: "#1A1A1D"}}
        >
          TaskSphere
        </h2>
      </div>
      <div className="flex mt-7 justify-center gap-10 mb-3">
        <div className="w-44 h-12 bg-teal-900 text-white rounded-md shadow-lg hover:bg-teal-700 flex items-center justify-center cursor-pointer transition-all duration-300">
          <NavLink
            to=""
            className={({isActive}) =>
              `shadow-lg flex items-center justify-center cursor-pointer transition-all duration-300 text-xl w-44 h-12 rounded-md  font-semibold ${
                isActive
                  ? "bg-teal-900 hover:bg-teal-700 text-white"
                  : "bg-gray-800 hover:bg-gray-500 text-white"
              }`
            }
          >
            Todo List
          </NavLink>
        </div>

        <div className="">
          <NavLink
            to="employeelist"
            className={({isActive}) =>
              `shadow-lg flex items-center justify-center cursor-pointer transition-all duration-300 text-xl w-44 h-12 rounded-md  font-semibold ${
                isActive
                  ? "bg-teal-900 hover:bg-teal-700 text-white"
                  : "bg-gray-800 hover:bg-gray-500 text-white"
              }`
            }
          >
            Employee List
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Header;
