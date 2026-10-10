import express from 'express';
import fs from 'fs';
import path from 'path';
import { createServer as createViteServer } from 'vite';

const DATA_DIR = path.resolve(process.cwd(), 'data');
const DB_FILE = path.join(DATA_DIR, 'store-db.json');

export interface SuitColorOption {
  id: string;
  hex: string;
  imageUrl: string;
  name: string;
  priceDZD: number;
}

export interface SuitProduct {
  id: string;
  code: string;
  series: string;
  modelIndex: number;
  priceDZD: number;
  inStock: boolean;
  availableSizes: string[];
  colors: SuitColorOption[];
  name: string;
  description: string;
}

export interface AlgerianOrder {
  id: string;
  orderNumber: string;
  createdAt: string;
  status: 'pending' | 'confirmed' | 'shipped' | 'Completed' | 'cancelled';
  productId: string;
  productCode: string;
  productName: string;
  size: string;
  colorId: string;
  color: string;
  imageUrl: string;
  priceDZD: number;
  deliveryFeeDZD: number;
  totalDZD: number;
  customerName: string;
  phone: string;
  wilayaCode: string;
  wilayaName: string;
  commune: string;
  deliveryType: 'home' | 'office';
  address: string;
}

// Official 2026 Algerian Administrative List: All 69 Wilayas (01 to 69)
export const ALGERIA_69_WILAYAS = [
  { code: '01', nameFr: 'Adrar', nameAr: 'أدرار', homeFee: 1400, officeFee: 900 },
  { code: '02', nameFr: 'Chlef', nameAr: 'الشلف', homeFee: 800, officeFee: 500 },
  { code: '03', nameFr: 'Laghouat', nameAr: 'الأغواط', homeFee: 1000, officeFee: 600 },
  { code: '04', nameFr: 'Oum El Bouaghi', nameAr: 'أم البواقي', homeFee: 850, officeFee: 500 },
  { code: '05', nameFr: 'Batna', nameAr: 'باتنة', homeFee: 850, officeFee: 500 },
  { code: '06', nameFr: 'Béjaïa', nameAr: 'بجاية', homeFee: 800, officeFee: 500 },
  { code: '07', nameFr: 'Biskra', nameAr: 'بسكرة', homeFee: 950, officeFee: 600 },
  { code: '08', nameFr: 'Béchar', nameAr: 'بشار', homeFee: 1200, officeFee: 800 },
  { code: '09', nameFr: 'Blida', nameAr: 'البليدة', homeFee: 600, officeFee: 400 },
  { code: '10', nameFr: 'Bouira', nameAr: 'البويرة', homeFee: 750, officeFee: 450 },
  { code: '11', nameFr: 'Tamanrasset', nameAr: 'تمنراست', homeFee: 1600, officeFee: 1100 },
  { code: '12', nameFr: 'Tébessa', nameAr: 'تبسة', homeFee: 900, officeFee: 550 },
  { code: '13', nameFr: 'Tlemcen', nameAr: 'تلمسان', homeFee: 850, officeFee: 500 },
  { code: '14', nameFr: 'Tiaret', nameAr: 'تيارت', homeFee: 850, officeFee: 500 },
  { code: '15', nameFr: 'Tizi Ouzou', nameAr: 'تيزي وزو', homeFee: 750, officeFee: 450 },
  { code: '16', nameFr: 'Alger', nameAr: 'الجزائر', homeFee: 500, officeFee: 350 },
  { code: '17', nameFr: 'Djelfa', nameAr: 'الجلفة', homeFee: 950, officeFee: 600 },
  { code: '18', nameFr: 'Jijel', nameAr: 'جيجل', homeFee: 800, officeFee: 500 },
  { code: '19', nameFr: 'Sétif', nameAr: 'سطيف', homeFee: 750, officeFee: 450 },
  { code: '20', nameFr: 'Saïda', nameAr: 'سعيدة', homeFee: 850, officeFee: 500 },
  { code: '21', nameFr: 'Skikda', nameAr: 'سكيكدة', homeFee: 800, officeFee: 500 },
  { code: '22', nameFr: 'Sidi Bel Abbès', nameAr: 'سيدي بلعباس', homeFee: 800, officeFee: 500 },
  { code: '23', nameFr: 'Annaba', nameAr: 'عنابة', homeFee: 800, officeFee: 500 },
  { code: '24', nameFr: 'Guelma', nameAr: 'قالمة', homeFee: 850, officeFee: 500 },
  { code: '25', nameFr: 'Constantine', nameAr: 'قسنطينة', homeFee: 750, officeFee: 450 },
  { code: '26', nameFr: 'Médéa', nameAr: 'المدية', homeFee: 750, officeFee: 450 },
  { code: '27', nameFr: 'Mostaganem', nameAr: 'مستغانم', homeFee: 800, officeFee: 500 },
  { code: '28', nameFr: "M'Sila", nameAr: 'المسيلة', homeFee: 850, officeFee: 500 },
  { code: '29', nameFr: 'Mascara', nameAr: 'معسكر', homeFee: 800, officeFee: 500 },
  { code: '30', nameFr: 'Ouargla', nameAr: 'ورقلة', homeFee: 1100, officeFee: 700 },
  { code: '31', nameFr: 'Oran', nameAr: 'وهران', homeFee: 750, officeFee: 450 },
  { code: '32', nameFr: 'El Bayadh', nameAr: 'البيض', homeFee: 1050, officeFee: 650 },
  { code: '33', nameFr: 'Illizi', nameAr: 'إليزي', homeFee: 1600, officeFee: 1100 },
  { code: '34', nameFr: 'Bordj Bou Arréridj', nameAr: 'برج بوعريريج', homeFee: 750, officeFee: 450 },
  { code: '35', nameFr: 'Boumerdès', nameAr: 'بومرداس', homeFee: 650, officeFee: 400 },
  { code: '36', nameFr: 'El Tarf', nameAr: 'الطارف', homeFee: 850, officeFee: 550 },
  { code: '37', nameFr: 'Tindouf', nameAr: 'تندوف', homeFee: 1600, officeFee: 1100 },
  { code: '38', nameFr: 'Tissemsilt', nameAr: 'تيسمسيلت', homeFee: 850, officeFee: 500 },
  { code: '39', nameFr: 'El Oued', nameAr: 'الوادي', homeFee: 1050, officeFee: 650 },
  { code: '40', nameFr: 'Khenchela', nameAr: 'خنشلة', homeFee: 900, officeFee: 550 },
  { code: '41', nameFr: 'Souk Ahras', nameAr: 'سوق أهراس', homeFee: 900, officeFee: 550 },
  { code: '42', nameFr: 'Tipaza', nameAr: 'تيبازة', homeFee: 650, officeFee: 400 },
  { code: '43', nameFr: 'Mila', nameAr: 'ميلة', homeFee: 800, officeFee: 500 },
  { code: '44', nameFr: 'Aïn Defla', nameAr: 'عين الدفلى', homeFee: 750, officeFee: 450 },
  { code: '45', nameFr: 'Naâma', nameAr: 'النعامة', homeFee: 1100, officeFee: 700 },
  { code: '46', nameFr: 'Aïn Témouchent', nameAr: 'عين تموشنت', homeFee: 800, officeFee: 500 },
  { code: '47', nameFr: 'Ghardaïa', nameAr: 'غرداية', homeFee: 1050, officeFee: 650 },
  { code: '48', nameFr: 'Relizane', nameAr: 'غليزان', homeFee: 800, officeFee: 500 },
  { code: '49', nameFr: 'Timimoun', nameAr: 'تيميمون', homeFee: 1400, officeFee: 950 },
  { code: '50', nameFr: 'Bordj Badji Mokhtar', nameAr: 'برج باجي مختار', homeFee: 1650, officeFee: 1150 },
  { code: '51', nameFr: 'Ouled Djellal', nameAr: 'أولاد جلال', homeFee: 950, officeFee: 600 },
  { code: '52', nameFr: 'Béni Abbès', nameAr: 'بني عباس', homeFee: 1350, officeFee: 900 },
  { code: '53', nameFr: 'In Salah', nameAr: 'عين صالح', homeFee: 1500, officeFee: 1000 },
  { code: '54', nameFr: 'In Guezzam', nameAr: 'عين قزام', homeFee: 1650, officeFee: 1150 },
  { code: '55', nameFr: 'Touggourt', nameAr: 'تقرت', homeFee: 1050, officeFee: 650 },
  { code: '56', nameFr: 'Djanet', nameAr: 'جانت', homeFee: 1650, officeFee: 1150 },
  { code: '57', nameFr: "El M'Ghair", nameAr: 'المغير', homeFee: 1050, officeFee: 650 },
  { code: '58', nameFr: 'El Meniaa', nameAr: 'المنيعة', homeFee: 1200, officeFee: 800 },
  { code: '59', nameFr: 'Aflou', nameAr: 'أفلو', homeFee: 1000, officeFee: 600 },
  { code: '60', nameFr: 'Barika', nameAr: 'بريكة', homeFee: 850, officeFee: 500 },
  { code: '61', nameFr: 'El Kantara', nameAr: 'القنطرة', homeFee: 950, officeFee: 600 },
  { code: '62', nameFr: 'Bir El Ater', nameAr: 'بئر العاتر', homeFee: 950, officeFee: 600 },
  { code: '63', nameFr: 'El Aricha', nameAr: 'العريشة', homeFee: 950, officeFee: 600 },
  { code: '64', nameFr: 'Ksar Chellala', nameAr: 'قصر الشلالة', homeFee: 900, officeFee: 550 },
  { code: '65', nameFr: 'Aïn Oussera', nameAr: 'عين وسارة', homeFee: 850, officeFee: 500 },
  { code: '66', nameFr: 'Messaad', nameAr: 'مسعد', homeFee: 950, officeFee: 600 },
  { code: '67', nameFr: 'Ksar El Boukhari', nameAr: 'قصر البخاري', homeFee: 800, officeFee: 500 },
  { code: '68', nameFr: 'Bou Saâda', nameAr: 'بوسعادة', homeFee: 850, officeFee: 500 },
  { code: '69', nameFr: 'El Abiodh Sidi Cheikh', nameAr: 'الأبيض سيدي الشيخ', homeFee: 1100, officeFee: 700 }
];

