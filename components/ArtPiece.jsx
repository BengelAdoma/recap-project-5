import ArtPiecePreview from "./ArtPiecePreview";


export default function ArtPiece({ artPieces }) {
  return (
    <div>
      {artPieces.map((art) => (
        <ArtPiecePreview
          key={art.slug}
          image={art.imageSource}
          title={art.name}
          artist={art.artist}
        />
      ))}
    </div>
  );
}
