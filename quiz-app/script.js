
    const quizData =
    [
        {
            question: 'How old is Kiran?',
            a: '12',
            b: '25',
            c: '39',
            d: '67',
            correct: 'c'
        },
        {
            question: 'What is the most used programming language in 2019?',
            a: 'Java',
            b: 'C',
            c: 'Python',
            d: 'JavaScript',
            correct: 'd'
        },
        {
            question: 'Who was President of the USA in 2020?',
            a: 'Kiran Anand',
            b: 'Tony Blair',
            c: 'Donal Trump',
            d: 'Dalai Lama',
            correct: 'c'
        },
        {
            question: 'What does HTML stand for?',
            a: 'Hypertext Markup Language',
            b: 'Cascading Style Sheet',
            c: 'Jason Object Notation',
            d: 'Application Programming Interface',
            correct: 'a'
        },
        {
            question: 'What year was JavaScript launched?',
            a: '1994',
            b: '1995',
            c: '1996',
            d: 'None of the above',
            correct: 'b'
        }
    ];

    const quiz = document.getElementById("quiz");
    const answerEls = document.querySelectorAll('.answer');
    const question = document.getElementById('question');
    const aText = document.getElementById('aText');
    const bText = document.getElementById('bText');
    const cText = document.getElementById('cText');
    const dText = document.getElementById('dText');
    const submitButton = document.getElementById('submit');

    let currentQuiz = 0;
    let score = 0;

    loadQuiz();

    function loadQuiz()
    {
        deselectAnswers();

        const currentQuizData = quizData[currentQuiz];
        question.innerHTML = currentQuizData.question;

        aText.innerText = currentQuizData.a;
        bText.innerText = currentQuizData.b;
        cText.innerText = currentQuizData.c;
        dText.innerText = currentQuizData.d;

    }

    function getSelected()
    {
        let nswer = undefined;

        answerEls.forEach(answerEl =>
        {
            if(answerEl.checked)
            {
                answer = answerEl.id;
            }
        })

        return answer;
    }

    function deselectAnswers()
    {
        answerEls.forEach((answerEl) =>
        {
            answerEl.checked = false;
        });
    }

    submitButton.addEventListener('click', () =>
    {
        const answer = getSelected();

        if(answer)
        {
            if(answer === quizData[currentQuiz].correct)
            {
                score++;
            }

            currentQuiz++;

            if(currentQuiz < quizData.length)
            {
                loadQuiz();
            }
            else
            {
                quiz.innerHTML =
                `
                    <h2>You answered ${score}/${quizData.length} questions correctly.</h2>
                    <button onclick="location.reload()">Reload</button>
                `;
            }
        }


    })


