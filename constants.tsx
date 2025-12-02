

import { TrendingUp, BarChart3, Globe, Zap, Target, Layers, Search, ShieldCheck, Users, RefreshCw, Rocket, ShoppingBag, BrainCircuit, ScanSearch, MessageSquare, Lock, LineChart, MousePointerClick } from 'lucide-react';
import { ServiceItem, StatItem, TestimonialItem, CaseStudyItem, ProcessStepItem, FaqItem, BenefitItem } from './types';

export const APP_NAME = "Goodlife Marketing";

export const PLATFORM_BENEFITS: BenefitItem[] = [
  {
    title: "Bereik 90% van alle internetgebruikers",
    description: "Met Google Ads bereik je meer dan 90% van alle internetgebruikers via Search, Shopping, Display en YouTube.",
    icon: Globe
  },
  {
    title: "Sta bovenaan wanneer klanten zoeken",
    description: "Sta bovenaan op het moment dat klanten actief zoeken naar jouw product. Nu is het alleen nog van belang de juiste advertenties te tonen.",
    icon: Search
  },
  {
    title: "Snel resultaat",
    description: "Campagnes kunnen binnen enkele dagen live staan en direct omzet opleveren. Zo leer je snel wat werkt en wat niet. Met de juiste strategie kan je binnen de eerste maanden al een 3-5x return on ad spend realiseren.",
    icon: Zap
  },
  {
    title: "Meetbaar en transparant",
    description: "Je ziet exact wat elke euro oplevert, welke producten winstgevend zijn en waar je budget beter ingezet kan worden. Dat geeft grip en zekerheid.",
    icon: BarChart3
  },
  {
    title: "Gratis zichtbaarheid",
    description: "Op Google Search en Shopping betaal je alleen als iemand écht interesse toont en klikt op de advertentie.",
    icon: Target
  }
];

// Why Google Ads - Focused on Agency Expertise
export const WHY_GOOGLE_ADS: BenefitItem[] = [
  {
    title: "Google Shopping",
    description: "Zichtbaarheid is leuk, maar winst is beter. Wij optimaliseren je feed zodat budget focust op je bestverkopende producten met de hoogste marge.",
    icon: ShoppingBag
  },
  {
    title: "Performance Max",
    description: "Wij temmen het Google algoritme. Door jouw First-Party Data te koppelen, trainen we de AI om te zoeken naar winst in plaats van klikken.",
    icon: BrainCircuit
  },
  { 
    title: "Snel Resultaat", 
    description: "Campagnes kunnen binnen enkele dagen live staan en direct omzet opleveren. Zo kunnen we snel optimaliseren op basis van échte data.", 
    icon: Rocket 
  },
  { 
    title: "Meetbaar & Transparant", 
    description: "Je ziet exact wat elke euro oplevert, welke producten winstgevend zijn en waar je budget beter ingezet kan worden. Dat geeft grip en zekerheid.", 
    icon: LineChart 
  },
  { 
    title: "High-Intent Targeting", 
    description: "Sta bovenaan wanneer het telt. We combineren Search & Shopping data om klanten te vangen op het exacte moment van aankoopbeslissing.", 
    icon: MousePointerClick 
  }
];

export const SERVICES: ServiceItem[] = WHY_GOOGLE_ADS.map(item => ({
    ...item,
    icon: item.icon
}));

export const WHY_US_POINTS: BenefitItem[] = [
  {
    title: "100% E-Commerce Focus",
    description: "Campagnes die écht resultaat opleveren voor webshops, afgestemd op jouw merk, doelen en groeipotentieel.",
    icon: ShoppingBag
  },
  {
    title: "Bewezen Trackrecord",
    description: "Met 5+ jaar praktijkervaring en 20+ e-commerce klanten in uiteenlopende niches weten we precies wat wel én niet werkt.",
    icon: ShieldCheck
  },
  {
    title: "Proactief Partnerschap",
    description: "Direct contact via WhatsApp, korte lijnen en snel schakelen. Wij signaleren kansen en risico’s vóór jij ze ziet, zodat je altijd een stap voorloopt op je concurrenten.",
    icon: MessageSquare
  },
  {
    title: "Slimme Klantacquisitie",
    description: "Geen verbrand budget op branded verkeer, maar focus op nieuwe klanten. Dit is wat écht het verschil maakt voor je merk.",
    icon: Target
  },
  {
    title: "Continu Optimaliseren",
    description: "Van strategische sessies tot wekelijkse bijsturing, zodat je campagnes continu op topniveau presteren.",
    icon: RefreshCw
  },
  {
    title: "Risicovrij Starten",
    description: "Maandelijks opzegbaar en geen langlopende contracten. Wij moeten ons elke maand opnieuw bewijzen.",
    icon: Lock
  }
];

