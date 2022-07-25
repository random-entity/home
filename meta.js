class Cat {
    constructor(name, token, children, hasRepo) {
        this.name = name;
        this.token = token;
        this.children = children;
        this.hasRepo = hasRepo;
    }
}

const iaoTree = new Cat("iao_root", "", [
    new Cat("IN", "i", [
        new Cat("Music", "mu", [
            new Cat("Database", "db", []),
            new Cat("Curation", "cur", []),
        ]),
        new Cat("Film & Video", "fv", [
            new Cat("Database", "db", []),
            new Cat("Curation", "cur", []),
        ]),
        new Cat("Fine Art", "ar", [
            new Cat("Database", "db", []),
            new Cat("Curation", "cur", []),
        ]),
        new Cat("Literature", "l", [
            new Cat("Database", "db", []),
            new Cat("Curation", "cur", []),
        ]),
    ]),
    new Cat("ACTION", "a", [
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
        new Cat("Learn", "l", [
            new Cat("Mathematics", "ma", [
                new Cat("Linear Algebra", "linal", []),
                new Cat("Set Theory", "set", []),
                new Cat("Calculus", "cal", [
                    new Cat("Calculus I & II by Kim Hongjong", "khj", []),
                ]),
                new Cat("Real Analysis", "ran", [
                    new Cat("해석개론 by 김-김-계", "ggg", []),
                    new Cat("Principles of Mathematical Analysis by Rudin", "rudin", []),
                    new Cat("Elementary Classical Analysis by Marsden", "marsden", []),
                ]),
                new Cat("Complex Analysis", "can", []),
                new Cat("Differential Equations", "deq", []),
                new Cat("Differential Geometry", "dg", []),
                new Cat("Abstract Algebra", "aal", []),
                new Cat("Topology", "top", []),
                new Cat("Number Theory", "num", []),
                new Cat("Discrete Mathematics", "dma", []),
                new Cat("Engineering Mathematics", "en", [
                    new Cat("SNUON 공학수학 1", "snu1", []),
                    new Cat("SNUON 공학수학 2", "snu2", []),
                    new Cat("피토스터디 공학수학 3", "snu3", []),
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
                            new Cat("Udemy Course 'The Web Developer Bootcamp 2022' by Colt Steele", "ud_colt-steele", []),
                        ]),
                        new Cat("Node.js", "njs", []),
                        new Cat("Electron.js", "ejs", []),
                        new Cat("Typescript", "ts", []),
                    ]),
                ]),
                new Cat("Digital Signal Processing", "dsp", []),
            ]),
            new Cat("Music", "mu", [
                new Cat("Performance", "perf", []),
                new Cat("Music Theory & Analysis", "than", []),
                new Cat("Music History", "his", []),
                new Cat("Electronic Music", "e", [
                    new Cat("Theoretical Foundations", "fnd", [
                        new Cat("Digital Audio Processing", "dap", []),
                        new Cat("Sound Systhesis & Audio Effects", "synfx", []),
                        new Cat("History of Electronic Music", "his", []),
                    ]),
                    new Cat("Creation Tools", "ct", [
                        new Cat("Audio Programming", "aup", [
                            new Cat("Max/MSP", "max", []),
                            new Cat("ChucK", "ch", []),
                            new Cat("SuperCollider", "sc", []),
                            new Cat("Teensyduino", "tns", []),
                            new Cat("JUCE", "ju", []),
                        ]),
                        new Cat("Ableton Live 11", "al", []),
                        new Cat("Logic Pro X", "lo", []),
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
                    new Cat("Processing", "proc", []),
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

        ]),
    ]),
    new Cat("OUT", "o", [
        new Cat("Projects", "proj", [
            new Cat("Music", "mu", [
                new Cat("Felm (2012)", "felm", []),
                new Cat("Happy Deathday (2013)", "hd", []),
                new Cat("Lucid Dreams (2016)", "ld", []),
                new Cat("병신EP (2019)", "ig", []),
                new Cat("afyd (TBD)", "afyd", []),
            ]),
            new Cat("Film & Video", "fv", [
                new Cat("있다 (2021)", "itda", []),
            ]),
            new Cat("Art & Multimedia", "mmd", [
                new Cat("공간#1 (2021)", "sp1", []),
                new Cat("공간#2 (2021)", "sp2", []),
            ]),
            new Cat("Literature", "lit", [
                new Cat("시간#1 (2015)", "t1", []),
            ]),
            new Cat("Tools", "t", [
                new Cat("Hilbert", "hlb", []),
            ]),
        ]),
        new Cat("Portfolio", "ov", []),
    ])
]);

function objectToNestedDivs(obj, tokenSnake, depth) {
    var node = document.createElement('div');

    if (depth === 0) {
        node.setAttribute('class', 'root');
    } else {
        node.setAttribute('data-role', 'collapsible');
    }

    var nameSpan = node.appendChild(document.createElement('span'));
    nameSpan.innerHTML = obj.name;

    if (depth > 0) {
        nameSpan.setAttribute('class', 'name');

        var tokenSpan = nameSpan.appendChild(document.createElement('span'));
        tokenSpan.setAttribute('class', 'token');
        tokenSpan.innerHTML = obj.token;
    }

    tokenSnake += "_" + obj.token;

    if (obj.children.length === 0 || obj.hasRepo === true) {
        var linkSpan = node.appendChild(document.createElement('span'));
        linkSpan.setAttribute("class", "link");
        var repoName = tokenSnake.substring(2);
        linkSpan.innerHTML = `<a class="link" href="https://github.com/random-entity/${repoName}">${repoName}</a>`;
    }

    obj.children.forEach(
        child => node.appendChild(objectToNestedDivs(child, tokenSnake, depth + 1))
    );

    return node;
}

document.body.appendChild(objectToNestedDivs(iaoTree, "", 0));