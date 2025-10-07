const form = document.getElementById('loginForm');
const messageContainer = document.getElementById('message-container');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = form.email.value;
  const password = form.password.value;

  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      messageContainer.textContent = 'Invalid email or password';
      messageContainer.style.color = 'red';
      return;
    }

    // redirect on success
    window.location.href = '/';
  } catch (err) {
    messageContainer.textContent = 'Something went wrong';
    messageContainer.style.color = 'red';
  }
});
