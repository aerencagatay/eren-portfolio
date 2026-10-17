import { BriefcaseIcon, GraduationCapIcon, HomeIcon } from 'lucide-svelte';
import type { Resume } from '$lib/types';

import GmailSvg from '$lib/imgs/gmail.svg';
import GmailDarkSvg from '$lib/imgs/gmail-dark.svg';
import LinkedinSvg from '$lib/imgs/linkedin.svg';
import LinkedinDarkSvg from '$lib/imgs/linkedin-dark.svg';

import ProfileImg from './imgs/profile.jpg';

import SatirLogo from './imgs/satir-institute.png';
import SabanciLogo from './imgs/sabanci-university.png';
import CocukluDunyaLogo from './imgs/cocuklu-dunya.png';
import SussexLogo from './imgs/university-of-sussex.png';
import UaaLogo from './imgs/uskudar-american-academy.png';

/**
 * Eda Yortanlıoğlu — from Eda_Yortanlioglu_London_Clinical_CV.docx.
 *
 * Deliberately not here:
 * - Her phone number. It is on the CV, but this repository is public, so
 *   anything in this file is published whether or not the page renders it.
 *
 * Not on the CV, added at Eren's request: Üsküdar American Academy, 2015–2020,
 * and her LinkedIn.
 *
 * Experience keeps the CV's order — clinical roles first, then research —
 * rather than one merged timeline, because that split is how the CV
 * positions her for clinical roles.
 */
