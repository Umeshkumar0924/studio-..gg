export const teamMembers = [
  {
    id: 1,
    name: 'Eleanor Vance',
    role: 'Founder & Master Stylist',
    avatar: 'https://placehold.co/200x200.png',
    hint: 'woman portrait',
    bio: 'With over 20 years of experience, Eleanor founded By Touch Unisex Saloon with a vision to create a haven of style and luxury. She specializes in precision cutting and timeless looks.',
  },
  {
    id: 2,
    name: 'Marcus Thorne',
    role: 'Lead Colorist',
    avatar: 'https://placehold.co/200x200.png',
    hint: 'man portrait',
    bio: 'Marcus is an artist with color. From subtle balayage to bold, vibrant transformations, he brings a creative flair and technical expertise to every client.',
  },
  {
    id: 3,
    name: 'Clara Belle',
    role: 'Styling & Treatments Specialist',
    avatar: 'https://placehold.co/200x200.png',
    hint: 'woman smiling',
    bio: 'Clara has a passion for hair health and special occasion styling. She ensures every client leaves with hair that not only looks great but feels amazing too.',
  },
];

export const serviceList = [
  {
    category: 'Haircuts & Styling',
    items: [
      { id: 'hs1', name: 'Women\'s Haircut', price: '750+', duration: '60 min' },
      { id: 'hs2', name: 'Men\'s Haircut', price: '500+', duration: '45 min' },
      { id: 'hs3', name: 'Blowout & Style', price: '550+', duration: '45 min' },
      { id: 'hs4', name: 'Updo / Special Occasion', price: '950+', duration: '75 min' },
    ]
  },
  {
    category: 'Color Services',
    items: [
      { id: 'cs1', name: 'Single Process Color', price: '1200+', duration: '2 hours' },
      { id: 'cs2', name: 'Partial Highlights', price: '1800+', duration: '2.5 hours' },
      { id: 'cs3', name: 'Full Highlights', price: '2500+', duration: '3 hours' },
      { id: 'cs4', name: 'Balayage / Ombré', price: '3000+', duration: '3.5 hours' },
      { id: 'cs5', name: 'Gloss / Toner', price: '600+', duration: '30 min' },
    ]
  },
  {
    category: 'Treatments',
    items: [
      { id: 't1', name: 'Deep Conditioning Treatment', price: '450+', duration: '30 min' },
      { id: 't2', name: 'Keratin Smoothing Treatment', price: '3500+', duration: '3 hours' },
      { id: 't3', name: 'Scalp Treatment', price: '650+', duration: '45 min' },
    ]
  }
];

export const reviews = [
    {
        id: 1,
        name: 'Priya S.',
        rating: 5,
        review: "I love my new hair color! The team really listened to what I wanted and delivered amazing results.",
        date: '2024-07-01',
        status: 'approved',
    },
    {
        id: 2,
        name: 'Umesh K.',
        rating: 5,
        review: "Best salon in town! The staff is friendly and professional. I always leave happy with my haircut.",
        date: '2024-06-28',
        status: 'approved',
    },
    {
        id: 3,
        name: 'Rohan M.',
        rating: 4,
        review: "Great beard trim, very precise. The place is clean and has a good vibe. A bit pricey but worth it.",
        date: '2024-07-03',
        status: 'pending',
    },
    {
        id: 4,
        name: 'Anjali V.',
        rating: 5,
        review: "The spa treatment was so relaxing. I felt completely rejuvenated. Highly recommended for a self-care day!",
        date: '2024-06-25',
        status: 'approved',
    },
    {
        id: 5,
        name: 'Amit B.',
        rating: 3,
        review: "My haircut was okay, but not exactly what I asked for. The stylist was nice though.",
        date: '2024-07-05',
        status: 'pending',
    }
]
