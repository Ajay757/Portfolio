export const experiences = [
  {
    "company": "Statistics Canada",
    "role": "Co-op · Labour Force Survey",
    "period": "Sep 2026 — Present",
    "current": true,
    "mark": "SC",
    "style": "statcan",
    "description": "Working on SAS-to-R modernization for Labour Force Survey estimation workflows, with a focus on verification and documentation."
  },
  {
    "company": "Natural Resources Canada",
    "role": "ML Research Engineer Co-op",
    "period": "Jan — Apr 2026",
    "mark": "NR",
    "style": "nrcan",
    "description": "Developed a taxonomy and comparison framework for remote-sensing foundation models, contributing to a research review paper."
  },
  {
    "company": "Driftstack",
    "role": "Software Developer Intern",
    "period": "May — Aug 2024",
    "mark": "D",
    "style": "driftstack",
    "description": "Built React interfaces and contributed to APIs and AppSumo integration workflows using Laravel and relational databases."
  }
]

export const projects = [
  {
    "slug": "hiprex",
    "title": "HiPREX",
    "category": "AI / BACKEND",
    "image": "/assets/hiprex.png",
    "description": "An AI-agent architecture separating LLM planning from execution, persistent state, and memory.",
    "tech": [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "pgvector"
    ],
    "status": "Early beta",
    "summary": "HiPREX explores a separation between high-level AI planning, controlled execution, and persistent memory. The working backend prototype is complemented by a research proposal for recursive reasoning under constrained memory budgets.",
    "contribution": "I implemented the backend routing, structured UPDATE actions, nested state mutation, session and message storage, and read-only memory lookup. I also set up PostgreSQL/pgvector infrastructure and connected session persistence to the frontend.",
    "details": [
      [
        "Working prototype",
        "FastAPI routes distinguish LLM reasoning, read-only MEMORY lookup, and structured UPDATE actions. A deterministic executor applies state changes, while session and message storage preserve context across conversations."
      ],
      [
        "Memory in practice",
        "“Remember my favorite color is blue” produces a structured UPDATE action. The executor stores favorite_color as blue; a later question uses the MEMORY route to retrieve it."
      ],
      [
        "Research proposal",
        "The January 2026 proposal describes a one-time transformer-based semantic initializer, a lightweight recursive reasoning core, and an explicit halting controller. An optional state-space-inspired memory module is also proposed. These are research directions rather than claims about the current prototype."
      ],
      [
        "Evaluation ahead",
        "The proposed tradeoff is to spend more computation time on iterative refinement while bounding the recursive state. Memory use, latency, reasoning quality, and halting behavior still need empirical evaluation; the proposal does not establish measured improvements."
      ]
    ]
  },
  {
    "slug": "melanoma",
    "title": "Skin Lesion Classifier",
    "category": "APPLIED MACHINE LEARNING",
    "image": "/assets/melanoma.png",
    "description": "A TensorFlow image classifier paired with a Streamlit app for uploads, predictions, and confidence scores.",
    "tech": [
      "Python",
      "TensorFlow",
      "Streamlit"
    ],
    "status": "Applied ML project",
    "summary": "An image-classification project that connects model training with a usable web interface for exploring skin-lesion predictions.",
    "contribution": "I trained a CNN to classify skin-lesion images, used preprocessing, augmentation, and class balancing, and built and deployed a Streamlit application with image upload and prediction results.",
    "details": [
      [
        "The workflow",
        "Preprocess images, train a TensorFlow/Keras CNN, then make predictions available through a Streamlit interface."
      ],
      [
        "Handling the data",
        "The training workflow used augmentation and class balancing to address imbalanced image data."
      ],
      [
        "The interface",
        "Users can upload an image and view its predicted class and confidence score."
      ],
      [
        "Scope and limitations",
        "An educational classification project, not a clinically validated diagnostic tool. Model confidence should not be interpreted as clinical certainty."
      ]
    ]
  },
  {
    "slug": "rentify",
    "title": "Rentify",
    "category": "MOBILE / SOFTWARE",
    "image": "/assets/rentify.png",
    "description": "An Android rental marketplace with accounts, listings, rental requests, and Firebase synchronization.",
    "tech": [
      "Java",
      "Kotlin",
      "Firebase"
    ],
    "status": "Team project",
    "summary": "A mobile rental platform bringing account management, listing discovery, and rental requests into one Android application.",
    "contribution": "I collaborated on the Android rental platform in a team using Git. The project combines Java/Kotlin application code with Firebase storage and real-time synchronization.",
    "details": [
      [
        "Core functionality",
        "Accounts, listings, rental requests, and search support the rental workflow."
      ],
      [
        "Application stack",
        "Java and Kotlin for Android, with Firebase storage and real-time synchronization."
      ],
      [
        "Development workflow",
        "Team collaboration through Git, with Android Studio and Gradle tooling."
      ]
    ]
  },
  {
    "slug": "skysense",
    "title": "SkySense",
    "category": "ANALYTICS / WEB",
    "image": "/assets/skysense.png",
    "description": "A hackathon dashboard for exploring flight paths, airspace conflicts, and activity hotspots.",
    "tech": [
      "React",
      "Leaflet",
      "Vite"
    ],
    "status": "Hackathon project",
    "summary": "SkySense brings flight-path visualization and airspace analytics into a map-based dashboard.",
    "overview": "The project combines React interfaces with Leaflet maps to explore flight paths and surface airspace conflicts and hotspots.",
    "details": [
      [
        "Flight-path visualization",
        "Map-based views make routes and spatial relationships easier to inspect."
      ],
      [
        "Analytics",
        "Conflict detection and hotspot identification help explore airspace activity."
      ],
      [
        "Project context",
        "Built as a hackathon project focused on flight analytics and visualization."
      ]
    ]
  },
  {
    "slug": "e-hotels",
    "title": "e-Hotels",
    "category": "DATABASES / WEB",
    "image": "/assets/ehotel.png",
    "description": "A PostgreSQL-backed hotel booking platform with reservation, filtering, and administration workflows.",
    "tech": [
      "Java",
      "PostgreSQL",
      "SQL"
    ],
    "status": "Database project",
    "summary": "A database-driven hotel booking project connecting reservation workflows with relational data management.",
    "overview": "The platform supports hotel booking, filtering, and administrative workflows backed by PostgreSQL.",
    "details": [
      [
        "Reservations",
        "Booking workflows connect the application interface to stored reservation data."
      ],
      [
        "Finding a stay",
        "Filtering helps users narrow hotel and booking options."
      ],
      [
        "Administration",
        "Administrative workflows provide another interface to the underlying hotel data."
      ]
    ]
  },
  {
    "slug": "impulse-stopper",
    "title": "Impulse Stopper",
    "category": "BROWSER EXTENSION",
    "image": "/assets/impulse.png",
    "description": "A Chrome extension that recognizes shopping-cart pages and prompts more mindful spending.",
    "tech": [
      "JavaScript",
      "HTML / CSS",
      "Chrome"
    ],
    "status": "Personal project",
    "summary": "Impulse Stopper introduces a pause in online shopping with cart-page notifications and monthly spending tools.",
    "contribution": "I built a Chrome extension that detects shopping-cart URLs, displays spending reminders, and includes a monthly spending-cycle timer and reset mechanism.",
    "details": [
      [
        "The trigger",
        "Recognizes shopping-cart URLs and displays a notification intended to discourage impulse purchases."
      ],
      [
        "Monthly spending",
        "Tracks spending habits around a monthly cycle with a timer and reset mechanism."
      ],
      [
        "Implementation",
        "Built with JavaScript, HTML, CSS, and JSON configuration."
      ]
    ]
  }
]

export const otherWork = [
  {
    "title": "Crown Cuts",
    "type": "Service & booking interface",
    "url": "https://crown-cuts.netlify.app/"
  },
  {
    "title": "NovaGear",
    "type": "E-commerce prototype",
    "url": "https://nova-gear.netlify.app/"
  },
  {
    "title": "PulsePath",
    "type": "Sequence memory game",
    "url": "https://pulsepath-game.netlify.app/"
  },
  {
    "title": "SteamScope",
    "type": "Analytics interface",
    "url": "https://steamscope.netlify.app/"
  }
]
