import Link from "next/link";
import styled from "styled-components";

interface PostCardProps {
  id: number;
  title: string;
}

const StyledPostCard = styled.article`
  margin-bottom: 1rem;
  padding: 0.5rem 1.5rem;
  background-color: whitesmoke;
`;

const PostCard: React.FC<PostCardProps> = ({ id, title }) => (
  <StyledPostCard>
    <Link href={`/posts/${id}`}>
      <a>
        <h2>{title}</h2>
      </a>
    </Link>
  </StyledPostCard>
);

export default PostCard;
