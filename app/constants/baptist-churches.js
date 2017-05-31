// https://maps.googleapis.com/maps/api/geocode/json?address=100+Dairy+Lane,+Gambrills,+MD&key=AIzaSyBpJ82xY4YxuWoXC04gGWx3lCl8hp7ZTZ4

const CHURCHES = [  
    {  
        coordinates: {
           lat : -27.605517,
           lng : 152.6664817
        },
        details: {  
            name: "Berean Bible Church",
            denomination: 'baptist',
            address: "19-23 Queen Street, Walloon, Qld 4306",
            region: "AUS",
            website: "http://www.bbcq.org",
            notes: [
                {
                    type: 'meeting at',
                    data: 'Walloon Uniting Church'
                },
                {
                    type: 'sermons',
                    data: 'http://bbcq.org/cms/online-sermons/newest/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/Berean-Bible-Church-108752356199903/'
                }
            ],
            pastors: [
                {
                    name: 'Troy Cane',
                    email: 'troy@bbcq.org',
                    image: 'http://bbcq.org/cms/wp-content/uploads/2014/04/t_cane0913.jpg'
                },
                {
                    name: 'Paul Caswell',
                    email: 'paul@bbcq.org',
                    image: 'http://bbcq.org/cms/wp-content/uploads/2014/04/p_caswell0913.jpg'
                }
            ],
            lastUpdated: '5/8/2017'
        }
    },
    {  
        coordinates: {
            lat: -27.386422,
            lng: 152.942586
        },
        details: {  
            name: "Samford Baptist Church",
            address: "Samford Farmers Hall, 30 Main St, Samford Village QLD 4520, Australia",
            region: "AUS",
            website: "http://www.sbcq.org/",
            lastUpdated: '5/27/2017'
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
            website: "http://www.dominionbaptist.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.sermonaudio.com/source_detail.asp?sourceid=dominionbaptist'
                }
            ],
            pastors: [
                {
                    name: 'Mark Liddle',
                    image: 'http://media.sermonaudio.com/gallery/photos/thumbnails/markliddle.png'
                }
            ],
            lastUpdated: '5/8/2017'
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
            website: "http://www.emmanuel-florence.org/",
            familyIntegrated: true,
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.sermonaudio.com/source_detail.asp?sourceid=bygraceareyesaved'
                }
            ],
            pastors: [
                {
                    name: 'Joshua Miller',
                    image: 'http://media.sermonaudio.com/gallery/photos/thumbnails/MillerJoshuaJ.png'
                },
                {
                    name: 'Daniel Michael',
                    image: 'http://media.sermonaudio.com/gallery/photos/thumbnails/danielmichael.png'
                }
            ],
            lastUpdated: '5/8/2017'
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
            website: "http://www.gbcmadison-al.com/",
            notes: [
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/GraceBaptistMadisonAL/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Dean Olive',
                    email: 'pastor@gbcmadison-al.com',
                    image: 'http://www.gbcmadison-al.com/uploads/3/4/2/2/3422105/1579487_orig.jpg'
                }
            ],
            lastUpdated: '5/8/2017'
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
            website: "http://www.graceheritage.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://graceheritage.org/audio/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/graceheritagechurch/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Paul Stith',
                    image: 'http://graceheritage.org/stiths4.jpg'
                },
                {
                    name: 'Stan Reeves'
                }
            ],
            lastUpdated: '5/8/2017'
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
            website: "http://www.hfcchurch.org/",
            pastors: [
                {
                    name: 'Ricky L. Tillis'
                }
            ],
            lastUpdated: '5/8/2017'
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
            website: "http://www.nlbc-harvest.org/",
            noConfession: true,
            notes: [
                {
                    type: 'sermons',
                    data: 'http://nlbc-harvest.org/resources/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/nlbcharvest/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Dr. Andy Wisner'
                },
                {
                    name: 'Eric Swinney'
                }
            ],
            lastUpdated: '5/8/2017'
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
            website: "http://www.trinitychurchdothan.com",
            notes: [
                {
                    type: 'meeting at',
                    data: 'McMullan Chapel in front of Hutto Tower'
                }
            ],
            pastors: [
                {
                    name: 'Paul C. Roten'
                },
                {
                    name: 'Craig L. Gillis'
                }
            ],
            lastUpdated: '5/8/2017'
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
            website: "http://www.prbc1689.org",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.prbc1689.org/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/prbcremlap/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Kurt M. Smith',
                    image: 'http://www.prbc1689.org/wp-content/uploads/2015/05/kurt.jpg'
                }
            ],
            lastUpdated: '5/8/2017'
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
            website: "http://www.cstonemesa.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.cstonemesa.org/sermons-audio/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Cornerstone-Church/109199199120563?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Jim Adams',
                    email: 'grizzlyadams@cstonemesa.org',
                    image: 'http://media.sermonaudio.com/gallery/photos/thumbnails/jamesadams.png'
                }
            ],
            lastUpdated: '5/8/2017'
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
            website: "http://gccgilbert.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://gccgilbert.com/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/gccgilbert/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'John Giarrizzo',
                    image: 'http://gccgilbert.com/wp-content/uploads/2015/01/JohnG.jpg'
                },
                {
                    name: 'Darrell Gustafson',
                    image: 'http://gccgilbert.com/wp-content/uploads/2014/11/headshot_4_low_res-199x300.jpg'
                }
            ],
            lastUpdated: '5/8/2017'
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
            website: "http://millervalleybaptist.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://millervalleybaptist.org/wordpress/?page_id=70'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/Miller-Valley-Baptist-Church-111807132183555/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Chris J. Marley',
                    image: 'http://millervalleybaptist.org/wordpress/wp-content/myimages/ordinationfamily.jpg'
                },
                {
                    name: 'Chris L. Marley',
                    image: 'http://millervalleybaptist.org/wordpress/wp-content/myimages/ordinationfamily.jpg'
                }
            ],
            lastUpdated: '5/8/2017'
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
            website: "http://www.prbc.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.prbc.org/sermons.htm'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Phoenix-Reformed-Baptist-Church/122232514453757?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Donald Fry',
                    image: 'http://millervalleybaptist.org/wordpress/wp-content/myimages/ordinationfamily.jpg'
                },
                {
                    name: 'James White',
                    image: 'http://wp.patheos.com.s3.amazonaws.com/blogs/formerlyfundie/files/2014/06/Dr.-White.jpg'
                },
                {
                    name: 'James Callahan'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.sovgracephoenix.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://sovgracephoenix.com/'
                }
            ],
            pastors: [
                {
                    name: 'Mike Green',
                    image: 'http://media.sermonaudio.com/gallery/photos/thumbnails/GreenMike-01.png'
                },
                {
                    name: 'John Tock',
                    image: 'http://media.sermonaudio.com/gallery/photos/thumbnails/TockJohn.png'
                },
                {
                    name: 'Dan Caffese',
                    image: 'http://www.sermonaudio.com/images/overlayphoto.PNG'
                },
                {
                    name: 'Victor Harris',
                    image: 'http://sgbcphx.org/wp-content/uploads/2014/07/elderphoto2008.jpg'
                }
            ],
            lastUpdated: '5/27/2017'
      }
    },
    {  
        coordinates: {
            lat: 32.237548,
            lng: -110.925856
        },
        details: {  
            name: "Tucson Reformed Baptist Church",
            address: "1603 S Eastside Loop #209 Tucson, AZ 85710",
            region: "AZ",
            website: "http://www.tucsonreformedbaptist.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.sermonaudio.com/source_detail.asp?sourceid=tucsonreformed'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/tucsonrbc/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Robert Cosby',
                    image: 'http://www.tucsonreformedbaptist.org/wp-content/uploads/2011/06/DSCF7663-e1384751666140-150x150.jpg'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.gbcconway.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.gbcconway.com/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/gbcconway/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Jeff Johnson',
                    image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
                },
                {
                    name: 'Wyeth Wallis',
                    image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
                }
            ],
            lastUpdated: '5/27/2017'
        }
    },
    {  
        coordinates: {
            lat: 36.372854,
            lng: -94.208817
        },
        details: {  
            name: "Legacy Baptist Church",
            address: "1937 South Liberty Bell Road, Rogers, AR",
            region: "AR",
            website: "http://www.lbcofnwa.com/",
            notes: [
                {
                    type: 'meeting at',
                    data: 'Liberty Bell Comm. Bldg'
                },
                {
                    type: 'sermons',
                    data: 'http://lbcofnwa.com/sermon-library'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://texarkanarbc.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.texarkanarbc.org/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/TexarkanaReformedBaptistChurch/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Russ Bennett',
                    image: 'http://www.texarkanarbc.org/wp-content/uploads/2007/07/Officer-Russ-150x150.jpg'
                },
                {
                    name: 'Jimmy DeMoss',
                    image: 'http://www.texarkanarbc.org/wp-content/uploads/2007/07/Officer-Jimmy-150x150.jpg'
                },
                {
                    name: 'Martin Rizley',
                    image: 'http://www.texarkanarbc.org/wp-content/uploads/2007/07/Elder-Martin-150x150.jpg'
                },
                {
                    name: 'Henry Wood (Emeritus)',
                    image: 'http://www.texarkanarbc.org/images/henry.jpg'
                }
            ],
            lastUpdated: '5/27/2017'
        }
    },
    {  
        coordinates: {
            lat: 33.915148,
            lng: -117.890178
        },
        details: {  
            name: "Grace Covenant Community Church",
            address: "251 S Randolph Ave, Brea, CA 92821",
            region: "CA",
            website: "http://g3conline.org/",
            notes: [
                {
                    type: 'meeting at',
                    data: 'Golden Gate Seminary'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Grace-Covenant-Community-Church/217373388294920?fref=ts'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://centinelabaptistchurch.com/",
            notes: [
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Centinela-Baptist-Church/102218989821731?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Larry Smith'
                },
                {
                    name: 'Chris Beamer'
                }
            ],
            lastUpdated: '5/27/2017'
        }
    },
    {  
        coordinates: {
            lat: 35.622385,
            lng: -117.667739
        },
        details: {  
            name: "Cornerstone Bible Church",
            address: "443 W. Inyokern Road, Ridgecrest, CA 93555",
            region: "CA",
            website: "http://www.cbcridgecrest.org/",
            notes: [
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Cornerstone-Bible-Church/108132879228744?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Daniel Warda',
                    image: 'http://s3.amazonaws.com/churchplantmedia-cms/cornerstone-bible-church-ca/warda-family-photo.jpg'
                },
                {
                    name: 'Lyn Whitcomb',
                    image: 'http://s3.amazonaws.com/churchplantmedia-cms/cornerstone-bible-church-ca/img_0217-copy.jpg'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.christrbc.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.christrbc.com/sermons.htm'
                }
            ],
            pastors: [
                {
                    name: 'Jason Walter',
                    image: 'http://www.christrbc.com/DSCN4677.jpg'
                },
                {
                    name: 'Jim Renihan',
                    image: 'http://www.christrbc.com/renihan-j.jpg'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.fccoxnard.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.fccoxnard.org/sermons.php'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Faith-Community-Church/111683788867244?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Rick Anderson'
                },
                {
                    name: 'Tim Sheehy'
                },
                {
                    name: 'Jonathan Downing'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://fsbclompoc.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.sermonaudio.com/search.asp?speakeronly=true&currsection=sermonsspeaker&keyword=David_Pauley'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/Grace-Baptist-Church-of-Lompoc-176526205815004/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'David Pauley',
                    image: 'http://fsbclompoc.com/wp-content/uploads/Pastor-David-Pauley-2-213x300.jpg'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.fbcmonterey.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.fbcmonterey.org/listen/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/fbcmonterey/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Nathan M Rehn',
                    image: 'https://static1.squarespace.com/static/53c5782ae4b0b121aee4c10e/t/54020f2de4b086132f5bb32b/1409421101954/Charlotte.jpg?format=750w'
                },
                {
                    name: 'Jeremy Wong',
                    image: 'https://static1.squarespace.com/static/53c5782ae4b0b121aee4c10e/t/544fe811e4b0606d81679f0a/1414522915445/?format=750w'
                }
            ],
            lastUpdated: '5/27/2017'
        }
    },
    {  
        coordinates: {
            lat: 36.7800283,
            lng: 36.7800283
        },
        details: {  
            name: "Free Grace Church",
            address: "3385 E. Shields, Fresno CA 93726",
            region: "CA",
            website: "http://www.freegracefresno.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.freegracefresno.com/feeds/sermons/'
                }
            ],
            pastors: [
                {
                    name: 'Matt Troupe',
                    image: 'https://static1.squarespace.com/static/53f52348e4b01f35ef6d4211/t/5413c7dfe4b01d62a17295f3/1410582495927/5662353064_bfdf436a96_b.jpg?format=750w'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.lrbc.info/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.sermonaudio.com/source_detail.asp?sourceid=lrbc'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Gateway-Church/484805044907992?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Mike Kelley',
                    image: 'http://www.gatewaylivermore.org/wp-content/uploads/2017/05/Mike-Kelley-e1493693156556.png'
                },
                {
                    name: 'Larry Trummel',
                    image: 'http://www.gatewaylivermore.org/wp-content/uploads/2013/01/pastorlarry.png'
                },
                {
                    name: 'Bill Fletcher',
                    image: 'http://www.gatewaylivermore.org/wp-content/uploads/2013/01/bill1.png'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.grcbible.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://grcbible.org/category/audio/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/Grace-Bible-Church-of-North-County-164525926932647/?fref=ts'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.gbc-sd.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.gbc-sd.org/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/gracebiblesandiego/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Curt Arend',
                    image: 'https://static1.squarespace.com/static/570adb9ff8508296818523f9/t/590fb22eb3db2bcaf5e0ae9f/1494200884237/?format=750w'
                },
                {
                    name: 'Steve Robinson',
                    image: 'https://static1.squarespace.com/static/570adb9ff8508296818523f9/t/590fb26fbe65940ba99d53ba/1494200948597/?format=750w'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.gracereformedbc.net/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.gracereformedbc.net/index_files/Sermons.htm'
                }
            ],
            pastors: [
                {
                    name: 'Jeff Oliver',
                    image: 'http://www.gracereformedbc.net/index_files/image613.jpg'
                },
                {
                    name: 'Kyle Daque'
                }
            ],
            lastUpdated: '5/27/2017'
        }
    },
    {  
        coordinates: {
            lat: 34.579434,
            lng: -118.116461
        },
        details: {  
            name: "Grace Reformed Baptist Church",
            address: "38630 5th St W, Palmdale, CA 93551",
            region: "CA",
            website: "http://www.grbcav.org/",
            notes: [
                {
                    type: 'meeting at',
                    data: 'Holiday Inn'
                },
                {
                    type: 'sermons',
                    data: 'http://www.sermonaudio.com/search.asp?SourceOnly=true&currSection=sermonssource&keyword=grbc1689&keywordDesc=Grace+Reformed+Baptist+Church'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/grbcav/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Richard C. Barcellos',
                    image: 'http://grbcav.org/wp-content/uploads/2011/03/richard-barcellos1.jpg'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.immanuelbc.net/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.immanuelbc.net/sermons'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/IBCofSac/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Paul Vossen'
                },
                {
                    name: 'Robert Briggs',
                    image: 'http://media.sermonaudio.com/gallery/photos/thumbnails/robertbriggs-02.png'
                },
                {
                    name: 'Steve Meister',
                    image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.pbc-ca.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.pbc-ca.org/sermon-archive/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Providence-Bible-Church-of-Sunnyvale/120565164621290?fref=ts'
                }
            ],
            lastUpdated: '5/27/2017'
        }
    },
    {  
        coordinates: {
            lat: 34.246948,
            lng: -117.301851
        },
        details: {  
            name: "Mountain Reformed Church",
            address: "23382 Crest Forest Dr, Crestline, CA 93325",
            region: "CA",
            website: "http://www.mountainreformed.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://mountainreformed.com/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/MountainReformedBaptistChurch/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Alan Harris'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.rbcr.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.rbcr.org/audio-sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/ReformedBaptistChurch/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Robert Elliott',
                    image: 'http://www.rbcr.org/wp-content/uploads/2017/04/robert-1.jpg'
                },
                {
                    name: 'Ryan Devine',
                    image: 'http://www.rbcr.org/wp-content/uploads/2012/06/pastor-ryan.jpg'
                },
                {
                    name: 'Christian Poleynard',
                    image: 'http://www.rbcr.org/wp-content/uploads/2015/02/IMG_2729-e1424318485106.jpg'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.sgbc-ontario.us/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://sgbc-ontario.org/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/sgbc.ontario/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Steve Marquedant',
                    image: 'http://47k9ssuzwxl42i9go2n75fyd.wpengine.netdna-cdn.com/wp-content/uploads/Steve-Marquedant.jpg'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.sgbcsv.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.sgbcsv.org/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Sovereign-Grace-Baptist-Church/118369981508967?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Dr. W. R. Downing',
                    image: 'http://www.sgbcsv.org/_images/pastorDowning.jpg'
                },
                {
                    name: 'Dr. Paul Nelson',
                    image: 'http://www.sgbcsv.org/_images/pastorNelson.jpg'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.reformedbaptist.net/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.sermonaudio.com/source_detail.asp?sourceid=trbc'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/TRBCLaMirada/?fref=ts'
                }
            ],
            lastUpdated: '5/27/2017'
        }
    },
    {  
        coordinates: {
            lat: 39.725043,
            lng: -105.060643
        },
        details: {  
            name: "Denver Reformed Church",
            address: "5800 West 6th Avenue   Lakewood, CO 80214",
            region: "CO",
            website: "http://www.denverreformed.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'https://www.youtube.com/user/SoundChurchDenver'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/gbcconway/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Jeff Johnson',
                    image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
                },
                {
                    name: 'Wyeth Wallis',
                    image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.rbcnc.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.rbcnc.com/sermons-and-radio-show'
                }
            ],
            pastors: [
                {
                    name: 'Mason Staub'
                },
                {
                    name: 'Peter Van Dorn'
                },
                {
                    name: 'Stan Campbell'
                },
                {
                    name: 'Douglas Van Dorn'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.grbcct.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://grbcct.org/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Grace-Reformed-Baptist-Church/111676255537832?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Mark Raines'
                },
                {
                    name: 'Wayne LaFond'
                },
                {
                    name: 'Chris Forbes'
                },
                {
                    name: 'Adam Richwine'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.ahavabaptist.com/",
            noConfession: true,
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.ahavabaptist.com/sermons/sermons.htm'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/AhavaBaptist/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Mike Holland',
                    image: 'http://www.ahavabaptist.com/images/mikeHollandPulpit_200x299_web.gif'
                }
            ],
            lastUpdated: '5/27/2017'
        }
    },
    {  
        coordinates: {
            lat: 27.336435,
            lng: -82.530653
        },
        details: {  
            name: "Bethel Community Church",
            address: "5632 Gantt Road, Sarasota, Florida, 34233",
            region: "FL",
            website: "http://www.bethelcomchurch.org/index.html",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.bethelcomchurch.com/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Bethel-Community-Church/116258461735198?fref=ts'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.cornerstoneorlando.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.cornerstoneorlando.org/sermons'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/CornerstoneOrlando/?fref=ts'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.cornerstonebiblechurch.com/",
            notes: [
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/cbcmiami/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Jason Tesser',
                    image: 'http://cornerstonebiblechurch.com/wp-content/uploads/2016/04/Screen-Shot-2017-04-15-at-8.20.22-AM.png'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.ebcfl.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.ebcfl.org/sermons'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/ebcfl/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Robert Diekema',
                    image: 'http://s3.amazonaws.com/churchplantmedia-cms/emmanuel_baptist/pastors_dec2016.jpg'
                },
                {
                    name: 'Jeffery Smith',
                    image: 'http://s3.amazonaws.com/churchplantmedia-cms/emmanuel_baptist/pastors_dec2016.jpg'
                },
                {
                    name: 'Daniel Wakefield',
                    image: 'http://s3.amazonaws.com/churchplantmedia-cms/emmanuel_baptist/pastors_dec2016.jpg'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.faithbaptistorlando.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.faithbaptistorlando.com/resources'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/Faith-Baptist-Church-125295160885258/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Jack Jenkins',
                    image: 'http://s3.amazonaws.com/churchplantmedia-cms/faith_baptist_orlando/color-10x10s--6-of-7-.jpg'
                },
                {
                    name: 'Rick Myers',
                    image: 'http://s3.amazonaws.com/churchplantmedia-cms/faith_baptist_orlando/color-10x10s--1-of-7-.jpg'
                },
                {
                    name: 'Ron Wood',
                    image: 'http://s3.amazonaws.com/churchplantmedia-cms/faith_baptist_orlando/color-10x10s--2-of-7-.jpg'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://frb.church",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://frb.church/index.php/sermons'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/Faith-Reformed-Baptist-Church-1820336101537385/?fref=ts'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://foresthillsbaptist.com",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://foresthillsbaptist.com/audio.html'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/Forest-Hills-Baptist-Church-216968481673811/?fref=ts'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.tampareformedbaptistchurch.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'https://tampareformedbaptistchurch.com/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/freegracechurchoftampabay/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Gary Carter',
                    image: 'http://tampareformedbaptistchurch.com/wp-content/uploads/2013/02/carter.jpg'
                }
            ],
            lastUpdated: '5/27/2017'
        }
    },
    {  
        coordinates: {
            lat: 28.802861,
            lng: -81.269453
        },
        details: {  
            name: "Grace Chapel",
            address: "100 Aero Ln, Sanford, FL 32771",
            region: "FL",
            website: "http://www.gracechapelonline.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.gracechapelonline.com/sermons/'
                }
            ],
            pastors: [
                {
                    name: 'Peter Catalano',
                    image: 'http://www.gracechapelonline.com/wp-content/uploads/2015/05/Peter-180x180.jpg'
                },
                {
                    name: 'Chris Hatton',
                    image: 'http://www.gracechapelonline.com/wp-content/uploads/2015/05/Chris-Hatton-180x180.png'
                },
                {
                    name: 'Mike White',
                    image: 'http://www.gracechapelonline.com/wp-content/uploads/2015/05/Mike-White-180x180.jpg'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://truegraceofgod.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://truegraceofgod.org/resources/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/truegraceofgod/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Tom Ascol',
                    image: 'http://truegraceofgod.org/monkimage.php?mediaDirectory=mediafiles&mediaId=3905076&fileName=tdascol-0-0-225-225.jpg'
                },
                {
                    name: 'Jared Longshore',
                    image: 'http://truegraceofgod.org/monkimage.php?mediaDirectory=mediafiles&mediaId=3905078&fileName=jhlongshore-0-0-225-225.jpg'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.gbcwp.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.gbcwp.com/gggt_current.htm'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/GraceBaptistNTB/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Michael Hildebrandt',
                    image: 'http://www.gbcwp.com/images/pastor-01.jpg'
                }
            ],
            lastUpdated: '5/27/2017'
        }
    },
    {  
        coordinates: {
            lat: 27.498344,
            lng: -81.441895
        },
        details: {  
            name: "Highlands Grace Reformed Church",
            address: "514 N.Pine St. Sebring,Fl. 33870",
            region: "FL",
            website: "http://reformed.wixsite.com/highlandsgracechurch",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://reformed.wixsite.com/highlandsgracechurch/sermons'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Highlands-Grace-Reformed-Church/111680555534252?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Ed Sager',
                    image: 'https://static.wixstatic.com/media/9b9ff0_1c5015d81d254884a60c17d13e6901ec~mv2_d_2992_2000_s_2.jpg/v1/fill/w_1010,h_900,al_c,q_85,usm_0.66_1.00_0.01/9b9ff0_1c5015d81d254884a60c17d13e6901ec~mv2_d_2992_2000_s_2.webp'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.iglesiacaminonuevo.com/",
            spanish: true,
            notes: [
                {
                    type: 'sermons',
                    data: 'http://iglesiacaminonuevo.com/icn/sermones'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/iglesiacaminonuevo.miami/?fref=ts'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://ibgnaples.blogspot.com/",
            spanish: true,
            notes: [
                {
                    type: 'sermons',
                    data: 'https://onedrive.live.com/?id=2F915EA2988E439A%211457&cid=2F915EA2988E439A'
                }
            ],
            lastUpdated: '5/27/2017'
        }
    },
    {  
        coordinates: {
            lat: 25.713639,
            lng: -80.43844
        },
        details: {  
            name: "Iglesia Bautista Independiente",
            address: "15082 SW 56th St, Miami, Florida 33185",
            region: "FL",
            website: "https://www.facebook.com/pages/Iglesia-Bautista-Independiente/111617155543025",
            spanish: true,
            notes: [
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Iglesia-Bautista-Independiente/111617155543025'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "https://www.facebook.com/pg/Monteocha-Baptist-Church-249770273186/about/?ref=page_internal",
            notes: [
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pg/Monteocha-Baptist-Church-249770273186/about/?ref=page_internal'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.chapellibrary.org/about/mt-zion-bible-church/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.chapellibrary.org/audio/mzbc-pulpit/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/chapellibrary/?fref=ts'
                }
            ],
            lastUpdated: '5/27/2017'
        }
    },
    {  
        coordinates: {
            lat: 28.654834,
            lng: -81.365326
        },
        details: {  
            name: "Orlando Grace Church",
            address: "872 Maitland Ave, Altamonte Springs, Florida",
            region: "FL",
            website: "http://www.orlandograce.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://orlandogracechurch.org/media/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/Orlando-Grace-Church-86507696915/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Curt Heffelfinger',
                    image: 'http://orlandogracechurch.org/wp-content/uploads/2014/10/Leadership-1-Curt-Heffelfinger.jpg'
                },
                {
                    name: 'Michael Graham',
                    image: 'http://orlandogracechurch.org/wp-content/uploads/2014/10/Leadership-2-Michael-Graham.jpg'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.pbcfl.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.pbcfl.org/sermons.html'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Providence-Baptist-Church/117599511598788?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Martin Hoffman'
                },
                {
                    name: 'Steve Watson'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.riverbendchurch.com/",
            noConfession: true,
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.riverbendchurch.com/sermons'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/RCC.OrmondBeach/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Scott Menesz',
                    image: 'http://s3.amazonaws.com/churchplantmedia-cms/riverbend_community/scott-gina1.jpg'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "https://www.facebook.com/pages/Westgate-Baptist-Church/111461602227524",
            lastUpdated: '5/27/2017'
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
            website: "http://www.arborheightsbc.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.arborheightsbc.com/sermons.html'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Arbor-Heights-Baptist-Church/114093461954656?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Randy Smith',
                    image: 'http://www.arborheightsbc.com/uploads/3/9/5/2/39520735/pic2906-xonvr2.jpg?304'
                }
            ],
            lastUpdated: '5/27/2017'
        }
    },
    {  
        coordinates: {
            lat: 33.880585,
            lng: -84.197169
        },
        details: {  
            name: "Atlanta Reformation Fellowship",
            address: "4320 Cowan Road, Tucker, Ga 30084",
            region: "GA",
            website: "http://www.atlantareformationfellowship.com/",
            familyIntegrated: true,
            notes: [
                {
                    type: 'meeting at',
                    data: 'Pine Creek Center'
                },
                {
                    type: 'sermons',
                    data: 'http://atlantareformationfellowship.com/sermon-audio/'
                }
            ],
            pastors: [
                {
                    name: 'Steve Atkerson',
                    image: 'http://atlantareformationfellowship.com/wp-content/uploads/2013/11/SteveSandra.png'
                },
                {
                    name: 'Ed Caouette',
                    image: 'http://atlantareformationfellowship.com/wp-content/uploads/2013/11/ed.png'
                },
                {
                    name: 'Denton Elliott',
                    image: 'http://atlantareformationfellowship.com/wp-content/uploads/2013/11/IMG_3620-225x300.jpg'
                }
            ],
            lastUpdated: '5/27/2017'
        }
    },
    {  
        coordinates: {
            lat: 33.833783,
            lng: -84.623075
        },
        details: {  
            name: "Berean Baptist Church",
            address: "3551 Jimmy Lee Smith Pkwy., Hiram, GA 30141",
            region: "GA",
            website: "http://www.bereanchurchps.org/",
            notes: [
                {
                    type: 'meeting at',
                    data: 'Bellamy Funeral Home'
                },
                {
                    type: 'sermons',
                    data: 'http://www.sermonaudio.com/source_detail.asp?sourceid=pastorslate'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/bereanrbc/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Jerry Slate',
                    image: 'http://www.bereanchurchps.org/img/photos/slate2.jpg'
                },
                {
                    name: 'David Harris',
                    image: 'http://www.bereanchurchps.org/img/photos/Harris.jpg'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.christreformedchurch.org/",
            familyIntegrated: true,
            notes: [
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/christreformed/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Robert Truelove',
                    image: 'http://www.christreformedchurch.org/wp-content/uploads/2015/05/robert.jpg'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://www.ebcjesup.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.ebcjesup.org/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/EBCJesupGA/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Thomas Waters'
                },
                {
                    name: 'Al Groover'
                },
                {
                    name: 'John Hubbard'
                }
            ],
            lastUpdated: '5/23/2017'
        }
    },
    {  
        coordinates: {
            lat: 32.249998,
            lng: -81.215274
        },
        details: {  
            name: "Redeemer Baptist Church",
            address: "226 Goshen Rd Rincon, GA 31326",
            region: "GA",
            website: "http://redeemerbaptistchurch.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://redeemerbaptistchurch.org/resource-library'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/VisitRBCGA/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Nick Kennicott',
                    image: 'http://media.cloversites.com/ed/ed11f6cc-68dc-4b1d-a14f-06707ef0619d/site-images/dfda3245-0143-4a08-b8df-6c29d55289f3@2x.png'
                },
                {
                    name: 'Sam Barber',
                    image: 'http://media.cloversites.com/ed/ed11f6cc-68dc-4b1d-a14f-06707ef0619d/site-images/cd5f3990-63b6-4062-bba1-a84be2de1851@2x.jpg'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://www.faithbiblechurch.us/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://faithbiblechurch.us/resources/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/faithbiblechurchsharpsburg/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'John Crotts',
                    image: 'http://faithbiblechurch.us/wp-content/uploads/2014/07/JCrotts.jpg'
                },
                {
                    name: 'Kent Keller',
                    image: 'http://faithbiblechurch.us/wp-content/uploads/2014/08/KKeller.jpg'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://www.gracechurchdawsonville.org/",
            familyIntegrated: true,
            notes: [
                {
                    type: 'sermons',
                    data: 'http://gracechurchdawsonville.org/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/Gracecommunity/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Ray Rhodes Jr.',
                    image: 'http://gracechurchdawsonville.org/wp-content/uploads/2012/08/IMG_7154-1024x756.jpg'
                },
                {
                    name: 'Lt. Col. Kevin Jarrard',
                    image: 'http://gracechurchdawsonville.org/wp-content/uploads/2012/08/IMG_7159t-1024x682.jpg'
                }
            ],
            lastUpdated: '5/23/2017'
        }
    },
    {  
        coordinates: {
            lat: 34.071654,
            lng: -84.306864
        },
        details: {  
            name: "Grace Church",
            address: "13660 New Providence, Alpharetta, GA 30009",
            region: "GA",
            website: "http://www.enjoygrace.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'https://enjoygrace.com/listen-online/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/Grace-Church-242761929132740/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Scott W. Kay',
                    image: 'https://enjoygrace.com/wp-content/uploads/2011/07/Kay-2011.jpg'
                },
                {
                    name: 'Mark Bearden',
                    image: 'https://enjoygrace.com/wp-content/uploads/2011/07/Bearden-2011.jpg'
                }
            ],
            lastUpdated: '5/23/2017'
        }
    },
    {  
        coordinates: {
            lat: 33.53571,
            lng: -84.523592
        },
        details: {  
            name: "Heritage Reformed Baptist Church",
            address: "150 Lester Road  Fayetteville, GA  30214",
            region: "GA",
            website: "http://www.heritagerbc.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.heritagerbc.org/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/heritagerbc/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Hank Rast'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://www.newhopebaptistchurch.wordpress.com/",
            lastUpdated: '5/23/2017'
        }
    },
    {  
        coordinates: {
            lat: 32.85812,
            lng: -83.770736
        },
        details: {  
            name: "Redeemer Baptist Church",
            address: "4652 Ayers Rd, Macon, GA 31210",
            region: "GA",
            website: "http://www.redeemer-baptist.org/",
            notes: [
                {
                    type: 'meeting at',
                    data: 'Covenant Academy'
                },
                {
                    type: 'sermons',
                    data: 'http://www.redeemer-baptist.org/pages/index.php?view=8'
                }
            ],
            pastors: [
                {
                    name: 'Eric Freel',
                    image: 'http://www.redeemer-baptist.org/images/redeemerPastors_eric.jpg'
                },
                {
                    name: 'Joel Hester',
                    image: 'http://www.redeemer-baptist.org/images/redeemerPastors_joe.jpg'
                },
                {
                    name: 'Jake Walls',
                    image: 'http://www.redeemer-baptist.org/images/redeemerPastors_jake.jpg'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://www.sgbcleesburg.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.sgbcleesburg.com/listen_to_a_sermon0.aspx'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Sovereign-Grace-Baptist-Church/461813127338771?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Steve Youngblood',
                    image: 'http://www.sgbcleesburg.com/images/pastors%20picture.jpg'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://www.trinityrbc.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://trinityrbc.org/?page_id=575'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Trinity-Reformed-Baptist-Church/172894626131781?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Brandon F. Smith'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://www.centralbaptisthawaii.org/",
            familyIntegrated: true,
            notes: [
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/cbchawaii/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Johnny Hom'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://honolulubiblechurch.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://honolulubiblechurch.org/sermons.htm'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/Honolulu-Bible-Church-515034545273200/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Billy Hopper'
                },
                {
                    name: 'Daniel Mather'
                },
                {
                    name: 'Guy Nishimoto'
                },
                {
                    name: 'Kevin Kondo'
                }
            ],
            lastUpdated: '5/23/2017'
        }
    },
    {  
        coordinates: {
            lat: 46.400409,
            lng: -117.001189
        },
        details: {  
            name: "Port Cities Reformed Baptist Church",
            address: "1424 Main Street in Lewiston, Idaho",
            region: "ID",
            website: "http://www.portcitiesreformed.org/",
            notes: [
                {
                    type: 'meeting at',
                    data: 'Lewiston Community Center'
                },
                {
                    type: 'sermons',
                    data: 'http://www.portcitiesreformed.org/index.php?option=com_content&view=article&id=48&Itemid=6'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Port-Cities-Reformed-Baptist-Church/999914580071045?fref=ts'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://www.sovereigngracefellowship.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.sovereigngracefellowship.org/recent-sermons/'
                }
            ],
            pastors: [
                {
                    name: 'Rick Hogaboam',
                    image: 'http://www.sovereigngracefellowship.org/wordpress/wp-content/uploads/2011/04/IMG_2346-768x549.jpg'
                },
                {
                    name: 'Matthew Masiewicz',
                    image: 'http://www.sovereigngracefellowship.org/wordpress/wp-content/uploads/2012/11/Set30051.JPG-682x1024.jpg'
                }
            ],
            lastUpdated: '5/23/2017'
        }
    },
    {  
        coordinates: {
            lat: 40.7905304,
            lng: -89.3555702
        },
        details: {  
            name: "Christ Reformed Baptist Church",
            address: "707 E. Mt. Vernon Street, Metamora, IL",
            region: "IL",
            website: "http://www.crbc.cc/",
            notes: [
                {
                    type: 'meeting at',
                    data: 'Mt. Vernon Shopping Center, next to McDonalds'
                },
                {
                    type: 'sermons',
                    data: 'http://www.crbc.cc/sermons.htm'
                }
            ],
            lastUpdated: '5/23/2017'
        }
    },
    {  
        coordinates: {
            lat: 42.036695,
            lng: -88.277529
        },
        details: {  
            name: "Grace Covenant Church",
            address: "411 River Road, Elgin IL",
            region: "IL",
            website: "http://www.gracecovenantchurch.net/",
            newHampshire: true,
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.gracecovenantchurch.net/sermons/?view=mobile'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Grace-Covenant-Church/894929637221933?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Paul Alexander',
                    image: 'http://storage.cloversites.com/gracecovenantchurchoffoxvalley/site_images/list_page43_item54_1382669266.jpg'
                },
                {
                    name: 'Dave Fassett',
                    image: 'http://storage.cloversites.com/gracecovenantchurchoffoxvalley/site_images/list_page43_item57_553bd804e76d8.jpg'
                }
            ],
            lastUpdated: '5/23/2017'
        }
    },
    {  
        coordinates: {
            lat: 42.28381,
            lng: -88.993774
        },
        details: {  
            name: "Grace Reformed Baptist Church",
            address: "6310 Guilford Rd. Rockford, IL 61107",
            region: "IL",
            website: "http://www.grbcrockford.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.grbcrockford.org/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Grace-Reformed-Baptist-Church/762674890442031?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Dale Smith',
                    image: 'http://www.grbcrockford.org/wp-content/uploads/2013/12/dale-smith.jpeg'
                },
                {
                    name: 'Allen Huber',
                    image: 'http://www.grbcrockford.org/wp-content/uploads/2013/12/al-huber.jpeg'
                }
            ],
            lastUpdated: '5/23/2017'
        }
    },
    {  
        coordinates: {
            lat: 41.5285314,
            lng: -87.7660643
        },
        details: {  
            name: "Hope Reformed Baptist Fellowship",
            address: "6200 Vollmer Road, Matteson, IL 60443",
            region: "IL",
            website: "http://www.hopereformedbaptistchurch.com",
            notes: [
                {
                    type: 'meeting at',
                    data: 'Old St. Paul\'s Church'
                },
                {
                    type: 'sermons',
                    data: 'https://hopereformedbaptistchurch.com/resources/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/HopeReformedBaptistChurchChicagoland/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'John Yoder'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://www.immanuelhomepage.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.immanuelhomepage.org/site/cpage.asp?sec_id=180019493&cpage_id=180095795'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/ibcbloomington/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Keith Throop',
                    image: 'http://www.immanuelhomepage.org/home/180019493/180019493/Images/12491929_10153812626290692_2629035299197194556_o-1.jpg'
                },
                {
                    name: 'George Drye',
                    image: 'http://www.immanuelhomepage.org/home/180019493/180019493/Images/12491929_10153812626290692_2629035299197194556_o-1.jpg'
                },
                {
                    name: 'Dennis Luhn'
                },
                {
                    name: 'Brent Flint'
                },
                {
                    name: 'Ben Murphy'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://www.livinghopechurch.net/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://livinghopechurch.net/sermon-archive/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/livinghoperoselle/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Matthew Black',
                    image: 'http://livinghopechurch.net/wp-content/uploads/2015/01/mattjill.jpg'
                },
                {
                    name: 'Michael Tiberi',
                    image: 'http://livinghopechurch.net/wp-content/uploads/2014/07/tiberis.jpg'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://www.newlifevh.org/",
            newHampshire: true,
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.newlifevh.org/resources/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/New-Life-Fellowship-Church/190111617699748?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Louis Love',
                    image: 'http://www.newlifevh.org/wp-content/uploads/2013/05/bio-love-sr.jpg'
                },
                {
                    name: 'Alton Grant, Jr.',
                    image: 'http://www.newlifevh.org/wp-content/uploads/2013/05/Grant-Family.jpg'
                },
                {
                    name: 'James "Billy" Little, III',
                    image: 'http://www.newlifevh.org/wp-content/uploads/2013/05/Little-Family.jpg'
                }
            ],
            lastUpdated: '5/23/2017'
        }
    },
    {  
        coordinates: {
            lat: 41.572728,
            lng: -90.368218
        },
        details: {  
            name: "Sycamore Reformed Baptist Church",
            address: "5323 180th Street North  East Moline, IL 61244",
            region: "IL",
            website: "http://www.sycamorebaptistchurch.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://sycamorebaptistchurch.com/multimedia-category/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/Sycamore-Reformed-Baptist-Church-202238264239/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Chuck Rennie',
                    image: 'http://sycamorebaptistchurch.com/wp-content/uploads/2011/10/untitled-10-641x960.jpg'
                },
                {
                    name: 'Jim Dopler',
                    image: 'http://sycamorebaptistchurch.com/wp-content/uploads/2011/10/untitled-22-686x960.jpg'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://www.christscovenant.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://christscovenant.org/sermon-archive/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/ChristsCovenant/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Nate Mclaurin',
                    image: 'http://ccchurch.wpengine.netdna-cdn.com/wp-content/uploads/2013/06/Nate-McLaurin-1024x1024.jpg'
                },
                {
                    name: 'Marc Goodwin',
                    image: 'http://ccchurch.wpengine.netdna-cdn.com/wp-content/uploads/2013/06/MarcGoodwin-1024x1024.jpg'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://www.cornerstone-fellowship.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.cornerstone-fellowship.org/sermons'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/CornerstoneFellowshipChurch/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Bill Francis',
                    image: 'http://s3.amazonaws.com/churchplantmedia-cms/cornerstone_fellowship_newburgh/pbill-quicklink_209x124.png'
                },
                {
                    name: 'Kevin Roberts',
                    image: 'http://s3.amazonaws.com/churchplantmedia-cms/cornerstone_fellowship_newburgh/kmr-page-photo-580x435-.png'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://www.edgewoodbaptistchurch.net/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.edgewoodbaptistchurch.net/streaming'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/Edgewood-Baptist-Church-104976559555374/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Tom Lutz',
                    image: 'http://www.edgewoodbaptistchurch.net/wp-content/uploads/2006/09/3-150x150.jpg'
                },
                {
                    name: 'Andy Lutz',
                    image: 'http://www.edgewoodbaptistchurch.net/wp-content/uploads/2006/09/1-300x300.jpg'
                },
                {
                    name: 'Bob Mahl',
                    image: 'http://www.edgewoodbaptistchurch.net/wp-content/uploads/2006/09/bob-150x150.jpg'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://www.fbccarmel.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.fbccarmel.com/sermons'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/First-Baptist-Church-of-Carmel-126895620658760/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Chad Knudson',
                    image: 'http://s3.amazonaws.com/churchplantmedia-cms/first_baptist_carmel/chad-r.jpg'
                },
                {
                    name: 'Kurt Larson',
                    image: 'http://s3.amazonaws.com/churchplantmedia-cms/first_baptist_carmel/kurt-r.jpg'
                },
                {
                    name: 'Rob Schloemer',
                    image: 'http://s3.amazonaws.com/churchplantmedia-cms/first_baptist_carmel/rob-r.jpg'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://www.gbcwarsaw.com/",
            notes: [
                {
                    type: 'meeting at',
                    data: 'The Meeting Place'
                },
                {
                    type: 'sermons',
                    data: 'http://www.gbcwarsaw.com/sermons.html'
                }
            ],
            pastors: [
                {
                    name: 'Aaron Hoak'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://www.gfcbremen.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.gfcbremen.com/media.html'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Grace-Fellowship-Church/108147295894316?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Jon Hueni',
                    image: 'http://www.gfcbremen.com/uploads/7/8/6/3/7863743/4918293.jpg?300'
                },
                {
                    name: 'Jason Webb',
                    image: 'http://www.gfcbremen.com/uploads/7/8/6/3/7863743/8660456.jpg'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://www.hrbchurch.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'https://www.sermonaudio.com/sermoninfo.asp?m=t&s=5211712295810'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/Hancock-Reformed-Baptist-Church-221742241178764/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Mark Judy',
                    image: 'https://static.wixstatic.com/media/4419d5_0968629761d9474cac2ddb5574d16bf2~mv2.jpg/v1/fill/w_672,h_428,al_c,q_80,usm_0.66_1.00_0.01/4419d5_0968629761d9474cac2ddb5574d16bf2~mv2.webp'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://www.prbcindy.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.prbcindy.com/sermons/'
                }
            ],
            pastors: [
                {
                    name: 'Pastor Bob',
                    image: 'http://www.prbcindy.com/wp-content/uploads/2014/03/20140310-141645.jpg'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://reformedbaptistoftama.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.sermonaudio.com/source_detail.asp?sourceid=rbctama'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Reformed-Baptist-Church/120334867978854?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Paul Rendall',
                    image: 'http://reformedbaptistoftama.com/images/paul.png'
                },
                {
                    name: 'Brian Squiers',
                    image: 'http://reformedbaptistoftama.com/images/brian.png'
                },
                {
                    name: 'Lyle Pakala',
                    image: 'http://reformedbaptistoftama.com/images/lyle.png'
                },
                {
                    name: 'Abraham Korodan',
                    image: 'http://reformedbaptistoftama.com/images/abe.png'
                }
            ],
            lastUpdated: '5/23/2017'
        }
    },
    {  
        coordinates: {
            lat: 39.048942,
            lng: -95.581523
        },
        details: {  
            name: "Trinity Reformed Baptist Church",
            address: "4307 SW 30th Terrace, Topeka, KS",
            region: "KS",
            website: "http://www.trinityreformedbaptist.org/",
            notes: [
                {
                    type: 'meeting at',
                    data: 'Pastor Spagnuolo\'s home'
                },
                {
                    type: 'sermons',
                    data: 'http://www.trinityreformedbaptist.org/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/TRBCTopeka/'
                }
            ],
            pastors: [
                {
                    name: 'Bob Spagnuolo',
                    image: 'http://www.trinityreformedbaptist.org/wpimages/wpaa68b932_05_06.jpg'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://newhopebaptistseneca.squarespace.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://newhopebaptistseneca.squarespace.com/sermons/'
                }
            ],
            pastors: [
                {
                    name: 'Curtis Knapp'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://www.reformedbaptistkc.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.reformedbaptistkc.org/sermons.php'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Reformed-Baptist-Church-of-Kansas-City/183188768699229?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Martin Nish'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://covenantbaptisthenderson.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://covenantbaptisthenderson.org/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/covenantbaptisthenderson/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Kenny Noblett',
                    image: 'http://covenantbaptisthenderson.org/wp-content/uploads/2012/08/nobletts.jpg'
                },
                {
                    name: 'Brian Whitman',
                    image: 'http://covenantbaptisthenderson.org/wp-content/uploads/2012/08/whitmans.jpg'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://www.grbco.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.grbco.org/index.php/grbcresources/sermons'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/grbco/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Sam Waldron',
                    image: 'http://www.grbco.org/images/waldron-01.jpg'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://www.hbcowensboro.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.hbcowensboro.org/sermons'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/hbcowensboro/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Jonathan Christman',
                    image: 'http://s3.amazonaws.com/churchplantmedia-cms/heritage_baptist_owensboro/monkimage-2-php.jpeg'
                },
                {
                    name: 'Mark Redfern',
                    image: 'http://s3.amazonaws.com/churchplantmedia-cms/heritage_baptist_owensboro/monkimage-3-php.jpeg'
                },
                {
                    name: 'Keith Maddy',
                    image: 'http://s3.amazonaws.com/churchplantmedia-cms/heritage_baptist_owensboro/monkimage-1-php.jpeg'
                },
                {
                    name: 'Ted Christman',
                    image: 'http://s3.amazonaws.com/churchplantmedia-cms/heritage_baptist_owensboro/monkimage-php.jpeg'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://www.rbclouisville.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.rbclouisville.com/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Reformed-Baptist-Church-of-Louisville/104967419546594?fref=ts&ref=br_tf'
                }
            ],
            pastors: [
                {
                    name: 'Charlie Hall'
                },
                {
                    name: 'Jim Savastio'
                },
                {
                    name: 'John Grevious'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://www.fbcclintonla.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.fbcclintonla.com/sermons.html'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/First-Baptist-Church/188351334554546?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Tom Hicks',
                    image: 'http://www.fbcclintonla.com/Images/leadership-tom-small.jpg'
                },
                {
                    name: 'Fred Malone',
                    image: 'http://www.fbcclintonla.com/Images/leadership-fred-small.jpg'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://www.gfbcla.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://gfbcla.com/sermons.html'
                }
            ],
            lastUpdated: '5/23/2017'
        }
    },
    {  
        coordinates: {
            lat: 31.415457,
            lng: -92.411804
        },
        details: {  
            name: "Providence Baptist Church",
            address: "53 Hammock Lane, Ball, LA 71405",
            region: "LA",
            website: "",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.sermonaudio.com/search.asp?SourceOnly=true&currSection=sermonssource&keyword=providencebc'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pbcreformed/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'William Avants'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://www.sgfellowship.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.sgfellowship.org/sermon-audio.html'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/Sovereign-Grace-Fellowship-302275116458352/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Eddie Exposito'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://www.trinitybaptistreformed.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.trinitybaptistreformed.org/Page04Sermons.html'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Trinity-Baptist-Church/196234257391882?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Dale Crawford',
                    image: 'http://www.trinitybaptistreformed.org/files/Crawfords.jpg'
                },
                {
                    name: 'Chad Chauvin',
                    image: 'http://www.trinitybaptistreformed.org/files/Chauvins.jpg'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://www.lfbcreformed.org/",
            notes: [
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Free-Baptist-Church/548663868632547?fref=ts'
                }
            ],
            lastUpdated: '5/23/2017'
        }
    },
    {  
        coordinates: {
            lat: 43.9153875,
            lng: -69.967894
        },
        details: {  
            name: "Grace Reformed Baptist Church",
            address: "35 Union St, Brunswick, ME 04011",
            region: "ME",
            website: "http://www.grbcme.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.gbcconway.com/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/grbcme/?fref=ts'
                }
            ],
            lastUpdated: '5/23/2017'
        }
    },
    {  
        coordinates: {
            lat: 39.485981,
            lng: -77.350802
        },
        details: {  
            name: "Providence Reformed Baptist Church",
            address: "40 Main St. Walkersville, MD",
            region: "MD",
            website: "https://providencereformedbaptistchurch.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'https://providencereformedbaptistchurch.com/sermons/'
                }
            ],
            lastUpdated: '5/23/2017'
        }
    },
    {  
        coordinates: {
            lat: 39.0669499,
            lng: -76.6728792
        },
        details: {  
            name: "Grace Baptist Church of Odenton",
            address: "100 Dairy Lane, Gambrills, MD",
            region: "MD",
            website: "http://www.gracebaptistonline.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.gbcconway.com/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/Grace-Baptist-Church-of-Odenton-164388436950370/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Doug Mixer',
                    image: 'http://www.gracebaptistonline.com/wp-content/uploads/2010/10/Family-199x300.jpg'
                },
                {
                    name: 'Richard Queen',
                    image: 'http://www.gracebaptistonline.com/wp-content/uploads/2010/10/queen.jpg'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://www.newlifemd.org/",
            notes: [
                {
                    type: 'meeting at',
                    data: 'Beachmont Christian Camp, Upper level of Field House'
                },
                {
                    type: 'sermons',
                    data: 'http://www.newlifemd.org/sermons/'
                }
            ],
            pastors: [
                {
                    name: 'Paul Hamilton'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://www.austinsquarechurch.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://austinsquarechurch.com/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/austinsquarebaptist/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Dr. Steven P. Wilfert',
                    image: 'https://i2.wp.com/austinsquarechurch.com/wp-content/uploads/2016/12/Scan.jpg?zoom=2&resize=395%2C500'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://www.thewordoftruth.net/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.thewordoftruth.net/sermons.html'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/First-Baptist-Church-of-Leominster/121196384562056?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Lars Larson'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://firstchurchhixville.webs.com/",
            notes: [
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/firstchurchofhixville/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Edward J. Baci'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://pilgrimreformed.weebly.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://pilgrimreformed.weebly.com/messages.html'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/PilgrimReformed/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Robert J. Burreli Jr.',
                    image: 'http://pilgrimreformed.weebly.com/uploads/3/7/6/5/37651645/dr-burrelli-copy_orig.jpg'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://www.netministries.org/see/churches/ch01846",
            pastors: [
                {
                    name: 'Ronald Johnson'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://www.hbcma.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.hbcma.org/home/?page_id=25'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/Heritage-Baptist-Church-116399681717460/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Mike Renihan'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://www.providencebaptistchurchma.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.providencebaptistchurchma.org/sermons/sermons.htm'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Providence-Baptist-Church/163750666984108?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Mark Lukens',
                    image: 'http://www.providencebaptistchurchma.org/images/Mark_pic_website.JPG'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: '"http://www.rehobothbaptistchurch.org/"',
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.rehobothbaptistchurch.org/rbc_sermons.php'
                }
            ],
            pastors: [
                {
                    name: 'Stephen E. Kitchen',
                    image: 'http://www.rehobothbaptistchurch.org/images/steve_kitchen.jpg'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://www.sermon.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.sermon.org/sermons'
                }
            ],
            pastors: [
                {
                    name: 'Gordon Cook',
                    image: 'http://www.sermon.org/img/resource_photos/1398211464cook.jpg'
                }
            ],
            lastUpdated: '5/23/2017'
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
            website: "http://www.girbc.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.sermonaudio.com/source_detail.asp?sourceid=girbc'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/gbcconway/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Jeff Johnson',
                    image: 'http://new.girbc.org/sites/default/files/rotor/jjohnson.png'
                },
                {
                    name: 'Matt Vincent',
                    image: 'http://new.girbc.org/sites/default/files/rotor/MattVincent.png'
                },
                {
                    name: 'Greg Nichols'
                }
            ],
            lastUpdated: '5/24/2017'
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
            website: "http://www.harborchurchholland.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'https://www.harborchurchholland.org/harbor-audio/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/HarborChurchHolland/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Mark Chanski',
                    image: 'https://www.harborchurchholland.org/wp-content/uploads/2012/07/prChanski.png'
                },
                {
                    name: 'Kevin Filcik'
                }
            ],
            lastUpdated: '5/24/2017'
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
            website: "http://www.reformedbaptistchurchlenawee.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.sermonaudio.com/source_detail.asp?sourceid=rbcl'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Reformed-Baptist-Church-of-Lenawee/793003354150816?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Calvin Walden'
                },
                {
                    name: 'Aaron Deline'
                }
            ],
            lastUpdated: '5/24/2017'
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
            website: "http://www.reformedbaptistmn.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://reformedbaptistmn.org/welcome/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Providence-Reformed-Baptist-Church/109287559111911?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Steve Nutter',
                    image: 'http://reformedbaptistmn.org/welcome/wp-content/uploads/2015/05/Steve-Nutter.jpeg'
                }
            ],
            lastUpdated: '5/24/2017'
        }
    },
    {  
        coordinates: {
            lat: 31.722461,
            lng: -89.135356
        },
        details: {  
            name: "Audubon Drive Bible Church",
            address: "2601 Audubon Drive, Laurel, MS 39441",
            region: "MS",
            website: "http://www.audubonchurch.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.audubonchurch.org/sermons_videos'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/gbcconway/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Jeff Johnson',
                    image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
                },
                {
                    name: 'Wyeth Wallis',
                    image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
                }
            ],
            lastUpdated: '5/24/2017'

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
            website: "http://www.bridgetownbaptist.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://bridgetownbaptist.org/church/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/bridgetownbaptistchurch/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Larry W. Dean',
                    image: 'http://www.bridgetownbaptist.org/church/wp-content/uploads/2012/larrywdean-new.jpg'
                }
            ],
            lastUpdated: '5/24/2017'
        }
    },
    {  
        coordinates: {
            lat: 34.962207,
            lng: -89.832558
        },
        details: {  
            name: "Christ Covenant Church",
            address: "8857 Goodman Rd. Ste E Olive Branch MS",
            region: "MS",
            website: "http://www.christcovenantob.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.christcovenantob.org/listen-online.html'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/christcovenantob/?fref=ts'
                }
            ],
            lastUpdated: '5/24/2017'
        }
    },
    {  
        coordinates: {
            lat: 32.378259,
            lng: -90.141087
        },
        details: {  
            name: "Grace Baptist Church",
            address: "5536 Ridgewood Rd, Jackson, MS  39209",
            region: "MS",
            website: "http://www.gracejackson.net/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.gbcjackson.org/sermon-archive/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/gbcjackson1689/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Thomas Winn',
                    image: 'https://static1.squarespace.com/static/5696fa0189a60af13b06013d/t/576843bbe3df28a1e7692de7/1466450881426/?format=500w'
                }
            ],
            lastUpdated: '5/24/2017'

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
            website: "http://ibbreformada.org/",
            spanish: true,
            notes: [
                {
                    type: 'sermons',
                    data: 'http://ibbreformada.org/sermones/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/IBBlawrence/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Juan Martinez'
                }
            ],
            lastUpdated: '5/24/2017'
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
            website: "http://www.rockportbaptist.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.rockportbaptist.org/sermon-audio/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/RockportBaptist/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Scott Lee',
                    image: 'http://www.rockportbaptist.org/wp-content/uploads/2012/10/scott-275x360.jpg'
                }
            ],
            lastUpdated: '5/24/2017'
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
            website: "http://www.southcreekchurch.org/",
            noConfession: true,
            notes: [
                {
                    type: 'sermons',
                    data: 'http://southcreekchurch.org/archive/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/SouthCreekChurch/?fref=ts'
                }
            ],
            lastUpdated: '5/24/2017'
        }
    },
    {  
        coordinates: {
            lat: 47.004302,
            lng: -112.068537
        },
        details: {  
            name: "Wolf Creek Baptist Church",
            address: "250 Recreation Rd, Wolf Creek, MT 59648",
            region: "MT",
            website: "http://www.wolfcreekbaptist.com",
            notes: [
                {
                    type: 'meeting at',
                    data: 'Old railroad depot next to the Oasis restaurant'
                },
                {
                    type: 'sermons',
                    data: 'http://www.wolfcreekbaptist.com/index.php/wcsermons'
                }
            ],
            pastors: [
                {
                    name: 'Robin Jackson'
                }
            ],
            lastUpdated: '5/24/2017'
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
            website: "http://www.gbcpapillion.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://gbcpapillion.org/sermons.html'
                }
            ],
            pastors: [
                {
                    name: 'Louis Sloger',
                    image: 'http://gbcpapillion.org/img/Slogerthumb.jpg'
                },
                {
                    name: 'James Tyler',
                    image: 'http://gbcpapillion.org/img/PJaboutus.jpg'
                }
            ],
            lastUpdated: '5/24/2017'
        }
    },
    {  
        coordinates: {
            lat: 39.495390,
            lng: -119.792382
        },
        details: {  
            name: "Community Bible Church",
            address: "385 Gentry Way, Reno NV 89502",
            region: "NV",
            website: "http://www.cbcreno.net/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.cbcreno.net/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/Community-Bible-Church-385861471486151/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Todd Musser',
                    image: 'https://static1.squarespace.com/static/57550fc445bf21e8496fed82/t/5755160101dbae9f3c9d7da4/1465194294680/?format=500w'
                },
                {
                    name: 'Mark Cordano',
                    image: 'https://static1.squarespace.com/static/57550fc445bf21e8496fed82/t/5755163607eaa05442bdbe6d/1465194051657/?format=500w'
                },
                {
                    name: 'Keller HackBusch',
                    image: 'https://static1.squarespace.com/static/57550fc445bf21e8496fed82/t/5755164e07eaa05442bdbecc/1465194069545/?format=500w'
                },
                {
                    name: 'Akash Sant Singh',
                    image: 'https://static1.squarespace.com/static/57550fc445bf21e8496fed82/t/5755166107eaa05442bdbf19/1465194089952/?format=500w'
                }
            ],
            lastUpdated: '5/24/2017'
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
            website: "http://gracenevada.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://gracenevada.com/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/grace.nevada.5/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Brian Borgman',
                    image: 'http://gracenevada.com/wp-content/uploads/2016/12/Brian-Borgman-180x180.jpg'
                },
                {
                    name: 'Steve Nugent',
                    image: 'http://gracenevada.com/wp-content/uploads/2016/12/Steve-Nugent-180x180.jpg'
                },
                {
                    name: 'Vic Rice',
                    image: 'http://gracenevada.com/wp-content/uploads/2016/12/Vic-Rice-180x180.jpg'
                },
                {
                    name: 'Charlie Jarrett',
                    image: 'http://gracenevada.com/wp-content/uploads/2016/12/Charlie-Jarrett-180x180.jpg'
                },
                {
                    name: 'Jason Ching',
                    image: 'http://gracenevada.com/wp-content/uploads/2016/12/Jason-Ching-180x180.jpg'
                }
            ],
            lastUpdated: '5/24/2017'
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
            website: "http://cbcexeter.sermonaudio.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://cbcexeter.sermonaudio.com/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/Calvary-Baptist-Church-151621744855004/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'D. Scott Meadows',
                    image: 'http://www.sermonaudio.com/images/overlayphoto.PNG'
                }
            ],
            lastUpdated: '5/24/2017'
        }
    },
    {  
        coordinates: {
            lat: 43.726034,
            lng: -72.142917
        },
        details: {  
            name: "Christ Redeemer Church",
            address: "41 Lebanon Street, Hanover, NH",
            region: "NH",
            website: "http://www.christredeemerchurch.org/",
            notes: [
                {
                    type: 'meeting at',
                    data: 'Auditorium of Hanover High School'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/crchanover/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Don Willeman',
                    image: 'http://christredeemerchurch.org/home/wp-content/uploads/2015/08/Willemans3.jpg'
                }
            ],
            lastUpdated: '5/24/2017'
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
            website: "http://faithbiblechurchnh.org/",
            familyIntegrated: true,
            lastUpdated: '5/24/2017'

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
            website: "http://www.sovgracenh.com/",
            noConfession: true,
            notes: [
                {
                    type: 'sermons',
                    data: 'http://sovereigngracenh.com/wordpress/category/sundays-message/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/Sovereigngracefellowship/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Mike Foss',
                    image: 'http://sovereigngracenh.com/wordpress/wp-content/uploads/ordination-mike-sm.png'
                },
                {
                    name: 'Ed Kelley',
                    image: 'http://sovereigngracenh.com/wordpress/wp-content/uploads/ordination-mike-sm.png'
                },
                {
                    name: 'Henry Turgeon',
                    image: 'http://sovereigngracenh.com/wordpress/wp-content/uploads/ordination-mike-sm.png'
                },
                {
                    name: 'Moe Bergeron',
                    image: 'http://sovereigngracenh.com/wordpress/wp-content/uploads/ordination-mike-sm.png'
                }
            ],
            lastUpdated: '5/24/2017'
        }
    },
    {  
        coordinates: {
            lat: 42.979764,
            lng: -72.348003
        },
        details: {  
            name: "Westmoreland Reformed Bible Church",
            address: "Route #12 Westmoreland NH 03467 United States",
            region: "NH",
            website: "http://www.netministries.org/see/churches.exe/ch01426",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.gbcconway.com/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Reformed-Bible-Church/148200948539773?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Ken Sanders'
                }
            ],
            lastUpdated: '5/24/2017'
        }
    },
    {  
        coordinates: {
            lat: 40.966206,
            lng: -74.257393
        },
        details: {  
            name: "Bread of Life Fellowship",
            address: "1559 Hamburg Tpke, Wayne, NJ 07470",
            region: "NJ",
            website: "http://www.bolfellowship.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.bolfellowship.org/index.php/media/sermons'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/bolfellowship/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Joseph LoSardo',
                    image: 'http://www.bolfellowship.org/images/stories/pastor%20joe.png'
                },
                {
                    name: 'Damien Garofalo',
                    image: 'http://www.bolfellowship.org/images/stories/damien.jpg'
                },
                {
                    name: 'Eli Adamo',
                    image: 'http://www.bolfellowship.org/images/stories/deacon%20eli.jpg'
                }
            ],
            lastUpdated: '5/24/2017'
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
            website: "http://www.cfcnb.org/",
            noConfession: true,
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.cfcnb.org/index.php?p=audio_2010'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Christian-Fellowship-Church/108097015899267?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Steve Sherman',
                    image: 'http://www.cfcnb.org/images/pic_steve_sherman.jpg'
                }
            ],
            lastUpdated: '5/24/2017'

      }
    },
    {  
        coordinates: {
            lat: 39.9605,
            lng: -74.8067
        },
        details: {  
            name: "Covenant Baptist Church",
            address: "528 Main Street  Lumberton, NJ  08048",
            region: "NJ",
            website: "http://www.cbclumberton.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.cbclumberton.com/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/CovenantBaptistChurchLumberton/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'John Reuther',
                    image: 'https://i1.wp.com/www.cbclumberton.com/wp-content/uploads/2016/06/Pastor-R-and-Wife.jpg?zoom=2&w=1080'
                }
            ],
            lastUpdated: '5/24/2017'
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
            website: "http://www.ebcnj.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.ebcnj.com/sermons.html'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/englewoodbaptistnj/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Jim Domm',
                    image: 'http://www.ebcnj.com/uploads/1/8/7/5/18759970/4273493.jpg?147'
                },
                {
                    name: 'Ron Abrahamsen',
                    image: 'http://www.ebcnj.com/uploads/1/8/7/5/18759970/9297725.jpg?130'
                }
            ],
            lastUpdated: '5/24/2017'
        }
    },
    {  
        coordinates: {
            lat: 40.739928,
            lng: -74.234761
        },
        details: {  
            name: "Grace Reformed Baptist Church",
            address: "639 Sandford Ave.  Newark, NJ 07106",
            region: "NJ",
            website: "http://www.sermonaudio.com/source_detail.asp?sourceid=grbc-newark",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.sermonaudio.com/source_detail.asp?sourceid=grbc-newark'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/gbcconway/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Jeff Johnson',
                    image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
                },
                {
                    name: 'Wyeth Wallis',
                    image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
                }
            ],
            lastUpdated: '5/24/2017'
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
            website: "http://gcbcnj.squarespace.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.sermonaudio.com/source_detail.asp?sourceid=gcbcnj'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/gracebaptchurch/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Alan Dunn',
                    image: 'https://static1.squarespace.com/static/55b69018e4b0cc4be2725746/t/562ee101e4b0399cd6ae4219/1445912842736/?format=1000w'
                }
            ],
            lastUpdated: '5/24/2017'
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
            website: "http://www.ibrnj.org/",
            spanish: true,
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.ibrnj.org/sermon-audio/'
                }
            ],
            pastors: [
                {
                    name: 'Eugenio Pinero',
                    image: 'http://www.ibrnj.org/wp-content/uploads/Pastor-Pinero.jpg'
                },
                {
                    name: 'Harvey Martinez',
                    image: 'http://www.ibrnj.org/wp-content/uploads/hm-retrato.png'
                }
            ],
            lastUpdated: '5/24/2017'
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
            website: "http://www.sermonaudio.com/source_detail.asp?sourceid=rbclnj",
            notes: [
                {
                    type: 'sermons',
                    data: "http://www.sermonaudio.com/source_detail.asp?sourceid=rbclnj"
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/ReformedBaptistChurchOfLafayette/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Patrick Harrison'
                }
            ],
            lastUpdated: '5/24/2017'

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
            website: "http://www.trinitymontville.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.trinitymontville.org/sermon-audio'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/TrinityBaptistMontvilleNj/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Jeff Smith',
                    image: 'http://s3.amazonaws.com/churchplantmedia-cms/trinity_baptist_montville/elders.jpg'
                },
                {
                    name: 'David Chanski',
                    image: 'http://s3.amazonaws.com/churchplantmedia-cms/trinity_baptist_montville/elders.jpg'
                },
                {
                    name: 'Bart Carlson',
                    image: 'http://s3.amazonaws.com/churchplantmedia-cms/trinity_baptist_montville/elders.jpg'
                },
                {
                    name: 'Shehzad Khan',
                    image: 'http://s3.amazonaws.com/churchplantmedia-cms/trinity_baptist_montville/elders.jpg'
                }
            ],
            lastUpdated: '5/24/2017'
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
            website: "http://www.albuquerquesovereigngrace.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.albuquerquesovereigngrace.org/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Albuquerque-Sovereign-Grace-Baptist-Church/113819585315420?fref=ts'
                }
            ],
            lastUpdated: '5/24/2017'
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
            website: "http://churchoftheredeemerll.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://churchoftheredeemerll.org/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/Church-of-the-Redeemer-259677933668/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Robert Browning',
                    image: 'http://churchoftheredeemerll.org/wp-content/uploads/2016/08/rbrowning1.png'
                }
            ],
            lastUpdated: '5/24/2017'
        }
    },
    {  
        coordinates: {
            lat: 31.866030,
            lng: -106.647704
        },
        details: {  
            name: "Santa Teresa Baptist Church",
            address: "5750 McNutt Road, Santa Teresa, NM 88008",
            region: "NM",
            website: "http://www.stbcweb.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.stbcweb.org/messages/?view=mobile'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/SantaTeresaBaptistChurch/?fref=ts'
                }
            ],
            lastUpdated: '5/24/2017'
        }
    },
    {  
        coordinates: {
            lat: 31.865880,
            lng: -106.648
        },
        details: {  
            name: "Iglesia Bautista Emmanuel",
            address: "5750 McNutt Road, Santa Teresa, NM 88008",
            region: "NM",
            website: "http://www.stbcweb.org/about-us/iglesia-bautista-emmanuel/?view=mobile",
            spanish: true,
            pastors: [
                {
                    name: 'Carlos Pino'
                }
            ],
            lastUpdated: '5/24/2017'
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
            website: "http://www.albanybaptist.net/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://albanybaptist.net/home/#sermons'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/Albany-Baptist-Church-302885496759260/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Mark Sarver',
                    image: 'http://albanybaptist.net/wp-content/uploads/2015/10/2011-fall-tday-005-300x225.jpg'
                },
                {
                    name: 'William Hill',
                    image: 'http://albanybaptist.net/wp-content/uploads/2015/10/2011-fall-tday-005-300x225.jpg'
                }
            ],
            lastUpdated: '5/24/2017'
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
            website: "http://www.blbc.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'https://www.sermonaudio.com/source_detail.asp?sourceid=blbcsa'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Ballston-Lake-Baptist-Church/113423902024692?fref=ts'
                }
            ],
            lastUpdated: '5/25/2017'
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
            website: "http://galwaybaptist.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://galwaybaptist.com/index.php/sermons'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/Bible-Baptist-Church-of-Galway-239555056130486/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Wayne Brandow',
                    image: 'http://galwaybaptist.com/images/pastor.jpg'
                }
            ],
            lastUpdated: '5/26/2017'

      }
    },
    {  
        coordinates: {
            lat: 42.365949,
            lng: -75.679271
        },
        details: {  
            name: "Brisben Baptist Church",
            address: "2717 State HWY 12 Oxford, NY 13830",
            region: "NY",
            website: "http://netministries.org/see/churches/ch01276",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.gbcconway.com/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Brisben-Baptist-Church/153380294674832?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Jerry Shriver'
                }
            ],
            lastUpdated: '5/26/2017'
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
            website: "http://www.clarksonchurch.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://clarksonchurch.com/?page_id=52'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/ClarksonChurch/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Tony Bartolucci',
                    image: 'http://clarksonchurch.com/wp-content/uploads/2016/01/tony-lois-and-giana-2014-608x405.jpg'
                },
                {
                    name: 'Kevin Lapp',
                    image: 'http://groundedingrace.com/Test/wp-content/uploads/2013/12/Kevin-300x192.jpg'
                },
                {
                    name: 'Chip Walker',
                    image: 'http://groundedingrace.com/Test/wp-content/uploads/2013/12/Chip-300x230.jpg'
                }
            ],
            lastUpdated: '5/26/2017'
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
            website: "http://www.cliftonparkcommunitychurch.org/",
            noConfession: true,
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.cliftonparkcommunitychurch.org/sermons.html'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/Clifton-Park-Community-Church-116639268360098/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'David Bissett',
                    image: 'http://www.cliftonparkcommunitychurch.org/uploads/1/0/9/3/10930922/7684724.jpg?1415978281'
                },
                {
                    name: 'George Bailey',
                    image: 'http://www.cliftonparkcommunitychurch.org/uploads/1/0/9/3/10930922/1415979203.png'
                },
                {
                    name: 'Jonathan Rohrer',
                    image: 'http://www.cliftonparkcommunitychurch.org/uploads/1/0/9/3/10930922/1415979240.png'
                },
                {
                    name: 'Brian Spivey',
                    image: 'http://www.cliftonparkcommunitychurch.org/uploads/1/0/9/3/10930922/7951629.jpg?115'
                },
                {
                    name: 'Craig Thomas',
                    image: 'http://www.cliftonparkcommunitychurch.org/uploads/1/0/9/3/10930922/1415979150.png'
                }
            ],
            lastUpdated: '5/26/2017'
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
            website: "https://gracebcdansville.radiantwebtools.com",
            notes: [
                {
                    type: 'sermons',
                    data: 'https://gracebcdansville.radiantwebtools.com/resources/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/gracebcdansville/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Dave Theobald',
                    image: 'https://gracebcdansville.radiantwebtools.com/files/gracebcdansville/people/davefacesm.jpg'
                },
                {
                    name: 'Matt Gibson',
                    image: 'https://gracebcdansville.radiantwebtools.com/files/gracebcdansville/people/mattthumb.jpg'
                }
            ],
            lastUpdated: '5/26/2017'
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
            website: "http://www.vor.org/gbcofrochester",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.vor.org/gbcofrochester/GBC_Sermons.htm'
                }
            ],
            pastors: [
                {
                    name: 'John Price'
                }
            ],
            lastUpdated: '5/26/2017'
        }
    },
    {  
        coordinates: {
            lat: 41.633774,
            lng: -74.265333
        },
        details: {  
            name: "Grace Reformed Baptist Church",
            address: "Red Mills Road, Pine Bush, New York",
            region: "NY",
            website: "http://www.gracerbc.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.sermonaudio.com/source_detail.asp?sourceid=gracerbc'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Grace-Reformed-Baptist-Church/377385859125855?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Paul Gordon',
                    image: 'http://www.sermonaudio.com/images/overlayphoto.PNG'
                }
            ],
            lastUpdated: '5/26/2017'
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
            website: "http://www.gracereformedbaptistchurch.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://gracereformedbaptistchurch.com/our-ministries/sermon-audio-stream/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/grbcli/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Marc Grimaldi',
                    image: 'http://www.sermonaudio.com/images/overlayphoto.PNG'
                }
            ],
            lastUpdated: '5/26/2017'
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
            website: "http://www.hopereformedli.net/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.hopereformedli.net/audio/sermons/index.html'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/HopeReformedBaptistChurch/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Jim Capo'
                }
            ],
            lastUpdated: '5/26/2017'
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
            website: "http://www.redmillsbaptist.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.redmillsbaptist.org/resources/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Red-Mills-Baptist-Church/126629227391304?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'James Harrison',
                    image: 'http://www.redmillsbaptist.org/media/Harrisons.jpg'
                },
                {
                    name: 'David Fiore'
                }
            ],
            lastUpdated: '5/26/2017'
        }
    },
    {  
        coordinates: {
            lat: 42.936345,
            lng: -78.844911
        },
        details: {  
            name: "Refreshing Springs Church",
            address: "2057 Genesee St., Buffalo, NY",
            region: "NY",
            website: "http://www.refreshingspringsministries.com/",
            noConfession: true,
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.refreshingspringsministries.com/site/audiodownloads.asp?sec_id=140000066'
                }
            ],
            pastors: [
                {
                    name: 'Emory Brown'
                },
                {
                    name: 'Larry Wolf'
                },
                {
                    name: 'Wayne Norman'
                }
            ],
            lastUpdated: '5/26/2017'
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
            website: "http://www.catherinelakebaptist.com/",
            noConfession: true,
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.gbcconway.com/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/CatherineLakeBaptistChurch/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Brian',
                    image: 'http://catherinelakebaptist.com/blog/wp-content/uploads/2017/01/fullsizeoutput_25-300x300.jpeg'
                }
            ],
            lastUpdated: '5/26/2017'
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
            website: "http://www.covenantcaswell.org/",
            noConfession: true,
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.covenantcaswell.org/'
                }
            ],
            pastors: [
                {
                    name: 'John Carpenter',
                    image: 'http://covenantcaswell.com/_Media/john-dedication_med_hr.jpeg'
                }
            ],
            lastUpdated: '5/26/2017'
        }
    },
    {  
        coordinates: {
            lat: 35.463815,
            lng: -82.574385
        },
        details: {  
            name: "Crosspoint Church",
            address: "899 Glennbridge Road SE, Arden, NC 28704",
            region: "NC",
            website: "http://crosspointasheville.org/",
            notes: [
                {
                    type: 'meeting at',
                    data: 'Avery\'s Creek Community Center'
                },
                {
                    type: 'sermons',
                    data: 'http://crosspointasheville.org/resources/sermons/?view=mobile'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/gbcconway/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Jeff Porter',
                    image: 'http://storage.cloversites.com/crosspointchurch1/site_images/list_page17_item3_53dcf9105cd89.jpg'
                },
                {
                    name: 'Greg Hostetler',
                    image: 'http://storage.cloversites.com/crosspointchurch1/site_images/list_page17_item2_53d9a8af8a50d.jpg'
                },
                {
                    name: 'Nathan Renfro',
                    image: 'http://storage.cloversites.com/crosspointchurch1/site_images/list_page17_item4_53de857232c2a.jpg'
                }
            ],
            lastUpdated: '5/26/2017'
        }
    },
    {  
        coordinates: {
            lat: 35.034483,
            lng: -80.654996
        },
        details: {  
            name: "Grace Fellowship Church",
            address: "2151 Wesley Chapel Rd, Indian Trail, NC 28079",
            region: "NC",
            website: "http://www.gracecharlotte.org/",
            noConfession: true,
            notes: [
                {
                    type: 'sermons',
                    data: 'http://gracecharlotte.org/?page_id=19'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Grace-Fellowship-Church/111762785526657?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Greg Johnson'
                },
                {
                    name: 'Shawn Hill'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.grbc.net/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.grbc.net/resources/sermons'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Grace-Reformed-Baptist/279566478766749?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Gary Hendrix',
                    image: 'http://www.grbc.net/wp-content/uploads/2015/08/gary-hendrix-medium.jpg'
                },
                {
                    name: 'Stu Johnston',
                    image: 'http://www.grbc.net/wp-content/uploads/2015/08/stu-johnston-medium.jpg'
                },
                {
                    name: 'Andy Dunkerton',
                    image: 'http://www.grbc.net/wp-content/uploads/2015/08/andy-dunkerton-medium.jpg'
                },
                {
                    name: 'Charles Fortner',
                    image: 'http://www.grbc.net/wp-content/uploads/2015/08/charles-fortner-medium.jpg'
                },
                {
                    name: 'Robert Fisher',
                    image: 'http://www.grbc.net/wp-content/uploads/2015/08/robert-fisher-medium.jpg'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://gracereformedbaptist.org/home",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://gracereformedbaptist.org/sermons'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/grbcrm/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Christopher Sheffield'
                }
            ],
            lastUpdated: '5/27/2017'
        }
    },
    {  
        coordinates: {
            lat: 36.078188,
            lng: -79.407479
        },
        details: {  
            name: "North Graham Baptist Church ",
            address: "721 Washington St. Graham, NC 27253",
            region: "NC",
            website: '"http://www.northgrahambaptist.org/"',
            notes: [
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/North-Graham-Baptist-Church-116114888424720/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Pastor Randy',
                    image: 'http://northgrahambaptist.org/web_images/pulpit_picture.jpg'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.reformedchurchofeden.org/",
            pastors: [
                {
                    name: 'Larry Grigsby'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.sgchapel.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.sgchapel.org/p/blog-page.html'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Sovereign-Grace-Chapel/114080808619239?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Harvey Smallwood',
                    image: 'https://3.bp.blogspot.com/-r94UEBEyAPA/VZIbygtuW6I/AAAAAAAAA0A/LuoRnB0r_Rw/s200/IMG_7406.JPG'
                },
                {
                    name: 'Anthony Wright',
                    image: 'https://2.bp.blogspot.com/-_vT50CNxhps/VZIb_tj0A9I/AAAAAAAAA0I/24PONHmWXPw/s200/IMG_7409.JPG'
                },
                {
                    name: 'Stoney Crosby',
                    image: 'https://1.bp.blogspot.com/-LhGRBJV0scE/VZIfMVGWvvI/AAAAAAAAA0w/8SfSXtdt2OI/s200/IMG_7415.JPG'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.wordofgracebaptistchurch.org/",
            notes: [
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/WordOfGraceBaptistChurch/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Jonathan Martin'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.cbcfargo.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.cbcfargo.com/site/Resources/sermons.php'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/CBCFargo/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Doug VanderMeulen',
                    image: 'http://www.cbcfargo.com/site/photos/Misc/Elders2016.JPG'
                },
                {
                    name: 'Claire Rauser'
                }
            ],
            lastUpdated: '5/27/2017'
        }
    },
    {  
        coordinates: {
            lat: 40.053483,
            lng: -82.718799
        },
        details: {  
            name: "Faith Bible Church",
            address: "12239 Morse Rd.  SW Pataskala, OH 43062",
            region: "OH",
            website: "http://www.faithbibleohio.com/",
            noConfession: true,
            familyIntegrated: true,
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.faithbibleohio.com/tp40/page.asp?ID=247778'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/Faith-Bible-Church-808124725928696/?fref=ts'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.gccwaverly.net/",
            notes: [
                {
                    type: 'sermons',
                    data: 'https://gccwaverly.net/category/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Grace-Community-Church/137853859595298?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Brian Evans'
                },
                {
                    name: 'Dylan Rowland'
                },
                {
                    name: 'Matthew Wright'
                },
                {
                    name: 'Drew Karst'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://gracecovenantcleveland.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://gracecovenantcleveland.com/sermons'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/GraceCovenantCleveland/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Fred Pugh',
                    image: 'http://gracecovenantcleveland.com/sites/default/files/Fredphoto1.JPG'
                }
            ],
            lastUpdated: '5/27/2017'
        }
    },
    {  
        coordinates: {
            lat: 40.864459,
            lng: -81.365127
        },
        details: {  
            name: "Heritage Reformed Baptist Church",
            address: "5715 Market Ave. N., Canton, OH 44721",
            region: "OH",
            website: "http://www.heritagerbc.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.heritagerbc.com/Sermons.html'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/hrbchurch/?fref=ts'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.kemproadbaptist.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.arbor-church.com/sermons.html'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Kemp-Road-Baptist-Church/481103445399021?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Steve Woodman',
                    image: 'http://www.arbor-church.com/images/pastorsteveweb.jpg'
                },
                {
                    name: 'Tom Danube',
                    image: 'http://www.arbor-church.com/images/pastortomweb2.jpg'
                },
                {
                    name: 'John Raquet',
                    image: 'http://www.arbor-church.com/images/pastorjohnweb.jpg'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.prbctoledo.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.prbctoledo.org/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Providence-Reformed-Baptist-Church/157864500913510?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Tom Wesenberg',
                    image: 'http://prbc.javafoundry.com/wp-content/uploads/2012/05/pastor-tom.jpg'
                }
            ],
            lastUpdated: '5/27/2017'
        }
    },
    {  
        coordinates: {
            lat: 36.279162,
            lng: -95.852264
        },
        details: {  
            name: "Bethel Baptist Church",
            address: "10705 E. 86TH STREET NORTH OWASSO, OK 74055",
            region: "OK",
            website: "http://www.bethelowasso.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.sermonaudio.com/search.asp?speakeronly=true&currsection=sermonsspeaker&keyword=Pastor_Bill_Ascol'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/gbcconway/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Bill Ascol',
                    image: 'http://media.cloversites.com/39/39133869-325e-4c1c-91f4-050caec0bbb3/site-images/ab43d1db-1048-473e-ae64-024a55c962d1@2x.png'
                }
            ],
            lastUpdated: '5/25/2017'
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
            website: "http://www.calvarybaptistss.com/",
            noConfession: true,
            notes: [
                {
                    type: 'sermons',
                    data: 'http://calvarybaptistss.com/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Calvary-Baptist-Church/118060671538281?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Robert Haling',
                    image: 'http://www.calvarybaptistss.com/wp-content/uploads/2010/01/RobertHaling1-150x150.jpg'
                }
            ],
            lastUpdated: '5/25/2017'
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
            website: "http://www.gatlinbaptist.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'https://gatlinbaptist.com/connect/media/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/GatlinBaptistChurch/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Jared Whitehurst',
                    image: 'https://gatlinbaptist.files.wordpress.com/2014/09/img_5424.jpg?w=1280'
                },
                {
                    name: 'Scott Kennis',
                    image: 'https://gatlinbaptist.files.wordpress.com/2012/03/scott.png'
                },
                {
                    name: 'Josh Wall',
                    image: 'https://gatlinbaptist.files.wordpress.com/2015/05/10339629_648770361876764_8137539753887973829_n.jpg?w=600&h=400'
                },
                {
                    name: 'Derek Williams',
                    image: 'https://gatlinbaptist.files.wordpress.com/2012/07/1599902_817021671674985_6651775933055384033_o.jpg?w=428&h=600'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.gbcok.org/",
            noConfession: true,
            notes: [
                {
                    type: 'sermons',
                    data: 'http://gbcok.org/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Grace-Bible-Church/397409090464578?fref=ts'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.nwbcokc.org/",
            noConfession: true,
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.nwbcokc.org/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/NWBCOKC/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Alan Conner',
                    image: 'https://i0.wp.com/www.nwbcokc.org/wp-content/uploads/2012/08/conner-web1.jpg?w=150'
                },
                {
                    name: 'Alan Loeffler',
                    image: 'https://i0.wp.com/www.nwbcokc.org/wp-content/uploads/2012/08/loeffler-web.jpg?zoom=2&resize=134%2C170'
                },
                {
                    name: 'J. DeWayne Bolin',
                    image: 'https://i1.wp.com/www.nwbcokc.org/wp-content/uploads/2012/08/Bolin_pic-e1343852527804.jpg?w=150'
                }
            ],
            lastUpdated: '5/27/2017'
        }
    },
    {  
        coordinates: {
            lat: 34.774512,
            lng: -96.682199
        },
        details: {  
            name: "Sovereign Grace Bible Church",
            address: "317 West Main Street, Ada, OK 74821",
            region: "OK",
            website: "http://www.sgbca.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.sgbca.org/sermons'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/Sovereign-Grace-Bible-Church-of-Ada-Oklahoma-175745289115917/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Justin Wright',
                    image: 'https://static.wixstatic.com/media/c21b7f_dc37924e8bd74ce7ae5c1fb1a59ec47a.jpg/v1/fill/w_412,h_386,al_c,q_80,usm_0.66_1.00_0.01/c21b7f_dc37924e8bd74ce7ae5c1fb1a59ec47a.webp'
                },
                {
                    name: 'Randy Tyler',
                    image: 'https://static.wixstatic.com/media/c21b7f_52be69888fe74879969fac880fe4f52f.jpg/v1/fill/w_464,h_384,al_c,q_80,usm_0.66_1.00_0.01/c21b7f_52be69888fe74879969fac880fe4f52f.webp'
                },
                {
                    name: 'Ronnie Qualls',
                    image: 'https://static.wixstatic.com/media/c21b7f_7ee7763b61204852935cbef1a7cc5541.jpg/v1/fill/w_416,h_390,al_c,q_80,usm_0.66_1.00_0.01/c21b7f_7ee7763b61204852935cbef1a7cc5541.webp'
                },
                {
                    name: 'Nate Carper',
                    image: 'https://static.wixstatic.com/media/c21b7f_d9bc6b72472944608fa1906aa31b6c2c.jpg/v1/fill/w_452,h_394,al_c,q_80,usm_0.66_1.00_0.01/c21b7f_d9bc6b72472944608fa1906aa31b6c2c.webp'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://lawtonindian.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://lawtonindian.com/audio/'
                }
            ],
            pastors: [
                {
                    name: 'David Bane'
                },
                {
                    name: 'Mike Styres'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.sites.onlinemac.com/alanr",
            noConfession: true,
            notes: [
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Bible-Baptist-Church/1499734926998938?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Alan Ross'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.elmstreetbaptistchurch.org/",
            notes: [
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Elm-Street-Baptist-Church/120472071303259?fref=ts'
                }
            ],
            lastUpdated: '5/27/2017'
        }
    },
    {  
        coordinates: {
            lat: 45.468222,
            lng: -122.709903
        },
        details: {  
            name: "Glencullen Baptist Church",
            address: "7688 SW Capitol Hwy, Portland, Oregon, OR 97219",
            region: "OR",
            website: "http://glencullenbaptist.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.sermonaudio.com/source_detail.asp?sourceid=glencullen'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/glencullenbaptistchurch/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Phillip Cavin',
                    image: 'http://glencullenbaptist.org/pastor_phill.jpg'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.sovereigngracebible.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.sovereigngracebible.com/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Sovereign-Grace-Bible-Church/116038911756894?fref=ts'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "https://bfcgreentown.com/",
            notes: [
                {
                    type: 'sermons',
                    data: 'https://bfcgreentown.com/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/bfcgreentown/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Dave Johnston',
                    image: 'https://biblefellowshipchurchblog.files.wordpress.com/2015/09/dave-johnston_new.jpg?w=400&h=364'
                },
                {
                    name: 'Rich Kilian',
                    image: 'https://biblefellowshipchurchblog.files.wordpress.com/2015/09/rich-kilian_new.jpg?w=400&h=412'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.faithchurchpa.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://faithchurchpa.org/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/Faith-Reformed-Baptist-Church-120118594665817/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Matt Foreman',
                    image: 'http://faithchurchpa.org/wp-content/uploads/2014/10/Matt-Foreman1-678x1024.jpg'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.gbcchambersburg.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.gbcchambersburg.org/sermons_online.htm'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Grace-Baptist-Church/166915203335434?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Craig Harris',
                    image: 'http://www.gbcchambersburg.org/craig_07.jpg'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.gracechurchdowningtown.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://gracechurchdowningtown.org/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/gracechurchdowningtown/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Mitch Lush',
                    image: 'http://gracechurchdowningtown.org/wp-content/uploads/2014/01/pastormitch-180x180.jpg'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.gracebaptistcarlisle.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://gracebaptistcarlisle.org/gbc-sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/gracebaptistcarlisle/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'David Campbell ',
                    image: 'http://gracebaptistcarlisle.org/wp-content/uploads/2015/09/John-Miller.jpg'
                }
            ],
            lastUpdated: '5/27/2017'
        }
    },
    {  
        coordinates: {
            lat: 40.241571,
            lng: -76.174832
        },
        details: {  
            name: "Immanuel Free Reformed Church",
            address: "10 North King Street, Stevens, PA 17578",
            region: "PA",
            website: "http://www.immanuelfrc.org/",
            notes: [
                {
                    type: 'meeting at',
                    data: 'the former Schoeneck Firehall'
                },
                {
                    type: 'sermons',
                    data: 'http://immanuelfrc.org/sermons/'
                }
            ],
            pastors: [
                {
                    name: 'William Einwechter'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.lbref.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.lbref.org/sermons'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Liberty-Baptist-Church/117146124971765?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Jack Werth'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://olneybaptist.org/",
            newHampshire: true,
            notes: [
                {
                    type: 'sermons',
                    data: 'https://olneybaptist.org/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/Olney-Baptist-Church-101956498354/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Joseph Randall',
                    image: 'https://olneybaptist.org/wp-content/uploads/2014/02/joseph_randall-236x300.jpg'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.prbcerie.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.sermonaudio.com/source_detail.asp?sourceid=prbcerie'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Providence-Reformed-Baptist/226429747688128?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'John Swindlehurst',
                    image: 'http://www.prbcerie.org/IMG/pastor.jpg'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.rbcfranconia.org/",
            noConfession: true,
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.rbcfranconia.org/index.php?option=com_biblestudy&view=studieslist'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/rbcfranconia/?fref=ts'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://reiberschurch.com/",
            notes: [
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Reibers-Reformed-Baptist-Church/129906624245410?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Charles Fitzpatrick',
                    image: 'http://reiberschurch.com/fitz4.jpg'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://trinityallentown.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://trinityallentown.org/blog/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Trinity-Baptist-Church/453270284752269?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Gary Morrison',
                    image: 'http://i1217.photobucket.com/albums/dd383/reignnet/photo1_zpse17ed8dd.jpg'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.gcbcri.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.gcbcri.org/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/gcbcri/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'ROb Ventura',
                    image: 'http://www.robindziuba.com/gcbri/wp-content/uploads/2012/05/officers.png'
                },
                {
                    name: 'Jack Buckley',
                    image: 'http://www.robindziuba.com/gcbri/wp-content/uploads/2012/05/officers.png'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.crbceasley.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.crbceasley.org/sermons.html'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Convenant-Reformed-Baptist-Church/117514151607623?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Mark Powell',
                    image: 'http://media.sermonaudio.com/gallery/photos/thumbnails/PowellMark-01.png'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://fellowship-greenville.org/",
            noConfession: true,
            notes: [
                {
                    type: 'sermons',
                    data: 'http://fellowship-greenville.org/sermons'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Fellowship-Bible-Church/116092751752457?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Charles Hartman',
                    image: 'http://s3.amazonaws.com/churchplantmedia-cms/fellowship_bible_greenville/chuck-hartman.jpg'
                },
                {
                    name: 'David Farmer',
                    image: 'http://s3.amazonaws.com/churchplantmedia-cms/fellowship_bible_greenville/david-farmer.jpg'
                },
                {
                    name: 'Mark Freltag',
                    image: 'http://s3.amazonaws.com/churchplantmedia-cms/fellowship_bible_greenville/mark-freitag.jpg'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.gbctaylors.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://gbctaylors.net/audio/sermons/'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/gbctaylors/?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Jamie Howell',
                    image: 'http://gbctaylors.net/wp-content/uploads/2012/08/funny-film-and-misc-013-150x150.jpg'
                },
                {
                    name: 'Nicolas Alford',
                    image: 'http://gbctaylors.net/wp-content/uploads/2012/08/funny-film-and-misc-033-150x150.jpg'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.gracecommunitybaptist.org/",
            noConfession: true,
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.gracecommunitybaptist.org/sermon.htm'
                },
                {
                    type: 'facebook',
                    data: 'https://www.facebook.com/pages/Grace-Community-Baptist-Church/117692388257603?fref=ts'
                }
            ],
            pastors: [
                {
                    name: 'Ken Hardin',
                    image: 'http://www.gracecommunitybaptist.org/test/i/Hardin%20Family%20July%202012.JPG'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://www.sgbcconway.org/",
            notes: [
                {
                    type: 'sermons',
                    data: 'http://www.sgbcconway.org/sermons.html'
                }
            ],
            pastors: [
                {
                    name: 'Brian Pendleton'
                }
            ],
            lastUpdated: '5/27/2017'
        }
    },
    {  
        coordinates: {
            lat: 44.073528,
            lng: -103.205354
        },
        details: {  
            name: "Providence Reformed Baptist Church",
            address: "501 E St Joseph St, Rapid City, SD 57701",
            region: "SD",
            website: "http://www.providenceblackhills.org/",
            notes: [
                {
                    type: 'meeting at',
                    data: 'Pluma Room (lower level), Surbeck Center'
                },
                {
                    type: 'sermons',
                    data: 'http://www.providenceblackhills.org/media/sermons/'
                }
            ],
            pastors: [
                {
                    name: 'Eddie Childers',
                    image: 'http://www.providenceblackhills.org/photos/pastor/dynamic/pastor.jpg-nggid0224-ngg0dyn-300x450x100-00f0w010c010r110f110r010t010.jpg'
                }
            ],
            lastUpdated: '5/27/2017'
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
            website: "http://cornerstonechapelrbc.org/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.covenantbaptistbc.org/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.gracetn.org/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.grbchurch.org",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.rbcnashville.org/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.rbcmemphis.org/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.gracereformedbc.org/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.cbcweb.net/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.dallasreformedbaptistchurch.org/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://emmanuelrbc.com/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.faithlongview.com/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.firstbaptistparker.org/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://faithbaptistsa.org/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://freegracebaptist.org/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://gfbcconroe.com/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.gracefamilybaptist.net/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.gsccdallas.org/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.gracebaptist-fellowship.com/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.gracebaptistchurchmp.org/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.gccsatx.com/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.grbcfamily.org/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.gracerbc.com/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.reformedbaptist.org/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.sovgracebaptsatx.com/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.pcc-schertz.com/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.providence-bc.com/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.providencerbc.org/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.redeemerfortworth.org/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.shbccove.com/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.corpuschristians.com/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.particularbaptist.org/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://tapestrycommunitychurch.org/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.fbcrh.org/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.westoaksbaptist.org/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.roybiblechurch.org/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://allbygrace.org/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.alleghanybaptistchurch.org/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.christreformedbaptist.org/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.covenantrbc.org/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.ebc-verona.net/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.gracebaptistchapel.net/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.obc.org",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.redeeming-grace.org/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
         
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
            website: "http://www.reformedbaptistchurch.org/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://rbcrichmond.com/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.caymandesigns.com/rbcos.htm",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.angelfire.com/va/sovereigngrace/sgbc.html",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.tbcva.org/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.wildernessroadbaptist.org/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "https://www.faithreformedbaptistchurch.com/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.emmanuelreformedbaptist.org/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.freegracebaptistchurch.com/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.grcclarkston.com/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.graceevangelical.org/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://juanitacc.org/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.pilgrimbible.org/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.providencefbc.org/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://users.lewiston.com/ardenh/prbc.html",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.sovgracewa.org/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.trinityreformedbaptist.com/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.crbcbluefield.net/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.northwoodsbaptist.com/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.ricelakebaptist.org/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.sovereigngracechurch.com/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.sgbcwy.org/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
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
            website: "http://www.tbcwyoming.com/",
            // notes: [
            //     {
            //         type: 'sermons',
            //         data: 'http://www.gbcconway.com/sermons/'
            //     },
            //     {
            //         type: 'facebook',
            //         data: 'https://www.facebook.com/gbcconway/?fref=ts'
            //     }
            // ],
            // pastors: [
            //     {
            //         name: 'Jeff Johnson',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/57aebafbb3db2b8d0eaa99d8/1471068937518/stockphoto5.jpg?format=750w'
            //     },
            //     {
            //         name: 'Wyeth Wallis',
            //         image: 'https://static1.squarespace.com/static/5612dbb3e4b0147725b6297f/t/588b017820099e289d34e947/1485505074978/?format=750w'
            //     }
            // ],
            // lastUpdated: '5/27/2017'
        }
    }
];

export default CHURCHES;
