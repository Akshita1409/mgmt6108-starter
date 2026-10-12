export interface Article {
  id: string;
  title: string;
  timeAgo: string;
  dateTime: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  author: string;
  authorRole: string;
  location: string;
  readTime: string;
  summary: string;
  content: string[];
  keyPoints?: string[];
  caption?: string;
  isTrending?: boolean;
}

export const INITIAL_ARTICLES: Article[] = [
  {
    id: "andrew-garfield-openai-film",
    title: "Actor Andrew Garfield says OpenAI film Artificial turns lens on creators of ‘new world’",
    timeAgo: "3 hours ago",
    dateTime: "PT3H",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnKbFoaYK8PIC-W0Mvk4raX9hmzhO9iOu2A9K62O55Bn3xOPJSv7y2Qvv1dw6ViywYBd_AEYpdefNIqDtXgSw5--FWGXCMX3_qqx2f57t7dzz2PAlDSWwRYao1R7Pa5BbP_-mjWtMAzm04ahe-ehkFzoqimApejUwMjj3ysa7BafMDeVIAR1XlyTuouIe_Mw495PvCRYW2sNiUrSZcB2ou_Yqkd3y_vhuwGnHk7o5iIVCawEng2V8z",
    imageAlt: "Actor Andrew Garfield at London film event",
    category: "Culture & Tech",
    author: "Jonathan Lim",
    authorRole: "Arts & Entertainment Correspondent",
    location: "LONDON",
    readTime: "4 min read",
    summary: "Oscar nominee Andrew Garfield discusses his role in the high-profile drama exploring Silicon Valley's race to create artificial general intelligence.",
    caption: "Andrew Garfield speaks to reporters at the Odeon Luxe Leicester Square premiere in London. PHOTO: REUTERS",
    keyPoints: [
      "Drama depicts internal conflicts inside Silicon Valley research labs racing toward AGI.",
      "Garfield plays a disillusioned research scientist questioning the speed of rollout.",
      "Film aims to humanize engineers whose decisions now affect billions of people daily."
    ],
    content: [
      "LONDON – Award-winning actor Andrew Garfield has defended the artistic necessity of scrutinising the architects of Silicon Valley's artificial intelligence boom, describing tech pioneers as the 'accidental high priests of our collective tomorrow'.",
      "Speaking ahead of the premiere of 'Artificial', a biographical dramatisation centred on the turbulent development of generative frontier models, Garfield remarked that cinema has a duty to reflect power while it is still forming, rather than waiting decades after consequences take hold.",
      "'We are witnessing five or six boardrooms in Northern California making decisions with existential consequences for employment, truth, and how humans relate to each other,' Garfield said in an interview with The Straits Times. 'This film doesn't seek to demonise or deify them; it seeks to hold up a mirror to people who genuinely believe they are saving humanity while wrestling with enormous commercial stakes.'",
      "The film, directed by critically acclaimed filmmaker Luca Guadagnino and produced with technical advisors drawn from top AI safety institutes, navigates the philosophical schisms between accelerationists who urge immediate deployment and safety researchers urging measured caution.",
      "Critics attending preview screenings in London commended the production's technical nuance, avoiding Hollywood tropes of killer robots and instead focusing on compute allocation, model weights, and corporate governance battles."
    ]
  },
  {
    id: "startups-betting-on-ai-future",
    title: "Start-ups are betting on AI to predict the future",
    timeAgo: "3 hours ago",
    dateTime: "PT3H",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2q5_1AtPM27gB-7SwNl-tIXpr7fCZzD6oz-FX8FnjduaFmm_wSX7y462_OgOE6MQCEHLo-GRTezdMbdFf2-udc6QPWHEh_rTg-i6C2KCYj8ve8bWeFSgflFT_zNq4Kb4W8ZOYBk8uYM-HNmpMqb9XnYe627TlchD6Jg6RH24w_ggifVU6w_y3ZxZkAoikcP8XjRJzyuBGcCpRYavYSGK8cNXUyUPMaZ96Ya_Zkxk5_x0Cplz12P7f",
    imageAlt: "Illuminated AI signage and tech architecture",
    category: "Start-ups",
    author: "Grace Ho",
    authorRole: "Senior Business Correspondent",
    location: "SINGAPORE",
    readTime: "5 min read",
    summary: "Venture-backed enterprises across Southeast Asia are deploying real-time predictive models to forecast geopolitical shocks, freight costs, and consumer behavior.",
    caption: "The facade of an autonomous innovation campus in Singapore's one-north precinct. ST PHOTO: LIM YAOHUI",
    keyPoints: [
      "Predictive AI start-ups saw venture investments jump 42% year-on-year in Southeast Asia.",
      "Early adopters in shipping and commodities reporting 18% improvement in inventory buffers.",
      "Questions remain over unpredictable macro events and hallucinated forecasting patterns."
    ],
    content: [
      "SINGAPORE – In the high-octane trading floors and maritime logistics hubs of Singapore, a new breed of technology start-ups is promising corporate clients what was once thought impossible: the ability to foresee supply chain disruptions weeks before they materialize.",
      "Companies like Aethel AI Systems and Chronos Dynamics are training neural architectures on petabytes of satellite telemetry, customs declarations, shipping container manifests, and climatic data to create continuous probabilistic models of global commerce.",
      "'Historically, forecasting was done using retrospective spreadsheets and quarterly regression curves,' explains Marcus Tan, co-founder of Aethel AI, which recently closed a US$28 million Series A round led by regional sovereign funds.",
      "'Today, our models simulate over 50,000 parallel scenarios every night, evaluating how an unexpected drought in the Panama Canal or port strike in Rotterdam ripples into semiconductor lead times in Singapore,' Tan added.",
      "However, seasoned risk analysts urge caution. Dr. Evelyn Wong from the Institute of Policy Studies notes that while statistical pattern matching has become immensely powerful, true black swan events by definition lack precedent in training datasets."
    ]
  },
  {
    id: "nuclear-energy-ai-data-centres",
    title: "A new trend in nuclear energy: Squeezing more power out of old plants",
    timeAgo: "5 hours ago",
    dateTime: "PT5H",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2jg0XMhJF_fbpPX2U5-Dtt78JC-wjIJub-WKnozFHrZlpZPeG-JcCSUXb7L7k79CP7Ao0V6uxvM8eNAMEAlM5hf2-naQOqzBLN4YxIPy_qr-whMd3F8jafaXOjYHGYT5a1qOXvgnKZLlFVXaop_taIAt-CP9HImsVriI_FWD2O0su5iTEVqoRveyZJBnO-5e32Chf5-I-mj_PDY0JMp1Jn6TYJtvFqnz7-tGb-1SoHj7lrAFHSaVt",
    imageAlt: "Nuclear power cooling towers",
    category: "Energy & Infrastructure",
    author: "David Fogarty",
    authorRole: "Climate Change Editor",
    location: "PARIS",
    readTime: "6 min read",
    summary: "Hyperscalers like Microsoft, Amazon, and Google are funding multi-gigawatt reactor life extensions to satisfy the voracious electricity appetite of AI training clusters.",
    caption: "Cooling towers at a civil nuclear generation complex undergoing digital turbine modernization. PHOTO: AFP",
    keyPoints: [
      "Tech conglomerates are contracting directly with nuclear utilities through 20-year power purchase agreements.",
      "Uprates and thermal upgrades can squeeze an extra 5% to 15% generation from existing reactors.",
      "Grid operators warn against diverting clean baseload away from national municipal grids."
    ],
    content: [
      "PARIS – Driven by the relentless power demands of next-generation AI training clusters, global technology giants are reviving and expanding nuclear power facilities once slated for phased decommissioning.",
      "In North America and Western Europe, engineering teams are undertaking what the industry terms 'reactor uprating'—upgrading steam turbines, digital telemetry, and cooling circuits to extract up to 15 per cent more clean electrical capacity from existing nuclear licenses.",
      "The surge in interest comes as high-density AI clusters require continuous, zero-carbon baseload electricity that intermittent solar and wind installations cannot provide without enormous battery storage buffers.",
      "'A single hyperscale AI training cluster planned for 2027 will consume more energy than a mid-sized metropolitan city,' said Clara Vance, senior energy analyst at S&P Global Commodity Insights.",
      "The phenomenon has sparked fierce regulatory debates. Utility watchdogs in the United States and Europe are scrutinizing whether long-term dedicated contracts signed by tech behemoths could hike retail electricity tariffs for everyday household consumers."
    ]
  },
  {
    id: "us-britain-testing-ai-models",
    title: "US reverses course on Britain’s testing of AI models: Report",
    timeAgo: "7 hours ago",
    dateTime: "PT7H",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSkw4r7Zj5K9zMTGTBSnab7rnKuqmD5tqhcq-ZsoaoprySlaQaInAByHYt9_FnF48nk29MtdwFf9If9Db6Tajttuai-VSfNaYhEexAlpq_utpixA7vCsbT_Bf9ibMDeFYbADSb-8mgEittv0YYnOCSkUkuz71GdoJIxaBMJ05WRiYIHBAqeEIYv3Urr81tqZSBIjM37CxRdYkcei859mzWjHxd9AEpvX_m9Ih6m6sBtFUYwL0NCACG",
    imageAlt: "US and UK flag emblems and digital circuit board",
    category: "Policy & Geopolitics",
    author: "Yueh Wah",
    authorRole: "Foreign Affairs Correspondent",
    location: "WASHINGTON",
    readTime: "4 min read",
    summary: "The United States has reached an agreement granting British safety evaluators mutual recognition and pre-deployment access to leading American frontier models.",
    caption: "Diplomatic agreements on AI safety protocols deepen between Washington and London. PHOTO: BLOOMBERG",
    keyPoints: [
      "UK AI Safety Institute will receive pre-release checkpoints under bilateral framework.",
      "Reversal resolves months of transatlantic friction over proprietary algorithm access.",
      "Singapore and allied nations in the Global Partnership on AI welcome standardized benchmarks."
    ],
    content: [
      "WASHINGTON – In a significant diplomatic shift, United States trade and commerce officials have agreed to formally recognise evaluation findings conducted by the United Kingdom's AI Safety Institute, smoothing months of friction over cross-border testing.",
      "Under the revised bilateral accord, American frontier model labs will provide UK and US safety evaluators simultaneous access to early weights and model checkpoints at least 30 days prior to commercial release.",
      "The turnaround follows lobbying from bipartisan congressional leaders and European allies, who argued that fragmented national compliance regimes would only slow Western innovation while failing to curb malicious misuse.",
      "'Frontier AI risks do not respect national borders,' UK Technology Secretary Peter Kyle stated in a joint briefing. 'By harmonising test batteries for cyber capabilities, biosecurity guardrails, and autonomous replication, both nations ensure safety without impeding scientific velocity.'",
      "Singapore's Ministry of Digital Development and Information (MDDI) noted that the pact creates a helpful precedent for multinational safety frameworks that Southeast Asian hubs are keen to interface with."
    ]
  },
  {
    id: "amazon-buy-ai-startup-decart",
    title: "Amazon in talks to buy AI start-up Decart for around US$7 billion: Report",
    timeAgo: "8 hours ago",
    dateTime: "PT8H",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuApbCBgbscbtNGJSDyRV-QP8aMEpFnGuI0qP3VakVnrnti9c_xNTjrq8XzxscptzYZOox3mfdER6chhSnT67XMz_RgP8ZU2Gy4nWv6K-gIy9vk6SNEC36D5UztoqQ1L8l2DqJhUs3dyLBIiDeRgGbe8OOl8jX6r5xcXyjYgoQzqJFITrqlUqG95S97kBNinKR-utG1GR4DBdLFI0ICIZ0aizpgTsNY15iQ1D1e9WNJk2nlBeiApCo9m",
    imageAlt: "Amazon headquarters signage with AI network graphics",
    category: "Business & M&A",
    author: "Timothy Goh",
    authorRole: "Tech & Silicon Valley Reporter",
    location: "SAN FRANCISCO",
    readTime: "3 min read",
    summary: "Amazon Web Services is reportedly negotiating a multibillion-dollar buyout of real-time world-simulation pioneer Decart to bolster its enterprise cloud offerings.",
    caption: "Amazon corporate signage illuminated alongside high-density server computing infrastructure. PHOTO: REUTERS",
    keyPoints: [
      "Decart gained global attention for generating playable video worlds in real time at 30 fps.",
      "Acquisition would provide AWS with proprietary neural acceleration hardware techniques.",
      "Antitrust regulators in both the US and EU are anticipated to review the proposed deal."
    ],
    content: [
      "SAN FRANCISCO – Cloud computing giant Amazon is in advanced discussions to acquire Israeli generative AI start-up Decart in a landmark deal valued at approximately US$7 billion (S$9.4 billion), according to sources familiar with the matter.",
      "Decart captured widespread technological acclaim late last year when it demonstrated Oasis, the world's first interactive neural simulation capable of rendering interactive 3D gaming environments entirely through diffusion models in real time.",
      "If finalized, the transaction would mark Amazon's largest acquisition since its US$8.5 billion takeover of MGM Studios in 2021, underscoring AWS's aggressive counter-offensive against rivals Microsoft Azure and Google Cloud.",
      "Industry analysts believe Amazon intends to integrate Decart's inference efficiency algorithms directly into its custom Trainium and Inferentia silicon accelerators, drastically slashing the computing cost required to generate synthetic media and enterprise simulations.",
      "Neither Amazon nor Decart immediately responded to requests for comment outside regular US business hours."
    ]
  },
  {
    id: "personal-ai-agent-what-could-go-wrong",
    title: "Your own personal AI agent. What could possibly go wrong?",
    timeAgo: "12 hours ago",
    dateTime: "PT12H",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5TzrUAC-vW7FZvGFgM1Bz1SMcMOeUBurzrJHIYT6MBmzYINNdw2zGSE95MX_xxUQG6s4jY9uqiQXCCXLIWNE_vujSQTEZpmMDv4eyo029zRnXUpLHYchJ4pbuZrgKDP4rBBZ1Jw-YCWZRlONNwzVuahxOE_3cEgfDkqI72Xb8UY8Ns9oOvwQwL811eEiPVzSjOQZkT_yxlRr25QjwvRSmhftrqhclTgrDDcLXhk6YguHIjqLQHJAz",
    imageAlt: "Futuristic robotic interface representing AI assistants",
    category: "Analysis & Society",
    author: "Irene Tham",
    authorRole: "Senior Technology Columnist",
    location: "SINGAPORE",
    readTime: "6 min read",
    summary: "As autonomous software agents gain permission to execute banking transactions, book flights, and send emails, cybersecurity experts warn of prompt-injection perils.",
    caption: "Autonomous agentic assistants are moving from experimental sandboxes to real-world desktop environments. PHOTO: GETTY IMAGES",
    keyPoints: [
      "Agentic AI differs from chat by possessing system execution permissions.",
      "Invisible prompt injection attacks hidden in web pages can hijack active agents.",
      "Cybersecurity agencies recommend strict human-in-the-loop limits for financial tasks."
    ],
    content: [
      "SINGAPORE – Imagine an intelligent digital assistant that doesn't just draft your calendar schedule or summarize meetings, but actually logs into your banking app, negotiates your home mortgage renewal, cancels your expired gym subscription, and books your holiday flight.",
      "This is the enticing promise of 'agentic AI'—autonomous software programs empowered with browser access, API credentials, and tool-use authority.",
      "Yet behind the productivity euphoria lies a perilous new vector for exploitation. Cybersecurity researchers have recently demonstrated how an agent instructed to research dinner recipes could be secretly subverted by invisible font instructions hidden on a restaurant website, commanding the agent to upload the user's private browser cookies to a remote server.",
      "'When you grant an LLM permission to take actions in your digital life, you inherit all of its vulnerabilities,' warned Professor Simon Chesterman, author and AI governance expert at the National University of Singapore.",
      "As consumer tech brands race to integrate agents into smartphones and operating systems, users would do well to maintain strict confirmation checkpoints before letting autonomous software authorize payments or transmit sensitive credentials."
    ]
  }
];

