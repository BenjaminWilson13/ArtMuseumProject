import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./componets/GalleryNavigation";

function App() {
  return (
    <GalleryNavigation galleries = {harvardArt.records}/>
  );
}

export default App;
