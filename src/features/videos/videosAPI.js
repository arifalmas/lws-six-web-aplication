import axios from "../../utils/axios";

// This function help to parse number of pages
const parseLastPageNumber = (links) => {
  let numberOfPages;
  const pagesList = links.split(",");
  if (pagesList.length === 1) {
    numberOfPages = 1;
  } else {
    const lastPage = pagesList[pagesList.length - 1];
    const number = lastPage
      .split(";")[0]
      .split("&")[0]
      .split("?")[1]
      .split("=")[1];

    numberOfPages = number;
  }

  return numberOfPages;
};

export const getVideos = async (
  tags = [],
  search = "",
  authors = [],
  pagination = {}
) => {
  let queryString = `_page=${pagination.selectedPage}&_limit=${pagination.limit}`;
  const authorString = authors.map((author) => `author=${author}`).join("&");
  const tagStrign = tags.map((tag) => `tags_like=${tag}`).join("&");

  if (tags?.length > 0) queryString += "&" + tagStrign;
  if (authors?.length > 0) queryString += "&" + authorString;
  if (search !== "") queryString += `&q=${search}`;

  const response = await axios.get(`/videos/?${queryString}`);
  const totalPages = parseLastPageNumber(response.headers.link);
  response.data.totalPages = totalPages;
  return response.data;
};
