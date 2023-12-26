import React, { useState } from 'react';
import line from "../../assets/Img/line.png"
import cgpaPoint from "../../assets/Img/cgpaList.png"
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import Swal from 'sweetalert2';

function CGPACalculator() {
  
const [yearData, setYearData] = useState([{ pointCreditPairs: [{ point: '', credit: '' }], calculatedCGPA: null }]);

const addInputField = (yearIndex) => {
  const newYearData = [...yearData];
  newYearData[yearIndex].pointCreditPairs.push({ point: '', credit: '' });
  setYearData(newYearData);
};

const removeInputField = (yearIndex) => {
  const newYearData = [...yearData];
  if (newYearData[yearIndex].pointCreditPairs.length > 1) {
    newYearData[yearIndex].pointCreditPairs.pop(); // Remove the last pair
    setYearData(newYearData);
  }
};

const handleInputChange = (yearIndex, pairIndex, key, value) => {
  const newYearData = [...yearData];
  newYearData[yearIndex].pointCreditPairs[pairIndex][key] = value;

  if (key === 'point' && parseFloat(value) > 4.00) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "Point can't be more than 4.00",
    });
    newYearData[yearIndex].pointCreditPairs[pairIndex][key] = '0';
  } else if (key === 'point' && parseFloat(value) < 0) {
    newYearData[yearIndex].pointCreditPairs[pairIndex][key] = '0.00';
  }

  setYearData(newYearData);
};

const calculateCGPA = (yearIndex) => {
  const totalPoints = yearData[yearIndex].pointCreditPairs.reduce(
    (acc, pair) => acc + parseFloat(pair.point) * parseFloat(pair.credit),
    0
  );
  const totalCredits = yearData[yearIndex].pointCreditPairs.reduce((acc, pair) => acc + parseFloat(pair.credit), 0);

  if (isNaN(totalPoints) || isNaN(totalCredits) || totalCredits === 0) {
    alert('Please enter valid numbers for both point and credit, and ensure credit is not zero.');
    return;
  }

  const calculatedCGPA = totalPoints / totalCredits;
  Swal.fire({
    title: 'Congrats!',
    html: `<div style="color: black; font-weight: bold; font-size: 2em;">You achieved <span style="color: red;">${calculatedCGPA.toFixed(
      2
    )} </span> CGPA!</div>`,
    icon: 'success',
  });

  const newYearData = [...yearData];
  newYearData[yearIndex].calculatedCGPA = calculatedCGPA;
  setYearData(newYearData);
};

const addYear = () => {
  setYearData([...yearData, { pointCreditPairs: [{ point: '', credit: '' }], calculatedCGPA: null }]);
};

const removeYear = () => {
  if (yearData.length > 1) {
    const newYearData = [...yearData];
    newYearData.pop(); // Remove the last year's data
    setYearData(newYearData);
  }
};


return (
  <div>
    <div className="text-center mb-12 mt-4">
          <p className="text-[48px] font-alice  dark:text-white">Calculate CGPA </p>
          <img src={line} alt="" className="w-[105px] mx-auto mb-[30px]" />
        </div>

    {yearData.map((year, yearIndex) => (
      <div key={yearIndex} className='my-8'>
        
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="m-2 bg-blue-500 text-xl text-white text-center">{`Year ${yearIndex + 1}`}</div>
          <div>
            {year.pointCreditPairs.map((pair, pairIndex) => (
              <div key={pairIndex} className="flex justify-center items-center">
                <input
                  type="text"
                  placeholder={`Enter Sub ${pairIndex + 1}`}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg input-info  block  p-2.5 w-full max-w-xs m-4"
                  
                />
                <input
                  type="number"
                  placeholder={`Enter Point ${pairIndex + 1}`}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg input-info  block  p-2.5 w-full max-w-xs m-4"
                  value={pair.point}
                  onChange={(e) => handleInputChange(yearIndex, pairIndex, 'point', e.target.value)}
                />
                <input
                  type="number"
                  placeholder={`Enter Credit ${pairIndex + 1}`}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg input-info  block  p-2.5 w-full max-w-xs m-4"
                  value={pair.credit}
                  onChange={(e) => handleInputChange(yearIndex, pairIndex, 'credit', e.target.value)}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            <button
              className="text-[20px] font-bold w-[50%] mx-2 bg-blue-800 lg:rounded-full rounded-xl  text-white py-[5px] flex justify-center items-center m-4"
              onClick={() => addInputField(yearIndex)}
            >
              <AiOutlinePlusCircle className="m-2" />
              Add
            </button>
            <button
              className="text-[20px] font-bold w-[50%] mx-2 bg-red-500 lg:rounded-full rounded-xl  text-white py-[5px] flex justify-center items-center m-4"
              onClick={() => removeInputField(yearIndex)}
            >
              <AiOutlineMinusCircle className="m-2" />
              Remove
            </button>
            <button
              className="text-[20px] font-bold w-[50%] mx-2 bg-green-600 lg:rounded-full rounded-xl  text-white py-[5px] flex justify-center items-center m-4"
              onClick={() => calculateCGPA(yearIndex)}
            >
              Calculate CGPA
            </button>
          </div>
          <hr className="h-px my-8 bg-white border-3 dark:bg-gray-700" />
        </form>

        {year.calculatedCGPA !== null && (
          <div>
            <p className="text-[20px] font-bold w-[50%] mx-auto bg-green-500 lg:rounded-full rounded-xl  text-white py-[13px] flex justify-center items-start mt-4">
              Your CGPA is: {year.calculatedCGPA.toFixed(2)}
            </p>
          </div>
        )}
      </div>
    ))}

<div className='flex justify-between'>
<button className="btn btn-secondary" onClick={addYear}>
      Add Year
    </button>
    <button className="btn btn-secondary" onClick={removeYear}>
      remove Year
    </button>
</div>
    
  </div>
  );
}

export default CGPACalculator;




{/* <div className='flex flex-col justify-center items-center gap-5 m-4 text-white    '>
<p className='text-2xl lg:text-5xl'>Many students have a question that how to use the CGPA Calculator? What is the Full Meaning of CGPA?</p>

<p className='lg:text-3xl'>
  
Here I am going to share how to calculate CGPA and The CGPA Full Meaning. Let’s know the NU GPA/CGPA Grading System and how to calculate CGPA.
</p>
<img src={cgpaPoint} alt="Point Table" className='w-4/6 		  h-4/6'/>

</div>

<div className='my-5'>
<h2 className='text-4xl font-semibold'>CGPA Calculator</h2>
        <p className='lg:text-3xl'>
        
Calculating CGPA depends on Every Semester GPA. Semester GPA Calculate by Grade Points and Credit. It’s very easy to calculate CGPA online and here you can find your GPA/CGPA easily. You need your grade or grade points and Credit. If you have these credentials you can easily calculate your CGPA from this online GPA Calculator.
</p>

<p  className='lg:text-3xl'>
By using this Online CGPA calculator you will find your semester GPA and overall CGPA. If you need to add more subject you can click on Add Subject button and if you need to add Semester then you can click on Add Next Semester Button.
        </p>
</div> */}