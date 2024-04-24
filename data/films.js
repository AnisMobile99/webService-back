let films = [
	{
		id: 1,
		nom: "Inception",
		description:
			"Dom Cobb est un voleur expérimenté, le meilleur dans l'art dangereux de l'extraction, volant les secrets les plus intimes enfouis au plus profond du subconscient pendant l'état de sommeil, lorsque l'esprit est le plus vulnérable.",
		date_parution: "2010-07-16",
		note: 4,
	},
	{
		id: 2,
		nom: "Interstellar",
		description:
			"Dans un futur proche, la Terre est devenue inhospitalière pour l'humanité. Un groupe d'explorateurs entreprend un voyage interstellaire à bord d'un vaisseau spatial, à la recherche d'un nouvel endroit pour que l'humanité puisse s'établir.",
		date_parution: "2014-11-07",
		note: 4,
	},
	{
		id: 3,
		nom: "Le Seigneur des Anneaux : La Communauté de l'Anneau",
		description:
			"Dans un monde fantastique peuplé d'êtres magiques et de créatures terrifiantes, un jeune hobbit est chargé de détruire un anneau maléfique avant qu'il ne tombe entre les mains du mal absolu.",
		date_parution: "2001-12-19",
		note: 5,
	},
	{
		id: 4,
		nom: "Le Seigneur des Anneaux : Les Deux Tours",
		description:
			"Dans la suite de la quête épique, le jeune hobbit continue son voyage périlleux pour détruire l'anneau, affrontant des dangers de plus en plus grands sur sa route.",
		date_parution: "2002-12-18",
		note: 5,
	},
	{
		id: 5,
		nom: "Le Seigneur des Anneaux : Le Retour du Roi",
		description:
			"Le jeune hobbit achève sa quête pour détruire l'anneau maléfique, tandis que de grandes batailles se déroulent pour le destin de la Terre du Milieu.",
		date_parution: "2003-12-17",
		note: 5,
	},
	{
		id: 6,
		nom: "The Dark Knight",
		description:
			"Dans cette suite captivante, Batman affronte le Joker, un criminel psychotique dont le seul but est de semer le chaos à Gotham City.",
		date_parution: "2008-07-18",
		note: 5,
	},
	{
		id: 7,
		nom: "The Shawshank Redemption",
		description:
			"Un banquier innocent est condamné à une peine de prison à vie pour le meurtre de sa femme et de son amant, et se lie d'amitié avec un détenu vétéran qui lui fait découvrir l'espoir au sein de l'oppression.",
		date_parution: "1994-09-23",
		note: 5,
	},
	{
		id: 8,
		nom: "Pulp Fiction",
		description:
			"Ce film culte explore les vies interconnectées de criminels, de gangsters et de boxeurs dans une série d'histoires non linéaires pleines d'humour noir et de violence.",
		date_parution: "1994-10-14",
		note: 5,
	},
	{
		id: 9,
		nom: "Fight Club",
		description:
			"Un employé de bureau insatisfait rencontre un vendeur de savon charismatique, et ensemble, ils créent un club de combat clandestin qui évolue rapidement en un mouvement anarchiste.",
		date_parution: "1999-10-15",
		note: 5,
	},
	{
		id: 10,
		nom: "Forrest Gump",
		description:
			"Ce film suit les aventures de Forrest Gump, un homme au QI inférieur à la moyenne, à travers plusieurs décennies marquées par des événements historiques majeurs.",
		date_parution: "1994-07-06",
		note: 5,
	},
	{
		id: 11,
		nom: "The Matrix",
		description:
			"Un programmeur découvre que le monde qu'il connaît est une simulation informatique créée par des machines intelligentes, et se joint à une rébellion pour libérer l'humanité.",
		date_parution: "1999-03-31",
		note: 5,
	},
	{
		id: 12,
		nom: "The Lord of the Rings",
		description:
			"Un jeune hobbit est chargé de détruire un anneau maléfique avant qu'il ne tombe entre les mains du mal absolu, dans ce chef-d'œuvre de fantasy épique.",
		date_parution: "1978-11-15",
		note: 5,
	},
	{
		id: 13,
		nom: "Gladiator",
		description:
			"Après avoir été trahi par le fils de l'empereur, un général romain est réduit en esclavage et se bat pour sa survie dans les arènes de gladiateurs, avec pour seul but de se venger.",
		date_parution: "2000-05-05",
		note: 5,
	},
	{
		id: 14,
		nom: "The Godfather",
		description:
			"Ce film emblématique suit la montée au pouvoir d'une famille mafieuse italo-américaine et les conséquences tragiques de leur empire criminel.",
		date_parution: "1972-03-24",
		note: 5,
	},
	{
		id: 15,
		nom: "The Godfather: Part II",
		description:
			"La saga continue alors que le fils du patriarche criminel élargit l'empire familial tout en plongeant dans les secrets sombres de son passé.",
		date_parution: "1974-12-20",
		note: 5,
	},
	{
		id: 16,
		nom: "The Godfather: Part III",
		description:
			"Des années après avoir tenté de se retirer du monde criminel, Michael Corleone se retrouve entraîné dans une spirale de violence et de trahison.",
		date_parution: "1990-12-25",
		note: 4,
	},
	{
		id: 17,
		nom: "The Green Mile",
		description:
			"Dans une prison de Louisiane dans les années 1930, un gardien de prison découvre qu'un condamné à mort possède des pouvoirs miraculeux.",
		date_parution: "1999-12-10",
		note: 5,
	},
	{
		id: 18,
		nom: "The Silence of the Lambs",
		description:
			"Une jeune agente du FBI sollicite l'aide d'un psychopathe incarcéré pour traquer un tueur en série actif, mais elle se retrouve bientôt piégée dans un jeu mortel.",
		date_parution: "1991-02-14",
		note: 5,
	},
	{
		id: 19,
		nom: "Schindler's List",
		description:
			"Inspiré d'une histoire vraie, ce film suit Oskar Schindler, un homme d'affaires allemand qui sauve plus de mille juifs pendant l'Holocauste en les employant dans ses usines.",
		date_parution: "1993-12-15",
		note: 5,
	},
	{
		id: 20,
		nom: "The Departed",
		description:
			"Dans ce thriller haletant, un policier infiltré et un agent double travaillent chacun de leur côté pour démasquer l'autre avant d'être découverts.",
		date_parution: "2006-10-06",
		note: 5,
	},
	{
		id: 21,
		nom: "Saving Private Ryan",
		description:
			"Au cours de la Seconde Guerre mondiale, un groupe de soldats américains est chargé de retrouver et de ramener chez lui un soldat dont les frères ont tous été tués au combat.",
		date_parution: "1998-07-24",
		note: 5,
	},
	{
		id: 22,
		nom: "The Prestige",
		description:
			"Deux magiciens rivaux se livrent à une compétition intense pour créer le tour de magie ultime, se lançant dans une spirale de tromperie et de trahison.",
		date_parution: "2006-10-20",
		note: 5,
	},
	{
		id: 23,
		nom: "The Sixth Sense",
		description:
			"Un jeune garçon peut voir et communiquer avec les morts, et un psychologue pour enfants tente de l'aider à comprendre ses dons tout en découvrant ses propres secrets sombres.",
		date_parution: "1999-08-06",
		note: 5,
	},
	{
		id: 24,
		nom: "Forrest Gump",
		description:
			"Un homme simple d'esprit aux prises avec des événements majeurs de l'histoire américaine, tout en cherchant l'amour et le sens de la vie.",
		date_parution: "1994-07-06",
		note: 5,
	},
	{
		id: 25,
		nom: "The Martian",
		description:
			"Après avoir été laissé pour mort sur Mars, un astronaute lutte pour survivre en utilisant son intelligence et sa créativité pour trouver un moyen de rentrer sur Terre.",
		date_parution: "2015-10-02",
		note: 4,
	},
	{
		id: 26,
		nom: "The Revenant",
		description:
			"Inspiré d'une histoire vraie, ce film suit un homme laissé pour mort dans les terres sauvages américaines qui se lance dans une quête de vengeance contre ceux qui l'ont trahi.",
		date_parution: "2015-12-25",
		note: 4,
	},
	{
		id: 27,
		nom: "The Truman Show",
		description:
			"Un homme découvre que sa vie entière a été une émission de télé-réalité, et il décide de s'échapper de son monde artificiel pour découvrir la vérité.",
		date_parution: "1998-06-05",
		note: 5,
	},
	{
		id: 28,
		nom: "Inglourious Basterds",
		description:
			"Pendant la Seconde Guerre mondiale, un groupe de soldats juifs-américains se lance dans une mission de vengeance contre les nazis en France occupée.",
		date_parution: "2009-08-21",
		note: 5,
	},
	{
		id: 29,
		nom: "The Lion King",
		description:
			"Un jeune lion prince doit affronter la tragédie et la trahison pour reprendre son trône légitime et rétablir l'équilibre dans son royaume.",
		date_parution: "1994-06-15",
		note: 5,
	},
	{
		id: 30,
		nom: "The Dark Knight Rises",
		description:
			"Huit ans après la disparition de Batman, Gotham City est menacée par un terroriste masqué qui s'avère être lié au passé de Bruce Wayne.",
		date_parution: "2012-07-20",
		note: 5,
	},
	{
		id: 31,
		nom: "Django Unchained",
		description:
			"Dans le sud esclavagiste des États-Unis, un chasseur de primes libère un esclave pour l'aider à retrouver des criminels, et ils se lancent dans une quête de vengeance contre un propriétaire de plantation sadique.",
		date_parution: "2012-12-25",
		note: 5,
	},
	{
		id: 32,
		nom: "The Avengers",
		description:
			"Un groupe de super-héros aux pouvoirs extraordinaires s'assemble pour sauver le monde d'une menace extraterrestre, unissant leurs forces malgré leurs différences.",
		date_parution: "2012-05-04",
		note: 5,
	},
	{
		id: 33,
		nom: "The Wolf of Wall Street",
		description:
			"Inspiré d'une histoire vraie, ce film suit l'ascension et la chute d'un courtier en bourse impitoyable qui s'empare de Wall Street avec ses méthodes controversées.",
		date_parution: "2013-12-25",
		note: 5,
	},
	{
		id: 34,
		nom: "The Social Network",
		description:
			"Ce film retrace la montée en puissance de Facebook, depuis sa création controversée dans une chambre d'université jusqu'à sa domination mondiale en tant que réseau social.",
		date_parution: "2010-10-01",
		note: 4,
	},
	{
		id: 35,
		nom: "Titanic",
		description:
			"Ce film romantique épique retrace le naufrage du Titanic et l'histoire d'amour tragique entre deux passagers de classes sociales différentes.",
		date_parution: "1997-12-19",
		note: 5,
	},
	{
		id: 36,
		nom: "Avatar",
		description:
			"Dans un monde extraterrestre exotique, un marine paraplégique est envoyé en mission d'exploration, mais se retrouve pris entre les intérêts commerciaux et la lutte des autochtones pour leur terre.",
		date_parution: "2009-12-18",
		note: 5,
	},
	{
		id: 37,
		nom: "Jurassic Park",
		description:
			"Un parc d'attractions rempli de dinosaures clonés prend une tournure mortelle lorsque les créatures s'échappent et attaquent les visiteurs.",
		date_parution: "1993-06-11",
		note: 5,
	},
	{
		id: 38,
		nom: "Forrest Gump",
		description:
			"Un homme simple d'esprit aux prises avec des événements majeurs de l'histoire américaine, tout en cherchant l'amour et le sens de la vie.",
		date_parution: "1994-07-06",
		note: 5,
	},
	{
		id: 39,
		nom: "The Matrix Reloaded",
		description:
			"Dans cette suite palpitante, Neo découvre sa véritable nature en tant qu'Élu et se lance dans une quête pour sauver l'humanité de l'emprise des machines.",
		date_parution: "2003-05-15",
		note: 4,
	},
	{
		id: 40,
		nom: "The Matrix Revolutions",
		description:
			"La saga Matrix atteint son apogée alors que Neo mène une dernière bataille pour libérer l'humanité de l'emprise des machines et mettre fin à la guerre.",
		date_parution: "2003-11-05",
		note: 4,
	},
	{
		id: 41,
		nom: "The Incredibles",
		description:
			"Une famille de super-héros se retire de la vie héroïque mais est appelée à l'action lorsque le père est recruté pour une mission secrète.",
		date_parution: "2004-11-05",
		note: 5,
	},
	{
		id: 42,
		nom: "The Incredibles 2",
		description:
			"Dans la suite de cette aventure animée, la famille de super-héros tente d'équilibrer sa vie quotidienne avec ses responsabilités héroïques, tout en affrontant un nouvel ennemi redoutable.",
		date_parution: "2018-06-15",
		note: 5,
	},
	{
		id: 43,
		nom: "The Shawshank Redemption",
		description:
			"L'histoire d'un homme injustement condamné qui trouve de l'espoir et de l'amitié derrière les barreaux d'une prison.",
		date_parution: "1994-09-23",
		note: 5,
	},
	{
		id: 44,
		nom: "The Prestige",
		description:
			"Deux magiciens rivaux se lancent dans une compétition féroce pour créer le tour de magie ultime, entraînant des conséquences imprévues et tragiques.",
		date_parution: "2006-10-20",
		note: 5,
	},
	{
		id: 45,
		nom: "The Revenant",
		description:
			"Inspiré d'une histoire vraie, ce film suit un homme laissé pour mort dans les terres sauvages américaines qui se lance dans une quête de survie et de vengeance.",
		date_parution: "2015-12-25",
		note: 4,
	},
	{
		id: 46,
		nom: "The Lion King",
		description:
			"Un jeune lion prince doit affronter la tragédie et la trahison pour réclamer son droit légitime au trône et restaurer l'équilibre dans son royaume.",
		date_parution: "1994-06-15",
		note: 5,
	},
	{
		id: 47,
		nom: "The Dark Knight",
		description:
			"Dans cette suite épique, Batman affronte le Joker, un criminel psychotique qui cherche à semer le chaos à Gotham City.",
		date_parution: "2008-07-18",
		note: 5,
	},
	{
		id: 48,
		nom: "The Dark Knight Rises",
		description:
			"Huit ans après avoir disparu, Batman doit affronter un terroriste masqué qui menace Gotham City.",
		date_parution: "2012-07-20",
		note: 5,
	},
	{
		id: 49,
		nom: "The Matrix",
		description:
			"Un programmeur découvre la vérité sur le monde, un univers virtuel créé par des machines intelligentes pour emprisonner l'humanité.",
		date_parution: "1999-03-31",
		note: 5,
	},
	{
		id: 50,
		nom: "The Matrix Reloaded",
		description:
			"Dans cette suite captivante, Neo découvre sa véritable nature et se lance dans une quête pour sauver l'humanité de l'emprise des machines.",
		date_parution: "2003-05-15",
		note: 4,
	},
	{
		id: 51,
		nom: "The Matrix Revolutions",
		description:
			"La saga Matrix atteint son apogée alors que Neo mène une bataille finale pour libérer l'humanité de l'emprise des machines.",
		date_parution: "2003-11-05",
		note: 4,
	},
	{
		id: 52,
		nom: "The Shawshank Redemption",
		description:
			"Un banquier innocent est condamné à la prison à vie pour le meurtre de sa femme et de son amant, et trouve l'espoir derrière les barreaux.",
		date_parution: "1994-09-23",
		note: 5,
	},
	{
		id: 53,
		nom: "The Green Mile",
		description:
			"Un gardien de prison découvre que l'un de ses détenus possède des pouvoirs miraculeux, mais la vérité est plus compliquée qu'il ne le pensait.",
		date_parution: "1999-12-10",
		note: 5,
	},
	{
		id: 54,
		nom: "The Dark Knight",
		description:
			"Dans ce volet captivant, Batman affronte le Joker, un criminel psychotique qui cherche à semer le chaos à Gotham City.",
		date_parution: "2008-07-18",
		note: 5,
	},
	{
		id: 55,
		nom: "The Lord of the Rings: The Fellowship of the Ring",
		description:
			"Un jeune hobbit est chargé de détruire un anneau maléfique avant qu'il ne tombe entre les mains du mal absolu, dans cette épopée fantastique.",
		date_parution: "2001-12-19",
		note: 5,
	},
	{
		id: 56,
		nom: "The Lord of the Rings: The Two Towers",
		description:
			"Dans la suite de la quête épique, le jeune hobbit poursuit sa mission périlleuse pour détruire l'anneau, affrontant des dangers de plus en plus grands sur sa route.",
		date_parution: "2002-12-18",
		note: 5,
	},
	{
		id: 57,
		nom: "The Lord of the Rings: The Return of the King",
		description:
			"Le jeune hobbit achève sa quête pour détruire l'anneau maléfique, tandis que de grandes batailles se déroulent pour le destin de la Terre du Milieu.",
		date_parution: "2003-12-17",
		note: 5,
	},
	{
		id: 58,
		nom: "The Godfather",
		description:
			"Ce film emblématique suit la montée au pouvoir d'une famille mafieuse italo-américaine et les conséquences tragiques de leur empire criminel.",
		date_parution: "1972-03-24",
		note: 5,
	},
	{
		id: 59,
		nom: "The Godfather: Part II",
		description:
			"La saga continue alors que le fils du patriarche criminel élargit l'empire familial tout en plongeant dans les secrets sombres de son passé.",
		date_parution: "1974-12-20",
		note: 5,
	},
	{
		id: 60,
		nom: "The Godfather: Part III",
		description:
			"Des années après avoir tenté de se retirer du monde criminel, Michael Corleone se retrouve entraîné dans une spirale de violence et de trahison.",
		date_parution: "1990-12-25",
		note: 4,
	},
	{
		id: 61,
		nom: "The Social Network",
		description:
			"Ce film retrace la montée en puissance de Facebook, depuis sa création controversée dans une chambre d'université jusqu'à sa domination mondiale en tant que réseau social.",
		date_parution: "2010-10-01",
		note: 4,
	},
	{
		id: 62,
		nom: "The Wolf of Wall Street",
		description:
			"Inspiré d'une histoire vraie, ce film suit l'ascension et la chute d'un courtier en bourse impitoyable qui s'empare de Wall Street avec ses méthodes controversées.",
		date_parution: "2013-12-25",
		note: 5,
	},
	{
		id: 63,
		nom: "Schindler's List",
		description:
			"Inspiré d'une histoire vraie, ce film suit Oskar Schindler, un homme d'affaires allemand qui sauve plus de mille juifs pendant l'Holocauste en les employant dans ses usines.",
		date_parution: "1993-12-15",
		note: 5,
	},
	{
		id: 64,
		nom: "The Departed",
		description:
			"Dans ce thriller haletant, un policier infiltré et un agent double travaillent chacun de leur côté pour démasquer l'autre avant d'être découverts.",
		date_parution: "2006-10-06",
		note: 5,
	},
	{
		id: 65,
		nom: "Saving Private Ryan",
		description:
			"Au cours de la Seconde Guerre mondiale, un groupe de soldats américains est chargé de retrouver et de ramener chez lui un soldat dont les frères ont tous été tués au combat.",
		date_parution: "1998-07-24",
		note: 5,
	},
	{
		id: 66,
		nom: "The Prestige",
		description:
			"Deux magiciens rivaux se lancent dans une compétition intense pour créer le tour de magie ultime, se lançant dans une spirale de tromperie et de trahison.",
		date_parution: "2006-10-20",
		note: 5,
	},
	{
		id: 67,
		nom: "The Sixth Sense",
		description:
			"Un jeune garçon peut voir et communiquer avec les morts, et un psychologue pour enfants tente de l'aider à comprendre ses dons tout en découvrant ses propres secrets sombres.",
		date_parution: "1999-08-06",
		note: 5,
	},
	{
		id: 68,
		nom: "The Green Mile",
		description:
			"Dans une prison de Louisiane dans les années 1930, un gardien de prison découvre qu'un condamné à mort possède des pouvoirs miraculeux.",
		date_parution: "1999-12-10",
		note: 5,
	},
	{
		id: 69,
		nom: "The Silence of the Lambs",
		description:
			"Dans une prison de Louisiane dans les années 1930, un gardien de prison découvre qu'un condamné à mort possède des pouvoirs miraculeux.",
		date_parution: "1999-12-10",
		note: 5,
	},

	{
		id: 70,
		nom: "The Happening",
		description:
			"Un mystérieux phénomène naturel entraîne une série de suicides massifs à travers le monde, laissant les survivants lutter pour leur vie.",
		date_parution: "2008-06-13",
		note: 2,
	},
	{
		id: 71,
		nom: "Batman & Robin",
		description:
			"Batman et Robin affrontent le redoutable Mr Freeze, Poison Ivy et Bane dans une bataille pour sauver Gotham City.",
		date_parution: "1997-06-20",
		note: 1,
	},
	{
		id: 72,
		nom: "Catwoman",
		description:
			"Une employée de bureau timide se transforme en une justicière féline après avoir été impliquée dans un complot criminel.",
		date_parution: "2004-07-23",
		note: 1,
	},
	{
		id: 73,
		nom: "The Last Airbender",
		description:
			"Dans un monde où certains ont le pouvoir de contrôler les éléments, un jeune garçon découvre qu'il est l'Avatar, destiné à restaurer l'équilibre entre les nations en guerre.",
		date_parution: "2010-07-01",
		note: 1,
	},
	{
		id: 74,
		nom: "Jack and Jill",
		description:
			"Un homme doit supporter la visite annuelle de sa sœur jumelle excentrique, ce qui entraîne une série de catastrophes hilarantes.",
		date_parution: "2011-11-11",
		note: 1,
	},
	{
		id: 75,
		nom: "Gigli",
		description:
			"Un tueur à gages tombe amoureux de sa partenaire alors qu'ils tentent de kidnapper le frère retardé mental d'un procureur.",
		date_parution: "2003-08-01",
		note: 0,
	},
	{
		id: 76,
		nom: "The Room",
		description:
			"Considéré comme l'un des pires films jamais réalisés, ce drame romantique excentrique a gagné une notoriété culte pour ses dialogues bizarres et son mauvais jeu d'acteur.",
		date_parution: "2003-06-27",
		note: 0,
	},
	{
		id: 77,
		nom: "Batman v Superman: Dawn of Justice",
		description:
			"Batman et Superman se confrontent alors qu'une nouvelle menace émerge, les obligeant à s'unir contre un ennemi commun.",
		date_parution: "2016-03-25",
		note: 2,
	},
	{
		id: 78,
		nom: "Suicide Squad",
		description:
			"Un groupe de super-vilains est recruté par le gouvernement pour accomplir des missions dangereuses en échange de réductions de peine.",
		date_parution: "2016-08-05",
		note: 2,
	},
	{
		id: 79,
		nom: "The Emoji Movie",
		description:
			"Dans un monde où chaque emoji a une seule expression faciale, un emoji inadapté tente de devenir 'normal' pour être accepté.",
		date_parution: "2017-07-28",
		note: 1,
	},
	{
		id: 80,
		nom: "Norbit",
		description:
			"Un homme timide et malheureux doit affronter son horrible ex-femme lorsque son amour d'enfance revient dans sa vie.",
		date_parution: "2007-02-09",
		note: 2,
	},
	{
		id: 81,
		nom: "Twilight",
		description:
			"Une jeune fille tombe amoureuse d'un vampire et doit naviguer dans les dangers de leur relation interdite.",
		date_parution: "2008-11-21",
		note: 2,
	},
	{
		id: 82,
		nom: "Transformers: Revenge of the Fallen",
		description:
			"Les Autobots affrontent de nouveaux ennemis et découvrent des secrets cachés alors qu'ils se battent pour sauver la Terre d'une menace extraterrestre.",
		date_parution: "2009-06-24",
		note: 2,
	},
	{
		id: 83,
		nom: "The Twilight Saga: New Moon",
		description:
			"Une jeune fille dévastée par la perte de son amour vampire plonge dans le monde sombre des loups-garous alors qu'elle cherche à combler le vide dans son cœur.",
		date_parution: "2009-11-20",
		note: 2,
	},
	{
		id: 84,
		nom: "Fifty Shades of Grey",
		description:
			"Une jeune femme inexpérimentée tombe amoureuse d'un homme d'affaires charismatique mais troublé, et ils s'engagent dans une relation BDSM intense.",
		date_parution: "2015-02-13",
		note: 2,
	},
	{
		id: 85,
		nom: "The Twilight Saga: Eclipse",
		description:
			"Une jeune fille doit choisir entre son amour pour un vampire et son amitié avec un loup-garou alors qu'une guerre entre les deux factions menace de déchirer sa vie.",
		date_parution: "2010-06-30",
		note: 2,
	},
	{
		id: 86,
		nom: "Fantastic Four",
		description:
			"Un groupe de jeunes scientifiques se transforme en super-héros dotés de pouvoirs extraordinaires après avoir été exposés à une énergie cosmique.",
		date_parution: "2005-07-08",
		note: 2,
	},
	{
		id: 87,
		nom: "Transformers: Dark of the Moon",
		description:
			"Les Autobots et les Decepticons s'affrontent alors qu'ils découvrent un vaisseau spatial caché sur la lune et se lancent dans une course pour atteindre ses secrets.",
		date_parution: "2011-06-29",
		note: 2,
	},
	{
		id: 88,
		nom: "Alone in the Dark",
		description:
			"Un détective du paranormal enquête sur une série de meurtres liés à des expériences gouvernementales secrètes, révélant une menace surnaturelle qui pourrait détruire le monde.",
		date_parution: "2005-01-28",
		note: 1,
	},
	{
		id: 89,
		nom: "Dragonball Evolution",
		description:
			"Un jeune guerrier découvre ses pouvoirs extraordinaires et sa destinée en tant que protecteur de la Terre contre les forces du mal extraterrestres.",
		date_parution: "2009-04-10",
		note: 1,
	},
	{
		id: 90,
		nom: "Battlefield Earth",
		description:
			"Dans un avenir post-apocalyptique, l'humanité se bat pour sa survie contre une race extraterrestre impitoyable.",
		date_parution: "2000-05-12",
		note: 0,
	},

	{
		id: 91,
		nom: "Indiana Jones and the Kingdom of the Crystal Skull",
		description:
			"L'aventurier Indiana Jones se lance dans une quête pour découvrir le mystère des crânes de cristal et affronter une organisation secrète.",
		date_parution: "2008-05-22",
		note: 3,
	},
	{
		id: 92,
		nom: "Pirates of the Caribbean: Dead Man's Chest",
		description:
			"Le capitaine Jack Sparrow se lance dans une quête pour trouver le coffre maudit de Davy Jones et échapper à une dette de vie.",
		date_parution: "2006-07-07",
		note: 3,
	},
	{
		id: 93,
		nom: "Pirates of the Caribbean: At World's End",
		description:
			"Jack Sparrow et ses alliés se lancent dans une aventure épique pour sauver le capitaine Jack Sparrow et libérer les âmes piégées dans le coffre de Davy Jones.",
		date_parution: "2007-05-25",
		note: 3,
	},
	{
		id: 94,
		nom: "Pirates of the Caribbean: On Stranger Tides",
		description:
			"Jack Sparrow se lance dans une quête pour trouver la fontaine de jouvence, affrontant des ennemis redoutables et des alliés imprévisibles en cours de route.",
		date_parution: "2011-05-20",
		note: 3,
	},
	{
		id: 95,
		nom: "The Hobbit: An Unexpected Journey",
		description:
			"Un jeune hobbit est entraîné dans une quête épique pour récupérer un trésor volé, se heurtant à des créatures fantastiques et à des dangers mortels en chemin.",
		date_parution: "2012-12-14",
		note: 3,
	},
	{
		id: 96,
		nom: "The Hobbit: The Desolation of Smaug",
		description:
			"Bilbo le hobbit et une compagnie de nains continuent leur voyage pour récupérer le trésor volé et affrontent le dragon redoutable Smaug.",
		date_parution: "2013-12-13",
		note: 3,
	},
	{
		id: 97,
		nom: "The Hobbit: The Battle of the Five Armies",
		description:
			"Les forces de la Terre du Milieu se rassemblent pour une bataille épique alors que les nains, les elfes, les hommes et les orques se disputent le contrôle du trésor de Smaug.",
		date_parution: "2014-12-17",
		note: 3,
	},
	{
		id: 98,
		nom: "Harry Potter and the Order of the Phoenix",
		description:
			"Harry Potter se prépare pour une bataille épique contre le mage noir Lord Voldemort et son armée de partisans, tout en luttant contre les obstacles de l'adolescence.",
		date_parution: "2007-07-11",
		note: 3,
	},
	{
		id: 99,
		nom: "Harry Potter and the Half-Blood Prince",
		description:
			"Harry Potter enquête sur le passé de Voldemort et se prépare pour la confrontation finale tout en naviguant dans les complexités des relations amoureuses et de l'amitié.",
		date_parution: "2009-07-15",
		note: 3,
	},
	{
		id: 100,
		nom: "Harry Potter and the Deathly Hallows – Part 1",
		description:
			"Harry Potter et ses amis se lancent dans une mission dangereuse pour détruire les Horcruxes de Voldemort et affaiblir son pouvoir, tandis que le monde des sorciers sombre dans la guerre.",
		date_parution: "2010-11-19",
		note: 3,
	},
];

module.exports = {
	films,
};
