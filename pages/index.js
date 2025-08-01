// Homepage - List of manga (fetched from sample JSON)
import Link from "next/link";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

export default function Home() {
  const [mangaList, setMangaList] = useState([]);

  useEffect(() => {
    // In real app, fetch from API or GitHub
    fetch("https://raw.githubusercontent.com/keiyoushi/extensions/repo/index.min.json")
      .then((res) => res.json())
      .then((data) => setMangaList(data.slice(0, 10))) // Show top 10 for now
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {mangaList.map((manga, i) => (
          <Link key={i} href={`/${manga.title.replace(/\s+/g, "-").toLowerCase()}`}>
            <div className="bg-white dark:bg-gray-800 rounded shadow p-2 text-center cursor-pointer">
              <img src={manga.image} alt={manga.title} className="h-48 w-full object-cover rounded" />
              <p className="mt-2 font-semibold">{manga.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
