import { Language } from './types';

export interface Translations {
  company: {
    brandName: string;
    fullName: string;
    tagline: string;
    badge: string;
  };
  nav: {
    home: string;
    elevators: string;
    spareParts: string;
    services: string;
    whyUs: string;
    faq: string;
    contact: string;
    contactUs: string;
  };
  hero: {
    title: string;
    subtitle: string;
    viewElevators: string;
    contactUs: string;
    specSummary: string;
  };
  elevators: {
    sectionTitle: string;
    sectionSubtitle: string;
    viewDetails: string;
    inquireNow: string;
    close: string;
    specifications: string;
    capacity: string;
    speed: string;
    stops: string;
    idealFor: string;
  };
  spareParts: {
    sectionTitle: string;
    sectionSubtitle: string;
    askAboutPart: string;
    fastDeliveryNote: string;
    inquireTitle: string;
  };
  services: {
    sectionTitle: string;
    sectionSubtitle: string;
    learnMore: string;
  };
  whyUs: {
    sectionTitle: string;
    sectionSubtitle: string;
  };
  faq: {
    sectionTitle: string;
    sectionSubtitle: string;
    stillHaveQuestions: string;
    contactSupport: string;
  };
  contact: {
    sectionTitle: string;
    sectionSubtitle: string;
    directChannels: string;
    whatsapp: string;
    whatsappAction: string;
    phone: string;
    phoneAction: string;
    email: string;
    emailAction: string;
    facebook: string;
    facebookAction: string;
    copied: string;
    demoNotice: string;
    quickInquiryPrompt: string;
    sendQuickMsg: string;
    interestLabel: string;
    interestOptions: {
      elevators: string;
      parts: string;
      installation: string;
      maintenance: string;
    };
  };
  footer: {
    description: string;
    quickLinks: string;
    contactInfo: string;
    rights: string;
    demoDisclaimer: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    company: {
      brandName: 'LIFTEX',
      fullName: 'LIFTEX Elevators & Parts',
      tagline: 'Reliable Elevators. Complete Solutions.',
      badge: 'Certified Engineering Standards',
    },
    nav: {
      home: 'Home',
      elevators: 'Elevators',
      spareParts: 'Spare Parts',
      services: 'Services',
      whyUs: 'Why LIFTEX',
      faq: 'FAQ',
      contact: 'Contact',
      contactUs: 'Contact Us',
    },
    hero: {
      title: 'Reliable Elevator Solutions for Every Building',
      subtitle:
        'We provide elevator solutions, equipment and spare parts, with professional services for supply, installation, maintenance and support.',
      viewElevators: 'View Our Elevators',
      contactUs: 'Contact Us',
      specSummary: 'Commercial • Residential • Industrial Solutions',
    },
    elevators: {
      sectionTitle: 'Our Elevators',
      sectionSubtitle:
        'Discover our range of elevator solutions designed for residential, commercial and specialized applications.',
      viewDetails: 'View Details',
      inquireNow: 'Inquire About This Elevator',
      close: 'Close',
      specifications: 'Technical Overview',
      capacity: 'Rated Capacity',
      speed: 'Rated Speed',
      stops: 'Max Travel / Floors',
      idealFor: 'Recommended Application',
    },
    spareParts: {
      sectionTitle: 'Elevator Spare Parts',
      sectionSubtitle:
        'Quality components and spare parts for reliable elevator operation and maintenance.',
      askAboutPart: 'Ask About a Part',
      fastDeliveryNote: 'Genuine components compatible with major worldwide standards',
      inquireTitle: 'Need a specific spare part?',
    },
    services: {
      sectionTitle: 'Our Services',
      sectionSubtitle:
        'Comprehensive elevator engineering services from initial shipment to ongoing operation.',
      learnMore: 'Contact for Service',
    },
    whyUs: {
      sectionTitle: 'Why LIFTEX',
      sectionSubtitle:
        'Engineered for reliability, safety, and operational excellence in vertical transportation.',
    },
    faq: {
      sectionTitle: 'Frequently Asked Questions',
      sectionSubtitle:
        'Clear answers regarding elevator installation timelines, maintenance routines, and warranty terms.',
      stillHaveQuestions: 'Have a specific question not covered here?',
      contactSupport: 'Ask Our Engineering Team',
    },
    contact: {
      sectionTitle: 'Let’s Talk About Your Elevator Project',
      sectionSubtitle:
        'Need an elevator, spare parts, installation or maintenance service? Contact our team and tell us what you need.',
      directChannels: 'Direct Contact Channels',
      whatsapp: 'WhatsApp',
      whatsappAction: 'Send us a message',
      phone: 'Phone',
      phoneAction: 'Call us',
      email: 'Email',
      emailAction: 'Send us an email',
      facebook: 'Facebook',
      facebookAction: 'Visit our Facebook',
      copied: 'Copied to clipboard!',
      demoNotice: 'Demo Website — Direct communication channels for preview',
      quickInquiryPrompt: 'Choose your inquiry type to open direct WhatsApp conversation:',
      sendQuickMsg: 'Open WhatsApp Chat',
      interestLabel: 'I am looking for:',
      interestOptions: {
        elevators: 'New Elevator System',
        parts: 'Spare Parts & Components',
        installation: 'Installation Service',
        maintenance: 'Maintenance & Repairs',
      },
    },
    footer: {
      description: 'Reliable Elevator Solutions for Every Building',
      quickLinks: 'Navigation',
      contactInfo: 'Get in Touch',
      rights: '© 2026 LIFTEX Elevators & Parts — Demo Website',
      demoDisclaimer: 'All visual and informational elements are prepared for client demonstration.',
    },
  },
  fr: {
    company: {
      brandName: 'LIFTEX',
      fullName: 'LIFTEX Ascenseurs & Pièces',
      tagline: 'Ascenseurs Fiables. Solutions Complètes.',
      badge: 'Normes d’Ingénierie Certifiées',
    },
    nav: {
      home: 'Accueil',
      elevators: 'Nos Ascenseurs',
      spareParts: 'Pièces de Rechange',
      services: 'Services',
      whyUs: 'Pourquoi LIFTEX',
      faq: 'FAQ',
      contact: 'Contact',
      contactUs: 'Contactez-nous',
    },
    hero: {
      title: 'Des Solutions d’Ascenseurs Fiables pour Chaque Bâtiment',
      subtitle:
        'Nous fournissons des solutions d’ascenseurs, équipements et pièces de rechange, avec des services professionnels d’approvisionnement, installation, maintenance et support.',
      viewElevators: 'Découvrir Nos Ascenseurs',
      contactUs: 'Contactez-nous',
      specSummary: 'Solutions Commerciales • Résidentielles • Industrielles',
    },
    elevators: {
      sectionTitle: 'Nos Ascenseurs',
      sectionSubtitle:
        'Découvrez notre gamme complète d’ascenseurs conçus pour les besoins résidentiels, commerciaux et spécialisés.',
      viewDetails: 'Voir les détails',
      inquireNow: 'Demander un devis pour cet ascenseur',
      close: 'Fermer',
      specifications: 'Fiche Technique Sommaire',
      capacity: 'Capacité Nominale',
      speed: 'Vitesse Nominale',
      stops: 'Course Max / Niveaux',
      idealFor: 'Application Recommandée',
    },
    spareParts: {
      sectionTitle: 'Pièces de Rechange',
      sectionSubtitle:
        'Composants de haute qualité et pièces d’origine pour un fonctionnement sûr et une maintenance durable.',
      askAboutPart: 'Demander une pièce',
      fastDeliveryNote: 'Composants certifiés conformes aux standards internationaux',
      inquireTitle: 'Vous recherchez une pièce précise ?',
    },
    services: {
      sectionTitle: 'Nos Services',
      sectionSubtitle:
        'Une prise en charge technique complète : de l’approvisionnement à l’exploitation continue.',
      learnMore: 'Demander ce service',
    },
    whyUs: {
      sectionTitle: 'Pourquoi LIFTEX',
      sectionSubtitle:
        'Une ingénierie axée sur la fiabilité, la sécurité et l’excellence opérationnelle.',
    },
    faq: {
      sectionTitle: 'Foire Aux Questions',
      sectionSubtitle:
        'Des réponses claires concernant les délais de pose, les plannings de maintenance et nos garanties de pièces.',
      stillHaveQuestions: 'Vous avez une question spécifique non listée ici ?',
      contactSupport: 'Consulter notre équipe technique',
    },
    contact: {
      sectionTitle: 'Parlons de Votre Projet d’Ascenseur',
      sectionSubtitle:
        'Besoin d’un ascenseur, de pièces de rechange, d’une installation ou d’une maintenance ? Contactez notre équipe dès aujourd’hui.',
      directChannels: 'Canaux de Contact Directs',
      whatsapp: 'WhatsApp',
      whatsappAction: 'Envoyez-nous un message',
      phone: 'Téléphone',
      phoneAction: 'Appelez-nous',
      email: 'Email',
      emailAction: 'Envoyez-nous un email',
      facebook: 'Facebook',
      facebookAction: 'Visitez notre page Facebook',
      copied: 'Copié dans le presse-papiers !',
      demoNotice: 'Site Web Démo — Coordonnées de présentation commerciale',
      quickInquiryPrompt: 'Sélectionnez votre besoin pour lancer directement WhatsApp :',
      sendQuickMsg: 'Ouvrir la conversation WhatsApp',
      interestLabel: 'Votre demande concerne :',
      interestOptions: {
        elevators: 'Installation d’un nouvel ascenseur',
        parts: 'Achat de pièces de rechange',
        installation: 'Travaux de pose & installation',
        maintenance: 'Contrat de maintenance & réparation',
      },
    },
    footer: {
      description: 'Des Solutions d’Ascenseurs Fiables pour Chaque Bâtiment',
      quickLinks: 'Navigation',
      contactInfo: 'Coordonnées',
      rights: '© 2026 LIFTEX Ascenseurs & Pièces — Site Démo',
      demoDisclaimer: 'Tous les éléments visuels et textuels sont configurés pour présentation client.',
    },
  },
  ar: {
    company: {
      brandName: 'LIFTEX',
      fullName: 'LIFTEX للمصاعد وقطع الغيار',
      tagline: 'مصاعد موثوقة. حلول متكاملة.',
      badge: 'معايير هندسية معتمدة',
    },
    nav: {
      home: 'الرئيسية',
      elevators: 'مصاعدنا',
      spareParts: 'قطع الغيار',
      services: 'خدماتنا',
      whyUs: 'لماذا لفتكس',
      faq: 'الأسئلة الشائعة',
      contact: 'اتصل بنا',
      contactUs: 'تواصل معنا',
    },
    hero: {
      title: 'حلول مصاعد موثوقة لكل أنواع المباني',
      subtitle:
        'نوفر حلول ومعدات المصاعد وقطع الغيار الأصلية، مع خدمات هندسية احترافية للتوريد، التركيب، الصيانة والدعم الفني.',
      viewElevators: 'استعرض مصاعدنا',
      contactUs: 'تواصل معنا الآن',
      specSummary: 'حلول سكنية • تجارية • صناعية وطبية',
    },
    elevators: {
      sectionTitle: 'مصاعدنا',
      sectionSubtitle:
        'اكتشف تشكيلة واسعة من حلول المصاعد المصممة للمباني السكنية والتجارية والاستخدامات الخاصة.',
      viewDetails: 'عرض التفاصيل',
      inquireNow: 'طلب استفسار عن هذا المصعد',
      close: 'إغلاق',
      specifications: 'المواصفات التقنية',
      capacity: 'الحمولة المقدرة',
      speed: 'السرعة المقدرة',
      stops: 'أقصى مسار / طوابق',
      idealFor: 'الاستخدام الموصى به',
    },
    spareParts: {
      sectionTitle: 'قطع غيار المصاعد',
      sectionSubtitle:
        'قطع غيار ومكونات ذات جودة عالية لضمان تشغيل المصاعد بكفاءة وأمان مستمر.',
      askAboutPart: 'اسأل عن قطعة غيار',
      fastDeliveryNote: 'قطع ومكونات أصلية متوافقة مع أعلى معايير الجودة العالمية',
      inquireTitle: 'تبحث عن قطعة غيار محددة؟',
    },
    services: {
      sectionTitle: 'خدماتنا',
      sectionSubtitle:
        'خدمات هندسية متكاملة للمصاعد تبدأ من التوريد والشحن وحتى التشغيل والصيانة المستمرة.',
      learnMore: 'اطلب الخدمة الآن',
    },
    whyUs: {
      sectionTitle: 'لماذا LIFTEX؟',
      sectionSubtitle:
        'هندسة متطورة قائمة على الثقة، السلامة التشغيلية والدعم الميداني المتواصل.',
    },
    faq: {
      sectionTitle: 'الأسئلة الشائعة',
      sectionSubtitle:
        'إجابات واضحة حول الجداول الزمنية للتركيب، مواعيد الصيانة الوقائية، وضمانات قطع الغيار الأصلية.',
      stillHaveQuestions: 'هل لديك استفسار هندسي لم تجد إجابته هنا؟',
      contactSupport: 'اسأل فريقنا الفني مباشرة',
    },
    contact: {
      sectionTitle: 'دعنا نتحدث عن مشروع المصاعد الخاص بك',
      sectionSubtitle:
        'هل تحتاج إلى مصعد جديد، قطع غيار، خدمات تركيب أو صيانة؟ تواصل مع فريقنا وأخبرنا باحتياجك مباشرة.',
      directChannels: 'قنوات التواصل المباشر',
      whatsapp: 'واتساب',
      whatsappAction: 'أرسل لنا رسالة فورية',
      phone: 'الهاتف',
      phoneAction: 'اتصل بنا مباشرة',
      email: 'البريد الإلكتروني',
      emailAction: 'أرسل لنا بريداً إلكترونياً',
      facebook: 'فيسبوك',
      facebookAction: 'تفضل بزيارة صفحتنا',
      copied: 'تم النسخ إلى الحافظة!',
      demoNotice: 'موقع تجريبي للعرض (Demo) — وسائل تواصل مباشرة وسريعة',
      quickInquiryPrompt: 'اختر نوع طلبك لفتح محادثة واتساب جاهزة مباشرة:',
      sendQuickMsg: 'فتح محادثة واتساب',
      interestLabel: 'نوع الطلب:',
      interestOptions: {
        elevators: 'توريد وتركيب مصعد جديد',
        parts: 'طلب قطع غيار ومكونات مصاعد',
        installation: 'خدمات تركيب وتشغيل مصعد',
        maintenance: 'عقد صيانة وإصلاح دوري',
      },
    },
    footer: {
      description: 'حلول مصاعد موثوقة لكل أنواع المباني',
      quickLinks: 'أقسام الموقع',
      contactInfo: 'بيانات الاتصال',
      rights: '© 2026 LIFTEX Elevators & Parts — موقع تجريبي',
      demoDisclaimer: 'كافة البيانات والصور مُعدة كنسخة تجريبية لعرض إمكانيات وهوية الشركة.',
    },
  },
};
