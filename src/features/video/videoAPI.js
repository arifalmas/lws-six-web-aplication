import axios from "../../utils/axios";

export const getVideo = async (id) => {
  const response = await axios.get(`/videos/${id}`);
  return response.data;
};

export const updateVideoLikes = async ({ likes, videoId }) => {
  const response = await axios.patch(`/videos/${videoId}`, {
    likes: likes + 1,
  });
  return response.data;
};

export const updateVideoUnLikes = async ({ unlikes, videoId }) => {
  const response = await axios.patch(`/videos/${videoId}`, {
    unlikes: unlikes + 1,
  });
  return response.data;
};
