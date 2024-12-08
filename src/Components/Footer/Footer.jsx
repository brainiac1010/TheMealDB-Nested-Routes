import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 text-white py-4 mt-8">
            <div className="container mx-auto text-center">
                <p>&copy; 2024 Your Company. All Rights Reserved.</p>
                <div className="mt-2">
                    <a href="/privacy-policy" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
                    <a href="/terms-of-service" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
                </div>
            </div>
        </footer>
        </div>
    );
};

export default Footer;