/* =========================================
   YOJANA MITRA
   Government Scheme Finder
========================================= */


/* =========================================
   SAMPLE SCHEMES
   These are prototype / illustrative data.
========================================= */

const schemes = [

    {
        id: 1,

        name: "PM-KISAN",

        icon: "🌾",

        description:
            "Income support for eligible farmer families with agricultural land.",

        benefit:
            "Financial support",

        benefitText:
            "Illustrative benefit for prototype",

        tags: ["farmer", "land"],

        eligibility: [

            "Applicant is a farmer",

            "Applicant owns agricultural land",

            "Applicant satisfies the applicable income and ownership conditions"

        ],

        documents: [

            "Aadhaar / identity proof",

            "Land ownership records",

            "Bank account details",

            "Other documents as required"

        ],

        process: [

            "Check eligibility",

            "Keep required documents ready",

            "Submit application through the appropriate government portal",

            "Complete verification"

        ]

    },


    {
        id: 2,

        name: "PMAY - Housing Support",

        icon: "🏠",

        description:
            "Housing assistance for eligible households based on applicable criteria.",

        benefit:
            "Housing assistance",

        benefitText:
            "Support depends on applicable scheme rules",

        tags: ["house", "income", "rural", "urban"],

        eligibility: [

            "Applicant belongs to an eligible household",

            "House ownership status satisfies the applicable conditions",

            "Household income falls within the relevant category"

        ],

        documents: [

            "Identity proof",

            "Address proof",

            "Income-related documents",

            "Bank account details"

        ],

        process: [

            "Check eligibility",

            "Collect supporting documents",

            "Submit the application",

            "Wait for official verification"

        ]

    },


    {
        id: 3,

        name: "Scholarship Support",

        icon: "🎓",

        description:
            "Illustrative education support for eligible students and learners.",

        benefit:
            "Education support",

        benefitText:
            "Applicable benefit varies by scheme",

        tags: ["student", "education"],

        eligibility: [

            "Applicant is a student",

            "Applicant meets the applicable education criteria",

            "Applicant satisfies income/category requirements where applicable"

        ],

        documents: [

            "Student identity proof",

            "Educational records",

            "Income certificate where applicable",

            "Bank account details"

        ],

        process: [

            "Review the scholarship requirements",

            "Prepare educational documents",

            "Apply through the relevant portal",

            "Complete verification"

        ]

    },


    {
        id: 4,

        name: "Women & Family Support",

        icon: "👩‍👧",

        description:
            "Illustrative support for eligible women and families under applicable government programs.",

        benefit:
            "Family support",

        benefitText:
            "Eligibility depends on specific program rules",

        tags: ["female", "family"],

        eligibility: [

            "Applicant meets the gender or family criteria of the program",

            "Applicant satisfies income requirements where applicable",

            "Applicant provides required supporting documents"

        ],

        documents: [

            "Identity proof",

            "Address proof",

            "Income certificate if required",

            "Bank account details"

        ],

        process: [

            "Verify eligibility",

            "Prepare documents",

            "Submit the application",

            "Complete department verification"

        ]

    },


    {
        id: 5,

        name: "Skill Development Support",

        icon: "🛠️",

        description:
            "Training and skill-development opportunities for eligible applicants.",

        benefit:
            "Skill training",

        benefitText:
            "Training availability varies",

        tags: ["student", "unemployed", "self-employed"],

        eligibility: [

            "Applicant belongs to an eligible age group",

            "Applicant meets the relevant education or employment criteria",

            "Applicant satisfies program-specific requirements"

        ],

        documents: [

            "Identity proof",

            "Educational certificate if required",

            "Address proof",

            "Other supporting documents"

        ],

        process: [

            "Find a suitable training program",

            "Register through the relevant platform",

            "Submit required documents",

            "Complete enrollment"

        ]

    },


    {
        id: 6,

        name: "Social Security Support",

        icon: "🤝",

        description:
            "Illustrative social-security assistance for eligible individuals and households.",

        benefit:
            "Social assistance",

        benefitText:
            "Support varies according to applicable rules",

        tags: ["income", "disability", "bpl"],

        eligibility: [

            "Applicant belongs to an eligible household",

            "Applicant satisfies applicable income criteria",

            "Additional category-specific requirements may apply"

        ],

        documents: [

            "Identity proof",

            "Income certificate",

            "Bank details",

            "Category/disability certificate where applicable"

        ],

        process: [

            "Check the applicable program",

            "Collect required certificates",

            "Submit application",

            "Complete official verification"

        ]

    }

];


/* =========================================
   GET ELEMENTS
========================================= */

const form = document.getElementById("profileForm");

const formScreen = document.getElementById("screen-form");

const resultsScreen = document.getElementById("screen-results");

const detailScreen = document.getElementById("screen-detail");

const resultsList = document.getElementById("resultsList");

