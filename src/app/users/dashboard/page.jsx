import Image from "next/image";
import Link from "next/link";

// API
import { authUserSession } from "@/libs/auth-libs";

const Page = async () => {
  const user = await authUserSession();

  return (
    <div className="mt-8 text-color-primary flex flex-col justify-center items-center min-h-screen">
      <h5 className="text-2xl font-bold mb-2">Welcome, {user?.name}</h5>
      <Image src={user?.image} alt="profile picture" width={250} height={250} />
      <div className="py-8 flex flex-wrap gap-4">
        <Link
          href="/users/dashboard/collection"
          className="bg-color-accent text-color-dark font-bold px-4 py-3 text-xl"
        >
          My Collection
        </Link>
        <Link
          href="/users/dashboard/comment"
          className="bg-color-accent text-color-dark font-bold px-4 py-3 text-xl"
        >
          My Comment
        </Link>
      </div>
    </div>
  );
};

export default Page;
