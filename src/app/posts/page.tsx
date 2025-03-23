import React from "react";
import FadeIn from "../components/ui/animations/FadeIn";

class Post {
  constructor(
    public id: number,
    public title: string,
    public content: string
  ) {}
}

export default function page() {
  const posts: Post[] = [
    {
      id: 1,
      title: "test title",
      content: "test content",
    },
    {
      id: 2,
      title: "test title",
      content: "test content",
    },
    {
      id: 3,
      title: "test title",
      content: "test content",
    },
  ];
  return (
    <div className="text-black flex flex-col w-full h-screen items-center snap-mandatory overflow-y-scroll snap-y ">
      {posts.map((post, index) => (
        <FadeIn key={index}>
          <div
            key={post.id}
            className="flex flex-col gap-2 m-2 text-gray-500 min-h-svh justify-center snap-start snap-mandatory items-center "
          >
            <section className="flex flex-row gap-2 p-4 bg-gray-200  dark:bg-gray-800 dark:text-white w-full bg-white/30 backdrop-blur-md rounded-2xl shadow-lg snap-mandatory">
              <div className="text-gray-300 ml-4">#{post.id}</div>
              <div>
                <h1> {post.title}</h1>
              </div>
            </section>
            <section className="flex flex-row bg-gray-200 dark:bg-gray-800 dark:text-white p-2  min-w-[600px] min-h-96 bg-white/30 backdrop-blur-md rounded-2xl shadow-lg ">
              <pre></pre>
              <div>{post.content}</div>
            </section>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
