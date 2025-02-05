export default function UserCard({ user }) {
    return (
      <div className="p-4 border rounded shadow-md cursor-pointer hover:bg-gray-100">
        <h2 className="text-lg font-semibold">ID {user.id}: {user.name}</h2>
        <p>{user.email}</p>
        <p>{`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</p>
        <p className="text-sm text-gray-500">{user.company.name}</p>
      </div>
    );
  }
  