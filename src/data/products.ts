export type ProductItem = {
  id: string
  name: string
  tagline: string
  about: string
  image: string
  weight: string
  benefits: string[]
  highlights: string[]
}

export type ProductCategory = {
  id: 'animal' | 'poultry'
  name: string
  description: string
  products: ProductItem[]
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'animal',
    name: 'Animal Feed',
    description:
      'Scientifically balanced rations for dairy, meat, and multi-species livestock — formulated for Indian farming conditions.',
    products: [
      {
        id: 'buffalo',
        name: 'Buffalo Feed',
        tagline: 'Premium nutrition for higher milk yield',
        about:
          'Specially formulated for murrah and indigenous buffaloes. Enriched with energy, protein, and minerals to support high milk production, stronger immunity, and natural digestion.',
        image: '/assets/products/buffalo.png',
        weight: '50 KG',
        benefits: ['High Milk Production', 'Better Health', 'Natural Nutrition'],
        highlights: [
          'More milk output per lactation cycle',
          'Stronger immunity and vitality',
          'Pure, natural ingredient blend',
        ],
      },
      {
        id: 'cow',
        name: 'Cow Feed',
        tagline: 'Complete nutrition for dairy cows',
        about:
          'Premium cow feed designed for Gir, HF, and crossbred dairy cattle. Supports optimal milk quality, digestive health, and sustained productivity across lactation stages.',
        image: '/assets/products/cow.png',
        weight: '50 KG',
        benefits: ['High Milk Production', 'Better Health', 'Improves Digestion'],
        highlights: [
          'Better milk quality and quantity',
          'Stronger immunity support',
          'Balanced minerals and vitamins',
        ],
      },
      {
        id: 'calf',
        name: 'Calf Starter',
        tagline: 'Perfect start for healthy growth',
        about:
          'Early-life starter feed for calves from birth through weaning. Easy digestion, strong bone development, and optimal growth foundation for future productivity.',
        image: '/assets/products/calf.png',
        weight: '50 KG',
        benefits: ['Healthy Growth', 'Strong Immunity', 'Strong Bones'],
        highlights: [
          'Optimal early growth rates',
          'Better feed utilization',
          'For healthy and active calves',
        ],
      },
      {
        id: 'sheep-goat',
        name: 'Sheep & Goat Feed',
        tagline: 'Balanced nutrition for small ruminants',
        about:
          'Tailored formulation for goats and sheep — supporting muscle development, coat health, fertility, and consistent weight gain in stall-fed and grazing systems.',
        image: '/assets/products/sheep-goat.png',
        weight: '50 KG',
        benefits: ['Healthy Growth', 'Better Immunity', 'Natural Nutrition'],
        highlights: [
          'Strong bones and muscles',
          'Healthy coat and skin',
          'Better fertility support',
        ],
      },
      {
        id: 'pig',
        name: 'Pig Feed',
        tagline: 'Balanced nutrition for higher performance',
        about:
          'High-performance pig feed for piglets and growers. Optimized protein-energy balance for faster weight gain, better feed conversion, and disease resistance.',
        image: '/assets/products/pig.png',
        weight: '50 KG',
        benefits: ['Healthy Growth', 'Strong Immunity', 'Better FCR'],
        highlights: [
          'Optimal growth and weight gain',
          'Better digestion efficiency',
          'Improved feed conversion ratio',
        ],
      },
    ],
  },
  {
    id: 'poultry',
    name: 'Poultry Feed',
    description:
      'Stage-wise broiler programs and layer formulations — scientific nutrition for healthy birds and maximum farm returns.',
    products: [
      {
        id: 'broiler',
        name: 'Broiler Feed',
        tagline: 'Scientific nutrition for healthy growth',
        about:
          'Complete broiler program from pre-starter through finisher. Stage-specific formulations for strong start, better FCR, maximum market weight, and healthier yields.',
        image: '/assets/products/broiler.png',
        weight: '50 KG',
        benefits: ['Better Growth', 'Strong Immunity', 'Better FCR', 'High Yield'],
        highlights: [
          'Pre-Starter, Starter, Grower, and Finisher stages',
          'Maximum weight at market age',
          'Complete nutrition for high performance',
        ],
      },
      {
        id: 'layer',
        name: 'Layer Feed',
        tagline: 'High egg production nutrition',
        about:
          'Premium layer feed for sustained egg production. Calcium and phosphorus enriched for strong eggshells, with vitamins and minerals for flock immunity and vitality.',
        image: '/assets/products/layer.png',
        weight: '50 KG',
        benefits: ['High Egg Production', 'Strong Eggshell', 'Better Immunity'],
        highlights: [
          'More and better quality eggs',
          'Calcium, phosphorus, and minerals enriched',
          'Supports healthy, active birds',
        ],
      },
    ],
  },
]
