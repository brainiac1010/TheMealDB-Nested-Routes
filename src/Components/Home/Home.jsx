import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      
        setTimeout(() => {
            setIsLoading(false);
        }, 1000); 
    }, []);

    return (
        <div
            className="flex flex-col min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: 'url("https://your-image-url.com/path/to/your/image.jpg")',
            }}
        >
            <Header />
            <main className="flex-grow p-6">
                {isLoading ? (
                    <div className="flex justify-center items-center min-h-screen">
                        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <Outlet />
                )}
            </main>
            <Footer />
        </div>
    );
};

export default Home;
