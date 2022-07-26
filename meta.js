class Cat {
    constructor(name, token, children, hasRepo, extLinks) {
        this.name = name;
        this.token = token;
        this.children = children;
        this.hasRepo = hasRepo;
        this.extLinks = extLinks;
    }
}

const iaoTree = new Cat("iao_root", "", [
    new Cat("IN", "i", [
        new Cat("Music", "mu", [
            new Cat("Database", "db", []),
            new Cat("Curation", "cur", []),
        ], true),
        new Cat("Film", "f", [
            new Cat("Database", "db", []),
            new Cat("Curation", "cur", []),
        ]),
        new Cat("Art", "a", [
            new Cat("Database", "db", []),
            new Cat("Curation", "cur", []),
        ]),
        new Cat("Literature", "l", [
            new Cat("Database", "db", []),
            new Cat("Curation", "cur", []),
        ]),
    ]),
    new Cat("ACTION", "a", [
        new Cat("Learn", "l", [
            new Cat("Mathematics", "ma", [
                new Cat("Linear Algebra", "linal", []),
                new Cat("Set Theory", "set", []),
                new Cat("Calculus", "cal", [
                    new Cat("'Calculus I & II' by Kim Hongjong", "khj", []),
                ]),
                new Cat("Real Analysis", "ran", [
                    new Cat("'해석개론' by 김-김-계", "ggg", []),
                    new Cat("'Principles of Mathematical Analysis' by Rudin", "rudin", []),
                    new Cat("'Elementary Classical Analysis' by Marsden", "marsden", []),
                ]),
                new Cat("Complex Analysis", "can", []),
                new Cat("Differential Equations", "deq", []),
                new Cat("Differential Geometry", "dg", []),
                new Cat("Abstract Algebra", "aal", []),
                new Cat("Topology", "top", []),
                new Cat("Number Theory", "num", []),
                new Cat("Discrete Mathematics", "dma", []),
                new Cat("Engineering Mathematics", "en", [
                    new Cat("SNUON '공학수학 1'", "snu1", []),
                    new Cat("SNUON '공학수학 2'", "snu2", []),
                    new Cat("피토스터디 '공학수학 3'", "snu3", []),
                ]),
            ]),
            new Cat("Computer Science & Engineering", "cse", [
                new Cat("Computer Programming", "p", [
                    new Cat("C", "c", []),
                    new Cat("C++", "cpp", []),
                    new Cat("Java", "java", []),
                    new Cat("Python", "py", []),
                ]),
                new Cat("Logic Circuit Design", "lcd", []),
                new Cat("Electronic & Electrical Circuits", "eec", []),
                new Cat("Data Structures", "das", []),
                new Cat("Computer Architecture", "carch", []),
                new Cat("Systems Programming", "syspr", []),
                new Cat("Algorithms", "alg", []),
                new Cat("Operating Systems", "os", []),
                new Cat("Theory of Programming Languages", "thlang", []),
                new Cat("Database", "db", []),
                new Cat("Software Development", "swdev", [
                    new Cat("Git & Github", "git", [
                        new Cat("Udemy Course 'The Git & Github Bootcamp' by Colt Steele", "ud_colt-steele", []),
                        new Cat("A Self-Curated Playlist on Git Subrepositories", "subrepo", []),
                    ]),
                    new Cat("Web Development", "web", [
                        new Cat("Foundational HTML/CSS/JavaScript", "fnd", [
                            new Cat("Udemy Course 'The Web Developer Bootcamp 2022' by Colt Steele", "ud_colt-steele", [], true, [{
                                title: "Udemy",
                                url: "https://www.udemy.com/course/the-web-developer-bootcamp/learn/lecture/",
                            }]),
                        ]),
                        new Cat("Node.js", "njs", []),
                        new Cat("Electron.js", "ejs", []),
                        new Cat("Typescript", "ts", []),
                    ]),
                ]),
                new Cat("Digital Signal Processing", "dsp", []),
            ]),
            new Cat("Music & Sound", "mu", [
                new Cat("Performance", "perf", []),
                new Cat("Music Theory & Analysis", "than", []),
                new Cat("Music History", "his", []),
                new Cat("Electronic Music", "e", [
                    new Cat("Digital Audio Processing", "dap", []),
                    new Cat("Sound Systhesis & Audio Effects", "synfx", []),
                    new Cat("History of Electronic Music", "his", []),
                    new Cat("Audio Programming", "aup", [
                        new Cat("Max/MSP", "max", [
                            new Cat("Kadenze Course 'Max MSP Programming Course: Structuring Interactive Software for Digital Arts' by Matt Wright", "kdz_matt-wright", [], true, [{
                                title: "Kadenze",
                                url: "https://www.kadenze.com/courses/max-msp-programming-course-structuring-interactive-software-for-digital-arts/sessions",
                            }]),
                        ]),
                        new Cat("ChucK", "ch", [
                            new Cat("Kadenze Course 'Introduction to Real-Time Audio Programming in ChucK' by Ajay Kapur", "kdz_ajay-kapur", [], true, [{
                                title: "Kadenze",
                                url: "https://www.kadenze.com/courses/introduction-to-real-time-audio-programming-in-chuck/sessions",
                            }])
                        ]),
                        new Cat("SuperCollider", "sc", []),
                        new Cat("Teensyduino", "tns", []),
                        new Cat("JUCE", "ju", [
                            new Cat("Kadenze Course 'Intro to Audio Plugin Development' by Output Developer Jacob Penn", "kdz_output", [], true, [{
                                title: "Kadenze",
                                url: "https://www.kadenze.com/courses/intro-to-audio-plugin-development/sessions",
                            }]),
                        ]),
                    ]),
                    new Cat("Creation Tools", "ct", [
                        new Cat("Ableton Live 11", "al", []),
                        new Cat("Logic Pro X", "lpx", []),
                        new Cat("Native Instruments Komplete 13", "ni", [
                            new Cat("Kontakt", "k", []),
                            new Cat("Reaktor", "r", []),
                            new Cat("Absynth", "ab", []),
                        ]),
                        new Cat("Xfer Serum", "ser", []),
                    ]),
                ]),
            ]),
            new Cat("Computer Graphics", "cg", [
                new Cat("History of Computer Graphics", "his", []),
                new Cat("OpenGL", "og", []),
                new Cat("Shader Languages", "sl", []),
                new Cat("Digital Video Processing", "dvp", []),
            ]),
            new Cat("New Media Art", "nma", [
                new Cat("History of New Media Art", "his", []),
                new Cat("Creation Tools", "ct", [
                    new Cat("Processing", "proc", [
                        new Cat("'Learning Processing' by Daniel Shiffman", "shiffman_lp", []),
                        new Cat("'The Nature of Code' by Daniel Shiffman", "shiffman_nc", []),
                    ]),
                    new Cat("p5.js", "p5", []),
                    new Cat("Three.js", "3js", []),
                    new Cat("OpenFrameworks", "of", []),
                    new Cat("TouchDesigner", "td", []),
                    new Cat("Unity", "un", []),
                    new Cat("vvvv", "v4", []),
                    new Cat("Houdini", "hdn", []),
                    new Cat("Blender", "bl", []),
                    new Cat("After Effects", "ae", []),
                ]),
            ]),
            new Cat("Languages", "lang", [
                new Cat("Japanese", "jp", [
                    new Cat("EBSi 2023 수능 강의", "ebsi23", []),
                ]),
            ]),
        ]),
        new Cat("SNU", "snu", [
            new Cat("2021-2", "2021-2", [], true),
            new Cat("2022-1", "2022-1", [
                new Cat("이산수학 (문봉기)", "dma", []),
                new Cat("컴퓨터프로그래밍 (이재욱)", "cp", []),
                new Cat("논리설계 (이창건)", "lcd", []),
                new Cat("고급수학 및 연습 1 (조철현, 류지연)", "hc", []),
            ], true),
            new Cat("2022-2", "2022-2", [
                new Cat("자료구조 (문봉기)", "das", []),
                new Cat("컴퓨터구조 (김진수)", "carch", []),
                new Cat("전기전자회로 (하순회)", "eec", []),
                new Cat("공학수학 3 (김찬중)", "enma3", []),
            ], true),
        ]),
    ]),
    new Cat("OUT", "o", [
        new Cat("Projects", "proj", [
            new Cat("Music Creation", "muc", [
                new Cat("Meta Workflow Guide", "meta", [
                    new Cat("Ableton Live", "al", []),
                    new Cat("Logic Pro X", "lpx", []),
                    new Cat("Native Instruments", "ni", []),
                    new Cat("iZotope", "iz", []),
                    new Cat("_Wishlist", "wl", []),
                ], true),
                new Cat("Session 2011-2013", "s11-13", []),
                new Cat("Session 2014-2016", "s14-16", []),
                new Cat("Session 2017-2019", "s17-19", []),
                new Cat("Session 2020-2022", "s20-22", []),
            ]),
        ]),
        new Cat("Portfolio", "ov", [
            new Cat("Music", "mu", [
                new Cat("Felm (2012)", "felm", [], true, [{
                    title: "Bandcamp",
                    url: "https://yakpanteki.bandcamp.com/album/felm",
                }]),
                new Cat("Happy Deathday (2013)", "hd", []),
                new Cat("Lucid Dreams (2016)", "ld", []),
                new Cat("병신EP (2019)", "ig", [], true, [{
                    title: "Bandcamp",
                    url: "https://yakpanteki.bandcamp.com/album/ep",
                }]),
                new Cat("afyd (TBD)", "afyd", []),
            ]),
            new Cat("Art", "a", [
                new Cat("공간#1 (2021)", "sp1", []),
                new Cat("시간#3 (2021)", "t3", []),
                new Cat("원 (2021, 공동작업)", "sowon-network", []),
                new Cat("공간#2 (2021)", "sp2", []),
            ]),
            new Cat("Film", "f", [
                new Cat("있다 (2021)", "itda", []),
            ]),
            new Cat("Literature", "lit", [
                new Cat("시간#1 (2015)", "t1", []),
            ]),
            new Cat("Tools", "t", [
                new Cat("Hilbert", "hlb", []),
            ]),
        ]),
    ])
]);

