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
  const allReservations = reservationsList?.map((element) => {
    return (
      <tr key={element.id}>
        <td>{element.userId.indexOf("1")}</td>
        <td>{element.listingId}</td>
        <td>{new Date(element.startDate).toDateString()}</td>
        <td>{new Date(element.endDate).toDateString()}</td>
        <td>
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
            <td className="border p-2">Users Id</td>
            <td className="border p-2">Listing Id</td>
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
