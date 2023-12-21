class Cat {
    constructor(name, token, children, hasRepo, extLinks) {
        this.name = name;
        this.token = token;
        this.children = children;
        this.hasRepo = hasRepo;
        this.extLinks = extLinks;
    }
}

const tree_iao = new Cat("tree_iao", "", [
    new Cat("IN", "i", [
        new Cat("Academics", "ac", [
            new Cat("Philosophy", "phil", []),
            new Cat("Mathematics", "ma", []),
        ]),
        new Cat("Art", "a", [
            new Cat("Database", "db", []),
            new Cat("Curation", "cu", []),
        ]),
        new Cat("Music", "mu", [
            new Cat("Database", "db", []),
            new Cat("Curation", "cu", []),
        ]),
        new Cat("Literature", "l", [
            new Cat("Database", "db", []),
            new Cat("Curation", "cu", []),
        ]),
        new Cat("Film", "f", [
            new Cat("Database", "db", []),
            new Cat("Curation", "cu", []),
        ]),
        new Cat("Video Game", "g", [
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
                    }]),
                    new Cat("3Blue1Brown", "3b1b", []),
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
                new Cat("Abstract Algebra", "al", []),
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
                new Cat("Electronic & Electrical Circuits for Computer Science", "eec-cs", []),
                new Cat("Logic Circuit Design", "lcd", []),
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
                new Cat("Computer Organization & Architecture", "coa", []),
                new Cat("Systems Programming", "syspr", []),
                new Cat("Operating Systems", "os", []),
                new Cat("Theory of Programming Languages", "thlang", []),
                new Cat("Database", "db", []),
                new Cat("Software Development", "swdev", [
                    new Cat("Git & Github", "git", [
                        new Cat("Udemy Course 'The Git & Github Bootcamp' by Colt Steele", "ud_colt-steele", []),
                        new Cat("A Self-Curated Playlist on Git Subrepositories", "subrepo", []),
                    ]),
                ]),
                new Cat("Web Development", "web", [
                    new Cat("Foundational HTML/CSS/JavaScript", "fnd", [
                        new Cat("Udemy Course 'The Web Developer Bootcamp 2022' by Colt Steele", "ud_colt-steele", [], true, [{
                            title: "Udemy",
                            url: "https://www.udemy.com/course/the-web-developer-bootcamp/learn/",
                        }]),
                        new Cat("생활코딩 WEB1 - HTML & The Internet", "shcd_web-1", [], true, [{
                            title: "Youtube",
                            url: "https://www.youtube.com/playlist?list=PLuHgQVnccGMDZP7FJ_ZsUrdCGH68ppvPb"
                        }, {
                            title: "Opentutorials",
                            url: "https://opentutorials.org/course/3084"
                        }]),
                    ]),
                    new Cat("Node.js", "njs", [
                        new Cat("Udemy Course 'Understanding NPM - Node.js Package Manager' by Bogdan Stashchuk", "ud_stashchuk", [], true, [{
                            title: "Udemy",
                            url: "https://www.udemy.com/course/understanding-npm/learn/",
                        }])
                    ]),
                    new Cat("React", "react", []),
                    new Cat("Electron.js", "ejs", [
                        new Cat("Udemy Course 'Master Electron: Desktop Apps with HTML, JavaScript & CSS' by Ray Viljoen", "ud_viljoen", [], true, [{
                            title: "Udemy",
                            url: "https://www.udemy.com/course/master-electron/learn/",
                        }])
                    ]),
                    new Cat("Typescript", "ts", []),
                ]),
                new Cat("Digital Signal Processing", "dsp", []),
            ]),
            new Cat("Music & Sound", "mu", [
                new Cat("Performance", "pf", [
                    new Cat("Voice", "v", []),
                    new Cat("Guitar", "gt", []),
                    new Cat("Piano", "p", []),
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
            new Cat("Computer-Based Art", "cba", [
                new Cat("History of New Media Art", "nma-his", []),
                new Cat("Computer Graphics", "cg", [
                    new Cat("History of Computer Graphics", "his", []),
                    new Cat("OpenGL", "og", []),
                    new Cat("Shader Languages", "shlang", []),
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
                    new Cat("Unity", "unity", [
                        new Cat("Catlike Coding", "clc", [], true, [{
                            title: "Catlike Coding",
                            url: "https://catlikecoding.com/unity/tutorials/",
                        }])
                    ]),
                    new Cat("Unreal Engine", "unreal", []),
                    new Cat("vvvv", "v4", []),
                    new Cat("Houdini", "hdn", []),
                    new Cat("Blender", "bl", []),
                    new Cat("After Effects", "ae", []),
                ]),
            ]),
        ]),
        new Cat("SNU", "snu", [
            new Cat("2021년 2학기", "21-2", [
                new Cat("컴퓨터프로그래밍 (이영기)", "cp", []),
                new Cat("컴퓨터공학세미나 (김선)", "csem", []),
                new Cat("미디어디자인프로젝트 2 (이준원)", "medp", []),
                new Cat("모션그래픽디자인프로젝트 2 (정재은)", "modp", []),
            ], true),
            new Cat("2022년 1학기", "22-1", [
                new Cat("이산수학 (문봉기)", "dma", []),
                new Cat("컴퓨터프로그래밍 (이재욱)", "cp", []),
                new Cat("논리설계 (이창건)", "lcd", []),
                new Cat("IT-리더십세미나 (신영길)", "itlsem", []),
                new Cat("고급수학 및 연습 1 (조철현, 류지연)", "hc", []),
                new Cat("국내현장학습 (황지수)", "fs", []),
                new Cat("언론정보문화특강 (이준환)", "ujt", []),
            ], true),
            new Cat("2022년 2학기", "22-2", [
                new Cat("자료구조 (문봉기)", "das", []),
                new Cat("알고리즘 (문병로)", "alg", []),
                new Cat("컴퓨터구조 (김진수)", "carch", []),
                new Cat("전기전자회로 (하순회)", "eec", []),
                new Cat("공학수학 3 (김찬중)", "enma3", [], false, [{
                    title: "YouTube Playlist: 피토스터디 '수치해석'",
                    url: "https://www.youtube.com/playlist?list=PLIxff5DJJR7pETq1VTuA27LpFQMEURErF",
                }]),
                new Cat("인터랙티브미디어 (배재혁)", "ime", []),
                new Cat("산학연구실습 (임하진)", "ind", []),
            ], true),
            new Cat("2022년 겨울학기", "22-2.5", [
                new Cat("선형대수학 (김형준)", "linal", []),
                new Cat("배드민턴초급 (김정준)", "bad", []),
                new Cat("사회봉사 1 (박현희)", "volun1", []),
                new Cat("프로네시스 나눔실천단 2022 겨울 나눔교실 예산", "phro", []),
            ], true)
        ]),
    ]),
    new Cat("OUT", "o", [
        new Cat("Libraries", "libs", [
            new Cat("Music", "mu", []),
        ]),
        new Cat("Meta (Gears, Library Structure & Guides)", "meta", [
            new Cat("Music", "mu", [
                new Cat("Softwares", "sw", [
                    new Cat("DAWs", "daw", [
                        new Cat("Ableton Live 11 Suite", "al11s", []),
                        new Cat("Logic Pro X", "lpx", []),
                        new Cat("Reaper", "rpr", []),
                    ]),
                    new Cat("Plugins", "pl", [
                        new Cat("Aberrant DSP", "ab", [
                            new Cat("Digitalis", "dig", [], false, [{
                                title: "Bought from: Aberrant DSP",
                                url: "https://aberrantdsp.com/my-account/downloads/",
                            }]),
                            new Cat("ShapeShifter", "ss", [], false, [{
                                title: "Bought from: Aberrant DSP",
                                url: "https://aberrantdsp.com/my-account/downloads/",
                            }]),
                            new Cat("SketchCassette II", "sc", [], false, [{
                                title: "Bought from: Aberrant DSP",
                                url: "https://aberrantdsp.com/my-account/downloads/",
                            }]),
                        ], false, [{
                            title: "Aberrant DSP",
                            url: "https://aberrantdsp.com/",
                        }]),
                        new Cat("Arturia", "ar", [
                            new Cat("Pigments", "pg", [], false, [{
                                title: "Bought from: Arturia",
                                url: "https://www.arturia.com/myarturia#products",
                            }]),
                        ], false, [{
                            title: "Arturia",
                            url: "https://www.arturia.com/",
                        }]),
                        new Cat("Audio Modern", "am", [
                            new Cat("Filterstep", "fs", [], false, [{
                                title: "Downloaded from: Audio Modern",
                                url: "https://audiomodern.com/products/",
                            }]),
                            new Cat("Gatelab", "gl", [], false, [{
                                title: "Downloaded from: Audio Modern",
                                url: "https://audiomodern.com/products/",
                            }]),
                            new Cat("Panflow", "pf", [], false, [{
                                title: "Downloaded from: Audio Modern",
                                url: "https://audiomodern.com/products/",
                            }]),
                        ], false, [{
                            title: "Audio Modern",
                            url: "https://audiomodern.com/",
                        }]),
                        new Cat("BABY Audio", "ba", [
                            new Cat("Crystalline", "cry", [], false, [{
                                title: "Not bought from: BABY Audio",
                                url: "https://babyaud.io/all-plugins",
                            }]),
                            new Cat("Smooth Operator", "so", [], false, [{
                                title: "Not bought from: BABY Audio",
                                url: "https://babyaud.io/all-plugins",
                            }]),
                        ], false, [{
                            title: "BABY Audio",
                            url: "https://babyaud.io/"
                        }]),
                        new Cat("Cableguys", "cabg", [
                            new Cat("PanCake 2", "pc2", [], false, [{
                                title: "Downloaded from: Cableguys",
                                url: "cableguys.com/products.html",
                            }]),
                        ], false, [{
                            title: "Cableguys",
                            url: "https://www.cableguys.com/"
                        }]),
                        new Cat("chowdsp", "chow", [
                            new Cat("ChowMatrix", "cm", [], false, [{
                                title: "Downloaded from: Chowdhury DSP",
                                url: "https://chowdsp.com/products.html"
                            }]),
                            new Cat("CHOWTapeModel", "tm", [], false, [{
                                title: "Downloaded from: Chowdhury DSP",
                                url: "https://chowdsp.com/products.html"
                            }]),
                        ], false, [{
                            title: "Chowdhury DSP",
                            url: "https://chowdsp.com/index.html",
                        }]),
                        new Cat("Dada Life", "dl", [
                            new Cat("Endless Smile", "es", [], false, [{
                                title: "Bought from: Dada Life",
                                url: "https://dadalife.com/plugins/",
                            }]),
                            new Cat("Sausage Fattener", "sf", [], false, [{
                                title: "Bought from: Dada Life",
                                url: "https://dadalife.com/plugins/",
                            }]),
                        ], false, [{
                            title: "Dada Life",
                            url: "https://dadalife.com/plugins/",
                        }]),
                        new Cat("Daniel Gergely", "dg", [
                            new Cat("Emergence", "em", []),
                        ]),
                        new Cat("Decidedly", "dec", [
                            new Cat("DecentSampler", "decsam", []),
                        ]),
                        new Cat("DISTRHO", "dis", [
                            new Cat("CardinalFX", "carfx", []),
                            new Cat("CardinalSynth", "carsyn", []),
                        ]),
                        new Cat("FabFilter", "ff", [
                            new Cat("Pro-C 2", "c2", [], false, [{
                                title: "Bought from: FabFilter",
                                url: "https://www.fabfilter.com/myaccount",
                            }]),
                            new Cat("Pro-DS", "ds", [], false, [{
                                title: "Bought from: FabFilter",
                                url: "https://www.fabfilter.com/myaccount",
                            }]),
                            new Cat("Pro-G", "g", [], false, [{
                                title: "Bought from: FabFilter",
                                url: "https://www.fabfilter.com/myaccount",
                            }]),
                            new Cat("Pro-L 2", "l2", [], false, [{
                                title: "Bought from: FabFilter",
                                url: "https://www.fabfilter.com/myaccount",
                            }]),
                            new Cat("Pro-MB", "mb", [], false, [{
                                title: "Bought from: FabFilter",
                                url: "https://www.fabfilter.com/myaccount",
                            }]),
                            new Cat("Pro-Q 3", "q3", [], false, [{
                                title: "Bought from: FabFilter",
                                url: "https://www.fabfilter.com/myaccount",
                            }]),
                            new Cat("Pro-R", "r", [], false, [{
                                title: "Bought from: FabFilter",
                                url: "https://www.fabfilter.com/myaccount",
                            }]),
                            new Cat("Saturn 2", "s2", [], false, [{
                                title: "Bought from: FabFilter",
                                url: "https://www.fabfilter.com/myaccount",
                            }]),
                            new Cat("Pro-DS", "ds", [], false, [{
                                title: "Bought from: FabFilter",
                                url: "https://www.fabfilter.com/myaccount",
                            }]),
                            new Cat("Timeless 3", "tim3", [], false, [{
                                title: "Bought from: FabFilter",
                                url: "https://www.fabfilter.com/myaccount",
                            }]),
                            new Cat("Twin 2", "tw2", [], false, [{
                                title: "Bought from: FabFilter",
                                url: "https://www.fabfilter.com/myaccount",
                            }]),
                            new Cat("Volcano 3", "vol3", [], false, [{
                                title: "Bought from: FabFilter",
                                url: "https://www.fabfilter.com/myaccount",
                            }]),
                        ], false, [{
                            title: "FabFilter",
                            url: "https://www.fabfilter.com/"
                        }]),
                        new Cat("Glitchmachines", "gm", [
                            new Cat("Cataract2", "cat2", []),
                            new Cat("Convex", "cvx", []),
                            new Cat("Cryogen", "cry", []),
                            new Cat("Fracture XT", "fxt", []),
                            new Cat("Hysteresis", "hys", []),
                            new Cat("Palindrome", "pal", []),
                            new Cat("Polygon2", "pol2", []),
                            new Cat("Quadrant", "quad", []),
                            new Cat("Subvert", "sub", []),
                            new Cat("Tactic", "tac", []),
                        ], false, [{
                            title: "Bought from: Plugin Boutique",
                            url: "https://www.pluginboutique.com/myaccount",
                        }]),
                        new Cat("iZotope", "iz", [
                            new Cat("Iris 2", "i2", []),
                            new Cat("Nectar 3 Elements", "nec3e", []),
                            new Cat("Neutron 3 Elements", "neu3e", []),
                            new Cat("Ozone 10", "o10", []),
                            new Cat("RX 8", "rx8", []),
                            new Cat("Stutter Edit 2", "se2", []),
                            new Cat("VocalSynth 2", "vs2", []),
                        ]),
                        new Cat("Kilohearts", "kh", [
                            new Cat("Phase Plant", "pp", []),
                        ]),
                        new Cat("LennarDigital", "le", [
                            new Cat("Sylenth1", "s1", []),
                        ]),
                        new Cat("Madrona Labs", "ml", [
                            new Cat("Aalto", "aa", []),
                        ]),
                        new Cat("Native Instruments", "ni", [
                            new Cat("Absynth 5", "ab5", []),
                            new Cat("Battery 4", "ba4", []),
                            new Cat("FM8", "fm8", []),
                            new Cat("Maschine 2", "ma2", []),
                            new Cat("Massive", "mas", []),
                            new Cat("Massive X", "masx", []),
                            new Cat("Kontakt 7", "kon7", []),
                            new Cat("Reaktor 6", "rkt6", []),
                            new Cat("Super 8", "sup8", []),
                        ], false, [{
                            title: "Bought from: Native Instruments",
                            url: "https://www.native-instruments.com/en/account/orders/",
                        }]),
                        new Cat("Noise Engineering", "ne", []),
                        new Cat("Output", "op", [
                            new Cat("Movement", "m", [], false, [{
                                title: "Bought from: Splice",
                                url: "https://splice.com/plugins/your-plugins",
                            }]),
                            new Cat("Portal", "p", []),
                            new Cat("REV", "rev", [])
                        ], false, [{
                            title: "Bought from: Output",
                            url: "https://output.com/account/downloads",
                        }]),
                        new Cat("Photosounder", "ps", []),
                        new Cat("Plugin Boutique", "pb", [
                            new Cat("Scaler 2", "sc2", []),
                        ]),
                        new Cat("Sonic Charge", "sc", [
                            new Cat("Bitspeek", "bs", []),
                            new Cat("Echobode", "ec", []),
                            new Cat("Microtonic", "mt", []),
                            new Cat("Permut8", "p8", []),
                            new Cat("Synplant", "sp", []),
                        ]),
                        new Cat("Soundtoys", "st", [
                            new Cat("Crystallizer", "cr", []),
                            new Cat("Decapitator", "dec", []),
                            new Cat("Devil-Loc", "dl", []),
                            new Cat("EchoBoy", "eb", []),
                            new Cat("FilterFreak", "ff", []),
                            new Cat("Little Alterboy", "la", []),
                            new Cat("Little Plate", "lp", []),
                            new Cat("MicroShift", "lms", []),
                            new Cat("PanMan", "pm", []),
                            new Cat("PhaseMistress", "phm", []),
                            new Cat("PrimalTap", "pt", []),
                            new Cat("Radiator", "ra", []),
                            new Cat("Sie-Q", "sq", []),
                            new Cat("Tremolator", "trem", []),
                        ]),
                        new Cat("Spectrasonics", "sp", [
                            new Cat("Omnisphere", "om", []),
                        ]),
                        new Cat("Surge Synth Team", "sst", [
                            new Cat("Surge XT", "sxt", []),
                        ]),
                        new Cat("u-he", "uhe", [
                            new Cat("Bazille", "bz", []),
                            new Cat("Diva", "diva", []),
                            new Cat("Hive", "hive", []),
                            new Cat("Repro-1", "r1", []),
                            new Cat("Repro-5", "r5", []),
                            new Cat("TripleCheese", "tc", []),
                            new Cat("Zebra 2", "z2", []),
                        ]),
                        new Cat("Valhalla DSP, LLC", "val", [
                            new Cat("ValhallaDelay", "del", []),
                            new Cat("ValhallaFreqEcho", "freq", []),
                            new Cat("ValhallaPlate", "pl", []),
                            new Cat("ValhallaRoom", "room", []),
                            new Cat("ValhallaShimmer", "shim", []),
                            new Cat("ValhallaSpaceModulator", "spm", []),
                            new Cat("ValhallaSupermassive", "sup", []),
                            new Cat("ValhallaVintageVerb", "vv", []),
                        ]),
                        new Cat("Vital Audio", "vita", [
                            new Cat("Vital", "v", []),
                        ]),
                        new Cat("Xfer Records", "xf", [
                            new Cat("Serum", "ser", []),
                        ]),
                    ]),

                ]),
                new Cat("Harwares", "hw", []),
            ]),
        ]),
        new Cat("Projects", "proj", [
            new Cat("Music", "mu", [
                new Cat("Session 2011-2013", "s11-13", [
                    new Cat("Felm", "felm", []),
                    new Cat("Happy Deathday", "hd", []),
                ]),
                new Cat("Session 2014-2016", "s14-16", [
                    new Cat("Lucid Dreams", "ld", []),
                    new Cat("Dead MIC Society", "dms", []),
                ]),
                new Cat("Session 2017-2019", "s17-19", [
                    new Cat("병신EP", "ig", []),
                ]),
                new Cat("Session 2020-2024", "s20-24", [
                    new Cat("(an accompaniment for your disorientation) EP", "afyd", []),
                    new Cat("Happy Deathday and Lucid Dreams (Repackage)", "hdld", []),
                    new Cat("Babel", "b", []),
                    new Cat("그리고 여전히 걷고 있다", "walk", []),
                ]),
            ]),
            new Cat("Art", "a", [
                new Cat("Seoul Open Media", "som", []),
            ]),
            new Cat("Literature", "lit", []),
            new Cat("Film", "f", []),
            new Cat("Tools", "t", [
                new Cat("Hilbert", "hlb", []),
            ]),
        ]),
        new Cat("Modules", "mod", []),
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
                new Cat("(an accompaniment for your disorientation) EP (2023)", "afyd", []),
                new Cat("Happy Deathday and Lucid Dreams (Repackage) (2023)", "hdld", []),
                new Cat("Babel (2024)", "b", []),
            ]),
            new Cat("Art", "a", [
                new Cat("공간#1 (2021)", "sp1", []),
                new Cat("공간#2 (2021)", "sp2", []),
                new Cat("시간#1 (2015)", "t1", []),
                new Cat("시간#3 (2021)", "t3", []),
                new Cat("원 (2021, 공동작업)", "sowon-network", []),
            ]),
            new Cat("Film", "f", [
                new Cat("있다 (2021)", "itda", []),
                new Cat("잃어버린 것 (2024)", "lost", []),
            ]),
            new Cat("Literature", "lit", [
            ]),
        ]),
        new Cat("Client Works", "clw", [
            new Cat("네오임플란트 CRM 앱 '영업비서' 프로토타입 UI 디자인 (2022)", "neo-crm-app", [], true),
            new Cat("서울대학교 라이프아카데미 2023 프로모션 영상 (2023)", "snula23", [], true),
            new Cat("새로랜드 시즌 1 오프닝곡 '새로토닌' 녹음 (2023)", "saerotonin", [], true),
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

    if (depth === 0) {
        tokenSnake = obj.token;
    } else if (depth === 1) {
        tokenSnake += obj.token;
    } else {
        tokenSnake += "_" + obj.token;
    }

    if (obj.hasRepo === true) {
        var ghLinkSpan = bar.appendChild(document.createElement('span'));
        ghLinkSpan.classList.add('link', 'github-link');
        ghLinkSpan.innerHTML = `<a href="https://github.com/random-entity/${tokenSnake}">${tokenSnake}</a>`;
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

document.body.appendChild(objectToNestedDivs(tree_iao, "", 0));