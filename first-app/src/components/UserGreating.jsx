
function UserGreating(props) {
    const welcomeMessage = <h2 className="welcome-message"> Welcome, {props.userName}</h2>
    const loginPrompt = <h2 className="login-prompt">Please login to continue</h2>
    return (props.isLoggedIn ? welcomeMessage : loginPrompt)


}

export default UserGreating