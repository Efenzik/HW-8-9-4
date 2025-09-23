import { save, load } from "../storage/storage.js";
const formData = document.querySelector(".form");
const userInfo = load("userSettings");
if (userInfo) {
  formData.username.value = userInfo.username;
  formData.password.value = userInfo.password;
}
const handleSaveData = (event) => {
  event.preventDefault();
  const userInfo = {
    username: event.currentTarget.username.value,
    password: event.currentTarget.password.value,
  };
  save("userSettings", userInfo);
};
formData.addEventListener("submit", handleSaveData);
