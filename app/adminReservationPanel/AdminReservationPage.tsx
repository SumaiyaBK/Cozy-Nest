import { SafeReservation, SafeUser } from "@/app/types";
import Heading from "@/app/components/Heading";
import Container from "@/app/components/Container";
import React from "react";

interface AdminReservationPageProps {
  currentUser?: SafeUser | null;
  usersList: SafeUser[];
  reservationsList: SafeReservation[] | null;
}

const AdminReservationPage: React.FC<AdminReservationPageProps> = ({
  reservationsList,
}) => {
  const allReservations = reservationsList?.map((element, index) => {
    return (
      <tr key={element.id}>
        <td className="border p-2">{index + 1}</td>{" "}
        <td className="border p-2">{element.User?.name}</td>
        <td className="border p-2">{element.listing.title}</td>
        <td className="border p-2">
          {new Date(element.startDate).toDateString()}
        </td>
        <td className="border p-2">
          {new Date(element.endDate).toDateString()}
        </td>
        <td className="border p-2">
          {element.totalPrice.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </td>
      </tr>
    );
  });

  return (
    <Container>
      <Heading
        title="All reservations"
        subtitle="All users reservations"
      ></Heading>
      <table className="w-full text-left">
        <caption className="sr-only"> All users lists</caption>
        <thead className="bg-gray-200 bordr border-black p-2">
          <tr>
            <td className="border p-2 ">Serial No</td>
            <td className="border p-2">Users Name</td>
            <td className="border p-2">Property Name</td>
            <td className="border p-2">Start Date</td>
            <td className="border p-2">End Date</td>
            <td className="border p-2">Total Price</td>
          </tr>
        </thead>
        <tbody>{allReservations}</tbody>
      </table>
    </Container>
  );
};
export default AdminReservationPage;
