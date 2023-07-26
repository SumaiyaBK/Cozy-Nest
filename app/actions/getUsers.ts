import prisma from "@/app/libs/prismadb";
import { SafeUser } from "../types"; // Assuming you have a User type defined in "../types"

export default async function getUsersList(): Promise<SafeUser[]> {
  try {
    const query: any = {}; // Modify this to define your filtering conditions if needed

    const dbUsers = await prisma.user.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
    });

    const usersList: SafeUser[] = dbUsers.map((user) => ({
      ...user,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
      emailVerified: user.emailVerified?.toISOString() || null,
    }));

    return usersList;
  } catch (error: any) {
    throw new Error("Failed to fetch users list: " + error.message);
  }
}
