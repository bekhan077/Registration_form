import React, { useState } from 'react';

const Registrator = () => {
    const [formValues, setFormValues] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        month: '',
        day: '',
        year: '',
        gender: '',
        streetAddress1: '',
        streetAddress2: '',
        city: '',
        state: '',
        postalCode: '',
        email: '',
        mobileNumber: '',
        phoneNumber: '',
        workNumber: '',
        company: '',
        courses: '',
        additionalComments: ''
    });

    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!formValues.firstName) newErrors.firstName = 'First Name is required';
        if (!formValues.middleName) newErrors.middleName = 'Middle Name is required';
        if (!formValues.lastName) newErrors.lastName = 'Last Name is required';
        if (!formValues.month) newErrors.month = 'Month is required';
        if (!formValues.day) newErrors.day = 'Day is required';
        if (!formValues.year) newErrors.year = 'Year is required';
        if (!formValues.gender) newErrors.gender = 'Gender is required';
        if (!formValues.streetAddress1) newErrors.streetAddress1 = 'Street Address is required';
        if (!formValues.city) newErrors.city = 'City is required';
        if (!formValues.state) newErrors.state = 'State is required';
        if (!formValues.postalCode) newErrors.postalCode = 'Postal Code is required';
        if (!formValues.email) newErrors.email = 'Email is required';
        if (!formValues.mobileNumber) newErrors.mobileNumber = 'Mobile Number is required';
        if (!formValues.phoneNumber) newErrors.phoneNumber = 'Phone Number is required';
        if (!formValues.workNumber) newErrors.workNumber = 'Work Number is required';
        if (!formValues.company) newErrors.company = 'Company is required';
        if (!formValues.courses) newErrors.courses = 'Courses is required';
        if (!formValues.additionalComments) newErrors.additionalComments = 'Additional Comments are required';
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            setShowModal(true);
        }
    };

    return (
        <div className='w-[850px] h-[2000px] mt-[100px] mx-auto bg-white'>
            <div className='w-[100%] h-[150px] border-b-[2px] border-[#005875]'>
                <div className='w-[90%] h-[100%] mx-auto flex flex-col justify-center'>
                    <h2 className='text-[36px] font-semibold text-[#005875]'>Registration Form</h2>
                    <p className='text-[#005875] text-[18px] font-semibold'>Fill out the form carefully for registration</p>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='w-[90%] mx-auto mt-[40px]'>
                    <h2 className={`text-[18px] font-medium ${errors.firstName || errors.middleName || errors.lastName ? 'text-red-500' : 'text-[#005875]'}`}>Student Name</h2>
                    <div className='flex justify-between mt-[15px]'>
                        <div>
                            <input
                                type="text"
                                name="firstName"
                                value={formValues.firstName}
                                onChange={handleChange}
                                className={`w-[250px] h-[40px] rounded border ${errors.firstName ? 'border-red-500' : 'border-[#005875]'} outline-none pl-[8px] block`}
                            />
                            <label className={`text-[12px] ${errors.firstName ? 'text-red-500' : 'text-[#005875]'} mt-[8px] block`} htmlFor="firstName">First Name</label>
                        </div>
                        <div>
                            <input
                                type="text"
                                name="middleName"
                                value={formValues.middleName}
                                onChange={handleChange}
                                className={`w-[250px] h-[40px] rounded border ${errors.middleName ? 'border-red-500' : 'border-[#005875]'} outline-none pl-[8px] block`}
                            />
                            <label className={`text-[12px] ${errors.middleName ? 'text-red-500' : 'text-[#005875]'} mt-[8px] block`} htmlFor="middleName">Middle Name</label>
                        </div>
                        <div>
                            <input
                                type="text"
                                name="lastName"
                                value={formValues.lastName}
                                onChange={handleChange}
                                className={`w-[250px] h-[40px] rounded border ${errors.lastName ? 'border-red-500' : 'border-[#005875]'} outline-none pl-[8px] block`}
                            />
                            <label className={`text-[12px] ${errors.lastName ? 'text-red-500' : 'text-[#005875]'} mt-[8px] block`} htmlFor="lastName">Last Name</label>
                        </div>
                    </div>
                </div>
                <div className='w-[90%] mx-auto flex justify-between items-center mt-[40px]'>
                    <div>
                        <h2 className={`text-[18px] font-medium ${errors.month || errors.day || errors.year ? 'text-red-500' : 'text-[#005875]'}`}>Birth Date</h2>
                        <ul className='flex gap-3 mt-[15px]'>
                            <li>
                                <input
                                    type="text"
                                    name="month"
                                    value={formValues.month}
                                    onChange={handleChange}
                                    className={`block w-[120px] h-[40px] border ${errors.month ? 'border-red-500' : 'border-[#005875]'} rounded pl-[8px]`}
                                />
                                <label className={`text-[12px] ${errors.month ? 'text-red-500' : 'text-[#005875]'} mt-[8px]`} htmlFor="month">Month</label>
                            </li>
                            <li>
                                <input
                                    type="text"
                                    name="day"
                                    value={formValues.day}
                                    onChange={handleChange}
                                    className={`block w-[120px] h-[40px] border ${errors.day ? 'border-red-500' : 'border-[#005875]'} rounded pl-[8px]`}
                                />
                                <label className={`text-[12px] ${errors.day ? 'text-red-500' : 'text-[#005875]'} mt-[8px]`} htmlFor="day">Day</label>
                            </li>
                            <li>
                                <input
                                    type="text"
                                    name="year"
                                    value={formValues.year}
                                    onChange={handleChange}
                                    className={`block w-[120px] h-[40px] border ${errors.year ? 'border-red-500' : 'border-[#005875]'} rounded pl-[8px]`}
                                />
                                <label className={`text-[12px] ${errors.year ? 'text-red-500' : 'text-[#005875]'} mt-[8px]`} htmlFor="year">Year</label>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className={`text-[18px] font-medium ${errors.gender ? 'text-red-500' : 'text-[#005875]'}`}>Gender</h2>
                        <div className='mt-[15px]'>
                            <input
                                className={`w-[350px] h-[40px] border ${errors.gender ? 'border-red-500' : 'border-[#005875]'} rounded block pl-[8px]`}
                                type="text"
                                name="gender"
                                value={formValues.gender}
                                onChange={handleChange}
                            />
                            <label htmlFor="gender" className={`text-[12px] ${errors.gender ? 'text-red-500' : 'text-[#005875]'} mt-[8px]`}>Gender</label>
                        </div>
                    </div>
                </div>
                <div className='w-[90%] mx-auto mt-[40px]'>
                    <h2 className={`text-[18px] font-medium ${errors.streetAddress1 || errors.city || errors.state || errors.postalCode ? 'text-red-500' : 'text-[#005875]'}`}>Address</h2>
                    <ul className='mt-[15px]'>
                        <li>
                            <input
                                type="text" name="streetAddress1"
                                value={formValues.streetAddress1}
                                onChange={handleChange}
                                className={`w-full h-[40px] border ${errors.streetAddress1 ? 'border-red-500' : 'border-[#005875]'} rounded pl-[8px]`}
                            />
                            <label htmlFor="streetAddress1" className={`text-[12px] ${errors.streetAddress1 ? 'text-red-500' : 'text-[#005875]'} mt-[8px]`}>Street Address Line 1</label>
                        </li>
                        <li className='mt-[15px]'>
                            <input
                                type="text"
                                name="streetAddress2"
                                value={formValues.streetAddress2}
                                onChange={handleChange}
                                className='w-full h-[40px] border border-[#005875] rounded pl-[8px]'
                            />
                            <label htmlFor="streetAddress2" className='text-[12px] text-[#005875] mt-[8px]'>Street Address Line 2</label>
                        </li>
                        <li className='mt-[15px]'>
                            <input
                                type="text"
                                name="city"
                                value={formValues.city}
                                onChange={handleChange}
                                className={`w-full h-[40px] border ${errors.city ? 'border-red-500' : 'border-[#005875]'} rounded pl-[8px]`}
                            />
                            <label htmlFor="city" className={`text-[12px] ${errors.city ? 'text-red-500' : 'text-[#005875]'} mt-[8px]`}>City</label>
                        </li>
                        <li className='mt-[15px]'>
                            <input
                                type="text"
                                name="state"
                                value={formValues.state}
                                onChange={handleChange}
                                className={`w-full h-[40px] border ${errors.state ? 'border-red-500' : 'border-[#005875]'} rounded pl-[8px]`}
                            />
                            <label htmlFor="state" className={`text-[12px] ${errors.state ? 'text-red-500' : 'text-[#005875]'} mt-[8px]`}>State</label>
                        </li>
                        <li className='mt-[15px]'>
                            <input
                                type="text"
                                name="postalCode"
                                value={formValues.postalCode}
                                onChange={handleChange}
                                className={`w-full h-[40px] border ${errors.postalCode ? 'border-red-500' : 'border-[#005875]'} rounded pl-[8px]`}
                            />
                            <label htmlFor="postalCode" className={`text-[12px] ${errors.postalCode ? 'text-red-500' : 'text-[#005875]'} mt-[8px]`}>Postal / Zip Code</label>
                        </li>
                    </ul>
                </div>
                <div className='w-[90%] mx-auto mt-[40px]'>
                    <h2 className={`text-[18px] font-medium ${errors.email || errors.mobileNumber || errors.phoneNumber || errors.workNumber ? 'text-red-500' : 'text-[#005875]'}`}>Contact Information</h2>
                    <ul className='mt-[15px]'>
                        <li>
                            <input
                                type="text"
                                name="email"
                                value={formValues.email}
                                onChange={handleChange}
                                className={`w-full h-[40px] border ${errors.email ? 'border-red-500' : 'border-[#005875]'} rounded pl-[8px]`}
                            />
                            <label htmlFor="email" className={`text-[12px] ${errors.email ? 'text-red-500' : 'text-[#005875]'} mt-[8px]`}>Email</label>
                        </li>
                        <li className='mt-[15px]'>
                            <input
                                type="text"
                                name="mobileNumber"
                                value={formValues.mobileNumber}
                                onChange={handleChange}
                                className={`w-full h-[40px] border ${errors.mobileNumber ? 'border-red-500' : 'border-[#005875]'} rounded pl-[8px]`}
                            />
                            <label htmlFor="mobileNumber" className={`text-[12px] ${errors.mobileNumber ? 'text-red-500' : 'text-[#005875]'} mt-[8px]`}>Mobile Number</label>
                        </li>
                        <li className='mt-[15px]'>
                            <input
                                type="text"
                                name="phoneNumber"
                                value={formValues.phoneNumber}
                                onChange={handleChange}
                                className={`w-full h-[40px] border ${errors.phoneNumber ? 'border-red-500' : 'border-[#005875]'} rounded pl-[8px]`}
                            />
                            <label htmlFor="phoneNumber" className={`text-[12px] ${errors.phoneNumber ? 'text-red-500' : 'text-[#005875]'} mt-[8px]`}>Phone Number</label>
                        </li>
                        <li className='mt-[15px]'>
                            <input
                                type="text"
                                name="workNumber"
                                value={formValues.workNumber}
                                onChange={handleChange}
                                className={`w-full h-[40px] border ${errors.workNumber ? 'border-red-500' : 'border-[#005875]'} rounded pl-[8px]`}
                            />
                            <label htmlFor="workNumber" className={`text-[12px] ${errors.workNumber ? 'text-red-500' : 'text-[#005875]'} mt-[8px]`}>Work Number</label>
                        </li>
                    </ul>
                </div>
                <div className='w-[90%] mx-auto mt-[40px]'>
                    <h2 className={`text-[18px] font-medium ${errors.company ? 'text-red-500' : 'text-[#005875]'}`}>Company</h2>
                    <div className='mt-[15px]'>
                        <input
                            className={`w-full h-[40px] border ${errors.company ? 'border-red-500' : 'border-[#005875]'} rounded pl-[8px]`}
                            type="text"
                            name="company"
                            value={formValues.company}
                            onChange={handleChange}
                        />
                        <label htmlFor="company" className={`text-[12px] ${errors.company ? 'text-red-500' : 'text-[#005875]'} mt-[8px]`}>Company</label>
                    </div>
                </div>
                <div className='w-[90%] mx-auto mt-[40px]'>
                    <h2 className={`text-[18px] font-medium ${errors.courses ? 'text-red-500' : 'text-[#005875]'}`}>Courses</h2>
                    <div className='mt-[15px]'>
                        <input
                            className={`w-full h-[40px] border ${errors.courses ? 'border-red-500' : 'border-[#005875]'} rounded pl-[8px]`}
                            type="text"
                            name="courses"
                            value={formValues.courses}
                            onChange={handleChange}
                        />
                        <label htmlFor="courses" className={`text-[12px] ${errors.courses ? 'text-red-500' : 'text-[#005875]'} mt-[8px]`}>Courses</label>
                    </div>
                </div>
                <div className='w-[90%] mx-auto mt-[40px]'>
                    <h2 className={`text-[18px] font-medium ${errors.additionalComments ? 'text-red-500' : 'text-[#005875]'}`}>Additional Comments</h2>
                    <div className='mt-[15px]'>
                        <textarea
                            className={`w-full h-[150px] border ${errors.additionalComments ? 'border-red-500' : 'border-[#005875]'} rounded pl-[8px] pt-[8px]`}
                            name="additionalComments"
                            value={formValues.additionalComments}
                            onChange={handleChange}
                        />
                        <label htmlFor="additionalComments" className={`text-[12px] ${errors.additionalComments ? 'text-red-500' : 'text-[#005875]'} mt-[8px]`}>Additional Comments</label>
                    </div>
                </div>
                <div className='w-[90%] mx-auto mt-[40px]'>
                    <button type="submit" className='w-full h-[50px] bg-[#005875] text-white font-semibold text-[18px] rounded'>Submit</button>
                </div>
            </form>
            {showModal && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
                    <div className='bg-white p-[20px] rounded shadow-lg w-[80%] max-w-[500px]'>
                        <h2 className='text-[24px] font-semibold text-[#005875] mb-[20px]'>Submitted Information</h2>
                        <ul className='text-left'>
                            {Object.entries(formValues).map(([key, value]) => (
                                <li key={key} className='mb-[10px]'>
                                    <strong>{key}:</strong> {value}
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => setShowModal(false)} className='mt-[20px] w-1/5 h-[40px] bg-[#005875] text-white font-semibold text-[16px] rounded'>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Registrator;


