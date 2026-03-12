// Quiz questions
const quizData = [
    {
        question: "How are you feeling today?",
        options: ["😊 Happy", "😐 Okay", "😢 Sad", "😡 Angry"],
        score: [2, 1, -1, -2]
    },
    {
        question: "How often do you feel stressed?",
        options: ["Never", "Sometimes", "Often", "Always"],
        score: [2, 1, -1, -2]
    },
    {
        question: "Do you sleep well at night?",
        options: ["Always", "Mostly", "Sometimes", "Rarely"],
        score: [2, 1, -1, -2]
    },
    {
        question: "Do you enjoy your hobbies?",
        options: ["Yes! 😄", "A little", "Not really", "No 😢"],
        score: [2, 1, -1, -2]
    },
    {
        question: "How often do you feel anxious?",
        options: ["Never", "Sometimes", "Often", "Always 😰"],
        score: [2, 1, -1, -2]
    }
];

// Load quiz
const quizContainer = document.getElementById('quiz');

quizData.forEach((q, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');

    const questionTitle = document.createElement('h3');
    questionTitle.innerText = `${index + 1}. ${q.question}`;
    questionDiv.appendChild(questionTitle);

    const optionsDiv = document.createElement('div');
    optionsDiv.classList.add('options');

    q.options.forEach((option, i) => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `question${index}`;
        input.value = q.score[i];
        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        optionsDiv.appendChild(label);
    });

    questionDiv.appendChild(optionsDiv);
    quizContainer.appendChild(questionDiv);
});

// Submit button
document.getElementById('submit').addEventListener('click', () => {
    let totalScore = 0;
    quizData.forEach((q, index) => {
        const selected = document.querySelector(`input[name=question${index}]:checked`);
        if(selected){
            totalScore += parseInt(selected.value);
        }
    });

    let resultText = "";

    if(totalScore >= 7){
        resultText = "🌈 You’re feeling great! Keep shining!";
    } else if(totalScore >= 3){
        resultText = "🙂 You’re doing okay. Take some self-care breaks!";
    } else if(totalScore >= -2){
        resultText = "😐 Feeling a bit low. Try some relaxing activities!";
    } else {
        resultText = "💖 Remember, it’s okay to ask for help. You’re not alone!";
    }

    document.getElementById('result').innerText = resultText;
});
