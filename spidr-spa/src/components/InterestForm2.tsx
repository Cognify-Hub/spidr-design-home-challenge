import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import AirFryerImage from '../assets/airfryer3.png';

export default function InterestForm() {
    const initialData = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        guessCost: '',
        spidrPIN: ''
    };

    const [formData, setFormData] = useState(initialData);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

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

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1200));
        
        console.log('Spidr Air Fryer Interest Form Submission: ', formData);
        setIsSubmitted(true);
        setIsSubmitting(false);
        
        // Reset form after 4 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData(initialData);
        }, 4000);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col lg:flex-row min-h-screen">
                {/* Left Side - Image Section */}
                <div className="lg:w-1/2 bg-white flex items-center justify-center p-8 lg:p-16">
                    <div className="w-full max-w-lg">
                        {/* Air Fryer Image */}
                        <div className="aspect-square bg-gray-100 rounded-2xl shadow-lg relative overflow-hidden">
                            <img 
                                src={AirFryerImage}
                                alt="Spidr Air Fryer" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        
                        {/* Minimal product info */}
                        <div className="mt-8 text-center">
                            <h3 className="text-lg font-light text-gray-600 mb-2">Next Generation Cooking</h3>
                            <p className="text-sm text-gray-500">Smart. Efficient. Beautiful.</p>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form Section */}
                <div className="lg:w-1/2 bg-white lg:bg-gray-50 flex items-center justify-center p-8 lg:p-16">
                    <div className="w-full max-w-md">
                        {/* Clean Header */}
                        <div className="mb-8">
                            <h1 className="text-3xl lg:text-4xl font-light text-gray-900 mb-2">
                                Interest Form
                            </h1>
                            <div className="w-12 h-px bg-gray-900 mb-6"></div>
                            <p className="text-gray-600 font-light">
                                Express your interest in the Spidr Air Fryer
                            </p>
                        </div>

                        {/* Success Message */}
                        {isSubmitted && (
                            <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg mb-8 text-center">
                                <Check className="w-6 h-6 mx-auto mb-3 text-green-600" />
                                <h3 className="font-medium mb-1">Thank you</h3>
                                <p className="text-sm text-green-700">Your interest has been recorded successfully.</p>
                            </div>
                        )}

                        {/* Clean Form */}
                        <div className="space-y-6">
                            {/* Name Row */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900 bg-white transition-all duration-200"
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900 bg-white transition-all duration-200"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900 bg-white transition-all duration-200"
                                    placeholder="(555) 123-4567"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900 bg-white transition-all duration-200"
                                    placeholder="john.doe@email.com"
                                />
                            </div>

                            {/* Cost Guess */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Guess the Air Fryer's Cost
                                </label>
                                <div className="relative">
                                    <span className="absolute left-4 top-3 text-gray-500">$</span>
                                    <input
                                        type="text"
                                        name="guessCost"
                                        value={formData.guessCost}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900 bg-white transition-all duration-200"
                                        placeholder="299.99"
                                    />
                                </div>
                            </div>

                            {/* Spidr PIN */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Secret 16-Digit Spidr PIN
                                </label>
                                <input
                                    type="text"
                                    name="spidrPIN"
                                    value={formData.spidrPIN}
                                    onChange={handleInputChange}
                                    required
                                    maxLength={19}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900 bg-white font-mono transition-all duration-200"
                                    placeholder="####-####-####-####"
                                />
                                <p className="text-xs text-gray-500 mt-1">
                                    Formatted automatically with dashes
                                </p>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="button"
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 px-6 rounded-lg font-medium text-base transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center group mt-8"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center">
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                        Submitting...
                                    </div>
                                ) : (
                                    <div className="flex items-center">
                                        Submit Interest
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                                    </div>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}