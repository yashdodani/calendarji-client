import { useEffect, useState } from "react";
import Content from "./Content";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get(
                    "https://calendarapi.onrender.com/auth/validate",
                    {
                        withCredentials: true,
                    }
                );

                const data = await response.data;
                console.log(data);

                if (!data.isAuthenticated) {
                    navigate("/login");
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
            <Header setShowModal={setShowModal} />
            <Content showModal={showModal} setShowModal={setShowModal} />
        </>
    );
}

export default Home;
