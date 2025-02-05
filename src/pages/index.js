import { useEffect, useState } from "react";
import { fetchUsers } from "../utils/api";
import UserCard from "../components/UserCard";
import Sorting from "../components/Sorting";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Link from "next/link";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState(""); // Sorting state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers()
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Handle search
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    filterAndSortUsers(query, sortBy);
  };

  // Handle sorting
  const handleSort = (criteria) => {
    setSortBy(criteria);
    filterAndSortUsers(searchQuery, criteria);
  };

  // Filter & Sort Users
  const filterAndSortUsers = (query, sortCriteria) => {
    let filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
    );

    if (sortCriteria === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortCriteria === "company") {
      filtered.sort((a, b) => a.company.name.localeCompare(b.company.name));
    }

    setFilteredUsers(filtered);
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search users by name or email..."
        value={searchQuery}
        onChange={handleSearch}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />

      {/* Sorting Component */}
      <Sorting sortBy={sortBy} setSortBy={handleSort} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <Link key={user.id} href={`/users/${user.id}`}>
              <UserCard user={user} />
            </Link>
          ))
        ) : (
          <p>No users found</p>
        )}
      </div>
    </div>
  );
}
