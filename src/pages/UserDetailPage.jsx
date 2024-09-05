import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './UserDetailPage.css'; // Ensure you have the right path

export default function UserDetailPage() {
    const [user, setUser] = useState(null); // Updated to handle null for initial state
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const data = localStorage.getItem("users"); 
        const usersData = JSON.parse(data) || []; 
        const user = usersData.find(user => user.id === parseInt(id)); 
        setUser(user); 
    }, [id]);

    function showDeleteDialog() {
        const shouldDelete = window.confirm(`Do you want to delete "${user.name}"?`);
        if (shouldDelete) {
            deleteUser();
        }
    }

    async function deleteUser() {
        const data = localStorage.getItem("users");
        const usersData = JSON.parse(data) || [];
        const updatedUsers = usersData.filter(user => user.id !== parseInt(id)); 
        localStorage.setItem("users", JSON.stringify(updatedUsers)); 
        navigate("/"); 
    }

    function showUpdate() {
        navigate(`/users/${id}/update`);
    }

    if (!user) return <p>Loading...</p>; // Loading state if user is not yet loaded

    return (
        <section id="user-page" className="page">
            <div className="container">
                <div className="user-header">
                    <img src={user.image || "https://placehold.co/600x400?text=Error+loading+image"} alt={user.name} className="user-image" />
                    <div className="user-summary">
                        <h1 className="user-title">{user.name}</h1>
                        <div className="user-meta">
                            <p className="user-category">{user.category}</p>
                            <p className="user-players">{user.players}</p>
                            <p className="user-duration">{user.duration}</p>
                            <p className="user-language">English {user.language}</p>
                            <span className="user-shelf badge">{user.shelfNumber}</span>
                        </div>
                    </div>
                </div>
                
                <div className="user-description">
                    <h2>Description</h2>
                    <p>{user.description || "No description available."}</p>
                </div>
                
                <div className="user-rules">
                    <h2>General Rules</h2>
                    <ul>
                        <li>Setup: {user.setup || "N/A"}</li>
                        <li>Turn: {user.turn || "N/A"}</li>
                        <li>Buying Property: {user.buyingProperty || "N/A"}</li>
                        <li>Paying Rent: {user.payingRent || "N/A"}</li>
                        <li>Building: {user.building || "N/A"}</li>
                        <li>Special Spaces: {user.specialSpaces || "N/A"}</li>
                        <li>Jail: {user.jail || "N/A"}</li>
                        <li>Passing GO: {user.passingGo || "N/A"}</li>
                        <li>Bankruptcy: {user.bankruptcy || "N/A"}</li>
                    </ul>
                </div>
                
                <div className="btns">
                    <button className="btn-cancel" onClick={showDeleteDialog}>
                        Delete game
                    </button>
                    <button onClick={showUpdate}>Update game</button>
                </div>
            </div>
        </section>
    );
}
