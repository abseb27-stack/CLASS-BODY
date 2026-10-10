import { ElevatorItem, SparePartItem, ServiceItem, WhyItem, FaqItem } from './types';

export const ELEVATORS: ElevatorItem[] = [
  {
    id: 'passenger',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=900&auto=format&fit=crop',
    title: {
      en: 'Passenger Elevator',
      fr: 'Ascenseur Passagers',
      ar: 'مصاعد ركاب',
    },
    description: {
      en: 'Passenger elevators for residential buildings, offices and hotels.',
      fr: 'Ascenseurs pour bâtiments résidentiels, bureaux et complexes hôteliers.',
      ar: 'مصاعد ركاب للمباني السكنية والمكاتب والفنادق.',
    },
    detailText: {
      en: 'Engineered for smooth, silent and energy-efficient passenger travel in mid-to-high rise buildings with luxury finishes.',
      fr: 'Conçu pour un déplacement fluide, silencieux et économe en énergie avec finitions personnalisées haut de gamme.',
      ar: 'مصممة لتوفير حركة ركاب سلسة وهادئة وموفرة للطاقة في المباني السكنية والتجارية مع تشطيبات عصرية فاخرة.',
    },
    specs: {
      capacity: {
        en: '450 kg – 1600 kg (6 to 21 Persons)',
        fr: '450 kg – 1600 kg (6 à 21 Personnes)',
        ar: '450 كغ – 1600 كغ (6 إلى 21 راكباً)',
      },
      speed: {
        en: '1.0 m/s – 2.5 m/s (Gearless VVVF)',
        fr: '1.0 m/s – 2.5 m/s (Technologie VVVF)',
        ar: '1.0 م/ث – 2.5 م/ث (تقنية VVVF غير مسننة)',
      },
      floors: {
        en: 'Up to 36 Floors (Max 120m travel)',
        fr: 'Jusqu’à 36 Niveaux (Course max 120m)',
        ar: 'حتى 36 طابقاً (مسار أقصى 120 متراً)',
      },
      applications: {
        en: 'Residential towers, office headquarters, hotels',
        fr: 'Tours résidentielles, sièges de bureaux, hôtels',
        ar: 'الأبراج السكنية، مقرات الشركات، الفنادق الفاخرة',
      },
    },
  },
  {
    id: 'panoramic',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=900&auto=format&fit=crop',
    title: {
      en: 'Panoramic Glass Elevator',
      fr: 'Ascenseur Panoramique en Verre',
      ar: 'مصاعد بانورامية زجاجية',
    },
    description: {
      en: 'Panoramic glass elevators for modern buildings and commercial centers.',
      fr: 'Ascenseurs panoramiques vitrés pour édifices modernes et centres commerciaux.',
      ar: 'مصاعد بانورامية زجاجية للمباني الحديثة والمراكز التجارية.',
    },
    detailText: {
      en: 'Architectural statement elevators featuring high-transparency laminated security glass and refined stainless steel frames.',
      fr: 'Élément architectural majeur en verre de sécurité feuilleté et châssis inox de haute précision offrant une vue à 360°.',
      ar: 'تصميم معماري فاخر بواجهات زجاجية مصفحة عالية الأمان وهياكل ستانلس ستيل مصقولة لرؤية بانورامية ساحرة.',
    },
    specs: {
      capacity: {
        en: '630 kg – 1350 kg (8 to 18 Persons)',
        fr: '630 kg – 1350 kg (8 à 18 Personnes)',
        ar: '630 كغ – 1350 كغ (8 إلى 18 راكباً)',
      },
      speed: {
        en: '1.0 m/s – 1.75 m/s',
        fr: '1.0 m/s – 1.75 m/s',
        ar: '1.0 م/ث – 1.75 م/ث',
      },
      floors: {
        en: 'Round, Square, or Hexagonal Glass designs',
        fr: 'Formes circulaire, carrée ou polygonale',
        ar: 'تصاميم دائرية، مربعة أو متعددة الأضلاع',
      },
      applications: {
        en: 'Shopping malls, modern airports, corporate atriums',
        fr: 'Centres commerciaux, aéroports, atriums d’entreprises',
        ar: 'المجمعات التجارية، المطارات، والبهو المعماري للشركات',
      },
    },
  },
  {
    id: 'residential',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop',
    title: {
      en: 'Residential Elevator',
      fr: 'Ascenseur Résidentiel',
      ar: 'مصاعد منزلية',
    },
    description: {
      en: 'Home and villa elevators.',
      fr: 'Ascenseurs privatifs pour maisons et villas.',
      ar: 'مصاعد منزلية وفيلات.',
    },
    detailText: {
      en: 'Compact pit and reduced headroom requirements tailored for private villas, duplexes, and multi-generation residences.',
      fr: 'Emprise au sol optimisée avec fosse réduite, adaptée aux villas de prestige et résidences privées.',
      ar: 'حلول ذكية تتطلب عمق حفرة أدنى وارتفاع سقف مدمج، مثالية للفيلات الخاصة والشقق الدوبلكس الفاخرة.',
    },
    specs: {
      capacity: {
        en: '250 kg – 450 kg (2 to 6 Persons)',
        fr: '250 kg – 450 kg (2 à 6 Personnes)',
        ar: '250 كغ – 450 كغ (2 إلى 6 أشخاص)',
      },
      speed: {
        en: '0.4 m/s – 1.0 m/s (Low noise, single-phase available)',
        fr: '0.4 m/s – 1.0 m/s (Silencieux, monophasé disponible)',
        ar: '0.4 م/ث – 1.0 م/ث (فائق الهدوء ومتاح بكهرباء منزلية)',
      },
      floors: {
        en: '2 to 6 Stops',
        fr: '2 à 6 Niveaux',
        ar: '2 إلى 6 طوابق',
      },
      applications: {
        en: 'Private villas, luxury townhouses, private clinics',
        fr: 'Villas individuelles, résidences de maître, duplex',
        ar: 'الفيلات الخاصة، المنازل العائلية، والعيادات الخاصة',
      },
    },
  },
  {
    id: 'freight',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=900&auto=format&fit=crop',
    title: {
      en: 'Freight Elevator',
      fr: 'Monte-Charge Industriel',
      ar: 'مصاعد بضائع وأحمال',
    },
    description: {
      en: 'Dedicated elevators for freight, cargo and heavy loads.',
      fr: 'Ascenseurs dédiés au transport de fret et charges lourdes.',
      ar: 'مصاعد مخصصة لنقل البضائع والأحمال.',
    },
    detailText: {
      en: 'Heavy-duty steel construction designed to withstand rigorous forklift loading, warehouses, and industrial logistical hubs.',
      fr: 'Structure ultra-robuste en acier renforcé, conçue pour résister aux chariots élévateurs et à la logistique intense.',
      ar: 'هيكل فولاذي متين مدعم لتحمل حركة الرافعات الشوكية ونقل البضائع الثقيلة في المستودعات والمصانع.',
    },
    specs: {
      capacity: {
        en: '1000 kg – 5000+ kg',
        fr: '1000 kg – 5000+ kg',
        ar: '1000 كغ – 5000+ كغ',
      },
      speed: {
        en: '0.5 m/s – 1.0 m/s',
        fr: '0.5 m/s – 1.0 m/s',
        ar: '0.5 م/ث – 1.0 م/ث',
      },
      floors: {
        en: 'Multi-leaf reinforced doors (Bi-parting/Telescopic)',
        fr: 'Portes renforcées à ouverture télescopique',
        ar: 'أبواب فولاذية مقواة بفتح ثنائي أو تلسكوبي',
      },
      applications: {
        en: 'Warehouses, industrial plants, retail centers, logistics',
        fr: 'Usines, entrepôts, hypermarchés, centres logistiques',
        ar: 'المستودعات، المصانع، المراكز التجارية، ومحطات الشحن',
      },
    },
  },
  {
    id: 'hospital',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=900&auto=format&fit=crop',
    title: {
      en: 'Hospital / Patient Elevator',
      fr: 'Ascenseur d’Hôpital & Médical',
      ar: 'مصاعد مستشفيات ومراكز صحية',
    },
    description: {
      en: 'Suitable elevators for hospitals and healthcare facilities.',
      fr: 'Ascenseurs adaptés aux hôpitaux et établissements médicaux.',
      ar: 'مصاعد مناسبة للمستشفيات والمرافق الصحية.',
    },
    detailText: {
      en: 'Deep-cabin dimensions designed for medical stretchers and beds, equipped with micro-leveling precision and antibacterial surfaces.',
      fr: 'Profondeur optimisée pour lits médicaux et brancards, nivellement de précision et revêtements antibactériens.',
      ar: 'أبعاد عميقة مخصصة لنقل الأسرّة الطبية ونقالات المرضى، مع تسوية فائقة الدقة عند الوقوف وأسطح معقمة.',
    },
    specs: {
      capacity: {
        en: '1600 kg – 2500 kg (Bed & Stretcher size)',
        fr: '1600 kg – 2500 kg (Format lits & brancards)',
        ar: '1600 كغ – 2500 كغ (مقاس أسرّة ونقالات طبية)',
      },
      speed: {
        en: '1.0 m/s – 1.75 m/s (Ultra-smooth braking)',
        fr: '1.0 m/s – 1.75 m/s (Accélération douce)',
        ar: '1.0 م/ث – 1.75 م/ث (تسارع وتوقف فائق السلاسة)',
      },
      floors: {
        en: 'Direct emergency medical priority control',
        fr: 'Mode priorité d’urgence médicale',
        ar: 'نظام تحكم بأولوية الحالات الطارئة',
      },
      applications: {
        en: 'General hospitals, specialized clinics, healthcare hubs',
        fr: 'Hôpitaux, cliniques chirurgicales, centres de santé',
        ar: 'المستشفيات العامة، المراكز الجراحية، ومجمعات العيادات',
      },
    },
  },
  {
    id: 'car',
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=900&auto=format&fit=crop',
    title: {
      en: 'Car Elevator',
      fr: 'Monte-Voitures & Parkings',
      ar: 'مصاعد سيارات ومواقف',
    },
    description: {
      en: 'Automotive and parking elevators.',
      fr: 'Ascenseurs pour véhicules et parcs de stationnement.',
      ar: 'مصاعد السيارات والمواقف.',
    },
    detailText: {
      en: 'Robust hydraulic and traction vehicular lifts saving valuable ramp space in modern parking structures and automobile showrooms.',
      fr: 'Systèmes de levage hydrauliques ou à traction permettant d’économiser l’espace des rampes dans les parkings.',
      ar: 'أنظمة متطورة لرفع السيارات بدون الحاجة لمنحدرات خرسانية ضخمة، مثالية لمواقف السيارات والمعارض الحديثة.',
    },
    specs: {
      capacity: {
        en: '3000 kg – 5000 kg (Sedans, SUVs, Vans)',
        fr: '3000 kg – 5000 kg (Berlines, SUV, Utilitaires)',
        ar: '3000 كغ – 5000 كغ (سيارات صالون، دفع رباعي، وفانات)',
      },
      speed: {
        en: '0.25 m/s – 0.5 m/s',
        fr: '0.25 m/s – 0.5 m/s',
        ar: '0.25 م/ث – 0.5 م/ث',
      },
      floors: {
        en: 'Dual entry cabin options (Front / Rear through)',
        fr: 'Option traversante double accès avant/arrière',
        ar: 'مقصورة مزدوجة الأبواب للدخول والخروج من الجهتين',
      },
      applications: {
        en: 'Multi-level parking, car dealerships, luxury garages',
        fr: 'Parkings souterrains, concessions automobiles, garages VIP',
        ar: 'المواقف متعددة الطوابق، وكالات السيارات، والمواقف الذكية',
      },
    },
  },
];

