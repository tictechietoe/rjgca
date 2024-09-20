import React, { useState } from 'react';
import Loader from '../components/Loader';
import BannerImage from '../components/BannerImage';
import careers from '../assets/images/careers.jpg';

const ApplicationPage = () => {
  const defaultApplication = {
    firstName: '',
    lastName: '',
    email: '',
    mobileNo: '',
    gender: '',
    dob: '',
    position: '',
    qualification: '',
    portfolio: '',
    company: '',
    resume: null,
    experienceYears: '0',
    experienceMonths: '0',
    comments: ''
  };

  const [formData, setFormData] = useState(defaultApplication);
  const [showFormLoader, setShowFormLoader] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      console.log(files[0]);
      console.log(formData);
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    // initallly activate the loader
    setShowFormLoader(true);

    e.preventDefault();
    // Here you can add code to send the formData to a serve

    fetch("https://script.google.com/macros/s/AKfycbzMUQ8CIY3OsCSldz1llRileM7nB11VazV7eRSp1IUgwWldMR2sFvicJQHGlgY7UwBwlg/exec", {
      method: "POST",
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: "application",
        data: formData
      })
    })
      .then((res) => {
        alert("Application has been recorded succesfully.");
        setFormData(defaultApplication);
      })
      .catch((err) => {
        alert("Some error recording the query. Can you please try again after some time.");
      })
      .finally(() => {
        // at the end remove the loader
        setShowFormLoader(false);
      });
  };

  return (
    <div>
      <BannerImage
        image={ careers }
        title="CAREERS"
        fromText="Home"
        fromLink="/"
        toText="Careers"
      />
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg my-10 border">
        <h2 className="text-center text-2xl mb-6"> APPLY HERE </h2>
        <p className="text-center mb-6">
          We nurture and cultivate a sense of pride in the work and create team leaders. Your growth chart will be governed by well-defined transparent policies of the firm. Apply via the form given below and meet us for face-to-face interview.
        </p>
        {
          showFormLoader &&
          <div className="flex items-center justify-center h-48">
            <Loader text="loading your details... Please wait for few seconds..."/>
          </div>
        }
        {
          !showFormLoader &&
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium text-gray-700">First name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                // required
                className="mt-1 p-2 w-full border rounded"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Last name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                // required
                className="mt-1 p-2 w-full border rounded"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                // required
                className="mt-1 p-2 w-full border rounded"
              />
            </div>
            <div>
              <label className="block  font-medium text-gray-700">Mobile No *</label>
              <input
                type="text"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleChange}
                // required
                className="mt-1 p-2 w-full border rounded"
              />
            </div>
            <div>
              <label className="block  font-medium text-gray-700">Gender *</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                // required
                className="mt-1 p-2 w-full border rounded"
              >
                <option value="">Select..</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block  font-medium text-gray-700">Position you are applying for</label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded"
              />
            </div>
            <div>
              <label className="block  font-medium text-gray-700">Date Of Birth (DD/MM/YYYY) *</label>
              <input
                type="text"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                // required
                className="mt-1 p-2 w-full border rounded"
              />
            </div>
            <div>
              <label className="block  font-medium text-gray-700">Highest Qualification</label>
              <input
                type="text"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded"
              />
            </div>
            <div>
              <label className="block  font-medium text-gray-700">Portfolio website</label>
              <input
                type="url"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded"
              />
            </div>
            <div>
              <label className="block  font-medium text-gray-700">Last company you worked for</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded"
              />
            </div>
            {
              true &&
              <div>
                <label className="block  font-medium text-gray-700">Upload Resume * (Max size 1 mb)</label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleChange}
                  // required
                  className="mt-1 p-2 w-full border rounded"
                />
              </div>
            }
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block  font-medium text-gray-700">Years Of Experience</label>
                <input
                  name="experienceYears"
                  type="number"
                  value={formData.experienceYears}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded"
                />
              </div>
              <div>
                <label className="block  font-medium text-gray-700">Months Of Experience</label>
                <input
                  name="experienceMonths"
                  type="number"
                  value={formData.experienceMonths}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block  font-medium text-gray-700">Reference / Comments / Questions</label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded"
              />
            </div>
          </div>
        }
        <div className="flex justify-between mt-6 mt-6 text-center">
          <button type="button" className="bg-custom-mark-color text-white font-bold py-2 px-4 rounded" onClick={() => setFormData({})}>
            BACK
          </button>
          <button
            type="submit"
            disabled={showFormLoader}
            className={`px-4 py-2 bg-custom-secondary text-white font-bold rounded ${showFormLoader && 'opacity-25 cursor-not-allowed'}`}
          >
            SEND APPLICATION
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationPage;
