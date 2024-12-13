import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 text-white py-4 mt-8">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 Arman Hossain. All Rights Reserved.</p>
                    <div className="mt-2">
                        <a href="/privacy-policy" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
                        <a href="/terms-of-service" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
                    </div>
                    <div className="mt-4 text-gray-400">
                        <p>Email: <a href="mailto:armanmahim00@gmail.com" className="text-blue-400 hover:underline">armanmahim00@gmail.com</a></p>
                        <p>Phone: <a href="tel:+8801685757700" className="text-blue-400 hover:underline">01685757700</a></p>
                        <p>GitHub: <a href="https://github.com/brainiac1010" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">brainiac1010</a></p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
