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
            new Cat("Curation", "cu", []),
        ], true),
        new Cat("Film", "f", [
            new Cat("Database", "db", []),
            new Cat("Curation", "cu", []),
        ]),
        new Cat("Art", "a", [
            new Cat("Database", "db", []),
            new Cat("Curation", "cu", []),
        ]),
        new Cat("Literature", "l", [
            new Cat("Database", "db", []),
            new Cat("Curation", "cu", []),
        ]),
    ]),
    new Cat("ACTION", "a", [
        new Cat("Learn", "l", [
            new Cat("Mathematics", "ma", [
                new Cat("Linear Algebra", "lin", [
                    new Cat("MIT OpenCourseware 'Linear Algebra' by Gilbert Strang", "mit_strang", [], true, [{
                        title: "MIT OCW",
                        url: "https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/",
                    }, {
                        title: "YouTube",
                        url: "https://www.youtube.com/playlist?list=PL221E2BBF13BECF6C",
                    }])
                ]),
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
                new Cat("Differential Equations", "de", [
                    new Cat("MIT OpenCourseware 'Differential Equations' by Arthur Mattuck", "mit_mattuck", [], true, [{
                        title: "MIT OCW",
                        url: "https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/",
                    }, {
                        title: "YouTube",
                        url: "https://www.youtube.com/playlist?list=PLEC88901EBADDD980",
                    }]),
                    new Cat("MIT OpenCourseware 'Learn Differential Equations: Up Close with Gilbert Strang and Cleve Moler'", "mit_strang-moler", [], true, [{
                        title: "MIT OCW",
                        url: "https://ocw.mit.edu/courses/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/",
                    }, {
                        title: "YouTube",
                        url: "https://www.youtube.com/playlist?list=PLUl4u3cNGP63oTpyxCMLKt_JmB0WtSZfG",
                    }]),
                ]),
                new Cat("Differential Geometry", "dg", []),
                new Cat("Abstract Algebra", "aal", []),
                new Cat("Topology", "top", []),
                new Cat("Number Theory", "num", []),
                new Cat("Discrete Mathematics", "dma", []),
                new Cat("Engineering Mathematics", "en", [
                    new Cat("SNUON '공학수학 1' by 심형보", "snu-1_shb", [], true, [{
                        title: "SNUON",
                        url: "http://etl.snu.ac.kr/course/view.php?id=215961",
                    }]),
                    new Cat("SNUON '공학수학 2' by (TBD)", "snu-2_(tbd)", []),
                ]),
                new Cat("A Curation of Fun Math Resources", "fun-cu", []),
            ]),
            new Cat("Computer Science & Engineering", "cse", [
                new Cat("Logic Circuit Design", "lcd", []),
                new Cat("Electronic & Electrical Circuits", "eec", []),
                new Cat("Computer Programming", "p", [
                    new Cat("C", "c", []),
                    new Cat("C++", "cpp", []),
                    new Cat("Java", "java", []),
                    new Cat("Python", "py", []),
                ]),
                new Cat("Data Structures & Algorithms", "das-alg", [
                    new Cat("Udemy Course 'Master the Coding Interview: Data Structures + Algorithms' by Andrei Neagoie", "ud_neagoie", [], [{
                        title: "Udemy",
                        url: "https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/",
                    }]),
                    new Cat("Udemy Course 'JavaScript Algorithms and Data Structures Masterclass' by Colt Steele", "ud_colt-steele", [], [{
                        title: "Udemy",
                        url: "https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/",
                    }]),
                ]),
                new Cat("Computer Architecture", "carch", []),
                new Cat("Systems Programming", "syspr", []),
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
                                url: "https://www.udemy.com/course/the-web-developer-bootcamp/learn/",
                            }]),
                        ]),
                        new Cat("Node.js", "njs", [
                            new Cat("Udemy Course 'Understanding NPM - Node.js Package Manager' by Bogdan Stashchuk", "ud_stashchuk", [], true, [{
                                title: "Udemy",
                                url: "https://www.udemy.com/course/understanding-npm/learn/",
                            }])
                        ]),
                        new Cat("Electron.js", "ejs", [
                            new Cat("Udemy Course 'Master Electron: Desktop Apps with HTML, JavaScript & CSS' by Ray Viljoen", "ud_viljoen", [], true, [{
                                title: "Udemy",
                                url: "https://www.udemy.com/course/master-electron/learn/",
                            }])
                        ]),
                        new Cat("React", "react", []),
                        new Cat("Typescript", "ts", []),
                    ]),
                ]),
                new Cat("Digital Signal Processing", "dsp", []),
            ]),
            new Cat("Music & Sound", "mu", [
                new Cat("Performance", "pf", [
                    new Cat("Voice", "v", []),
                    new Cat("Guitar", "gt", []),
                ]),
                new Cat("Music Theory", "th", []),
                new Cat("Case Analyses", "an", []),
                new Cat("Music History", "his", []),
                new Cat("Electronic Music", "e", [
                    new Cat("Audio Signal Processing", "audsp", [
                        new Cat("Coursera Course 'Digital Signal Processing 1: Basic Concepts and Algorithms' by École Polytechnique Fédérale de Lausanne", "crs_epfl-1", [], true, [{
                            title: "Coursera",
                            url: "https://www.coursera.org/learn/dsp1/home/",
                        }])
                    ], false, [{
                        title: "metaguide",
                        url: "https://dsp.stackexchange.com/questions/9194/learning-roadmap-for-the-audio-signal-processing-beginner",
                    }]),
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
                        new Cat("Native Instruments", "ni", [
                            new Cat("Kontakt", "k", [
                                new Cat("Kadenze Course 'Sound Design with Kontakt' by Loudon Stearns from Berklee College of Music", "kdz_bcm", [], true, [{
                                    title: "Kadenze",
                                    url: "https://www.kadenze.com/courses/sound-design-with-kontakt-i/sessions",
                                }])
                            ]),
                            new Cat("Reaktor", "r", [
                                new Cat("Kadenze Course 'Sound Synthesis Using Reaktor' by Owen Vallis from CalArts", "kdz_cal", [], true, [{
                                    title: "Kadenze",
                                    url: "https://www.kadenze.com/courses/sound-synthesis-using-reaktor-vi/sessions",
                                }])
                            ]),
                            new Cat("Absynth", "ab", []),
                            new Cat("Massive", "ma", []),
                            new Cat("Massive X", "mx", []),
                        ]),
                        new Cat("Xfer Serum", "ser", []),
                        new Cat("Spectrasonics Omnisphere 2", "omni", []),
                    ]),
                ]),
            ]),
            new Cat("Computer-Aided Art", "caa", [
                new Cat("History of New Media Art", "nma-his", []),
                new Cat("Computer Graphics", "cg", [
                    new Cat("History of Computer Graphics", "his", []),
                    new Cat("OpenGL", "og", []),
                    new Cat("Shader Languages", "sl", []),
                    new Cat("Digital Video Processing", "dvp", []),
                ]),
                new Cat("Mathematical Visualization", "mavi", []),
                new Cat("Creation Tools", "ct", [
                    new Cat("Processing", "proc", [
                        new Cat("'Learning Processing' by Daniel Shiffman", "shiffman_lp", []),
                        new Cat("'The Nature of Code' by Daniel Shiffman", "shiffman_nc", []),
                    ]),
                    new Cat("p5.js", "p5", []),
                    new Cat("Three.js", "3js", []),
                    new Cat("JavaScript", "js", [
                        new Cat("Domestika Course 'Creative Coding: Making Visuals with JavaScript' by Bruno Imbrizi", "dom_bruno-imbrizi", [], true, [{
                            title: "Domestika",
                            url: "https://www.domestika.org/en/courses/2729-creative-coding-making-visuals-with-javascript",
                        }])
                    ]),
                    new Cat("OpenFrameworks", "of", []),
                    new Cat("TouchDesigner", "td", []),
                    new Cat("Unity", "un", [
                        new Cat("Catlike Coding", "clc", [], true, [{
                            title: "Catlike Coding",
                            url: "https://catlikecoding.com/unity/tutorials/",
                        }])
                    ]),
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
                new Cat("알고리즘 (문병로)", "alg", []),
                new Cat("컴퓨터구조 (김진수)", "carch", []),
                new Cat("전기전자회로 (하순회)", "eec", []),
                new Cat("공학수학 3 (김찬중)", "enma3", [], true, [{
                    title: "YouTube Playlist: 피토스터디 '수치해석'",
                    url: "https://www.youtube.com/playlist?list=PLIxff5DJJR7pETq1VTuA27LpFQMEURErF",
                }]),
            ], true),
        ]),
    ]),
    new Cat("OUT", "o", [
        new Cat("Meta (Gears Inventory, Workflow & Guide)", "meta", [
            new Cat("Music", "mu", [
                new Cat("Softwares", "sw", [
                    new Cat("DAWs", "daw", []),
                    new Cat("Plugins", "pl", []),
                ]),
            ], true),
        ]),
        new Cat("Modules", "mod", []),
        new Cat("Projects", "proj", [
            new Cat("Music", "mu", [
                new Cat("Session 2011-2013", "s11-13", []),
                new Cat("Session 2014-2016", "s14-16", []),
                new Cat("Session 2017-2019", "s17-19", []),
                new Cat("Session 2020-2022", "s20-22", []),
            ]),
            new Cat("Art", "a", []),
            new Cat("Film", "f", []),
            new Cat("Tools", "t", [
                new Cat("Hilbert", "hlb", []),
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