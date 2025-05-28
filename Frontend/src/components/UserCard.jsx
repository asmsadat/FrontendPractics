import { MdOutlineDelete } from "react-icons/md";

const UserCard = ({ user, onDelete }) => {
  const { id, name, username, email, address, phone, website, company } = user;

  return (
    <div className="bg-white shadow-md rounded-lg border border-gray-200 p-6 hover:border-blue-900">
      <h2 className="text-lg font-semibold text-blue-900 mb-2">{name}</h2>
      <p><strong>ID: </strong>{id}</p>
      <p><strong>Username: </strong>{username}</p>
      <p><strong>Phone: </strong>{phone}</p>
      <p><strong>Email: </strong>{email}</p>
      <p><strong>Website: </strong>{website}</p>
      <p><strong>Company: </strong>{company?.name}</p>
      <p>
        <strong>Address: </strong>{address?.street}, {address?.city} {address?.zipcode}
      </p>
      <button
        onClick={() => onDelete(user.id)}
        className="flex items-center gap-1 border-2 border-r-2 rounded-md p-2 mt-2 bg-red-500 text-white hover:bg-white hover:text-red-700 hover:border-red-500 text-sm"
      >
        <MdOutlineDelete /> Delete
      </button>
    </div>
  );
};

export default UserCard;
