document
  .getElementById("loginForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const loginData = {
      username: username,
      password: password,
    };

    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (data.token) {
        console.log("Login successful", data);
        // Save the response data to localStorage
        localStorage.setItem("userDetails", JSON.stringify(data));
        // Redirect to another page
        window.location.href = "home.html";
      } else {
        console.log("Login failed", data);
        // Handle login failure
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  });