export const MORE_ARTICLES: Article[] = [
  {
    id: "singapore-hospitals-pilot-ai-triaging",
    title: "Singapore public healthcare clusters pilot generative AI for emergency room triage",
    timeAgo: "14 hours ago",
    dateTime: "PT14H",
    imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Emergency room clinicians reviewing telemetry",
    category: "Singapore & Healthcare",
    author: "Salma Khalik",
    authorRole: "Senior Health Correspondent",
    location: "SINGAPORE",
    readTime: "5 min read",
    summary: "SingHealth and National Healthcare Group are testing localized clinical AI models to assist triage nurses in prioritizing urgent patient queues during peak hours.",
    caption: "Nurses at Singapore General Hospital review digital diagnostic intake panels. ST PHOTO: CHEW SENG KIM",
    content: [
      "SINGAPORE – Emergency departments across three major public hospitals in Singapore are piloting clinical reasoning models trained on Asian demographic datasets to streamline patient triaging.",
      "The system analyzes vital signs, spoken patient symptoms in four official languages, and historical medical records to generate preliminary acuity scores in under 15 seconds.",
      "Health Ministry officials emphasized that human physicians retain absolute clinical authority, with the AI serving strictly as an alert co-pilot to reduce diagnostic oversights during midnight surges."
    ]
  },
  {
    id: "tsmc-accelerates-2nm-packaging",
    title: "TSMC speeds up 2-nanometre wafer roll-out as global AI chip scramble intensifies",
    timeAgo: "18 hours ago",
    dateTime: "PT18H",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Silicon wafer semiconductor manufacturing",
    category: "Semiconductors",
    author: "Cheryl Tan",
    authorRole: "Regional Tech Correspondent",
    location: "TAIPEI",
    readTime: "4 min read",
    summary: "Taiwan Semiconductor Manufacturing Co is ramping next-generation nanosheet transistor production to fulfill ballooning orders from Nvidia, Apple, and AMD.",
    caption: "Cleanroom engineers handle advanced silicon wafers inside TSMC Fab 20 in Hsinchu. PHOTO: AFP",
    content: [
      "TAIPEI – The world's preeminent contract chipmaker, TSMC, has accelerated pilot production for its cutting-edge 2-nanometre (N2) node, citing unprecedented demand for AI accelerators.",
      "N2 introduces gate-all-around (GAA) nanosheet architectures, delivering a 15 per cent performance leap and up to 30 per cent lower power consumption compared to current 3-nanometre silicon.",
      "The move cements Taiwan's indispensable role in the AI value chain, even as international powers invest hundreds of billions to construct redundant domestic fabs."
    ]
  },
  {
    id: "autonomous-humanoid-fleet-jurong",
    title: "Autonomous humanoid robotics fleet begins live factory trials in Jurong Innovation District",
    timeAgo: "1 day ago",
    dateTime: "P1D",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Bipedal humanoid robot working in logistics facility",
    category: "Robotics & Automation",
    author: "Ang Qing",
    authorRole: "Industrial & Manufacturing Reporter",
    location: "SINGAPORE",
    readTime: "4 min read",
    summary: "Bipedal humanoid units equipped with multimodal vision sensors are now operating alongside human technicians in high-precision electronics manufacturing.",
    caption: "A bipedal robotic worker handles precision inventory parts in Jurong. ST PHOTO: KUA CHEE SIONG",
    content: [
      "SINGAPORE – In a bustling cleanroom facility within the Jurong Innovation District, a squad of bipedal humanoid robots is moving boxes, loading test sockets, and performing defect inspections.",
      "The trial, supported by the Agency for Science, Technology and Research (A*STAR), represents Singapore's vanguard initiative in physical AI—bringing large neural models out of servers and into physical machinery.",
      "'Humanoid form factors eliminate the need to redesign existing factory floors built for human workers,' explained project lead Dr. Vincent Wee."
    ]
  }
];

