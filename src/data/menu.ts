export interface MenuItem {
  id: string;
  category: 'aguachiles' | 'ceviches' | 'calientes' | 'especialidades';
  name: { es: string; en: string };
  description: { es: string; en: string };
  price: number;
  image: string;
  popular?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: 'aguachile-negro',
    category: 'aguachiles',
    name: { es: 'Aguachile Negro', en: 'Black Aguachile' },
    description: {
      es: 'Camarón fresco bañado en salsa de chile negro con pepino, cebolla morada y aguacate.',
      en: 'Fresh shrimp bathed in black chili sauce with cucumber, red onion and avocado.',
    },
    price: 180,
    image: '/images/menu/aguachile-pulpo.webp',
    popular: true,
  },
  {
    id: 'aguachile-pulpo',
    category: 'aguachiles',
    name: { es: 'Aguachile de Pulpo y Camarón', en: 'Octopus & Shrimp Aguachile' },
    description: {
      es: 'La combinación perfecta de pulpo y camarón en salsa verde con chiles serranos.',
      en: 'The perfect combo of octopus and shrimp in green sauce with serrano peppers.',
    },
    price: 200,
    image: '/images/menu/aguachile-pulpo.webp',
    popular: true,
  },
  {
    id: 'ceviche-clasico',
    category: 'ceviches',
    name: { es: 'Ceviche Clásico', en: 'Classic Ceviche' },
    description: {
      es: 'Pescado del día curado en limón con jitomate, cilantro y cebolla. El de toda la vida.',
      en: 'Catch of the day cured in lime with tomato, cilantro and onion. The classic.',
    },
    price: 150,
    image: '/images/menu/carpaccio.webp',
  },
  {
    id: 'carpaccio',
    category: 'ceviches',
    name: { es: 'Carpaccio de Pulpo', en: 'Octopus Carpaccio' },
    description: {
      es: 'Finas láminas de pulpo con aceite de oliva, alcaparras y chile seco. Elegancia pura.',
      en: 'Thin octopus slices with olive oil, capers and dried chili. Pure elegance.',
    },
    price: 220,
    image: '/images/menu/carpaccio.webp',
    popular: true,
  },
  {
    id: 'ensalada-pulpo',
    category: 'ceviches',
    name: { es: 'Ensalada de Pulpo y Camarón', en: 'Octopus & Shrimp Salad' },
    description: {
      es: 'Pulpo y camarón sobre cama de lechugas frescas con aderezo de la casa.',
      en: 'Octopus and shrimp over fresh greens with house dressing.',
    },
    price: 190,
    image: '/images/menu/ensalada-pulpo.webp',
  },
  {
    id: 'camarones-ajo',
    category: 'calientes',
    name: { es: 'Camarones al Mojo de Ajo', en: 'Garlic Butter Shrimp' },
    description: {
      es: 'Camarones gigantes salteados en mantequilla con ajo dorado. Sencillo y perfecto.',
      en: 'Jumbo shrimp sautéed in butter with golden garlic. Simple and perfect.',
    },
    price: 200,
    image: '/images/menu/camarones-ajo.webp',
    popular: true,
  },
  {
    id: 'pescado-frito',
    category: 'calientes',
    name: { es: 'Pescado Frito Entero', en: 'Whole Fried Fish' },
    description: {
      es: 'Pescado entero frito hasta la perfección dorada. Crujiente por fuera, jugoso por dentro.',
      en: 'Whole fish fried to golden perfection. Crispy outside, juicy inside.',
    },
    price: 250,
    image: '/images/menu/pescado-frito.webp',
  },
  {
    id: 'burrita',
    category: 'especialidades',
    name: { es: 'La Burrita del Güero', en: "El Güero's Burrita" },
    description: {
      es: 'Tortilla de harina rellena de mariscos mixtos con queso gratinado. Exclusiva de la casa.',
      en: 'Flour tortilla stuffed with mixed seafood and melted cheese. House exclusive.',
    },
    price: 170,
    image: '/images/menu/burrita.webp',
    popular: true,
  },
];
