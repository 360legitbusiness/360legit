import accountingSystemsImage from '../assets/carousel/accounting-systems.svg'
import growthAdvisoryImage from '../assets/carousel/growth-advisory.svg'
import complianceGrowthImage from '../assets/carousel/compliance-growth.svg'

export const companyName = '360 Legit Business Solution Pvt Ltd'

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Startup Support', path: '/startup-support' },
  { label: 'Resources', path: '/resources' },
  { label: 'Contact', path: '/contact' },
]

export const heroCarouselSlides = [
  {
    category: 'Accounting Excellence',
    title: 'Build Strong Accounting Systems for Better Decisions',
    description:
      'Structured bookkeeping, reporting discipline and automation-driven processes that improve financial clarity.',
    image: accountingSystemsImage,
    alt: 'Accounting dashboard and bookkeeping workflow illustration',
    metrics: [
      { label: 'Revenue', value: 'INR 48.6L' },
      { label: 'Expenses', value: 'INR 31.2L' },
      { label: 'Net Profit', value: 'INR 17.4L' },
    ],
  },
  {
    category: 'Growth Advisory',
    title: 'Plan Smarter Growth with Financial and Tax Strategy',
    description:
      'From tax planning to compliance roadmaps, we help businesses scale with confidence and reduced risk.',
    image: growthAdvisoryImage,
    alt: 'Business growth and strategic advisory illustration',
    metrics: [
      { label: 'YoY Growth', value: '+32%' },
      { label: 'Tax Savings', value: 'INR 8.4L' },
      { label: 'Runway', value: '18 Months' },
    ],
  },
  {
    category: 'Compliance Ready',
    title: 'Stay Audit-Ready with End-to-End Compliance Support',
    description:
      'Reliable filing systems, deadline tracking and expert advisory for GST, ROC and statutory compliance.',
    image: complianceGrowthImage,
    alt: 'Compliance checklist and business expansion illustration',
    metrics: [
      { label: 'GST Filing', value: '100% On-Time' },
      { label: 'Notices Resolved', value: '48 Cases' },
      { label: 'Compliance Score', value: '99.1%' },
    ],
  },
]

export const serviceOverview = [
  {
    title: 'Taxation Consultancy',
    description: 'Proactive tax advisory, planning and return support for growing businesses.',
  },
  {
    title: 'GST Services',
    description: 'End-to-end GST registration, filing, reconciliation and audit assistance.',
  },
  {
    title: 'Business Registration',
    description: 'Fast, compliant registration for private limited, LLP and partnership entities.',
  },
  {
    title: 'Legal Compliance',
    description: 'ROC, director and annual compliance management with deadline tracking.',
  },
  {
    title: 'Accounting Services',
    description: 'Structured bookkeeping, accounting controls and decision-ready MIS reports.',
  },
  {
    title: 'Labour Law Compliance',
    description: 'Payroll, ESI and PF compliance with process setup for HR and finance teams.',
  },
  {
    title: 'NGO Consultancy',
    description: 'Registration and compliance support for trusts, societies and Section 8 entities.',
  },
  {
    title: 'Trademark Registration',
    description: 'Trademark filing, response strategy and application lifecycle handling.',
  },
  {
    title: 'Import Export Consultancy',
    description: 'IEC guidance, documentation setup and compliance for cross-border operations.',
  },
  {
    title: 'US Taxation Services',
    description: 'Expert US tax planning, preparation, and filing services for individuals and businesses.',
  },
  {
    title: 'Lower Deduction Certificates',
    description: 'Assistance in obtaining Lower Deduction Certificates (LDC) and other statutory certificates.',
  },
]

export const whyChooseUs = [
  {
    title: 'Expert Financial Advisors',
    description: 'Specialists with practical experience in taxation, accounting and regulatory domains.',
  },
  {
    title: 'Complete Compliance Solutions',
    description: 'One partner for all registration, filing and annual compliance obligations.',
  },
  {
    title: 'Startup Friendly Services',
    description: 'Flexible and scalable support designed for early-stage and fast-growing businesses.',
  },
  {
    title: 'Trusted Business Consultancy',
    description: 'Process-driven advisory built on transparency, timelines and measurable outcomes.',
  },
]

