import Image from "next/image";
import Header from "./components/Header";
import Video from "./components/Video";
import About from "./components/About";

export default function Home() {

  return (
    <div>
      <Header/>
      <main>
        <Video/>
        <About/>
      </main>
    </div>
  );
}
