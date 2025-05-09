import { NextResponse } from "next/server";
import { storage } from "@/lib/firebaseConfig";
import { listAll, ref, getDownloadURL } from "firebase/storage";

export async function GET(): Promise<NextResponse> {
  try {
    // Reference to the 'models' folder without needing the full URL
    const rootRef = ref(storage, "models");
    const photosByFolder: { [key: string]: string[] } = {};

    // List all folders under the 'models' directory
    const listResult = await listAll(rootRef);

    // Extract the folder prefixes (subdirectories)
    const folders = listResult.prefixes;

    // Loop through the folders and fetch their contents
    for (const folder of folders) {
      const folderRef = ref(storage, folder.fullPath);
      const folderListResult = await listAll(folderRef);

      // Fetch URLs for all the items in the folder
      const folderPhotosPromises = folderListResult.items.map(async (item) => {
        return getDownloadURL(item);
      });

      photosByFolder[folder.name] = await Promise.all(folderPhotosPromises);
    }

    return NextResponse.json(photosByFolder, { status: 200 });
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
