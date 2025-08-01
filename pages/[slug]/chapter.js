// ChapterPage code from canvas
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

export default function ChapterPage() {
  const router = useRouter();
  const { slug, chapter } = router.query;
  const [pages, setPages] = useState([]);

  useEffect(() => {
    if (!slug || !chapter) return;
    const dummyPages = Array.from({ length: 5 }, (_, i) => \`https://cdn.asuratoon.com/chapters/\${slug}/\${chapter}/\${i + 1}.jpg\`);
    setPages(dummyPages);
  }, [slug, chapter]);

  return (
    <>
      <Navbar />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">{slug.replace(/-/g, ' ')} - Chapter {chapter}</h2>
        <div className="space-y-4">
          {pages.map((src, i) => (
            <img key={i} src={src} alt={\`Page \${i + 1}\`} className="mx-auto w-full max-w-xl shadow rounded" />
          ))}
        </div>
      </div>
    </>
  );
}
