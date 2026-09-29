/*
 * All site content lives here. To update text, links or images,
 * edit this file only — components just render what they receive.
 */
import portraitHero from '@/assets/images/portrait-hero.jpg';
import portraitAbout from '@/assets/images/portrait-about.jpg';
import kioskOfficials from '@/assets/images/kiosk-officials.jpg';
import kioskDemo from '@/assets/images/kiosk-demo.jpg';
import videoPoliceKiosk from '@/assets/images/video-police-kiosk.jpg';
import videoDigitalEconomy from '@/assets/images/video-digital-economy.jpg';
import videoVoiceAi from '@/assets/images/video-voice-ai.jpg';
import videoAiDms from '@/assets/images/video-ai-dms.jpg';
import userguide from '@/assets/images/userguide-1.jpg';
import brochureOutside from '@/assets/images/brochure-outside.jpg';
import brochureInside from '@/assets/images/brochure-inside.jpg';

export const profile = {
  name: 'Ton Trieu Vy',
  firstName: 'Vy',
  role: 'Digital Marketer',
  roleAccent: 'Video Editor',
  location: 'Viet Nam',
  year: 2026,
  email: 'tontrieuvy.com.vn@gmail.com',
  linkedin: 'https://www.linkedin.com/in/vy-t%C3%B4n-82670236a/',
  tagline:
    'Passionate about content, social media and creative communication — turning ideas into videos that connect brands with their audiences.',
  portrait: { src: portraitHero, alt: 'Portrait of Ton Trieu Vy' },
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Video work', href: '#work' },
  { label: 'Projects', href: '#project' },
  { label: 'Contact', href: '#contact' },
];

export const marqueeItems = ['Edit video', 'Visual design', 'Content creation', 'Social media'];

export const about = {
  paragraphs: [
    "I'm a Digital Marketer passionate about content, social media, and creative communication. I enjoy developing ideas, creating engaging content, and connecting brands with their audiences through digital platforms.",
    "With a hands-on approach to marketing, I'm always eager to learn, experiment with new ideas, and turn creative concepts into meaningful marketing experiences.",
  ],
  facts: [
    { label: 'Based in', value: 'Viet Nam' },
    { label: 'Focus', value: 'Video · Social · Content' },
    { label: 'Toolkit', value: 'CapCut · Canva' },
  ],
  photo: { src: portraitAbout, alt: 'Ton Trieu Vy smiling at a café' },
};

export const skills = [
  {
    id: 'video',
    track: 'Main track',
    title: 'Edit video',
    description:
      'Product demos, feature-update videos and short-form content for social — cut and paced in CapCut to keep people watching.',
    featured: true,
  },
  {
    id: 'visual',
    track: 'Visual',
    title: 'Visual design',
    description:
      'Key visuals, social visuals and print — catalogs, brochures and user guides that make a product easy to see and understand.',
    tags: ['Canva', 'Print', 'Social'],
  },
  {
    id: 'content',
    track: 'Content',
    title: 'Content creation',
    description:
      'Engaging social content and product communication that connects brands with their audiences.',
    tags: ['Ideas', 'Copy', 'Social'],
  },
];

/* orientation: 'vertical' (9:16) or 'horizontal' (16:9) */
export const videos = [
  {
    id: 'police-kiosk',
    title: 'Police Service Kiosk',
    url: 'https://youtu.be/f5ecV-8th2A',
    orientation: 'vertical',
    thumbnail: videoPoliceKiosk,
    alt: 'Police Service Kiosk user-guide video thumbnail',
  },
  {
    id: 'digital-economy-kiosk',
    title: 'Digital Economy Kiosk',
    url: 'https://youtu.be/t0Rc5IE_idg',
    orientation: 'vertical',
    thumbnail: videoDigitalEconomy,
    alt: 'Digital Economy Kiosk video thumbnail',
  },
  {
    id: 'voice-ai-ip',
    title: 'Voice AI IP',
    url: 'https://youtu.be/VPlBrnXQauE',
    orientation: 'horizontal',
    thumbnail: videoVoiceAi,
    alt: 'Voice AI IP video thumbnail',
  },
  {
    id: 'ai-dms',
    title: 'AI-DMS',
    url: 'https://youtu.be/D-T1BCFvXrs',
    orientation: 'horizontal',
    thumbnail: videoAiDms,
    alt: 'AI-DMS video thumbnail',
  },
];

export const caseStudy = {
  title: 'AI Kiosk',
  subtitle: 'for public administration',
  stat: {
    value: '~200',
    label: 'units deployed & sold across wards and communes',
    note: 'Key deployments in Northern and Mekong Delta provinces.',
  },
  photos: [
    { src: kioskOfficials, alt: 'Officials and residents trying the AI Kiosk' },
    { src: kioskDemo, alt: 'Staff demonstrating the AI Kiosk to a resident' },
  ],
  problem: [
    'A newly developed product that needed a clear and consistent communication approach.',
    'No ready-to-use marketing materials for introduction, demos and customer communication.',
    'Sales, product demos and exhibitions needed visual support.',
    'New features and product updates had to reach users and stakeholders effectively.',
  ],
  solution: [
    'Developed product catalogs, brochures and visual materials for features and use cases.',
    'Created feature-update videos to communicate new software functions and improvements.',
    'Built a reusable product-communication asset library for Sales and Marketing.',
    'Supported the rollout to ~200 units in wards and communes.',
  ],
};

export const printWork = [
  {
    id: 'userguide',
    title: 'User guide document',
    meta: 'Kiosk',
    images: [{ src: userguide, alt: 'User guide document for the citizen ID kiosk' }],
  },
  {
    id: 'brochure',
    title: 'Brochure — Chatbot AI · Voicebot AI · AI-DMS',
    meta: 'Tri-fold',
    images: [
      { src: brochureOutside, alt: 'Tri-fold brochure, outside panels' },
      {
        src: brochureInside,
        alt: 'Tri-fold brochure, inside panels for Chatbot AI, Voicebot AI and AI-DMS',
      },
    ],
  },
];
