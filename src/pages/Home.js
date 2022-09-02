import VideoGrid from "../components/grid/VideoGrid";
import Tags from "../components/tags/Tags";
import Paginations from "../components/ui/Paginations";

export default function Home() {
  return (
    <>
      <Tags />
      <VideoGrid />
      <Paginations />
    </>
  );
}
