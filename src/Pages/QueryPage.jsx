// src/components/QueryForm.js
import React, { useState } from 'react';

const Query = () => {
    const [formData, setFormData] = useState({
        name: '',
        designation: '',
        organization: '',
        officeAddress: '',
        city: '',
        email: '',
        telephone: '',
        mobile: '',
        updates: '',
        subject: '',
        query: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Here you can add code to send the formData to a server
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
            <h2 className="flex text-xl font-bold text-center mb-6 justify-around">
                <div>
                    Help us to help you
                </div>
                <div>
                    QUERY SHEET
                </div>
            </h2>
            <form onSubmit={handleSubmit}>
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
                            onChange={ handleChange }
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Other professional updates <span className="text-red-500">*</span></label>
                        <div className="mt-1">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="updates"
                                    value="yes"
                                    className="form-radio"
                                    onChange={ handleChange }
                                    checked
                                    required
                                />
                                <span className="ml-2">Yes</span>
                            </label>
                            <label className="inline-flex items-center ml-4">
                                <input
                                    type="radio"
                                    name="updates"
                                    value="no"
                                    className="form-radio"
                                    onChange={ handleChange }
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
                            value={ formData.subject }
                            onChange={ handleChange }
                            required
                        >
                            <option value="">-Select-</option>
                            <option value="">Services</option>
                        </select>
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-gray-700">Query <span className="text-red-500">*</span></label>
                        <textarea
                            name="query"
                            className="mt-1 p-2 w-full border rounded"
                            rows="4"
                            value={ formData.query }
                            onChange={ handleChange }
                            required
                        />
                    </div>
                </div>
                <div className="flex justify-between mt-6">
                    <button type="button" className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" onClick={() => setFormData({})}>
                        Back
                    </button>
                    <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Query;
