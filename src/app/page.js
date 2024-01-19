// Components
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const topAnime = await response.json();

  return (
    <>
      {/* Popular Anime */}
      <section>
        <Header title="Most Popular" linkTitle="See More" linkHref="/popular" />
        <AnimeList api={topAnime} />
      </section>
      {/* Latest Anime */}
      <section>
        <Header title="Latest Anime" linkTitle="See More" linkHref="/new" />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Page;
