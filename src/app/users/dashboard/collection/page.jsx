import Image from "next/image";
import Link from "next/link";

// API
import prisma from "@/libs/prisma";
import { authUserSession } from "@/libs/auth-libs";

// Components
import Header from "@/components/Dashboard/Header";

const Page = async () => {
  const user = await authUserSession();
  const collection = await prisma.collection.findMany({
    where: { user_email: user.email },
  });

  return (
    <section className="mt-4 px-4 w-full">
      <Header title={"My Collection"} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {collection.map((collect, index) => {
          return (
            <Link
              key={index}
              href={`/anime/${collect.anime_mal_id}`}
              className="relative border-2 border-color-accent"
            >
              <Image
                src="/"
                alt=""
                width={350}
                height={350}
                className="w-full"
              />
              <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-accent h-16">
                <h5 className="text-xl text-center">{collect.anime_mal_id}</h5>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
