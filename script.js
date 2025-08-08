document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const mainMenu = document.getElementById('main-menu');
    const gameView = document.getElementById('game-view');
    const planets = document.querySelectorAll('.planet');

    // --- Game State ---
    let currentQuestionIndex = 0;
    let score = 0;
    let lives = 0;
    let currentTopic = '';

    // --- Game Data (from questions.js) ---

    // --- Event Listeners ---
    const topicMap = {
        'Meervoude': { questions: meervoudeQuestions, loader: loadMeervoudeQuestion },
        'Verlede Tyd': { questions: verledeTydQuestions, loader: loadVerledeTydQuestion },
        'Alfabetiese Volgorde': { questions: alfabetQuestions, loader: loadAlfabetieseVolgordeQuestion },
        'Voegwoorde': { questions: voegwoordeQuestions, loader: loadVoegwoordeQuestion },
        'Vraagwoorde': { questions: vraagwoordeQuestions, loader: loadVraagwoordeQuestion },
        'Voorsetsels': { questions: voorsetselsQuestions, loader: loadVoorsetselsQuestion },
        'Verkleinwoorde': { questions: verkleinwoordeQuestions, loader: loadVerkleinwoordeQuestion },
        'Trappe van Vergelyking': { questions: trappeVanVergelykingQuestions, loader: loadTrappeVanVergelykingQuestion },
        'Sinsoorte': { questions: sinsoorteQuestions, loader: loadSinsoorteQuestion },
        'Manlike & Vroulike Vorme': { questions: vormeQuestions, loader: loadVormeQuestion },
        'Versamelname': { questions: versamelnameQuestions, loader: loadVersamelnameQuestion },
        'Antonieme & Sinonieme': { questions: antoniemeSinoniemeQuestions, loader: loadAntoniemeSinoniemeQuestion },
        'Toekomende Tyd': { questions: toekomendeTydQuestions, loader: loadToekomendeTydQuestion },
        'Woordorde (STOMPI)': { questions: woordordeQuestions, loader: loadWoordordeQuestion },
    };

    planets.forEach(planet => {
        const topicName = planet.dataset.topic;
        const topicData = topicMap[topicName];
        if (topicData) {
            planet.addEventListener('click', () => startGame(topicData.questions, topicData.loader, topicName));
        }
    });


    // --- Core Functions ---
    function startGame(questions, loader, topic) {
        mainMenu.classList.add('hidden');
        gameView.classList.remove('hidden');
        currentQuestionIndex = 0;
        score = 0;
        lives = 3;
        currentTopic = topic;
        loader(questions);
    }

    function updateLivesDisplay() {
        const livesDisplay = document.getElementById('lives-display');
        if (livesDisplay) {
            livesDisplay.innerHTML = '❤️ '.repeat(lives);
        }
    }

    function showFinalScore(totalQuestions, isGameOver = false) {
        saveHighScore(currentTopic, score);
        displayHighScores();

        let message = isGameOver ? "Oeps, Jy het verloor!" : "Spel Voltooi!";
        if (!isGameOver) {
            confetti({
                particleCount: 150,
                spread: 180
            });
        }
        gameView.innerHTML = `
            <h2 data-testid="game-title">${message}</h2>
            <p>Jou telling: ${score} / ${totalQuestions}</p>
            <button id="back-to-menu">Speel Weer</button>
        `;
        document.getElementById('back-to-menu').addEventListener('click', showMainMenu);
    }

    function showMainMenu() {
        gameView.classList.add('hidden');
        mainMenu.classList.remove('hidden');
        gameView.innerHTML = '';
    }

    function playSound(soundFile) {
        // This function is a placeholder.
        // To make it work, add sound files to an 'assets/sounds/' directory.
        // const audio = new Audio(`assets/sounds/${soundFile}`);
        // audio.play().catch(e => console.log("Sound play failed:", e));
    }

    // --- High Score Functions ---
    function getHighScores() {
        const scores = localStorage.getItem('afrikaansHighScores');
        return scores ? JSON.parse(scores) : {};
    }

    function saveHighScore(topic, newScore) {
        const highScores = getHighScores();
        const currentHighScore = highScores[topic] || 0;
        if (newScore > currentHighScore) {
            highScores[topic] = newScore;
            localStorage.setItem('afrikaansHighScores', JSON.stringify(highScores));
        }
    }

    function displayHighScores() {
        const highScores = getHighScores();
        document.querySelectorAll('.planet').forEach(planet => {
            const topic = planet.dataset.topic;
            const highScoreEl = planet.querySelector('.high-score');
            if (highScores[topic]) {
                highScoreEl.textContent = `Rekord: ${highScores[topic]}`;
            }
        });
    }


    // --- Question Loaders ---
    function loadMeervoudeQuestion(questions) {
        if (currentQuestionIndex < questions.length) {
            const q = questions[currentQuestionIndex];
            gameView.innerHTML = `
                <div id="game-stats"><div id="lives-display"></div></div>
                <h2 data-testid="game-title">Wat is die meervoud van...</h2>
                <div id="question-word">${q.question}</div>
                <div id="options-container">${q.options.map(o => `<button class="option">${o}</button>`).join('')}</div>
                <div id="feedback"></div><button id="back-to-menu">Terug na Kaart</button>`;
            updateLivesDisplay();
            document.querySelectorAll('.option').forEach(b => b.addEventListener('click', (e) => handleMultipleChoice(e, q, questions, loadMeervoudeQuestion)));
            document.getElementById('back-to-menu').addEventListener('click', showMainMenu);
        } else { showFinalScore(questions.length); }
    }

    function loadVersamelnameQuestion(questions) {
        if (currentQuestionIndex < questions.length) {
            const q = questions[currentQuestionIndex];
            gameView.innerHTML = `
                <div id="game-stats"><div id="lives-display"></div></div>
                <h2 data-testid="game-title">Wat is die versamelnaam?</h2>
                <div id="question-word">${q.question}</div>
                <div id="options-container">${q.options.map(o => `<button class="option">${o}</button>`).join('')}</div>
                <div id="feedback"></div><button id="back-to-menu">Terug na Kaart</button>`;
            updateLivesDisplay();
            document.querySelectorAll('.option').forEach(b => b.addEventListener('click', (e) => handleMultipleChoice(e, q, questions, loadVersamelnameQuestion)));
            document.getElementById('back-to-menu').addEventListener('click', showMainMenu);
        } else { showFinalScore(questions.length); }
    }

    function loadAntoniemeSinoniemeQuestion(questions) {
        if (currentQuestionIndex < questions.length) {
            const q = questions[currentQuestionIndex];
            gameView.innerHTML = `
                <div id="game-stats"><div id="lives-display"></div></div>
                <h2 data-testid="game-title">Antonieme & Sinonieme</h2>
                <div id="question-word">${q.question}</div>
                <div id="options-container">${q.options.map(o => `<button class="option">${o}</button>`).join('')}</div>
                <div id="feedback"></div><button id="back-to-menu">Terug na Kaart</button>`;
            updateLivesDisplay();
            document.querySelectorAll('.option').forEach(b => b.addEventListener('click', (e) => handleMultipleChoice(e, q, questions, loadAntoniemeSinoniemeQuestion)));
            document.getElementById('back-to-menu').addEventListener('click', showMainMenu);
        } else { showFinalScore(questions.length); }
    }

    function loadSinsoorteQuestion(questions) {
        if (currentQuestionIndex < questions.length) {
            const q = questions[currentQuestionIndex];
            gameView.innerHTML = `
                <div id="game-stats"><div id="lives-display"></div></div>
                <h2 data-testid="game-title">Watter sinsoort is hierdie?</h2>
                <div id="question-word">${q.question}</div>
                <div id="options-container">${q.options.map(o => `<button class="option">${o}</button>`).join('')}</div>
                <div id="feedback"></div><button id="back-to-menu">Terug na Kaart</button>`;
            updateLivesDisplay();
            document.querySelectorAll('.option').forEach(b => b.addEventListener('click', (e) => handleMultipleChoice(e, q, questions, loadSinsoorteQuestion)));
            document.getElementById('back-to-menu').addEventListener('click', showMainMenu);
        } else { showFinalScore(questions.length); }
    }

    function loadVormeQuestion(questions) {
        if (currentQuestionIndex < questions.length) {
            const q = questions[currentQuestionIndex];
            gameView.innerHTML = `
                <div id="game-stats"><div id="lives-display"></div></div>
                <h2 data-testid="game-title">Wat is die vroulike vorm van...</h2>
                <div id="question-word">${q.question}</div>
                <div id="options-container">${q.options.map(o => `<button class="option">${o}</button>`).join('')}</div>
                <div id="feedback"></div><button id="back-to-menu">Terug na Kaart</button>`;
            updateLivesDisplay();
            document.querySelectorAll('.option').forEach(b => b.addEventListener('click', (e) => handleMultipleChoice(e, q, questions, loadVormeQuestion)));
            document.getElementById('back-to-menu').addEventListener('click', showMainMenu);
        } else { showFinalScore(questions.length); }
    }

    function loadVerkleinwoordeQuestion(questions) {
        if (currentQuestionIndex < questions.length) {
            const q = questions[currentQuestionIndex];
            gameView.innerHTML = `
                <div id="game-stats"><div id="lives-display"></div></div>
                <h2 data-testid="game-title">Wat is die verkleinwoord van...</h2>
                <div id="question-word">${q.question}</div>
                <div id="options-container">${q.options.map(o => `<button class="option">${o}</button>`).join('')}</div>
                <div id="feedback"></div><button id="back-to-menu">Terug na Kaart</button>`;
            updateLivesDisplay();
            document.querySelectorAll('.option').forEach(b => b.addEventListener('click', (e) => handleMultipleChoice(e, q, questions, loadVerkleinwoordeQuestion)));
            document.getElementById('back-to-menu').addEventListener('click', showMainMenu);
        } else { showFinalScore(questions.length); }
    }

    function loadTrappeVanVergelykingQuestion(questions) {
        if (currentQuestionIndex < questions.length) {
            const q = questions[currentQuestionIndex];
            gameView.innerHTML = `
                <div id="game-stats"><div id="lives-display"></div></div>
                <h2 data-testid="game-title">Wat is die regte trap van vergelyking?</h2>
                <div id="question-word">${q.question}</div>
                <div id="options-container">${q.options.map(o => `<button class="option">${o}</button>`).join('')}</div>
                <div id="feedback"></div><button id="back-to-menu">Terug na Kaart</button>`;
            updateLivesDisplay();
            document.querySelectorAll('.option').forEach(b => b.addEventListener('click', (e) => handleMultipleChoice(e, q, questions, loadTrappeVanVergelykingQuestion)));
            document.getElementById('back-to-menu').addEventListener('click', showMainMenu);
        } else { showFinalScore(questions.length); }
    }

    function loadVraagwoordeQuestion(questions) {
        if (currentQuestionIndex < questions.length) {
            const q = questions[currentQuestionIndex];
            gameView.innerHTML = `
                <div id="game-stats"><div id="lives-display"></div></div>
                <h2 data-testid="game-title">Kies die regte vraagwoord</h2>
                <div id="question-word">${q.question}</div>
                <div id="options-container">${q.options.map(o => `<button class="option">${o}</button>`).join('')}</div>
                <div id="feedback"></div><button id="back-to-menu">Terug na Kaart</button>`;
            updateLivesDisplay();
            document.querySelectorAll('.option').forEach(b => b.addEventListener('click', (e) => handleMultipleChoice(e, q, questions, loadVraagwoordeQuestion)));
            document.getElementById('back-to-menu').addEventListener('click', showMainMenu);
        } else { showFinalScore(questions.length); }
    }

    function loadVoorsetselsQuestion(questions) {
        if (currentQuestionIndex < questions.length) {
            const q = questions[currentQuestionIndex];
            gameView.innerHTML = `
                <div id="game-stats"><div id="lives-display"></div></div>
                <h2 data-testid="game-title">Kies die regte voorsetsel</h2>
                <div id="question-word">${q.question}</div>
                <div id="options-container">${q.options.map(o => `<button class="option">${o}</button>`).join('')}</div>
                <div id="feedback"></div><button id="back-to-menu">Terug na Kaart</button>`;
            updateLivesDisplay();
            document.querySelectorAll('.option').forEach(b => b.addEventListener('click', (e) => handleMultipleChoice(e, q, questions, loadVoorsetselsQuestion)));
            document.getElementById('back-to-menu').addEventListener('click', showMainMenu);
        } else { showFinalScore(questions.length); }
    }

    function loadAlfabetieseVolgordeQuestion(questions) {
        if (currentQuestionIndex < questions.length) {
            const q = questions[currentQuestionIndex];
            gameView.innerHTML = `
                <div id="game-stats"><div id="lives-display"></div></div>
                <h2 data-testid="game-title">Alfabetiese Volgorde</h2>
                <div id="question-word">${q.question}</div>
                <div id="options-container">${q.options.map(o => `<button class="option">${o}</button>`).join('')}</div>
                <div id="feedback"></div><button id="back-to-menu">Terug na Kaart</button>`;
            updateLivesDisplay();
            document.querySelectorAll('.option').forEach(b => b.addEventListener('click', (e) => handleMultipleChoice(e, q, questions, loadAlfabetieseVolgordeQuestion)));
            document.getElementById('back-to-menu').addEventListener('click', showMainMenu);
        } else { showFinalScore(questions.length); }
    }

    function loadVoegwoordeQuestion(questions) {
        if (currentQuestionIndex < questions.length) {
            const q = questions[currentQuestionIndex];
            gameView.innerHTML = `
                <div id="game-stats"><div id="lives-display"></div></div>
                <h2 data-testid="game-title">Kies die regte voegwoord</h2>
                <div id="question-word">${q.question}</div>
                <div id="options-container">${q.options.map(o => `<button class="option">${o}</button>`).join('')}</div>
                <div id="feedback"></div><button id="back-to-menu">Terug na Kaart</button>`;
            updateLivesDisplay();
            document.querySelectorAll('.option').forEach(b => b.addEventListener('click', (e) => handleMultipleChoice(e, q, questions, loadVoegwoordeQuestion)));
            document.getElementById('back-to-menu').addEventListener('click', showMainMenu);
        } else { showFinalScore(questions.length); }
    }

    function loadVerledeTydQuestion(questions) {
        if (currentQuestionIndex < questions.length) {
            const q = questions[currentQuestionIndex];
            gameView.innerHTML = `
                <div id="game-stats"><div id="lives-display"></div></div>
                <h2 data-testid="game-title">Vorm die sin in die Verlede Tyd</h2>
                <div id="sentence-container"><span>${q.start}</span><input type="text" id="answer-input" placeholder="${q.verb}"><span>${q.end}</span></div>
                <button id="submit-answer">Kontroleer</button><div id="feedback"></div><button id="back-to-menu">Terug na Kaart</button>`;
            updateLivesDisplay();
            document.getElementById('submit-answer').addEventListener('click', () => handleVerledeTydAnswer(q, questions));
            document.getElementById('back-to-menu').addEventListener('click', showMainMenu);
        } else { showFinalScore(questions.length); }
    }

    function loadToekomendeTydQuestion(questions) {
        if (currentQuestionIndex < questions.length) {
            const q = questions[currentQuestionIndex];
            gameView.innerHTML = `
                <div id="game-stats"><div id="lives-display"></div></div>
                <h2 data-testid="game-title">Vorm die sin in die Toekomende Tyd</h2>
                <div id="sentence-container"><span>${q.start}</span><input type="text" id="answer-input" placeholder="${q.verb}"><span>${q.end}</span></div>
                <button id="submit-answer">Kontroleer</button><div id="feedback"></div><button id="back-to-menu">Terug na Kaart</button>`;
            updateLivesDisplay();
            document.getElementById('submit-answer').addEventListener('click', () => handleToekomendeTydAnswer(q, questions));
            document.getElementById('back-to-menu').addEventListener('click', showMainMenu);
        } else { showFinalScore(questions.length); }
    }

    function loadWoordordeQuestion(questions) {
        if (currentQuestionIndex < questions.length) {
            const q = questions[currentQuestionIndex];
            gameView.innerHTML = `
                <div id="game-stats"><div id="lives-display"></div></div>
                <h2 data-testid="game-title">Skryf die sin in die regte volgorde</h2>
                <div id="question-word" style="font-style: italic;">"${q.question}"</div>
                <input type="text" id="answer-input" placeholder="Skryf die sin hier..." style="width: 80%; margin-top: 20px;">
                <button id="submit-answer">Kontroleer</button><div id="feedback"></div><button id="back-to-menu">Terug na Kaart</button>`;
            updateLivesDisplay();
            document.getElementById('submit-answer').addEventListener('click', () => handleWoordordeAnswer(q, questions));
            document.getElementById('back-to-menu').addEventListener('click', showMainMenu);
        } else { showFinalScore(questions.length); }
    }

    // --- Answer Handlers ---
    function handleMultipleChoice(event, question, questions, nextQuestionLoader) {
        const selectedOption = event.target.innerText;
        const feedbackEl = document.getElementById('feedback');
        if (selectedOption === question.answer) {
            score++;
            playSound('correct.mp3');
            feedbackEl.textContent = 'Reg! ✨';
            feedbackEl.className = 'correct';
        } else {
            lives--;
            playSound('incorrect.mp3');
            updateLivesDisplay();
            feedbackEl.textContent = `Oeps! Die regte antwoord is "${question.answer}".`;
            feedbackEl.className = 'incorrect';
        }
        document.querySelectorAll('.option').forEach(b => b.disabled = true);
        if (lives <= 0) {
            setTimeout(() => showFinalScore(questions.length, true), 2000);
            return;
        }
        setTimeout(() => { currentQuestionIndex++; nextQuestionLoader(questions); }, 2000);
    }

    function handleVerledeTydAnswer(question, questions) {
        handleTextInput(question, questions, loadVerledeTydQuestion);
    }

    function handleToekomendeTydAnswer(question, questions) {
        handleTextInput(question, questions, loadToekomendeTydQuestion);
    }

    function handleWoordordeAnswer(question, questions) {
        handleTextInput(question, questions, loadWoordordeQuestion);
    }

    function handleTextInput(question, questions, nextQuestionLoader) {
        const userAnswer = document.getElementById('answer-input').value.trim().toLowerCase().replace(/[.,!]/g, '');
        const correctAnswer = question.answer.toLowerCase().replace(/[.,!]/g, '');
        const feedbackEl = document.getElementById('feedback');

        if (userAnswer === correctAnswer) {
            score++;
            playSound('correct.mp3');
            feedbackEl.textContent = 'Reg! ✨';
            feedbackEl.className = 'correct';
        } else {
            lives--;
            playSound('incorrect.mp3');
            updateLivesDisplay();
            feedbackEl.textContent = `Byna! Die regte antwoord is "${question.answer}".`;
            feedbackEl.className = 'incorrect';
        }

        document.getElementById('submit-answer').disabled = true;

        if (lives <= 0) {
            setTimeout(() => showFinalScore(questions.length, true), 2000);
            return;
        }

        setTimeout(() => { currentQuestionIndex++; nextQuestionLoader(questions); }, 2000);
    }

    // --- Initial Setup ---
    function createStarfield() {
        const container = document.body;
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.width = `${Math.random() * 2}px`;
            star.style.height = star.style.width;
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 5}s`;
            container.appendChild(star);
        }
    }

    displayHighScores();
    createStarfield();
});
