import { useSelector } from "react-redux";
import Pagination from "./Pagination";

export default function Paginations() {
  const { videos } = useSelector((state) => state.videos);
  const { totalPages } = videos;
  let content;
  const pages = [];

  for (let i = 0; i < totalPages; i++) {
    pages.push(i);
  }

  if (pages.length === 0) content = null;

  if (pages.length > 0) {
    content = pages.map((page) => <Pagination key={page} pageNumber={page} />);
  }

  return (
    <section className="pt-12">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
        {content}
      </div>
    </section>
  );
}
