export const papers = [
	{
		title:
			'Design and Implementation of a Unity-Based Experimental Walking Simulation with Dialogue-Driven Interaction and Looping Scene Control',
		author: 'Hanran Ma',
		status: 'Published',
		journal: 'Computing, Performance and Communication Systems, 10(1), 69–75, 2026',
		keywords: [
			'Unity',
			'walking simulation',
			'interaction design',
			'scene control',
			'experimental game',
		],
		abstract:
			'This paper examines the design and implementation of a Unity-based experimental walking simulation as a case study in scene control, dialogue-gated progression, and lightweight modular scripting. Although walking simulators are often discussed in terms of atmosphere and environmental storytelling, the implementation logic of small independent projects is less frequently documented. This paper addresses that gap through On the Other Side of the Wall, a first-person interactive work built around constrained traversal, looping reset structures, and embedded generative media. Rather than treating these elements as isolated artistic features, the paper analyzes them as parts of a coordinated runtime system. The study shows that a relatively small set of reusable scripts can support coherent progression and a consistent environmental rhythm without requiring large-scale production resources. By documenting the project at the level of system design, the paper offers a practical reference for low-cost interactive scene development and shows how experimental artworks can produce transferable technical knowledge.',
		links: [
			{
				label: 'Official Article Page',
				href: 'https://www.clausiuspress.com/article/17816.html',
			},
			{
				label: 'DOI',
				href: 'https://doi.org/10.23977/cpcs.2026.100108',
			},
			{ label: 'Related Project: On the Other Side of the Wall', href: '/works' },
		],
	},
];

export const proposals = [
	{
		title:
			'Game Engines as Technical Platforms for Hybrid Interactive Art: A Unity Package and PC-Based Case Studies for State-Machine Narrative, Real-Time Visual Orchestration, and Generative Content Pipelines',
		researchType: 'PhD Research Proposal / Current Research Direction',
		keywords: [
			'game engines',
			'Unity',
			'hybrid interactive art',
			'state-machine narrative',
			'real-time visual orchestration',
			'generative content pipelines',
			'structural legibility',
			'interaction grammar',
			'Research-through-Design',
		],
		abstract:
			'This research investigates the methodological and technical role of game engines in hybrid interactive art practice, with a particular focus on how their internal structures shape both system organization and audience experience. Rather than treating Unity simply as a production tool, the project approaches the engine as a creative platform capable of coordinating state logic, real-time visual feedback, generative media scheduling, and interactive structure within a single system. The central question concerns how key technical elements-such as state-machine narrative, real-time visual orchestration, and generative content pipelines-can be understood and reorganized as a coherent layer of interaction structure, and how this layer influences structural legibility, user perception, and cross-media coherence in interactive artworks. Building on prior Unity-based prototypes, this project combines Research-through-Design with iterative technical prototyping. It extracts common structures from existing works, develops a Unity package for interactive art production, and implements two to three PC-based case studies to test cross-thematic adaptability, development efficiency, and structural legibility.',
		links: [
			{ label: 'Download Research Proposal', href: '/files/HanranMa_Research_Proposal.pdf' },
			{ label: 'Related Works', href: '/works' },
			{ label: 'Contact', href: 'mailto:your-email@example.com' },
		],
	},
];

export const updates = [
	{
		date: '2026',
		title: 'Published paper',
		type: 'article',
		note: 'Published paper on Unity-based experimental walking simulation and dialogue-driven scene control.',
		link: 'https://www.clausiuspress.com/article/17816.html',
	},
	{
		date: '2026',
		title: 'PhD research development',
		type: 'research proposal',
		note: 'Ongoing research on game engines as technical platforms for hybrid interactive art.',
		link: '/files/HanranMa_Research_Proposal.pdf',
	},
];
