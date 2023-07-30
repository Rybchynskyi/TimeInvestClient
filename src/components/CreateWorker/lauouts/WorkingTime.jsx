import React, {useState} from 'react';
import {CheckIcon} from "@heroicons/react/20/solid";

const WorkingTime = ({
 workingTime,
 nightWork,
 handleChange
}) => {

  function handleClick(hour, day, index){
    const isTrueTimeCopy = JSON.parse(JSON.stringify(workingTime));
    isTrueTimeCopy[hour][index] = !day;
    handleChange('workingTime', isTrueTimeCopy)
  }

  function readyToNightWork(e){
    handleChange('nightWork', e)
  }

  return (
    <div className="w-full md:w-1/2">
      <h1 className="text-xl font-bold">When do you have free time to work?</h1>
      <div className="h-16">
        <div className="mt-2 mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
          <input
            className="mr-2 relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
            type="checkbox"
            value=""
            id="checkboxChecked"
            onChange={(e) => readyToNightWork(e.target.checked)}
            checked={nightWork}/>
          <label
            className="inline-block pl-[0.15rem] hover:cursor-pointer"
            htmlFor="checkboxChecked">
            Ready to work at night
          </label>
        </div>
        <small>
          You are ready to communicate with clients in English
        </small>
      </div>
      <div className="border border-1 border-gray-300 rounded p-3">
        <div className="grid flex-col justify-center align-middle grid-cols-8">
          <div></div>
          <div className="h-9 flex justify-center items-center rounded bg-gradient-to-r from-green-500 to-green-400 font-bold w-10 mx-auto mb-2">Mon</div>
          <div className="h-9 flex justify-center items-center rounded bg-gradient-to-r from-green-500 to-green-400 font-bold w-10 mx-auto mb-2">Tue</div>
          <div className="h-9 flex justify-center items-center rounded bg-gradient-to-r from-green-500 to-green-400 font-bold w-10 mx-auto mb-2">Wed</div>
          <div className="h-9 flex justify-center items-center rounded bg-gradient-to-r from-green-500 to-green-400 font-bold w-10 mx-auto mb-2">Thu</div>
          <div className="h-9 flex justify-center items-center rounded bg-gradient-to-r from-green-500 to-green-400 font-bold w-10 mx-auto mb-2">Fri</div>
          <div className="h-9 flex justify-center items-center rounded bg-gradient-to-r from-green-500 to-green-400 font-bold w-10 mx-auto mb-2">Sat</div>
          <div className="h-9 flex justify-center items-center rounded bg-gradient-to-r from-green-500 to-green-400 font-bold w-10 mx-auto mb-2">Sun</div>
        </div>

        {workingTime.map((days, hour) => (
          <div key={hour} className="grid flex-col justify-center align-middle grid-cols-8">
            <div className="text-sm text-center">{hour+8}:00</div>
            {days.map((day, index) => (
              <button onClick={() => handleClick(hour, day, index,)}
                      className={(day)?"h-6 bg-gradient-to-r from-green-500 to-green-400":"h-6 border border-1 border-gray-400"}
                      key={index}>{(day)?<CheckIcon className="w-6 mx-auto" />:""}
              </button>
            ))}
          </div>
        ))}

      </div>
    </div>
  );
};

export default WorkingTime;