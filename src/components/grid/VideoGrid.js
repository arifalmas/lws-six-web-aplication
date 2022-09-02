import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../features/videos/videosSlice";
import Loading from "../ui/Loading";
import VideoGridItem from "./VideoGridItem";
import ClearFilter from "../ui/ClearFilter";
import FilterBy from "../ui/FilterBy";

export default function VideGrid() {
  const dispatch = useDispatch();
  const { videos, isLoading, isError, error } = useSelector(
    (state) => state.videos
  );

  const { tags, search, authors, pagination } = useSelector(
    (state) => state.filter
  );

  useEffect(() => {
    dispatch(fetchVideos({ tags, search, authors, pagination }));
  }, [dispatch, tags, search, authors, pagination]);

  // decide what to render
  let content;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isError && !isLoading && videos?.length === 0) {
    content = <div className="col-span-12">No videos found!</div>;
  }

  if (!isError && !isLoading && videos?.length > 0) {
    content = videos.map((video) => (
      <VideoGridItem key={video.id} video={video} />
    ));
  }

  return (
    <section className="pt-12">
      <section className="pt-0">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-5 py-5 lg:px-0">
          <FilterBy />
          <ClearFilter />
        </div>
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {content}
        </div>
      </section>
    </section>
  );
}
