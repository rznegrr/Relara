import { Link } from "react-router-dom";

import { TableCell, TableRow } from "@/components/ui/table";
import AlertDelete from "@/ui/AlertDelete";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDeleteUser } from "./useDeleteUser";
import { useAuth } from "@/context/AuthContextProvider";

function UserItem({ user, userIndex }) {
  const { deleteUser, isPending, isIdle } = useDeleteUser();
  const { user: currentUser } = useAuth();

  const handleDelete = (id) => {
    deleteUser(id);
  };

  return (
    <TableRow
      className={`odd:bg-gray-700/50 even:bg-gray-700/70 ${!isIdle && "opacity-50"}`}
    >
      <TableCell className="text-gray-200">{userIndex}</TableCell>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.role}</TableCell>
      <TableCell className="text-right">
        <div className="flex items-center justify-end gap-x-3">
          {currentUser.id !== user.id && (
            <AlertDelete onDelete={() => handleDelete(user.id)}>
              <button
                disabled={isPending}
                className="text-base transition duration-200 ease-in-out hover:text-gray-400"
              >
                <RiDeleteBin5Line />
              </button>
            </AlertDelete>
          )}
          <Link
            to={`/users/${user.id}`}
            className="text-base transition duration-200 ease-in-out hover:text-gray-400"
          >
            <MdOutlineEdit />
          </Link>
        </div>
      </TableCell>
    </TableRow>
  );
}

export default UserItem;
