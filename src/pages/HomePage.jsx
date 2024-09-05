import { useEffect, useState } from "react";
import User from "../components/User";

export default function HomePage() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    async function getUsers() {
      const data = localStorage.getItem("users");

      let usersData = [];

      if (data) {
        usersData = JSON.parse(data);
      } else {
        usersData = await fetchUsers();
      }

      setUsers(usersData);
    }

    getUsers();
  }, []);

  async function fetchUsers() {
    const response = await fetch("https://raw.githubusercontent.com/KalenskiDeni/jsonfile-crud/main/boardGames.json");
    const data = await response.json();
    localStorage.setItem("users", JSON.stringify(data));
    return data;
  }
  

  // Search, filter, and sort the users array
  let filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));

  if (filter) {
    filteredUsers = filteredUsers.filter(user => user.category === filter); // Assuming you're filtering by 'category'
  }

  filteredUsers.sort((user1, user2) => {
    if (user1[sortBy] < user2[sortBy]) return -1;
    if (user1[sortBy] > user2[sortBy]) return 1;
    return 0;
  });

  return (
    <section className="page">
      <h1 className="page-title">Board Games</h1>
      <form className="grid-filter" role="search">
        <label>
          
          <input placeholder="Search" type="search" onChange={e => setSearchTerm(e.target.value)} />
        </label>

        <label>
         
          <select name="sort-by" onChange={e => setSortBy(e.target.value)}>
            <option value="name">Name</option>
            <option value="players">Players</option>
            <option value="duration">Duration</option>
            <option value="shelfNumber">Shelf</option>
          </select>
        </label>
      </form>
      <section className="grid">
        {filteredUsers.map(user => (
          <User user={user} key={user.id} />
        ))}
      </section>
    </section>
  );
}
