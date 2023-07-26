import getUsersList from "../actions/getUsers";
import EmptyState from "../components/EmptyState";
import { SafeUser } from "../types";
import ClientOnly from "@/app/components/ClientOnly";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { userInfo } from "os";

const AdminReservationPage = async () => {
  const currentUser = await getCurrentUser();
  const userList = await getUsersList();

  if (!AdminReservationPage) {
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
      {/* <AdminReservationPage currentUser={currentUser} usersList={userList} /> */}
    </ClientOnly>
  );
};

export default AdminReservationPage;
