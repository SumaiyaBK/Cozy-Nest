import prisma from "@/app/libs/prismadb";

export default async function getUserReservationList() {
  try {
    let query: any = {};

    const dbReservationList = await prisma.reservation.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
    });

    // Remove the unnecessary toISOString() call for createdAt
    const reservationsList = dbReservationList.map((reservation) => ({
      ...reservation,
    }));

    return reservationsList;
  } catch (error: any) {
    throw new Error(error);
  }
}
