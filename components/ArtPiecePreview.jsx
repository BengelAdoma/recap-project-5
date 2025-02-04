import Image from "next/image";
import Link from "next/link";

export default function ArtPiecePreview({ image, title, artist, slug }) {
    return (

        <Link href={`gallery/${slug}`} key={slug}>
          <Image src={image} alt={title} width="300" height={"300"} />
          <h2>{title}</h2>
          <p>{artist}</p>
        </Link>

    );
  }
  