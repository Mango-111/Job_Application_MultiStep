import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateForm } from "../reduxData/formActions";
import InputField from "./commonComponents/InputField";
import useDebounce from "../helperUtils/useDebounce";
import { FaBuilding, FaBriefcase, FaCalendarAlt } from 'react-icons/fa'; // Importing icons

const WorkExperience = () => {
  const [workExpData, setWorkExpData] = useState([
    {
      id: 1,
      level: `Work Experience`,
      companyName: "",
      jobTitle: "",
      duration: "",
    },
  ]);
  const dispatch = useDispatch();
  const workExpDetails = useSelector((state) => state.form.formData?.step3);

  useEffect(() => {
    if (workExpDetails) {
      setWorkExpData(workExpDetails);
    }
  }, [workExpDetails]);

  const debouncedUpdateFormData = useDebounce((data) => {
    dispatch(updateForm("step3", data));
  }, 500);

  const handleInputChange = (e, id) => {
    const { name, value } = e.target;
    let tempWorkExpArr = [...workExpData];

    tempWorkExpArr = tempWorkExpArr.map((entry) =>
      entry.id === id ? { ...entry, [name]: value } : entry
    );
    setWorkExpData(tempWorkExpArr);
    debouncedUpdateFormData(tempWorkExpArr);
  };

  const handleNewEntry = () => {
    let temp = [...workExpData];
    let newId = temp.length + 1;
    temp = [
      ...temp,
      {
        id: newId,
        level: "Work Experience",
        companyName: "",
        jobTitle: "",
        duration: "",
      },
    ];
    setWorkExpData(temp);
    debouncedUpdateFormData(temp);
  };

  // Handle deleting an entry
  const handleDeleteEntry = (id) => {
    let tempArr = [...workExpData];
    let resArr = tempArr.filter((entry) => entry.id !== id);
    setWorkExpData(resArr);
    debouncedUpdateFormData(resArr);
  };

  return (
    <div className="mt-20 mx-auto lg:max-w-6xl md:max-w-4xl bg-gray-100 p-6 rounded-lg shadow-md">
      {workExpData &&
        workExpData.length > 0 &&
        workExpData.map((ele, i) => (
          <div
            key={ele.id}
            className="bg-white shadow rounded-lg p-4 mx-4 mb-4"
          >
            <p className="text-lg font-semibold text-gray-800 mb-2">
              {ele.level} - {ele.id}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
              <div className="relative">
                <p className="text-xs font-bold uppercase leading-8 text-gray-500 mb-1">
                  Company Name
                </p>
                <div className="flex items-center border border-gray-200 rounded bg-white py-1">
                  <FaBuilding className="absolute left-3 text-gray-500" />
                  <InputField
                    handleChange={(e) => handleInputChange(e, ele.id)}
                    val={ele.companyName}
                    Name="companyName"
                    Placeholder="Company Name"
                    className="pl-10 w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    maxLen="50"
                    type="text"
                  />
                </div>
              </div>

              <div className="relative">
                <p className="text-xs font-bold uppercase leading-8 text-gray-500 mb-1">
                  Job Title
                </p>
                <div className="flex items-center border border-gray-200 rounded bg-white py-1">
                  <FaBriefcase className="absolute left-3 text-gray-500" />
                  <InputField
                    handleChange={(e) => handleInputChange(e, ele.id)}
                    val={ele.jobTitle}
                    Name="jobTitle"
                    Placeholder="Designation"
                    className="pl-10 w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    type="text"
                  />
                </div>
              </div>

              <div className="relative">
                <p className="text-xs font-bold uppercase leading-8 text-gray-500 mb-1">
                  Duration (Months)
                </p>
                <div className="flex items-center border border-gray-200 rounded bg-white py-1">
                  <FaCalendarAlt className="absolute left-3 text-gray-500" />
                  <InputField
                    handleChange={(e) => handleInputChange(e, ele.id)}
                    val={ele.duration}
                    Name="duration"
                    Placeholder="Ex: 24"
                    className="pl-10 w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    type="number"
                  />
                </div>
              </div>

              <div className={`flex items-center ${i!== 0 ? 'justify-evenly' : ''} mt-6 space-x-2`}>
                <button
                  onClick={handleNewEntry}
                  className={`w-8 h-8 ${i == 0 ? 'mx-12': 'mr-6'} px bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300`}
                  aria-label="Add new item"
                >
                  <span className="text-xl font-bold">&#65291;</span>
                </button>

                {i !== 0 && (
                  <button
                    onClick={() => handleDeleteEntry(ele.id)}
                    className="w-8 h-8 bg-gray-100 border-2 border-gray-100 text-red-600 rounded-full flex items-center justify-center hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-300"
                    aria-label="Delete item"
                  >
                    <span className="text-sm font-bold">✖</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default WorkExperience;
