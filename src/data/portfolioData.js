export const experiences = [
  {
    "company": "Statistics Canada",
    "role": "Co-op · Labour Force Survey",
    "period": "Sep 2026 — Present",
    "current": true,
    "mark": "SC",
    "style": "statcan",
    "description": "Modernizing statistical programs for the Labour Force Survey, translating SAS workflows into R with verification and documentation built into the work.",
    "details": [
      [
        "My work",
        "My assigned work covers migrating average-standard-error programs and bootstrap-weight generation from SAS to R. The scope includes checking outputs and documenting the translated workflows."
      ],
      [
        "Why it matters",
        "These programs support estimation and variance estimation for the Labour Force Survey. Reproducibility and correctness are central to the migration."
      ],
      [
        "Planned research",
        "A proposed follow-on study will explore ML approaches to non-response adjustment. This remains planned analysis rather than a completed result."
      ]
    ],
    "skills": [
      "R",
      "SAS",
      "Statistical programming",
      "Verification"
    ]
  },
  {
    "company": "Natural Resources Canada",
    "role": "ML Research Engineer Co-op",
    "period": "Jan — Apr 2026",
    "mark": "NR",
    "style": "nrcan",
    "description": "Studied remote-sensing foundation models and developed a taxonomy and comparison framework to support a research review paper.",
    "details": [
      [
        "Research scope",
        "I surveyed vision, vision-language, and spatiotemporal foundation models for Earth observation, examining how they represent different sensor types and spatial or temporal information."
      ],
      [
        "My contribution",
        "I developed a taxonomy and unified comparison tables, and contributed a framework and synthesis to a research review paper. The framework considers spatial, temporal, multispectral, hyperspectral, SAR, and cross-modal representations."
      ],
      [
        "Technical communication",
        "The work involved synthesizing research into structured comparisons and a team presentation, making a broad model landscape easier to discuss and assess."
      ]
    ],
    "skills": [
      "Foundation models",
      "Remote sensing",
      "Research synthesis",
      "Technical writing"
    ]
  },
  {
    "company": "Driftstack",
    "role": "Software Developer Intern",
    "period": "May — Aug 2024",
    "mark": "D",
    "style": "driftstack",
    "description": "Contributed to React interfaces, RESTful APIs, and AppSumo integration workflows spanning frontend, backend, and relational databases.",
    "details": [
      [
        "Frontend",
        "I improved React website interfaces and navigation, focusing on how users move through the product."
      ],
      [
        "Backend & integrations",
        "I contributed to RESTful APIs and third-party connections, and implemented AppSumo user flows and real-time data synchronization using Laravel, MySQL, and MariaDB."
      ],
      [
        "Development workflow",
        "I also integrated AI-based development tools into asynchronous coding workflows."
      ]
    ],
    "skills": [
      "React",
      "Laravel",
      "REST APIs",
      "MySQL / MariaDB"
    ]
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
    ],
    "proposal": true
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
    ],
    "links": [
      {
        "label": "Try the live app",
        "url": "https://melenomadetector.streamlit.app/"
      }
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
    "description": "A Python flight simulator and interactive dashboard for multi-aircraft conflicts and airspace hotspots.",
    "tech": [
      "Python",
      "React",
      "Leaflet",
      "Node.js"
    ],
    "status": "Hackathon project",
    "summary": "SkySense combines a Python trajectory simulator with a React and Leaflet dashboard to analyze 250–1,000 simulated Canadian flights, explore multi-aircraft conflicts, and identify busy waypoints.",
    "overview": "Our team built a simulation-driven airspace analysis platform. Running an analysis regenerates flight trajectories and conflict data, then updates the dashboard and map views. It is a hackathon prototype using simulated flights, rather than a live air-traffic control system.",
    "details": [
      [
        "Simulation & conflict detection",
        "A custom Python engine simulates trajectories, identifies conflicts involving multiple aircraft, and records their timing in structured JSON."
      ],
      [
        "An interactive view of the data",
        "The React dashboard presents flight totals, time-of-day and altitude distributions, aircraft types, top routes, hotspots, and a navigable conflict table. A custom Vite API endpoint connects the simulation with the interface."
      ],
      [
        "Exploring a conflict",
        "Leaflet maps show every involved aircraft with a distinct color, its complete multi-waypoint route, and the time of the conflict. React Context shares state across dashboard views."
      ],
      [
        "Waypoint-level hotspots",
        "A waypoint-to-aircraft mapping counts traffic at each location. A dataset-adaptive threshold identifies heavily used waypoints across different simulation sizes."
      ],
      [
        "Future directions",
        "Live ADS-B feeds, predictive conflict resolution, AI-assisted risk scoring, and airspace optimization are possible extensions, not features claimed for this prototype."
      ]
    ],
    "links": [
      {
        "label": "View hackathon submission",
        "url": "https://devpost.com/software/nav-canada-trajectory-insight-challenge"
      }
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
  },
  {
    "slug": "icarus",
    "title": "Icarus",
    "category": "AI ASSISTANT",
    "status": "Early work in progress",
    "image": null,
    "description": "An early-stage personal AI assistant exploring affordable conversation and everyday task support.",
    "tech": [],
    "summary": "Icarus is an actively developing personal AI assistant inspired by Jarvis. The goal is a low-cost chatbot that can eventually help with everyday tasks through connected services and voice interaction.",
    "overview": "The project is still at an early stage. I am working toward a useful, affordable conversational assistant; the integrations and voice capabilities below describe the intended product, not completed features.",
    "details": [
      [
        "Planned integrations",
        "Google Calendar and Gmail APIs, along with calendar and alarm functionality, are intended to help the assistant support scheduling and daily tasks."
      ],
      [
        "Voice as a future interface",
        "The end goal is an assistant that can both listen and speak. Voice interaction remains part of the roadmap."
      ],
      [
        "Current focus",
        "Early development and exploration, with affordability as a design goal. There is no public demo or completed integration suite to present yet."
      ]
    ]
  },
  {
    "slug": "steamscope",
    "title": "SteamScope",
    "category": "ANALYTICS / DASHBOARD",
    "status": "Web project",
    "image": "/assets/analytics-site.jpg",
    "description": "A web-based analytics interface focused on presenting data through a dashboard.",
    "tech": [],
    "summary": "SteamScope is an analytics website exploring how dashboard interfaces can make data easier to inspect.",
    "overview": "A dashboard and data-visualization project. The live website provides the current experience.",
    "details": [],
    "links": [
      {
        "label": "Visit website",
        "url": "https://steamscope.netlify.app/"
      }
    ]
  },
  {
    "slug": "crown-cuts",
    "title": "Crown Cuts",
    "category": "WEB / BOOKING",
    "status": "Interface project",
    "image": "/assets/crown-cuts.png",
    "description": "A barbershop website with service discovery, barber profiles, and an appointment-booking flow.",
    "tech": [],
    "summary": "Crown Cuts is a barbershop website designed around finding a service, choosing a barber, and moving through an appointment-booking interface.",
    "overview": "The project brings service information, barber profiles, booking, and confirmation flows together in a cohesive interface.",
    "details": [
      [
        "Service discovery",
        "Visitors can explore the available services and barber profiles before choosing an appointment."
      ],
      [
        "Booking experience",
        "A guided booking and confirmation flow connects exploration with the next step."
      ]
    ],
    "links": [
      {
        "label": "Visit website",
        "url": "https://crown-cuts.netlify.app/"
      }
    ]
  },
  {
    "slug": "novagear",
    "title": "NovaGear",
    "category": "WEB / E-COMMERCE",
    "status": "Interface prototype",
    "image": "/assets/novagear.png",
    "description": "A high-fidelity e-commerce interface for gaming accessories.",
    "tech": [],
    "summary": "NovaGear is an e-commerce prototype focused on presenting gaming accessories through a polished shopping interface.",
    "overview": "The project explores the visual design and usability of a gaming-accessories storefront. It is presented as an interface prototype rather than a production commerce system.",
    "details": [],
    "links": [
      {
        "label": "Visit website",
        "url": "https://nova-gear.netlify.app/"
      }
    ]
  }
]
export const projectGroups = [
  {
    "id": "ai-ml",
    "title": "AI / ML",
    "number": "02A",
    "slugs": [
      "hiprex",
      "melanoma",
      "icarus"
    ]
  },
  {
    "id": "analytics",
    "title": "Analytics",
    "number": "02B",
    "slugs": [
      "skysense",
      "steamscope",
      "e-hotels"
    ]
  },
  {
    "id": "software",
    "title": "Software Engineering",
    "number": "02C",
    "slugs": [
      "crown-cuts",
      "novagear",
      "rentify"
    ]
  }
]
