document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const mainMenu = document.getElementById('main-menu');
    const gameView = document.getElementById('game-view');
    const meervoudePlanet = document.getElementById('meervoude-planet');
    const verledeTydPlanet = document.getElementById('verlede-tyd-planet');
    const alfabetPlanet = document.getElementById('alfabet-planet');
    const voegwoordePlanet = document.getElementById('voegwoorde-planet');

    // --- Game State ---
    let currentQuestionIndex = 0;
    let score = 0;

    // --- Game Data ---
    const meervoudeQuestions = [
        { question: 'boek', options: ['boeke', 'boeks', 'boeken'], answer: 'boeke' },
        { question: 'stoel', options: ['stoele', 'stoels', 'stoelen'], answer: 'stoele' },
        { question: 'tafel', options: ['tafels', 'tafele', 'tafel'], answer: 'tafels' },
    ];
    const verledeTydQuestions = [
        { start: 'Ek', verb: 'leer', end: 'vir die toets.', answer: 'het geleer' },
        { start: 'Die hond', verb: 'hardloop', end: 'in die park.', answer: 'het gehardloop' },
        { start: 'Ons', verb: 'eet', end: 'lekker kos.', answer: 'het geëet' },
    ];
    const alfabetQuestions = [
        { question: 'Watter woord kom eerste in die alfabet?', options: ['appel', 'piesang', 'dadel'], answer: 'appel' },
        { question: 'Watter woord kom laaste in die alfabet?', options: ['son', 'maan', 'ster'], answer: 'ster' },
        { question: 'Watter woord kom eerste in die alfabet?', options: ['huis', 'boom', 'motor'], answer: 'boom' },
    ];
    const voegwoordeQuestions = [
        { question: 'Ek hou van roomys, ___ ek is allergies vir neute.', options: ['maar', 'en', 'want'], answer: 'maar' },
        { question: 'Sy is moeg, ___ sy het die hele nag geleer.', options: ['want', 'maar', 'dus'], answer: 'want' },
        { question: 'Dit reën, ___ ons gaan steeds park toe.', options: ['al', 'want', 'en'], answer: 'al' },
    ];

    // --- Event Listeners ---
    meervoudePlanet.addEventListener('click', () => startGame(meervoudeQuestions, loadMeervoudeQuestion, 'Meervoude'));
    verledeTydPlanet.addEventListener('click', () => startGame(verledeTydQuestions, loadVerledeTydQuestion, 'Verlede Tyd'));
    alfabetPlanet.addEventListener('click', () => startGame(alfabetQuestions, loadAlfabetieseVolgordeQuestion, 'Alfabetiese Volgorde'));
    voegwoordePlanet.addEventListener('click', () => startGame(voegwoordeQuestions, loadVoegwoordeQuestion, 'Voegwoorde'));

    // --- Core Functions ---
    function startGame(questions, loader) {
        mainMenu.classList.add('hidden');
        gameView.classList.remove('hidden');
        currentQuestionIndex = 0;
        score = 0;
        loader(questions);
    }

    function showFinalScore(totalQuestions) {
        gameView.innerHTML = `
            <h2>Spel Voltooi!</h2>
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

    // --- Question Loaders ---
    function loadMeervoudeQuestion(questions) {
        if (currentQuestionIndex < questions.length) {
            const q = questions[currentQuestionIndex];
            gameView.innerHTML = `
                <h2>Wat is die meervoud van...</h2>
                <div id="question-word">${q.question}</div>
                <div id="options-container">${q.options.map(o => `<button class="option">${o}</button>`).join('')}</div>
                <div id="feedback"></div><button id="back-to-menu">Terug na Kaart</button>`;
            document.querySelectorAll('.option').forEach(b => b.addEventListener('click', (e) => handleMultipleChoice(e, q, questions, loadMeervoudeQuestion)));
            document.getElementById('back-to-menu').addEventListener('click', showMainMenu);
        } else { showFinalScore(questions.length); }
    }

    function loadAlfabetieseVolgordeQuestion(questions) {
        if (currentQuestionIndex < questions.length) {
            const q = questions[currentQuestionIndex];
            gameView.innerHTML = `
                <h2>Alfabetiese Volgorde</h2>
                <div id="question-word">${q.question}</div>
                <div id="options-container">${q.options.map(o => `<button class="option">${o}</button>`).join('')}</div>
                <div id="feedback"></div><button id="back-to-menu">Terug na Kaart</button>`;
            document.querySelectorAll('.option').forEach(b => b.addEventListener('click', (e) => handleMultipleChoice(e, q, questions, loadAlfabetieseVolgordeQuestion)));
            document.getElementById('back-to-menu').addEventListener('click', showMainMenu);
        } else { showFinalScore(questions.length); }
    }

    function loadVoegwoordeQuestion(questions) {
        if (currentQuestionIndex < questions.length) {
            const q = questions[currentQuestionIndex];
            gameView.innerHTML = `
                <h2>Kies die regte voegwoord</h2>
                <div id="question-word">${q.question}</div>
                <div id="options-container">${q.options.map(o => `<button class="option">${o}</button>`).join('')}</div>
                <div id="feedback"></div><button id="back-to-menu">Terug na Kaart</button>`;
            document.querySelectorAll('.option').forEach(b => b.addEventListener('click', (e) => handleMultipleChoice(e, q, questions, loadVoegwoordeQuestion)));
            document.getElementById('back-to-menu').addEventListener('click', showMainMenu);
        } else { showFinalScore(questions.length); }
    }

    function loadVerledeTydQuestion(questions) {
        if (currentQuestionIndex < questions.length) {
            const q = questions[currentQuestionIndex];
            gameView.innerHTML = `
                <h2>Vorm die sin in die Verlede Tyd</h2>
                <div id="sentence-container"><span>${q.start}</span><input type="text" id="answer-input" placeholder="${q.verb}"><span>${q.end}</span></div>
                <button id="submit-answer">Kontroleer</button><div id="feedback"></div><button id="back-to-menu">Terug na Kaart</button>`;
            document.getElementById('submit-answer').addEventListener('click', () => handleVerledeTydAnswer(q, questions));
            document.getElementById('back-to-menu').addEventListener('click', showMainMenu);
        } else { showFinalScore(questions.length); }
    }

    // --- Answer Handlers ---
    function handleMultipleChoice(event, question, questions, nextQuestionLoader) {
        const selectedOption = event.target.innerText;
        const feedbackEl = document.getElementById('feedback');
        if (selectedOption === question.answer) {
            score++;
            feedbackEl.textContent = 'Reg! ✨';
            feedbackEl.className = 'correct';
        } else {
            feedbackEl.textContent = `Oeps! Die regte antwoord is "${question.answer}".`;
            feedbackEl.className = 'incorrect';
        }
        document.querySelectorAll('.option').forEach(b => b.disabled = true);
        setTimeout(() => { currentQuestionIndex++; nextQuestionLoader(questions); }, 2000);
    }

    function handleVerledeTydAnswer(question, questions) {
        const userAnswer = document.getElementById('answer-input').value.trim().toLowerCase();
        const correctAnswer = question.answer.toLowerCase();
        const feedbackEl = document.getElementById('feedback');
        if (userAnswer === correctAnswer) {
            score++;
            feedbackEl.textContent = 'Reg! ✨';
            feedbackEl.className = 'correct';
        } else {
            feedbackEl.textContent = `Byna! Die regte antwoord is "${question.answer}".`;
            feedbackEl.className = 'incorrect';
        }
        document.getElementById('submit-answer').disabled = true;
        setTimeout(() => { currentQuestionIndex++; loadVerledeTydQuestion(questions); }, 2000);
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
    createStarfield();
});