// Strictly 2 Suit Models, each with 3 Color Variants mapped to isolated full valet-stand transparent PNG product photos
const INITIAL_PRODUCTS: SuitProduct[] = [
  {
    id: 'model-01',
    code: 'MODEL 01',
    series: 'Gold Signature Ceremony Series',
    modelIndex: 0,
    priceDZD: 70000,
    inStock: true,
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    colors: [
      {
        id: 'noir-imperial-or',
        hex: '#d4af37',
        imageUrl: '/src/assets/images/m1_valet_black_gold_isolated_1791391735267.png',
        name: 'Noir Impérial & Or',
        priceDZD: 70000
      },
      {
        id: 'emeraude-imperial-or',
        hex: '#1f4230',
        imageUrl: '/src/assets/images/m1_valet_emerald_gold_isolated_1791391748443.png',
        name: 'Émeraude Impérial & Or',
        priceDZD: 70000
      },
      {
        id: 'bleu-nuit-imperial-or',
        hex: '#1b2c47',
        imageUrl: '/src/assets/images/m1_valet_navy_gold_isolated_1791391764298.png',
        name: 'Bleu Nuit Impérial & Or',
        priceDZD: 70000
      }
    ],
    name: 'Gold Signature Ceremony Series',
    description: 'Collection impériale sur présentoir valet royal avec boutons dorés ciselés, pantalon suspendu et accessoires de cérémonie.'
  },
  {
    id: 'model-02',
    code: 'MODEL 02',
    series: 'Gold Signature Contrast Series',
    modelIndex: 1,
    priceDZD: 60000,
    inStock: true,
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    colors: [
      {
        id: 'blanc-imperial-or',
        hex: '#f2f0ec',
        imageUrl: '/src/assets/images/m2_valet_white_black_isolated_1791391650071.png',
        name: 'Blanc Impérial & Or',
        priceDZD: 60000
      },
      {
        id: 'noir-imperial-argent',
        hex: '#7c8088',
        imageUrl: '/src/assets/images/m2_valet_black_silver_isolated_1791391661296.png',
        name: 'Noir Impérial & Argent',
        priceDZD: 60000
      },
      {
        id: 'bleu-imperial-argent',
        hex: '#193c82',
        imageUrl: '/src/assets/images/m2_valet_royal_blue_isolated_1791391670961.png',
        name: 'Bleu Impérial & Argent',
        priceDZD: 60000
      }
    ],
    name: 'Gold Signature Contrast Series',
    description: 'Smoking trois-pièces de gala sur présentoir valet complet avec pantalon assorti, chaussures vernies et plateau d’accessoires.'
  }
];

