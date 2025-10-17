document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname.toLowerCase();

  // Match /login, /login/, /login/index.html
    if (
    path === "/login" ||
    path === "/login/" ||
    path.endsWith("/login/index.html")
    ) {
    renderLoginForm();
    }
});

function renderLoginForm() {
    const main = document.querySelector("main") || document.body;

  // Render the login form
    main.innerHTML = `
    <section class="max-w-md mx-auto mt-8 px-4">
    <h1 class="text-3xl font-bold mb-4 text-gray-800">Login</h1>
    <div id="message-container" class="mb-4"></div>
        <form
        id="loginForm"
        class="bg-white shadow-md rounded-lg p-8"
        novalidate
        >
        <fieldset>
            <div class="mb-4">
            <input
                name="email"
                type="email"
                placeholder="Email"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            </div>
            <div class="mb-6">
            <input
                name="password"
                type="password"
                placeholder="Password"
                required
                minlength="8"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            </div>
            <button
            type="submit"
            class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
            >
            Login
            </button>
        </fieldset>
        </form>
    </section>
    `;

const form = document.getElementById("loginForm");
const messageContainer = document.getElementById("message-container");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (!email || !password) {
    messageContainer.textContent = "Please enter both email and password";
    messageContainer.style.color = "red";
    return;
    }

    try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
        messageContainer.textContent = "Invalid email or password";
        messageContainer.style.color = "red";
        return;
    }

      // Redirect to home on success
    window.location.href = "/";
    } catch (err) {
    messageContainer.textContent =
        "Something went wrong. Please try again later.";
    messageContainer.style.color = "red";
    console.error(err);
    }
    });
}
