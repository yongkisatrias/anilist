import Link from "next/link";

// Components
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";

const Index = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex md:flex-row flex-col justify-between md:items-center md:py-4 md:px-10 p-4 gap-2">
        <Link href="/" className="font-bold text-2xl">
          AniList
        </Link>
        <InputSearch />
        <UserActionButton />
      </div>
    </header>
  );
};

export default Index;
