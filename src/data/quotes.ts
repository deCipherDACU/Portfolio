export interface Quote {
    text: string;
    author?: string;
    category: 'advertising' | 'filmmaking';
}

export const quotes: Quote[] = [
    {
        text: "Half the money I spend on advertising is wasted; the trouble is I don't know which half.",
        author: "John Wanamaker",
        category: "advertising"
    },
    {
        text: "Nobody reads ads. People read what interests them, and sometimes it's an ad.",
        author: "Howard Luck Gossage",
        category: "advertising"
    },
    {
        text: "We'll fix it in post.",
        category: "filmmaking"
    },
    {
        text: "The client wants to make the logo bigger and add more 'pop'.",
        category: "advertising"
    },
    {
        text: "A film is never really good unless the camera is an eye in the head of a poet.",
        author: "Orson Welles",
        category: "filmmaking"
    },
    {
        text: "Doing business without advertising is like winking at a girl in the dark. You know what you are doing but nobody else does.",
        author: "Steuart Henderson Britt",
        category: "advertising"
    },
    {
        text: "If it sounds like writing, I rewrite it.",
        author: "Elmore Leonard",
        category: "filmmaking"
    },
    {
        text: "I don't need a 60-second spot. I need a miracle.",
        category: "advertising"
    },
    {
        text: "Cinema is the most beautiful fraud in the world.",
        author: "Jean-Luc Godard",
        category: "filmmaking"
    },
    {
        text: "Make it viral.",
        category: "advertising"
    },
    {
        text: "Screenwriting is like ironing. You move back and forth a little bit, and you smooth things out.",
        author: "Paul Thomas Anderson",
        category: "filmmaking"
    },
    {
        text: "The best ideas come as jokes. Make your thinking as funny as possible.",
        author: "David Ogilvy",
        category: "advertising"
    },
    {
        text: "Continuity? Where we're going, we don't need continuity.",
        category: "filmmaking"
    },
    {
        text: "Can you make it pop?",
        category: "advertising"
    },
    {
        text: "Wait for the magic hour.",
        category: "filmmaking"
    },
    {
        text: "It’s not what you say, it’s how you say it.",
        category: "advertising"
    },
    {
        text: "Directing is 90% casting.",
        category: "filmmaking"
    },
    {
        text: "Just one more take.",
        category: "filmmaking"
    },
    {
        text: "Concept is King.",
        category: "advertising"
    }
];
