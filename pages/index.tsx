import type { NextPage } from "next";
import NextHeader from "../components/NextHeader";
import { getPosts } from "../utils/fetchData";
import PostCard from "../components/PostCard";
import { PostType } from "../interfaces";

interface HomePageProps {
  posts: PostType[];
}

const Home: NextPage<HomePageProps> = ({ posts }) => (
  <div>
    <NextHeader title="Behold" description="this is my blog" />
    {posts && posts.map((post) => <PostCard key={post.id} {...post} />)}
  </div>
);

export default Home;

export const getServerSideProps = async () => {
  const posts: PostType[] = await getPosts();

  return {
    props: {
      posts,
    },
  };
};
