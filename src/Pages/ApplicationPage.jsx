import React, { useState } from 'react';

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
        experienceYear: '',
        experienceMonth: '',
        comments: ''
    };

    const [formData, setFormData] = useState(defaultApplication);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === 'file' ? files[0] : value
        }));
    };

    const handleSubmit = (e) => {
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
            alert("Application has been recorded succesfully.")
        })
        .catch((err) => {
            alert("Some error recording the query. Can you please try again after some time.")
        });

        // set the form data to default values
        setFormData(defaultApplication);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
            <h2 className="text-center text-2xl font-bold mb-6"> Apply Here </h2>
            <p className="text-center mb-6">
                We nurture and cultivate a sense of pride in the work and create team leaders. Your growth chart will be governed by well-defined transparent policies of the firm. Apply via the form given below and meet us for face-to-face interview.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block font-medium text-gray-700">First name *</label>
                    <input
                        type="text"
                        name="firstName"
                        value={ formData.firstName }
                        onChange={ handleChange }
                        required
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
                        required
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
                        required
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
                        required
                        className="mt-1 p-2 w-full border rounded"
                    />
                </div>
                <div>
                    <label className="block  font-medium text-gray-700">Gender *</label>
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
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
                        required
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
                <div>
                    <label className="block  font-medium text-gray-700">Upload Resume * (Max size 1 mb)</label>
                    <input
                        type="file"
                        name="resume"
                        onChange={handleChange}
                        required
                        className="mt-1 p-2 w-full border rounded"
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block  font-medium text-gray-700">Years Of Experience</label>
                        <select
                            name="experienceYear"
                            value={formData.experienceYear}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded"
                        >
                            <option value="">Select Year</option>
                            {/* Add year options here */}
                        </select>
                    </div>
                    <div>
                        <label className="block  font-medium text-gray-700">Month</label>
                        <select
                            name="experienceMonth"
                            value={formData.experienceMonth}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded"
                        >
                            <option value="">Select Month</option>
                            {/* Add month options here */}
                        </select>
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
            <div className="mt-6 text-center">
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Send Application
                </button>
            </div>
        </form>
    );
};

export default ApplicationPage;
