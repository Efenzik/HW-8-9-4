import { save, load } from "../storage/storage.js";

const urlInput = document.querySelector("#bookmarkInput");
const addUrlBtn = document.querySelector("#addBookmarkBtn");
const urlsList = document.querySelector("#bookmarkList");

let sitesUrls = load("bookmarkData") || [];

const createUrl = (event) => {
  const listItem = document.createElement("li");

  const link = document.createElement("a");
  link.href = event;
  link.textContent = event;
  link.target = "_blank";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "DELETE!!!";
  deleteBtn.classList.add("delete");

  const removeUrl = () => {
    listItem.remove();
    sitesUrls = sitesUrls.filter((i) => i !== event);
    save("bookmarkData", sitesUrls);
  };

  deleteBtn.addEventListener("click", removeUrl);

  listItem.appendChild(link);
  listItem.appendChild(deleteBtn);
  urlsList.appendChild(listItem);
};

sitesUrls.forEach((event) => createUrl(event));

const addUrl = () => {
  const url = urlInput.value.trim();
  if (url === "") return;
  sitesUrls.push(url);
  save("bookmarkData", sitesUrls);
  createUrl(url);
  urlInput.value = "";
};

addUrlBtn.addEventListener("click", addUrl);
