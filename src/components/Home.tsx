import { useEffect, useState } from "react";
import Content from "./Content";
import Header from "./Header";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
    const [showModal, setShowModal] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get(
                    "https://calendarjiapi.onrender.com/auth/validate",
                    {
                        withCredentials: true,
                    }
                );

                console.log(response.data);

                if (!response.data.isAuthenticated) {
                    navigate("/login");
                } else {
                    setIsAuthenticated(true);
                }
            } catch (err) {
                console.error("Error checking authentication", err);
                navigate("/login");
            }
        };
        checkAuth();
    }, [navigate]);

    return (
        <>
            {isAuthenticated ? (
                <>
                    <Header setShowModal={setShowModal} />
                    <Content
                        showModal={showModal}
                        setShowModal={setShowModal}
                    />
                </>
            ) : (
                <Navigate to="/login" />
            )}
        </>
    );
}

export default Home;
