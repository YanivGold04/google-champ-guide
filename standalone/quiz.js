// Quiz functionality

const quizQuestions = [
    {
        question: "You want to schedule a recurring weekly team meeting. Where do you do this in Google Workspace?",
        options: [
            "Google Meet directly",
            "Google Calendar",
            "Gmail settings",
            "Google Drive"
        ],
        correctAnswer: 1,
        explanation: "Google Calendar is where you schedule all meetings, including recurring ones. You can add Google Meet or Zoom links directly from Calendar."
    },
    {
        question: "In Gmail, you want to organize emails from your manager. What's the best approach?",
        options: [
            "Create a folder called 'Manager'",
            "Create a label called 'Manager' and set up a filter",
            "Move all emails to a separate inbox",
            "Archive them immediately"
        ],
        correctAnswer: 1,
        explanation: "Gmail uses labels instead of folders. Labels are more flexible - an email can have multiple labels. You can also create filters to automatically apply labels."
    },
    {
        question: "You need to collaborate on a document with your team in real-time. Which tool should you use?",
        options: [
            "Email the document back and forth",
            "Google Docs with sharing enabled",
            "Download and use Microsoft Word offline",
            "Print and make handwritten edits"
        ],
        correctAnswer: 1,
        explanation: "Google Docs allows multiple people to edit simultaneously with changes appearing in real-time. Share the document and set appropriate permissions."
    },
    {
        question: "Where can you find files that other people have shared with you in Google Drive?",
        options: [
            "My Drive folder",
            "Recent files",
            "Shared with me section",
            "Starred files"
        ],
        correctAnswer: 2,
        explanation: "The 'Shared with me' section shows all files and folders that others have shared with you, making them easy to find and access."
    },
    {
        question: "You want to prevent accidental edits to a specific range in Google Sheets. What should you use?",
        options: [
            "Delete the range",
            "Hide the range",
            "Protect the range",
            "Copy it to a new sheet"
        ],
        correctAnswer: 2,
        explanation: "You can protect specific ranges or entire sheets in Google Sheets. This allows you to set who can edit that range while others can only view."
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function initQuiz() {
    const container = document.getElementById('quiz-container');
    if (!container) return;
    
    showQuestion();
}

function showQuestion() {
    const container = document.getElementById('quiz-container');
    const question = quizQuestions[currentQuestion];
    
    container.innerHTML = `
        <div class="quiz-card">
            <div class="quiz-header">
                <span style="color: var(--muted-foreground);">Question ${currentQuestion + 1} of ${quizQuestions.length}</span>
                <span style="font-weight: 600; color: var(--primary);">Score: ${score}</span>
            </div>
            <div class="quiz-question">${question.question}</div>
            <div class="quiz-options" id="quiz-options">
                ${question.options.map((option, index) => `
                    <div class="quiz-option" onclick="selectAnswer(${index})">
                        <span>${option}</span>
                    </div>
                `).join('')}
            </div>
            <div id="quiz-feedback" style="display: none; padding: 1rem; border-radius: var(--radius); margin-top: 1rem;"></div>
            <button id="next-button" class="btn btn-primary" style="width: 100%; display: none;" onclick="nextQuestion()">
                ${currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'See Results'}
            </button>
        </div>
    `;
}

function selectAnswer(answerIndex) {
    if (answered) return;
    
    answered = true;
    const question = quizQuestions[currentQuestion];
    const options = document.querySelectorAll('.quiz-option');
    const feedback = document.getElementById('quiz-feedback');
    const nextButton = document.getElementById('next-button');
    
    // Disable all options
    options.forEach(opt => opt.classList.add('disabled'));
    
    // Mark correct and incorrect answers
    options[question.correctAnswer].classList.add('correct');
    const correctIcon = document.createElement('i');
    correctIcon.setAttribute('data-lucide', 'check-circle-2');
    correctIcon.style.color = 'var(--secondary)';
    options[question.correctAnswer].insertBefore(correctIcon, options[question.correctAnswer].firstChild);
    
    if (answerIndex !== question.correctAnswer) {
        options[answerIndex].classList.add('incorrect');
        const incorrectIcon = document.createElement('i');
        incorrectIcon.setAttribute('data-lucide', 'x-circle');
        incorrectIcon.style.color = 'var(--destructive)';
        options[answerIndex].insertBefore(incorrectIcon, options[answerIndex].firstChild);
    }
    
    // Show feedback
    if (answerIndex === question.correctAnswer) {
        score++;
        feedback.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
        feedback.style.color = 'var(--secondary)';
        feedback.textContent = '✅ Correct! ' + question.explanation;
    } else {
        feedback.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
        feedback.style.color = 'var(--destructive)';
        feedback.textContent = '❌ ' + question.explanation;
    }
    feedback.style.display = 'block';
    
    // Show next button
    nextButton.style.display = 'block';
    
    // Recreate icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function nextQuestion() {
    answered = false;
    currentQuestion++;
    
    if (currentQuestion < quizQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const container = document.getElementById('quiz-container');
    const percentage = (score / quizQuestions.length) * 100;
    
    let message = '';
    if (percentage >= 80) {
        message = "Excellent! You're ready to use Google Workspace! 🎉";
    } else if (percentage >= 60) {
        message = "Good job! Review the guides for areas you missed.";
    } else {
        message = "Keep learning! Go through the guides again.";
    }
    
    container.innerHTML = `
        <div class="quiz-card quiz-result">
            <h3 style="font-size: 2rem; margin-bottom: 1rem;">Quiz Complete!</h3>
            <div class="quiz-score">${score}/${quizQuestions.length}</div>
            <p style="font-size: 1.25rem; color: var(--muted-foreground); margin-bottom: 1rem;">
                You scored ${percentage.toFixed(0)}%
            </p>
            <p style="font-size: 1.125rem; font-weight: 600; color: var(--primary); margin-bottom: 2rem;">
                ${message}
            </p>
            <button class="btn btn-primary" onclick="restartQuiz()">Restart Quiz</button>
        </div>
    `;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    answered = false;
    showQuestion();
}