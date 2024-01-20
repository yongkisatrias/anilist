// Components
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

// API
import { getAnimeResponse } from "./libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");

  return (
    <>
      {/* Popular Anime */}
      <section>
        <Header title="Most Popular" linkTitle="See More" linkHref="/popular" />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Page;
