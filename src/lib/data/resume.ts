import { CodeIcon, HomeIcon, TrophyIcon } from 'lucide-svelte';

// Navbar / contact icons
import GithubSvg from '$lib/imgs/github.svg';
import GithubDarkSvg from '$lib/imgs/github-dark.svg';

import GmailSvg from '$lib/imgs/gmail.svg';
import GmailDarkSvg from '$lib/imgs/gmail-dark.svg';

import LinkedinSvg from '$lib/imgs/linkedin.svg';
import LinkedinDarkSvg from '$lib/imgs/linkedin-dark.svg';

import ProfileImg from '$lib/imgs/profile.jpg';

// Organisation logos — all square, which is what the 48px circular badge wants.
import AtpLogo from '$lib/imgs/atp-tradesoft.jpg';
import TaiLogo from '$lib/imgs/turkish-aerospace.jpg';
import SabanciLogo from '$lib/imgs/sabanci-university.png';
import SakipSabanciLogo from '$lib/imgs/sakip-sabanci-high-school.jpg';
import CipLogo from '$lib/imgs/civic-involvement-projects.jpg';

/** Scheme + host only — og:image needs an absolute URL and avatarUrl already carries the base path. */
export const ORIGIN = 'https://aerencagatay.github.io';

/**
 * Every piece of CV content on the site lives here — the page reads from this
 * object and nothing else, so a fact only ever needs changing in one place.
 *
 * A blank logoUrl falls back to the organisation's initials. To fill one in,
 * drop the file into src/lib/imgs/, import it above and set it here.
 */
