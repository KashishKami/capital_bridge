import type { SiteContent } from '../types/content';

export const siteContent: SiteContent = {
  home: {
    hero: {
      headline: 'Your Logistics Partner in Every Mile.',
      subheadline: 'We provide innovative transportation solutions for the most demanding supply chains in the world.',
    },
    features: [
      {
        id: 'technology',
        title: 'Technology',
        description: 'We use best API Systems to give you the quickest, easy and reliable results while you looking for the best rates. The Centralize quote system gives you multiple carrier.',
      },
      {
        id: 'quick-quotes',
        title: 'Quick Quotes',
        description: 'We have designed our website to give you the quote in 1 minute. Get access to all of your quotes in one central location. Get all the quotes in one PDF which is downloadable.',
      },
      {
        id: 'customer-service',
        title: 'Best Customer Service',
        description: 'Supply chain management is one of the critical and complicated process. To keep a track of it we have our customer service team ready to help you all the time.',
      }
    ],
    testimonials: [
      {
        id: 'alison-burgas',
        author: 'Alison Burgas',
        text: 'Fast, reliable, and professional from start to finish. Capital Bridge handled my interstate shipment with zero delays. Their team kept me updated at every step. Highly recommended!',
        rating: 5,
      },
      {
        id: 'mark-adam',
        author: 'Mark Adam',
        text: 'Excellent service! Booking was easy, and my freight arrived on time without a single issue. The customer support was top-notch and very responsive.',
        rating: 5,
      },
      {
        id: 'lio-hernandez',
        author: 'Lio Hernandez',
        text: 'I’ve worked with several logistics companies, but Capital Bridge really stands out. Transparent pricing, great communication, and flawless execution. I’ll definitely use them again.',
        rating: 5,
      }
    ],
    contact: {
      email: 'cs@capitalbridgelogistics.com',
      phone: '(888) 575-8884',
      address: 'Glenview, IL 60026',
      hours: 'Monday – Friday 8 am – 4:30 pm (Central Time)',
      accounting_email: 'accounting@capitalbridgelogistics.com'
    },
    agent: {
      title: 'Agent',
      description: 'We are looking for growth-minded entrepreneurs interested in starting or growing a successful logistics company! Whether you are an existing agent looking for a new home or looking to create and own your own logistics company, we are here for you.'
    },
    carrier: {
      title: 'Carrier',
      description: 'We takes great pride in developing and establishing relationships with over 35,000 full-truckload Carriers, providing our agents with unparalleled service and supreme prices. We believe the relationships with our customers are the most critical piece of our business. So, from pickup to delivery, every shipment receives superior service.'
    },
    stats: [
      { label: 'Shipments Delivered', value: '12K+' },
      { label: 'On-Time Delivery Rate', value: '98%' },
      { label: 'Client Retention Rate', value: '95%+' },
      { label: 'Industry Served', value: '20+' },
      { label: 'Fleet Size', value: '120+' }
    ],
    process: [
      { step: '01', title: 'Book Our Service' },
      { step: '02', title: 'We Pack Your Goods' },
      { step: '03', title: 'We Move Your Goods' },
      { step: '04', title: 'We Deliver' }
    ]
  },
  solutions: {
    ltl: {
      id: 'ltl',
      title: 'Less Than Truckload',
      description: 'Our diverse Carrier Portfolio offers National, Regional, and Micro-Regional partners who are all service leaders in their geographical footprint. Our innovative TMS comes with a module explicitly built for LTL shippers that allows for efficient, cost-effective quoting, booking, tracking, tracing, and auditing of all of your LTL and Volume LTL freight.',
      highlights: ['Enterprise', 'Guaranteed', 'Hazmat', 'Project freight']
    },
    'truck-load': {
      id: 'truck-load',
      title: 'Truck Load',
      description: 'With us as your 3PL partner, you will have access to cutting-edge technology, offering individualized solutions underpinned by a team of logistics professionals to streamline your supply chain needs.',
      features: [
        { id: 'dry-van', title: 'DRY VAN', description: 'Our dedicated Dry Van Team works around the clock to ensure your freight is picked up and delivered on time, every time.' },
        { id: 'flatbed', title: 'FLATBED', description: 'Flatbed Department specializes in all open deck freight with an extensive network of transportation Carriers.' },
        { id: 'rgn', title: 'RGN', description: 'Whether you’re shipping oversized or heavy equipment, our team offers specialized RGN trailer transport solutions.' },
        { id: 'step-deck', title: 'STEP DECK', description: 'Our premium step deck services allow you to safely move long, tall, and wide shipments anywhere in the U.S.' },
        { id: 'over-dimensional', title: 'OVER DIMENSIONAL', description: 'Our network of Carriers ensures the safe delivery of machinery, construction, oil, and more with specialized equipment.' }
      ]
    },
    expedite: {
      id: 'expedite',
      title: 'Expedite',
      description: 'Our Expedited Team has extensive freight forwarding expertise, cutting-edge technology, and critical relationships within the logistics industry. We utilize all of this to ensure your time-sensitive shipments receive the treatment they deserve.',
      highlights: ['Spot market pricing', 'Cost-effective equipment', 'Real-time communication', '24/7/365 support']
    },
    'freight-management': {
      id: 'freight-management',
      title: 'Freight Management',
      description: 'Our Freight Management services allow you to focus on growing your business while we supervise your freight from start to finish, tailored to your business. We’ll work as an extension of your company to reduce shipping costs, enhance operational procedures, and give you a competitive edge.',
      highlights: ['Supply chain optimization', 'Day-to-day oversight', 'Strategic advice', 'Reduced shipping costs']
    }
  },
  industries: {
    industries: {
      id: 'industries',
      title: 'Industries',
      description: 'There is list of industries is endless where we offer our services. With multiple carrier partners we offer all kind of Turk service to almost all of the industries. When your freight needs turn complex, we make shipping simple.'
    },
    automotive: {
      id: 'automotive',
      title: 'Automotive Industries',
      description: 'Managing shifts in demand, volume surges, special projects, and inventory shuffling are just a few of our specialties. Our expertise teams work around the clock to seamlessly provide superior carrier procurement, top-tier prices, and first-hand access to our proprietary TMS.',
      highlights: ['Shift management', 'Volume surges', 'Special projects', 'Inventory shuffling', 'Vendor coordination']
    },
    manufacturing: {
      id: 'manufacturing',
      title: 'Manufacturing Industries',
      description: 'We are committed to offering cost-effective solutions that enable timely delivery of raw materials to manufacture facilities and the transportation of finished products to end-users.',
      highlights: ['Raw material delivery', 'Finished product transport', 'Cost-effective solutions', 'One-stop shop']
    },
    retail: {
      id: 'retail',
      title: 'Retail Industries',
      description: 'With us as your 3PL partner, you will have access to cutting-edge technology, offering individualized solutions underpinned by a team of logistics professionals to streamline your supply chain needs.',
      highlights: ['Individualized solutions', 'Supply chain streamlining', 'Exceptional service', 'Full truckload support']
    },
    telecommunications: {
      id: 'telecommunications',
      title: 'Telecommunications',
      description: 'Whether cellular towers, industrial receivers, generators, or network equipment, our dedicated teams secure delivery on time, every time. Our innovative TMS provides customers a unified and seamless experience with impressive dispatch and tracking.',
      highlights: ['Cellular towers', 'Industrial receivers', 'Generators', 'Network equipment']
    },
    'paper-packaging': {
      id: 'paper-packaging',
      title: 'Paper Packaging Industries',
      description: 'Utilizing our cutting-edge technology and paper and packaging prowess, we can help you identify optimal shipping methods and optimize your supply chain. From drop trailers to intermodal, we provide specialized shipping services.',
      highlights: ['Modal conversion', 'On-time delivery performance', 'Complete visibility', 'Specialized shipping']
    }
  },
  about: {
    title: 'About Capital Bridge',
    description: 'Capital Bridge is a privately held, non-asset-based logistics brokerage provider that introduces proprietary technology to small and medium shippers, aiding them in managing their transportation spend more efficiently. We have cross the value of 1000 shipments as of Aug 2022. We are fairly new company but things are moving so fast to be the best of the best in the freight industries.'
  },
  team: [
    {
      id: 'abhishek-thalwal',
      name: 'Abhishek Thalwal',
      role: 'Founder & CEO',
      phone: '(847) 874-6411',
      extension: '101',
      email: 'thalwal@capitalbridgelogistics.com'
    },
    {
      id: 'denver-jones',
      name: 'Denver Jones',
      role: 'Operations Manager',
      phone: '(213) 805-7550',
      extension: '108',
      email: 'Denver@capitalbridgelogistics.com'
    },
    {
      id: 'diya-gurung',
      name: 'Diya Gurung',
      role: 'Account Manager',
      phone: '(773) 666-4944',
      extension: '104',
      email: 'Diya@capitalbridgelogistics.com'
    },
    {
      id: 'aakansha-j',
      name: 'Aakansha J',
      role: 'Account Manager',
      phone: '(312) 264-9982',
      extension: '103',
      email: 'aakansha@capitalbridgelogistics.com'
    }
  ]
};
