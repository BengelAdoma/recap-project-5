import ArtPiece from "@/components/ArtPiece";

export default function HomePage({artPieces, name}) {
  console.log(name)
  console.log("HOMEPAGE PAGE:", artPieces)
  return (
       <ArtPiece artPieces={artPieces} />
  );
}