const matchCount = document.getElementById("matchCount");

const resultsTitle = document.getElementById("resultsTitle");

const resultsSubtitle = document.getElementById("resultsSubtitle");

const editBtn = document.getElementById("editBtn");

const backBtn = document.getElementById("backBtn");

const resetBtn = document.getElementById("resetBtn");

const detailContent = document.getElementById("detailContent");

const summaryName = document.getElementById("summaryName");

const summaryLocation = document.getElementById("summaryLocation");

const summaryIncome = document.getElementById("summaryIncome");

const completionCircle =
    document.querySelector(".completion-circle");

const completionText =
    document.querySelector(".completion-circle span");


/* =========================================
   FORM INPUTS
========================================= */

const fields = [

    "name",
    "age",
    "gender",
    "marital",
    "category",
    "disability",
    "state",
    "area",
    "income",
    "bpl",
    "occupation",
    "education",
    "ownsHouse",
    "ownsLand"

];


/* =========================================
   GET USER DATA
========================================= */

function getUserData() {

    const data = {};

    fields.forEach(id => {

        const element = document.getElementById(id);

        data[id] = element.value;

    });

    return data;
}


/* =========================================
   PROFILE COMPLETION
========================================= */

function updateCompletion() {

    let filled = 0;

    const importantFields = [

        "age",
        "gender",
        "marital",
        "category",
        "disability",
        "state",
        "area",
        "income",
        "bpl",
        "occupation",
        "education",
        "ownsHouse",
        "ownsLand"

    ];

    importantFields.forEach(id => {

        const element = document.getElementById(id);

        if (element.value !== "") {

            filled++;

        }

    });


    const percentage =
        Math.round(
            (filled / importantFields.length) * 100
        );


    completionText.textContent =
        percentage + "%";


    completionCircle.style.background =
        `conic-gradient(
            var(--primary) ${percentage * 3.6}deg,
            #e9efeb ${percentage * 3.6}deg
        )`;
}


/* Listen for changes */

fields.forEach(id => {

    const element =
        document.getElementById(id);

    element.addEventListener(
        "input",
        updateCompletion
    );

    element.addEventListener(
        "change",
        updateCompletion
    );

});


/* =========================================
   SCHEME MATCHING
========================================= */

function findMatchingSchemes(user) {

    const matches = [];


    schemes.forEach(scheme => {

        let score = 0;


        /* Farmer */

        if (
            scheme.tags.includes("farmer") &&
            user.occupation === "farmer"
        ) {

            score += 40;

        }


        /* Agricultural land */

        if (
            scheme.tags.includes("land") &&
            user.ownsLand === "yes"
        ) {

            score += 30;

        }


        /* House */

        if (
            scheme.tags.includes("house") &&
            user.ownsHouse === "no"
        ) {

            score += 25;

        }


        /* Student */

        if (
            scheme.tags.includes("student") &&
            user.occupation === "student"
        ) {

            score += 40;

        }


        /* Education */

        if (
            scheme.tags.includes("education") &&
            (
                user.education === "class12" ||
                user.education === "graduate" ||
                user.education === "postgraduate"
            )
        ) {

            score += 20;

        }


        /* Female */

        if (
            scheme.tags.includes("female") &&
            user.gender === "female"
        ) {

            score += 40;

        }


        /* Unemployed */

        if (
            scheme.tags.includes("unemployed") &&
            user.occupation === "unemployed"
        ) {

            score += 35;

        }


        /* Self employed */

        if (
            scheme.tags.includes("self-employed") &&
            user.occupation === "self-employed"
        ) {

            score += 30;

        }


        /* Disability */

        if (
            scheme.tags.includes("disability") &&
            user.disability === "yes"
        ) {

            score += 35;

        }


        /* BPL */

        if (
            scheme.tags.includes("bpl") &&
            user.bpl === "yes"
        ) {

            score += 30;

        }


        /* Income */

        if (
            scheme.tags.includes("income") &&
            Number(user.income) <= 300000
        ) {

            score += 20;

        }


        /* Rural / Urban */

        if (
            scheme.tags.includes(user.area)
        ) {

            score += 15;

        }


        /*
            General fallback.

            This makes the prototype visually useful
            even when the user doesn't match a specific
            category.
        */

        if (score === 0) {

            score = 15;

        }


        score = Math.min(score, 98);


        matches.push({

            ...scheme,

            score: score

        });

    });


    /*
        Sort highest matching schemes first.
    */

    matches.sort(
        (a, b) => b.score - a.score
    );


    return matches.slice(0, 6);
}


/* =========================================
   DISPLAY RESULTS
========================================= */