interface StoreDatabase {
  products: SuitProduct[];
  orders: AlgerianOrder[];
}

function loadDatabase(): StoreDatabase {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DB_FILE)) {
    const initial: StoreDatabase = { products: INITIAL_PRODUCTS, orders: [] };
    fs.writeFileSync(DB_FILE, JSON.stringify(initial, null, 2), 'utf-8');
    return initial;
  }
  try {
    const raw = fs.readFileSync(DB_FILE, 'utf-8');
    const parsed = JSON.parse(raw) as StoreDatabase;
    parsed.products = INITIAL_PRODUCTS;
    if (!Array.isArray(parsed.orders)) {
      parsed.orders = [];
    }
    return parsed;
  } catch {
    return { products: INITIAL_PRODUCTS, orders: [] };
  }
}

function saveDatabase(db: StoreDatabase): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2), 'utf-8');
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  app.get('/api/store', (_req, res) => {
    const db = loadDatabase();
    res.json({
      products: db.products,
      wilayas: ALGERIA_69_WILAYAS
    });
  });

  app.get('/api/orders', (_req, res) => {
    const db = loadDatabase();
    res.json({ orders: db.orders });
  });

  app.post('/api/orders', (req, res) => {
    const db = loadDatabase();
    const {
      productId,
      size,
      colorId,
      color,
      imageUrl,
      customerName,
      phone,
      wilayaCode,
      commune,
      deliveryType,
      address
    } = req.body || {};

    if (!productId || !size || !color || !customerName || !phone || !wilayaCode || !commune) {
      res.status(400).json({ error: 'Veuillez remplir tous les champs obligatoires.' });
      return;
    }

    const product = db.products.find((p) => p.id === productId) || db.products[0];
    const wilaya = ALGERIA_69_WILAYAS.find((w) => w.code === wilayaCode) || ALGERIA_69_WILAYAS[15];
    const cleanDeliveryType: 'home' | 'office' = deliveryType === 'office' ? 'office' : 'home';
    const deliveryFeeDZD = cleanDeliveryType === 'office' ? wilaya.officeFee : wilaya.homeFee;
    const totalDZD = product.priceDZD + deliveryFeeDZD;

    const orderNum = 'CB-' + Math.floor(100000 + Math.random() * 900000);
    const newOrder: AlgerianOrder = {
      id: 'ord_' + Date.now(),
      orderNumber: orderNum,
      createdAt: new Date().toISOString(),
      status: 'pending',
      productId: product.id,
      productCode: product.code,
      productName: product.name,
      size: String(size),
      colorId: String(colorId || ''),
      color: String(color),
      imageUrl: String(imageUrl || product.colors[0].imageUrl),
      priceDZD: product.priceDZD,
      deliveryFeeDZD,
      totalDZD,
      customerName: String(customerName).trim(),
      phone: String(phone).trim(),
      wilayaCode: wilaya.code,
      wilayaName: `${wilaya.nameAr} - ${wilaya.nameFr}`,
      commune: String(commune).trim(),
      deliveryType: cleanDeliveryType,
      address: String(address || commune).trim()
    };

    db.orders.unshift(newOrder);
    saveDatabase(db);
    res.status(201).json({ order: newOrder });
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Class Body Server running on http://localhost:${PORT}`);
  });
}

startServer();
