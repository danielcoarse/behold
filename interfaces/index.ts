export interface PostType {
  id: number;
  title: string;
  body: string;
  comments: CommentType[];
}

export interface CommentType {
  id: number;
  postId: number;
  body: string;
}
