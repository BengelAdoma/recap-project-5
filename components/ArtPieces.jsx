import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieces({ artPieces }) {
  return (
    <div>
      {artPieces.map((art) => (
        <ArtPiecePreview
          key={art.slug}
          slug={art.slug}
          image={art.imageSource}
          title={art.name}
          artist={art.artist}
        />
      ))}
    </div>
  );
}
