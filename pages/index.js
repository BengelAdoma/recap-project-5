import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";

export default function HomePage({artPieces}) {   
  return (
  <>
    <Spotlight artPieces={artPieces}/>
    <h1>GALLERY</h1>
     <ArtPieces artPieces={artPieces} />
     </>
  );
}
