import axiosInstance from "../axios";

export type VideoModel = Record<string, string[]>;

export const fetchModelPhotosService = async (): Promise<VideoModel> => {
  const { data } = await axiosInstance.get<VideoModel>("/models");
  return data;
};