export const TRENDING_ARTICLES: Article[] = [
  {
    id: "deepseek-open-source-debate",
    title: "DeepSeek’s rapid rise triggers debate over open-source artificial intelligence",
    timeAgo: "1 day ago",
    dateTime: "P1D",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Abstract mathematical deep neural network visualization",
    category: "Frontier AI",
    author: "Osmond Chia",
    authorRole: "Technology Correspondent",
    location: "BEIJING",
    readTime: "5 min read",
    summary: "How low-cost reasoning models trained using innovative architectural optimizations shook Wall Street and rekindled debates on open weights versus proprietary moats.",
    isTrending: true,
    content: [
      "BEIJING – The meteoric ascension of open-weight reasoning models from China's DeepSeek has upended conventional Silicon Valley assumptions that state-of-the-art AI requires tens of billions of dollars in brute-force compute.",
      "By leveraging multi-head latent attention (MLA) and mixture-of-experts architectures, the Hangzhou-based research lab demonstrated near-frontier performance at a fraction of reported training expenses.",
      "The revelation triggered sharp sell-offs across US chip stocks while democratizing advanced research access for universities and enterprises worldwide."
    ]
  },
  {
    id: "nvidia-ceo-computing-power-demands",
    title: "Nvidia CEO says computing power demands will outstrip supply for years",
    timeAgo: "2 days ago",
    dateTime: "P2D",
    imageUrl: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Graphics processor motherboard and chip architecture",
    category: "Hardware",
    author: "Cheryl Tan",
    authorRole: "Tech Correspondent",
    location: "TAIPEI",
    readTime: "4 min read",
    summary: "Jensen Huang dismisses fears of an AI bubble, arguing that accelerated computing is fundamentally replacing general-purpose CPU computing worldwide.",
    isTrending: true,
    content: [
      "TAIPEI – Nvidia chief executive Jensen Huang has pushed back firmly against claims that corporate spending on artificial intelligence infrastructure has outpaced genuine economic demand.",
      "Addressing industry leaders in Taipei, Huang stated that the transition from traditional retrieval-based software to generative intelligence requires millions of new computing engines.",
      "'We are at the beginning of a whole new industrial revolution,' Huang declared, noting that data centres worldwide will spend US$1 trillion modernizing their silicon over the next four years."
    ]
  },
  {
    id: "singapore-national-ai-strategy-500m",
    title: "Singapore expands national AI strategy with S$500m talent investment",
    timeAgo: "2 days ago",
    dateTime: "P2D",
    imageUrl: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Marina Bay financial district skyline Singapore",
    category: "Singapore",
    author: "Wong Pei Ting",
    authorRole: "Political & National Affairs Editor",
    location: "SINGAPORE",
    readTime: "4 min read",
    summary: "The Republic will fund visiting professorships, doctoral scholarships, and high-performance compute grants to attract top tier global researchers.",
    isTrending: true,
    content: [
      "SINGAPORE – Singapore has unveiled a fresh S$500 million tranche under the National AI Strategy 2.0 (NAIS 2.0) to aggressively bolster local research talent and secure high-performance computing clusters.",
      "Deputy Prime Minister announced the funding will support over 100 new AI PhD scholarships, create fellowship chairs at NUS and NTU, and subsidize GPU compute for local homegrown start-ups.",
      "'Our ambition is not merely to be consumers of imported AI, but architects of trusted, multicultural models that understand Asian languages, customs, and economic nuances,' the ministry noted."
    ]
  },
  {
    id: "humanoid-robots-next-frontier",
    title: "Why humanoid robots are the next frontier for generative models",
    timeAgo: "3 days ago",
    dateTime: "P3D",
    imageUrl: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Robotic head with optical vision sensors",
    category: "Emerging Tech",
    author: "Jonathan Lim",
    authorRole: "Tech Correspondent",
    location: "TOKYO",
    readTime: "5 min read",
    summary: "From Tesla's Optimus to Boston Dynamics' Atlas, multimodal foundation models are graduating from text tokens to sensory-motor control.",
    isTrending: true,
    content: [
      "TOKYO – For two years, generative AI has operated primarily inside digital text boxes and image generators. Now, researchers are transferring those same transformer architectures to physical robotics.",
      "By translating visual inputs directly into motor torque vectors—a paradigm known as vision-language-action (VLA) models—robots can learn everyday tasks like folding laundry or sorting screws simply by observing human video demonstrations.",
      "Engineers predict that factory floors and eldercare facilities in aging nations like Japan and Singapore will become the primary deployment grounds over the coming half-decade."
    ]
  }
];
