// Components
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

// API
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recommendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recommendedAnime = reproduce(recommendedAnime, 8);

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
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
};

export default Page;