export const DATA: Resume = {
	name: 'Eda Yortanlıoğlu',
	shortName: 'Eda',
	initials: 'EY',
	role: 'Psychology Graduate',
	url: 'https://aerencagatay.github.io/eren-portfolio/eda',
	location: 'United Kingdom',
	locationLink: 'https://www.google.com/maps/place/united+kingdom',
	description:
		'Clinical Psychology and Mental Health MSc graduate, with experience across hospital psychiatry, addiction counselling and supervised family therapy.',
	// Links here are hash-only on purpose: marked renders them verbatim, so a
	// leading slash would skip paths.base and break the prerender.
	summary:
		'I am a Clinical Psychology and Mental Health MSc graduate from the [University of Sussex](#education), with practical experience across hospital psychology and psychiatry services, addiction counselling, community recovery, psychological research and supervised family therapy practice. I currently see clients under regular supervision as part of advanced [Satir Family Therapy training](#work). My experience spans sensitive mental health and addiction-related work, multidisciplinary settings, psychological assessment processes, evidence-based research and professional communication with service users. I am eligible to work in the UK and looking for psychology, assistant psychologist, mental health, addiction or clinical support roles within London services.',
	avatarUrl: ProfileImg,
	copy: {
		workTitle: 'Clinical & Research Experience',
		contactLead:
			'Open to psychology, assistant psychologist, mental health, addiction and clinical support roles within London services.'
	},
	navbar: [
		{ href: '/', icon: HomeIcon, label: 'Home' },
		{ href: '/#work', icon: BriefcaseIcon, label: 'Experience' },
		{ href: '/#education', icon: GraduationCapIcon, label: 'Education' }
	],
	contact: {
		email: 'edayort@gmail.com',
		tel: '',
		social: {
			LinkedIn: {
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/eda-yortanl%C4%B1o%C4%9Flu-184361260',
				icon: LinkedinSvg,
				navbar: true,
				dark_icon: LinkedinDarkSvg
			},
			email: {
				name: 'Send Email',
				url: 'mailto:edayort@gmail.com',
				icon: GmailSvg,
				navbar: true,
				dark_icon: GmailDarkSvg
			}
		}
	},
	work: [
		// Clinical & therapeutic
		{
			company: 'Satir Human Development & Family Therapy Institute',
			href: 'https://www.satir-tr.com/',
			badges: [],
			location: 'Istanbul, Türkiye',
			title: 'Family Therapy Trainee / Training Assistant',
			logoUrl: SatirLogo,
			start: 'May 2023',
			end: 'Present',
			description: '',
			bullets: [
				'Completed the first two years of formal Satir Family Therapy training and currently progressing through the supervision stage focused on clinical practice.',
				'Actively see clients under regular supervision, applying the Satir model within the scope of training and maintaining appropriate professional boundaries and confidentiality.',
				'Support therapy training sessions, participant coordination, preparation of learning materials, and Turkish subtitling of Virginia Satir therapy recordings.'
			]
		},
		{
			company: 'BADEM Addiction Counselling Centre',
			href: '',
			badges: [],
			location: 'Istanbul, Türkiye',
			title: 'Psychology Intern',
			logoUrl: '',
			start: 'Jul 2024',
			end: 'Sep 2024',
			description: '',
			bullets: [
				'Completed an internship in an outpatient addiction counselling, psychoeducation, and rehabilitation service.',
				'Observed psychiatric appointments, individual and family therapy sessions, psychoeducation, and counselling with people experiencing alcohol, substance, gambling, pornography, and problematic technology use.',
				'Developed understanding of multidisciplinary addiction care, confidentiality, rehabilitation pathways, and professional communication with service users.'
			]
		},
		{
			company: 'Muğla Sıtkı Koçman Training and Research Hospital',
			href: '',
			badges: [],
			location: 'Muğla, Türkiye',
			title: 'Clinical Psychology Intern',
			logoUrl: '',
			start: 'Jul 2023',
			end: 'Aug 2023',
			description: '',
			bullets: [
				'Completed clinical psychology placement experience across psychology and psychiatry departments, observing inpatient and outpatient mental health care and psychiatric consultations.',
				'Gained supervised exposure to child assessment tools including WISC-R and WISC-IV and observed adult measures including WAIS, MMPI, WMS, and Stroop.',
				'Observed presentations including depression, psychosis, bipolar disorder, schizophrenia, eating disorders, and substance-related difficulties.'
			]
		},
		// Research & mental health
		{
			company: 'Kennedy Street Recovery Hub',
			href: '',
			badges: ['Volunteer'],
			location: 'Brighton & Hove, UK',
			title: 'Volunteer Research Assistant',
			logoUrl: '',
			start: 'Jun 2026',
			end: 'Present',
			description: '',
			bullets: [
				'Research addiction recovery, mental health, health inequalities, social exclusion, and community wellbeing using NHS, ONS, local authority, academic, and third-sector evidence.',
				'Produce concise evidence summaries to support service development, funding applications, tender work, and strategic planning within a lived-experience recovery organisation.',
				'Review the work and impact of UK lived-experience recovery organisations, identifying good practice and areas of unmet need.'
			]
		},
		{
			company: 'Feyza Çorapçı Lab',
			href: '',
			badges: [],
			location: 'Sabancı University, Istanbul',
			title: 'Research Assistant — Independent Study (PSY 398)',
			logoUrl: SabanciLogo,
			start: 'Nov 2024',
			end: 'Sep 2025',
			description: '',
			bullets: [
				'Worked on developmental and clinical psychology research involving home-visitation interventions for at-risk families and the effects of early environmental and parental factors on child development.',
				'Conducted literature reviews, contributed to methodology development, collected and coded home-visit data, and assessed intervention outcomes.',
				'Developed experience with psychological assessment concepts and statistical analysis using SPSS.'
			]
		},
		{
			company: 'Çocuklu Dünya',
			href: '',
			badges: [],
			location: 'Istanbul, Türkiye',
			title: 'Psychology / Child Development Intern',
			logoUrl: CocukluDunyaLogo,
			start: 'Apr 2023',
			end: 'Oct 2023',
			description: '',
			bullets: [
				'Produced evidence-informed educational content for parents focused on child development and organised more than 300 age-appropriate activities for activity books, flashcards, and digital content.',
				'Contacted subject-matter experts and prepared materials for monthly educational seminars.'
			]
		}
	],
	education: [
		{
			school: 'University of Sussex',
			href: 'https://www.sussex.ac.uk/',
			degree: 'MSc Foundations of Clinical Psychology and Mental Health',
			logoUrl: SussexLogo,
			start: 'Sep 2025',
			end: 'Aug 2026',
			description:
				'Academic focus included clinical psychology, mental health service provision, psychological assessment, research methods, evidence-based approaches, and detailed study of CBT principles.',
			bullets: [
				'Dissertation: Cocaine Conditioned Locomotion and Neuronal Activity — investigated cue-related behavioural responses and neuronal activation associated with cocaine-conditioned environments.'
			]
		},
		{
			school: 'Sabancı University',
			href: 'https://www.sabanciuniv.edu',
			degree: 'BA Psychology',
			logoUrl: SabanciLogo,
			start: 'Sep 2020',
			end: 'Jun 2025'
		},
		{
			school: 'Üsküdar American Academy',
			href: 'https://www.uaa.k12.tr/',
			degree: 'High School Diploma',
			logoUrl: UaaLogo,
			start: '2015',
			end: '2020'
		}
	],
	languages: [
		{ name: 'Turkish', level: 'Native' },
		{ name: 'English', level: 'Professional fluency' }
	],
	// The CV lists one flat set of core skills; split here along the same
	// clinical/research line the CV uses for experience.
	skills: [
		{
			label: 'Clinical Practice',
			items: [
				'Supervised therapeutic practice and rapport-building',
				'Clinical observation and multidisciplinary working',
				'Psychological assessment knowledge',
				'CBT-informed understanding',
				'Addiction and recovery services',
				'Confidentiality and sensitive information handling'
			]
		},
		{
			label: 'Research & Communication',
			items: [
				'Research, literature review, and evidence synthesis',
				'SPSS and data analysis',
				'Professional communication'
			]
		}
	]
};
