import "./App.css";
import Blog from "./Components/Blog/Blog";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";
function App() {
  return (
    <>
      <Header />
      <div className="md:flex container mx-auto">
        <Blog />
        <Bookmarks />
      </div>
    </>
  );
}

export default App;
