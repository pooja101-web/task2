const button = document.getElementById("searchBtn");

button.addEventListener("click", async function () {

    const username = document.getElementById("username").value;
    const result = document.getElementById("result");

    if (username === "") {
        result.innerHTML = "Please enter username";
        return;
    }

    try {

        const response = await fetch(`https://api.github.com/users/${username}`);

        if (!response.ok) {
            throw new Error("User not found");
        }

        const data = await response.json();

        result.innerHTML = `
            <img src="${data.avatar_url}" width="120"><br>
            <h2>${data.name || "No name available"}</h2>
            <p>${data.bio || "No bio available"}</p>
            <p>Followers: ${data.followers}</p>
            <p>Following: ${data.following}</p>
            <p>Repositories: ${data.public_repos}</p>
        `;

    } catch (error) {

        result.innerHTML = "User not found";

    }

});