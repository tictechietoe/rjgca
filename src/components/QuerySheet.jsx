// src/components/QueryForm.js
import React, { useState } from 'react';
import Loader from './Loader';

const QuerySheet = () => {
  const defaultObject = {
    name: '',
    designation: '',
    organization: '',
    officeAddress: '',
    city: '',
    email: '',
    telephone: '',
    mobile: '',
    professionalUpdates: '',
    subject: '',
    query: ''
  };

  const [formData, setFormData] = useState(defaultObject);
  const [showFormLoader, setShowFormLoader] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    // initallly activate the loader
    setShowFormLoader(true);

    e.preventDefault();
    // Here you can add code to send the formData to a serve

    fetch("https://script.google.com/macros/s/AKfycbworxpwQGA2h7WUqRScZnMy0TzWizsFUXDm-ZQXKSKpzu6m5RNuEeSfptJmeEK4woE6aw/exec", {
      method: "POST",
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: "query",
        data: {
          ...formData,
          date: new Date()
        }
      })
    })
      .then((res) => {
        alert("Query has been recorded succesfully.")
      })
      .catch((err) => {
        alert("Some error recording the query. Can you please try again after some time.")
      })
      .finally(() => {
        // at the end remove the loader
        setShowFormLoader(false);
      });

    // set the form data to default values
    setFormData(defaultObject);
  };

  return (
    <div className="mx-20 p-6 bg-white shadow-md rounded-lg my-10 border">
      <form onSubmit={handleSubmit}>
        <h2 className="flex text-2xl text-center mb-6 justify-around">QUERY SHEET</h2>
        <p className="text-center mb-6">
          Help us to help you! Close and continuous communication with clients is one of our top priorities. We put our clients and their queries as the main proprity and at the centre of our business.
        </p>
        {
          showFormLoader &&
          <div className="flex items-center justify-center h-96">
            <Loader text="Saving your query... Please wait for few seconds..."/>
          </div>
        }
        {
          !showFormLoader &&
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700">Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="name"
                className="mt-1 p-2 w-full border rounded"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Designation</label>
              <input
                type="text"
                name="designation"
                className="mt-1 p-2 w-full border rounded"
                value={formData.designation}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-gray-700">Organization</label>
              <input
                type="text"
                name="organization"
                className="mt-1 p-2 w-full border rounded"
                value={formData.organization}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-gray-700">Office Address</label>
              <input
                type="text"
                name="officeAddress"
                className="mt-1 p-2 w-full border rounded"
                value={formData.officeAddress}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-gray-700">City <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="city"
                className="mt-1 p-2 w-full border rounded"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">E-mail address <span className="text-red-500">*</span></label>
              <input
                type="email"
                name="email"
                className="mt-1 p-2 w-full border rounded"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Telephone No.</label>
              <input
                type="text"
                name="telephone"
                className="mt-1 p-2 w-full border rounded"
                value={formData.telephone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-gray-700">Mobile <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="mobile"
                className="mt-1 p-2 w-full border rounded"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Other professional updates <span className="text-red-500">*</span></label>
              <div className="mt-1">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="professionalUpdates"
                    value="yes"
                    className="form-radio"
                    onChange={handleChange}
                    checked
                    required
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center ml-4">
                  <input
                    type="radio"
                    name="professionalUpdates"
                    value="no"
                    className="form-radio"
                    onChange={handleChange}
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Subject of Query <span className="text-red-500">*</span></label>
              <select
                name="subject"
                className="mt-1 p-2 w-full border rounded"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">-Select-</option>
                <option value="services">Services</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700">Query Message<span className="text-red-500">*</span></label>
              <textarea
                name="query"
                className="mt-1 p-2 w-full border rounded"
                rows="4"
                value={formData.query}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        }
        <div className="flex justify-between mt-6">
          <button type="button" className="bg-custom-mark-color text-white font-bold py-2 px-4 rounded" onClick={() => setFormData({})}>
            CLEAR
          </button>
          <button
            type="submit"
            disabled={showFormLoader}
            className={`px-4 py-2 bg-custom-secondary text-white font-bold rounded hover:bg-custom-primary ${showFormLoader && 'opacity-25 cursor-not-allowed'}`}
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuerySheet;
