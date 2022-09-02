import { updateVideoLikes, updateVideoUnLikes, getVideo } from "./videoAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  video: {},
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk
export const fetchVideo = createAsyncThunk("video/fetchVideo", async (id) => {
  const video = await getVideo(id);
  return video;
});

export const fetchUpdateVideoLike = createAsyncThunk(
  "video/fetchLikeUnlike",
  async ({ likes, videoId }) => {
    const video = await updateVideoLikes({ likes, videoId });
    return video;
  }
);

export const fetchUpdateVideoUnLike = createAsyncThunk(
  "video/fetchUpdateVideoLikes",
  async ({ unlikes, videoId }) => {
    const video = await updateVideoUnLikes({ unlikes, videoId });
    return video;
  }
);

const videoSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideo.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.video = action.payload;
      })
      .addCase(fetchVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.video = {};
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(fetchUpdateVideoLike.fulfilled, (state, action) => {
        state.isLoading = false;
        state.video.likes = action.payload.likes;
      })
      .addCase(fetchUpdateVideoUnLike.fulfilled, (state, action) => {
        state.isLoading = false;
        state.video.unlikes = action.payload.unlikes;
      });
  },
});

export default videoSlice.reducer;
