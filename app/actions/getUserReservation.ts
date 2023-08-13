import prisma from "@/app/libs/prismadb";

export default async function getUserReservationList() {
  try {
    let query: any = {};
    const dbReservationListWithUserInfo = await prisma.reservation.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        listing: true,
        User: {
          select: {
            name: true, // Include the "name" field from the User model
          },
        },
      },
    });

    // Remove the unnecessary toISOString() call for createdAt
    const reservationsList = dbReservationListWithUserInfo.map(
      (reservation) => ({
        ...reservation,
      })
    );

    return reservationsList;
  } catch (error: any) {
    throw new Error(error);
  }
}
