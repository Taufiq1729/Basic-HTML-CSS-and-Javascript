// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const themeToggle = document.getElementById('themeToggle');
const contactForm = document.getElementById('contactForm');
const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');
const filterBtns = document.querySelectorAll('.filter-btn');
const clearCompletedBtn = document.getElementById('clearCompleted');
const taskCount = document.getElementById('taskCount');
const imageUpload = document.getElementById('imageUpload');
const galleryGrid = document.getElementById('galleryGrid');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.querySelector('.close');

// Quiz Elements
const quizStart = document.getElementById('quizStart');
const quizContent = document.getElementById('quizContent');
const quizResults = document.getElementById('quizResults');
const startQuizBtn = document.getElementById('startQuizBtn');
const questionText = document.getElementById('questionText');
const questionOptions = document.getElementById('questionOptions');
const currentQuestionSpan = document.getElementById('currentQuestion');
const totalQuestionsSpan = document.getElementById('totalQuestions');
const timerSpan = document.getElementById('timer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const finalScoreSpan = document.getElementById('finalScore');
const correctAnswersSpan = document.getElementById('correctAnswers');
const totalAnswersSpan = document.getElementById('totalAnswers');
const timeTakenSpan = document.getElementById('timeTaken');
const scoreMessageSpan = document.getElementById('scoreMessage');
const retakeQuizBtn = document.getElementById('retakeQuizBtn');

// Weather Elements
const cityInput = document.getElementById('cityInput');
const searchWeatherBtn = document.getElementById('searchWeatherBtn');
const weatherResult = document.getElementById('weatherResult');
const weatherError = document.getElementById('weatherError');
const weatherLoading = document.getElementById('weatherLoading');
const weatherCity = document.getElementById('weatherCity');
const weatherDate = document.getElementById('weatherDate');
const weatherIcon = document.getElementById('weatherIcon');
const weatherTemperature = document.getElementById('weatherTemperature');
const weatherDescription = document.getElementById('weatherDescription');
const weatherFeelsLike = document.getElementById('weatherFeelsLike');
const weatherHumidity = document.getElementById('weatherHumidity');
const weatherWind = document.getElementById('weatherWind');
const weatherVisibility = document.getElementById('weatherVisibility');
const errorMessage = document.getElementById('errorMessage');

// Carousel Elements
const carouselTrack = document.getElementById('carouselTrack');
const carouselPrev = document.getElementById('carouselPrev');
const carouselNext = document.getElementById('carouselNext');
const carouselIndicators = document.getElementById('carouselIndicators');
const autoPlayBtn = document.getElementById('autoPlayBtn');
const fullscreenBtn = document.getElementById('fullscreenBtn');

// Global Variables
let todos = JSON.parse(localStorage.getItem('todos')) || [];
let currentFilter = 'all';

// Quiz Variables
let currentQuestionIndex = 0;
let userAnswers = [];
let quizTimer;
let startTime;
let isQuizActive = false;

// Carousel Variables
let currentSlide = 0;
let autoPlayInterval;
let isAutoPlaying = false;

// Quiz Questions
const quizQuestions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Home Tool Markup Language",
            "Hyperlink and Text Markup Language"
        ],
        correct: 0
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        options: [
            "text-color",
            "color",
            "font-color",
            "text-style"
        ],
        correct: 1
    },
    {
        question: "How do you declare a JavaScript variable?",
        options: [
            "v carName;",
            "variable carName;",
            "var carName;",
            "varname carName;"
        ],
        correct: 2
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        options: [
            "<script>",
            "<style>",
            "<css>",
            "<link>"
        ],
        correct: 1
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        options: [
            "var colors = (1:'red', 2:'green', 3:'blue')",
            "var colors = 'red', 'green', 'blue'",
            "var colors = ['red', 'green', 'blue']",
            "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"
        ],
        correct: 2
    },
    {
        question: "Which property is used to change the background color?",
        options: [
            "background-color",
            "bgcolor",
            "color",
            "background"
        ],
        correct: 0
    },
    {
        question: "How do you create a function in JavaScript?",
        options: [
            "function myFunction()",
            "function:myFunction()",
            "function = myFunction()",
            "function myFunction"
        ],
        correct: 0
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        options: [
            "class",
            "style",
            "font",
            "styles"
        ],
        correct: 1
    },
    {
        question: "How do you add a comment in JavaScript?",
        options: [
            "<!--This is a comment-->",
            "//This is a comment",
            "/*This is a comment*/",
            "Both B and C"
        ],
        correct: 3
    },
    {
        question: "Which method is used to remove the last element from an array?",
        options: [
            "pop()",
            "push()",
            "shift()",
            "unshift()"
        ],
        correct: 0
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    setupThemeToggle();
    setupFormValidation();
    setupTodoList();
    setupImageGallery();
    setupSmoothScrolling();
    setupQuiz();
    setupWeather();
    setupCarousel();
    loadTodos();
    updateTaskCount();
}

