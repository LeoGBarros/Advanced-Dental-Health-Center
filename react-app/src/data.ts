export const clinicData = {
  clinicaNome: 'Advanced Dental Health Center',
  enderecoCompleto: '2405 Crestmoor Rd, Nashville, TN 37215',
  enderecoCidade: 'Nashville, TN',
  telefoneE164: '+16292630639',
  telefoneDisplay: '(629) 263-0639',
  emailClinica: 'info@advanceddental.com',
  googleMapsUrl: 'https://www.google.com/maps/place/Advanced+Dental+Health+Center/@36.110168,-86.818599,16z/data=!4m15!1m8!3m7!1s0x88646474f3e12f93:0xf83d884976dcedf6!2s2405+Crestmoor+Rd,+Nashville,+TN+37215!3b1!8m2!3d36.110168!4d-86.818599!16s%2Fg%2F11b8vcffvy!3m5!1s0x88646474f164d9b3:0x683609443bdd411c!8m2!3d36.110121!4d-86.818543!16s%2Fg%2F1tkmn8xs?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D',
  googleMapsEmbedUrl: 'https://www.google.com/maps?q=2405+Crestmoor+Rd,+Nashville,+TN+37215&output=embed',
  facebookUrl: 'https://www.facebook.com/AdvanceddentalhealthCenter',
  instagramUrl: 'https://www.instagram.com/advanceddentalhealthcenter',
  areasServidas: ['Green Hills', 'East Nashville', 'Downtown'],
  trustIndicators: { rating: '4.8', pacientes: '1,000+' },
  totalPacientes: 'Over 10,000 patients treated',
  ofertaEspecial: {
    titulo: 'New Patient Special',
    itens: 'Exam + X-Rays + Cleaning',
    preco: '$99',
  },
  horarios: [
    { dia: 'Mon', horario: '8:00 AM - 5:00 PM' },
    { dia: 'Tues', horario: '7:00 AM - 4:00 PM' },
    { dia: 'Wed', horario: '7:00 AM - 5:00 PM' },
    { dia: 'Thurs', horario: '7:00 AM - 4:00 PM' },
    { dia: 'Fri', horario: 'Closed' },
    { dia: 'Sat', horario: 'Closed' },
    { dia: 'Sun', horario: 'Closed' },
  ],
  servicos: [
    {
      titulo: 'Emergency Dentistry',
      descricao: 'Toothache, broken tooth, or dental trauma? Get same-day relief. We prioritize emergencies so you don\'t have to suffer.',
      icon: 'emergency',
    },
    {
      titulo: 'Dental Implants',
      descricao: 'Permanent tooth replacement that looks and feels natural. Restore your smile and confidence with lasting results.',
      icon: 'implant',
    },
    {
      titulo: 'Teeth Whitening',
      descricao: 'Professional in-office whitening for a brighter smile. Safe, fast, and noticeably whiter teeth in a single visit.',
      icon: 'whitening',
    },
  ],
  doutores: [
    {
      nome: 'Lana Bubalo, DDS',
      anosExperiencia: '15+ years experience',
      credenciais: 'ADA Member • Cosmetic Dentistry • Implant Certified',
      imagem: '/assets/images/lana-bubalo.png',
    },
    {
      nome: 'Clayton C Cummings, DDS',
      anosExperiencia: '20+ years experience',
      credenciais: 'ADA Member • Tennessee Dental Association • Top Dentist, Nashville Lifestyles',
      imagem: '/assets/images/clayton-cummings.png',
    },
  ],
  doutoresDetalhados: [
    {
      nome: 'Lana Bubalo',
      credencial: 'DDS',
      imagem: '/assets/images/lana-bubalo.png',
      citacao: 'My mission is to provide high-quality, comprehensive dental care that stands the test of time. I love connecting with patients, forming relationships, and ensuring they feel comfortable in the dental chair and confident in their smiles.',
      experiencia: 'Dr. Bubalo has a passion for learning and participating in continuing education courses to stay on top of the latest research and treatment guidelines. She completed her implant placement certification with the California Implant Institute in San Diego and was trained in moderate oral conscious sedation through DOCS education. Dr. Bubalo is an active member of the American Dental Academy, the American Academy of Cosmetic Dentistry, and the Academy of General Dentistry.',
      educacao: [
        { titulo: 'Doctor of Dental Surgery', instituicao: 'University of Southern California', local: 'Los Angeles, California' },
        { titulo: 'Undergraduate Studies', instituicao: 'University of California at Santa Barbara', local: 'Santa Barbara, California' },
      ],
      secaoExtra: {
        titulo: 'Outside the Office',
        conteudo: 'In her free time, Dr. Bubalo loves to be active and enjoys biking, walking, and tennis with her husband, Mark. They love exploring the restaurant scene as well as entertaining at home with a good game night.',
      },
    },
    {
      nome: 'Clayton C Cummings',
      credencial: 'DDS',
      imagem: '/assets/images/clayton-cummings.png',
      experiencia: 'Through Advanced Dental Health Center, Dr. Cummings has created an anxiety-free environment for his patients. His advanced skill set, commitment to continuing education, and advanced training assures each patient is in good hands. Dr. Cummings has continued to learn through his involvement in the Nashville dental community. He was awarded the Certificate of Recognition from the Tennessee Dental Association for the most Continuing Education. He was chosen as Top Dentist by Nashville Lifestyles magazine and featured on local TV shows such as "More At Mid-Day," "Talk of the Town," and "Fox News" segment. Dr. Cummings is an active member of the American Dental Association, the Tennessee Dental Association, the Nashville Dental Society, and the Volunteer Study Club.',
      educacao: [
        { titulo: 'Doctor of Dental Surgery', instituicao: 'The University of Tennessee Health Science Center: College of Dentistry', local: 'Memphis, Tennessee' },
        { titulo: 'Undergraduate Studies', instituicao: 'Louisiana Tech University', local: 'Ruston, Louisiana' },
      ],
      secaoExtra: {
        titulo: 'Background',
        conteudo: 'Dr. Cummings was born in Baton Rouge, Louisiana, and spent most of his childhood in Arkansas and Louisiana. He is married to Lisa and has two grown daughters, Lauren and Lindsey. Like his all-time favorite TV character, Andy Griffith, Dr. Cummings is the "real deal." What you see is what you get: "A down-to-earth, honest, and smart guy who cares most about the care of his patients!"',
      },
    },
  ],
  depoimentos: [
    {
      texto: 'Had an emergency on a Thursday night. They got me in the next morning. Dr. Bubalo fixed my crown and I was out in 30 minutes. So grateful for the same-day care.',
      autor: 'Michael R.',
      estrelas: 5,
      tempoRelativo: '2 weeks ago',
    },
    {
      texto: 'Best dentist I\'ve been to in Nashville. The staff is friendly, the office is clean, and they actually take the time to explain everything. My whole family goes here now.',
      autor: 'Sarah T.',
      estrelas: 5,
      tempoRelativo: '1 month ago',
    },
    {
      texto: 'Got my implant done here. The process was smooth and I never felt rushed. They accepted my insurance which made it much more affordable. Highly recommend.',
      autor: 'James L.',
      estrelas: 5,
      tempoRelativo: '2 months ago',
    },
  ],
  faq: [
    {
      pergunta: 'Do you accept my insurance?',
      resposta: "We accept most major dental insurance plans. Please call our office with your insurance information and we'll verify your coverage before your appointment.",
    },
    {
      pergunta: 'How soon can I get an appointment?',
      resposta: 'We offer same-day appointments for new and existing patients when available. For routine care, we typically have openings within a few days. Call us to check availability.',
    },
    {
      pergunta: 'What if I have a dental emergency?',
      resposta: "We prioritize dental emergencies. Call us as soon as possible and we'll work to get you in the same day. For severe trauma or life-threatening situations, please go to the nearest emergency room or call 911.",
    },
  ],
  formSubmitEmail: 'leoguedesbarros@gmail.com',
}
