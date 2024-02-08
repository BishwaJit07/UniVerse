import React, { useState } from 'react';
import line from "../../assets/Img/line.png";
import { FaCalculator } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ExpectedCgpa = () => {
    const [expectedCgpa, setExpectedCgpa] = useState('');
    const [creditCompleted, setCreditCompleted] = useState('');
    const [currentCgpa, setCurrentCgpa] = useState('');
    const [currentSemesterCredit, setCurrentSemesterCredit] = useState('');

    const handleCalculate = (e) => {
        e.preventDefault();
        // Perform the calculation
        const result = (expectedCgpa * (parseInt(creditCompleted) + parseInt(currentCgpa)) - (parseInt(creditCompleted) * parseInt(currentCgpa))) / parseInt(currentSemesterCredit);

        // Display the result using SweetAlert
        Swal.fire({
            icon: 'success',
            title: 'Expected CGPA Calculation Result',
            text: `Your Expected CGPA is: ${result.toFixed(2)}`,
        });
    };

    return (
        <div>
            <div className="text-center mb-12 mt-4">
          <p className="text-[48px] font-alice  dark:text-white">
            Calculate Expected CGPA{" "}
          </p>
          <img src={line} alt="" className="w-[105px] mx-auto mb-[30px]" />
        </div>
            <form onSubmit={handleCalculate}>
                <div className="m-2 bg-blue-500 text-xl text-white text-center">Expected CGPA</div>
                <div>
                    <div className="flex flex-col md:flex-row justify-center items-center">
                        <input
                            type="number"
                            placeholder={`Enter expected CGPA `}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg input-info block p-2.5 w-full max-w-xs m-4"
                            value={expectedCgpa}
                            onChange={(e) => setExpectedCgpa(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder={`Credit Completed `}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg input-info block p-2.5 w-full max-w-xs m-4"
                            value={creditCompleted}
                            onChange={(e) => setCreditCompleted(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder={`Current Cgpa `}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg input-info block p-2.5 w-full max-w-xs m-4"
                            value={currentCgpa}
                            onChange={(e) => setCurrentCgpa(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder={`Current semister Credit `}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg input-info block p-2.5 w-full max-w-xs m-4"
                            value={currentSemesterCredit}
                            onChange={(e) => setCurrentSemesterCredit(e.target.value)}
                        />
                    </div>
                </div>
                <button className="btn text-white m-2">
                    <FaCalculator />
                    Calculate Expected CGPA
                </button>
                <hr className="h-px my-8 bg-white border-3 dark:bg-gray-700" />
            </form>
        </div>
    );
};

export default ExpectedCgpa;
