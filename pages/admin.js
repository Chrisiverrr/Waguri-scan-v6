// AdminPanel code from canvas
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function AdminPanel() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(\`Manga submitted: \${title}\nImage: \${image}\`);
  };

  return (
    <>
      <Navbar />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Admin Panel - Upload Manga</h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          <input className="w-full p-2 border rounded" type="text" placeholder="Manga Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          <input className="w-full p-2 border rounded" type="url" placeholder="Cover Image URL" value={image} onChange={(e) => setImage(e.target.value)} required />
          <button className="bg-waguri text-white px-4 py-2 rounded shadow" type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
