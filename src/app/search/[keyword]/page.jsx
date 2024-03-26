// Components
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

// API
import { getAnimeResponse } from "@/libs/api-libs";

const Page = async ({ params }) => {
  const keyword = params.keyword;
  const decodedKeyword = decodeURI(keyword);

  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`);

  return (
    <>
      <section className="md:py-4 md:px-10 p-0">
        <Header title={`Search for ${decodedKeyword}..`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
