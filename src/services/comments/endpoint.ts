import axiosInstance from "../axios";

export const fetchCommentsService = async (): Promise<CommentsResponse> => {
  try {
    const { data } = await axiosInstance.get<CommentsResponse>("/comments");

    return data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw new Error("Unable to fetch comments.");
  }
};