export const SPARE_PARTS: SparePartItem[] = [
  {
    id: 'motors',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop',
    name: {
      en: 'Elevator Motors',
      fr: 'Moteurs d’ascenseur',
      ar: 'محركات المصاعد',
    },
    category: {
      en: 'Traction Machines',
      fr: 'Machines de traction',
      ar: 'ماكينات الجر والرفع',
    },
  },
  {
    id: 'control-panels',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    name: {
      en: 'Control Panels',
      fr: 'Tableaux de commande',
      ar: 'لوحات التحكم',
    },
    category: {
      en: 'Electrical Systems',
      fr: 'Systèmes électriques',
      ar: 'الأنظمة الكهربائية',
    },
  },
  {
    id: 'doors',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=600&auto=format&fit=crop',
    name: {
      en: 'Elevator Doors',
      fr: 'Portes d’ascenseur',
      ar: 'أبواب المصاعد',
    },
    category: {
      en: 'Landing & Car Doors',
      fr: 'Portes palières et cabine',
      ar: 'أبواب الكابينة والأدوار',
    },
  },
  {
    id: 'door-operators',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=600&auto=format&fit=crop',
    name: {
      en: 'Door Operators',
      fr: 'Opérateurs de porte',
      ar: 'محركات الأبواب',
    },
    category: {
      en: 'Door Mechanisms',
      fr: 'Mécanismes d’ouverture',
      ar: 'آليات فتح وغلق الأبواب',
    },
  },
  {
    id: 'guide-rails',
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?q=80&w=600&auto=format&fit=crop',
    name: {
      en: 'Guide Rails',
      fr: 'Rails de guidage',
      ar: 'سكك التوجيه',
    },
    category: {
      en: 'Shaft Hardware',
      fr: 'Éléments de gaine',
      ar: 'قضبان ومسارات الحركة',
    },
  },
  {
    id: 'push-buttons',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f3?q=80&w=600&auto=format&fit=crop',
    name: {
      en: 'Push Buttons',
      fr: 'Boîtes à boutons',
      ar: 'أزرار وطلبات المصعد',
    },
    category: {
      en: 'COP & LOP Displays',
      fr: 'Panneaux COP & LOP',
      ar: 'لوحات الطلب الداخلية والخارجية',
    },
  },
  {
    id: 'safety-components',
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=600&auto=format&fit=crop',
    name: {
      en: 'Safety Components',
      fr: 'Composants de sécurité',
      ar: 'مكونات وأنظمة الأمان',
    },
    category: {
      en: 'Governors & Safety Gear',
      fr: 'Limitateurs & Parachutes',
      ar: 'منظمات السرعة والبراشوت',
    },
  },
  {
    id: 'cabins',
    image: 'https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?q=80&w=600&auto=format&fit=crop',
    name: {
      en: 'Elevator Cabins',
      fr: 'Cabines d’ascenseur',
      ar: 'كبائن المصاعد',
    },
    category: {
      en: 'Cabin Enclosures',
      fr: 'Habillages & Intérieurs',
      ar: 'تصاميم وهياكل الكبائن',
    },
  },
  {
    id: 'controllers',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop',
    name: {
      en: 'Controllers',
      fr: 'Armoires & Variateurs',
      ar: 'كروت التحكم والمغيرات',
    },
    category: {
      en: 'Inverters & Microprocessors',
      fr: 'Variateurs de fréquence VVVF',
      ar: 'المعالجات ومغيرات التردد',
    },
  },
  {
    id: 'other-components',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop',
    name: {
      en: 'Other Elevator Components',
      fr: 'Autres composants d’ascenseur',
      ar: 'قطع ومكونات مصاعد أخرى',
    },
    category: {
      en: 'Ropes, Buffers & Accessories',
      fr: 'Câbles, amortisseurs et poulies',
      ar: 'كوابل، مصدات ومستلزمات ميكانيكية',
    },
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'supply-export',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop',
    title: {
      en: 'Supply & Export',
      fr: 'Fourniture & Exportation',
      ar: 'التوريد والتصدير',
    },
    description: {
      en: 'We supply and export elevator systems and components for different building requirements.',
      fr: 'Nous fournissons et exportons des systèmes d’ascenseurs et pièces de rechange pour répondre à toutes les exigences architecturales.',
      ar: 'نوفر ونصَدّر أنظمة المصاعد وقطع الغيار لتلبية مختلف المتطلبات المعمارية والمشاريع الإنشائية.',
    },
    badge: {
      en: 'Global Logistics',
      fr: 'Logistique Internationale',
      ar: 'توريد دولي ومحلي',
    },
  },
  {
    id: 'installation',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop',
    title: {
      en: 'Installation',
      fr: 'Installation',
      ar: 'التركيب والتشغيل',
    },
    description: {
      en: 'Professional elevator installation with attention to safety, precision and reliable operation.',
      fr: 'Installation professionnelle axée sur la sécurité, la précision mécanique et une mise en service irréprochable.',
      ar: 'تركيب احترافي للمصاعد بأعلى معايير السلامة والدقة الهندسية والتشغيل الموثوق.',
    },
    badge: {
      en: 'Certified Engineers',
      fr: 'Équipes Qualifiées',
      ar: 'فرق هندسية متخصصة',
    },
  },
  {
    id: 'maintenance',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop',
    title: {
      en: 'Maintenance',
      fr: 'Maintenance',
      ar: 'الصيانة الدورية',
    },
    description: {
      en: 'Preventive and corrective maintenance to keep elevator systems safe and reliable.',
      fr: 'Maintenance préventive et corrective rigoureuse pour garantir la sécurité et la longévité de vos installations.',
      ar: 'صيانة وقائية وعلاجية للحفاظ على كفاءة وأمان أنظمة المصاعد بشكل مستمر ومستقر.',
    },
    badge: {
      en: '24/7 Availability',
      fr: 'Disponibilité Continue',
      ar: 'عقود صيانة معتمدة',
    },
  },
  {
    id: 'repair-support',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=800&auto=format&fit=crop',
    title: {
      en: 'Repair & Support',
      fr: 'Réparation & Support',
      ar: 'الإصلاح والدعم الفني',
    },
    description: {
      en: 'Technical assistance and repair services to help keep your elevator operating properly.',
      fr: 'Assistance technique réactive et interventions de réparation expertes pour assurer la continuité de service.',
      ar: 'دعم فني متخصص وتدخل سريع لإصلاح الأعطال لضمان عمل المصعد بكفاءة تامة دون توقف.',
    },
    badge: {
      en: 'Fast Response',
      fr: 'Intervention Rapide',
      ar: 'استجابة سريعة',
    },
  },
];

