import { db } from "@/lib/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  try {
    const commentsCollection = collection(db, "comments");
    const snapshot = await getDocs(commentsCollection);
    const comments = snapshot.docs.map((doc) => {
      const data = doc.data();

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { ipAddress, approved, ...filteredData } = data;

      if (filteredData.createdAt && filteredData.createdAt.seconds) {
        filteredData.createdAt = new Date(
          filteredData.createdAt.seconds * 1000
        );
      }

      return filteredData;
    });

    if (!comments.length) {
      return NextResponse.json({ error: "No comments found" }, { status: 404 });
    }

    return NextResponse.json({ comments }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error: "Hata!",
      },
      { status: 500 }
    );
  }
}
