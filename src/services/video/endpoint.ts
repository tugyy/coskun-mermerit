import axiosInstance from "../axios";

export type VideoModel = Record<string, string>;

export const fetchVideoService = async (): Promise<VideoModel> => {
  const { data } = await axiosInstance.get<VideoModel>("/video");
  return data;
};