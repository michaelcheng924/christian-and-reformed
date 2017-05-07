// https://maps.googleapis.com/maps/api/geocode/json?address=11920+Stidham+Rd,+Conroe,+TX+77302&key=AIzaSyBpJ82xY4YxuWoXC04gGWx3lCl8hp7ZTZ4

const CHURCHES = [  
    {  
        coordinates: {
            lat: -27.618062,
            lng: 152.62575
        },
        details: {  
            name: "Berean Bible Church",
            address: "87 Thagoona-Haigslea Road Thagoona Qld 4306 ",
            region: "AUS",
            website: "http://www.bbcq.org"

      }
    },
    {  
        coordinates: {
            lat: -27.377788,
            lng: 153.071894
        },
        details: {  
            name: "Banyo Baptist Church",
            address: "Musgrave Road & Hartley Street Banyo, Qld. 4014",
            region: "AUS",
            website: "http://www.banyobaptistchurch.org/"
        }
    },
    {  
        coordinates: {
            lat: -27.461192,
            lng: 153.000042
        },
        details: {  
            name: "Rosalie Baptist Church",
            address: "24 Ellena Street, Rosalie, Brisbane, Queensland 4064",
            region: "AUS",
            website: "http://www.rbcq.org.au/"
        }
    },
    {  
        coordinates: {
            lat: -27.386422,
            lng: 152.942586
        },
        details: {  
            name: "Samford Baptist Church",
            address: "8 Woodrose Court Ferny Hills Qld 4055",
            region: "AUS",
            website: "http://www.sbfq.org/"
        }
    },
    {  
        coordinates: {
            lat: -33.890793,
            lng: 151.162491
        },
        details: {  
            name: "Stanmore Baptist Church",
            address: "140 Albany Rd Stanmore 2048 NSW",
            region: "AUS",
            website: "http://www.stanmorebaptist.org.au/"
        }
    },
    {  
        coordinates: {
            lat: -22.537571,
            lng: -44.066932
        },
        details: {  
            name: "Igreia Batista de fe Reformada",
            address: "Rua \"Seis\", 102, Residencial Samoa, Jardim Belvedere CEP 27258-120, Volta Redonda, RJ, Brazil",
            region: "BRA",
            website: "http://www.ibfereformada.org/"
        }
    },
    {  
        coordinates: {
            lat: 11.239804,
            lng: 105.025129
        },
        details: {  
            name: "The Church of Mercy",
            address: "Street 21 Prek Talay, Prek Ambel, Saang, Kandal, Cambodia",
            region: "KHM",
            website: "http://www.thechurchofmercy.org/"
        }
    },
    {  
        coordinates: {
            lat: 46.8568,
            lng: -71.247526
        },
        details: {  
            name: "Association d\"Églises Baptistes Évangéliques au Québec",
            address: "6225 9e Avenue Est Québec  Qc  G1H 4A9",
            region: "CAN",
            website: "http://aerbq.com/"
        }
    },
    {  
        coordinates: {
            lat: 44.240664,
            lng: -76.521163
        },
        details: {  
            name: "Bath Road Baptist Church",
            address: "193 Bath Road Kingston, Ontario, K7M 2X6",
            region: "CAN",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 43.715494,
            lng: -79.403208
        },
        details: {  
            name: "Covenant Baptist Church",
            address: "35 Lytton Blvd. Toronto, Ontario, M4R 1L2",
            region: "CAN",
            website: "http://www.covenantbaptistchurch.com/"
        }
    },
    {  
        coordinates: {
            lat: 44.610891,
            lng: -79.417477
        },
        details: {  
            name: "Covenant Reformed Baptist Church of Orillia",
            address: "64 Coldwater Street East Orillia, Ontario",
            region: "CAN",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 42.121411,
            lng: -82.713901
        },
        details: {  
            name: "Cottam Baptist Church",
            address: "161 Talbot Street, Cottam, Ontario, Canada, N0R1B0",
            region: "CAN",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 43.762519,
            lng: -79.2112
        },
        details: {  
            name: "Faith Reformed Baptist Church",
            address: "3837 Lawrence Avenue East Scarborough, Ontario, Canada MIG 1R2 ",
            region: "CAN",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 52.107625,
            lng: -106.647814
        },
        details: {  
            name: "Fellowship Baptist Church",
            address: "905 Taylor St. E., Saskatoon, Saskatchewan S7H 1W3",
            region: "CAN",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 44.571192,
            lng: -79.44807
        },
        details: {  
            name: "Grace Fellowship Orillia",
            address: "165 Oro Line 15 N, RR#1, Orillia, ON L3V 6H1 ",
            region: "CAN",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 49.174303,
            lng: -121.963462
        },
        details: {  
            name: "Free Grace Baptist Church of Chilliwack",
            address: "45592 Wellington Avenue Chilliwack, B.C. V2P 2E6 ",
            region: "CAN",
            website: "http://www.freegrace.ca/"
        }
    },
    {  
        coordinates: {
            lat: 48.375796,
            lng: -89.262522
        },
        details: {  
            name: "Fort William Baptist Church",
            address: "1800 East Moodie St,Thunder Bay, ON Canada P7E 4Z2",
            region: "CAN",
            website: "http://www.fortwilliambaptistchurch.com/"
        }
    },
    {  
        coordinates: {
            lat: 46.340464,
            lng: -67.684412
        },
        details: {  
            name: "Grace Baptist Church",
            address: "2202 Rt 560, Lakeville, New Brunswick E7K 1W8",
            region: "CAN",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 45.277215,
            lng: -75.75176
        },
        details: {  
            name: "Grace Baptist Church Ottawa",
            address: "68 Alberni Street, Ottawa, ON K2J 2M6",
            region: "CAN",
            website: "http://www.gracebaptistottawa.com/"
        }
    },
    {  
        coordinates: {
            lat: 42.17642,
            lng: -82.824507
        },
        details: {  
            name: "Grace Baptist Church of Essex",
            address: "120 Talbot North, Essex, Ontario",
            region: "CAN",
            website: "http://www.gbce.org/"
        }
    },
    {  
        coordinates: {
            lat: 49.69349,
            lng: -112.84184
        },
        details: {  
            name: "Grace Community Church",
            address: "Lethbridge, AB, Canada",
            region: "CAN",
            website: "http://www.lethbridgebaptist.com/"
        }
    },
    {  
        coordinates: {
            lat: 43.653226,
            lng: -79.383184
        },
        details: {  
            name: "Grace Fellowship Church (Toronto)",
            address: "Toronto, ON",
            region: "CAN",
            website: "http://www.gfcto.com/"
        }
    },
    {  
        coordinates: {
            lat: 53.492951,
            lng: -113.578762
        },
        details: {  
            name: "Grace Reformed Baptist Church",
            address: "Edmonton, AB  T6H 5G9",
            region: "CAN",
            website: "http://gracereformed.ca/"
        }
    },
    {  
        coordinates: {
            lat: 43.500482,
            lng: -80.201295
        },
        details: {  
            name: "Grace Trinity Community Church",
            address: "47 Keys Crescent, Guelph, ON N1G 5J7",
            region: "CAN",
            website: "http://www.gracetrinitycc.org/"
        }
    },
    {  
        coordinates: {
            lat: 45.410325,
            lng: -75.686685
        },
        details: {  
            name: "Metcalfe Street Church",
            address: "480 Metcalfe St Ottawa, Ontario",
            region: "CAN",
            website: "http://www.metcalfestreetchurch.org/"
        }
    },
    {  
        coordinates: {
            lat: 44.595811,
            lng: -79.402102
        },
        details: {  
            name: "Orillia Baptist Church",
            address: "505 Gill St. Orillia, Ontario",
            region: "CAN",
            website: "http://www.orilliabaptistchurch.org/"
        }
    },
    {  
        coordinates: {
            lat: 45.392834,
            lng: -75.752492
        },
        details: {  
            name: "Parkdale Baptist Church - Westboro Campus",
            address: "307 Richmond Road, Ottawa, Ontario, Canada K1Z 6X3",
            region: "CAN",
            website: "http://www.parkdalebaptistchurch.ca/Westboro%20Campus.htm"
        }
    },
    {  
        coordinates: {
            lat: 46.073587,
            lng: -64.778721
        },
        details: {  
            name: "Providence Christian Church",
            address: "105 Howard Ave. Riverview N.B Canada",
            region: "CAN",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 53.90992,
            lng: -122.786537
        },
        details: {  
            name: "Sovereign Grace Fellowship",
            address: "Box 2633 Prince George, B.C. V2N 4T5",
            region: "CAN",
            website: "http://www.sgfpg.com/"

      }
    },
    {  
        coordinates: {
            lat: 43.32552,
            lng: -79.799032
        },
        details: {  
            name: "Trinity Baptist Church",
            address: "Burlington, Ontario",
            region: "CAN",
            website: "http://www.trinity-baptist-church.com/"

      }
    },
    {  
        coordinates: {
            lat: 4.677021,
            lng: -74.077541
        },
        details: {  
            name: "Iglesia Cristiana Gracia y Amor - Norte",
            address: "Carrera 61 # 178-60, Bogotá, Colombia",
            region: "COL",
            website: "http://www.iglesiacristianagraciayamor.org/"
        }
    },
    {  
        coordinates: {
            lat: 4.682265,
            lng: -74.049065
        },
        details: {  
            name: "Iglesia Cristiana Gracia y Amor - La Alborada",
            address: "Calle 97 # 68F-96, Bogotá, Colombia",
            region: "COL",
            website: "http://www.iglesiacristianagraciayamor.org/"
        }
    },
    {  
        coordinates: {
            lat: 4.597118,
            lng: -74.069218
        },
        details: {  
            name: "La Iglesia Bautista del Norte",
            address: "Avenida 13 (Autopista Norte) No. 101-33 Barrio Santa Margarita,  Bogotá D.C.,  Colombia",
            region: "COL",
            website: "http://www.geocities.com/orozoa/rozo.htm"
        }
    },
    {  
        coordinates: {
            lat: 9.974414,
            lng: -84.115805
        },
        details: {  
            name: "Iglesia Bautista Reformada Los Lagos",
            address: "Los Lagos de Heredia, Del Supermercado Pali, 200 metros oeste.",
            region: "CRI",
            website: "http://fereformada.org/?page_id=70"
        }
    },
    {  
        coordinates: {
            lat: 56.26392,
            lng: 9.501785
        },
        details: {  
            name: "Kristuskirken Reformed Baptist Church",
            address: "Denmark",
            region: "DNK",
            website: "http://www.kristuskirken.com/"

      }
    },
    {  
        coordinates: {
            lat: 18.450811,
            lng: -69.950262
        },
        details: {  
            name: "Iglesia Bautista del Nuevo Pacto",
            address: "Calle César Augusto Roque #133, Bella Vista, Santo Domingo, Dominican Republic",
            region: "DOM",
            website: "http://www.ibnp.org/"
        }
    },
    {  
        coordinates: {
            lat: 19.479196,
            lng: -70.693057
        },
        details: {  
            name: "Iglesia Bautista de la Gracia",
            address: "Santiago, Dominican Republic",
            region: "DOM",
            website: "http://www.ibgracia.org/"
        }
    },
    {  
        coordinates: {
            lat: 18.510079,
            lng: -69.866626
        },
        details: {  
            name: "Iglesia Bíblica de la Gracia",
            address: "Av. San Vicente de Paúl #19, Santo Domingo, Dominican Republic",
            region: "DOM",
            website: "http://usuarios.lycos.es/todoelconsejodedios"
        }
    },
    {  
        coordinates: {
            lat: 18.486058,
            lng: -69.931212
        },
        details: {  
            name: "Iglesia Biblica del Señor Jesucristo",
            address: "Santo Domingo, Dominican Republic",
            region: "DOM",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 18.504143,
            lng: -69.82326
        },
        details: {  
            name: "Iglesia Biblica De La Trinidad",
            address: "Calle 2 #829, Villa Carmen, Santo Domingo, R. D.",
            region: "DOM",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 18.489251,
            lng: -69.870164
        },
        details: {  
            name: "Iglesia Fundamento Biblico",
            address: "Ensache Ozama, Santo Domingo, Republica Dominicana ",
            region: "DOM",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 45.195463,
            lng: 5.830354
        },
        details: {  
            name: "Eglise Réformée Baptiste du Grésivaudan",
            address: "Centre Commercial Chemin des Carrières – 38420 Domène, France",
            region: "FRA",
            website: "http://www.eglise-rb-grenoble.fr/"
        }
    },
    {  
        coordinates: {
            lat: 43.522441,
            lng: 5.428722
        },
        details: {  
            name: "Centre Biblique de Provence",
            address: "10 rue Edouard Herriot, 13090 Aix en Provence",
            region: "FRA",
            website: "http://www.centrebibliquedeprovence.fr/"
        }
    },
    {  
        coordinates: {
            lat: 50.580764,
            lng: 8.468718
        },
        details: {  
            name: "Evangelisch-Reformierte Baptistengemeinde, Wetzlar",
            address: "Falltorstraße 23, 35614 Aßlar, Germany",
            region: "DEU",
            website: "http://www.erb-wetzlar.de/"
        }
    },
    {  
        coordinates: {
            lat: 49.14934,
            lng: 9.20059
        },
        details: {  
            name: "Freie Baptisten - Gemeinde Heilbronn",
            address: "Georg-Vogel-Straße 24, 74080 Heilbronn, Germany",
            region: "DEU",
            website: "http://www.fb-gemeinde.de/"
        }
    },
    {  
        coordinates: {
            lat: 50.533678,
            lng: 8.313892
        },
        details: {  
            name: "Gemeinde Freier Evangelischer Christen",
            address: "Kirchstr. 5, 35638 Leun-Biskirchen, Germany",
            region: "DEU",
            website: "http://www.gemeinde-biskirchen.de/"
        }
    },
    {  
        coordinates: {
            lat: 52.374485,
            lng: 9.761296
        },
        details: {  
            name: "Hannover International Bible Church",
            address: "Schackstrasse 4, 30175 Hannover",
            region: "DEU",
            website: "http://www.hannoveribc.com/"
        }
    },
    {  
        coordinates: {
            lat: 52.61046,
            lng: 10.08616
        },
        details: {  
            name: "International Baptist Church Celle",
            address: "Wederweg 41, 29223 Celle",
            region: "DEU",
            website: "http://www.ibc-celle.de/"
        }
    },
    {  
        coordinates: {
            lat: 22.291948,
            lng: 114.197504
        },
        details: {  
            name: "Grace Reformed Evangelical Church",
            address: "41-47 Java Road, North Point, Hong Kong",
            region: "HKG",
            website: "http://www.grec.org.hk/"
        }
    },
    {  
        coordinates: {
            lat: 22.2999936,
            lng: 114.1749148
        },
        details: {  
            name: "Trinity Baptist Church of Hong Kong<br>香港改革宗三一浸信教會",
            address: "3/F Grand Building, 20 Granville Circuit, Tsim Sha Tsui, Kowloon, Hong Kong",
            region: "HKG",
            website: "http://rbhk.org/"
        }
    },
    {  
        coordinates: {
            lat: 13.83299,
            lng: 75.708073
        },
        details: {  
            name: "Biblical Baptist Church",
            address: "New Colony, Bhadravati, Karnataka, 577 301, India",
            region: "IND",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 17.483319,
            lng: 78.550317
        },
        details: {  
            name: "Christ Reformed Church",
            address: "Secunderabad - 500 003, Andhra Pradesh, India",
            region: "IND",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 22.572646,
            lng: 88.363895
        },
        details: {  
            name: "Grace Bible Fellowship",
            address: "G PO Box 2348 Kolkata 700 001, West Bengal, India",
            region: "IND",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 11.715397,
            lng: 78.177585
        },
        details: {  
            name: "Reformed Baptist Church",
            address: "295, Shanthi Nagar, Yercaud Main Road, Salem-636 008, Tamilnad, South India",
            region: "IND",
            website: "http://www.reformedbaptist.org.in/"
        }
    },
    {  
        coordinates: {
            lat: 19.193665,
            lng: 72.992439
        },
        details: {  
            name: "Truth Reformed Baptist Church",
            address: "Satyam Chawl, Lokmany Nagar-4, Thane-400 606",
            region: "IND",
            website: "http://reformerkev.esmartweb.com/Truth/index.html"
        }
    },
    {  
        coordinates: {
            lat: 54.719534,
            lng: -6.20725
        },
        details: {  
            name: "Ballymoney Baptist Church",
            address: "60 Ballymena Road, Ballymoney, C.O. Antrim, Northern Ireland",
            region: "IRL",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 53.283173,
            lng: -6.260104
        },
        details: {  
            name: "Ballinteer Baptist Meeting",
            address: "Hillview Resource Centre, Ballinteer, Dublin 16. Ireland",
            region: "IRL",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 53.60051,
            lng: -8.129115
        },
        details: {  
            name: "Grace Community Church of Roscommon",
            address: "Ballymurray, Roscomoon, Ireland",
            region: "IRL",
            website: "http://www.graceministry.info/"
        }
    },
    {  
        coordinates: {
            lat: 54.855698,
            lng: -6.371101
        },
        details: {  
            name: "Magherafelt Reformed Baptist Church",
            address: "45 Thorncroft, Ahoghill, County Antrim, Northern Ireland, BT42 1RX",
            region: "IRL",
            website: "https://magherafeltrbc.org/"
        }
    },
    {  
        coordinates: {
            lat: 31.777768,
            lng: 35.232464
        },
        details: {  
            name: "Kol Bamidbar (Voice in the wilderness)",
            address: "Maranite Convent Rd, Old City, Jerusalem, Israel",
            region: "ISR",
            website: "http://www.voice-wilderness.com/"

      }
    },
    {  
        coordinates: {
            lat: 31.973002,
            lng: 34.792501
        },
        details: {  
            name: "Grace & Truth Congregation",
            address: "P.O. Box 75 Rishon LeTsion 75100, Israel",
            region: "ISR",
            website: "http://www.gandt.org.il/"
        }
    },
    {  
        coordinates: {
            lat: 37.494651,
            lng: 14.060702
        },
        details: {  
            name: "Evangelical Christian Church \"Sola Grazia\"",
            address: "Via Redentore 157, 93100 Caltanissetta, Italy",
            region: "ITA",
            website: "http://www.solagrazia.it/"
        }
    },
    {  
        coordinates: {
            lat: 41.87194,
            lng: 12.56738
        },
        details: {  
            name: "Chiese Evangeliche Riformate Battiste in Italia",
            address: "Italy",
            region: "ITA",
            website: "http://www.cerbi.it/"
        }
    },
    {  
        coordinates: {
            lat: 18.041545,
            lng: -76.814564
        },
        details: {  
            name: "Grace Reformed Baptist Church",
            address: "33 Red Hills Road, Kingston, 10, Jamaica W.I",
            region: "JAM",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 3.136021,
            lng: 101.624259
        },
        details: {  
            name: "Damansara Church (Reformed Baptist)",
            address: "52 Jalan SS21/2 Damansara Utama, 47400 Petaling Jaya. Malaysia",
            region: "MYS",
            website: "http://www.rbcm.net/"
        }
    },
    {  
        coordinates: {
            lat: 4.626261,
            lng: 101.154737
        },
        details: {  
            name: "Ipoh East Reformed Baptist Church",
            address: "64A Laluan Perajurit 1, Ipoh Garden East 31400., Perak. Malaysia",
            region: "MYS",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 1.500942,
            lng: 103.747194
        },
        details: {  
            name: "JB First Community Church (Reformed Baptist)",
            address: "11-01, Susur Dewata 1, Jalan Dewata Larkin Perdana, 80350 Johor Bahru, Malaysia",
            region: "MYS",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 5.980408,
            lng: 116.073457
        },
        details: {  
            name: "KK Reformed Baptist Church",
            address: "Kota Kinabalu, Sabah",
            region: "MYS",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 3.560932,
            lng: 101.658546
        },
        details: {  
            name: "Kuala Kubu Chapel (Reformed Baptist)",
            address: "44000 Kuala Kubu Baru., Selangor. Malaysia",
            region: "MYS",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 2.197149,
            lng: 102.240384
        },
        details: {  
            name: "Melaka Reformed Baptist Church",
            address: "10 Jln Kota Laksamana 2/7, Tmn Kota Laksamana, 75200 Melaka, Malaysia",
            region: "MYS",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 4.210484,
            lng: 101.975766
        },
        details: {  
            name: "Miri Reformed Baptist Church",
            address: "Lot 2931, 2nd Floor, Faradale Garden, Jalan Bulan Sabit, 98000 Miri, Sarawak, East Malaysia",
            region: "MYS",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 3.009341,
            lng: 101.712724
        },
        details: {  
            name: "Sri Serdang Church (Reformed Baptist)",
            address: "3261B Jalan 18/37 Taman Sri Serdang, 43300 Seri Kembangan, Selangor, Malaysia",
            region: "MYS",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 3.046184,
            lng: 101.575692
        },
        details: {  
            name: "Subang Jaya Reformed Baptist Church",
            address: "2A Jalan USJ 4/9G, UEP Subang Jaya, 47610 Selangor. Malaysia",
            region: "MYS",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 5.364249,
            lng: 100.299279
        },
        details: {  
            name: "Sungai Dua Church (1689 Baptist)",
            address: "4K-1 Desa University Commercial Complex, Jalan Sungai Dua, 11700 Penang Malaysia",
            region: "MYS",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 35.858287,
            lng: 14.486888
        },
        details: {  
            name: "Trinity Evangelical Church",
            address: "PO Box 9 Luqa Malta",
            region: "MLT",
            website: "http://www.tecmalta.org/index.htm"
        }
    },
    {  
        coordinates: {
            lat: 28.673072,
            lng: -106.094163
        },
        details: {  
            name: "Chihuahua City RB Mission",
            address: "Maximino Serdan 2114, Fracc Francisco I Madero, Chihuahua Chihuahua Mexico",
            region: "MEX",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 28.402206,
            lng: -106.864245
        },
        details: {  
            name: "Iglesia Bautista Betel",
            address: "Matamoros y 4ta, esq. Cuauhtemoc Chihuahua Mexico",
            region: "MEX",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 29.083446,
            lng: -110.953644
        },
        details: {  
            name: "Iglesia Biblica Cristiana Monte Horeb",
            address: "Hermosillo Sonora Mexico 83000",
            region: "MEX",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 19.432608,
            lng: -99.133208
        },
        details: {  
            name: "Iglesia Bautista de la Gracia y la Verdad",
            address: "04831 D.F. Mexico",
            region: "MEX",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 20.677617,
            lng: -101.325273
        },
        details: {  
            name: "Iglesia Bautista de La Gracia",
            address: "Calle Manuel Avila Camacho #242, IIrapuato, Guanajuato, Mexico",
            region: "MEX",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 42.780474,
            lng: 18.956166
        },
        details: {  
            name: "Reformed Baptist Missionary",
            address: "Petra Komnenica BB, 81400 Niksic, Montenegro",
            region: "MNE",
            website: "http://christianitymontenegro.org/"
        }
    },
    {  
        coordinates: {
            lat: 16.866069,
            lng: 96.195132
        },
        details: {  
            name: "Biblical Reformed Church, Hlaing Thayar",
            address: "Yangon, Myanmar",
            region: "MMR",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: -43.554961,
            lng: 172.649018
        },
        details: {  
            name: "Grace Baptist Church",
            address: "60 Riverlaw Terrace, St Martins, Christchurch 8022, New Zealand",
            region: "NZL",
            website: "http://www.gracebaptist.org.nz/"
        }
    },
    {  
        coordinates: {
            lat: -36.895999,
            lng: 174.841703
        },
        details: {  
            name: "Sovereign Grace Church (Reformed Baptist)",
            address: "3  Lunn Avenue, Mt. Wellington, Auckland 6 New Zealand",
            region: "NZL",
            website: "http://sgcrb.wordpress.com/"
        }
    },
    {  
        coordinates: {
            lat: -37.810987,
            lng: 175.285486
        },
        details: {  
            name: "Trinity Reformed Baptist Church",
            address: "6 Odette Street, Hamilton, New Zealand",
            region: "NZL",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 11.858631,
            lng: -86.241254
        },
        details: {  
            name: "Carazo Bible Fellowship",
            address: "Diriamba, Carazo, Nicaragua",
            region: "NIC",
            website: "http://www.gassfamilymission.com"
        }
    },
    {  
        coordinates: {
            lat: 14.676041,
            lng: 121.0437
        },
        details: {  
            name: "Cubao Reformed Baptist Church",
            address: "21 Harvard St, Cubao, 1102 Quezon City, Philippines",
            region: "PHL",
            website: "http://www.crbc-ph.org/"
        }
    },
    {  
        coordinates: {
            lat: 15.471034,
            lng: 120.596257
        },
        details: {  
            name: "Divine Grace Bible Church",
            address: "#22 Lucille St., San Sebastian Village, Tarlac, Tarlac, Philippines",
            region: "PHL",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 12.879721,
            lng: 121.774017
        },
        details: {  
            name: "Grace Baptist Church of Los Baños (Philippines)",
            address: "Bougainvilla St. (Purok 1), Paciano Rizal Bay, Laguna 4030, Philippines",
            region: "PHL",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 12.879721,
            lng: 121.774017
        },
        details: {  
            name: "Grace Community Church",
            address: "No. 32 K-105 St., Karangalan Village Phase 2-A, Pasig City, Philippines",
            region: "PHL",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 8.228021,
            lng: 124.245242
        },
        details: {  
            name: "Grace Covenant Baptist Church",
            address: "069 LaSalle Street, Villaverde, Iligan City, Philippines 9200",
            region: "PHL",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 12.879721,
            lng: 121.774017
        },
        details: {  
            name: "Kalibo Reformed Baptist Church",
            address: "Cipriano Road, Estancia, Kalibo, Aklan, 5600 Philippines",
            region: "PHL",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 12.879721,
            lng: 121.774017
        },
        details: {  
            name: "Moonwalk Community Bible Church",
            address: "142 Armstrong Street, Moonwalk Village Phase II, Paranaque M.M. 1700 Philippines",
            region: "PHL",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 12.879721,
            lng: 121.774017
        },
        details: {  
            name: "New Covenant Reformed Bible Church",
            address: "Roa Compound, Purok 4, Baňadero, Ozamiz City, Misamis Occidental, 2700, Philippines",
            region: "PHL",
            website: "http://www.ncrbc.i.ph/"
        }
    },
    {  
        coordinates: {
            lat: 12.879721,
            lng: 121.774017
        },
        details: {  
            name: "Ozamiz Reformed Baptist Church",
            address: "634 - A Burgos St., Tinago, Ozamiz City, Misamis Occidenta, 7200 Philippines",
            region: "PHL",
            website: "http://orbc.yolasite.com/"
        }
    },
    {  
        coordinates: {
            lat: 14.7110646,
            lng: 121.0586118
        },
        details: {  
            name: "Redeemed Community Bible Church",
            address: "Block 85 Lot 7&9, Riyal St., North Fairview Subd., Phase 8, North Fairview, Quezon City 1121",
            region: "PHL",
            website: "https://www.facebook.com/redeemed.community/"
        }
    },
    {  
        coordinates: {
            lat: 14.316266,
            lng: 121.111836
        },
        details: {  
            name: "Reformed Baptist Bible Church of Santa Rosa",
            address: "Purificacion St. Zavalla Village 3 Brgy., Tagapo, Santa Rosa, Laguna, Philippines 4026",
            region: "PHL",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 10.315699,
            lng: 123.885437
        },
        details: {  
            name: "Sovereign Grace Bible Church",
            address: "Ma. Paloma Village, Banawa Rd., Labangon, 6000 Cebu City, Philippines",
            region: "PHL",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 14.569861,
            lng: 120.996322
        },
        details: {  
            name: "Sovereign Grace Church",
            address: "2220-A Angel Linao, Malate, M-Manila, Philippines",
            region: "PHL",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 14.651374,
            lng: 120.97126
        },
        details: {  
            name: "The Neighborhood Church",
            address: "47 Libis Espina Street, Kalookan City, Metro Manila, 1400 Philippines",
            region: "PHL",
            website: "http://sites.google.com/site/theneighborhoodchurch/home"
        }
    },
    {  
        coordinates: {
            lat: 14.048953,
            lng: 121.405615
        },
        details: {  
            name: "Trinity Baptist Church",
            address: "P.O.Box 50 4000 San Pablo City, Philippines",
            region: "PHL",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 14.611722,
            lng: 120.995169
        },
        details: {  
            name: "Trinity Reformed Baptist Church",
            address: "1726 España cor. V.G. Cruz St., Sampaloc, 1008 Manila, Philippines",
            region: "PHL",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 18.373087,
            lng: -66.076728
        },
        details: {  
            name: "Berean Baptist Church",
            address: "1825 Calle San Alejandro, San Juan (Rio Piedras), PR 00927-6819",
            region: "PRI",
            website: "http://www.iglesiabereana.org/"
        }
    },
    {  
        coordinates: {
            lat: 1.302491,
            lng: 103.780158
        },
        details: {  
            name: "Ebenezer Church",
            address: "121 Dover Rd, Singapore 139650",
            region: "SGP",
            website: "http://www.ebenezer.org.sg/"
        }
    },
    {  
        coordinates: {
            lat: 1.341924,
            lng: 103.885249
        },
        details: {  
            name: "Shalom Reformed Baptist Church",
            address: "8 New Industrial Road, LHK3 Building, #03-01, Singapore 536200",
            region: "SGP",
            website: "http://www.shalomrb.com/"
        }
    },
    {  
        coordinates: {
            lat: 1.461517,
            lng: 103.838153
        },
        details: {  
            name: "Woodlands Reformed Baptist Church",
            address: "1200 Sembawang Road",
            region: "SGP",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 49.21945,
            lng: 18.7408
        },
        details: {  
            name: "Reformed Baptist Church",
            address: "Zilina, Slovakia",
            region: "SVK",
            website: "http://www.reformacia.sk/"
        }
    },
    {  
        coordinates: {
            lat: -26.06333,
            lng: 28.23182
        },
        details: {  
            name: "Birchleigh Baptist Church",
            address: "29 Moepel Street, Birchleigh, Kempton Park, Gauteng, South Africa",
            region: "ZAF",
            website: "http://www.birchleighbc.co.za/"
        }
    },
    {  
        coordinates: {
            lat: -26.204103,
            lng: 28.047305
        },
        details: {  
            name: "Free Grace Baptist Church",
            address: "Wassanaar Street, Boskburg, Johannesburg, Gauteng, South Africa",
            region: "ZAF",
            website: "http://www.freegrace.co.za/"
        }
    },
    {  
        coordinates: {
            lat: -26.220692,
            lng: 28.167333
        },
        details: {  
            name: "Germiston Baptist Church",
            address: "corner Angus/ Queen St. Germiston South",
            region: "ZAF",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: -33.84562,
            lng: 18.70933
        },
        details: {  
            name: "Kraaifontein Baptist Church",
            address: "Corner of Edward and York Street, Windsor Park, Kraaifontein, 7570 Western Cape, South Africa ",
            region: "ZAF",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: -25.764286,
            lng: 28.295041
        },
        details: {  
            name: "Lynnwood Baptist Church",
            address: "52 Jacobson Drive, Lynnwood Ridge, 0081, Pretoria, South Africa",
            region: "ZAF",
            website: "http://home.global.co.za/~12020178"
        }
    },
    {  
        coordinates: {
            lat: 36.722603,
            lng: -4.467102
        },
        details: {  
            name: "Iglesia Cristiana Bautista Reformada",
            address: "29010 - Malaga, Spain",
            region: "ESP",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 28.437511,
            lng: -16.31883
        },
        details: {  
            name: "Iglesia Evangélica de la Gracia",
            address: "Av de los Majuelos, 65, 38107 El Sobradillo, Spain",
            region: "ESP",
            website: "http://www.iedelagracia.org/"
        }
    },
    {  
        coordinates: {
            lat: 40.396149,
            lng: -3.748587
        },
        details: {  
            name: "Iglesia Bautista Reformada del Pacto de Gracia",
            address: "Calle Fuendetodos, n 28 bis bajo, 28047 Madrid, España",
            region: "ESP",
            website: "http://www.ibrpg.org/"
        }
    },
    {  
        coordinates: {
            lat: 38.835576,
            lng: 0.108321
        },
        details: {  
            name: "Iglesia Bautista Independiente Monte Sion",
            address: "Avda. Joan Fuster 34, 03700 Denia (Alicante)",
            region: "ESP",
            website: "http://www.iglesiabautistadenia.com/"
        }
    },
    {  
        coordinates: {
            lat: 41.432305,
            lng: 2.188194
        },
        details: {  
            name: "Iglesia Evangélica de la Gracia",
            address: "c/ L\"Abat Odo 20, Barcelona 08030, España",
            region: "ESP",
            website: "http://www.porgracia.es/"
        }
    },
    {  
        coordinates: {
            lat: 46.528068,
            lng: 6.631439
        },
        details: {  
            name: "Eglise Réformée Baptiste de Lausanne",
            address: "6, Rue des Oliviers, CH-1018 Lausanne, Switzerland",
            region: "CHE",
            website: "http://www.baptiste-lausanne.ch/"
        }
    },
    {  
        coordinates: {
            lat: 46.517292,
            lng: 6.620302
        },
        details: {  
            name: "Lausanne Free Church",
            address: "Chemin des Fleurettes 36, 1007 Lausanne, Switzerland",
            region: "CHE",
            website: "http://www.lausanne-english-church.com/"
        }
    },
    {  
        coordinates: {
            lat: 10.652195,
            lng: -61.393333
        },
        details: {  
            name: "Reformed Evangelical Church",
            address: "33 Auzonville Road, Tunapuna, Trinidad & Tobago, WI",
            region: "TTO",
            website: "http://rec-tt.org/"
        }
    },
    {  
        coordinates: {
            lat: 10.651253,
            lng: -61.388107
        },
        details: {  
            name: "The Tunapuna Missionary Baptist Church",
            address: "Achong Trace, Upper Balthazar St., Tunapuna, Trinidad, West Indies",
            region: "TTO",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 52.415671,
            lng: -4.084769
        },
        details: {  
            name: "Alfred Place Baptist Church",
            address: "2 Alfred Place, Aberystwyth, SY23 2BS, UK",
            region: "GBR",
            website: "http://www.alfredplacechurch.org.uk/"
        }
    },
    {  
        coordinates: {
            lat: 55.964589,
            lng: -3.179007
        },
        details: {  
            name: "The Upper Room",
            address: "No. 9 Pilrig Street, Edinburgh, Scotland",
            region: "GBR",
            website: "http://www.bellevuebaptistchurch.co.uk/"
        }
    },
    {  
        coordinates: {
            lat: 53.384329,
            lng: -2.956979
        },
        details: {  
            name: "Belvidere Road Church",
            address: "Belvidere Road, Princes Park, Liverpool, L8 3TG",
            region: "GBR",
            website: "http://www.belvidere.org.uk/"
        }
    },
    {  
        coordinates: {
            lat: 52.480253,
            lng: -1.748264
        },
        details: {  
            name: "Chelmsley Wood Reformed Baptist Church",
            address: "Fordbridge centre B37 5DD, Nineacres Drive, Chelmsley Wood, Birmingham, England",
            region: "GBR",
            website: "http://www.cwrbc.org.uk/"
        }
    },
    {  
        coordinates: {
            lat: 53.083834,
            lng: -1.479417
        },
        details: {  
            name: "Crich Baptist Church",
            address: "Market Place, Crich, Derbyshire.  DE4 5DD",
            region: "GBR",
            website: "http://www.crichbaptist.org/"
        }
    },
    {  
        coordinates: {
            lat: 55.455121,
            lng: -4.262362
        },
        details: {  
            name: "Cumnock Baptist Church",
            address: "Barrhill Road, Cumnock, Ayrshire, KA18 1PG",
            region: "GBR",
            website: "http://www.cumnockbaptist.co.uk/"
        }
    },
    {  
        coordinates: {
            lat: 51.550385,
            lng: 0.008619
        },
        details: {  
            name: "Grace Baptist Church",
            address: "Gurney Road, Stratford, London E15 1SL",
            region: "GBR",
            website: "http://www.gbcsl.org/"
        }
    },
    {  
        coordinates: {
            lat: 53.645432,
            lng: -3.006539
        },
        details: {  
            name: "Grace Baptist Church",
            address: "40 Market Street, Southport, Merseyside, PR8 1HJ",
            region: "GBR",
            website: "http://www.gracebaptist.org.uk/"
        }
    },
    {  
        coordinates: {
            lat: 52.630886,
            lng: 1.297355
        },
        details: {  
            name: "Hethersett Independent Reformed Baptist Church",
            address: "Hethersett, Nr Norwich, Norfolk. UK.",
            region: "GBR",
            website: "http://www.hethersettbaptistchurch.com/"
        }
    },
    {  
        coordinates: {
            lat: 51.107353,
            lng: -0.153193
        },
        details: {  
            name: "Maidenbower Baptist Church",
            address: "Maidenbower Square, Maidenbower, Crawley, West Sussex  RH10 7QH",
            region: "GBR",
            website: "http://www.mabach.org/"
        }
    },
    {  
        coordinates: {
            lat: 55.009424,
            lng: -1.5745
        },
        details: {  
            name: "Newcastle Reformed Evangelical Church",
            address: "Hoylake Ave, Newcastle upon Tyne NE7 7UN",
            region: "GBR",
            website: "http://www.nrechurch.co.uk/"
        }
    },
    {  
        coordinates: {
            lat: 56.137348,
            lng: -3.190169
        },
        details: {  
            name: "Pathhed Baptist Church",
            address: "114 Sir Thomas Elder Way, Kirkcaldy, Fife, Scotland  KY2 6ZS",
            region: "GBR",
            website: "http://www.kirkcaldy-pathheadbaptist.co.uk/"
        }
    },
    {  
        coordinates: {
            lat: 51.889046,
            lng: -2.078364
        },
        details: {  
            name: "Providence Baptist Chapel",
            address: "Naunton Parade, Cheltenham, Gloucestershire, GL53 7NP",
            region: "GBR",
            website: "http://www.providencebaptistchapel.org.uk/"
        }
    },
    {  
        coordinates: {
            lat: 55.889605,
            lng: -4.32266
        },
        details: {  
            name: "Reformed Baptist Church",
            address: "Reformed Baptist Church 4 Herschell Street, Anniesland Glasgow G13 1HR ",
            region: "GBR",
            website: "http://rbcweb.org/"
        }
    },
    {  
        coordinates: {
            lat: 57.483131,
            lng: -4.238504
        },
        details: {  
            name: "Reformed Baptist Church of Inverness, Scotland",
            address: "Telford Road, Inverness, Scotland, TV3 6HN",
            region: "GBR",
            website: "http://www.wicketgate.co.uk/"
        }
    },
    {  
        coordinates: {
            lat: 55.856561,
            lng: -4.299613
        },
        details: {  
            name: "South Glasgow Baptist Church",
            address: "425 Govan Road, Glasgow, Scotland",
            region: "GBR",
            website: "http://southglasgowbaptist.webs.com/"
        }
    },
    {  
        coordinates: {
            lat: 18.041545,
            lng: -76.814564
        },
        details: {  
            name: "Grace Reformed Baptist Church",
            address: "33 Red Hills Road, Kingston, 10, Jamaica W.I",
            region: "JAM",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 12.124261,
            lng: -61.623856
        },
        details: {  
            name: "Grace Reformed Church",
            address: "PO Box 5015 Grenville, Grenada, WI",
            region: "GRD",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: -17.831342,
            lng: 25.859481
        },
        details: {  
            name: "Kabwat Baptist Church",
            address: "Lusaka 15101, Zambia",
            region: "ZMB",
            website: "http://www.kabwatabaptistchurch.org/"
        }
    },
    {  
        coordinates: {
            lat: 33.365789,
            lng: -86.763302
        },
        details: {  
            name: "Dominion Baptist Church",
            address: "2333 Valleydale Rd. Birmingham, Alabama 35244",
            region: "AL",
            website: "http://www.dominionbaptist.org/"
        }
    },
    {  
        coordinates: {
            lat: 34.875284,
            lng: -87.673642
        },
        details: {  
            name: "Emmanuel Baptist Church",
            address: "4445 Chisholm Road Florence, Alabama 35630",
            region: "AL",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 34.751784,
            lng: -86.746636
        },
        details: {  
            name: "Grace Baptist Church",
            address: "122 Walnut Street  Madison, AL 35758",
            region: "AL",
            website: "http://www.gracemadison-al.com/index.html"
        }
    },
    {  
        coordinates: {
            lat: 32.615095,
            lng: -85.453393
        },
        details: {  
            name: "Grace Heritage Church",
            address: "1345 Annalue Dr. Auburn, AL   36830",
            region: "AL",
            website: "http://www.graceheritage.org/"
        }
    },
    {  
        coordinates: {
            lat: 34.003207,
            lng: -85.982237
        },
        details: {  
            name: "Harvest Fellowship Community Church",
            address: "903 Grant Ave. Gadsden, AL 35903",
            region: "AL",
            website: "http://www.hfcchurch.org/"
        }
    },
    {  
        coordinates: {
            lat: 34.809227,
            lng: -86.74947
        },
        details: {  
            name: "New Life Baptist",
            address: "7640 Wall Triana HighWay Harvest, AL  35749",
            region: "AL",
            website: "http://www.nlbc-harvest.org/"
        }
    },
    {  
        coordinates: {
            lat: 31.22844,
            lng: -85.435772
        },
        details: {  
            name: "Trinity Church",
            address: "4426 West Main St Dothan, AL 36303",
            region: "AL",
            website: "http://www.trinitychurchdothan.com"
        }
    },
    {  
        coordinates: {
            lat: 33.802113,
            lng: -86.564157
        },
        details: {  
            name: "Providence Reformed Baptist Church",
            address: "250 Pine Mountain Circle, Remlap, AL 35133",
            region: "AL",
            website: "http://www.prbc1689.org"
        }
    },
    {  
        coordinates: {
            lat: 33.408626,
            lng: -111.739517
        },
        details: {  
            name: "Cornerstone Church",
            address: "4248 East Broadway Rd. Mesa, Arizona  85206",
            region: "AZ",
            website: "http://www.cstonemesa.org/"
        }
    },
    {  
        coordinates: {
            lat: 33.373444,
            lng: -111.738483
        },
        details: {  
            name: "Grace Covenant Church",
            address: "1255 N. Greenfield Rd. Gilbert, AZ 85234",
            region: "AZ",
            website: "http://gccgilbert.com/"
        }
    },
    {  
        coordinates: {
            lat: 34.556524,
            lng: -112.480945
        },
        details: {  
            name: "Miller Valley Baptist Church",
            address: "815 Whipple St Prescott, AZ 86301",
            region: "AZ",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 33.535062,
            lng: -112.150719
        },
        details: {  
            name: "Northwest Baptist Church",
            address: "6701 N. 43rd Ave. Phoenix, AZ 85019",
            region: "AZ",
            website: "http://www.northwestbaptistchurchonline.org/"
        }
    },
    {  
        coordinates: {
            lat: 33.491665,
            lng: -112.056103
        },
        details: {  
            name: "Phoenix Reformed Baptist Church",
            address: "3805 North 12th Street Phoenix, Arizona  85014",
            region: "AZ",
            website: "http://www.prbc.org/"
        }
    },
    {  
        coordinates: {
            lat: 33.524323,
            lng: -112.122976
        },
        details: {  
            name: "Sovereign Grace Bible Church",
            address: "2940 W. Bethany Home Rd. Phoenix, AZ 85017",
            region: "AZ",
            website: "http://www.sovgracephoenix.com/"

      }
    },
    {  
        coordinates: {
            lat: 32.237548,
            lng: -110.925856
        },
        details: {  
            name: "Tucson Reformed Baptist Church",
            address: "1150 N Country Club Drive Tucson, AZ 85716",
            region: "AZ",
            website: "http://www.tucsonreformedbaptist.org/"

      }
    },
    {  
        coordinates: {
            lat: 35.088696,
            lng: -92.442101
        },
        details: {  
            name: "Grace Bible Church",
            address: "Conway, Arkansas",
            region: "AR",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 36.372854,
            lng: -94.208817
        },
        details: {  
            name: "Legacy Baptist Church",
            address: "Bentonville, AR 72712",
            region: "AR",
            website: "http://www.lbcofnwa.com/"
        }
    },
    {  
        coordinates: {
            lat: 33.404032,
            lng: -94.043094
        },
        details: {  
            name: "Texarkana Reformed Baptist Church",
            address: "1801 South State Line Avenue  Texarkana, Arkansas 71854",
            region: "AR",
            website: "http://texarkanarbc.org/"
        }
    },
    {  
        coordinates: {
            lat: 34.950232,
            lng: -92.008579
        },
        details: {  
            name: "The Bible Church of Cabot",
            address: "1400 S. Pine Cabot, AR 72023",
            region: "AR",
            website: "http://www.cabotbible.com/"
        }
    },
    {  
        coordinates: {
            lat: 37.590418,
            lng: -120.947392
        },
        details: {  
            name: "Berean Baptist Church",
            address: "2609 Lawrence St Ceres, CA 95307",
            region: "CA",
            website: "http://www.bereanbaptist.info/"
        }
    },
    {  
        coordinates: {
            lat: 33.915148,
            lng: -117.890178
        },
        details: {  
            name: "Brea Center Baptist Church",
            address: "251 S. Randolph Ave., Suite B Brea, CA 92821",
            region: "CA",
            website: "http://www.breacenterchurch.org/"
        }
    },
    {  
        coordinates: {
            lat: 33.893478,
            lng: -118.360527
        },
        details: {  
            name: "Centinela Baptist Church",
            address: "4730 W. 152nd Street Lawndale, CA 90260",
            region: "CA",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 35.622385,
            lng: -117.667739
        },
        details: {  
            name: "Cornerstone Bible Church",
            address: "114 S. Gemstone St. Ridgecrest, CA 93555",
            region: "CA",
            website: "http://www.cbcridgecrest.org/"
        }
    },
    {  
        coordinates: {
            lat: 33.233937,
            lng: -117.226671
        },
        details: {  
            name: "Christ Reformed Baptist Church",
            address: "2210 East Vista Way Vista, CA 92084",
            region: "CA",
            website: "http://www.christrbc.com/"
        }
    },
    {  
        coordinates: {
            lat: 34.194362,
            lng: -119.183099
        },
        details: {  
            name: "Faith Community Church",
            address: "723 South D Street Oxnard, CA 93030",
            region: "CA",
            website: "http://www.fccoxnard.org/"
        }
    },
    {  
        coordinates: {
            lat: 34.650739,
            lng: -120.445547
        },
        details: {  
            name: "Grace Baptist Church ",
            address: "1009 E. Pine Avenue Lompoc, CA 93436",
            region: "CA",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 36.613524,
            lng: -121.902519
        },
        details: {  
            name: "First Baptist Church of Monterey",
            address: "600 Hawthorne Street Monterey, California  93940",
            region: "CA",
            website: "http://www.fbcmonterey.org/"
        }
    },
    {  
        coordinates: {
            lat: 36.80871,
            lng: -119.710553
        },
        details: {  
            name: "Free Grace Church",
            address: "63 West Shaw Ave Clovis CA 93612",
            region: "CA",
            website: "http://www.freegracefresno.com/"
        }
    },
    {  
        coordinates: {
            lat: 34.678967,
            lng: -118.183009
        },
        details: {  
            name: "Free Grace Church",
            address: "43824 30th Street West Lancaster, CA 93536",
            region: "CA",
            website: "http://www.freegracechurch.com/"
        }
    },
    {  
        coordinates: {
            lat: 37.683564,
            lng: -121.784866
        },
        details: {  
            name: "Gateway Church",
            address: "811 Marylin Avenue Livermore, CA 94551",
            region: "CA",
            website: "http://www.lrbc.info/"
        }
    },
    {  
        coordinates: {
            lat: 33.108422,
            lng: -117.082629
        },
        details: {  
            name: "Grace Bible Church",
            address: "655 West 11th Avenue Escondido, CA 92025",
            region: "CA",
            website: "http://www.grcbible.org/"
        }
    },
    {  
        coordinates: {
            lat: 32.820591,
            lng: -117.16449
        },
        details: {  
            name: "Grace Bible Church - San Diego",
            address: "7250 Eckstrom St. San Diego, CA 92111",
            region: "CA",
            website: "http://www.gbc-sd.org/"
        }
    },
    {  
        coordinates: {
            lat: 33.881682,
            lng: -118.117012
        },
        details: {  
            name: "Grace Providence Church",
            address: "Bellflower, CA",
            region: "CA",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 38.73527,
            lng: -120.78297
        },
        details: {  
            name: "Grace Reformed Baptist Church",
            address: "1386 Carson Road Placerville, CA 95667",
            region: "CA",
            website: "http://www.gracereformedbc.net/"
        }
    },
    {  
        coordinates: {
            lat: 34.579434,
            lng: -118.116461
        },
        details: {  
            name: "Grace Reformed Baptist Church",
            address: "Palmdale, CA",
            region: "CA",
            website: "http://www.grbcav.org/"
        }
    },
    {  
        coordinates: {
            lat: 38.570114,
            lng: -121.477098
        },
        details: {  
            name: "Immanuel Baptist Church",
            address: "1424 24th Street Sacramento, CA 95816",
            region: "CA",
            website: "http://www.immanuelbc.net/"
        }
    },
    {  
        coordinates: {
            lat: 37.395223,
            lng: -122.005506
        },
        details: {  
            name: "Providence Bible Church",
            address: "709 Lakewood Drive Sunnyvale, CA  94088",
            region: "CA",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 34.246948,
            lng: -117.301851
        },
        details: {  
            name: "Mountain Reformed Church",
            address: "22972 Waters Drive Crestline, CA 92325",
            region: "CA",
            website: "http://www.mountainreformed.com/"
        }
    },
    {  
        coordinates: {
            lat: 34.011579,
            lng: -117.441761
        },
        details: {  
            name: "Reformed Baptist Church of Riverside",
            address: "7250 Mission Boulevard, Riverside, CA 92509",
            region: "CA",
            website: "http://www.rbcr.org/"
        }
    },
    {  
        coordinates: {
            lat: 34.070132,
            lng: -117.629506
        },
        details: {  
            name: "Sovereign Grace Baptist Church",
            address: "1168 East G Street Ontario, CA 91764",
            region: "CA",
            website: "http://www.sgbc-ontario.us/"
        }
    },
    {  
        coordinates: {
            lat: 37.112253,
            lng: -121.648299
        },
        details: {  
            name: "Sovereign Grace Baptist Church",
            address: "271 West Edmundson Ave. Morgan Hill, CA., 95037",
            region: "CA",
            website: "http://www.sgbcsv.org/"
        }
    },
    {  
        coordinates: {
            lat: 33.903006,
            lng: -118.024395
        },
        details: {  
            name: "Trinity Reformed Baptist Church",
            address: "14407 E. Rosecrans Ave. La Mirada, CA  90638",
            region: "CA",
            website: "http://www.reformedbaptist.net/"
        }
    },
    {  
        coordinates: {
            lat: 39.647845,
            lng: -105.04113
        },
        details: {  
            name: "Christ Church",
            address: "Denver, CO 80236",
            region: "CO",
            website: "http://christchurchdenver.com/"
        }
    },
    {  
        coordinates: {
            lat: 39.725043,
            lng: -105.060643
        },
        details: {  
            name: "Denver Sound Church",
            address: "5800 West 6th Avenue   Lakewood, CO 80214",
            region: "CO",
            website: "http://www.denversoundchurch.org/"
        }
    },
    {  
        coordinates: {
            lat: 40.057207,
            lng: -105.17914
        },
        details: {  
            name: "Reformed Baptist Church of Northern Colorado",
            address: "7493 Old Mill Trail Boulder, CO 80301",
            region: "CO",
            website: "http://www.rbcnc.com/"
        }
    },
    {  
        coordinates: {
            lat: 41.67145,
            lng: -72.86643
        },
        details: {  
            name: "First Baptist Church",
            address: "18 E. Main St. Plainville, CT 06062",
            region: "CT",
            website: "http://www.fbcplainvillect.org/"
        }
    },
    {  
        coordinates: {
            lat: 41.320379,
            lng: -72.846616
        },
        details: {  
            name: "Grace Reformed Baptist Church ",
            address: "1225 N. High Street East Haven, CT 06512",
            region: "CT",
            website: "http://www.grbcct.org/"
        }
    },
    {  
        coordinates: {
            lat: 27.941761,
            lng: -82.171537
        },
        details: {  
            name: "Ahava Baptist Church",
            address: "6015 W. Farkas Rd  Plant City, FL 33567",
            region: "FL",
            website: "http://www.ahavabaptist.com/"
        }
    },
    {  
        coordinates: {
            lat: 27.336435,
            lng: -82.530653
        },
        details: {  
            name: "Bethel Community Church",
            address: "Sarasota, Florida",
            region: "FL",
            website: "http://www.bethelcomchurch.org/index.html"
        }
    },
    {  
        coordinates: {
            lat: 28.656005,
            lng: -81.443296
        },
        details: {  
            name: "Covenant Reformed Baptist Church",
            address: "3600 McNeil Rd.  Apopka, FL 32703",
            region: "FL",
            website: "http://www.covenantreformedbaptist.com/"
        }
    },
    {  
        coordinates: {
            lat: 28.649476,
            lng: -81.134752
        },
        details: {  
            name: "Cornerstone Baptist Church",
            address: "3370 Snow Hill Road Chuluota, Florida 32766",
            region: "FL",
            website: "http://www.cornerstoneorlando.org/"
        }
    },
    {  
        coordinates: {
            lat: 25.648972,
            lng: -80.396963
        },
        details: {  
            name: "Cornerstone Bible Church",
            address: "12268 SW 128th St. Miami, Florida, USA 33186",
            region: "FL",
            website: "http://www.cornerstonebiblechurch.com/"
        }
    },
    {  
        coordinates: {
            lat: 26.313005,
            lng: -80.197219
        },
        details: {  
            name: "Emmanuel Baptist Church",
            address: "5391 Johnson Road Coconut Creek, Florida 33073",
            region: "FL",
            website: "http://www.ebcfl.org/"
        }
    },
    {  
        coordinates: {
            lat: 28.549977,
            lng: -81.352587
        },
        details: {  
            name: "Faith Baptist Church",
            address: "500 North Bumby Avenue Orlando, FL 32803",
            region: "FL",
            website: "http://www.faithbaptistorlando.org"
        }
    },
    {  
        coordinates: {
            lat: 28.567662,
            lng: -80.798716
        },
        details: {  
            name: "Faith Reformed Baptist Church",
            address: "3910 S. Washington Ave. Suite 107, Titusville, FL 32780",
            region: "FL",
            website: "http://frb.church"
        }
    },
    {  
        coordinates: {
            lat: 28.600082,
            lng: -80.836596
        },
        details: {  
            name: "Forest Hills Baptist Church",
            address: "2625 South Street, Titusville, FL 32780",
            region: "FL",
            website: "http://foresthillsbaptist.com"
        }
    },
    {  
        coordinates: {
            lat: 28.154104,
            lng: -82.430335
        },
        details: {  
            name: "Free Grace Church of Tampa Bay",
            address: "19111 N. Livingston Ave Lutz, FL 33559",
            region: "FL",
            website: "http://www.tampareformedbaptistchurch.com/"
        }
    },
    {  
        coordinates: {
            lat: 28.802861,
            lng: -81.269453
        },
        details: {  
            name: "Grace Chapel",
            address: "Holy Cross Lutheran Academy S.R. 46, 1 mile West of I-4, Sanford, Florida",
            region: "FL",
            website: "http://www.gracereformedchapel.org/"
        }
    },
    {  
        coordinates: {
            lat: 26.6418823,
            lng: -82.000895
        },
        details: {  
            name: "Grace Baptist Church",
            address: "1300 Ceitus Terrace, Cape Coral, FL 33991",
            region: "FL",
            website: "http://truegraceofgod.org/"
        }
    },
    {  
        coordinates: {
            lat: 28.331444,
            lng: -82.645935
        },
        details: {  
            name: "Grace Baptist Church of North Tampa Bay ",
            address: "11803 State Road 52 Bayonet Point, FL 34669",
            region: "FL",
            website: "http://www.gbcwp.com/"
        }
    },
    {  
        coordinates: {
            lat: 27.498344,
            lng: -81.441895
        },
        details: {  
            name: "Highlands Grace Reformed Church",
            address: "516 N. Pine St.  Sebring, FL 33870",
            region: "FL",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 25.759167,
            lng: -80.305523
        },
        details: {  
            name: "Iglesia Cristiana Camino Nuevo",
            address: "6790 SW 12th. Street  Miami, FL 33144",
            region: "FL",
            website: "http://www.iglesiacaminonuevo.com/"
        }
    },
    {  
        coordinates: {
            lat: 26.271632,
            lng: -81.764221
        },
        details: {  
            name: "Iglesia Bautista La Gracia",
            address: "10904 Winterview Drive, Naples, FL 34109",
            region: "FL",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 25.713639,
            lng: -80.43844
        },
        details: {  
            name: "Iglesia Bautista Independiente",
            address: "15078 SW 56th St. Miami, FL  33185",
            region: "FL",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 29.740877,
            lng: -82.277065
        },
        details: {  
            name: "Monteocha Baptist Church",
            address: "9420 N. County Road 225  Gainesville, FL 32609",
            region: "FL",
            website: "http://www.monteochabaptist.org/"
        }
    },
    {  
        coordinates: {
            lat: 30.415664,
            lng: -87.247947
        },
        details: {  
            name: "Mount Zion Bible Church",
            address: "2603 West Wright St.  Pensacola, FL 32505",
            region: "FL",
            website: "http://www.mountzion.org/"
        }
    },
    {  
        coordinates: {
            lat: 28.654834,
            lng: -81.365326
        },
        details: {  
            name: "Orlando Grace Church",
            address: "455 Maitland Avenue  Altamonte Springs, Florida",
            region: "FL",
            website: "http://www.orlandograce.org/"
        }
    },
    {  
        coordinates: {
            lat: 28.877885,
            lng: -82.508302
        },
        details: {  
            name: "Providence Baptist Church",
            address: "4471 W. Sanction Rd.  Lecanto, FL",
            region: "FL",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 29.2499,
            lng: -81.134983
        },
        details: {  
            name: "Riverbend Community Church",
            address: "2080 West Granada Blvd Ormond Beach, FL 32174",
            region: "FL",
            website: "http://www.riverbendchurch.com/"
        }
    },
    {  
        coordinates: {
            lat: 26.135566,
            lng: -80.298663
        },
        details: {  
            name: "Westgate Baptist Church",
            address: "901 N.W. 112th Avenue Plantation, FL  33325",
            region: "FL",
            website: "http://www.westgatebaptist.org/"
        }
    },
    {  
        coordinates: {
            lat: 29.71,
            lng: -82.4
        },
        details: {  
            name: "West Pointe Baptist Ministries",
            address: "Gainesville, Florida 32635",
            region: "FL",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 33.710486,
            lng: -84.736956
        },
        details: {  
            name: "Arbor Heights Baptist Church",
            address: "3506 Reynolds Rd.  Douglasville, Georgia 30135",
            region: "GA",
            website: "http://www.arborheightsbc.com/"
        }
    },
    {  
        coordinates: {
            lat: 33.880585,
            lng: -84.197169
        },
        details: {  
            name: "Atlanta Reformation Fellowship",
            address: "4651 Britt Road Norcross, GA 30093",
            region: "GA",
            website: "http://www.atlantareformationfellowship.com/"
        }
    },
    {  
        coordinates: {
            lat: 33.833783,
            lng: -84.623075
        },
        details: {  
            name: "Berean Baptist Church",
            address: "2356 Clay Road Austell, GA 30106",
            region: "GA",
            website: "http://www.bereanchurchps.org/"
        }
    },
    {  
        coordinates: {
            lat: 34.044507,
            lng: -83.956771
        },
        details: {  
            name: "Christ Reformed Church",
            address: "2209 Sunny Hill Road Lawrenceville, GA 30043",
            region: "GA",
            website: "http://www.christreformedchurch.org/"
        }
    },
    {  
        coordinates: {
            lat: 31.604639,
            lng: -81.920429
        },
        details: {  
            name: "Emmanuel Baptist Church",
            address: "1618 Waycross Highway Jesup GA 31545",
            region: "GA",
            website: "http://ebcjesup.net/"
        }
    },
    {  
        coordinates: {
            lat: 32.249998,
            lng: -81.215274
        },
        details: {  
            name: "Ephesus Church",
            address: "226 Goshen Rd Rincon, GA 31326",
            region: "GA",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 33.400196,
            lng: -84.628174
        },
        details: {  
            name: "Faith Bible Church",
            address: "4907 Hwy 34 E Sharpsburg, GA 30277",
            region: "GA",
            website: "http://www.faithbiblechurch.us/"
        }
    },
    {  
        coordinates: {
            lat: 34.27831,
            lng: -83.879107
        },
        details: {  
            name: "Grace Covenant Baptist Church of Gainesville, GA",
            address: "Gainesville, GA. 30504",
            region: "GA",
            website: "http://www.gracecovenantbaptist.com/"
        }
    },
    {  
        coordinates: {
            lat: 34.359027,
            lng: -84.036868
        },
        details: {  
            name: "Grace Community Church",
            address: "258 Beartooth Parkway Dawsonville, GA  30534",
            region: "GA",
            website: "http://www.gracechurchdawsonville.org/"
        }
    },
    {  
        coordinates: {
            lat: 34.071654,
            lng: -84.306864
        },
        details: {  
            name: "Grace Church",
            address: "Alpharetta, GA 30009",
            region: "GA",
            website: "http://www.enjoygrace.com/"
        }
    },
    {  
        coordinates: {
            lat: 34.203997,
            lng: -83.457106
        },
        details: {  
            name: "Grace Baptist Mission",
            address: "Commerce, GA 30529",
            region: "GA",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 33.987722,
            lng: -84.248906
        },
        details: {  
            name: "Grace Church of North Atlanta",
            address: "4511 Jones Bridge Circle, N.W.  Norcross, GA 30092",
            region: "GA",
            website: "http://www.gracechurchatlanta.org/"
        }
    },
    {  
        coordinates: {
            lat: 33.53571,
            lng: -84.523592
        },
        details: {  
            name: "Heritage Baptist Church",
            address: "150 Lester Road  Fayetteville, GA  30214",
            region: "GA",
            website: "http://www.heritagerbc.org/"
        }
    },
    {  
        coordinates: {
            lat: 30.765892,
            lng: -81.577099
        },
        details: {  
            name: "New Hope Baptist Church",
            address: "234 8th Street Saint Marys, GA 31558",
            region: "GA",
            website: "http://www.newhopebaptistchurch.wordpress.com/"
        }
    },
    {  
        coordinates: {
            lat: 32.750058,
            lng: -83.770736
        },
        details: {  
            name: "Redeemer Baptist Church",
            address: "6420 Shawn Dr. Lizella, GA 31052",
            region: "GA",
            website: "http://www.redeemer-baptist.org/"
        }
    },
    {  
        coordinates: {
            lat: 31.116224,
            lng: -83.41549
        },
        details: {  
            name: "Sovereign Grace Baptist Church",
            address: "106 Wyoming St. Adel, GA 31620",
            region: "GA",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 31.666612,
            lng: -84.176518
        },
        details: {  
            name: "Sovereign Grace Baptist Church",
            address: "121 Creekside Drive  Leesburg, Georgia 31763",
            region: "GA",
            website: "http://www.sgbcleesburg.com/"
        }
    },
    {  
        coordinates: {
            lat: 33.237887,
            lng: -84.06824
        },
        details: {  
            name: "Trinity Reformed Baptist Church",
            address: "543 Colwell Road Jackson  GA  30233",
            region: "GA",
            website: "http://www.trinityrbc.org/"
        }
    },
    {  
        coordinates: {
            lat: 21.308751,
            lng: -157.836711
        },
        details: {  
            name: "Central Baptist Church",
            address: "1217 Nehoa St. Honolulu, HI 96822",
            region: "HI",
            website: "http://www.centralbaptisthawaii.org/"
        }
    },
    {  
        coordinates: {
            lat: 21.296597,
            lng: -157.798713
        },
        details: {  
            name: "Honolulu Bible Church",
            address: "1844 Palolo Ave Honolulu, HI 96816",
            region: "HI",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 46.400409,
            lng: -117.001189
        },
        details: {  
            name: "Port Cities Reformed Baptist Church",
            address: "Lewiston, Idaho 83501",
            region: "ID",
            website: "http://www.portcitiesreformed.org/"
        }
    },
    {  
        coordinates: {
            lat: 43.573897,
            lng: -116.563572
        },
        details: {  
            name: "Sovereign Grace Fellowship",
            address: "1311 6th St. S. Nampa ID 83651",
            region: "ID",
            website: "http://www.sovereigngracefellowship.org/"
        }
    },
    {  
        coordinates: {
            lat: 42.062493,
            lng: -87.959686
        },
        details: {  
            name: "Bible Baptist Church",
            address: "123 South Busse Rd Mount Prospect, IL 60056",
            region: "IL",
            website: "http://www.kjbbc.org/"
        }
    },
    {  
        coordinates: {
            lat: 40.766036,
            lng: -89.475317
        },
        details: {  
            name: "Christ Bible Church",
            address: "517 Jubilee Lane Germantown Hills, IL  61548",
            region: "IL",
            website: "http://www.christbiblechurch.net/"
        }
    },
    {  
        coordinates: {
            lat: 42.036695,
            lng: -88.277529
        },
        details: {  
            name: "Grace Covenant Church",
            address: "355 E. Chicago St. Elgin, IL 60120",
            region: "IL",
            website: "http://www.gracecovenantchurch.net/"
        }
    },
    {  
        coordinates: {
            lat: 42.336772,
            lng: -89.027526
        },
        details: {  
            name: "Grace Reformed Baptist Church",
            address: "7721 N. Alpine Road  Rockford, IL  61131",
            region: "IL",
            website: "http://www.grbcrockford.org/"
        }
    },
    {  
        coordinates: {
            lat: 41.761418,
            lng: -88.443686
        },
        details: {  
            name: "Heritage of Faith Church",
            address: "Waubonsee Community College Sugar Grove, Illinois",
            region: "IL",
            website: "http://www.heritageoffaith.org/"
        }
    },
    {  
        coordinates: {
            lat: 41.578507,
            lng: -87.82165
        },
        details: {  
            name: "Hope Reformed Baptist Fellowship",
            address: "17171 S. 84th Ave. Tinley Park, IL 60477",
            region: "IL",
            website: "http://www.hopereformedbaptistchurch.com"
        }
    },
    {  
        coordinates: {
            lat: 40.470204,
            lng: -88.967625
        },
        details: {  
            name: "Immanuel Baptist Church",
            address: "811 South Vale Street Bloomington, Illinois 61701",
            region: "IL",
            website: "http://www.immanuelhomepage.org/"
        }
    },
    {  
        coordinates: {
            lat: 41.963837,
            lng: -88.119915
        },
        details: {  
            name: "Living Hope Bible Church ",
            address: "6N171 Gary Avenue Roselle, IL 60172",
            region: "IL",
            website: "http://www.livinghopechurch.net/"
        }
    },
    {  
        coordinates: {
            lat: 41.998443,
            lng: -88.145283
        },
        details: {  
            name: "Iglesia Esperanza",
            address: "7020 Barrington Road Hanover Park, Illinois 60133",
            region: "IL",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 42.22215,
            lng: -87.972034
        },
        details: {  
            name: "New Life Fellowship Church",
            address: "294 Evergreen Drive Vernon Hills, IL 60061",
            region: "IL",
            website: "http://www.newlifevh.org/"
        }
    },
    {  
        coordinates: {
            lat: 41.572728,
            lng: -90.368218
        },
        details: {  
            name: "Sycamore Baptist Church",
            address: "5323 180th Street North  East Moline, IL 61244",
            region: "IL",
            website: "http://www.sycamorebaptistchurch.com/"
        }
    },
    {  
        coordinates: {
            lat: 41.215747,
            lng: -85.802145
        },
        details: {  
            name: "Christ's Covenant Church",
            address: "2090 E. Pierceton Road Winona Lake, IN 46590",
            region: "IN",
            website: "http://www.christscovenant.org/"
        }
    },
    {  
        coordinates: {
            lat: 37.980656,
            lng: -87.404807
        },
        details: {  
            name: "Cornerstone Fellowship",
            address: "3665 Bell Road Newburgh, IN  47630",
            region: "IN",
            website: "http://www.cornerstone-fellowship.org/"
        }
    },
    {  
        coordinates: {
            lat: 40.100852,
            lng: -85.738361
        },
        details: {  
            name: "Edgewood Baptist Church",
            address: "3743 Nichol Avenue Anderson, IN 46011",
            region: "IN",
            website: "http://www.edgewoodbaptistchurch.net/"
        }
    },
    {  
        coordinates: {
            lat: 39.761157,
            lng: -86.811952
        },
        details: {  
            name: "Eternal Grace Baptist Church of New Maysville",
            address: "Bainbridge, Indiana",
            region: "IN",
            website: "http://www.link2000.net/homes/users/preacher/index.html"
        }
    },
    {  
        coordinates: {
            lat: 39.971875,
            lng: -86.11148
        },
        details: {  
            name: "First Baptist Church",
            address: "1010 E. 126th St. Carmel, IN 46033",
            region: "IN",
            website: "http://www.fbccarmel.com/"
        }
    },
    {  
        coordinates: {
            lat: 41.263851,
            lng: -85.851032
        },
        details: {  
            name: "Grace Baptist Fellowship",
            address: "475 Anchorage Road Warsaw, IN 46580",
            region: "IN",
            website: "http://www.gbcwarsaw.com/"
        }
    },
    {  
        coordinates: {
            lat: 41.441968,
            lng: -86.165973
        },
        details: {  
            name: "Grace Fellowship Church",
            address: "535 S. Birkey St Bremen, IN 46506",
            region: "IN",
            website: "http://www.gfcbremen.com/"
        }
    },
    {  
        coordinates: {
            lat: 39.772746,
            lng: -85.754043
        },
        details: {  
            name: "Hancock Reformed Baptist Church",
            address: "944 E. Davis Rd. Greenfield, IN 46140",
            region: "IN",
            website: "http://www.hrbchurch.org/"
        }
    },
    {  
        coordinates: {
            lat: 39.480606,
            lng: -86.054986
        },
        details: {  
            name: "Heritage Reformed Baptist Church",
            address: "Franklin, Indiana 46131",
            region: "IN",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 40.524072,
            lng: -85.681971
        },
        details: {  
            name: "Heritage Bible Fellowship",
            address: "1720 W. 38th St. Marion, IN.  46953",
            region: "IN",
            website: "http://www.heritagebiblefellowship.com/"
        }
    },
    {  
        coordinates: {
            lat: 39.971056,
            lng: -85.973183
        },
        details: {  
            name: "Providence Reformed Baptist Church",
            address: "12550 Promise Creek Ln, Suite 112, Fishers, IN",
            region: "IN",
            website: "http://www.prbcindy.com/"
        }
    },
    {  
        coordinates: {
            lat: 41.965646,
            lng: -92.5768
        },
        details: {  
            name: "Reformed Baptist Church",
            address: "701 State Street Tama, IA 52339",
            region: "IA",
            website: "www.sermonaudio.com/rbctama"
        }
    },
    {  
        coordinates: {
            lat: 39.048942,
            lng: -95.581523
        },
        details: {  
            name: "Reformed Baptist Church of Topeka, KS",
            address: "321 SE Stanton Road Tecumseh, KS 66542",
            region: "KS",
            website: "http://reformingworship.org/main/church/home"
        }
    },
    {  
        coordinates: {
            lat: 39.841259,
            lng: -96.067543
        },
        details: {  
            name: "New Hope Baptist Church",
            address: "882 W. Hwy 36 Seneca, KS 66538",
            region: "KS",
            website: "http://www.sermonaudio.com/newhopeks"
        }
    },
    {  
        coordinates: {
            lat: 38.978972,
            lng: -94.871
        },
        details: {  
            name: "Reformed Baptist Church of Kansas City",
            address: "24450 W. 83rd St. Lenexa, Kansas 66227",
            region: "KS",
            website: "http://www.reformedbaptistkc.org/"
        }
    },
    {  
        coordinates: {
            lat: 39.013101,
            lng: -95.85121
        },
        details: {  
            name: "Trinity Reformed Baptist Church",
            address: "Topeka, KS 66614",
            region: "KS",
            website: "http://www.trinityreformedbaptist.org/"
        }
    },
    {  
        coordinates: {
            lat: 37.80312,
            lng: -87.5712423
        },
        details: {  
            name: "Covenant Baptist Church",
            address: "1021 Market Street, Henderson KY 42420",
            region: "KY",
            website: "http://covenantbaptisthenderson.org/"
        }
    },
    {  
        coordinates: {
            lat: 37.538935,
            lng: -87.258332
        },
        details: {  
            name: "Crossroads Baptist Church",
            address: "Callhoun, KY 42327",
            region: "KY",
            website: "http://www.crossroads-baptist-church.org/"
        }
    },
    {  
        coordinates: {
            lat: 37.752293,
            lng: -87.091346
        },
        details: {  
            name: "Grace Reformed Baptist Church",
            address: "1501 26th St. Owensboro, KY 42303",
            region: "KY",
            website: "http://www.grbco.org/"
        }
    },
    {  
        coordinates: {
            lat: 37.751801,
            lng: -87.053283
        },
        details: {  
            name: "Green River Area Deaf Fellowship",
            address: "3587 Hwy 54 Owensboro, KY 42301",
            region: "KY",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 37.703065,
            lng: -85.864941
        },
        details: {  
            name: "Heritage Baptist Church",
            address: "Elizabethtown, KY",
            region: "KY",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 37.751335,
            lng: -87.039935
        },
        details: {  
            name: "Heritage Baptist Church",
            address: "3585 Thruston-Dermont Rd. Owensboro, KY 42303",
            region: "KY",
            website: "http://www.hbcowensboro.org/"
        }
    },
    {  
        coordinates: {
            lat: 38.189552,
            lng: -85.491414
        },
        details: {  
            name: "Reformed Baptist Church of Louisville",
            address: "3400 Wilderness Trail, Louisville, KY 40299",
            region: "KY",
            website: "http://www.rbclouisville.com/"
        }
    },
    {  
        coordinates: {
            lat: 31.628563,
            lng: -91.834256
        },
        details: {  
            name: "Berean Bible Church",
            address: "2003 Fourth St Jonesville, LA 71343",
            region: "LA",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 30.243354,
            lng: -91.987761
        },
        details: {  
            name: "Covenant Baptist Church",
            address: "1700 E WIllow St Lafayette, LA",
            region: "LA",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 30.864749,
            lng: -91.015625
        },
        details: {  
            name: "First Baptist Church",
            address: "12329 Jackson Street, Clinton, LA 70722",
            region: "LA",
            website: "http://www.fbcclintonla.com/"
        }
    },
    {  
        coordinates: {
            lat: 30.43674,
            lng: -90.559807
        },
        details: {  
            name: "Grace Fellowship Baptist Church",
            address: "26954 LA Highway 42 Springfield, LA 70462",
            region: "LA",
            website: "http://www.gfbcla.com/"
        }
    },
    {  
        coordinates: {
            lat: 31.415457,
            lng: -92.411804
        },
        details: {  
            name: "Providence Baptist Church",
            address: "Ball, LA 71405",
            region: "LA",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 30.28523,
            lng: -89.739611
        },
        details: {  
            name: "Sovereign Grace Fellowship",
            address: "2021 Gause Blvd. East Slidell, LA 70461",
            region: "LA",
            website: "http://www.sgfellowship.org/"
        }
    },
    {  
        coordinates: {
            lat: 30.465158,
            lng: -91.111666
        },
        details: {  
            name: "Trinity Baptist Church",
            address: "1785 Wooddale Court Baton Rouge, Louisiana 70806",
            region: "LA",
            website: "http://www.trinitybaptistreformed.org/"
        }
    },
    {  
        coordinates: {
            lat: 43.711115,
            lng: -70.812086
        },
        details: {  
            name: "Free Baptist Church of Limerick",
            address: "2 Sokokis Trail North Limerick, ME   04048",
            region: "ME",
            website: "http://www.lfbcreformed.org/"
        }
    },
    {  
        coordinates: {
            lat: 43.93172,
            lng: -69.96387
        },
        details: {  
            name: "Grace Community Church",
            address: "47 Pleasant St, Topsham, ME 04086",
            region: "ME",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 39.485981,
            lng: -77.350802
        },
        details: {  
            name: "Faith Reformed Baptist Church",
            address: "40 Main St. Walkersville, MD",
            region: "MD",
            website: "http://www.faithrbc.com/"
        }
    },
    {  
        coordinates: {
            lat: 39.060823,
            lng: -76.719142
        },
        details: {  
            name: "Grace Baptist Church of Odenton",
            address: "2641 Strawberry Lake Way Odenton, MD  21113",
            region: "MD",
            website: "http://www.gracebaptistonline.com/"
        }
    },
    {  
        coordinates: {
            lat: 39.454299,
            lng: -76.451261
        },
        details: {  
            name: "New Life Community Church",
            address: "6433 Mt Vista Rd  Kingsville MD 21087",
            region: "MD",
            website: "http://www.newlifemd.org/"
        }
    },
    {  
        coordinates: {
            lat: 42.462818,
            lng: -70.980669
        },
        details: {  
            name: "Austin Square Baptist Church",
            address: "10 Keslar Ave. Lynn, MA 01905",
            region: "MA",
            website: "http://www.austinsquarechurch.com/"
        }
    },
    {  
        coordinates: {
            lat: 42.526705,
            lng: -71.761179
        },
        details: {  
            name: "First Baptist Church",
            address: "23 West St. Leominster, MA 01453",
            region: "MA",
            website: "http://www.thewordoftruth.net/"
        }
    },
    {  
        coordinates: {
            lat: 41.682315,
            lng: -71.031387
        },
        details: {  
            name: "First Church of Hixville",
            address: "1190 N. Hixville Rd. N. Dartmouth, MA 02747",
            region: "MA",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 42.0439468,
            lng: -70.754648
        },
        details: {  
            name: "Pilgrim Reformed Bible Church",
            address: "245 Summer St. Duxbury, MA 02332",
            region: "MA",
            website: "http://pilgrimreformed.weebly.com/"
        }
    },
    {  
        coordinates: {
            lat: 42.855568,
            lng: -70.976802
        },
        details: {  
            name: "Grace Reformed Baptist Church",
            address: "98 Kimball Road Amesbury, MA 01913",
            region: "MA",
            website: "http://www.netministries.org/see/churches/ch01846"
        }
    },
    {  
        coordinates: {
            lat: 42.232119,
            lng: -71.793751
        },
        details: {  
            name: "Heritage Baptist Church",
            address: "59 Blackstone River Dr. Worcester, MA 01607",
            region: "MA",
            website: "http://www.hbcma.org/"
        }
    },
    {  
        coordinates: {
            lat: 42.125544,
            lng: -71.321254
        },
        details: {  
            name: "Providence Baptist Church",
            address: "80 Boardman Street Norfolk, MA 02056",
            region: "MA",
            website: "http://www.providencebaptistchurchma.org/"
        }
    },
    {  
        coordinates: {
            lat: 41.827429,
            lng: -71.23752
        },
        details: {  
            name: "Rehoboth Baptist Church",
            address: "132 Moulton St. Rehoboth, MA 02769",
            region: "MA",
            website: "http://www.rehobothbaptistchurch.org/"
        }
    },
    {  
        coordinates: {
            lat: 42.566551,
            lng: -73.02827
        },
        details: {  
            name: "Sovereign Grace Baptist Church",
            address: "664 Main Road Savoy, Massachussetts 01256",
            region: "MA",
            website: "http://bcn.net/~wmplenge"
        }
    },
    {  
        coordinates: {
            lat: 42.276089,
            lng: -83.474815
        },
        details: {  
            name: "Grace Baptist Church",
            address: "4075 S. Sheldon Rd. Canton, MI 48188",
            region: "MI",
            website: "http://www.sermon.org/"
        }
    },
    {  
        coordinates: {
            lat: 42.977995,
            lng: -85.607146
        },
        details: {  
            name: "Grace Immanuel Reformed Baptist Church",
            address: "860 Peachcrest Ct. NE Grand Rapids  Michigan 49505",
            region: "MI",
            website: "http://www.girbc.org/"
        }
    },
    {  
        coordinates: {
            lat: 42.799853,
            lng: -86.119963
        },
        details: {  
            name: "Harbor Reformed Baptist Church",
            address: "269 Douglas Ave.  Holland, MI 49424",
            region: "MI",
            website: "http://www.harborchurchholland.org/"
        }
    },
    {  
        coordinates: {
            lat: 41.896812,
            lng: -84.03095
        },
        details: {  
            name: "Reformed Baptist Church of Lenawee",
            address: "121 S. Locust Street Adrian, MI 49221",
            region: "MI",
            website: "http://www.reformedbaptistchurchlenawee.com/"
        }
    },
    {  
        coordinates: {
            lat: 44.898095,
            lng: -93.259926
        },
        details: {  
            name: "Providence Reformed Baptist Church",
            address: "1010 East 58th Street Minneapolis, MN 55417",
            region: "MN",
            website: "http://www.reformedbaptistmn.org/"
        }
    },
    {  
        coordinates: {
            lat: 44.05436,
            lng: -91.651577
        },
        details: {  
            name: "Renewing Grace Fellowship",
            address: "558 W. Fifth St. Winona, MN  55987",
            region: "MN",
            website: "http://www.renewinggrace.org/"
        }
    },
    {  
        coordinates: {
            lat: 31.694456,
            lng: -89.14069
        },
        details: {  
            name: "Audubon Drive Bible Church",
            address: "Laurel, MS 39441",
            region: "MS",
            website: "http://www.audubonchurch.org/"

      }
    },
    {  
        coordinates: {
            lat: 34.900725,
            lng: -89.919921
        },
        details: {  
            name: "Bridgetown Baptist Church",
            address: "2779 Malone Rd. N. Nesbit, MS  38651",
            region: "MS",
            website: "http://www.bridgetownbaptist.org/"
        }
    },
    {  
        coordinates: {
            lat: 33.493732,
            lng: -88.380537
        },
        details: {  
            name: "Christ Community Reformed Baptist Church",
            address: "146 South McCrary Road P.O. Box 446, Columbus, MS. 39703",
            region: "MS",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 34.96176,
            lng: -89.829532
        },
        details: {  
            name: "Christ Covenant Church",
            address: "Olive Branch, MS 38654",
            region: "MS",
            website: "http://www.christcovenantob.org/"
        }
    },
    {  
        coordinates: {
            lat: 30.968814,
            lng: -89.130139
        },
        details: {  
            name: "Cross Roads Baptist Church",
            address: "2 Ashe Nursery Road Wiggins, MS 39577",
            region: "MS",
            website: "http://www.crossroadsfamily.org/"
        }
    },
    {  
        coordinates: {
            lat: 32.331502,
            lng: -90.268079
        },
        details: {  
            name: "Grace Baptist Church",
            address: "5422 Clinton Blvd. Jackson, MS  39209",
            region: "MS",
            website: "http://www.gracejackson.net/"

      }
    },
    {  
        coordinates: {
            lat: 42.710189,
            lng: -71.170716
        },
        details: {  
            name: "Iglesia Bautista Biblica",
            address: "3 Green St Lawrence, MS 01841",
            region: "MS",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 37.029107,
            lng: -93.202333
        },
        details: {  
            name: "Grace Baptist Church",
            address: "1005 North 4th Avenue Ozark, MO 65721",
            region: "MO",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 38.406717,
            lng: -90.375762
        },
        details: {  
            name: "Rockport Baptist Church",
            address: "3761 Telegraph Rd Arnold, MO  63010",
            region: "MO",
            website: "http://www.rockportbaptist.org/"
        }
    },
    {  
        coordinates: {
            lat: 37.138805,
            lng: -93.342844
        },
        details: {  
            name: "South Creek Church",
            address: "3145 W. Republic Road Springfield, Missouri, 65807",
            region: "MO",
            website: "http://www.southcreekchurch.org/"
        }
    },
    {  
        coordinates: {
            lat: 37.110008,
            lng: -94.493047
        },
        details: {  
            name: "Sovereign Grace Baptist Church",
            address: "2225 N. St. Charles, MO 64801",
            region: "MO",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 47.107472,
            lng: -112.123114
        },
        details: {  
            name: "Wolf Creek Baptist Church",
            address: "Wolf Creek, MT  59648",
            region: "MT",
            website: "http://www.wolfcreekbaptist.com"
        }
    },
    {  
        coordinates: {
            lat: 41.150411,
            lng: -96.041144
        },
        details: {  
            name: "Grace Baptist Church",
            address: "205 E. Halleck St. Papillion, NE 68046",
            region: "NE",
            website: "http://www.gbcpapillion.org/"
        }
    },
    {  
        coordinates: {
            lat: 39.633278,
            lng: -119.907667
        },
        details: {  
            name: "City On A Hill Church",
            address: "7808 Anchor Point Dr. Reno, NV 89506",
            region: "NV",
            website: "http://www.cityonahillreno.org/"
        }
    },
    {  
        coordinates: {
            lat: 39.491523,
            lng: -119.801229
        },
        details: {  
            name: "Community Bible Church",
            address: "333 W. Moana Lane Reno NV 89506",
            region: "NV",
            website: "http://www.cbcreno.net/"
        }
    },
    {  
        coordinates: {
            lat: 39.006051,
            lng: -119.761126
        },
        details: {  
            name: "Grace Community Church",
            address: "2320 Heybourne Rd Minden, NV  89423",
            region: "NV",
            website: "http://gracenevada.com/"
        }
    },
    {  
        coordinates: {
            lat: 42.984789,
            lng: -70.969384
        },
        details: {  
            name: "Calvary Baptist Church (Reformed) ",
            address: "12 Little River Road Exeter, New Hampshire 03833",
            region: "NH",
            website: "http://cbcexeter.sermonaudio.com/"
        }
    },
    {  
        coordinates: {
            lat: 43.726034,
            lng: -72.142917
        },
        details: {  
            name: "Christ Redeemer Church",
            address: "P.O. Box 5523, Hanover, NH 03755",
            region: "NH",
            website: "http://www.christredeemerchurch.org/"
        }
    },
    {  
        coordinates: {
            lat: 43.170315,
            lng: -71.533531
        },
        details: {  
            name: "Faith Bible Church",
            address: "515 South Street Bow, NH",
            region: "NH",
            website: "http://faithbiblechurchnh.org/"

      }
    },
    {  
        coordinates: {
            lat: 43.332907,
            lng: -71.653398
        },
        details: {  
            name: "Sovereign Grace Fellowship",
            address: "235 High Street Boscawen, NH 03303",
            region: "NH",
            website: "http://www.sovgracenh.com/"
        }
    },
    {  
        coordinates: {
            lat: 42.991798,
            lng: -72.415156
        },
        details: {  
            name: "Westmoreland Reformed Bible Church",
            address: "33 Capron Road Westmoreland, NH 03467",
            region: "NH",
            website: "http://www.netministries.org/see/churches.exe/ch01426"
        }
    },
    {  
        coordinates: {
            lat: 40.935099,
            lng: -74.019028
        },
        details: {  
            name: "Bread of Life Fellowship",
            address: "New Milford, NJ 07646",
            region: "NJ",
            website: "http://www.bolfellowship.org/"
        }
    },
    {  
        coordinates: {
            lat: 40.464606,
            lng: -74.47567
        },
        details: {  
            name: "Christian Fellowship Church",
            address: "1212 Livingston Ave North Brunswick, NJ 08902",
            region: "NJ",
            website: "http://www.cfcnb.org/"

      }
    },
    {  
        coordinates: {
            lat: 39.9605,
            lng: -74.8067
        },
        details: {  
            name: "Covenant Baptist Church ",
            address: "528 Main Street  Lumberton, NJ  08048",
            region: "NJ",
            website: "http://www.cbc-lumberton.org/"
        }
    },
    {  
        coordinates: {
            lat: 40.906872,
            lng: -73.974338
        },
        details: {  
            name: "Englewood Baptist Church",
            address: "320 Tenafly Road  Englewood, NJ 07631",
            region: "NJ",
            website: "http://www.ebcnj.com/"
        }
    },
    {  
        coordinates: {
            lat: 40.739928,
            lng: -74.234761
        },
        details: {  
            name: "Grace Reformed Baptist Church",
            address: "643 Sandford Ave.  Newark, NJ 07106",
            region: "NJ",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 39.855436,
            lng: -74.923952
        },
        details: {  
            name: "Grace Reformed Fellowship Church",
            address: "329 Kresson Gibbsboro Rd Voorhees, NJ  08043",
            region: "NJ",
            website: "http://www.gracereformedfellowshipchurch.org/"
        }
    },
    {  
        coordinates: {
            lat: 40.511081,
            lng: -74.862116
        },
        details: {  
            name: "Grace Covenant Baptist Church",
            address: "35 Court St.  Flemington, NJ 08822",
            region: "NJ",
            website: "http://www.gcbcnj.org/"
        }
    },
    {  
        coordinates: {
            lat: 40.790781,
            lng: -74.028175
        },
        details: {  
            name: "Iglesia Bautista Reformada",
            address: "5510 Tonnelle Avenue  North Bergen, NJ 07047",
            region: "NJ",
            website: "http://www.ibrnb.com/iglesia"
        }
    },
    {  
        coordinates: {
            lat: 41.099523,
            lng: -74.686814
        },
        details: {  
            name: "Reformed Baptist Church of Lafayette",
            address: "28 Meadows Road  Lafayette, NJ 07848",
            region: "NJ",
            website: "http://www.rbclafayette.org/"

      }
    },
    {  
        coordinates: {
            lat: 40.891468,
            lng: -74.365156
        },
        details: {  
            name: "Trinity Baptist Church of Montville",
            address: "160 Changebridge Rd  Montville, NJ 07045",
            region: "NJ",
            website: "http://www.trinitymontville.org/"
        }
    },
    {  
        coordinates: {
            lat: 35.038436,
            lng: -106.678313
        },
        details: {  
            name: "Albuquerque Sovereign Grace Baptist Church",
            address: "1534 Blake Rd.  SW Albuquerque, New Mexico  87105",
            region: "NM",
            website: "http://www.albuquerquesovereigngrace.org/"
        }
    },
    {  
        coordinates: {
            lat: 34.788568,
            lng: -106.740128
        },
        details: {  
            name: "Church of the Redeemer",
            address: "1715 Hwy 314 Los Lunas, NM 87016",
            region: "NM",
            website: "http://www.churchoftheredeemerll.org/"
        }
    },
    {  
        coordinates: {
            lat: 31.867698,
            lng: -106.649583
        },
        details: {  
            name: "Santa Teresa Baptist Church",
            address: "PO Box 1524, 5750 McNutt Road Santa Teresa, NM 88008",
            region: "NM",
            website: "http://www.stbcweb.org/"
        }
    },
    {  
        coordinates: {
            lat: 42.663255,
            lng: -73.842678
        },
        details: {  
            name: "Albany Baptist Church",
            address: "361 Krumkill Road Slingerlands, New York 12159",
            region: "NY",
            website: "http://www.albanybaptist.net/"
        }
    },
    {  
        coordinates: {
            lat: 42.219212,
            lng: -73.989182
        },
        details: {  
            name: "Amazing Grace Church",
            address: "5073 Route 32 Catskill, NY  12414",
            region: "NY",
            website: "http://www.amazinggracecatskill.org/"
        }
    },
    {  
        coordinates: {
            lat: 42.912996,
            lng: -73.877722
        },
        details: {  
            name: "Ballston Lake Baptist Church",
            address: "1 Edward Street Ballston Lake, NY 12019",
            region: "NY",
            website: "http://www.blbc.org/"

      }
    },
    {  
        coordinates: {
            lat: 43.019077,
            lng: -74.028705
        },
        details: {  
            name: "Bible Baptist Church of Galway",
            address: "2095 East Street, Galway NY 12074",
            region: "NY",
            website: "http://galwaybaptist.com/"

      }
    },
    {  
        coordinates: {
            lat: 42.365949,
            lng: -75.679271
        },
        details: {  
            name: "Brisben Baptist Church ",
            address: "2717 State HWY 12 Oxford, NY 13830",
            region: "NY",
            website: "http://netministries.org/see/churches/ch01276"
        }
    },
    {  
        coordinates: {
            lat: 43.232168,
            lng: -77.926119
        },
        details: {  
            name: "Clarkson Community Church",
            address: "8339 Ridge Rd. W. Brockport, NY 14420",
            region: "NY",
            website: "http://www.clarksonchurch.com/"
        }
    },
    {  
        coordinates: {
            lat: 42.864063,
            lng: -73.795134
        },
        details: {  
            name: "Clifton Park Community Church",
            address: "516 Moe Road Clifton Park, NY 12065",
            region: "NY",
            website: "http://www.cliftonparkcommunitychurch.org/"
        }
    },
    {  
        coordinates: {
            lat: 40.991301,
            lng: -72.533408
        },
        details: {  
            name: "Faith Reformed Baptist Church",
            address: "13000 Main Road Mattituck, NY 11952",
            region: "NY",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 43.100431,
            lng: -74.770646
        },
        details: {  
            name: "Grace Baptist Church of Dolgeville",
            address: "12 Van Buren Street Dolgeville, NY 13329",
            region: "NY",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 42.574547,
            lng: -77.710714
        },
        details: {  
            name: "Grace Baptist Church",
            address: "9316 Main St Dansville, NY 14437",
            region: "NY",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 43.204279,
            lng: -77.542687
        },
        details: {  
            name: "Grace Baptist Church",
            address: "2229 Bay Shore Blvd. Rochester, NY 14622",
            region: "NY",
            website: "http://www.vor.org/gbcofrochester"
        }
    },
    {  
        coordinates: {
            lat: 41.608149,
            lng: -74.29904
        },
        details: {  
            name: "Grace Reformed Baptist Church",
            address: "Pinebush, NY 12566",
            region: "NY",
            website: "http://www.gracerbc.org/"
        }
    },
    {  
        coordinates: {
            lat: 40.666595,
            lng: -73.554912
        },
        details: {  
            name: "Grace Reformed Baptist Church of Long Island",
            address: "36 Smith Street Merrick, NY 11566",
            region: "NY",
            website: "http://www.gracereformedbaptistchurch.com/"
        }
    },
    {  
        coordinates: {
            lat: 40.843183,
            lng: -72.99241
        },
        details: {  
            name: "Hope Reformed Baptist Church",
            address: "3239 Rte 112, Ste 2 Medford, New York  11763",
            region: "NY",
            website: "http://www.hopereformedli.net/"

      }
    },
    {  
        coordinates: {
            lat: 41.372912,
            lng: -73.765686
        },
        details: {  
            name: "Red Mills Baptist Church",
            address: "531 Rt. 6N P.O. Box 93 Mahopac Falls, NY 10542",
            region: "NY",
            website: "http://www.redmillsbaptist.org/"
        }
    },
    {  
        coordinates: {
            lat: 42.936345,
            lng: -78.844911
        },
        details: {  
            name: "Refreshing Springs Church",
            address: "34 Elam Place Buffalo, N.Y. 14214",
            region: "NY",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 43.222955,
            lng: -76.522434
        },
        details: {  
            name: "Sovereign Grace Baptist Church of Baldwinsville",
            address: "3301 Ira Hill Rd. Cato, NY 13033",
            region: "NY",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 42.725242,
            lng: -76.5194
        },
        details: {  
            name: "Venice Baptist Church",
            address: "2465 Stewarts Corners Road Venice Center, NY 13147",
            region: "NY",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 44.330002,
            lng: -75.480426
        },
        details: {  
            name: "West Side Baptist Church",
            address: "59 Smith Street Gouverneur, NY 13642",
            region: "NY",
            website: "http://www.west-side-baptist.com/"
        }
    },
    {  
        coordinates: {
            lat: 34.818762,
            lng: -77.559851
        },
        details: {  
            name: "Catherine Lake Baptist Church",
            address: "2064 Catherine Lake Road Richlands, NC 28574",
            region: "NC",
            website: "http://www.catherinelakebaptist.com/"
        }
    },
    {  
        coordinates: {
            lat: 35.33864,
            lng: -82.459097
        },
        details: {  
            name: "Christ Covenant Community Church",
            address: "2065 N Main St  Hendersonville, NC 28792",
            region: "NC",
            website: "http://www.christcovenantcommunity.org/"
        }
    },
    {  
        coordinates: {
            lat: 35.124957,
            lng: -80.818867
        },
        details: {  
            name: "Covenant Reformed Baptist Church",
            address: "6611 Old Highway 86 N. Providence, NC 27315",
            region: "NC",
            website: "http://www.covenantcaswell.org/"
        }
    },
    {  
        coordinates: {
            lat: 35.440222,
            lng: -82.505967
        },
        details: {  
            name: "Crosspoint Church",
            address: "235 St Johns Road Fletcher, NC 28732",
            region: "NC",
            website: "http://crosspointasheville.org/"
        }
    },
    {  
        coordinates: {
            lat: 35.301846,
            lng: -82.432995
        },
        details: {  
            name: "East Hendersonville Baptist Church",
            address: "1010  Shepherd Street  Hendersonville, NC  28792",
            region: "NC",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 35.51734,
            lng: -82.970402
        },
        details: {  
            name: "First Reformed Baptist Church",
            address: "Hwy 19 and Dellwood Road  Waynesville, NC 28786",
            region: "NC",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 35.051371,
            lng: -78.939499
        },
        details: {  
            name: "Grace Fellowship Church",
            address: "817 South McPherson Church Road Fayetteville, NC. 28303",
            region: "NC",
            website: "http://www.gracecharlotte.org/"
        }
    },
    {  
        coordinates: {
            lat: 36.084021,
            lng: -79.277487
        },
        details: {  
            name: "Grace Reformed Baptist Church",
            address: "939 South Third Street Mebane, NC 27302",
            region: "NC",
            website: "http://www.grbc.net/"
        }
    },
    {  
        coordinates: {
            lat: 35.994608,
            lng: -77.874244
        },
        details: {  
            name: "Grace Reformed Baptist Church of Rocky Mount",
            address: "5645 Hunter Hill Road Rocky Mount, North Carolina",
            region: "NC",
            website: "http://gracereformedbaptist.org/home"
        }
    },
    {  
        coordinates: {
            lat: 35.228769,
            lng: -82.751334
        },
        details: {  
            name: "Grace Tabernacle Reformed Baptist Church",
            address: "Cashiers Valley Road  Brevard, NC 28712",
            region: "NC",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 35.262082,
            lng: -81.1873
        },
        details: {  
            name: "Heritage Community Church",
            address: "Gastonia, NC",
            region: "NC",
            website: "http://www.heritagecommunitychurch.net/"
        }
    },
    {  
        coordinates: {
            lat: 36.078188,
            lng: -79.407479
        },
        details: {  
            name: "North Garham Baptist Church ",
            address: "721 Washington St. Graham, NC 27253",
            region: "NC",
            website: "http://www.northgrahambaptist.org/"
        }
    },
    {  
        coordinates: {
            lat: 36.532477,
            lng: -79.796461
        },
        details: {  
            name: "Reformed Community Church of Eden",
            address: "8745 Hwy 14 Eden, NC 27288",
            region: "NC",
            website: "http://www.reformedchurchofeden.org/"
        }
    },
    {  
        coordinates: {
            lat: 36.124034,
            lng: -80.243663
        },
        details: {  
            name: "Sovereign Grace Chapel",
            address: "2712 Bon Air Avenue Winston-Salem, NC 27105",
            region: "NC",
            website: "http://www.sgchapel.org/"
        }
    },
    {  
        coordinates: {
            lat: 35.05805,
            lng: -78.947927
        },
        details: {  
            name: "Sovereign Grace Fellowship",
            address: "430 S. McPherson Church Road Fayetteville, NC  28303",
            region: "NC",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 36.155758,
            lng: -81.162554
        },
        details: {  
            name: "Word of Grace Baptist Church",
            address: "1915 West Park North Wilkesboro, NC 28659",
            region: "NC",
            website: "http://www.wordofgracebaptistchurch.org/"
        }
    },
    {  
        coordinates: {
            lat: 46.826179,
            lng: -96.820844
        },
        details: {  
            name: "Community Baptist Church",
            address: "3535 25th Street SW Fargo, North Dakota 58104",
            region: "ND",
            website: "http://www.cbcfargo.com/"
        }
    },
    {  
        coordinates: {
            lat: 40.053483,
            lng: -82.718799
        },
        details: {  
            name: "Faith Bible Church ",
            address: "12239 Morse Rd.  SW Pataskala, OH 43062",
            region: "OH",
            website: "http://www.faithbibleohio.com/"
        }
    },
    {  
        coordinates: {
            lat: 39.12866,
            lng: -82.981328
        },
        details: {  
            name: "Grace Community Church",
            address: "313 West 2nd Street Waverly, Ohio 45690",
            region: "OH",
            website: "http://www.gccwaverly.net/"
        }
    },
    {  
        coordinates: {
            lat: 40.888604,
            lng: -83.661781
        },
        details: {  
            name: "Grace Bible Church",
            address: "400 Powell Drive Arlington, OH 45814",
            region: "OH",
            website: "http://www.gracechurcharlington.org/"
        }
    },
    {  
        coordinates: {
            lat: 40.37859,
            lng: -82.574737
        },
        details: {  
            name: "Grace Bible Church",
            address: "9524 New Delaware Rd.  Mt. Vernon, Ohio 43050",
            region: "OH",
            website: "http://www.christianpublisher.com/"
        }
    },
    {  
        coordinates: {
            lat: 41.384271,
            lng: -81.878323
        },
        details: {  
            name: "Grace Covenant Church",
            address: "24430 Nobottom Rd. Olmsted Falls, OH 44138",
            region: "OH",
            website: "http://gracecovenantcleveland.com/"
        }
    },
    {  
        coordinates: {
            lat: 39.332334,
            lng: -82.981887
        },
        details: {  
            name: "Grace Reformed Fellowship",
            address: "43 South Paint Street  Chillicothe, Ohio 45601",
            region: "OH",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 40.908093,
            lng: -81.402269
        },
        details: {  
            name: "Heritage Reformed Baptist Church",
            address: "3077 Mt. Pleasant St. NW North Canton, OH 44720",
            region: "OH",
            website: "http://www.heritagerbc.com/"
        }
    },
    {  
        coordinates: {
            lat: 39.753584,
            lng: -84.043422
        },
        details: {  
            name: "Kemp Road Baptist Church",
            address: "2991 Kemp Road  Dayton, OH 45431",
            region: "OH",
            website: "http://www.kemproadbaptist.com/"
        }
    },
    {  
        coordinates: {
            lat: 41.516483,
            lng: -83.432676
        },
        details: {  
            name: "Lemoyne Baptist Church",
            address: "25020 Bradner Road Genoa, OH 43430",
            region: "OH",
            website: "http://www.lemoynebaptist.org/"
        }
    },
    {  
        coordinates: {
            lat: 41.723256,
            lng: -83.635827
        },
        details: {  
            name: "Providence Reformed Baptist Church",
            address: "5926 Meteor Avenue Toledo, Ohio 43623",
            region: "OH",
            website: "http://www.prbctoledo.org/"
        }
    },
    {  
        coordinates: {
            lat: 36.278535,
            lng: -95.851463
        },
        details: {  
            name: "Bethel Baptist Church",
            address: "86th and Cedar Street North Owasso, OK  74055",
            region: "OK",
            website: "http://www.bethelowasso.com/"
        }
    },
    {  
        coordinates: {
            lat: 36.148799,
            lng: -96.202954
        },
        details: {  
            name: "Calvary Baptist Church",
            address: "18807 West Wekiwa Road Sand Springs, OK.  74063",
            region: "OK",
            website: "http://www.calvarybaptistss.com/"
        }
    },
    {  
        coordinates: {
            lat: 34.57978,
            lng: -97.863545
        },
        details: {  
            name: "Gatlin Baptist Church",
            address: "801 W. Gatlin Road Marlow, OK 73055",
            region: "OK",
            website: "http://www.gatlinbaptist.com/"
        }
    },
    {  
        coordinates: {
            lat: 36.141674,
            lng: -95.894178
        },
        details: {  
            name: "Grace Bible Church",
            address: "7415 E. 15th Street Tulsa, OK    74145",
            region: "OK",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 35.551435,
            lng: -97.518068
        },
        details: {  
            name: "Grace Bible Church",
            address: "241 W. Wilshire Blvd Oklahoma City, OK 73116",
            region: "OK",
            website: "http://www.gbcok.org/"
        }
    },
    {  
        coordinates: {
            lat: 36.799855,
            lng: -95.939202
        },
        details: {  
            name: "Grace Baptist Church of Bartlesville-Dewey",
            address: "802 N Cherokee Dewey, Oklahoma 74029",
            region: "OK",
            website: "http://www.gracebaptistchurchbville.com/index.html"

      }
    },
    {  
        coordinates: {
            lat: 36.269539,
            lng: -95.854712
        },
        details: {  
            name: "Grace Baptist Church of Owasso",
            address: "Owasso, OK 74055",
            region: "OK",
            website: "http://www.graceowasso.com/"
        }
    },
    {  
        coordinates: {
            lat: 34.795569,
            lng: -96.962324
        },
        details: {  
            name: "Messiah Fellowship Bible Church",
            address: "101 East Main Street Stratford, OK 74872",
            region: "OK",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 35.50808,
            lng: -97.597282
        },
        details: {  
            name: "Northwest Bible Church",
            address: "4301 NW 36th St. Oklahoma City, OK",
            region: "OK",
            website: "http://www.nwbcokc.org/"
        }
    },
    {  
        coordinates: {
            lat: 34.774531,
            lng: -96.678345
        },
        details: {  
            name: "Sovereign Grace Bible Church",
            address: "Ada, OK  74820",
            region: "OK",
            website: "http://www.sgbca.org/"
        }
    },
    {  
        coordinates: {
            lat: 34.605900 ,
            lng: -98.427459
        },
        details: {  
            name: "Lawton Indian Baptist Church",
            address: "2502 SW B Ave., Lawton, OK 73505",
            region: "OK",
            website: "http://lawtonindian.com/"
        }
    },
    {  
        coordinates: {
            lat: 45.245845,
            lng: -123.112165
        },
        details: {  
            name: "Bible Baptist Church of Lafayette",
            address: "514 Market Streets Lafayette, OR. 97127",
            region: "OR",
            website: "http://www.sites.onlinemac.com/alanr"
        }
    },
    {  
        coordinates: {
            lat: 44.392169,
            lng: -122.729866
        },
        details: {  
            name: "Elm Street Baptist Church",
            address: "1150 Elm St. PO Box 461 Sweet Home, OR  97386",
            region: "OR",
            website: "http://www.elmstreetbaptistchurch.org/"
        }
    },
    {  
        coordinates: {
            lat: 45.483789,
            lng: -122.726477
        },
        details: {  
            name: "Glencullen Baptist Church",
            address: "4747 SW Cameron Rd.  Portland, Oregon 97221",
            region: "OR",
            website: "http://www.sermonaudio.com/glencullen"
        }
    },
    {  
        coordinates: {
            lat: 45.33585,
            lng: -118.093457
        },
        details: {  
            name: "Grace Bible Church",
            address: "1114 Y Avenue La Grande, OR 97850",
            region: "OR",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 45.50976,
            lng: -123.864415
        },
        details: {  
            name: "Christ Reformation Church",
            address: "7450 Alderbrook Rd. Tillamook, OR  97141",
            region: "OR",
            website: "http://www.christreformationchurch.com/"
        }
    },
    {  
        coordinates: {
            lat: 43.366501,
            lng: -124.21789
        },
        details: {  
            name: "Mariners Reformed Baptist Church",
            address: "Coos Bay, Oregon  97420",
            region: "OR",
            website: "http://www.marinersreformedbaptist.org/index.htm"
        }
    },
    {  
        coordinates: {
            lat: 45.324848,
            lng: -122.974981
        },
        details: {  
            name: "Sovereign Grace Bible Church",
            address: "501 Foothills Drive Newberg, OR 97132",
            region: "OR",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 44.475537,
            lng: -122.810823
        },
        details: {  
            name: "Sovereign Grace Bible Church",
            address: "30375 Fairview Road  Lebanon, Oregon, 97355",
            region: "OR",
            website: "http://www.sovereigngracebible.com/"
        }
    },
    {  
        coordinates: {
            lat: 41.321742,
            lng: -75.308151
        },
        details: {  
            name: "Bible Fellowship Church of Greentown",
            address: "103 Blue Heron Drive, Greentown, PA",
            region: "PA",
            website: "https://bfcgreentown.com/"
        }
    },
    {  
        coordinates: {
            lat: 39.894833,
            lng: -79.730334
        },
        details: {  
            name: "Covenant Baptist Church",
            address: "148 Union Street Uniontown, PA  15401",
            region: "PA",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 39.873702,
            lng: -75.797114
        },
        details: {  
            name: "Emmanuel Reformed Baptist Church ",
            address: "302 Lamborntown Road West Grove, PA",
            region: "PA",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 39.929482,
            lng: -75.382579
        },
        details: {  
            name: "Faith Reformed Baptist Church",
            address: "110 Old State Rd. Media, PA  19063",
            region: "PA",
            website: "http://www.faithchurchpa.org/"
        }
    },
    {  
        coordinates: {
            lat: 40.889382,
            lng: -76.797171
        },
        details: {  
            name: "First Regular Baptist Church",
            address: "Second st and Queen Street Northumberland, PA  17857",
            region: "PA",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 39.970189,
            lng: -77.632623
        },
        details: {  
            name: "Grace Baptist Church",
            address: "2475 McCleary Drive Chambersburg, PA",
            region: "PA",
            website: "http://www.gbcchambersburg.org/"
        }
    },
    {  
        coordinates: {
            lat: 40.001873,
            lng: -75.724346
        },
        details: {  
            name: "Grace Church",
            address: "111 Lloyd Avenue Downingtown, PA 19335",
            region: "PA",
            website: "http://www.gracechurchdowningtown.org/"
        }
    },
    {  
        coordinates: {
            lat: 41.023241,
            lng: -75.184581
        },
        details: {  
            name: "Grace Covenant Church",
            address: "1 Fawn Road East Stroudsburg, PA  18301",
            region: "PA",
            website: "http://gracecovenantpa.org/"
        }
    },
    {  
        coordinates: {
            lat: 40.206401,
            lng: -77.207278
        },
        details: {  
            name: "Grace Baptist Church of Carlisle",
            address: "777 West North Street Carlisle, PA 17013",
            region: "PA",
            website: "http://www.gracebaptistcarlisle.org/"
        }
    },
    {  
        coordinates: {
            lat: 40.774852,
            lng: -77.790281
        },
        details: {  
            name: "Grace Fellowship Church",
            address: "130 S. Academy St. Boalsburg, PA 16827",
            region: "PA",
            website: "http://www.gracereformedbaptist.com"
        }
    },
    {  
        coordinates: {
            lat: 40.979959,
            lng: -76.008144
        },
        details: {  
            name: "Grace Fellowship Church",
            address: "27 Pecora Blvd. Hazle Township, PA 18202",
            region: "PA",
            website: "http://www.www.gfchazleton.org/"
        }
    },
    {  
        coordinates: {
            lat: 40.179817,
            lng: -76.178839
        },
        details: {  
            name: "Immanuel Free Reformed Church",
            address: "Ephrata, Pennsylvania",
            region: "PA",
            website: "http://www.immanuelfrc.org/"
        }
    },
    {  
        coordinates: {
            lat: 40.684012,
            lng: -80.108633
        },
        details: {  
            name: "Liberty Baptist Church",
            address: "1308 Freedom Road, Cranberry Township, PA 16066",
            region: "PA",
            website: "http://www.lbref.org/"
        }
    },
    {  
        coordinates: {
            lat: 40.037801,
            lng: -75.126764
        },
        details: {  
            name: "Olney Baptist Church",
            address: "239 West Chew Avenue  Philadelphia PA 19120",
            region: "PA",
            website: "http://olneybaptist.org/"
        }
    },
    {  
        coordinates: {
            lat: 42.015653,
            lng: -80.18922
        },
        details: {  
            name: "Providence Reformed Baptist Church",
            address: "6467 Sterrettania Road Fairview, PA 16415",
            region: "PA",
            website: "http://www.prbcerie.org/"
        }
    },
    {  
        coordinates: {
            lat: 40.212876,
            lng: -75.102851
        },
        details: {  
            name: "Providence Reformed Baptist Church",
            address: "800 York Road Warminster, PA",
            region: "PA",
            website: "http://www.prbchurch.com/"

      }
    },
    {  
        coordinates: {
            lat: 40.311307,
            lng: -75.36698
        },
        details: {  
            name: "Reformed Baptist Church of Franconia",
            address: "644 Allentown Road Franconia, PA 18969",
            region: "PA",
            website: "http://www.rbcfranconia.org/"
        }
    },
    {  
        coordinates: {
            lat: 40.312614,
            lng: -77.2291
        },
        details: {  
            name: "Reibers Reformed Baptist Church",
            address: "180 Reibers Church Rd. Shermans Dale, PA  17090",
            region: "PA",
            website: "http://reiberschurch.com/"
        }
    },
    {  
        coordinates: {
            lat: 41.418708,
            lng: -75.619701
        },
        details: {  
            name: "Reformed Baptist Church of Scranton",
            address: "114 Hill Street Dunmore, PA 18512",
            region: "PA",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 40.583445,
            lng: -79.564462
        },
        details: {  
            name: "Sovereign Grace Baptist Church",
            address: "423 North Second Street Apollo, PA 15613",
            region: "PA",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 40.572363,
            lng: -75.533584
        },
        details: {  
            name: "Trinity Baptist Church",
            address: "689 S. Hillview Road Allentown, PA 18103",
            region: "PA",
            website: "http://trinityallentown.org/"
        }
    },
    {  
        coordinates: {
            lat: 40.10665,
            lng: -75.641347
        },
        details: {  
            name: "Vincent Baptist Church",
            address: "2109 Art School Road Chester Springs, PA",
            region: "PA",
            website: "http://www.vincentbaptistchurch.com/"
        }
    },
    {  
        coordinates: {
            lat: 39.928233,
            lng: -76.841204
        },
        details: {  
            name: "West Side Baptist Church",
            address: "4960 Lincoln Highway West Thomasville, PA  17364",
            region: "PA",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 40.687149,
            lng: -76.196597
        },
        details: {  
            name: "Word of Life Baptist Church",
            address: "302 N. Centre St. Pottsville, PA 17901",
            region: "PA",
            website: "http://www.biblicalstudies.com/"
        }
    },
    {  
        coordinates: {
            lat: 41.85543,
            lng: -71.482134
        },
        details: {  
            name: "Grace Community Baptist Church",
            address: "621 Woonasquatucket Ave.  North Providence, RI 02911",
            region: "RI",
            website: "http://www.gcbcri.org/"
        }
    },
    {  
        coordinates: {
            lat: 34.450525,
            lng: -81.883977
        },
        details: {  
            name: "Cornerstone Baptist Church",
            address: "1797 Hwy 72 W Clinton, SC 29325",
            region: "SC",
            website: "http://www.cornerstonechurch-sc.org/"
        }
    },
    {  
        coordinates: {
            lat: 34.742083,
            lng: -82.545071
        },
        details: {  
            name: "Covenant Reformed Baptist Church",
            address: "1709 Ariel St. Easley, SC",
            region: "SC",
            website: "http://www.crbceasley.org/"
        }
    },
    {  
        coordinates: {
            lat: 34.867986,
            lng: -82.396849
        },
        details: {  
            name: "Fellowship Bible Church",
            address: "115 Buist Avenue Greenville, SC  29609",
            region: "SC",
            website: "http://fellowship-greenville.org/"
        }
    },
    {  
        coordinates: {
            lat: 34.89221,
            lng: -82.294105
        },
        details: {  
            name: "Grace Baptist Church",
            address: "5020 Old Spartanburg Rd. Taylors, SC  29687",
            region: "SC",
            website: "http://www.gbctaylors.org/"
        }
    },
    {  
        coordinates: {
            lat: 33.148386,
            lng: -80.040367
        },
        details: {  
            name: "Grace Community Baptist Church",
            address: "579 Gaillard Road Moncks Corner, South Carolina",
            region: "SC",
            website: "http://www.gracecommunitybaptist.org/"
        }
    },
    {  
        coordinates: {
            lat: 33.856086,
            lng: -79.055983
        },
        details: {  
            name: "Sovereign Grace Baptist Church",
            address: "2104 N. Main Street Conway, SC",
            region: "SC",
            website: "http://www.sgbcconway.org/"
        }
    },
    {  
        coordinates: {
            lat: 43.994657,
            lng: -102.980198
        },
        details: {  
            name: "Providence Reformed Baptist Church",
            address: "Main Street and Dawkins Road Caputa SD, 57725",
            region: "SD",
            website: "http://www.providenceblackhills.org/"
        }
    },
    {  
        coordinates: {
            lat: 35.065975,
            lng: -85.196186
        },
        details: {  
            name: "Christ's Church of Chattanooga",
            address: "4295 Cromwell Road, Suite 500 Chattanooga TN  37421",
            region: "TN",
            website: "http://www.christschurchofchattanooga.com/"
        }
    },
    {  
        coordinates: {
            lat: 36.585233,
            lng: -82.145135
        },
        details: {  
            name: "Cornerstone Chapel",
            address: "1745 King College Road Bristol, TN 37620",
            region: "TN",
            website: "http://cornerstonechapelrbc.org/"
        }
    },
    {  
        coordinates: {
            lat: 35.735499,
            lng: -84.024217
        },
        details: {  
            name: "Covenant Baptist Church of Blount County",
            address: "2525 Morganton Rd. Maryville, TN 37801",
            region: "TN",
            website: "http://www.covenantbaptistbc.org/"
        }
    },
    {  
        coordinates: {
            lat: 36.392574,
            lng: -86.151143
        },
        details: {  
            name: "Grace Baptist Church",
            address: "550 McMurry Blvd. Hartsville, TN",
            region: "TN",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 35.756582,
            lng: -83.971599
        },
        details: {  
            name: "Grace Community Church",
            address: "115 East Harper Ave. Maryville, TN 37804",
            region: "TN",
            website: "http://www.gracetn.org/"
        }
    },
    {  
        coordinates: {
            lat: 35.100726,
            lng: -85.301182
        },
        details: {  
            name: "Grace Reformed Baptist Church",
            address: "2624 Lyndon Avenue Chattanooga, TN 37415",
            region: "TN",
            website: "http://www.grbchurch.org"
        }
    },
    {  
        coordinates: {
            lat: 36.2562,
            lng: -86.714352
        },
        details: {  
            name: "Reformed Baptist Church of Nashville",
            address: "P.O. Box 824 Madison, TN  37115",
            region: "TN",
            website: "http://www.rbcnashville.org/"
        }
    },
    {  
        coordinates: {
            lat: 35.204684,
            lng: -89.837756
        },
        details: {  
            name: "Trinity Reformed Baptist Church",
            address: "6771 Stage Road Bartlett, TN  38134",
            region: "TN",
            website: "http://www.rbcmemphis.org/"
        }
    },
    {  
        coordinates: {
            lat: 29.152825,
            lng: -98.89706
        },
        details: {  
            name: "Calvary Grace Baptist Church",
            address: "1009 N. Teel Dr. Devine, TX 78016",
            region: "TX",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 32.812374,
            lng: -97.20961
        },
        details: {  
            name: "Grace Reformed Baptist Church",
            address: "227 NE Loop 820  Hurst, TX 76065",
            region: "TX",
            website: "http://www.gracereformedbc.org/"
        }
    },
    {  
        coordinates: {
            lat: 29.223541,
            lng: -98.378715
        },
        details: {  
            name: "Community Baptist Church",
            address: "5697 Labus Road #1 Elmendorf, TX  78112",
            region: "TX",
            website: "http://www.cbcweb.net/"
        }
    },
    {  
        coordinates: {
            lat: 32.772838,
            lng: -96.790948
        },
        details: {  
            name: "Dallas Reformed Baptist Church",
            address: "1312 South Ervay St. Dallas, TX 75215",
            region: "TX",
            website: "http://www.dallasreformedbaptistchurch.org/"
        }
    },
    {  
        coordinates: {
            lat: 30.633262,
            lng: -97.677984
        },
        details: {  
            name: "Emmanuel Reformed Baptist Church",
            address: "Georgetown, Texas",
            region: "TX",
            website: "http://emmanuelrbc.com/"
        }
    },
    {  
        coordinates: {
            lat: 32.482008,
            lng: -94.669937
        },
        details: {  
            name: "Faith Baptist Church",
            address: "S. Loop 281 Longview, Texas",
            region: "TX",
            website: "http://www.faithlongview.com/"
        }
    },
    {  
        coordinates: {
            lat: 33.054719,
            lng: -96.629561
        },
        details: {  
            name: "First Baptist Church of Parker Texas",
            address: "5304 East Parker Rd Parker, Texas 75002",
            region: "TX",
            website: "http://www.firstbaptistparker.org/"
        }
    },
    {  
        coordinates: {
            lat: 29.454254,
            lng: -98.4431
        },
        details: {  
            name: "Faith Reformed Baptist Church of San Antonio",
            address: "San Antonio, TX 78234",
            region: "TX",
            website: "http://faithbaptistsa.org/"
        }
    },
    {  
        coordinates: {
            lat: 29.481945,
            lng: -98.524556
        },
        details: {  
            name: "Free Grace Baptist Church",
            address: "1801 Thorain Street San Antonio, TX 78201",
            region: "TX",
            website: "http://freegracebaptist.org/"
        }
    },
    {  
        coordinates: {
           lat : 30.250349,
           lng : -95.3963349
        },
        details: {  
            name: "Grace Family Baptist of Conroe",
            address: "11920 Stidham Rd, Conroe, TX 77302",
            region: "TX",
            website: "http://gfbcconroe.com/"
        }
    },
    {  
        coordinates: {
            lat: 30.018042,
            lng: -95.434451
        },
        details: {  
            name: "Grace Family Baptist of North Houston",
            address: "106 Bammel Westfield Rd, Houston TX 77090",
            region: "TX",
            website: "http://www.gracefamilybaptist.net/"
        }
    },
    {  
        coordinates: {
            lat: 32.803598,
            lng: -96.77594
        },
        details: {  
            name: "Good Shepherd Community Church",
            address: "4701 Virginia Ave  Dallas, TX 75204",
            region: "TX",
            website: "http://www.gsccdallas.org/"
        }
    },
    {  
        coordinates: {
            lat: 31.812276,
            lng: -99.422655
        },
        details: {  
            name: "Grace Baptist Church",
            address: "115 Santa Anna Ave Coleman, Texas  76834",
            region: "TX",
            website: "http://www.gracebaptist-fellowship.com/"
        }
    },
    {  
        coordinates: {
            lat: 32.695964,
            lng: -97.602247
        },
        details: {  
            name: "Grace Baptist Church ",
            address: "P.O. Box 433 Aledo, Texas 76008",
            region: "TX",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 33.570733,
            lng: -96.184777
        },
        details: {  
            name: "Grace Community Bible Church",
            address: "601 S. 4th Street Bonham, Texas 75418",
            region: "TX",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 33.155818,
            lng: -94.969531
        },
        details: {  
            name: "Grace Baptist Church",
            address: "Mt. Pleasant, TX 75456",
            region: "TX",
            website: "http://www.gracebaptistchurchmp.org/"
        }
    },
    {  
        coordinates: {
            lat: 29.423109,
            lng: -98.473653
        },
        details: {  
            name: "Grace Community Church",
            address: "315 North Hackberry San Antonio, TX  78202",
            region: "TX",
            website: "http://www.gccsatx.com/"
        }
    },
    {  
        coordinates: {
            lat: 30.098075,
            lng: -95.274133
        },
        details: {  
            name: "Grace Reformed Baptist Church",
            address: "24176 Sorters Road Porter, Texas  77365",
            region: "TX",
            website: "http://www.grbcfamily.org/"
        }
    },
    {  
        coordinates: {
            lat: 30.320975,
            lng: -97.330874
        },
        details: {  
            name: "Grace Reformed Baptist Church",
            address: "184 Christensen Rd Elgin, Texas 78621",
            region: "TX",
            website: "http://www.gracerbc.com/"
        }
    },
    {  
        coordinates: {
            lat: 32.563893,
            lng: -97.140156
        },
        details: {  
            name: "Heritage Baptist Church",
            address: "201 E. Broad Street Mansfield, TX 76063",
            region: "TX",
            website: "http://www.reformedbaptist.org/"
        }
    },
    {  
        coordinates: {
            lat: 29.352153,
            lng: -98.604414
        },
        details: {  
            name: "Hillburn Drive Grace Baptist Church",
            address: "5426 Hillburn Drive San Antonio, TX 78227",
            region: "TX",
            website: "http://www.sovgracebaptsatx.com/"
        }
    },
    {  
        coordinates: {
            lat: 29.599549,
            lng: -98.279528
        },
        details: {  
            name: "Providence Community Church",
            address: "17401 IH-35 Schertz, Texas 78154",
            region: "TX",
            website: "http://www.pcc-schertz.com/"
        }
    },
    {  
        coordinates: {
            lat: 29.657401,
            lng: -95.176075
        },
        details: {  
            name: "Providence Baptist Church",
            address: "4400 Vista Rd Pasadena, TX 77504",
            region: "TX",
            website: "http://www.providence-bc.com/"
        }
    },
    {  
        coordinates: {
            lat: 30.578245,
            lng: -98.2728
        },
        details: {  
            name: "Providence Reformed Baptist Church",
            address: "Marble Falls, TX 78654",
            region: "TX",
            website: "http://www.providencerbc.org/"
        }
    },
    {  
        coordinates: {
            lat: 32.7612,
            lng: -97.470722
        },
        details: {  
            name: "Redeemer Church",
            address: "126 N. Judd St. Fort Worth, TX",
            region: "TX",
            website: "http://www.redeemerfortworth.org/"
        }
    },
    {  
        coordinates: {
            lat: 31.089143,
            lng: -97.89167
        },
        details: {  
            name: "Southern Hills Baptist Church",
            address: "2920 South FM 116 Kempner, TX  76539",
            region: "TX",
            website: "http://www.shbccove.com/"
        }
    },
    {  
        coordinates: {
            lat: 27.800583,
            lng: -97.396381
        },
        details: {  
            name: "Sovereign Grace Community Church",
            address: "Corpus Christi, TX",
            region: "TX",
            website: "http://www.corpuschristians.com/"
        }
    },
    {  
        coordinates: {
            lat: 31.477637,
            lng: -100.440751
        },
        details: {  
            name: "Sovereign Grace Baptist Church",
            address: "1502 N. Magdalen San Angelo, TX 76934",
            region: "TX",
            website: "http://www.particularbaptist.org/"
        }
    },
    {  
        coordinates: {
            lat: 31.055796,
            lng: -97.462251
        },
        details: {  
            name: "Tapestry Community Church",
            address: "219 E Central Avenue Belton, Texas 76513",
            region: "TX",
            website: "http://tapestrycommunitychurch.org/"
        }
    },
    {  
        coordinates: {
            lat: 32.823407,
            lng: -97.215303
        },
        details: {  
            name: "The First Baptist Church of Richland Hills",
            address: "7540 Glenview Drive Fort Worth, Texas 76180",
            region: "TX",
            website: "http://www.fbcrh.org/"
        }
    },
    {
        coordinates: {
           lat : 30.628353,
           lng : -96.383529
        },
        details: {
            name: "West Oaks Baptist Church",
            address: "1901 W Villa Maria Rd, Bryan, TX 77807",
            region: "TX",
            website: "http://www.westoaksbaptist.org/"
        }
    },
    {  
        coordinates: {
            lat: 41.15892,
            lng: -112.055685
        },
        details: {  
            name: "Roy Bible Church",
            address: "5757 South 3100 West Roy, Utah  84067",
            region: "UT",
            website: "http://www.roybiblechurch.org/"
        }
    },
    {  
        coordinates: {
            lat: 43.710161,
            lng: -73.015334
        },
        details: {  
            name: "Reformed Bible Church",
            address: "268 Furnace Rd.  Pittsford, Vermont  05763",
            region: "VT",
            website: "http://allbygrace.org/"
        }
    },
    {  
        coordinates: {
            lat: 37.233,
            lng: -80.3986
        },
        details: {  
            name: "Alleghany Baptist Church",
            address: "416 Alleghany St. Blacksburg, VA  24060",
            region: "VA",
            website: "http://www.alleghanybaptistchurch.org/"
        }
    },
    {  
        coordinates: {
            lat: 38.05,
            lng: -78.5
        },
        details: {  
            name: "Christ Reformed Baptist Church",
            address: "P.O. Box 5162 Charlottesville, VA 22905",
            region: "VA",
            website: "http://www.christreformedbaptist.org/"
        }
    },
    {  
        coordinates: {
            lat: 38.734029,
            lng: -77.716523
        },
        details: {  
            name: "Covenant Reformed Baptist Church",
            address: "7336 Riley Rd. Warrenton, VA 20187",
            region: "VA",
            website: "http://www.covenantrbc.org/"
        }
    },
    {  
        coordinates: {
            lat: 38.198783,
            lng: -79.014882
        },
        details: {  
            name: "Emmanuel Baptist Church",
            address: "60 Middle River Drive Verona, VA  24482",
            region: "VA",
            website: "http://www.ebc-verona.net/"
        }
    },
    {  
        coordinates: {
            lat: 37.044126,
            lng: -76.443626
        },
        details: {  
            name: "Grace Baptist Chapel",
            address: "805 Todds Lane Hampton, VA 23666",
            region: "VA",
            website: "http://www.gracebaptistchapel.net/"
        }
    },
    {  
        coordinates: {
            lat: 38.6806112 ,
            lng: -77.322985
        },
        details: {  
            name: "Occoquan Bible Church",
            address: "3700 Old Bridge Road, Woodbridge, VA 22192",
            region: "VA",
            website: "http://www.obc.org"
        }
    },
    {  
        coordinates: {
            lat: 37.437006,
            lng: -76.320662
        },
        details: {  
            name: "Redeeming Grace Baptist Church",
            address: "Mathews, VA 23109",
            region: "VA",
            website: "http://www.redeeming-grace.org/"
         
      }
    },
    {  
        coordinates: {
            lat: 36.8,
            lng: -76.17
        },
        details: {  
            name: "Grace Covenant Church",
            address: "PO Box 64443 Virginia Beach, VA 23467",
            region: "VA",
            website: "http://www.reformedbaptistchurch.org/"
        }
    },
    {  
        coordinates: {
            lat: 37.361019,
            lng: -77.68005
        },
        details: {  
            name: "Reformed Baptist Church of Richmond, VA. ",
            address: "14401 Beach Road Chesterfield, Virginia 23838",
            region: "VA",
            website: "http://rbcrichmond.com/"
        }
    },
    {  
        coordinates: {
            lat: 38.189064,
            lng: -79.061042
        },
        details: {  
            name: "Reformed Baptist Church of Staunton",
            address: "1976 Springhill Road Staunton, Va.  24401",
            region: "VA",
            website: "http://www.caymandesigns.com/rbcos.htm"
        }
    },
    {  
        coordinates: {
            lat: 38.634449,
            lng: -77.366615
        },
        details: {  
            name: "Sovereign Grace Baptist Church",
            address: "14703 Silverdale Drive  Woodbridge, VA 22193",
            region: "VA",
            website: "http://www.angelfire.com/va/sovereigngrace/sgbc.html"
        }
    },
    {  
        coordinates: {
            lat: 37.142742,
            lng: -79.969647
        },
        details: {  
            name: "Trinity Church",
            address: "7965 Dunahoo Drive  Boones Mill, VA 24065",
            region: "VA",
            website: "http://www.tbcva.org/"
        }
    },
    {  
        coordinates: {
            lat: 37.109723,
            lng: -80.681157
        },
        details: {  
            name: "Wilderness Road Baptist Assembly",
            address: "105 Linkous Ave.  Dublin, VA 24084",
            region: "VA",
            website: "http://www.wildernessroadbaptist.org/"
        }
    },
    {  
        coordinates: {
            lat: 37.760462 ,
            lng: -78.870680
        },
        details: {  
            name: "Faith Reformed Baptist Church",
            address: "605 Front St. Lovingston, VA 22949",
            region: "VA",
            website: "https://www.faithreformedbaptistchurch.com/"
        }
    },
    {  
        coordinates: {
            lat: 47.440358,
            lng: -122.284734
        },
        details: {  
            name: "Emmanuel Reformed Baptist Church",
            address: "3752 S. 182nd St. Seattle, Washington  98188",
            region: "WA",
            website: "http://www.emmanuelreformedbaptist.org/"
        }
    },
    {  
        coordinates: {
            lat: 47.654218,
            lng: -122.621324
        },
        details: {  
            name: "Free Grace Baptist Church",
            address: "2160 Paulson Rd. N.E. Brownsville, WA  98370",
            region: "WA",
            website: "http://www.freegracebaptistchurch.com/"
        }
    },
    {  
        coordinates: {
            lat: 46.411643,
            lng: -117.052359
        },
        details: {  
            name: "Grace Reformed Church of Clarkston, Washington",
            address: "1104 Diagonal St Clarkston, WA  99403",
            region: "WA",
            website: "http://www.grcclarkston.com/"
        }
    },
    {  
        coordinates: {
            lat: 48.293156,
            lng: -122.643224
        },
        details: {  
            name: "Grace Evangelical Church",
            address: "P.O. Box 1734 Oak Harbor, WA 98277",
            region: "WA",
            website: "http://www.graceevangelical.org/"
        }
    },
    {  
        coordinates: {
            lat: 47.718057,
            lng: -122.206923
        },
        details: {  
            name: "Juanita Community Church",
            address: "10007 NE 132nd Street Kirkland, WA 98034",
            region: "WA",
            website: "http://juanitacc.org/"
        }
    },
    {  
        coordinates: {
            lat: 47.170457,
            lng: -122.592231
        },
        details: {  
            name: "Pilgrim Bible Church",
            address: "2301 Worthington Street Steilacoom, WA 98388",
            region: "WA",
            website: "http://www.pilgrimbible.org/"
        }
    },
    {  
        coordinates: {
            lat: 47.811454,
            lng: -122.268784
        },
        details: {  
            name: "Providence Family Baptist Church",
            address: "2609 Larch Way Lynnwood, WA  98036",
            region: "WA",
            website: "http://www.providencefbc.org/"
        }
    },
    {  
        coordinates: {
            lat: 47.220376,
            lng: -122.530497
        },
        details: {  
            name: "Providence Reformed Baptist Church",
            address: "7002 40th Street West University Place, WA 98467",
            region: "WA",
            website: "http://users.lewiston.com/ardenh/prbc.html"
        }
    },
    {  
        coordinates: {
            lat: 47.205513,
            lng: -121.989065
        },
        details: {  
            name: "Sovereign Grace Baptist Church",
            address: "1809 Wells Street Enumclaw, WA 98022",
            region: "WA",
            website: "http://www.sovgracewa.org/"
        }
    },
    {  
        coordinates: {
            lat: 47.673129,
            lng: -122.201647
        },
        details: {  
            name: "Trinity Reformed Baptist Church",
            address: "315 3rd Ave. S. Kirkland, WA 98033",
            region: "WA",
            website: "http://www.trinityreformedbaptist.com/"
        }
    },
    {  
        coordinates: {
            lat: 37.26984,
            lng: -81.22232
        },
        details: {  
            name: "Covenant Reformed Baptist Church",
            address: "P.O. Box 2021 Bluefield, WV 24701",
            region: "WV",
            website: "http://www.crbcbluefield.net/"
        }
    },
    {  
        coordinates: {
            lat: 38.41925,
            lng: -82.445154
        },
        details: {  
            name: "Citadel Reformed Baptist Church",
            address: "Huntington, West Virginia",
            region: "WV",
            website: ""
        }
    },
    {  
        coordinates: {
            lat: 45.637826,
            lng: -89.417129
        },
        details: {  
            name: "Northwoods Baptist Church",
            address: "417 West Davenport Street Rhinelander, WI 54501",
            region: "WI",
            website: "http://www.northwoodsbaptist.com/"
        }
    },
    {  
        coordinates: {
            lat: 45.489787,
            lng: -91.731293
        },
        details: {  
            name: "Rice Lake Baptist Church",
            address: "104 East Barker Street Rice Lake, WI 54868",
            region: "WI",
            website: "http://www.ricelakebaptist.org/"
        }
    },
    {  
        coordinates: {
            lat: 42.839371,
            lng: -106.331429
        },
        details: {  
            name: "Sovereign Grace Church",
            address: "534 CY Avenue Casper, WY 82601",
            region: "WY",
            website: "http://www.sovereigngracechurch.com/"
        }
    },
    {  
        coordinates: {
            lat: 44.016901,
            lng: -107.955372
        },
        details: {  
            name: "Sovereign Grace Bible Church",
            address: "PO Box 906 Worland, WY 82401",
            region: "WY",
            website: "http://www.sgbcwy.org/"
        }
    },
    {  
        coordinates: {
            lat: 44.758254,
            lng: -108.756099
        },
        details: {  
            name: "Trinity Bible Church ",
            address: "507 North Clark Street Powell, Wyoming 82435",
            region: "WY",
            website: "http://www.tbcwyoming.com/"
        }
    }
];

export default CHURCHES;
