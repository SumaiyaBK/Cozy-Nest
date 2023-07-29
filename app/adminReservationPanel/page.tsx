import EmptyState from "../components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";
import getCurrentUser from "@/app/actions/getCurrentUser";
import AdminReservationPage from "./AdminReservationPage";
import getUserReservationList from "../actions/getUserReservation";
import Admin from "../admin/page";
import getUsersList from "../actions/getUsers";

const Page = async () => {
  const reservationsList = await getUserReservationList();
  const currentUser = await getCurrentUser();
  const usersList = await getUsersList();

  if (!Admin) {
    return (
      <ClientOnly>
        <EmptyState
          title="No user list"
          subtitle="Only admin can view the page"
        />
      </ClientOnly>
    );
  }
  //  const users = await getUsersList({'userId'});
  // return <AdminPage currentUser={currentUser} usersList={userList} />;
  return (
    <ClientOnly>
      <AdminReservationPage
        //@ts-ignore
        reservationsList={reservationsList}
        currentUser={currentUser}
        usersList={usersList}
      />
    </ClientOnly>
  );
};

export default Page;
