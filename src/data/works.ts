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
	video?: WorkVideo;
};

export const works: Work[] = [
	{
		slug: 'other-side-wall',
		title: 'On the Other Side of the Wall',
		year: '2022 / 2026 research article case',
		medium: 'Unity-based experimental walking simulation',
		tools: ['Unity', 'C#', 'dialogue-driven interaction', 'looping scene control'],
		keywords: [
			'walking simulation',
			'scene control',
			'dialogue-gated progression',
			'looping reset',
			'modular runtime system',
		],
		description:
			'A Unity-based experimental walking simulation built around constrained traversal, dialogue-gated progression, looping reset structures, fade-and-teleport transitions, and embedded generative media.',
		researchRelevance:
			'This work became the basis of my accepted paper on Unity-based experimental scene control, showing how small-scale interactive artworks can produce transferable technical and artistic knowledge.',
		displayMode: 'video-gallery',
		externalLink: 'https://www.youtube.com/watch?v=i--eS11sY6E',
		video: {
			provider: 'youtube',
			embedUrl: 'https://www.youtube.com/embed/i--eS11sY6E?si=jv5iqvk0YT6GEbJO',
			title: 'On the Other Side of the Wall',
		},
		images: [
			{
				src: '/images/works/other-side-wall-01.png',
				alt: 'Documentation image 01 for On the Other Side of the Wall',
				caption: 'scene control study / image 01',
			},
			{
				src: '/images/works/other-side-wall-02.png',
				alt: 'Documentation image 02 for On the Other Side of the Wall',
				caption: 'looping reset structure / image 02',
			},
			{
				src: '/images/works/other-side-wall-03.png',
				alt: 'Documentation image 03 for On the Other Side of the Wall',
				caption: 'runtime environment / image 03',
			},
		],
	},
	{
		slug: 'something-big',
		title: 'SOMETHING BIG IS COMING',
		year: '2025',
		medium: 'Unity-based interactive narrative system',
		tools: ['Unity', 'state management', 'multi-screen media', 'AI-generated video'],
		keywords: [
			'state-machine narrative',
			'multi-screen synchronization',
			'media triggering',
			'generative content pipeline',
		],
		description:
			'An interactive narrative system simulating television, mobile, and surveillance media layers. The work uses state changes, content triggering, multi-screen synchronization, and AI-generated video inserted into a callable media pool.',
		researchRelevance:
			'This project supports my research on state-machine narrative, real-time media orchestration, and generative content pipelines.',
		displayMode: 'video-gallery',
		externalLink: 'https://www.youtube.com/watch?v=m759ME5VyTw',
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
		medium: 'Unity + external-device interactive system',
		tools: ['Unity', 'sensors', 'visual feedback', 'external actuators'],
		keywords: [
			'multisensory interaction',
			'sound visualization',
			'accessibility',
			'embodied perception',
		],
		description:
			'A Unity-based project exploring how musical structures can be translated into visual and tactile experiences for Deaf and hard-of-hearing audiences.',
		researchRelevance:
			'The project provides a technical foundation for input mapping, real-time visual response, multisensory interaction, and user perception.',
		displayMode: 'video-gallery',
		externalLink: 'https://vimeo.com/1192306813',
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
		medium: 'multimedia art education project',
		tools: ['3D printing', 'sensors', 'sound', 'light', 'participatory workshop'],
		keywords: [
			'ritual environment',
			"children's cognition",
			'participatory art',
			'physical-digital system',
		],
		description:
			'A six-month multimedia art education project conducted with three school-age children, constructing a physical-digital altar through drawing, storytelling, 3D printing, sensors, sound, and light.',
		researchRelevance:
			'This project informs my interest in how interactive environments organize perception, symbolic structures, and embodied understanding.',
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
				alt: "Documentation image 01 for Children's System: Eggs Eggs Eggs",
				caption: 'workshop documentation / image 01',
			},
			{
				src: '/images/works/eggs-eggs-eggs-02.jpeg',
				alt: "Documentation image 02 for Children's System: Eggs Eggs Eggs",
				caption: 'physical-digital construction / image 02',
			},
			{
				src: '/images/works/eggs-eggs-eggs-03.JPG',
				alt: "Documentation image 03 for Children's System: Eggs Eggs Eggs",
				caption: 'participatory environment / image 03',
			},
		],
	},
];
