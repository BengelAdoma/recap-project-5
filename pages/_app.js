import { useEffect, useState } from "react";
import GlobalStyle from "../styles";
import Navigation from "@/components/navigation";
// import GalleryPage from "@/components/GalleryPage";


export default function App({ Component, pageProps }) {

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
    <>
      <GlobalStyle/>
      <Component {...pageProps} artPieces={artPieces}/>
      <Navigation/>
    </>
  );
}
