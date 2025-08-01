// Manga info page with dummy chapters
import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";

export default function MangaInfo() {
  const router = useRouter();
  const { slug } = router.query;
  const chapters = Array.from({ length: 5 }, (_, i) => ({
    number: i + 1,
    title: `Chapter ${i + 1}`,
  }));

  return (
    <>
      <Navbar />
      <div className="p-4 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold capitalize mb-4">{slug?.replace(/-/g, " ")}</h1>
        <div className="space-y-2">
          {chapters.map((ch, index) => (
            <Link key={index} href={`/${slug}/${ch.number}`}>
              <div className="bg-white dark:bg-gray-800 p-2 rounded shadow cursor-pointer">
                📖 Chapter {ch.number}: {ch.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
    }
    
