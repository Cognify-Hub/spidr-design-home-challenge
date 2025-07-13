import React, {useState} from 'react';
import { FormData } from './definitions';
import AirFryerImg from '../assets/airfryer2.png';

export default function InterestForm() {

    const initialData = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        guessCost: '',
        spidrPIN: ''
    }

    const [formData, setFormData] = useState<FormData>(initialData)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        if (name === 'spidrPIN') {
            const digitsOnly = value.replace(/\D/g, '');
            const formatted = digitsOnly.replace(/(\d{4})(?=\d)/g, '$1-');
            if (digitsOnly.length <= 16) {
              setFormData(prev => ({ ...prev, [name]: formatted }));
            }
        } else if (name === 'phoneNumber') {
            const digitsOnly = value.replace(/\D/g, '');
            const formatted = digitsOnly.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
            if (digitsOnly.length <= 10) {
              setFormData(prev => ({ ...prev, [name]: formatted }));
            }
          } else if (name === 'guessCost') {
            const numericValue = value.replace(/[^0-9.]/g, '');
            setFormData(prev => ({ ...prev, [name]: numericValue }));
          } else {
            setFormData(prev => ({ ...prev, [name]: value }));
          } 
    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('Spidr Air Fryer Interest Form Submission: ', formData);
        alert('Thank you for your interest! Your form has been submitted successfully.');
    }

    return (
        <div className='bg-[#28292a] min-h-screen w-full'>
            <div className='flex flex-col lg:flex-row h-screen'>
                {/* Left Side containing image */}
                <div className='bg-[#28292a] h-64 sm:h-80 md:h-96 lg:h-screen w-full lg:w-[45%] flex bg-white bg-contain lg:bg-cover bg-center bg-no-repeat relative'
                    style={{
                    backgroundImage: `url(${AirFryerImg})`,
                    backgroundAttachment: 'scroll',
                    minHeight: '300px'
                    }}>
                </div>
                {/* Right Side containing a form */}
                <div className='min-h-screen lg:h-screen w-full lg:w-1/2 flex items-center justify-center bg-[#28292a] p-4 lg:p-8'>
                    <div className='w-full max-w-lg'>
                        <div className='text-center mb-6 lg:mb-8'>
                            <h1 className='text-white text-2xl lg:text-3xl font-light tracking-wide mb-2'>
                                Air Fryer Interest Form
                            </h1>
                            <div className='w-24 h-0.5 bg-white mx-auto'></div>
                        </div>
                        {/* Form container */}
                        <div className='bg-[#4592a3] p-8 shadow-2xl'>
                            <h3 className='text-white text-xl font-light tracking-wide mb-6'>
                                Expression of Interest
                            </h3>
                            <div className='space-y-5'>
                                {/* First Name & Last Name Row */}
                                <div className='grid grid-cols-2 gap-4'>
                                    <div>
                                        <label htmlFor="firstName" className='block text-white text-sm font-light mb-2'>
                                            First Name
                                        </label>
                                        <input 
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            required
                                            className='w-full px-4 py-3 bg-white border-none focus:outline-none focus:ring-2 focus:ring-white text-gray-900'
                                            placeholder="First name"
                                         />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className='block text-white text-sm font-light mb-2'>
                                            Last Name
                                        </label>
                                        <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        required
                                        className='w-full px-4 py-3 bg-white border-none focus:outline-none focus:ring-2 focus:ring-white text-gray-900'
                                        placeholder="Last name"
                                    />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="phoneNumber" className='block text-white text-sm font-light mb-2'>
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-white border-none focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
                                        placeholder="(123) 123-4567"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-white text-sm font-light mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-white border-none focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="guessCost" className="block text-white text-sm font-light mb-2">
                                        Guess the Air Fryer's Cost
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-3 text-gray-500 text-lg">$</span>
                                        <input
                                            type="text"
                                            id="guessCost"
                                            name="guessCost"
                                            value={formData.guessCost}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full pl-8 pr-4 py-3 bg-white border-none focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
                                            placeholder="299.99"
                                        />
                                    </div>
                                </div>
                            
                                <div>
                                    <label htmlFor="spidrPIN" className="block text-white text-sm font-light mb-2">
                                        Very, Very Secret 16-Digit Spidr PIN
                                    </label>
                                    <input
                                        type="text"
                                        id="spidrPIN"
                                        name="spidrPIN"
                                        value={formData.spidrPIN}
                                        onChange={handleInputChange}
                                        required
                                        maxLength={19}
                                        className="w-full px-4 py-3 bg-white border-none focus:outline-none focus:ring-2 focus:ring-white text-gray-900 font-mono tracking-wide"
                                        placeholder="####-####-####-####"
                                    />
                                    <p className="text-teal-100 text-xs mt-2">
                                        Formatted automatically with dashes
                                    </p>
                                </div>
                                    <button
                                        type="button"
                                        onClick={handleSubmit}
                                        className="w-full bg-transparent border hover:bg-[#1c4b56] text-white py-4 px-6 font-light text-lg tracking-wide transition-all duration-300 mt-8"
                                    >
                                        Submit Interest
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}