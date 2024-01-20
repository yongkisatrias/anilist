// Components
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

// API
import { getAnimeResponse, getNestedAnimeResponse } from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recommendationAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recommendationAnime = { data: recommendationAnime.slice(0, 8) };

  return (
    <>
      {/* Popular Anime */}
      <section>
        <Header title="Most Popular" linkTitle="See More" linkHref="/popular" />
        <AnimeList api={topAnime} />
      </section>
      {/* Recommendation */}
      <section>
        <Header title="Recommendation" />
        <AnimeList api={recommendationAnime} />
      </section>
    </>
  );
};

export default Page;
