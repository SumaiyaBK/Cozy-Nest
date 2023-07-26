import { SafeReservation } from "@/app/types";
import Heading from "@/app/components/Heading";
import Container from "@/app/components/Container";

interface AdminReservationPageProps {
  reservationsList: SafeReservation[];
}

const AdminReservationPage: React.FC<AdminReservationPageProps> = ({
  reservationsList,
}) => {
  const allReservations: JSX.Element[] = reservationsList.map((reservation) => (
    <tr key={reservation.id}>
      <td className="border p-2">{reservation.userId}</td>
      <td className="border p-2">
        {new Date(reservation.startDate).toLocaleDateString()}
      </td>
      <td className="border p-2">
        {new Date(reservation.endDate).toLocaleDateString()}
      </td>
      <td className="border p-2">
        {reservation.totalPrice.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </td>
    </tr>
  ));

  return (
    <Container>
      <Heading
        title="Reservation Panel"
        subtitle="All users reservation list!"
      />

      <table className="w-full text-left">
        <thead
          className="  
          bg-[#f2f2f2]
          border-solid
          border-[#000]
          p-10px"
        >
          <tr>
            <th className="border p-2">User Id</th>
            <th className="border p-2">Starting Date</th>
            <th className="border p-2">Ending Date</th>
            <th className="border p-2">Total Price</th>
          </tr>
        </thead>
        <tbody>{allReservations}</tbody>
      </table>
    </Container>
  );
};

export default AdminReservationPage;
