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
 * A blank `logoUrl` falls back to the organisation's initials. To fill one in,
 * drop the file into src/lib/imgs/, import it above and set it here.
 */
export const DATA = {
	name: 'Ahmet Eren Çağatay',
	initials: 'AEC',
	url: 'https://aerencagatay.github.io/eren-portfolio',
	location: 'İstanbul, Türkiye',
	locationLink: 'https://www.google.com/maps/place/istanbul',
	description:
		'Software Engineer in financial technology. I build the data-intensive, business-critical systems capital markets run on.',
	// Links here are hash-only on purpose: `marked` renders them verbatim, so a
	// leading slash would skip `paths.base` and break the prerender.
	summary:
		'I am a software engineer at [ATP Tradesoft](#work), where I build and maintain systems for a fast-paced capital-markets environment — backend services, stored procedures, data-processing components and system integrations, in a domain where data accuracy and reliability are not optional. I hold a [B.S. in Computer Science Engineering with a Minor in Finance from Sabancı University](#education), which I attended on a full merit scholarship. Before that I trained anomaly-detection models at Turkish Aerospace Industries, and my [graduation project](#projects) paired a deep neural network with NLP feature engineering to price used cars and flag mispriced listings. I am drawn to problems where software engineering, financial domain knowledge and quantitative modelling meet.',
	avatarUrl: ProfileImg,
	skills: [
		'Python',
		'SQL',
		'C#',
		'.NET',
		'C++',
		'Java',
		'JavaScript',
		'PyTorch',
		'Node.js',
		'MySQL',
		'JupyterLab',
		'Deep Learning',
		'Anomaly Detection',
		'NLP Feature Engineering',
		'Reinforcement Learning',
		'Predictive Modeling',
		'Backend Development',
		'Database Programming',
		'Stored Procedures',
		'System Integration',
		'Data Processing',
		'Financial Markets',
		'Capital-Markets Technology',
		'Compliance-Sensitive Software'
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
			start: 'March 2024',
			end: 'Present',
			description:
				'Building and maintaining software for a fast-paced financial technology and capital-markets environment.',
			bullets: [
				'Develop and maintain software systems used within a fast-paced financial technology and capital-markets environment.',
				'Work with financial data structures, market data, database-driven applications, and business-critical financial workflows.',
				'Develop backend services, stored procedures, data-processing components, and system integrations.',
				'Translate financial and operational requirements into reliable and scalable software solutions.',
				'Collaborate with software, database, infrastructure, product, and business teams throughout the development lifecycle.',
				'Contribute to compliance-sensitive systems where data accuracy, reliability, and performance are essential.',
				'Investigate production issues, analyze data flows, and implement improvements to system stability and maintainability.'
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
			description:
				'Anomaly detection on large-scale datasets, plus reinforcement-learning experiments.',
			bullets: [
				'Developed machine-learning models for anomaly detection in large-scale datasets.',
				'Explored reinforcement-learning-based approaches using Python, PyCharm, and JupyterLab.',
				'Processed and analyzed complex datasets to identify significant patterns and abnormal observations.',
				'Evaluated model outputs and gained practical experience in experimental machine-learning workflows.'
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
	projects: [
		{
			title: 'Car Price Prediction & Market Anomaly Detection',
			href: '',
			dates: 'Feb 2023 - Jan 2024',
			active: true,
			description:
				'**Graduation project.** An end-to-end used-car price prediction system built on a deep neural network. NLP-based feature engineering pulls signal out of unstructured Turkish vehicle descriptions, the model estimates fair market value and flags listings that look underpriced or overpriced, and a real-time Twitter bot puts those calls in front of ordinary buyers. Data collection, preprocessing, modelling, evaluation and deployment all live in one pipeline.',
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