export const DATA = {
	name: 'Ahmet Eren Çağatay',
	initials: 'AEC',
	url: 'https://aerencagatay.github.io/eren-portfolio',
	location: 'İstanbul, Türkiye',
	locationLink: 'https://www.google.com/maps/place/istanbul',
	description:
		'Software Engineer in financial technology. I build and run the market data systems financial institutions depend on.',
	// Links here are hash-only on purpose: marked renders them verbatim, so a
	// leading slash would skip paths.base and break the prerender.
	summary:
		"I am a software engineer at [ATP Tradesoft](#work), where I own production reliability for a market data platform that several financial institutions run on — leading incident diagnosis across the application, messaging, infrastructure and database layers, and building the backend services and APIs behind real-time and delayed market data. I also work at the product edge: I spotted a client need our in-house platform could meet, validated the feasibility with engineering leadership, and helped turn it into the product's first sale to an external institution. I hold a [B.S. in Computer Science Engineering with a Minor in Finance from Sabancı University](#education), which I attended on a full merit scholarship, and my [graduation project](#projects) paired a deep neural network with NLP feature engineering to price used cars and flag mispriced listings.",
	avatarUrl: ProfileImg,
	// Grouped the way the CV groups them — a flat row of ~36 badges reads as noise.
	skills: [
		{ label: 'Languages', items: ['C#', 'JavaScript', 'Python', 'Java', 'C++', 'SQL'] },
		{ label: 'Backend & Messaging', items: ['.NET', 'Node.js', 'REST APIs', 'NATS JetStream'] },
		{
			label: 'Databases & Data',
			items: ['MySQL', 'Microsoft SQL Server', 'PostgreSQL', 'Altibase', 'Redis', 'QuestDB']
		},
		{
			label: 'Infrastructure & Monitoring',
			items: ['Kubernetes', 'Docker', 'Elasticsearch', 'Kibana', 'Git', 'Azure DevOps']
		},
		{
			label: 'AI Tools & LLMs',
			items: [
				'Claude Code',
				'Cursor',
				'OpenAI Codex',
				'MCP',
				'Multi-agent Workflows',
				'RAG',
				'OpenAI API'
			]
		},
		{
			label: 'Software Engineering',
			items: [
				'OOP',
				'SOLID',
				'Design Patterns',
				'Data Structures & Algorithms',
				'System Integration',
				'Debugging',
				'Performance Optimization'
			]
		}
	],
	navbar: [
		{ href: '/', icon: HomeIcon, label: 'Home' },
		{ href: '/#projects', icon: CodeIcon, label: 'Projects' },
		{ href: '/#achievements', icon: TrophyIcon, label: 'Achievements' }
	],
	contact: {
		email: 'ahmetern.cagatay@gmail.com',
		tel: '+90 538 048 04 28',
		social: {
			GitHub: {
				name: 'GitHub',
				url: 'https://github.com/aerencagatay',
				icon: GithubSvg,
				navbar: true,
				dark_icon: GithubDarkSvg
			},
			LinkedIn: {
				name: 'LinkedIn',
				url: 'https://linkedin.com/in/ahmet-eren-%C3%A7-04b382230',
				icon: LinkedinSvg,
				navbar: true,
				dark_icon: LinkedinDarkSvg
			},
			email: {
				name: 'Send Email',
				url: 'mailto:ahmetern.cagatay@gmail.com',
				icon: GmailSvg,
				navbar: true,
				dark_icon: GmailDarkSvg
			}
		}
	},
	work: [
		{
			company: 'ATP Tradesoft',
			href: 'https://www.atptech.com/atp-tradesoft/',
			badges: [],
			location: 'İstanbul, Türkiye',
			title: 'Software Engineer',
			logoUrl: AtpLogo,
			start: 'August 2024',
			end: 'Present',
			description:
				'Production ownership, backend services and APIs for a market data platform serving multiple financial institutions.',
			bullets: [
				'Translate customer and business needs into technical requirements and implementation plans, balancing customer priorities, technical feasibility, and development effort with product and engineering teams.',
				'Own production reliability and technical operations for a business-critical market data platform serving multiple financial institutions, leading incident diagnosis and resolution across application, messaging, infrastructure, and database layers.',
				"Identified a client need that could be met by an in-house market data platform, validated technical feasibility with engineering leadership, and proposed the solution, helping secure the product's first sale to an external financial institution.",
				'Develop and maintain backend services, APIs, and database components for financial-market and brokerage operations, supporting real-time and delayed market data delivery.',
				'Use Claude, MCP integrations, and multi-agent workflows to accelerate development, compare implementation approaches, and evaluate new AI tools for engineering use.'
			]
		},
		{
			company: 'Turkish Aerospace Industries',
			href: 'https://www.tusas.com/',
			badges: [],
			location: 'Ankara, Türkiye',
			title: 'Machine Learning Intern',
			logoUrl: TaiLogo,
			start: 'July 2023',
			end: 'August 2023',
			description: 'Anomaly detection and regression modelling on large datasets.',
			bullets: [
				'Developed anomaly-detection models and explored reinforcement-learning approaches using Python.',
				'Applied cross-validation and Ridge/Lasso regularization to regression models to assess generalization and reduce overfitting.',
				'Evaluated regression performance using MAE, RMSE, and R²; performed residual analysis to identify systematic prediction errors.'
			]
		},
		{
			company: 'Civic Involvement Projects',
			href: 'https://cip.sabanciuniv.edu/tr',
			badges: ['Volunteer'],
			location: 'Sabancı University',
			title: 'Project Leader',
			logoUrl: CipLogo,
			start: 'February 2023',
			end: 'June 2025',
			description: 'Led student teams running social-impact projects.',
			bullets: [
				'Led university students in social-impact projects related to disability rights, elderly care, environmental health, and equal access.',
				'Coordinated project activities and guided teams working with children from disadvantaged backgrounds.'
			]
		}
	],
	education: [
		{
			school: 'Sabancı University',
			href: 'https://www.sabanciuniv.edu',
			degree:
				'B.S. Computer Science Engineering, Minor in Finance · Full merit scholarship · GPA 3.00/4.00',
			logoUrl: SabanciLogo,
			start: '2020',
			end: '2025'
		},
		{
			school: 'Sakıp Sabancı Anatolian High School',
			href: 'https://sabancilisesi.meb.k12.tr/tema/okulumuz_hakkinda.php',
			degree: 'High School Diploma · Graduation grade 90/100',
			logoUrl: SakipSabanciLogo,
			start: '2015',
			end: '2019'
		}
	],
	languages: [
		{ name: 'Turkish', level: 'Native' },
		{ name: 'English', level: 'Advanced — IELTS 7.5' }
	],
	projects: [
		{
			title: 'Car Price Prediction & Market Anomaly Detection',
			href: '',
			dates: 'September 2024 - June 2025',
			active: true,
			description:
				'**Graduation project.** An end-to-end used-car price prediction system built on a deep neural network. NLP-based feature engineering pulls signal out of unstructured Turkish vehicle descriptions, the model estimates fair market value and flags listings that look underpriced or overpriced, and a real-time Twitter bot puts those calls in front of ordinary buyers. Data collection, preprocessing, model inference and deployment all live in one pipeline.',
			technologies: ['Python', 'PyTorch', 'Deep Learning', 'NLP', 'Twitter API'],
			links: [],
			image: '',
			video: ''
		},
		{
			title: 'Supply Chain Optimization & Document Processing',
			href: '',
			dates: '2024',
			active: true,
			description:
				'**Second place, EnGenius’24 AI Competition.** An anomaly-detection algorithm paired with a heuristic optimization solution for supply-chain operations, designed to cut both logistics cost and environmental impact. A second model extracts and processes unstructured information out of PDF documents and emails, feeding the result straight into an order-management workflow.',
			technologies: [
				'Python',
				'Anomaly Detection',
				'Heuristic Optimization',
				'NLP',
				'Document Parsing'
			],
			links: [],
			image: '',
			video: ''
		}
	],
	achievements: [
		{
			title: 'University Entrance Examination',
			dates: '2020',
			location: 'Türkiye',
			description:
				'Ranked **623rd** out of approximately 2 million candidates in the national university entrance examination.',
			image: '',
			links: []
		},
		{
			title: 'EnGenius’24 AI Competition',
			dates: '2024',
			location: 'Second Place',
			description:
				'Took **second place** with a supply-chain optimization and document-processing solution combining anomaly detection, heuristic optimization and unstructured-document parsing.',
			image: '',
			links: []
		}
	]
};
