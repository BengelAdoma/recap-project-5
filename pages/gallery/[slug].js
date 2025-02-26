import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceDetails";

export default function ArtPiece({artPieces}) {
  const router = useRouter();
  const { slug } = router.query;
console.log("{artPieces}",artPieces)
const artPiece = artPieces.find((artPiece) => artPiece.slug === slug);

return   <ArtPieceDetails artPiece={artPiece} />;
}