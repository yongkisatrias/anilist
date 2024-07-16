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
  const topAnime = await getAnimeResponse("top/anime", "limit=16");
  let recommendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recommendedAnime = reproduce(recommendedAnime, 16);

  return (
    <>
      {/* Popular Anime */}
      <section className="md:py-4 md:px-10 p-0">
        <Header title="Most Popular" linkTitle="See More" linkHref="/popular" />
        <AnimeList api={topAnime} />
      </section>
      {/* Recommendation */}
      <section className="md:py-4 md:px-10 p-0">
        <Header title="Recommendation" />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
};

export default Page;