export const RESULTS_STATS: StatItem[] = [
  { label: "Merken Geschaald", value: "20+", subtext: "Uiteenlopende niches" },
  { label: "Extra Omzet", value: "€5M+", subtext: "Gegenereerd voor klanten" },
  { label: "Jaar Ervaring", value: "5+", subtext: "Google Ads & E-commerce" },
  { label: "Landen Wereldwijd", value: "10+", subtext: "Internationale campagnes" },
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    company: "MAYSON Cosmetics",
    title: "Van €48K naar €145K in 3 maanden",
    description: "Door inrichting Server-side Tracking, scheiden branded vs. non branded, en duurzaam opschalen met behoud van marge.",
    stats: [
      { label: "Omzetgroei", value: "202%", growth: "€48k → €145k" },
      { label: "ROAS Toename", value: "+12%", growth: "516% → 578%" }
    ]
  },
  {
    company: "RAVEG Hairstyling",
    title: "Van €16K naar €63K",
    description: "Focus op de best presterende producten, uitbreiden naar nieuwe afzetgebieden (o.a. Zweden en Italië), product feed optimalisatie.",
    stats: [
      { label: "Omzetgroei", value: "293%", growth: "€16k → €63k" },
      { label: "ROAS Behoud", value: "+3%", growth: "493% → 508%" }
    ]
  }
];

export const PROCESS_STEPS: ProcessStepItem[] = [
  {
    step: 1,
    title: "Technische Fundering & Audit",
    description: "We zorgen dat de basis klopt voordat we gaan schalen.",
    items: [
      "Fundamentele Google Ads audit",
      "Zoekwoorden & Concurrentie analyse",
      "Productfeed optimalisatie",
      "Conversietracking correct inrichten"
    ]
  },
  {
    step: 2,
    title: "Structuur & Grip Creëren",
    description: "We creëren overzicht, sturen op winst en bouwen volledige controle in.",
    items: [
      "Logische campagnestructuur opzetten",
      "Heldere KPI's (ROAS / POAS doelen)",
      "Realtime dashboard inrichten",
      "Branded vs. Non-branded scheiden"
    ]
  },
  {
    step: 3,
    title: "Winstgevend Opschalen",
    description: "We schalen duurzaam op met slimme optimalisaties en continu testen.",
    items: [
      "Uitsluiten verliesgevende termen",
      "Duurzaam opschalen (behoud marge)",
      "Continu A/B-testen",
      "Slimme AI-biedstrategieën"
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: "Onze omzet uit Google Ads is in korte tijd meer dan verdrievoudigd. Goodlife Marketing denkt strategisch mee en geeft ons altijd duidelijk inzicht in de resultaten. Zo voelt Google Ads eindelijk als een voorspelbaar groeikanaal.",
    author: "Niels Konijn",
    role: "Oprichter",
    company: "Mayson.nl"
  },
  {
    quote: "Al 3 jaar werken we samen met Goodlife Marketing. Ze denken proactief mee, helpen ons nieuwe markten te verkennen en zorgen ervoor dat onze Google Ads campagnes continu groeien en verbeteren. Het is fijn om een partner te hebben die meedenkt en vooruitkijkt.",
    author: "Niels Groen",
    role: "Oprichter",
    company: "Raveghairstyling.nl"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Werken jullie met alle merken?",
    answer: "Wij focussen ons op ambitieuze e-commerce ondernemers die serieus willen groeien. Vaak werken we met merken die minimaal €3k per maand besteden aan Google Ads, of de ambitie hebben om daar snel te komen. Plan een vrijblijvend strategiegesprek en ontdek of jouw merk in aanmerking komt voor een samenwerking."
  },
  {
    question: "Wat als ik nog niet adverteer op Google?",
    answer: "Heb je de ambitie om serieus te groeien met je merk? Dan hoeft dit geen probleem te zijn. In een vrijblijvend strategiegesprek kijken we samen of jouw merk klaar is om te starten met adverteren via Google Ads en geven we je praktische tips waarmee je meteen aan de slag kunt."
  },
  {
    question: "Wat maakt jullie anders dan een standaard bureau?",
    answer: "Bij ons heb je direct contact met een specialist, we focussen ons uitsluitend op e-commerce en helpen jouw merk naar het volgende niveau met een aanpak die zich al bewezen heeft bij tientallen e-commerce merken. Daarnaast ben je nooit gebonden aan langlopende contracten en kun je maandelijks opzeggen."
  },
  {
    question: "Kunnen jullie mijn huidige campagnes beoordelen?",
    answer: "Zeker, we bieden maandelijks 3 gratis Google Ads audits aan. Hierbij krijg je een complete analyse van je tracking, campagnestructuur, biedstrategieën en feed. Ook ontvang je een lijst met quick wins én we nemen alles samen door in een persoonlijke 1 op 1 videocall. Zo weet je exact welke stappen je kunt zetten — zelf of onder begeleiding van ons."
  }
];

export const NAV_LINKS = [
  { label: "Aanpak", href: "#approach" },
  { label: "Resultaten", href: "#results" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];
