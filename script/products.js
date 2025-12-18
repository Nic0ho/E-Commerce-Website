const products = [
    {
        id: 101101,
        title: "Intel Core i3-12100F",
        price: 4300,
        image: "img/components/cpu/intel_i3.jpg",
        category: "cpu",
        specs: { socket: "LGA1700", cores: 4, frequency: "3.3-4.3 GHz", tdp: 58, brand: "Intel" }
    },
    {
        id: 101201,
        title: "AMD Ryzen 5 5600",
        price: 5400,
        image: "img/components/cpu/ryzen_5.png",
        category: "cpu",
        specs: { socket: "AM4", cores: 6, frequency: "3.5-4.4 GHz", tdp: 65, brand: "AMD" }
    },
    {
        id: 101301,
        title: "AMD Ryzen 7 7800X3D",
        price: 18000,
        image: "img/components/cpu/ryzen_7.png",
        category: "cpu",
        specs: { socket: "AM5", cores: 8, frequency: "4.2-5.0 GHz", tdp: 120, brand: "AMD" }
    },
    {
        id: 101105,
        title: "Intel Core i9-13900K",
        price: 25000,
        image: "img/components/cpu/intel_i9.jpg",
        category: "cpu",
        specs: { socket: "LGA1700", cores: 24, frequency: "3.0-5.8 GHz", tdp: 253, brand: "Intel" }
    },



    {
        id: 102101,
        title: "ASUS Prime H610M-K D4",
        price: 3200,
        image: "img/components/motherboard/ASUS Prime H610M-K D4.png",
        category: "motherboard",
        specs: { socket: "LGA1700", ramType: "DDR4", formFactor: "mATX", m2slots: 1 }
    },
    {
        id: 102201,
        title: "Gigabyte B550 Gaming X V2",
        price: 4600,
        image: "img/components/motherboard/Gigabyte B550 Gaming X V2.png",
        category: "motherboard",
        specs: { socket: "AM4", ramType: "DDR4", formFactor: "ATX", m2slots: 2 }
    },
    {
        id: 102301,
        title: "MSI MPG B650I Edge WiFi",
        price: 10500,
        image: "img/components/motherboard/MSI MPG B650I Edge WiFi.png",
        category: "motherboard",
        specs: { socket: "AM5", ramType: "DDR5", formFactor: "ITX", m2slots: 2 }
    },
    {
        id: 102105,
        title: "ASUS ROG Maximus Z790 Hero",
        price: 28000,
        image: "img/components/motherboard/ASUS ROG Maximus Z790 Hero.png",
        category: "motherboard",
        specs: { socket: "LGA1700", ramType: "DDR5", formFactor: "ATX", m2slots: 3 }
    },



    {
        id: 103401,
        title: "Kingston Fury Beast DDR4",
        price: 1600,
        image: "img/components/ram/Kingston Fury Beast DDR4 16GB (2x8).png",
        category: "ram",
        specs: { type: "DDR4", capacity: "16 GB", frequency: "3200 MHz" }
    },
    {
        id: 103501,
        title: "G.Skill Trident Z5 DDR5 32GB",
        price: 5800,
        image: "img/components/ram/G.Skill Trident Z5 DDR5 32GB (2x16).png",
        category: "ram",
        specs: { type: "DDR5", capacity: "32 GB", frequency: "6000 MHz" }
    },

    

    {
        id: 104001,
        title: "Palit GeForce RTX 3050 Dual",
        price: 9500,
        image: "img/components/gpu/Palit GeForce RTX 3050 Dual.png",
        category: "gpu",
        specs: { chip: "NVIDIA", memory: "8 GB", length: 245, recommendedPSU: 550 }
    },
    {
        id: 104002,
        title: "Gigabyte GeForce RTX 4090",
        price: 85000,
        image: "img/components/gpu/Gigabyte GeForce RTX 4090 Gaming OC.png",
        category: "gpu",
        specs: { chip: "NVIDIA", memory: "24 GB", length: 340, recommendedPSU: 1000 }
    },
    {
        id: 104003,
        title: "ASUS Dual Radeon RX 7600",
        price: 13000,
        image: "img/components/gpu/ASUS Dual Radeon RX 7600.png",
        category: "gpu",
        specs: { chip: "AMD", memory: "8 GB", length: 245, recommendedPSU: 550 }
    },

    

    {
        id: 105001,
        title: "Kingston A400 480GB",
        price: 1400,
        image: "img/components/storage/Kingston A400 480GB.png",
        category: "storage",
        specs: { type: "SSD", interface: "SATA", capacity: "480 GB", formFactor: "2.5\"" }
    },
    {
        id: 105002,
        title: "Samsung 980 Pro 1TB",
        price: 4200,
        image: "img/components/storage/Samsung 980 Pro 1TB.png",
        category: "storage",
        specs: { type: "SSD", interface: "M.2 NVMe", capacity: "1 TB", formFactor: "M.2 2280" }
    },
    {
        id: 105003,
        title: "WD Blue 2TB HDD",
        price: 2500,
        image: "img/components/storage/WD Blue 2TB HDD.png",
        category: "storage",
        specs: { type: "HDD", interface: "SATA", capacity: "2 TB", formFactor: "3.5\"" }
    },

   

    {
        id: 106001,
        title: "DeepCool PF500 500W",
        price: 1800,
        image: "img/components/psu/DeepCool PF500 500W.png",
        category: "psu",
        specs: { power: "500 W", certificate: "80+ Standard", modular: "Ні" }
    },
    {
        id: 106002,
        title: "Be Quiet! Pure Power 12 M",
        price: 6500,
        image: "img/components/psu/Be Quiet! Pure Power 12 M 850W.png",
        category: "psu",
        specs: { power: "850 W", certificate: "80+ Gold", modular: "Так" }
    },

    
    
    {
        id: 107001,
        title: "DeepCool AK400",
        price: 1500,
        image: "img/components/cooling/DeepCool AK400.png",
        category: "cooling",
        specs: { type: "Повітряне", height: 155, tdp: "220W", support: "Universal" }
    },
    {
        id: 107002,
        title: "Be Quiet! Dark Rock Pro 4",
        price: 4500,
        image: "img/components/cooling/Be Quiet! Dark Rock Pro 4.png",
        category: "cooling",
        specs: { type: "Повітряне", height: 163, tdp: "250W", support: "Universal" }
    },
    {
        id: 107003,
        title: "NZXT Kraken Elite 360 RGB",
        price: 12000,
        image: "img/components/cooling/NZXT Kraken Elite 360 RGB.png",
        category: "cooling",
        specs: { type: "Водяне", radiator: 360, height: 55, support: "Universal" }
    },

    
    
    {
        id: 108001,
        title: "Vinga CS213B (Office Tiny)",
        price: 1100,
        image: "img/components/case/Vinga CS213B (Office Tiny).png",
        category: "case",
        specs: { 
            formFactor: "Mini-Tower", 
            maxMbSize: "mATX", 
            maxGpuLength: 280, 
            maxCoolerHeight: 150, /* Увага! Сюди не влізе Be Quiet! DRP4 (163mm) */
            psuPosition: "Top" 
        }
    },
    {
        id: 108002,
        title: "DeepCool Matrexx 55 Mesh",
        price: 2800,
        image: "img/components/case/DeepCool Matrexx 55 Mesh.png",
        category: "case",
        specs: { 
            formFactor: "Mid-Tower", 
            maxMbSize: "ATX", 
            maxGpuLength: 370, 
            maxCoolerHeight: 168, 
            radiatorSupport: "360mm" 
        }
    },
    {
        id: 108003,
        title: "Lian Li A4-H20 (Ultra ITX)",
        price: 7000,
        image: "img/components/case/Lian Li A4-H20 (Ultra ITX).png",
        category: "case",
        specs: { 
            formFactor: "SFF", 
            maxMbSize: "ITX", 
            maxGpuLength: 322, 
            maxCoolerHeight: 55, /* Тільки вода або низькопрофільні! */
            radiatorSupport: "240mm" 
        }
    },

    
    
    {
        id: 201001,
        title: "Logitech G102 Lightsync",
        price: 1100,
        image: "img/components/periphery/Logitech G102 Lightsync.png",
        category: "mouse",
        specs: { type: "Миша", connection: "USB", sensor: "Optical", dpi: "8000" }
    },
    {
        id: 201002,
        title: "Razer DeathAdder Essential",
        price: 999,
        image: "img/components/periphery/Razer DeathAdder Essential.png",
        category: "mouse",
        specs: { type: "Миша", connection: "USB", sensor: "Optical", dpi: "6400" }
    },
    {
        id: 201003,
        title: "Logitech MX Master 3S",
        price: 4500,
        image: "img/components/periphery/Logitech MX Master 3S.png",
        category: "mouse",
        specs: { type: "Миша", connection: "Wireless", sensor: "Laser", dpi: "8000" }
    },
    {
        id: 201004,
        title: "Logitech G Pro X Superlight",
        price: 5600,
        image: "img/components/periphery/Logitech G Pro X Superlight.png",
        category: "mouse",
        specs: { type: "Миша", connection: "Wireless", sensor: "HERO 25K", dpi: "25600" }
    },

    
    
    {
        id: 202001,
        title: "HyperX Alloy Origins Core",
        price: 3900,
        image: "img/components/periphery/HyperX Alloy Origins Core.png",
        category: "keyboard",
        specs: { type: "Клавіатура", switch: "HyperX Red", format: "TKL (80%)", connection: "USB" }
    },
    {
        id: 202002,
        title: "Keychron K2 Pro Wireless",
        price: 4800,
        image: "img/components/periphery/Keychron K2 Pro Wireless.png",
        category: "keyboard",
        specs: { type: "Клавіатура", switch: "Gateron Brown", format: "75%", connection: "BT/USB" }
    },
    {
        id: 202004,
        title: "Razer Huntsman Mini",
        price: 4200,
        image: "img/components/periphery/Razer Huntsman Mini.png",
        category: "keyboard",
        specs: { type: "Клавіатура", switch: "Opto-Mechanical", format: "60%", connection: "USB" }
    },

    
    
    {
        id: 203001,
        title: "Samsung Odyssey G5 27\"",
        price: 11500,
        image: "img/components/monitors/Samsung Odyssey G5 27.png",
        category: "monitor",
        specs: { type: "Монітор", resolution: "2K QHD", refresh: "144 Hz", matrix: "VA" }
    },
    {
        id: 203002,
        title: "LG UltraGear 24GN60R-B",
        price: 6500,
        image: "img/components/monitors/LG UltraGear 24GN60R-B.png",
        category: "monitor",
        specs: { type: "Монітор", resolution: "Full HD", refresh: "144 Hz", matrix: "IPS" }
    },
    {
        id: 203003,
        title: "Dell UltraSharp U2722D",
        price: 16000,
        image: "img/components/monitors/Dell UltraSharp U2722D.png",
        category: "monitor",
        specs: { type: "Монітор", resolution: "2K QHD", refresh: "60 Hz", matrix: "IPS (Pro)" }
    },
    {
        id: 203004,
        title: "ASUS TUF Gaming VG27AQ",
        price: 12500,
        image: "img/components/monitors/ASUS TUF Gaming VG27AQ.png",
        category: "monitor",
        specs: { type: "Монітор", resolution: "2K QHD", refresh: "165 Hz", matrix: "IPS" }
    },

    
    
    {
        id: 204001,
        title: "HyperX Cloud Alpha",
        price: 3500,
        image: "img/components/periphery/HyperX Cloud Alpha.png",
        category: "audio",
        specs: { type: "Гарнітура", connection: "3.5mm", mic: "Знімний", sound: "Stereo" }
    },
    {
        id: 204002,
        title: "Logitech G733 Lightspeed",
        price: 5200,
        image: "img/components/periphery/Logitech G733 Lightspeed.png",
        category: "audio",
        specs: { type: "Гарнітура", connection: "Wireless", mic: "Вбудований", sound: "7.1 Surround" }
    },
    {
        id: 204003,
        title: "SteelSeries Arctis Nova 1",
        price: 2400,
        image: "img/components/periphery/SteelSeries Arctis Nova 1.png",
        category: "audio",
        specs: { type: "Гарнітура", connection: "3.5mm", mic: "Висувний", sound: "Stereo" }
    }
];