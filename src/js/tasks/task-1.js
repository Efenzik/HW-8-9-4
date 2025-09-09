const bookmarkInput = document.querySelector("#bookmarkInput");
const addBookmarkBtn = document.querySelector("#addBookmarkBtn");
const bookmarkList = document.querySelector("#bookmarkList");

const handleAddingBookmark = () => {
  const inputValue = bookmarkInput.value.trim();
  if (inputValue === "") return;
  const newItem = document.createElement("li");
  const newLink = document.createElement("a");
  newLink.href = inputValue;
  newLink.textContent = inputValue;
  const newBtn = document.createElement("button");
  newBtn.textContent = "DELETE!!!";
  newBtn.classList.add("delete");
  const handleRemove = (event) => {
    newItem.remove();

    const bookmarkData = load("bookmarkData");
    save("bookmarkData", bookmarkData);
  };
  newBtn.addEventListener("click", handleRemove);
  newItem.appendChild(newLink);
  newItem.appendChild(newBtn);
  bookmarkList.append(newItem);
};
addBookmarkBtn.addEventListener("click", handleAddingBookmark);
