import React from "react";
import Link from "next/link";

// API
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";

// Components
import Header from "@/components/Dashboard/Header";

const Page = async () => {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({
    where: { user_email: user.email },
  });

  return (
    <section className="mt-4 px-4 w-full min-h-screen">
      <Header title={"My Collection"} />
      <div className="grid grid-cols-1 py-2 gap-4">
        {comments.map((comment) => {
          return (
            <Link
              href={`/anime/${comment.anime_mal_id}`}
              key={comment.id}
              className="bg-color-primary text-color-dark p-4"
            >
              <p>{comment.anime_title}</p>
              <p>{comment.comment}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
