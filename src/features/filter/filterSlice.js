const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  tags: [],
  search: "",
  authors: [],
  pagination: {
    selectedPage: 1,
    start: 0,
    end: 0,
    limit: 4,
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
    },
    tagRemoved: (state, action) => {
      const indexToRemove = state.tags.indexOf(action.payload);

      if (indexToRemove !== -1) {
        state.tags.splice(indexToRemove, 1);
      }
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
    authorSelected: (state, action) => {
      const indexToRemove = state.authors.indexOf(action.payload);
      if (indexToRemove !== -1) {
        state.authors.splice(indexToRemove, 1);
      } else {
        state.authors.push(action.payload);
      }
    },
    pageSelected: (state, action) => {
      state.pagination.selectedPage = action.payload;
    },
    clearFilter: (state) => {
      state.authors = [];
      state.search = "";
      state.tags = [];
    },
  },
});

export default filterSlice.reducer;
export const {
  tagSelected,
  tagRemoved,
  searched,
  authorSelected,
  clearFilter,
  pageSelected,
} = filterSlice.actions;
