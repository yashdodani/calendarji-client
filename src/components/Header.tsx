import { HeaderProps } from "../types";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Header({ setShowModal }: HeaderProps) {
    const navigate = useNavigate();
    return (
        <>
            <div className="header-container">
                <div className="header">
                    <h1 className="heading">Calender Ji</h1>
                    <p className="tagline">(Use Google Calendar Hassle-free)</p>
                </div>
                <div className="btn-header-container">
                    <button
                        className="add-btn"
                        onClick={() => setShowModal(true)}
                    >
                        Create
                    </button>
                    <button
                        className="add-btn"
                        onClick={() => {
                            Cookies.remove("jwt");
                            navigate("/login");
                            // return <Navigate to='/login'/>
                        }}
                    >
                        Sign Out
                    </button>
                </div>
            </div>
        </>
    );
}
export default Header;
