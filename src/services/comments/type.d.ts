interface Comment {
  color: string;
  createdAt: string;
  author: string;
  text: string;
  rating: number;
}

interface CommentsResponse {
  comments: Comment[];
}
