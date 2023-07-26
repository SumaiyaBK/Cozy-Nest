import getUsersList from "../actions/getUsers";
import EmptyState from "../components/EmptyState";
import { SafeUser } from "../types";
import AdminPage from "./AdminPage";
import ClientOnly from "@/app/components/ClientOnly";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { userInfo } from "os";

const Admin = async () => {
  const currentUser = await getCurrentUser();
  const userList = await getUsersList();

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
      <AdminPage currentUser={currentUser} usersList={userList} />
    </ClientOnly>
  );
};

export default Admin;
