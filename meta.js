class Cat {
    constructor(name, token, children) {
        this.name = name;
        this.token = token;
        this.children = children;
    }
}

let tree = new Cat("root_iao", "",
    [
        new Cat("IN", "i", [
            new Cat("Music", "mu", []),
            new Cat("Film & Video", "fv", []),
            new Cat("Fine Art", "a", []),
            new Cat("Literature", "l", []),
        ]),
        new Cat("ACTION", "a", [
            new Cat("Learn", "l", [
                new Cat("Mathematics", "ma", [
                    new Cat("Linear Algebra", "linal", []),
                    new Cat("Set Theory", "st", []),
                    new Cat("Real Analysis & Calculus", "ran", [
                        new Cat("Calculus by Kim Hongjong", "khj", []),
                        new Cat("Principles of Mathematical Analysis by Rudin", "rudin", []),
                    ]),
                    new Cat("Complex Analysis", "can", []),
                    new Cat("Differential Equations", "deq", []),
                    new Cat("Differential Geometry", "dg", []),
                    new Cat("Abstract Algebra", "aal", []),
                    new Cat("Topology", "top", []),
                    new Cat("Number Theory", "num", []),
                    new Cat("Engineering Mathematics", "en", [
                        new Cat("SNUON 공학수학 1", "1on", []),
                        new Cat("SNUON 공학수학 2", "2on", []),
                        new Cat("피토스터디 공학수학 3", "3ps", []),
                    ]),
                ]),
                new Cat("Computer Science & Engineering", "cse", [
                    new Cat("Foundations", "fnd", [
                        new Cat("Discrete Mathematics", "dma", []),
                        new Cat("Computer Programming", "cp", [
                            new Cat("Programming Languages", "lang", [
                                new Cat("C", "c", []),
                                new Cat("C++", "cpp", []),
                                new Cat("Java", "java", []),
                                new Cat("Python", "py", []),
                            ]),
                        ]),
                        new Cat("Logic Circuit Design", "lcd", []),
                        new Cat("Electronic & Electrical Circuits", "eec", []),
                        new Cat("Data Structures", "das", []),
                        new Cat("Computer Architecture", "carch", []),
                        new Cat("Systems Programming", "syspr", []),
                        new Cat("Algorithms", "alg", []),
                        new Cat("Operating Systems", "os", []),
                        new Cat("Theory of Programming Languages", "thlang", []),
                    ]),
                    new Cat("Software Development", "swdev", [
                        new Cat("Git & Github", "git", []),
                        new Cat("Web Development", "web", [
                            new Cat("Foundational HTML/CSS/JavaScript", "fnd", []),
                            new Cat("Node.js", "nodejs", [])
                        ]),
                    ]),
                    new Cat("Database", "db", []),
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
                    new Cat("Digital Video Processing", "dvp", []),
                ]),
                new Cat("Multimedia", "mmd", [
                    new Cat("Creation Tools", "ct", [
                        new Cat("Processing", "proc", []),
                        new Cat("OpenFrameworks", "of", []),
                        new Cat("TouchDesigner", "td", []),
                        new Cat("Unity", "un", []),
                        new Cat("vvvv", "v4", []),
                        new Cat("Houdini", "hdn", []),
                        new Cat("Blender", "bln", []),
                        new Cat("After Effects", "ae", []),
                    ]),
                ]),

            ]),
        ]),
        new Cat("OUT", "o", [
            new Cat("Projects", "proj", [
                new Cat("Music & Sound", "mu", []),
                new Cat("Film & Video", "fv", []),
                new Cat("Multimedia", "mmd", []),
                new Cat("Literature", "lit", []),
                new Cat("Tools", "t", []),
            ]),
            new Cat("Portfolio", "ov", []),
        ])
    ]
);

function objectToNestedDivs(obj, tokenSnake) {
    var node = document.createElement('div');

    node.innerHTML = `<span class="name">` + obj.name + `</span><span class="token">` + obj.token + `</span>`;
    tokenSnake += "_" + obj.token;

    if (obj.children.length === 0) {
        var linkNode = node.appendChild(document.createElement('span'));
        linkNode.setAttribute("class", "link");
        var repoName = tokenSnake.substring(2);
        linkNode.innerHTML = `<a class="link" href="https://github.com/random-entity/${repoName}">${repoName}</a>`;
    }

    obj.children.forEach(child => node.appendChild(objectToNestedDivs(child, tokenSnake)));

    return node;
}

root_aio.appendChild(objectToNestedDivs(tree, ""));