// Navigation Setup
function setupNavigation() {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Theme Toggle
function setupThemeToggle() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        
        if (isDark) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'light');
        }
    });
}

// Quiz Setup
function setupQuiz() {
    startQuizBtn.addEventListener('click', startQuiz);
    prevBtn.addEventListener('click', previousQuestion);
    nextBtn.addEventListener('click', nextQuestion);
    retakeQuizBtn.addEventListener('click', resetQuiz);
    
    totalQuestionsSpan.textContent = quizQuestions.length;
}

function startQuiz() {
    isQuizActive = true;
    currentQuestionIndex = 0;
    userAnswers = new Array(quizQuestions.length).fill(null);
    startTime = Date.now();
    
    quizStart.style.display = 'none';
    quizContent.style.display = 'block';
    quizResults.style.display = 'none';
    
    displayQuestion();
    startTimer();
}

function displayQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    questionText.textContent = question.question;
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    
    questionOptions.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'quiz-option';
        optionElement.textContent = option;
        
        if (userAnswers[currentQuestionIndex] === index) {
            optionElement.classList.add('selected');
        }
        
        optionElement.addEventListener('click', () => selectOption(index));
        questionOptions.appendChild(optionElement);
    });
    
    updateNavigationButtons();
}

function selectOption(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;
    
    // Remove previous selection
    questionOptions.querySelectorAll('.quiz-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Add selection to clicked option
    questionOptions.children[optionIndex].classList.add('selected');
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        finishQuiz();
    }
}

function updateNavigationButtons() {
    prevBtn.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === quizQuestions.length - 1) {
        nextBtn.innerHTML = 'Finish <i class="fas fa-check"></i>';
    } else {
        nextBtn.innerHTML = 'Next <i class="fas fa-arrow-right"></i>';
    }
}

function startTimer() {
    let timeLeft = 60;
    timerSpan.textContent = timeLeft;
    
    quizTimer = setInterval(() => {
        timeLeft--;
        timerSpan.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(quizTimer);
            finishQuiz();
        }
    }, 1000);
}

function finishQuiz() {
    clearInterval(quizTimer);
    isQuizActive = false;
    
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    const correctAnswers = userAnswers.filter((answer, index) => 
        answer === quizQuestions[index].correct
    ).length;
    
    const score = Math.round((correctAnswers / quizQuestions.length) * 100);
    
    // Update results
    finalScoreSpan.textContent = score;
    correctAnswersSpan.textContent = correctAnswers;
    totalAnswersSpan.textContent = quizQuestions.length;
    timeTakenSpan.textContent = timeTaken;
    
    // Set score message
    if (score >= 90) {
        scoreMessageSpan.textContent = "Excellent! You're a web development expert!";
    } else if (score >= 70) {
        scoreMessageSpan.textContent = "Great job! You have solid web development knowledge!";
    } else if (score >= 50) {
        scoreMessageSpan.textContent = "Good effort! Keep learning and practicing!";
    } else {
        scoreMessageSpan.textContent = "Keep studying! Practice makes perfect!";
    }
    
    quizContent.style.display = 'none';
    quizResults.style.display = 'block';
}

