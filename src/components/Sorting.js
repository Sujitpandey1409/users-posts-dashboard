export default function Sorting({ sortBy, setSortBy }) {
    return (
      <div className="mb-4 flex gap-2">
        <button
          className={`p-2 border rounded ${sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>
        <button
          className={`p-2 border rounded ${sortBy === "company" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setSortBy("company")}
        >
          Sort by Company
        </button>
      </div>
    );
  }
  