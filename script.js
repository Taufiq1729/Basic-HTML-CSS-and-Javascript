function showMessage() {
    alert("Hello! 🎉 You just clicked the button!");
  }
  
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }
  
  function greetUser() {
    const name = document.getElementById("nameInput").value;
    const messageElement = document.getElementById("greetingMessage");
    
    if (name.trim() === "") {
      messageElement.textContent = "Please enter your name!";
    } else {
      messageElement.textContent = `Hello, ${name}! 👋 Welcome to my webpage.`;
    }
  }