export const clientReviews = [
  {
    name: 'Rahul Sharma',
    company: 'TechFlow Solutions',
    review: '360 Legit Business Solution transformed our chaotic accounting into a streamlined powerhouse. Their GST and tax planning saved us lakhs this financial year. An absolute game-changer for our startup.',
    rating: 5,
  },
  {
    name: 'Priya Verma',
    company: 'Verma & Associates',
    review: 'The proactive compliance reminders and dedicated relationship manager give me immense peace of mind. I no longer worry about ROC filings or missed deadlines. High-end, premium service.',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    company: 'Patel Manufacturing Pvt Ltd',
    review: 'From company registration to our trademark filing, the 360 Legit team handled everything flawlessly. Their deep expertise in corporate law and taxation is unmatched in the industry.',
    rating: 5,
  },
]

export const clientBenefits = [
  'Reduce tax risk through structured planning and filing discipline.',
  'Save time on compliance with expert-managed statutory activities.',
  'Access professional advisory for strategic financial decisions.',
  'Accelerate business growth with focused startup and expansion support.',
]

export const industriesServed = ['Startups', 'SMEs', 'Manufacturers', 'Exporters', 'NGOs']

export const serviceCategories = [
  {
    slug: 'taxation-services',
    title: 'Taxation Services',
    items: ['Income tax consultancy', 'Income tax filing', 'Tax planning', 'Tax notices handling', 'HUF registration & filing', 'TDS return filing'],
  },
  {
    slug: 'gst-services',
    title: 'GST Services',
    items: ['GST registration', 'GST return filing', 'GST audit support'],
  },
  {
    slug: 'business-registration',
    title: 'Business Registration',
    items: ['Private limited company', 'LLP registration', 'Partnership firm', 'MSME registration'],
  },
  {
    slug: 'legal-regulatory-compliance',
    title: 'Legal Compliance',
    items: ['ROC filing', 'Director compliance', 'Annual compliance'],
  },
  {
    slug: 'accounting-automation',
    title: 'Accounting Services',
    items: ['Accounting setup', 'Bookkeeping', 'Financial reporting'],
  },
  {
    slug: 'labour-law-compliance',
    title: 'Labour Compliance',
    items: ['ESI', 'PF', 'Payroll'],
  },
  {
    slug: 'ngo-non-profit-services',
    title: 'NGO Services',
    items: ['Trust registration', 'Society registration', 'Section 8 company'],
  },
  {
    slug: 'intellectual-property',
    title: 'Intellectual Property',
    items: ['Trademark registration', 'Trademark objection reply'],
  },
  {
    slug: 'business-support-services',
    title: 'Business Support Services',
    items: ['IEC registration', 'Export import consultancy', 'Financial advisory'],
  },
  {
    slug: 'us-taxation-services',
    title: 'US Taxation Services',
    items: ['Individual Tax Preparation', 'Business Tax Preparation', 'FBAR & FATCA Compliance', 'ITIN Application'],
  },
  {
    slug: 'lower-deduction-certificates',
    title: 'Lower Deduction Certificates',
    items: ['Section 197 LDC', 'Non-Deduction Certificates', 'Capital Gains Certificates', 'TDS/TCS Certificates'],
  },
]

