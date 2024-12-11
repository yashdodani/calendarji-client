import LoginHeader from "./LoginHeader";

const apiRoute = "https://calendarjiapi.onrender.com";
// const apiRoute = "http://localhost:3000";

function Login() {
    return (
        <>
            <LoginHeader />
            <div className="login-window">
                <button
                    onClick={() => {
                        const frontendRedirectUrl = encodeURIComponent(
                            `${window.location.origin}`
                        );
                        window.location.href = `${apiRoute}/auth?redirectUrl=${frontendRedirectUrl}`;
                    }}
                    className="add-btn"
                >
                    Continue With Google
                </button>
            </div>
        </>
    );
}

export default Login;
