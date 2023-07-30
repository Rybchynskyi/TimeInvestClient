import React, {useState} from 'react';
import WorkingTime from "./WorkingTime";
import WorkerMap from "./WorkerMap";

const Languages = ({
 languages,
 handleLanguagesChange
}) => {



  return (
    <div className="w-full md:w-1/2">
      <h1 className="text-l font-bold mb-2">Languages you speak:</h1>
      {languages.map((language, index) => (
        <div key={index} className="mb-3">
          <div className="flex gap-6">
            <div className="w-1/2">
              <select data-te-select-init value={language.language} onChange={(e) => handleLanguagesChange(index, e.target.value, null, false, false)}>
                <option value="English">English</option>
                <option value="Germany">Germany</option>
                <option value="Italy">Italy</option>
                <option value="France">France</option>
                <option value="Ukrainian">Ukrainian</option>
              </select>
            </div>
            <div className="w-1/2">
              <select data-te-select-init value={language.level} onChange={(e) => handleLanguagesChange(index, null, e.target.value, false, false)}>
                <option value="Beginner">Beginner</option>
                <option value="Pre-Intermediate">Pre-Intermediate</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Upper-Intermediate">Upper-Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
            <button
              type="button"
              onClick={() => handleLanguagesChange(index, null, null, false, true)}
              data-te-ripple-init
              data-te-ripple-color="light"
              className="rounded bg-danger-500 px-1 py-1 w-9 h-8 mb-0 mt-0.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-danger-600 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
              x
            </button>
          </div>
        </div>
      ))}

      <div className="flex justify-end mt-4">
        <button
          type="button"
          onClick={() => handleLanguagesChange(null, null, null, true, false)}
          data-te-ripple-init
          data-te-ripple-color="light"
          className="rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
          Add
        </button>
      </div>

    </div>
  );
};

export default Languages;