export const homeWhatWeOffer = [
  {
    slug: 'taxation-services',
    title: 'Taxation Services',
    description:
      'Expert income tax consultancy, return filing, notices support, and comprehensive tax planning advisory for individuals and businesses.',
    services: ['Income Tax Consultancy', 'Income Tax Return Filing', 'Income Tax Notices Support'],
    moreServicesLabel: '+1 more services',
  },
  {
    slug: 'gst-services',
    title: 'GST Services',
    description:
      'Complete GST solutions including registration, return filing, audit support, and handling GST notices for seamless compliance.',
    services: ['GST Registration', 'GST Return Filing', 'GST Audit Support'],
    moreServicesLabel: '+1 more services',
  },
  {
    slug: 'business-registration',
    title: 'Business Registration',
    description:
      'Hassle-free business registration services for Private Limited Companies, LLPs, Partnerships, Startups, and MSMEs.',
    services: ['Private Limited Company', 'LLP Registration', 'Partnership Firm'],
    moreServicesLabel: '+2 more services',
  },
  {
    slug: 'legal-regulatory-compliance',
    title: 'Legal & Regulatory Compliance',
    description:
      'Comprehensive legal compliance advisory covering company law, ROC filings, director compliance, and annual statutory obligations.',
    services: ['Company Law Compliance', 'ROC Filing', 'Director Compliance'],
    moreServicesLabel: '+1 more services',
  },
  {
    slug: 'accounting-automation',
    title: 'Accounting & Automation',
    description:
      'Modern accounting system setup, automation solutions, bookkeeping services, and comprehensive financial reporting.',
    services: ['Accounting System Setup', 'Accounting Automation', 'Bookkeeping'],
    moreServicesLabel: '+1 more services',
  },
  {
    slug: 'labour-law-compliance',
    title: 'Labour Law Compliance',
    description:
      'Complete labour law compliance services including ESI registration, PF registration, and payroll compliance management.',
    services: ['ESI Registration', 'PF Registration', 'Payroll Compliance'],
    moreServicesLabel: '',
  },
  {
    slug: 'ngo-non-profit-services',
    title: 'NGO / Non-Profit Services',
    description:
      'Specialized support for NGOs including Society Registration, Trust Registration, and Section 8 Company Registration.',
    services: ['Society Registration', 'Trust Registration', 'Section 8 Company Registration'],
    moreServicesLabel: '',
  },
  {
    slug: 'intellectual-property',
    title: 'Intellectual Property',
    description:
      'Protect your brand and innovations with our trademark registration and trademark objection reply services.',
    services: ['Trademark Registration', 'Trademark Objection Reply'],
    moreServicesLabel: '',
  },
  {
    slug: 'business-support-services',
    title: 'Business Support Services',
    description:
      'End-to-end business support including IEC registration, import-export consultancy, and financial advisory services.',
    services: ['IEC Registration', 'Export Import Consultancy', 'Financial Advisory'],
    moreServicesLabel: '',
  },
  {
    slug: 'us-taxation-services',
    title: 'US Taxation Services',
    description:
      'Comprehensive US tax compliance and advisory services for expats, residents, and business entities.',
    services: ['Individual Tax Return', 'Corporate Tax Return', 'FBAR/FATCA Compliance'],
    moreServicesLabel: '',
  },
  {
    slug: 'lower-deduction-certificates',
    title: 'Lower Deduction Certificates',
    description:
      'End-to-end support for obtaining Lower Deduction or Non-Deduction certificates under the Income Tax Act.',
    services: ['Section 197 LDC', 'Non-Deduction Certificates', 'Statutory Certificates'],
    moreServicesLabel: '',
  },
]

export const startupSupportSteps = [
  'Startup formation guidance with practical compliance roadmaps.',
  'Business structure selection based on liability, taxation and investor readiness.',
  'Company formation support with complete documentation and registration workflow.',
  'Compliance setup for ROC, GST, payroll, accounting and annual obligations.',
  'Startup tax planning focused on savings, reporting discipline and future scaling.',
]

export const resourceCategories = ['Tax Updates', 'GST Updates', 'Startup Guides', 'Business Advisory']

export const blogPosts = [
  {
    category: 'Tax Updates',
    title: 'Year-End Tax Readiness Checklist for SMEs',
    excerpt:
      'A practical guide to organize documents, avoid penalties and close the financial year with confidence.',
    image: 'blog/tax-updates.svg',
  },
  {
    category: 'GST Updates',
    title: 'GST Filing Controls Every Finance Team Should Adopt',
    excerpt:
      'Build a reliable monthly filing process with reconciliation checkpoints and compliance controls.',
    image: 'blog/gst-updates.svg',
  },
  {
    category: 'Startup Guides',
    title: 'Choosing the Right Structure: Pvt Ltd vs LLP',
    excerpt:
      'Compare taxation, compliance and fundraising impact before registering your startup entity.',
    image: 'blog/startup-guides.svg',
  },
  {
    category: 'Business Advisory',
    title: 'Financial Compliance Habits That Improve Profitability',
    excerpt:
      'How strong accounting systems and advisory-led planning can support strategic business growth.',
    image: 'blog/business-advisory.svg',
  },
]

export const contactInfo = {
  address: '561 FF, St No 13, Vijay Park, Maujpur, Delhi - 110053',
  phonePrimary: '+91 9217871979',
  phoneSecondary: '',
  email: 'info.360lbs@gmail.com',
}

export const socialLinks = {
  linkedin: 'https://www.linkedin.com',
  facebook: 'https://www.facebook.com',
  instagram: 'https://www.instagram.com',
  twitter: 'https://x.com',
  youtube: 'https://www.youtube.com',
  whatsapp: 'https://wa.me/919217871979',
}
