export type WorkImage = {
	src: string;
	alt: string;
	caption: string;
};

export type WorkVideo = {
	provider: 'youtube' | 'vimeo';
	embedUrl: string;
	title: string;
	orientation?: 'landscape' | 'portrait';
};

export type WorkLink = {
	label: string;
	href: string;
	note: string;
	primary?: boolean;
};

export type WorkDetail = {
	label: string;
	title: string;
	body: string;
	items?: string[];
};

export type Work = {
	slug: string;
	title: string;
	year: string;
	medium: string;
	tools: string[];
	keywords: string[];
	description: string;
	researchRelevance: string;
	images: WorkImage[];
	galleryMode?: 'grid' | 'carousel';
	displayMode?: 'gallery' | 'video-gallery';
	externalLink?: string;
	links?: WorkLink[];
	details?: WorkDetail[];
	video?: WorkVideo;
};

export const works: Work[] = [
	{
		slug: 'other-side-wall',
		title: 'On the Other Side of the Wall',
		year: '2022 / 2026 published case study',
		medium: 'Unity-based first-person experimental walking simulation',
		tools: ['Unity', 'C#'],
		keywords: [
			'constrained traversal',
			'dialogue-gated progression',
			'looping scene control',
			'interaction grammar',
			'environmental storytelling',
		],
		description:
			'On the Other Side of the Wall links domestic, educational, workplace, and transit spaces into a constrained first-person journey. Walls and dialogue nodes regulate passage, while repeated return, fade-and-teleport transitions, and media embedded in screens and windows turn movement, delay, and access into the central material of the work.',
		researchRelevance:
			'The project underpins my published 2026 case study on Unity-based experimental scene control. By making the implementation layer visible, it demonstrates how a small set of reusable scripts can support coherent progression, environmental rhythm, and transferable practice knowledge without large-scale production resources.',
		displayMode: 'video-gallery',
		externalLink: 'https://www.youtube.com/watch?v=i--eS11sY6E',
		links: [
			{
				label: 'Play on itch.io',
				href: 'https://yousufuma.itch.io/wall',
				note: 'Launch the browser experience',
				primary: true,
			},
			{
				label: 'Read the published article',
				href: 'https://www.clausiuspress.com/article/17816.html',
				note: 'Full case study and implementation analysis',
			},
			{
				label: 'Watch the documentation',
				href: 'https://www.youtube.com/watch?v=i--eS11sY6E',
				note: 'Video walkthrough on YouTube',
			},
		],
		details: [
			{
				label: 'Project overview',
				title: 'The wall is both an image and an operating condition',
				body:
					'The work reorganises familiar domestic, educational, workplace, and transit environments as a linked experiential sequence rather than as documentary reconstructions. Its segmented circular layout keeps the route compact while allowing outer zones to remain visible but partly inaccessible. The wall is therefore more than a visual motif: it is a progression threshold that makes enclosure, exterior visibility, and negotiated passage structurally present.',
			},
			{
				label: 'Interaction grammar',
				title: 'Approach, prompt, input, response',
				body:
					'A shared detect-prompt-trigger pattern gives different objects the same readable interaction rhythm. Dialogue is not optional narrative decoration; it validates movement between zones and temporarily suspends other input so that repeated triggers cannot destabilise the current state. The player learns how to act without extensive tutorialisation, while uncertainty remains focused on when and where progression will become possible.',
				items: [
					'Approach an interactive object or spatial threshold.',
					'Read the prompt and activate its dialogue or scene condition.',
					'Complete the interaction to unlock a transition or environmental update.',
					'Re-enter familiar space after the system has changed its state.',
				],
			},
			{
				label: 'System design',
				title: 'Small modules coordinate a continuous experience',
				body:
					'Unity holds movement, prompts, dialogue states, transitions, dynamic media, and scene updates within one layered runtime system. A base interaction script handles common behaviour, while focused modules extend it for particular situations. The design avoids a large collection of bespoke mechanics and instead relies on interoperable parts that remain easier to test, revise, and document.',
				items: [
					'Loop-and-reset logic returns the player and recalibrates selected dialogue and interaction states.',
					'Fade-and-teleport transitions stage movement between segmented spaces without an abrupt break.',
					'Ladder controls adapt movement and camera behaviour for vertical traversal.',
					'Dynamic exterior spawning and embedded AI-generated video imply activity beyond the playable route.',
				],
			},
			{
				label: 'Experience analysis',
				title: 'Restriction makes progression perceptible',
				body:
					'Exploration is guided rather than fully open. Players encounter places that are visible before they are accessible, or familiar before they are functionally altered, producing delay and negotiation instead of conventional challenge. Repetition organises the environment rhythmically, while state-linked motion, light, and screen media make system changes legible at the level of atmosphere as well as interface.',
			},
			{
				label: 'Research contribution',
				title: 'An artwork that also documents a method',
				body:
					'The project shows how an independent interactive artwork can generate reusable technical knowledge when its middle layer - prompt behaviour, gating logic, reset conditions, and transition control - is made explicit. The published study presents this as a practice-based, low-cost model rather than a universal solution: it examines one PC-based case without a full user-study dataset, while opening the system to future testing, comparison, and adaptation for installation or public contexts.',
			},
		],
		video: {
			provider: 'youtube',
			embedUrl: 'https://www.youtube.com/embed/i--eS11sY6E?si=jv5iqvk0YT6GEbJO',
			title: 'On the Other Side of the Wall',
		},
		images: [
			{
				src: '/images/works/other-side-wall-01.png',
				alt: 'Domestic interior with a wall-mounted screen in On the Other Side of the Wall',
				caption: 'embedded media in the domestic zone / image 01',
			},
			{
				src: '/images/works/other-side-wall-02.png',
				alt: 'Narrow exterior threshold framed by walls and overhead wires in On the Other Side of the Wall',
				caption: 'visible but constrained exterior / image 02',
			},
			{
				src: '/images/works/other-side-wall-03.png',
				alt: 'Disordered classroom environment in On the Other Side of the Wall',
				caption: 'educational space within the looped route / image 03',
			},
		],
	},
	{
		slug: 'something-big',
		title: 'SOMETHING BIG IS COMING',
		year: '2025',
		medium: 'Unity-based multi-screen meta-media environment',
		tools: ['Unity'],
		keywords: [
			'state-machine narrative',
			'audiovisual interface orchestration',
			'anticipatory event logic',
			'media pools',
		],
		description:
			'Something Big Is Coming is a Unity-based multi-screen environment built around the feeling that an event is always imminent yet never fully arrives. Familiar conventions of television, mobile media, and surveillance imagery coexist within the same system, but no single channel provides a complete account. Dialogue prompts, timed interruptions, and changing screen states repeatedly redirect attention, turning anticipation itself into the narrative condition of the work.',
		researchRelevance:
			'Rather than using Unity only to display finished videos, the work treats the game engine as an artistic infrastructure that coordinates states, timing, interface prompts, and media behaviour in real time. It became an early methodological prototype for my research into state-based narrative and audiovisual interface orchestration, demonstrating how relations among screens can organise pacing, hesitation, agency, and interpretation.',
		displayMode: 'video-gallery',
		externalLink: 'https://www.youtube.com/watch?v=m759ME5VyTw',
		links: [
			{
				label: 'Play on itch.io',
				href: 'https://yousufuma.itch.io/something-big-is-coming',
				note: 'Launch the browser version',
				primary: true,
			},
		],
		details: [
			{
				label: 'Narrative premise',
				title: 'Anticipation becomes the event',
				body:
					'The title names both a promise and a delay. Instead of leading toward one decisive revelation, the work sustains a condition of expectation through alerts, fragments, pauses, and partial messages. The participant encounters an environment that appears to be preparing for an event whose scale and meaning remain uncertain. This suspended media anxiety shifts narrative away from a fixed plot and toward the gradual recognition of how the system behaves.',
			},
			{
				label: 'Screen relations',
				title: 'No screen functions as a neutral display',
				body:
					'Television, mobile, and surveillance channels operate simultaneously as distinct but connected layers. A dialogue interface and timed media events direct attention from one channel to another, while state changes alter what can appear and when. Meaning is produced through these relations: repetition can create pressure, an interruption can recast an earlier image, and an apparently secondary screen can become the centre of the encounter. The interface therefore acts as an audiovisual and temporal composition rather than a simple control panel.',
			},
			{
				label: 'Media system',
				title: 'Prepared fragments are organised as callable pools',
				body:
					'Video, image, text, and AI-generated fragments are stored within media pools and activated by artist-authored rules. Unity coordinates their timing, recurrence, and placement across the screen environment in real time. The generative dimension lies in this bounded recombination: the system can produce variable encounters without being treated as independently intentional. AI-generated material is one source within the wider composition, while artistic decisions about selection, constraint, sequence, and context continue to determine how each fragment functions.',
			},
			{
				label: 'Research connection',
				title: 'A prototype for audiovisual interface orchestration',
				body:
					'Within my wider research, Something Big Is Coming provides prior practice evidence for treating game engines as artistic infrastructures. Its media pools, multi-screen relations, timing structures, and anticipatory event logic show how an engine can organise attention and narrative across an unstable audiovisual field. The project informs my continuing investigation of state-based narrative, real-time media orchestration, and generative media systems, while remaining a methodological prototype rather than a completed outcome of the proposed PhD research.',
			},
		],
		video: {
			provider: 'youtube',
			embedUrl: 'https://www.youtube.com/embed/m759ME5VyTw?si=I-V7DHMcOf44dpwf',
			title: 'SOMETHING BIG IS COMING',
		},
		galleryMode: 'carousel',
		images: [
			{
				src: '/images/works/something-big-01.png',
				alt: 'Documentation image 01 for SOMETHING BIG IS COMING',
				caption: 'multi-screen media layer / image 01',
			},
			{
				src: '/images/works/something-big-02.png',
				alt: 'Documentation image 02 for SOMETHING BIG IS COMING',
				caption: 'state-machine narrative system / image 02',
			},
			{
				src: '/images/works/something-big-03.png',
				alt: 'Documentation image 03 for SOMETHING BIG IS COMING',
				caption: 'real-time media orchestration / image 03',
			},
			{
				src: '/images/works/something-big-04.png',
				alt: 'Documentation image 04 for SOMETHING BIG IS COMING',
				caption: 'generative content pipeline / image 04',
			},
		],
	},
	{
		slug: 'deaf-hard-of-hearing',
		title: 'Interactive Design for Deaf and Hard-of-Hearing Audiences',
		year: '2024-2025',
		medium: 'Audio-reactive Unity research prototype / WebGL experience',
		tools: ['Unity 2022.3 LTS', 'C#'],
		keywords: [
			'cross-modal translation',
			'audience agency',
			'accessibility-led design',
			'real-time visual orchestration',
		],
		description:
			'An audio-reactive research prototype exploring how musical structure and affect can be experienced through movement, space, light, colour, and form. Instead of adding accessibility after the experience is designed, the project uses access as the starting point for its interaction and audiovisual composition.',
		researchRelevance:
			'This prototype is a precursor to my current research on game engines as technical platforms for hybrid interactive art. It tests how Unity can coordinate audience input, real-time visual orchestration, and a legible interaction grammar within one experiential system.',
		displayMode: 'video-gallery',
		externalLink: 'https://vimeo.com/1192306813',
		links: [
			{
				label: 'Play on itch.io',
				href: 'https://yousufuma.itch.io/dfmp',
				note: 'Launch the browser experience',
				primary: true,
			},
			{
				label: 'View on GitHub',
				href:
					'https://github.com/yousufuma/Interactive-Design-for-Deaf-and-Hard-of-Hearing-Audiences',
				note: 'Source code and technical documentation',
			},
		],
		details: [
			{
				label: 'Design premise',
				title: 'Accessibility as a way of composing the experience',
				body:
					'The project asks how an interactive system might communicate musical structure through multiple sensory channels without positioning sound as the only authoritative form of experience. It treats sound-to-image mapping as a spatial and relational design problem rather than as a conventional equaliser or a textual description of music.',
			},
			{
				label: 'Audience agency',
				title: 'The participant changes the audiovisual world',
				body:
					'The scene analyses music in real time and connects its changing qualities to animated creatures, procedural light, materials, and environmental movement. Participants can alter the source audio and immediately observe how the visual world reorganises around their actions.',
				items: [
					'Hold Space to activate and release the audiovisual response.',
					'Use W and S to shift playback pitch and speed, changing the pace of movement.',
					'Use A and D to filter different frequency ranges, producing contrasting spatial and visual states.',
				],
			},
			{
				label: 'Research connection',
				title: 'A case study in real-time visual orchestration',
				body:
					'Within my wider research proposal, this work helps frame the game engine as more than a production tool. Unity becomes the platform that holds input, media behaviour, state changes, and visual feedback together. The prototype therefore contributes to my investigation of how interaction structure can remain perceptible to an audience while coordinating multiple media systems in real time.',
			},
			{
				label: 'Current scope',
				title: 'An exploratory proposition, not a universal solution',
				body:
					'The browser build currently concentrates on audiovisual translation; physical vibration and serial-device experiments are outside the WebGL version. The work does not claim that a particular visual quality is equivalent to a particular auditory experience. Future development requires co-design and structured evaluation with Deaf and hard-of-hearing participants, alongside adjustable contrast, motion, density, and tactile output.',
			},
		],
		video: {
			provider: 'vimeo',
			embedUrl:
				'https://player.vimeo.com/video/1192306813?badge=0&autopause=0&player_id=0&app_id=58479',
			title: 'Snail music',
		},
		images: [
			{
				src: '/images/works/deaf-hard-of-hearing-01.png',
				alt: 'Documentation image 01 for Interactive Design for Deaf and Hard-of-Hearing Audiences',
				caption: 'sound-to-visual mapping / image 01',
			},
			{
				src: '/images/works/deaf-hard-of-hearing-02.png',
				alt: 'Documentation image 02 for Interactive Design for Deaf and Hard-of-Hearing Audiences',
				caption: 'sensor and actuator study / image 02',
			},
			{
				src: '/images/works/deaf-hard-of-hearing-03.png',
				alt: 'Documentation image 03 for Interactive Design for Deaf and Hard-of-Hearing Audiences',
				caption: 'multisensory interaction / image 03',
			},
		],
	},
	{
		slug: 'eggs-eggs-eggs',
		title: "Children's System: Eggs Eggs Eggs",
		year: '2020',
		medium: 'Participatory multimedia installation and six-month art education project',
		tools: ['3D printing', 'Max/MSP'],
		keywords: [
			'child-authored symbols',
			'participatory ritual',
			'field recording',
			'physical-digital installation',
			'embodied interaction',
		],
		description:
			"Commissioned by Yuan Art Museum, Chongqing, for the 2020 O'Kids International Children's Art Festival, Children's System: Eggs Eggs Eggs was developed over six months with three primary-school children. Their recordings, stories, sculpted deities, and selected household objects were brought together as an altar-like physical-digital environment activated through percussion, sound, responsive light, and collective participation.",
		researchRelevance:
			"The project is an early investigation into how an interactive environment can organise perception, symbolic invention, and embodied participation across digital and physical media. It also established a collaborative method that begins with children's situated listening and self-generated forms, then translates those materials into a responsive public system without treating technology as a neutral display tool.",
		details: [
			{
				label: 'Project framework',
				title: 'Three children co-authored an altar-like environment',
				body:
					"Created for the 2020 O'Kids International Children's Art Festival at Yuan Art Museum in Chongqing, the project invited three primary-school children to develop personal symbolic figures from the sounds and spaces of their homes. I introduced the working concepts and designed the technical and spatial framework, while the children's recordings, choices, and sculptural decisions supplied the installation's central forms. The resulting environment was conceived as a provisional altar: not the representation of an existing faith, but a system assembled through collaboration.",
			},
			{
				label: 'Child-authored forms',
				title: 'Listening preceded the creation of each deity',
				body:
					"Each participant collected sounds from their immediate living environment and listened to a composition made from those recordings while developing a three-dimensional figure. The quiet, sustained listening session was intended to loosen deliberate illustration and make room for more intuitive associations. I preserved the children's forms through 3D printing and suspended the three translucent sculptures above the installation as its deities.",
			},
			{
				label: 'Sound process',
				title: 'Domestic recordings became a changing percussive score',
				body:
					"The children produced and selected sounds that, for them, expressed the character of home. I sampled this material and placed it in a randomised Max/MSP sequencer, creating a shifting, percussion-led composition. The score accompanied the sculpting sessions and continued throughout the exhibition, connecting the private process of listening with the installation's public rhythm.",
				items: [
					'Collect sounds from each child’s everyday surroundings.',
					'Recompose the recordings through a rule-based Max/MSP sequence.',
					'Use the evolving score to support intuitive 3D sculpting.',
					'Return the same sound world to the gallery as an invitation to act.',
				],
			},
			{
				label: 'Audience interaction',
				title: 'Found objects turned spectators into participants',
				body:
					"The children each chose household objects for the quality of their struck sound. Arranged at the centre of the installation, these discarded objects became the primary interface: visitors could play along with the recorded composition and take part in the emerging ritual. Reflective surrounding panels multiplied bodies and light, while sensors mapped changes in volume and frequency to coloured illumination, giving the improvised percussion a spatial visual response.",
			},
			{
				label: 'Artistic proposition',
				title: 'Technical systems were used to approach belief and symbolic formation',
				body:
					"The work continues my interest in addressing religion, folk belief, and transcendence through the instruments of rational and computational culture. Computer music, 3D fabrication, sensing, and responsive lighting were used to construct an intentionally noisy and unstable symbolic system that echoes the intensity of mystical and shamanic practices without reproducing a specific tradition. Working with children offered a way to examine how symbols might emerge before they become fully settled by adult convention, while the installation tested how those private inventions change when they enter a shared, performative space.",
			},
		],
		galleryMode: 'carousel',
		video: {
			provider: 'vimeo',
			embedUrl:
				'https://player.vimeo.com/video/1190714653?badge=0&autopause=0&player_id=0&app_id=58479',
			title: 'eggeggegg',
			orientation: 'portrait',
		},
		images: [
			{
				src: '/images/works/eggs-eggs-eggs-01.jpeg',
				alt: "Front view of Children's System: Eggs Eggs Eggs with suspended sculptures, reflective panels, lights, and found objects",
				caption: 'completed installation at Yuan Art Museum / image 01',
			},
			{
				src: '/images/works/eggs-eggs-eggs-02.jpeg',
				alt: "Illuminated translucent deity suspended above Children's System: Eggs Eggs Eggs",
				caption: 'suspended 3D-printed deity / image 02',
			},
			{
				src: '/images/works/eggs-eggs-eggs-03.JPG',
				alt: "Close view of a translucent child-authored deity in Children's System: Eggs Eggs Eggs",
				caption: 'child-authored deity in the installation / image 03',
			},
			{
				src: '/images/works/eggs-eggs-eggs-interaction.gif',
				alt: "Animated documentation of responsive light and audience percussion in Children's System: Eggs Eggs Eggs",
				caption: 'sound-reactive installation in motion / image 04',
			},
			{
				src: '/images/works/eggs-eggs-eggs-installation-view-02.jpg',
				alt: "Front view of the completed Children's System: Eggs Eggs Eggs installation",
				caption: 'completed installation and found-object instruments / image 05',
			},
			{
				src: '/images/works/eggs-eggs-eggs-workshop.jpg',
				alt: 'Artist and child collaborator reviewing a three-dimensional model on a laptop',
				caption: 'collaborative 3D sculpting process / image 06',
			},
			{
				src: '/images/works/eggs-eggs-eggs-idol-render-01.jpg',
				alt: 'Digital render of the first child-authored deity',
				caption: 'child-authored deity model 01 / image 07',
			},
			{
				src: '/images/works/eggs-eggs-eggs-idol-render-02.jpg',
				alt: 'Digital render of the second child-authored deity',
				caption: 'child-authored deity model 02 / image 08',
			},
			{
				src: '/images/works/eggs-eggs-eggs-idol-render-03.jpg',
				alt: 'Digital render of the third child-authored deity',
				caption: 'child-authored deity model 03 / image 09',
			},
			{
				src: '/images/works/eggs-eggs-eggs-installation-visualisation.jpg',
				alt: "Design visualisation of the altar-like Children's System: Eggs Eggs Eggs installation",
				caption: 'installation design visualisation / image 10',
			},
		],
	},
];
