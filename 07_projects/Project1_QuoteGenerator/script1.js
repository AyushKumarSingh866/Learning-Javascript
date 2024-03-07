// 

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes =[{
    quote:`“When you have a dream, you’ve got to grab it and never let go.”`,
    person: `Carol Burnett`
},{
    quote:`“The most important thing is to enjoy your life—to be happy—it’s all that matters.”`,
    person: `Steve Jobs`

},{
    quote:`“Spread love everywhere you go. Let no one ever come without leaving happier.”`,
    person: `Mother Teresa`
},{
    quote:`“Be yourself; everyone else is already taken.”`,
    person: `Oscar Wilde`
},{
    quote:`“The biggest adventure you can take is to live the life of your dreams.”`,
    person: `Oprah Winfrey`
},{
    quote:`“The only thing we have to fear is fear itself.”`,
    person: `Franklin D. Roosevelt`
},{
    quote:`“I can accept failure, everyone fails at something. But I can’t accept not trying.”`,
    person: `Michael Jordan`
},{
    quote:`“You’ve got to be in it to win it.” `,
    person: `Tony Robbins`
},{
    quote:`“It does not matter how slowly you go, as long as you do not stop.” `,
    person: `Confucius`
},{
    quote:`“Find out who you are and do it on purpose.”`,
    person: `Dolly Parton`
},{
    quote:`“For me, becoming isn’t about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self. The journey doesn’t end.”`,
    person: `Michelle Obama`
},{
    quote:`“Confident people have a way of carrying themselves that makes others attracted to them.”`,
    person: `Sofia Vergara`
},{
    quote:`“If you can do what you do best and be happy, you are further along in life than most people.”`,
    person: `Leonardo DiCaprio`
},{
    quote:`“You can be everything. You can be the infinite amount of things that people are.”`,
    person: `Kesha`
},{
    quote:`“Always go with your passions. Never ask yourself if it’s realistic or not.”`,
    person: `Deepak Chopra`
},{
    quote:`“When you change your thoughts, remember to also change your world.”`,
    person: `Norman Vincent Peale`
},{
    quote:`“The more you know who you are, and what you want, the less you let things upset you.” `,
    person: `Stephanie Perkins`
},{
    quote:`“By being yourself, you put something wonderful in the world that was not there before.” `,
    person: `Edwin Elliot`
},{
    quote:`“Do one thing every day that scares you.”`,
    person: `Eleanor Roosevelt`
},{
    quote:`“It is never too late to be what you might have been.”`,
    person: `George Elliot`
},{
    quote:`“Find out who you are and be that person. That’s what your soul was put on this earth to be. Find the truth, live that truth, and everything else will come.” `,
    person: `Ellen DeGeneres`
},{
    quote:`“If you cannot do great things, do small things in a great way.”`,
    person: `Napoleon Hill`
},{
    quote:`“Always do your best. What you plant now, you will harvest later.” `,
    person: `Og Mandino`
},{
    quote:`“When we are no longer able to change a situation, we are challenged to change ourselves.”`,
    person: `MViktor E. Frankl`
},{
    quote:`“Failure is a great teacher and, if you are open to it, every mistake has a lesson to offer.”`,
    person: `Oprah Winfrey`
}

    
];

btn.addEventListener('click', function () {

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
    
})