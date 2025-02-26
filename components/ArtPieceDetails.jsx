import Image from "next/image";
import Link from "next/link";

export default function ArtPieceDetails({ artPiece }) {
  if (!artPiece) {
    return <p>Art Piece not found.</p>;
  }

  return (
    <>
      <Link href="/">Back to Gallery</Link>
      <h1>Title: {artPiece.name}</h1>
      <h3>Artist: {artPiece.artist}</h3>
      <Image
        src={artPiece.imageSource}
        alt={artPiece.name }
        width={800}
        height={600}
      />
      <p>{artPiece.description}</p>
      <h3>Year: {artPiece.year}</h3>
      <h3>Genre: {artPiece.genre}</h3>
    </>
  );
}