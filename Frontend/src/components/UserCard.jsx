const UserCard = ({ user }) => {
  const { id, name, username, email, address } = user;

  return (
    <div className="bg-white shadow-md rounded-lg border border-gray-200 p-6 hover:border-blue-900">
      <h2 className="text-lg font-semibold text-blue-900 mb-2">{name}</h2>
      <p><strong>ID: </strong>{id}</p>
      <p><strong>Username: </strong>{username}</p>
      <p><strong>Email: </strong>{email}</p>
      <p>
        <strong>Address: </strong>{address.street}, {address.city} {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
