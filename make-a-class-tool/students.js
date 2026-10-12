// The class list for every page in this folder. These 20 students are invented,
// and their portraits were made with AI. None of them is a real person.
const CLASS = {
  "course": {
    "code": "ENT 101",
    "name": "Introduction to Entrepreneurship",
    "days": "Tuesday and Thursday"
  },
  "students": [
    {
      "id": 1002,
      "name": "Desmond Achterberg",
      "short_name": "Des",
      "pronouns": "he/him",
      "pronunciation": "DEZ-mund AHK-ter-burg",
      "hometown": "Worcester, Massachusetts",
      "year": "Senior",
      "concentration": "Operations Management",
      "interests": [
        "Woodworking",
        "Coaching youth hockey",
        "Military history"
      ],
      "fun_fact": "He once moved a field hospital across a desert in under forty hours.",
      "intro": "I spent twelve years in the Army as a logistics officer before coming back to finish my degree. My two kids think it is very funny that I have homework too.",
      "team": "Team 1",
      "photo": "photos/1002.jpg"
    },
    {
      "id": 1008,
      "name": "Oluwaseun Adeyemi-Clarke",
      "short_name": "Seun",
      "pronouns": "he/him",
      "pronunciation": "SHAY-oon ah-DAY-yeh-mee CLARK",
      "hometown": "Houston, Texas",
      "year": "Junior",
      "concentration": "Entrepreneurship",
      "interests": [
        "Debate",
        "Sneaker resale",
        "Afrobeats"
      ],
      "fun_fact": "He has a spreadsheet tracking the price of every pair of sneakers he has ever sold.",
      "intro": "I started reselling sneakers in eighth grade and now I am building an app to price them. I talk a lot in class, so feel free to call on someone else first.",
      "team": "Team 4",
      "photo": "photos/1008.jpg"
    },
    {
      "id": 1011,
      "name": "Kwame Asante-Ofori",
      "short_name": "Kwame",
      "pronouns": "he/him",
      "pronunciation": "KWAH-meh ah-SAHN-teh oh-FOH-ree",
      "hometown": "Accra, Ghana",
      "year": "Junior",
      "concentration": "Global Business",
      "interests": [
        "Highlife guitar",
        "Agritech",
        "Running"
      ],
      "fun_fact": "He taught himself guitar from his grandfather's old highlife records.",
      "intro": "I came to Boston from Accra to learn how to scale a business across borders. My family grows cocoa, and I want to help farmers keep more of the value of what they grow.",
      "team": "Team 2",
      "photo": "photos/1011.jpg"
    },
    {
      "id": 1015,
      "name": "Jalen Brightwater",
      "short_name": "Jalen",
      "pronouns": "he/him",
      "pronunciation": "JAY-len BRITE-wah-ter",
      "hometown": "Oklahoma City, Oklahoma",
      "year": "Senior",
      "concentration": "Entrepreneurship",
      "interests": [
        "Beadwork",
        "Food trucks",
        "Stand-up comedy"
      ],
      "fun_fact": "He has performed stand-up comedy at an open mic eleven times.",
      "intro": "I am a member of the Choctaw Nation and I grew up working at my aunt's food truck. I am building a business plan for a mobile kitchen that serves Native foods at events.",
      "team": "Team 3",
      "photo": "photos/1015.jpg"
    },
    {
      "id": 1005,
      "name": "Wren Castellanos",
      "short_name": "Wren",
      "pronouns": "they/them",
      "pronunciation": "REN kah-steh-YAH-nohs",
      "hometown": "Tucson, Arizona",
      "year": "Sophomore",
      "concentration": "Entrepreneurship",
      "interests": [
        "Screen printing",
        "Desert hiking",
        "Zines"
      ],
      "fun_fact": "They have hiked to the top of every peak in the Santa Catalina Mountains.",
      "intro": "I run a small screen printing shop out of my dorm and sell shirts at campus markets. I wear a hearing aid, so I like to sit near the front where I can see the speaker.",
      "team": "Team 2",
      "photo": "photos/1005.jpg"
    },
    {
      "id": 1006,
      "name": "Malik Fairweather",
      "short_name": "Malik",
      "pronouns": "he/him",
      "pronunciation": "mah-LEEK FAIR-weh-ther",
      "hometown": "Atlanta, Georgia",
      "year": "Senior",
      "concentration": "Finance",
      "interests": [
        "Basketball",
        "Podcasting",
        "Personal finance"
      ],
      "fun_fact": "He was the point guard on his high school basketball team.",
      "intro": "I host a podcast about money for college students, and we just passed fifty episodes. I like to sit near the front so I can see the board.",
      "team": "Team 3",
      "photo": "photos/1006.jpg"
    },
    {
      "id": 1001,
      "name": "Noor Haddadin",
      "short_name": "Noor",
      "pronouns": "she/her",
      "pronunciation": "NOOR hah-dah-DEEN",
      "hometown": "Dearborn, Michigan",
      "year": "Junior",
      "concentration": "Finance",
      "interests": [
        "Mock trial",
        "Baking bread",
        "Pickup basketball"
      ],
      "fun_fact": "She has kept the same sourdough starter alive for six years.",
      "intro": "I grew up helping at my uncle's bakery, so I think about margins every time I buy a croissant. I want to work in restaurant finance and maybe open a place of my own someday.",
      "team": "Team 1",
      "photo": "photos/1001.jpg"
    },
    {
      "id": 1018,
      "name": "Lucy Kealoha",
      "short_name": "Lucy",
      "pronouns": "she/her",
      "pronunciation": "LOO-see keh-ah-LOH-hah",
      "hometown": "Hilo, Hawaii",
      "year": "Sophomore",
      "concentration": "Marketing",
      "interests": [
        "Surfing",
        "Ukulele",
        "Social media design"
      ],
      "fun_fact": "She learned to surf before she learned to ride a bike.",
      "intro": "I grew up in Hilo and I miss the ocean every single day in Massachusetts. I run social media for two small businesses back home.",
      "team": "Team 4",
      "photo": "photos/1018.jpg"
    },
    {
      "id": 1009,
      "name": "Greta Lindholm",
      "short_name": "Greta",
      "pronouns": "she/her",
      "pronunciation": "GREH-tah LIND-holm",
      "hometown": "Duluth, Minnesota",
      "year": "Sophomore",
      "concentration": "Accounting",
      "interests": [
        "Sit-skiing",
        "Knitting",
        "Board games"
      ],
      "fun_fact": "She knit a sweater for each of her four roommates last year.",
      "intro": "I grew up on Lake Superior, so a Boston winter feels mild to me. I use a wheelchair, so an aisle seat on the end of a row works best for me.",
      "team": "Team 3",
      "photo": "photos/1009.jpg"
    },
    {
      "id": 1012,
      "name": "Isadora Monteverde",
      "short_name": "Isa",
      "pronouns": "she/her",
      "pronunciation": "ee-zah-DOR-ah mohn-teh-VER-dee (goes by EE-zah)",
      "hometown": "São Paulo, Brazil",
      "year": "Junior",
      "concentration": "Marketing",
      "interests": [
        "Beach volleyball",
        "Brand design",
        "Samba"
      ],
      "fun_fact": "She has danced in the São Paulo carnival parade three times.",
      "intro": "I grew up in São Paulo and moved to Boston for college. I am interested in how global brands change their message when they enter a new country.",
      "team": "Team 4",
      "photo": "photos/1012.jpg"
    },
    {
      "id": 1019,
      "name": "Elijah Mossgrove",
      "short_name": "Eli",
      "pronouns": "he/him",
      "pronunciation": "ee-LIE-jah MOSS-grove",
      "hometown": "Burlington, Vermont",
      "year": "Junior",
      "concentration": "Environmental Sustainability",
      "interests": [
        "Maple sugaring",
        "Trail running",
        "Composting"
      ],
      "fun_fact": "He has boiled sap into syrup over a wood fire since he was eight.",
      "intro": "My family taps maple trees every spring, and I want to bring that business online. I care a lot about how companies can grow without wrecking the land they depend on.",
      "team": "Team 5",
      "photo": "photos/1019.jpg"
    },
    {
      "id": 1017,
      "name": "Farid Nazarov",
      "short_name": "Farid",
      "pronouns": "he/him",
      "pronunciation": "fah-REED nah-ZAR-ov",
      "hometown": "Tashkent, Uzbekistan",
      "year": "Junior",
      "concentration": "Economics",
      "interests": [
        "Chess",
        "Soccer",
        "Cooking plov"
      ],
      "fun_fact": "He can cook plov for forty people in one giant pot.",
      "intro": "I grew up in Tashkent and came to Boston for a semester abroad that turned into a full degree. I am curious about how new markets open up to foreign companies.",
      "team": "Team 5",
      "photo": "photos/1017.jpg"
    },
    {
      "id": 1014,
      "name": "Mei-Lin Ostrander",
      "short_name": "Mei-Lin",
      "pronouns": "she/her",
      "pronunciation": "MAY-lin OH-strand-er",
      "hometown": "San Francisco, California",
      "year": "Junior",
      "concentration": "Finance",
      "interests": [
        "Watercolor",
        "Volunteering at an animal shelter",
        "Mystery novels"
      ],
      "fun_fact": "She has fostered more than thirty shelter kittens.",
      "intro": "I like to listen first and speak once I have thought things through. I am interested in impact investing and how funds measure good outcomes.",
      "team": "Team 5",
      "photo": "photos/1014.jpg"
    },
    {
      "id": 1020,
      "name": "Ximena Quintanilla",
      "short_name": "Ximena",
      "pronouns": "she/her",
      "pronunciation": "hee-MEH-nah keen-tah-NEE-yah",
      "hometown": "El Paso, Texas",
      "year": "Senior",
      "concentration": "Finance",
      "interests": [
        "Mariachi violin",
        "Real estate",
        "Spin class"
      ],
      "fun_fact": "She has played violin at more than one hundred weddings.",
      "intro": "I play violin in a mariachi band on weekends and I am the first in my family to go to college. After graduation I am joining a real estate fund in Dallas.",
      "team": "Team 5",
      "photo": "photos/1020.jpg"
    },
    {
      "id": 1003,
      "name": "Haruka Tanimoto",
      "short_name": "Haruka",
      "pronouns": "she/her",
      "pronunciation": "hah-ROO-kah tah-nee-MOH-toh",
      "hometown": "Osaka, Japan",
      "year": "Sophomore",
      "concentration": "Business Analytics",
      "interests": [
        "Film photography",
        "Jazz piano",
        "Trying every ramen place in Boston"
      ],
      "fun_fact": "She has photographed every train station on the Osaka Loop Line.",
      "intro": "I came to the United States for college and this is my second year here. I am interested in how companies use data to decide what to build next.",
      "team": "Team 2",
      "photo": "photos/1003.jpg"
    },
    {
      "id": 1016,
      "name": "Imani Throckmorton",
      "short_name": "Imani",
      "pronouns": "she/her",
      "pronunciation": "ee-MAH-nee THROCK-mor-ton",
      "hometown": "Baltimore, Maryland",
      "year": "Sophomore",
      "concentration": "Management",
      "interests": [
        "Choir",
        "Event planning",
        "Thrift shopping"
      ],
      "fun_fact": "She has organized a concert for five hundred people in a church basement.",
      "intro": "I sing alto in the campus gospel choir and plan most of its events. I want to learn how to run teams that people actually want to be on.",
      "team": "Team 1",
      "photo": "photos/1016.jpg"
    },
    {
      "id": 1007,
      "name": "Priyanka Venkataraman",
      "short_name": "Priya",
      "pronouns": "she/her",
      "pronunciation": "pree-YAHN-kah ven-kah-tah-RAH-mun",
      "hometown": "Edison, New Jersey",
      "year": "Junior",
      "concentration": "Strategy",
      "interests": [
        "Classical dance",
        "Chess",
        "Case competitions"
      ],
      "fun_fact": "She once won a chess tournament while wearing a full dance costume.",
      "intro": "I have trained in Bharatanatyam since I was six, and I still perform at festivals. I love case competitions because they feel like a puzzle with a clock on it.",
      "team": "Team 3",
      "photo": "photos/1007.jpg"
    },
    {
      "id": 1004,
      "name": "Mateo Villaseñor",
      "short_name": "Mateo",
      "pronouns": "he/him",
      "pronunciation": "mah-TAY-oh vee-yah-sen-YOR",
      "hometown": "San Antonio, Texas",
      "year": "Junior",
      "concentration": "Marketing",
      "interests": [
        "Varsity soccer",
        "Sports marketing",
        "Grilling"
      ],
      "fun_fact": "He has a younger sister who plays for a national youth team.",
      "intro": "I play center midfield on the varsity soccer team, so some Thursdays I am on a bus to an away game. I want to work in sports marketing after graduation.",
      "team": "Team 2",
      "photo": "photos/1004.jpg"
    },
    {
      "id": 1013,
      "name": "Callum Whitlock",
      "short_name": "Callum",
      "pronouns": "he/him",
      "pronunciation": "KAL-um WIT-lock",
      "hometown": "Portland, Oregon",
      "year": "Sophomore",
      "concentration": "Business Analytics",
      "interests": [
        "Rock climbing",
        "Coffee roasting",
        "Fantasy football stats"
      ],
      "fun_fact": "He roasts his own coffee beans in a popcorn machine.",
      "intro": "I work the opening shift at a coffee shop near campus, so I am awake early but not always on time. I want to use data to help small shops plan their inventory.",
      "team": "Team 1",
      "photo": "photos/1013.jpg"
    },
    {
      "id": 1010,
      "name": "Tomasz Wierzbicki",
      "short_name": "Tomasz",
      "pronouns": "he/him",
      "pronunciation": "TOH-mahsh vyezh-BEET-skee",
      "hometown": "Chicago, Illinois",
      "year": "Senior",
      "concentration": "Economics",
      "interests": [
        "Urban planning",
        "Wheelchair tennis",
        "Pierogi"
      ],
      "fun_fact": "He has hand-cycled from Chicago to Milwaukee and back in one day.",
      "intro": "My parents own a Polish deli on the northwest side of Chicago, and I did the books there through high school. I am writing my thesis on why some neighborhoods keep their small businesses and others lose them. I use a wheelchair and need a seat on the aisle.",
      "team": "Team 4",
      "photo": "photos/1010.jpg"
    }
  ]
};
