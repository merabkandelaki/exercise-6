const API_URL = "https://randomuser.me/api/?results=10";
const resetButton = document.getElementById("reset");
const loadingMessage = document.getElementById("userContainer");
const title = document.getElementById("title");

export async function fetchUsers() {
  resetButton.style.display = "block";
  loadingMessage.textContent = "Loading ...";
  loadingMessage.style.fontSize = "18px";
  loadingMessage.style.color = "white";
  loadingMessage.style.fontWeight = "bold";
  title.style.display = "none";
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    const userContainer = document.getElementById("userContainer");
    userContainer.innerHTML = "";

    data.results.forEach((user) => {
      const userCard = document.createElement("div");
      userCard.setAttribute("class", "user-card");

      const userPhoto = document.createElement("img");
      userPhoto.src = user?.picture?.medium;
      userPhoto.alt = "User Photo";
      userPhoto.setAttribute("class", "user-photo");

      const userInfo = document.createElement("div");
      userInfo.setAttribute("class", "user-info");

      const email = document.createElement("p");
      email.textContent = `${user?.email}`;

      const city = document.createElement("p");
      city.textContent = `${user?.location?.city}`;

      const fullName = `${user?.name?.title} ${user?.name?.first} ${user?.name?.last}`;
      const name = document.createElement("p");
      name.textContent = `${fullName}`;

      userInfo.appendChild(name);
      userInfo.appendChild(email);
      userInfo.appendChild(city);

      userCard.appendChild(userPhoto);
      userCard.appendChild(userInfo);

      userContainer.appendChild(userCard);

      console.log(data);
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    loadingMessage.textContent =
      "Error fetching users. Please try again later.";
  }
}

export function clearResult() {
  userContainer.innerHTML = "";
  resetButton.style.display = "none";
  title.style.display = "block";
}
