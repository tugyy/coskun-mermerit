import { NextResponse } from "next/server";
import { storage } from "@/lib/firebaseConfig";
import { getDownloadURL, ref, listAll } from "firebase/storage";

export async function GET(): Promise<NextResponse> {
  try {
    // Firebase Storage'da video dosyalarının bulunduğu klasörün referansını alın
    const videoFolderRef = ref(storage, "/video"); // Videoların bulunduğu klasörün yolu

    // Klasördeki tüm dosyaları listeleyin
    const result = await listAll(videoFolderRef);

    if (result.items.length === 0) {
      return NextResponse.json({ error: "No videos found" }, { status: 404 });
    }

    // Son yüklenen videoyu seçmek (bu örnekte ilk videoyu alıyoruz)
    const videoRef = result.items[0]; // İstediğiniz videoyu seçebilirsiniz, burada ilk videoyu alıyoruz

    // Video URL'sini alıyoruz
    const videoUrl = await getDownloadURL(videoRef);

    // URL'yi JSON olarak döndürüyoruz
    return NextResponse.json({ videoUrl }, { status: 200 });
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
