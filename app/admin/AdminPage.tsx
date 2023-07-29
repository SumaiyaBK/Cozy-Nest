import React from "react";
import Heading from "@/app/components/Heading"; // Assuming correct path for Heading component
import Container from "@/app/components/Container"; // Assuming correct path for Container component
import { SafeUser } from "@/app/types"; // Assuming correct path for SafeUser type
interface AdminProps {
  usersList: SafeUser[];
  currentUser?: SafeUser | null;
}

const AdminPage: React.FC<AdminProps> = ({ usersList, currentUser }) => {
  const allUser = usersList.map((element) => (
    <tr key={element.id}>
      <td className="border p-2">{element.name}</td>
      <td className="border p-2">{element.email}</td>
      <td className="border p-2">{element.isAdmin ? "Admin" : "User"}</td>
    </tr>
  ));

  return (
    <Container>
      <Heading title="Users Panel" subtitle="All users list!" />

      <table className="w-full text-left">
        <caption className="sr-only">All users list</caption>
        <thead className="bg-gray-200 border border-black p-2">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Role</th>
          </tr>
        </thead>
        <tbody>{allUser}</tbody>
      </table>
    </Container>
  );
};

export default AdminPage;
