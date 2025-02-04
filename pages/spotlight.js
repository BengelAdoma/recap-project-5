import ArtPiecePreview from '@/components/ArtPiecePreview'
import React, { useEffect, useState } from 'react'

export default function SpotlightPage ({artPieces, name}) {
    const [randomArtPiece, setRandomArtPiece] = useState()
    console.log(name)
    console.log("SPOTLIGHT PAGE:", artPieces)
    useEffect(()=> {
// generate random number betyween 0 and artPieces.length
// setRandomArtPiece to be artPieces[yourGeneratedNum]
    }, [])
  return (
  <ArtPiecePreview
          key={randomArtPiece.slug}
          image={randomArtPiece.imageSource}
          title={randomArtPiece.name}
          artist={randomArtPiece.artist}
        />
  )
}