function objectToNestedDivs(obj, tokenSnake, depth) {
    var ul = document.createElement('ul');
    if (depth === 0) {
        ul.classList.add('root');
    }

    var bar = ul.appendChild(document.createElement('div'));
    if (obj.children.length > 0) {
        bar.classList.add('collapseTrigger');
    }
    if (depth > 0) {
        ul.classList.add('nested');
    }
    if (depth > 1) {
        ul.classList.add('inactive');
    }

    var nameSpan = bar.appendChild(document.createElement('span'));
    nameSpan.innerHTML = obj.name;
    if (depth > 0) {
        nameSpan.setAttribute('class', 'name');

        var tokenSpan = nameSpan.appendChild(document.createElement('span'));
        tokenSpan.setAttribute('class', 'token');
        tokenSpan.innerHTML = obj.token;
    }

    tokenSnake += "_" + obj.token;

    if (obj.children.length === 0 || obj.hasRepo === true) {
        var ghLinkSpan = bar.appendChild(document.createElement('span'));
        ghLinkSpan.classList.add('link', 'github-link');
        var repoName = tokenSnake.substring(2);
        ghLinkSpan.innerHTML = `<a href="https://github.com/random-entity/${repoName}">${repoName}</a>`;
    }

    if (obj.extLinks && Array.isArray(obj.extLinks)) {
        obj.extLinks.forEach(extLink => {
            var extLinkSpan = bar.appendChild(document.createElement('span'));
            extLinkSpan.classList.add('link', 'external-link');
            extLinkSpan.innerHTML = `<a href="${extLink.url}">${extLink.title}</a>`;
        })
    }

    obj.children.forEach(
        child => {
            var li = ul.appendChild(document.createElement('li'));
            li.appendChild(objectToNestedDivs(child, tokenSnake, depth + 1));
        }
    );

    return ul;
}

document.body.appendChild(objectToNestedDivs(iaoTree, "", 0));