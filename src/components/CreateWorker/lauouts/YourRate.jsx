import React, {useState} from 'react';

const YourRate = ({
  rate,
  handleChange
}) => {
  const [currentRate, setCurrentRate] = useState(rate);

  function rateUp(){
    setCurrentRate(prevRate => prevRate + 1);
    handleChange('rate', currentRate)
  }

  function rateDown(){
    setCurrentRate(prevRate => prevRate - 1);
    handleChange('rate', currentRate)
  }

  function rateSet(event){
    let res = Number(event)
    setCurrentRate(res);
    handleChange('rate', currentRate)
  }

  return (
    <div className="w-48 flex flex-col">
      <div className="border border-1 border-gray-300 rounded px-6 py-6 mt-8">
        <h1 className="text-xl text-center font-bold">Your rate</h1>
        <div className="flex justify-center">
          <div className="w-16 text-center flex flex-col items-center">
            <button onClick={rateUp}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </button>
            <input onChange={(e) => rateSet(e.target.value)} className="w-16 text-center text-2xl font-bold" value={currentRate}/>
            <button onClick={rateDown}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          </div>
          <div className="flex grow items-center ml-2">
            $ / hour
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourRate;