import Link from "next/link";

// Components
import InputSearch from "./InputSearch";

const Index = () => {
  return (
    <header className="bg-indigo-500">
      <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
        <Link href="/" className="font-bold text-white text-2xl">
          AniList
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Index;
