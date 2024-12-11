import LoginHeader from "./LoginHeader";

const apiRoute = "https://calendarjiapi.onrender.com";

function Login() {
    return (
        <>
            {/* <div className="login"> */}
            <LoginHeader />
            <div className="login-window">
                {/* <h2>Login</h2> */}
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
            {/* </div> */}
        </>
    );
}

export default Login;
