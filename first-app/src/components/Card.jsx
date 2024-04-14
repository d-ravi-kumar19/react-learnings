import profilePic from '../assets/profilePic.jpg';

function Card(){
    return (
        <div className="card">
            <img className="card-profile" src={profilePic} alt="profile picture" />
            <h1 className="card-title">Ravi</h1>
            <p className="card-text">Iam an Undergrad student</p>

        </div>
    );
}

export default Card;