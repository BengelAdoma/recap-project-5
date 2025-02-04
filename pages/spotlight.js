import ArtPiecePreview from '@/components/ArtPiecePreview'
import React, { useEffect, useState } from 'react'

export default function SpotlightPage ({artPieces, name}) {
    const [randomArtPiece, setRandomArtPiece] = useState()
    console.log(name)
    console.log("SPOTLIGHT PAGE:", artPieces)
    useEffect(()=> {
        if (artPieces && artPieces.length > 0) {
            const randomIndex = Math.floor(Math.random() * artPieces.length);
            setRandomArtPiece(artPieces[randomIndex]);
          }
        }, [artPieces]);
      
       
        if (!randomArtPiece) return <p>Loading...</p>;
      
  
  return (
  <ArtPiecePreview
          key={randomArtPiece.slug}
          image={randomArtPiece.imageSource}
          title={randomArtPiece.name}
          artist={randomArtPiece.artist}
        />
  )
}

