import { useEffect, useState } from "react";
import ArtPiece from "./ArtPiece";

export default function GalleryPage() {
  const [artPieces, setArtPieces] = useState([]);

  useEffect(() => {
    async function fetchArt() {
      const response = await fetch("https://example-apis.vercel.app/api/art");
      const data = await response.json();
      setArtPieces(data);
    }
    fetchArt();
  }, []);

  return (
    <div>
      <h1>Gallery</h1>
      <ArtPiece artPieces={artPieces} />
    </div>
  );
}