export const WHY_LIFTEX: WhyItem[] = [
  {
    id: 'quality',
    title: {
      en: 'Quality',
      fr: 'Qualité',
      ar: 'الجودة',
    },
    description: {
      en: 'Reliable products and components.',
      fr: 'Produits et composants certifiés et fiables.',
      ar: 'منتجات وقطع غيار أصلية وموثوقة.',
    },
    icon: 'ShieldCheck',
  },
  {
    id: 'safety',
    title: {
      en: 'Safety',
      fr: 'Sécurité',
      ar: 'السلامة',
    },
    description: {
      en: 'Safety-focused elevator solutions.',
      fr: 'Des solutions axées sur les normes de sécurité les plus strictes.',
      ar: 'حلول وأنظمة مصاعد تركز بالكامل على السلامة.',
    },
    icon: 'Award',
  },
  {
    id: 'professional-service',
    title: {
      en: 'Professional Service',
      fr: 'Service Professionnel',
      ar: 'خدمة احترافية',
    },
    description: {
      en: 'From supply to installation and maintenance.',
      fr: 'De la fourniture à l’installation et à la maintenance complète.',
      ar: 'من التوريد إلى التركيب والصيانة الميدانية.',
    },
    icon: 'Wrench',
  },
  {
    id: 'long-term-support',
    title: {
      en: 'Long-Term Support',
      fr: 'Support à Long Terme',
      ar: 'دعم طويل الأمد',
    },
    description: {
      en: 'Technical assistance and after-sales support.',
      fr: 'Accompagnement technique continu et service après-vente dédié.',
      ar: 'مساعدة تقنية مستمرة ودعم وثيق لما بعد البيع.',
    },
    icon: 'Headphones',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'installation-timeline',
    question: {
      en: 'What is the typical installation timeline for an elevator?',
      fr: 'Quels sont les délais types d’installation d’un ascenseur ?',
      ar: 'ما هي المدة الزمنية المعتادة لتركيب وتشغيل المصعد؟',
    },
    answer: {
      en: 'Once the hoistway and civil works are prepared, residential elevators typically require 2 to 3 weeks for complete mechanical and electrical installation. Commercial and high-rise elevator systems generally take 4 to 6 weeks, followed by comprehensive safety certification and commissioning tests.',
      fr: 'Une fois la gaine et le génie civil préparés, l’installation complète d’un ascenseur résidentiel prend habituellement de 2 à 3 semaines. Pour les projets commerciaux ou de grande hauteur, comptez 4 à 6 semaines, incluant les essais d’équilibrage et la certification de sécurité.',
      ar: 'بمجرد جهوزية بئر المصعد والأعمال الإنشائية، يستغرق التركيب الميكانيكي والكهربائي للمصاعد السكنية عادة من أسبوعين إلى 3 أسابيع. أما المصاعد التجارية والأبراج فتستغرق من 4 إلى 6 أسابيع، يعقبها اختبارات الأمان الشاملة والتشغيل التجريبي.',
    },
  },
  {
    id: 'maintenance-schedule',
    question: {
      en: 'What is the recommended maintenance schedule for elevators?',
      fr: 'Quelle est la fréquence recommandée pour la maintenance des ascenseurs ?',
      ar: 'ما هو الجدول الزمني الموصى به لصيانة المصاعد الدورية؟',
    },
    answer: {
      en: 'Preventive maintenance is carried out on a scheduled monthly or bi-monthly basis depending on elevator traffic and usage demands. Our maintenance program encompasses full safety gear testing, cable tension checks, motor diagnostics, door sensor alignments, and lubrication of moving components.',
      fr: 'La maintenance préventive est planifiée mensuellement ou tous les deux mois selon la fréquentation du bâtiment. Nos visites incluent l’inspection des sécurités parachutes, la vérification des câbles, le diagnostic du variateur, l’ajustement des portes et la lubrification.',
      ar: 'تُنفّذ الصيانة الوقائية دورياً كل شهر أو شهرين وفقاً لمعدل تشغيل المصعد وطبيعة المبنى. تشمل زيارات الصيانة فحص أجهزة البراشوت والأمان، توتر كوابل الجر، فحص لوحة التحكم والمحرك، محاذاة حساسات الأبواب، والتزييت الدقيق للمسارات.',
    },
  },
  {
    id: 'parts-warranty',
    question: {
      en: 'What warranty is provided for elevator components and spare parts?',
      fr: 'Quelle garantie couvre les pièces de rechange et les composants ?',
      ar: 'ما هي مدة الضمان المعتمدة لقطع الغيار والمكونات؟',
    },
    answer: {
      en: 'All genuine LIFTEX spare parts, traction machines, door operators, and microprocessor control boards come with a 12 to 24-month manufacturer warranty. Every component is quality-tested and certified to international safety standards (EN 81 / CE) before delivery.',
      fr: 'Toutes les pièces de rechange d’origine LIFTEX, moteurs de traction, opérateurs de portes et cartes électroniques bénéficient d’une garantie constructeur de 12 à 24 mois. Chaque pièce est certifiée selon les normes de sécurité internationales (EN 81 / CE).',
      ar: 'تتمتع كافة قطع غيار ومكونات LIFTEX الأصلية، بما في ذلك ماكينات الجر ومحركات الأبواب وكروت التحكم، بضمان معتمد يتراوح بين 12 إلى 24 شهراً ضد عيوب التصنيع، وجميعها مطابقة لمعايير السلامة الأوروبية والدولية (EN 81 / CE).',
    },
  },
  {
    id: 'customization-shaft',
    question: {
      en: 'Can elevators be customized for non-standard or restricted shafts?',
      fr: 'Pouvez-vous adapter un ascenseur à une gaine non standard ou étroite ?',
      ar: 'هل توفرون مصاعد مخصصة للآبار ذات المقاسات الخاصة أو الضيقة؟',
    },
    answer: {
      en: 'Yes. We provide bespoke engineering solutions with reduced pit and overhead requirements for existing buildings, villas, or renovated properties, with complete flexibility in cabin dimensions, glass paneling, and interior luxury finishes.',
      fr: 'Oui. Nous proposons des solutions sur mesure avec cuvette et hauteur sous dalle réduites pour les bâtiments existants ou en rénovation, avec une totale liberté sur les dimensions de cabine et les finitions intérieures.',
      ar: 'نعم، نقدم حلولاً هندسية مرنة تتطلب عمق حفرة وارتفاع سقف أدنى للمباني القائمة أو الفلل السكنية التي لا تمتلك بئراً قياسياً، مع تخصيص كامل لأبعاد الكابينة ونوعية الزجاج والتشطيبات الداخلية.',
    },
  },
];

export const CONTACT_INFO = {
  whatsapp: '+213 XX XX XX XX',
  whatsappUrl: 'https://wa.me/213550000000',
  phone: '+213 XX XX XX XX',
  phoneUrl: 'tel:+213550000000',
  email: 'contact@liftex-demo.com',
  emailUrl: 'mailto:contact@liftex-demo.com',
  facebook: 'LIFTEX Elevators',
  facebookUrl: 'https://facebook.com',
};