function resetQuiz() {
    currentQuestionIndex = 0;
    userAnswers = [];
    isQuizActive = false;
    
    quizResults.style.display = 'none';
    quizStart.style.display = 'block';
    
    timerSpan.textContent = '60';
}

// Weather Setup
function setupWeather() {
    searchWeatherBtn.addEventListener('click', getWeather);
    cityInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            getWeather();
        }
    });
}

async function getWeather() {
    const city = cityInput.value.trim();
    if (!city) {
        showWeatherError('Please enter a city name');
        return;
    }
    
    showWeatherLoading();
    
    try {
        // Using OpenWeatherMap API (free tier)
        const apiKey = 'demo'; // In production, we'd use a real API key
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`);
        
        if (!response.ok) {
            throw new Error('City not found');
        }
        
        const data = await response.json();
        displayWeather(data);
        
    } catch (error) {
        console.error('Weather API Error:', error);
        // For demo purposes, show mock data
        showMockWeather(city);
    }
}

function showMockWeather(city) {
    const mockData = {
        name: city,
        main: {
            temp: Math.floor(Math.random() * 30) + 5,
            feels_like: Math.floor(Math.random() * 30) + 5,
            humidity: Math.floor(Math.random() * 40) + 30
        },
        weather: [{
            description: ['clear sky', 'scattered clouds', 'light rain', 'sunny'][Math.floor(Math.random() * 4)]
        }],
        wind: {
            speed: Math.floor(Math.random() * 20) + 5
        },
        visibility: Math.floor(Math.random() * 5000) + 5000
    };
    
    displayWeather(mockData);
}

function displayWeather(data) {
    hideWeatherLoading();
    hideWeatherError();
    
    weatherCity.textContent = data.name;
    weatherDate.textContent = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    weatherTemperature.textContent = Math.round(data.main.temp);
    weatherFeelsLike.textContent = Math.round(data.main.feels_like);
    weatherHumidity.textContent = data.main.humidity;
    weatherWind.textContent = Math.round(data.wind.speed * 3.6); // Convert m/s to km/h
    weatherVisibility.textContent = Math.round(data.visibility / 1000);
    weatherDescription.textContent = data.weather[0].description;
    
    // Set weather icon based on description
    const description = data.weather[0].description.toLowerCase();
    if (description.includes('rain')) {
        weatherIcon.className = 'fas fa-cloud-rain';
    } else if (description.includes('cloud')) {
        weatherIcon.className = 'fas fa-cloud';
    } else if (description.includes('snow')) {
        weatherIcon.className = 'fas fa-snowflake';
    } else {
        weatherIcon.className = 'fas fa-sun';
    }
    
    weatherResult.style.display = 'block';
}

function showWeatherLoading() {
    weatherLoading.style.display = 'block';
    weatherResult.style.display = 'none';
    weatherError.style.display = 'none';
}

function hideWeatherLoading() {
    weatherLoading.style.display = 'none';
}

function showWeatherError(message) {
    errorMessage.textContent = message;
    weatherError.style.display = 'block';
    weatherResult.style.display = 'none';
    weatherLoading.style.display = 'none';
}

function hideWeatherError() {
    weatherError.style.display = 'none';
}

// Carousel Setup
function setupCarousel() {
    const slides = carouselTrack.children;
    const totalSlides = slides.length;
    
    // Create indicators
    for (let i = 0; i < totalSlides; i++) {
        const indicator = document.createElement('div');
        indicator.className = 'carousel-indicator';
        if (i === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(i));
        carouselIndicators.appendChild(indicator);
    }
    
    // Event listeners
    carouselPrev.addEventListener('click', previousSlide);
    carouselNext.addEventListener('click', nextSlide);
    autoPlayBtn.addEventListener('click', toggleAutoPlay);
    fullscreenBtn.addEventListener('click', toggleFullscreen);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            previousSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
    
    // Touch/swipe support for mobile
    let startX = 0;
    let endX = 0;
    
    carouselTrack.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });
    
    carouselTrack.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                previousSlide();
            }
        }
    }
    
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

function previousSlide() {
    const slides = carouselTrack.children;
    currentSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    updateCarousel();
}

function nextSlide() {
    const slides = carouselTrack.children;
    currentSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    updateCarousel();
}

function updateCarousel() {
    const slides = carouselTrack.children;
    const totalSlides = slides.length;
    
    // Update track position
    carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update indicators
    const indicators = carouselIndicators.children;
    for (let i = 0; i < indicators.length; i++) {
        indicators[i].classList.toggle('active', i === currentSlide);
    }
    
    // Update navigation buttons
    carouselPrev.disabled = currentSlide === 0;
    carouselNext.disabled = currentSlide === totalSlides - 1;
}

function toggleAutoPlay() {
    if (isAutoPlaying) {
        stopAutoPlay();
    } else {
        startAutoPlay();
    }
}

function startAutoPlay() {
    isAutoPlaying = true;
    autoPlayBtn.innerHTML = '<i class="fas fa-pause"></i> Pause';
    autoPlayBtn.classList.add('active');
    
    autoPlayInterval = setInterval(() => {
        nextSlide();
    }, 3000);
}

function stopAutoPlay() {
    isAutoPlaying = false;
    autoPlayBtn.innerHTML = '<i class="fas fa-play"></i> Auto Play';
    autoPlayBtn.classList.remove('active');
    
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
    }
}

function toggleFullscreen() {
    const carouselContainer = document.querySelector('.carousel-container');
    
    if (!document.fullscreenElement) {
        carouselContainer.requestFullscreen().catch(err => {
            console.log('Fullscreen request failed:', err);
        });
        fullscreenBtn.innerHTML = '<i class="fas fa-compress"></i> Exit Fullscreen';
    } else {
        document.exitFullscreen();
        fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i> Fullscreen';
    }
}

// Form Validation
function setupFormValidation() {
    const form = document.getElementById('contactForm');
    const inputs = form.querySelectorAll('input, select, textarea');

    // Real-time validation
    inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => clearFieldError(input));
    });

    form.addEventListener('submit', handleFormSubmit);
}

function validateField(field) {
    const value = field.value.trim();
    const errorElement = document.getElementById(field.id + 'Error');
    
    // Clear previous error
    clearFieldError(field);

    // Validation rules
    switch(field.id) {
        case 'name':
            if (value.length < 2) {
                showFieldError(field, 'Name must be at least 2 characters long');
            } else if (!/^[a-zA-Z\s]+$/.test(value)) {
                showFieldError(field, 'Name can only contain letters and spaces');
            }
            break;
            
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                showFieldError(field, 'Please enter a valid email address');
            }
            break;
            
        case 'phone':
            if (value && !/^[\+]?[1-9][\d]{0,15}$/.test(value.replace(/[\s\-\(\)]/g, ''))) {
                showFieldError(field, 'Please enter a valid phone number');
            }
            break;
            
        case 'subject':
            if (!value) {
                showFieldError(field, 'Please select a subject');
            }
            break;
            
        case 'message':
            if (value.length < 10) {
                showFieldError(field, 'Message must be at least 10 characters long');
            }
            break;
    }
}

function showFieldError(field, message) {
    const errorElement = document.getElementById(field.id + 'Error');
    if (errorElement) {
        errorElement.textContent = message;
        field.style.borderColor = '#e74c3c';
    }
}

function clearFieldError(field) {
    const errorElement = document.getElementById(field.id + 'Error');
    if (errorElement) {
        errorElement.textContent = '';
        field.style.borderColor = '';
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const inputs = form.querySelectorAll('input, select, textarea');
    let isValid = true;

    // Validate all fields
    inputs.forEach(input => {
        if (input.hasAttribute('required') || input.value.trim()) {
            validateField(input);
            if (document.getElementById(input.id + 'Error').textContent) {
                isValid = false;
            }
        }
    });

    if (isValid) {
        showSuccessMessage();
        form.reset();
        // Here you would typically send the form data to a server
        console.log('Form submitted successfully:', getFormData(form));
    }
}

function getFormData(form) {
    const formData = new FormData(form);
    const data = {};
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    return data;
}

function showSuccessMessage() {
    const successMessage = document.getElementById('formSuccess');
    successMessage.style.display = 'block';
    successMessage.classList.add('fade-in');
    
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 5000);
}

// To-Do List Setup
function setupTodoList() {
    addTodoBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderTodos();
        });
    });

    clearCompletedBtn.addEventListener('click', clearCompleted);
}

function addTodo() {
    const text = todoInput.value.trim();
    if (text) {
        const todo = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date().toISOString()
        };
        
        todos.push(todo);
        saveTodos();
        renderTodos();
        updateTaskCount();
        todoInput.value = '';
        
        // Add animation
        const newTodoElement = document.querySelector(`[data-id="${todo.id}"]`);
        if (newTodoElement) {
            newTodoElement.classList.add('slide-in');
        }
    }
}

function toggleTodo(id) {
    todos = todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    saveTodos();
    renderTodos();
    updateTaskCount();
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveTodos();
    renderTodos();
    updateTaskCount();
}

function clearCompleted() {
    todos = todos.filter(todo => !todo.completed);
    saveTodos();
    renderTodos();
    updateTaskCount();
}

function renderTodos() {
    const filteredTodos = todos.filter(todo => {
        switch(currentFilter) {
            case 'active': return !todo.completed;
            case 'completed': return todo.completed;
            default: return true;
        }
    });

    todoList.innerHTML = filteredTodos.map(todo => `
        <li class="todo-item ${todo.completed ? 'completed' : ''}" data-id="${todo.id}">
            <input type="checkbox" class="todo-checkbox" ${todo.completed ? 'checked' : ''} 
                   onchange="toggleTodo(${todo.id})">
            <span class="todo-text">${escapeHtml(todo.text)}</span>
            <button class="todo-delete" onclick="deleteTodo(${todo.id})">
                <i class="fas fa-trash"></i>
            </button>
        </li>
    `).join('');
}

function updateTaskCount() {
    const activeCount = todos.filter(todo => !todo.completed).length;
    taskCount.textContent = `${activeCount} task${activeCount !== 1 ? 's' : ''} remaining`;
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
    renderTodos();
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Image Gallery Setup
function setupImageGallery() {
    imageUpload.addEventListener('change', handleImageUpload);
    
    // Modal functionality
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
}

function handleImageUpload(e) {
    const files = Array.from(e.target.files);
    
    files.forEach(file => {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                addImageToGallery(e.target.result, file.name);
            };
            reader.readAsDataURL(file);
        }
    });
}

function addImageToGallery(src, alt) {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item fade-in';
    galleryItem.innerHTML = `
        <img src="${src}" alt="${alt}" onclick="openModal('${src}')">
        <div class="gallery-overlay">
            <i class="fas fa-expand"></i>
        </div>
        <button class="gallery-delete" onclick="removeImage(this)" aria-label="Delete image">
            <i class="fas fa-trash"></i>
        </button>
    `;
    galleryGrid.appendChild(galleryItem);
}

function removeImage(buttonEl) {
    const item = buttonEl.closest('.gallery-item');
    if (!item) return;
    const img = item.querySelector('img');
    const src = img ? img.src : '';

    // If the modal is open showing this image, close it first
    if (modal.style.display === 'block' && modalImage && modalImage.src === src) {
        modal.style.display = 'none';
        modalImage.src = '';
    }

    item.remove();
    showNotification('Image removed', 'success');
}

function openModal(src) {
    modalImage.src = src;
    modal.style.display = 'block';
}

// Smooth Scrolling
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Utility Functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type} fade-in`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        z-index: 3000;
        background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Performance optimization: Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add some sample todos on first visit
if (todos.length === 0) {
    const sampleTodos = [
        { id: 1, text: 'Learn HTML, CSS, and JavaScript', completed: false, createdAt: new Date().toISOString() },
        { id: 2, text: 'Build responsive layouts', completed: false, createdAt: new Date().toISOString() },
        { id: 3, text: 'Practice form validation', completed: true, createdAt: new Date().toISOString() }
    ];
    todos = sampleTodos;
    saveTodos();
}