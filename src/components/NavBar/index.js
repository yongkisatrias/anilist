import Link from "next/link";

// Components
import InputSearch from "./InputSearch";

const Index = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
        <Link href="/" className="font-bold text-2xl">
          AniList
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Index;
