import { Voucher } from '@/types'

export const vouchers: Voucher[] = [
  {
    id: 'vch-001',
    title: 'The Sparkle',
    category: 'Luxury Jewelry',
    frontDescription: 'Tiffany & Co. Rose Gold Earrings',
    backDetails: 'Thought clearly has excellent taste (finally). These Medium Link Earrings in Rose Gold are permanent, reasonably priced, and actually worth the metal. One pair, one lucky Praewa.',
    terms: [
      'Valid for 1 pair of Tiffany & Co. Medium Link Earrings in Rose Gold',
      'No, Thought cannot wear them instead',
      'Yes, it has to be Rose Gold (it just does)',
      'Appointment recommended, but Thought will wait at home anyway'
    ],
    totalQuantity: 1,
    remainingQuantity: 1,
    status: 'available',
    validUntil: '2027-06-16',
    icon: 'sparkles',
    color: '#D4AF37'
  },
  {
    id: 'vch-002',
    title: 'Young at Heart',
    category: 'Wellness & Aesthetic',
    frontDescription: 'Botox by Dr. Thought',
    backDetails: 'Face wrinkles? What wrinkles? Praewa\'s face is already perfect, but just in case Time wants to test her... here\'s a Botox pass from the one and only Dr. Thought. (He promises gentle hands.)',
    terms: [
      'Valid for 2 Botox sessions by Dr. Thought (certification: loving boyfriend)',
      'Side effects may include: Thought staring adoringly for longer than necessary',
      'Wrinkles not guaranteed to disappear, but bad moods ARE guaranteed to vanish?!'
    ],
    totalQuantity: 2,
    remainingQuantity: 2,
    status: 'available',
    validUntil: '2027-06-16',
    icon: 'heart',
    color: '#E5B8B8'
  },
  {
    id: 'vch-003',
    title: 'The Tracker',
    category: 'Fitness & Health',
    frontDescription: 'Tracking Chain for PW',
    backDetails: 'For Praewa — the sweet-tooth, runs 6km and calls it a day, scrolls feed until midnight wondering why she\'s insomnia. Now you have a chain.',
    terms: [
      'Valid for 1 fitness/biological tracking chain',
      'Not responsible for Praewa forgetting to actually track things',
      'Thought believes in you (mostly)',
      'Chain does not guarantee results, but it looks cool, right?'
    ],
    totalQuantity: 1,
    remainingQuantity: 1,
    status: 'available',
    validUntil: '2027-06-16',
    icon: 'chain',
    color: '#A8B89C'
  },
  {
    id: 'vch-004',
    title: 'Hot Yoga Teacher PW',
    category: 'Fashion & Fitness',
    frontDescription: 'Super Hot Sport Bra & Pants Set',
    backDetails: 'For the sexiest, cutest, healthiest version of PW. You absolutely CANNOT wear this to the store, mall or cafe — cause you\'re different from those...',
    terms: [
      'Valid for 1 set of fire-level sport bra and pants',
      'STRICT: No wearing to store, mall, or cafe (this is not a request)',
      'Praewa reserves the right to feel extremely hot in these',
      'Thought reserves the right to malfunction upon sight'
    ],
    totalQuantity: 2,
    remainingQuantity: 2,
    status: 'available',
    validUntil: '2027-06-16',
    icon: 'fire',
    color: '#C9A9A6'
  },
  {
    id: 'vch-005',
    title: 'His&Her Shoes',
    category: 'Athletic Gear',
    frontDescription: 'Training Shoes (Your Choice)',
    backDetails: 'Running, training, or looking cool while pretending to exercise — you decide. Thought doesn\'t judge (okay maybe a little, but only because he cares about your arch support).',
    terms: [
      'Valid for 1 pair of training/running/hybrid shoes of Praewa\'s choice',
      'Choice must align with actual activity (no, you cannot get trekking boots and sit on the couch)',
      'No refunds if Praewa chooses style over comfort'
    ],
    totalQuantity: 1,
    remainingQuantity: 1,
    status: 'available',
    validUntil: '2027-06-16',
    icon: 'highheel',
    color: '#7D8471'
  },
  {
    id: 'vch-006',
    title: 'PW the Iron Wok',
    category: 'Fine Dining',
    frontDescription: 'Instagram Restaurant Voucher (x4)',
    backDetails: 'Look, Praewa. You pick the new-opening, photogenic, Instagram-bait restaurants. The ones that look good on camera but make Thought die inside. Fine. Here are 4 vouchers. Show Thought this voucher when you\'ve picked your spot, and he WILL shut up about it.',
    terms: [
      'Valid for 4 Instagram-worthy restaurant experiences',
      'STRICT: One voucher per Quarter (Q2, Q3, Q4, Q1)',
      'Praewa picks the place, Thought pays the bill',
      'When PW shows this voucher with her new restaurant choice, Thought shuts up immediately. No comments, no eye-rolls, no sighs.'
    ],
    totalQuantity: 4,
    remainingQuantity: 4,
    status: 'available',
    validUntil: '2027-06-16',
    icon: 'utensils',
    color: '#C4784A'
  },
  {
    id: 'vch-007',
    title: 'Silence Mode',
    category: 'Special Powers',
    frontDescription: 'Thought Shut-Up Card (x2)',
    backDetails: 'When Praewa is LOSING IT because Thought won\'t stop talking, nerding out, or being over contrarian — BAM. Redeem this card and Thought will shut his mouth immediately. No appeals. No continuations. Complete silence (temporary).',
    terms: [
      'Valid for 2 instances of making Thought shut up',
      'STRICT: May cause Thought slight emotional damage (he\'ll survive)',
      'Redeemed card cannot be taken back once played',
      'Side effect: Thought pouting may occur. Praewa\'s problem now.'
    ],
    totalQuantity: 2,
    remainingQuantity: 2,
    status: 'available',
    validUntil: '2027-06-16',
    icon: 'mouth',
    color: '#8B7355'
  },
  {
    id: 'vch-008',
    title: 'Whatever You Want',
    category: 'Wildcard',
    frontDescription: 'The Ultimate Get-Out-of-Jail-Free Card',
    backDetails: 'The most dangerous voucher in existence. Whatever Praewa wants, whenever she wants it, however she wants it. The catch? It\'s entirely up to Thought\'s judgement. Good luck getting exactly what you want, Praewa.',
    terms: [
      'Valid for 1 item/activity/experience of Praewa\'s choosing',
      'Subject to Thought\'s final judgement (buckle up)',
      'May range from "wow, that\'s actually perfect" to "are you kidding me"',
      'Thought is not responsible for expectations exceeding reality'
    ],
    totalQuantity: 1,
    remainingQuantity: 1,
    status: 'available',
    validUntil: '2027-06-16',
    icon: 'gift',
    color: '#D4AF37'
  }
]
