import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types'; // Optional: for prop type validation
import './User.css'; // Ensure this path is correct based on your project structure

export default function User({ user }) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/users/${user.id}`);
    }


    
    return (
        <article className="user-card" onClick={handleClick}>
            <img
                src={user.image || "https://placehold.co/600x400?text=Error+loading+image"}
                alt={user.name || "Unknown User"}
                onError={(e) => (e.target.src = "https://placehold.co/600x400?text=Error+loading+image")}
            />
            <div className="user-card-content">
                <h2 className="title">{user.name}</h2>
                <p className="category">{user.category}</p> {/* Category (Description) */}
                <div className="info">
                    <span>
                        <img src="/src/assets/Images/people.png" alt="Players" /> {user.players}
                    </span>
                    <span>
                        <img src="/src/assets/Images/duration.png" alt="Time" /> {user.duration}
                        
                    </span>
                    
                    <span className="badge">{user.shelfNumber}</span>
                </div>
            </div>
        </article>
    );
}

// Optional: Adding prop type validation
User.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        image: PropTypes.string,
        category: PropTypes.string,
        name: PropTypes.string,
        players: PropTypes.string,
        duration: PropTypes.string,
        shelfNumber: PropTypes.string,
    }).isRequired,
};