function showResults(user) {

    const matches =
        findMatchingSchemes(user);


    matchCount.textContent =
        matches.length;


    if (user.name.trim() !== "") {

        resultsTitle.textContent =
            `${user.name.split(" ")[0]}, here are your matches`;

    } else {

        resultsTitle.textContent =
            "Schemes you may be eligible for";

    }


    resultsSubtitle.textContent =
        `We found ${matches.length} potential matches based on your profile.`;


    summaryName.textContent =
        user.name.trim() !== ""
            ? user.name
            : "Citizen";


    summaryLocation.textContent =
        user.state;


    if (user.income) {

        summaryIncome.textContent =
            "₹" +
            Number(user.income).toLocaleString("en-IN") +
            " / year";

    } else {

        summaryIncome.textContent =
            "Income not provided";

    }


    resultsList.innerHTML = "";


    matches.forEach(scheme => {

        const card =
            document.createElement("div");

        card.className =
            "scheme-card";


        card.innerHTML = `

            <div class="scheme-top">

                <div class="scheme-icon">
                    ${scheme.icon}
                </div>

                <div class="match-badge">
                    ${scheme.score}% MATCH
                </div>

            </div>


            <h3>
                ${scheme.name}
            </h3>


            <p>
                ${scheme.description}
            </p>


            <div class="scheme-benefit">

                <span>✨</span>

                <div>

                    <strong>
                        ${scheme.benefit}
                    </strong>

                    <span>
                        ${scheme.benefitText}
                    </span>

                </div>

            </div>


            <button
                onclick="openScheme(${scheme.id})">

                View eligibility & details
                →

            </button>

        `;


        resultsList.appendChild(card);

    });


    formScreen.classList.remove("active");

    detailScreen.classList.remove("active");

    resultsScreen.classList.add("active");


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =========================================
   OPEN SCHEME DETAILS
========================================= */

function openScheme(id) {

    const scheme =
        schemes.find(
            item => item.id === id
        );


    if (!scheme) return;


    detailContent.innerHTML = `

        <div class="detail-card">

            <div class="detail-header">

                <div class="detail-header-top">

                    <div class="detail-icon">
                        ${scheme.icon}
                    </div>

                    <div>

                        <span class="small-label"
                              style="color:#cce8d8">

                            SCHEME DETAILS

                        </span>

                        <h2>
                            ${scheme.name}
                        </h2>

                        <p>
                            Government benefit prototype
                        </p>

                    </div>

                </div>

            </div>


            <div class="detail-body">


                <div class="detail-section">

                    <h3>
                        About this scheme
                    </h3>

                    <p>
                        ${scheme.description}
                    </p>

                </div>


                <div class="detail-section">

                    <h3>
                        Eligibility
                    </h3>

                    <ul class="detail-list">

                        ${scheme.eligibility
                            .map(
                                item =>
                                `<li>${item}</li>`
                            )
                            .join("")
                        }

                    </ul>

                </div>


                <div class="detail-section">

                    <h3>
                        Documents you may need
                    </h3>

                    <ul class="detail-list">

                        ${scheme.documents
                            .map(
                                item =>
                                `<li>${item}</li>`
                            )
                            .join("")
                        }

                    </ul>

                </div>


                <div class="detail-section">

                    <h3>
                        How to apply
                    </h3>

                    <ul class="detail-list">

                        ${scheme.process
                            .map(
                                item =>
                                `<li>${item}</li>`
                            )
                            .join("")
                        }

                    </ul>

                </div>


                <div class="apply-box">

                    <div>

                        <h3>
                            Ready to take the next step?
                        </h3>

                        <p>
                            Always verify the latest eligibility
                            requirements on the official government
                            portal before applying.
                        </p>

                    </div>

                    <button
                        class="btn primary-btn"
                        onclick="alert('Prototype: official application link can be connected here.')">

                        Application Portal →

                    </button>

                </div>


            </div>

        </div>

    `;


    resultsScreen.classList.remove("active");

    formScreen.classList.remove("active");

    detailScreen.classList.add("active");


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =========================================
   FORM SUBMIT
========================================= */

form.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const age =
            document.getElementById("age").value;


        const income =
            document.getElementById("income").value;


        if (!age || !income) {

            alert(
                "Please enter your age and annual family income."
            );

            return;

        }


        const user =
            getUserData();


        showResults(user);

    }
);


/* =========================================
   EDIT PROFILE
========================================= */

editBtn.addEventListener(
    "click",
    function() {

        resultsScreen.classList.remove("active");

        detailScreen.classList.remove("active");

        formScreen.classList.add("active");


        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* =========================================
   BACK TO RESULTS
========================================= */

backBtn.addEventListener(
    "click",
    function() {

        detailScreen.classList.remove("active");

        formScreen.classList.remove("active");

        resultsScreen.classList.add("active");


        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* =========================================
   RESET FORM
========================================= */

resetBtn.addEventListener(
    "click",
    function() {

        form.reset();

        updateCompletion();

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* =========================================
   INITIALIZE
========================================= */

updateCompletion();