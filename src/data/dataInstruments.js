const dataInstruments = [

    {
      id: 1,
      name: "BOSTON GP-163 Gloss Black 163 CM Grand Piano",
      nameRu: "Рояль BOSTON GP-163 Gloss Black 163 CM",
      category: "PIANOS",
      categoryRu: "ПИАНИНО",
      price: "9845.00",
      image: "https://images.unsplash.com/photo-1576487236230-eaa4afe9b453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBpYW5vfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
  
    {
      id: 2,
      name: "YAMAHA K-125 Gloss Black 125 CM Wall Piano",
      nameRu: "Пианино YAMAHA K-125 Gloss Black, 125 см",
      category: "PIANOS",
      categoryRu: "ПИАНИНО",
      price: "3229.99",
      image: "https://images.unsplash.com/photo-1615884241095-305d10e66980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHBpYW5vfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=800&q=60"
    },

    {
      id: 3,
      name: "MARTINEZ ETUDE C / Classical Guitar",
      nameRu: "MARTINEZ ETUDE C / Классическая гитара",
      category: "GUITARS",
      categoryRu: "ГИТАРЫ",
      price: "745.99",
      image: "https://images.pexels.com/photos/4500706/pexels-photo-4500706.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
    },
  
    {
      id: 4,
      name: "KOZMOS KST-62SSS-GRWN-3TS Electric Guitar",
      nameRu: "Электрогитара KOZMOS KST-62SSS-GRWN-3TS",
      category: "GUITARS",
      categoryRu: "ГИТАРЫ",
      price: "649.99",
      image: "https://images.pexels.com/photos/92069/pexels-photo-92069.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
  
    {
      id: 5,
      name: "TAMA SG50H6C-BK - Stagestar Black 5-Piece (20B/10T/12T/14F/14S) Acoustic Drum Set with Accessories & Cymbals",
      nameRu: "TAMA SG50H6C-BK — Набор акустических барабанов Stagestar Black из 5 предметов (20B/10T/12T/14F/14S) с аксессуарами и тарелками",
      category: "DRUMS AND PERCUSSION",
      categoryRu: "БАРАБАНЫ И УДАРНЫЕ",
      price: "1499.99",
      image: "https://images.unsplash.com/photo-1620726990396-e0e479cf4f04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJ1bXN8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
  
    {
      id: 6,
      name: "PEARL RS505C/C91 - Roadshow Red Wine 5-Piece (20B/10T/12T/14F/14S) Acoustic Drum Set with Accessories & Bells",
      nameRu: "PEARL RS505C/C91 - Набор акустических барабанов Roadshow Red Wine из 5 предметов (20B/10T/12T/14F/14S) с аксессуарами и колокольчиками",
      category: "DRUMS AND PERCUSSION",
      categoryRu: "БАРАБАНЫ И УДАРНЫЕ",
      price: "1875.99",
      image: "https://images.unsplash.com/photo-1580998506955-5738873b193e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGRydW1zfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=800&q=60"
    },
  
    {
      id: 7,
      name: "Casio CDP-S350BK SET Dijital Piyano  (CPDS-46 Stand)",
      nameRu: "Casio CDP-S350BK SET Цифровое фортепиано (подставка CPDS-46)",
      category: "KEYBOARDS",
      categoryRu: "СИНТЕЗАТОРЫ",
      price: "499.99",
      image: "https://images.unsplash.com/photo-1665039982256-b8a6fee37222?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc3fHxtdXNpYyUyMGtleWJvYXJkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
  
    {
      id: 8,
      name: "CASIO CT-X700C2 61 Keys Piano Style Precision Standard Organ (Adapter Included)",
      nameRu: "CASIO CT-X700C2 Прецизионный стандартный синтезатор с 61 клавишей (адаптер в комплекте)",
      category: "KEYBOARDS",
      categoryRu: "СИНТЕЗАТОРЫ",
      price: "349.99",
      image: "https://images.unsplash.com/photo-1617136902055-666c43add827?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG11c2ljYWwlMjBpbnN0cnVtZW50fGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=800&q=60"
    },
  
    {
      id: 9,
      name: "Pioneer DJ Controller",
      nameRu: "DJ-контроллер Pioneer",
      category: "STUDIO / DJ",
      categoryRu: "СТУДИИ / ПУЛЬТЫ",
      price: "1878.00",
      image: "https://images.unsplash.com/photo-1651065699236-6a6885503943?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGp8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
  
    {
      id: 10,
      name: "Roland DJ Controller",
      nameRu: "DJ-контроллер Roland",
      category: "STUDIO / DJ",
      categoryRu: "СТУДИИ / ПУЛЬТЫ",
      price: "2549.99",
      image: "https://images.unsplash.com/photo-1619386113777-f92dd987bfb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGRqfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=800&q=60"
    },
  
    {
      id: 11,
      name: "5 Pin Adapter Coupler Cable",
      nameRu: "5-контактный соединительный кабель-адаптер",
      category: "EFFECTS",
      categoryRu: "ЭФФЕКТЫ",
      price: "349.99",
      image: "https://images.pexels.com/photos/12314005/pexels-photo-12314005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
  

    {
      id: 12,
      name: "Guitar Effects Processor",
      nameRu: "Гитарный процессор эффектов",
      category: "EFFECTS",
      categoryRu: "ЭФФЕКТЫ",
      price: "999.99",
      image: "https://images.pexels.com/photos/12320169/pexels-photo-12320169.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 13,
      name: "FENDER Acoustasonic 30 DST Acoustic Instrument Amplifier",
      nameRu: "FENDER Acoustasonic 30 DST Усилитель акустических инструментов",
      category: "AMPLFIERS",
      categoryRu: "УСИЛИТЕЛИ",
      price: "849.99",
      image: "https://images.unsplash.com/photo-1606598102483-238adb6da9bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YW1wbGlmaWVyfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=800&q=60"
    },
  
    {
      id: 14,
      name: "ROLAND AC-50-TW Acoustic Chorus Guitar Amplifier",
      nameRu: "ROLAND AC-50-TW Усилитель хоровой для акустической гитары",
      category: "AMPLFIERS",
      categoryRu: "УСИЛИТЕЛИ",
      price: "349.99",
      image: "https://images.unsplash.com/photo-1625803056683-4dc2a3e92258?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGFtcGxpZmllcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=800&q=60"
    },
  
    {
      id: 15,
      name: "Stentor 1108/C Student II Cello (3/4)",
      nameRu: "Stentor 1108/C Студенческая Виолончель II (3/4)",
      category: "STRINGS",
      categoryRu: "СТРУННЫЕ",
      price: "749.99",
      image: "https://images.unsplash.com/photo-1582137580427-be755c6302cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNlbGxvfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=800&q=60"
    },
  
    {
      id: 16,
      name: "Strunal 205WA Violin (4/4)",
      nameRu: "Strunal 205WA Скрипка (4/4)",
      category: "STRINGS",
      categoryRu: "СТРУННЫЕ",
      price: "949.99",
      image: "https://images.unsplash.com/photo-1629155755517-f63062249c1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHZpb2xpbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=800&q=60"
    },
  
    {
      id: 17,
      name: "SILVER SAS-1000 / Alto Saksafon",
      nameRu: "SILVER SAS-1000 / Альт Саксафон",
      category: "BREATHINGS",
      categoryRu: "ДУХОВЫЕ",
      price: "969.99",
      image: "https://images.unsplash.com/photo-1598367772323-3ae346826817?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2F4b3Bob25lfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=800&q=60"
    },
  
    {
      id: 18,
      name: "Yamaha YFL 312 Silver Flute",
      nameRu: "Yamaha YFL 312 Silver Флейта",
      category: "BREATHINGS",
      categoryRu: "ДУХОВЫЕ",
      price: "1549.99",
      image: "https://images.pexels.com/photos/8929317/pexels-photo-8929317.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
  
    {
      id: 19,
      name: "BEHRINGER X32 Dijital Mixer",
      nameRu: "Цифровой микшер BEHRINGER X32",
      category: "DUBBING",
      categoryRu: "ДУБЛЯЖ",
      price: "3449.99",
      image: "https://images.unsplash.com/photo-1662479696438-a68f7c945fe8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGR1YmJpbmclMjBtaXhlcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=800&q=60"
    },
  
    {
      id: 20,
      name: "SOUNDCRAFT Signature 22 - EU Mixing System",
      nameRu: "SOUNDCRAFT Signature 22 — микшерная система ЕС",
      category: "DUBBING",
      categoryRu: "ДУБЛЯЖ",
      price: "2349.99",
      image: "https://images.unsplash.com/photo-1610728088562-0beb6997be6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
    },
  
    {
      id: 21,
      name: "Monitor Audio Bronze 100 (6G) Black Rackmount Speaker",
      nameRu: "Monitor Audio Bronze 100 (6G) Черный динамик для монтажа в стойку",
      category: "HI-FI",
      categoryRu: "КОЛОНКИ",
      price: "879.99",
      image: "https://images.unsplash.com/photo-1631972234521-24e9d4fbb841?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNwZWFrZXJ8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
  
    {
      id: 22,
      name: "Monitor Audio Silver 300 ( 7G ) Black Oak Tower Hi-Fi Speaker",
      nameRu: "Высококачественная акустическая система Monitor Audio Silver 300 (7G) Black Oak Tower",
      category: "HI-FI",
      categoryRu: "КОЛОНКИ",
      price: "2899.99",
      image: "https://images.unsplash.com/photo-1595432541891-a461100d3054?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNwZWFrZXJ8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
  
    {
      id: 23,
      name: "Flute lesson",
      nameRu: "Урок игры на флейте",
      category: "LESSONS",
      categoryRu: "УРОКИ",
      price: "75.00",
      image: "https://images.pexels.com/photos/8192108/pexels-photo-8192108.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
  
    {
      id: 24,
      name: "Piano lesson",
      nameRu: "Урок игры на фортепиано",
      category: "LESSONS",
      categoryRu: "УРОКИ",
      price: "75.00",
      image: "https://images.pexels.com/photos/7521354/pexels-photo-7521354.jpeg?auto=compress&cs=tinysrgb&w=800"
    }

    ]

    export default dataInstruments;
