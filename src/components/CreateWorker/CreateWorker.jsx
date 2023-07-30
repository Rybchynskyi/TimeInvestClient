import React, {useEffect, useState} from "react";
import { Input, initTE, Chip, ChipsInput, Button, Select } from "tw-elements";
import AddPhoto from "./lauouts/AddPhoto";
import YourRate from "./lauouts/YourRate";
import MainInfo from "./lauouts/MainInfo";
import WorkingTags from "./lauouts/WorkingTags";
import WorkingTime from "./lauouts/WorkingTime";
import WorkerMap from "./lauouts/WorkerMap";
import AboutYou from "./lauouts/AboutYou";
import Languages from "./lauouts/Languages";
import Skills from "./lauouts/Skills";
import Education from "./lauouts/Education";
import Experience from "./lauouts/Experience";


const CreateWorker = () => {
  useEffect(() => {
      initTE({ Input, Chip, ChipsInput, Button, Select });
  }, []);

  const [formData, setFormData] = useState(
    {
      "name": "wqeqw",
      "surName": "",
      "email": "",
      "phone": "",
      "labels": [],
      "readyToForeigners": true,
      "rate": 50,
      "nightWork": true,
      "workingTime": [
        [false, false, false, false, false, false, false],
        [true, true, true, true, true, false, false],
        [true, true, true, true, true, false, false],
        [true, true, true, true, true, false, false],
        [true, true, true, true, true, false, false],
        [true, true, true, true, true, false, false],
        [true, true, true, true, true, false, false],
        [true, true, true, true, true, false, false],
        [true, true, true, true, true, false, false],
        [true, true, true, true, true, false, false],
        [true, true, true, true, true, false, false],
        [false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false]
      ],
      "wonkOnline": true,
      "moveOut": false,
      "aboutYourself": "",
      "languages": [
        {language: "English", level: "Beginner"},
        {language: "Germany", level: "Pre-Intermediate"}
      ],
      "skills": "",
      "education": "",
      "experience": ""
    }
  );


  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddLabel = (newLabels) => {
    const formDataCopy = { ...formData };
    formDataCopy.labels = newLabels;
    setFormData(formDataCopy);
  };

  const handleLanguagesChange = (index, lang, level, isAdd, isDelete) => {
    const formDataCopy = { ...formData };
    if(lang !== null){
      formDataCopy.languages[index].language = lang;
    }
    if(level !== null){
      formDataCopy.languages[index].level = level;
    }
    if(isAdd){
      formDataCopy.languages.push({ language: "English", level: "Beginner" });
    }
    if(isDelete){
      formDataCopy.languages.splice(index, 1);
    }

    setFormData(formDataCopy);
  };

  return (
    <div className="container px-6 mx-auto max-w-7xl">
      <div className="md:flex md:justify-between gap-10">
          <div className="w-100 md:w-none flex md:flex-col gap-4 justify-center align-items-center">
              <AddPhoto/>
              <YourRate
                rate={formData.rate}
                handleChange={handleChange}
              />
          </div>
          <div className="w-100 md:w-full">
              <MainInfo
                name={formData.name}
                surName={formData.surName}
                email={formData.email}
                phone={formData.phone}
                handleChange={handleChange}
              />
              <WorkingTags
                labels={formData.labels}
                readyToForeigners={formData.readyToForeigners}
                handleAddLabel={handleAddLabel}
                handleChange={handleChange}
              />
          </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8 pt-8">
          <WorkingTime
            workingTime={formData.workingTime}
            nightWork={formData.nightWork}
            handleChange={handleChange}
          />
          <WorkerMap
            wonkOnline={formData.wonkOnline}
            moveOut={formData.moveOut}
            handleChange={handleChange}
          />
      </div>
      <AboutYou
        aboutYourself={formData.aboutYourself}
        handleChange={handleChange}
      />
      <h1 className="mt-6 text-xl font-bold">Additional fields</h1>
      <small className="text-gray-500">
        These fields are optional, but their description may be useful for finding a permanent job
      </small>
      <div className="flex flex-col md:flex-row items-center gap-8 pt-4">
        <Languages
          languages={formData.languages}
          handleLanguagesChange={handleLanguagesChange}
        />
        <Skills
          skills={formData.skills}
          handleChange={handleChange}
        />
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8 pt-4">
        <Education
          education={formData.education}
          handleChange={handleChange}
        />
        <Experience
          experience={formData.experience}
          handleChange={handleChange}
        />
      </div>
      <div className="flex justify-center my-12">
        <button
          type="button"
          onClick={()=> console.log(formData)}
          data-te-ripple-init
          data-te-ripple-color="light"
          className="flex items-center rounded bg-danger-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-danger-800 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
          </svg>
          Create a profile
        </button>
      </div>
    </div>
  )
}

export default CreateWorker
