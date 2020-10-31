const maleLetterNames = [
  'Alexander', 'Aiden', 'Anthony', 'Asher', 'Andrew', 'Adrian', 'Aaron', 'Angel', 'Axel', 'Austin', 'Adam', 'Ayden', 'Ashton', 'Amir', 'Abel', 'Alex', 'August', 'Antonio', 'Arthur', 'Alan', 'Adriel', 'Abraham', 'Alejandro', 'Avery', 'Archer', 'Andres', 'Ace', 'Atlas', 'Amari', 'Adonis', 'Aidan', 'Arlo', 'Andre', 'Atticus', 'Ali', 'Anderson', 'Angelo', 'Ari', 'Andy', 'Armani', 'Allen', 'Adan', 'Alexis', 'Alonzo', 'Augustus', 'Albert', 'Abram', 'Alijah', 'Apollo', 'Arjun', 'Abdiel', 'Asa', 'Ayaan', 'Armando', 'Alec', 'Ariel', 'Ares', 'Ahmed', 'Ahmad', 'Arturo', 'Benjamin', 'Brayden', 'Bryson', 'Bennett', 'Brooks', 'Braxton', 'Bentley', 'Beau', 'Brandon', 'Brody', 'Blake', 'Bryce', 'Barrett', 'Beckett', 'Brantley', 'Brian', 'Bradley', 'Bryan', 'Beckham', 'Brady', 'Bodhi', 'Bowen', 'Baker', 'Bruce', 'Braylen', 'Benson', 'Briggs', 'Brycen', 'Bo', 'Baylor', 'Brock', 'Boston', 'Braylon', 'Brendan', 'Boone', 'Braden', 'Bodie', 'Byron', 'Bruno', 'Brixton', 'Brennan', 'Ben', 'Briar', 'Bronson', 'Brecken', 'Branson', 'Brett', 'Bryant', 'Bellamy', 'Brayan', 'Bentlee', 'Bjorn', 'Brodie', 'Blaine', 'Bobby', 'Benicio', 'Billy', 'Bear', 'Bridger', 'Blaze', 'Carter', 'Christopher', 'Charles', 'Caleb', 'Christian', 'Colton', 'Cameron', 'Connor', 'Cooper', 'Carson', 'Chase', 'Cole', 'Carlos', 'Calvin', 'Camden', 'Colt', 'Charlie', 'Caden', 'Colin', 'Cayden', 'Clayton', 'Cash', 'Cody', 'Chance', 'Corbin', 'Cohen', 'Cristian', 'Cruz', 'Cesar', 'Crew', 'Cairo', 'Caiden', 'Conner', 'Collin', 'Clark', 'Cade', 'Conor', 'Cyrus', 'Callum', 'Colson', 'Corey', 'Cannon', 'Cassius', 'Conrad', 'Casey', 'Callan', 'Case', 'Callen', 'Chris', 'Chandler', 'Cason', 'Colby', 'Cullen', 'Cayson', 'Curtis', 'Clay', 'Colten', 'Carmelo', 'Chaim', 'Casen', 'Daniel', 'David', 'Dylan', 'Dominic', 'Declan', 'Damian', 'Diego', 'Dean', 'Dawson', 'Daxton', 'Damien', 'Dallas', 'Derek', 'Dante', 'Dakota', 'Donovan', 'Devin', 'Desmond', 'Dax', 'Dominick', 'Dalton', 'Damon', 'Dexter', 'Derrick', 'Deacon', 'Dorian', 'Drew', 'Danny', 'Davis', 'Duke', 'Dennis', 'Donald', 'Darius', 'Drake', 'Dustin', 'Denver', 'Dillon', 'Dariel', 'Douglas', 'Darren', 'Deandre', 'Devon', 'Dash', 'Demetrius', 'Damari', 'Dominik', 'Dane', 'Dakari', 'Dayton', 'Dangelo', 'Dario', 'Darian', 'Darwin', 'Davion', 'Dilan', 'Dhruv', 'Elijah', 'Ethan', 'Ezra', 'Elias', 'Eli', 'Ezekiel', 'Easton', 'Everett', 'Evan', 'Emmett', 'Elliott', 'Emmanuel', 'Elliot', 'Emiliano', 'Eric', 'Edward', 'Enzo', 'Emilio', 'Emerson', 'Erick', 'Eduardo', 'Ellis', 'Edwin', 'Elian', 'Edgar', 'Erik', 'Ezequiel', 'Emanuel', 'Esteban', 'Eden', 'Enrique', 'Emmitt', 'Ermias', 'Edison', 'Eliel', 'Emery', 'Eddie', 'Elisha', 'Ernesto', 'Enoch', 'Eugene', 'Emory', 'Eliseo', 'Eithan', 'Emir', 'Ephraim', 'Finn', 'Felix', 'Francisco', 'Finley', 'Fernando', 'Fabian', 'Frank', 'Franklin', 'Finnegan', 'Frederick', 'Francis', 'Forrest', 'Ford', 'Finnley', 'Fletcher', 'Flynn', 'Fisher', 'Felipe', 'Franco', 'Fox', 'Forest', 'Foster', 'Grayson', 'Gabriel', 'Greyson', 'George', 'Gavin', 'Gael', 'Giovanni', 'Graham', 'Grant', 'Griffin', 'Gunner', 'Gideon', 'Garrett', 'Gregory', 'Grady', 'Gage', 'Gianni', 'Gunnar', 'Gerardo', 'Gustavo', 'Grey', 'Guillermo', 'Gary', 'Graysen', 'Gordon', 'Gatlin', 'Gerald', 'Genesis', 'Henry', 'Hudson', 'Hunter', 'Harrison', 'Hayden', 'Holden', 'Hayes', 'Hendrix', 'Hector', 'Harvey', 'Hank', 'Hugo', 'Huxley', 'Hezekiah', 'Harry', 'Hamza', 'Houston', 'Hassan', 'Hugh', 'Harley', 'Harold', 'Harlan', 'Harlem', 'Henrik', 'Heath', 'Howard', 'Isaac', 'Isaiah', 'Ian', 'Ivan', 'Israel', 'Iker', 'Ismael', 'Ibrahim', 'Isaias', 'Izaiah', 'Issac', 'Ishaan', 'Idris', 'Ira', 'Ignacio', 'James', 'Jacob', 'Jackson', 'Jack', 'Joseph', 'John', 'Julian', 'Jayden', 'Jaxon', 'Josiah', 'Joshua', 'Jonathan', 'Jeremiah', 'Jameson', 'Jaxson', 'Jordan', 'Jose', 'Jace', 'Jason', 'Jasper', 'Juan', 'Jonah', 'Jayce', 'Jesus', 'Jude', 'Justin', 'Joel', 'Judah', 'Jesse', 'Jeremy', 'Javier', 'Jax', 'Josue', 'Jorge', 'Jaden', 'Jensen', 'Jett', 'Jake', 'Joaquin', 'Jaylen', 'Julius', 'Jaiden', 'Jared', 'Jeffrey', 'Jay', 'Johnny', 'Jayceon', 'Jaxton', 'Johnathan', 'Jamison', 'Jase', 'Jonas', 'Jayson', 'Julio', 'Jalen', 'Jaime', 'Jasiah', 'Jamari', 'Johan', 'Justice', 'Kayden', 'Kai', 'Kingston', 'Kaiden', 'Kevin', 'King', 'Karter', 'Kaleb', 'Kyrie', 'Kenneth', 'Kyler', 'Knox', 'Kaden', 'Kyle', 'Karson', 'Kash', 'Kameron', 'Khalil', 'Kairo', 'Killian', 'Kayson', 'Kane', 'Kason', 'Kade', 'Kasen', 'Kashton', 'Kendrick', 'Keegan', 'Kolton', 'Kyson', 'Kamden', 'Kamari', 'Kian', 'Kaison', 'Kieran', 'Keith', 'Kylan', 'Kobe', 'Kaysen', 'Keaton', 'Kannon', 'Kyree', 'Keanu', 'Kohen', 'Koda', 'Kingsley', 'Kareem', 'Kase', 'Korbin', 'Kyro', 'Kenzo', 'Koa', 'Kelvin', 'Kace', 'Kellan', 'Kellen', 'Kristopher', 'Khari', 'Kristian', 'Kamryn', 'Liam', 'Lucas', 'Logan', 'Levi', 'Luke', 'Leo', 'Lincoln', 'Landon', 'Leonardo', 'Luca', 'Luis', 'Lorenzo', 'Legend', 'Leon', 'Lukas', 'Luka', 'Louis', 'Lane', 'Lennox', 'Leonel', 'Lawson', 'Leland', 'Luciano', 'Leonidas', 'Landen', 'Lawrence', 'Lewis', 'Landyn', 'Layton', 'Lucca', 'Leonard', 'Leandro', 'Lionel', 'Lance', 'Lucian', 'Langston', 'Layne', 'Lachlan', 'Leighton', 'Lochlan', 'Lennon', 'Larry', 'Lee', 'Louie', 'Lian', 'Legacy', 'Ledger', 'London', 'Landry', 'Lyle', 'Leroy', 'Mason', 'Michael', 'Matthew', 'Mateo', 'Maverick', 'Miles', 'Micah', 'Max', 'Myles', 'Maxwell', 'Maddox', 'Malachi', 'Milo', 'Miguel', 'Matteo', 'Messiah', 'Marcus', 'Mark', 'Maximus', 'Matias', 'Maximiliano', 'Martin', 'Manuel', 'Malakai', 'Mario', 'Malcolm', 'Muhammad', 'Major', 'Malik', 'Marshall', 'Marco', 'Matthias', 'Mathias', 'Memphis', 'Milan', 'Moises', 'Marcos', 'Mohamed', 'Maximilian', 'Moses', 'Moshe', 'Makai', 'Mohammad', 'Marcelo', 'Mack', 'Marvin', 'Mauricio', 'Mohammed', 'Mathew', 'Mitchell', 'Morgan', 'Mekhi', 'Maurice', 'Maximo', 'Marcel', 'Melvin', 'Miller', 'Magnus', 'Madden', 'Musa', 'Noah', 'Nathan', 'Nolan', 'Nicholas', 'Nathaniel', 'Nicolas', 'Nash', 'Nico', 'Nasir', 'Nehemiah', 'Noel', 'Niko', 'Nikolai', 'Nixon', 'Nikolas', 'Neil', 'Nelson', 'Noe', 'Nathanael', 'Nova', 'Niklaus', 'Oliver', 'Owen', 'Oscar', 'Omar', 'Orion', 'Odin', 'Otto', 'Oakley', 'Omari', 'Otis', 'Orlando', 'Onyx', 'Parker', 'Patrick', 'Peter', 'Preston', 'Paul', 'Paxton', 'Phoenix', 'Prince', 'Pablo', 'Pedro', 'Princeton', 'Philip', 'Peyton', 'Porter', 'Pierce', 'Phillip', 'Ryan', 'Roman', 'Robert', 'Ryder', 'Rowan', 'Ryker', 'Rhett', 'River', 'Richard', 'Remington', 'Rafael', 'Riley', 'Ronan', 'Reid', 'Rylan', 'Ricardo', 'Raymond', 'Romeo', 'Rory', 'Raiden', 'Russell', 'Royce', 'Reed', 'Ruben', 'Remy', 'Rhys', 'Ronin', 'Royal', 'Roberto', 'Rocco', 'Raul', 'Rodrigo', 'Raphael', 'Ronald', 'Roland', 'Ryland', 'Rowen', 'Rayan', 'Roy', 'Reece', 'Ridge', 'Rex', 'Ricky', 'Raylan', 'Roger', 'Randy', 'Rayden', 'Ramon', 'Ray', 'Rohan', 'Reese', 'Reign', 'Rey', 'Reyansh', 'Rocky', 'Rodney', 'Robin', 'Rudy', 'Reginald', 'Ronnie', 'Sebastian', 'Samuel', 'Santiago', 'Sawyer', 'Silas', 'Steven', 'Simon', 'Sean', 'Stephen', 'Spencer', 'Sergio', 'Seth', 'Sullivan', 'Sterling', 'Solomon', 'Shane', 'Shawn', 'Sage', 'Santino', 'Skyler', 'Scott', 'Saul', 'Stetson', 'Soren', 'Samson', 'Sincere', 'Sam', 'Sylas', 'Shepherd', 'Sutton', 'Sonny', 'Salvador', 'Santana', 'Stanley', 'Samir', 'Shiloh', 'Saint', 'Salvatore', 'Stefan', 'Sekani', 'Salem', 'Santos', 'Simeon', 'Seven', 'Stone', 'Theodore', 'Thomas', 'Tyler', 'Tristan', 'Thiago', 'Timothy', 'Theo', 'Tucker', 'Tobias', 'Titus', 'Travis', 'Tanner', 'Tyson', 'Troy', 'Trevor', 'Tate', 'Tatum', 'Trenton', 'Tripp', 'Tony', 'Taylor', 'Trey', 'Ty', 'Titan', 'Tomas', 'Tommy', 'Talon', 'Tadeo', 'Thaddeus', 'Trace', 'Thatcher', 'Terry', 'Trent', 'Tristen', 'Turner', 'Tru', 'Terrance', 'Toby', 'Tristian', 'Vincent', 'Victor', 'Vihaan', 'Valentino', 'Vicente', 'Vincenzo', 'Valentin', 'Van', 'Vivaan', 'Vance', 'William', 'Wyatt', 'Wesley', 'Weston', 'Waylon', 'Walker', 'Walter', 'Wade', 'Warren', 'Winston', 'Wilder', 'Wells', 'Wilson', 'Watson', 'Wayne', 'Westley', 'Westin', 'Wallace', 'Wesson', 'Wes', 'Will', 'Yusuf', 'Yosef', 'Yousef', 'Yahir', 'Yehuda', 'Yisroel', 'Yahya', 'Yael', 'Yadiel', 'Zachary', 'Zion', 'Zayden', 'Zane', 'Zander', 'Zayn', 'Zayne', 'Zaiden', 'Zachariah', 'Zyaire', 'Zain', 'Zaire', 'Zaid', 'Zeke', 'Zayd', 'Zechariah', 'Zavier', 'Zakai', 'Zahir', 'Zyon'
]
const femLetterNames = [
  'Ava', 'Amelia', 'Abigail', 'Avery', 'Aria', 'Aurora', 'Aubrey', 'Addison', 'Audrey', 'Anna', 'Ariana', 'Aaliyah', 'Alice', 'Allison', 'Autumn', 'Adeline', 'Arya', 'Athena', 'Arianna', 'Aubree', 'Adalynn', 'Alexandra', 'Amaya', 'Ashley', 'Alexa', 'Amara', 'Andrea', 'Anastasia', 'Alina', 'Adalyn', 'Ayla', 'Annabelle', 'Alyssa', 'Ariel', 'Aliyah', 'Alaia', 'Alaina', 'Arabella', 'Amy', 'Ada', 'Ariella', 'Alayna', 'Ana', 'Alana', 'Alexis', 'Adelyn', 'Adriana', 'Aspen', 'Alivia', 'Angela', 'Amira', 'Adaline', 'Angelina', 'Aniyah', 'Amiyah', 'Annie', 'Alexandria', 'Alani', 'Adelaide', 'Amari', 'Bella', 'Brooklyn', 'Brielle', 'Brianna', 'Bailey', 'Blakely', 'Brynlee', 'Brooke', 'Blake', 'Brooklynn', 'Briella', 'Brynn', 'Brinley', 'Bristol', 'Blair', 'Bianca', 'Braelynn', 'Bethany', 'Briana', 'Beatrice', 'Briar', 'Braelyn', 'Bonnie', 'Baylee', 'Bailee', 'Blaire', 'Bria', 'Bridget', 'Brylee', 'Braylee', 'Brittany', 'Belen', 'Belle', 'Blessing', 'Barbara', 'Bexley', 'Berkley', 'Beatrix', 'Charlotte', 'Camila', 'Chloe', 'Claire', 'Caroline', 'Cora', 'Clara', 'Charlie', 'Cecilia', 'Callie', 'Catalina', 'Catherine', 'Camille', 'Camilla', 'Cali', 'Charlee', 'Cassidy', 'Celeste', 'Camryn', 'Collins', 'Cataleya', 'Carolina', 'Carmen', 'Charleigh', 'Celine', 'Colette', 'Cheyenne', 'Carter', 'Charli', 'Christina', 'Cameron', 'Chelsea', 'Cecelia', 'Cadence', 'Charley', 'Carly', 'Cassandra', 'Coraline', 'Chaya', 'Clementine', 'Calliope', 'Clarissa', 'Cynthia', 'Crystal', 'Chanel', 'Chana', 'Clare', 'Celia', 'Corinne', 'Casey', 'Christine', 'Chandler', 'Carolyn', 'Cleo', 'Delilah', 'Daisy', 'Diana', 'Daniela', 'Dakota', 'Delaney', 'Destiny', 'Daleyza', 'Dahlia', 'Demi', 'Daniella', 'Danielle', 'Daphne', 'Dylan', 'Danna', 'Dream', 'Dorothy', 'Dayana', 'Dallas', 'Dior', 'Davina', 'Della', 'Dalary', 'Dani', 'Dulce', 'Denver', 'Deborah', 'Dana', 'Dixie', 'Emma', 'Evelyn', 'Emily', 'Ella', 'Elizabeth', 'Eleanor', 'Ellie', 'Emilia', 'Everly', 'Elena', 'Eliana', 'Eva', 'Emery', 'Everleigh', 'Eliza', 'Eden', 'Elliana', 'Emersyn', 'Eloise', 'Emerson', 'Esther', 'Ember', 'Elise', 'Elsie', 'Evangeline', 'Elaina', 'Evelynn', 'Evie', 'Elle', 'Everlee', 'Esmeralda', 'Emely', 'Esme', 'Elisa', 'Emelia', 'Elliott', 'Elianna', 'Emory', 'Erin', 'Eve', 'Emmy', 'Edith', 'Emberly', 'Elaine', 'Emmalyn', 'Elliot', 'Emmie', 'Emerie', 'Ensley', 'Eileen', 'Ellis', 'Elyse', 'Emmeline', 'Estella', 'Ellianna', 'Elsa', 'Estelle', 'Estrella', 'Ellen', 'Elora', 'Faith', 'Finley', 'Freya', 'Fiona', 'Fatima', 'Felicity', 'Frances', 'Francesca', 'Fernanda', 'Faye', 'Frida', 'Frankie', 'Florence', 'Flora', 'Fallon', 'Freyja', 'Grace', 'Genesis', 'Gabriella', 'Gianna', 'Genevieve', 'Gemma', 'Georgia', 'Gracie', 'Giselle', 'Gabriela', 'Gracelyn', 'Gabrielle', 'Gracelynn', 'Gwendolyn', 'Gia', 'Gloria', 'Greta', 'Galilea', 'Giuliana', 'Giovanna', 'Gwen', 'Guadalupe', 'Giana', 'Harper', 'Hannah', 'Hazel', 'Hailey', 'Hadley', 'Harmony', 'Hope', 'Harley', 'Hayden', 'Haven', 'Harlow', 'Heidi', 'Hallie', 'Heaven', 'Helen', 'Hattie', 'Haley', 'Helena', 'Holly', 'Hanna', 'Henley', 'Hadassah', 'Hayley', 'Haylee', 'Harmoni', 'Harlee', 'Holland', 'Haisley', 'Hana', 'Halle', 'Hunter', 'Hadlee', 'Heavenly', 'Harleigh', 'Hailee', 'Halo', 'Harriet', 'Hadleigh', 'Isabella', 'Isla', 'Ivy', 'Isabelle', 'Iris', 'Isabel', 'Izabella', 'Imani', 'Itzel', 'Ivory', 'Ivanna', 'Irene', 'Isabela', 'Itzayana', 'Iliana', 'Indie', 'India', 'Ingrid', 'Josephine', 'Julia', 'Jade', 'Jasmine', 'Josie', 'Jordyn', 'Juliana', 'Juliette', 'Juniper', 'Jocelyn', 'June', 'Journee', 'Jayla', 'Journey', 'Joanna', 'Julianna', 'Juliet', 'Jane', 'Jessica', 'Joy', 'Jacqueline', 'Jennifer', 'Jordan', 'Jenna', 'Jolene', 'Jada', 'Jimena', 'Jazlyn', 'Jaliyah', 'Janelle', 'Jayleen', 'Jemma', 'Jamie', 'Jayda', 'Justice', 'Julieta', 'Jazmin', 'Johanna', 'Julie', 'Jaylah', 'Janiyah', 'Julissa', 'Jessie', 'Joelle', 'Jazmine', 'Jolie', 'Journi', 'Jillian', 'Judith', 'Jaycee', 'Jayde', 'Jaylee', 'Jenesis', 'Joyce', 'Jaelynn', 'Jaelyn', 'Jewel', 'Kennedy', 'Kinsley', 'Kaylee', 'Katherine', 'Kylie', 'Khloe', 'Kayla', 'Kimberly', 'Kamila', 'Kali', 'Kehlani', 'Kendall', 'Kiara', 'Kaia', 'Kate', 'Kailani', 'Keira', 'Kira', 'Kenzie', 'Kinley', 'Kaylani', 'Kaitlyn', 'Katie', 'Kyla', 'Kalani', 'Kelsey', 'Kora', 'Kamryn', 'Kensley', 'Kathryn', 'Kayleigh', 'Kennedi', 'Katelyn', 'Kylee', 'Kaliyah', 'Karina', 'Kara', 'Khaleesi', 'Katalina', 'Kendra', 'Kyra', 'Kimber', 'Karsyn', 'Kaydence', 'Kassidy', 'Kelly', 'Karen', 'Kenna', 'Karla', 'Kairi', 'Kynlee', 'Kinslee', 'Kori', 'Karter', 'Kyleigh', 'Keyla', 'Kallie', 'Kailey', 'Kamilah', 'Kai', 'Luna', 'Layla', 'Lily', 'Lillian', 'Leah', 'Lucy', 'Lydia', 'Leilani', 'Liliana', 'Lyla', 'Lucia', 'London', 'Londyn', 'Lilly', 'Lauren', 'Laila', 'Leila', 'Lila', 'Lola', 'Lena', 'Lia', 'Lilah', 'Lucille', 'Lilliana', 'Logan', 'Leia', 'Lexi', 'Laura', 'Lyric', 'Lainey', 'Lana', 'Lennon', 'Luciana', 'Lilith', 'Leighton', 'Lorelei', 'Liana', 'Leona', 'Leslie', 'Lorelai', 'Lyanna', 'Lilian', 'Legacy', 'Lylah', 'Lauryn', 'Lillie', 'Lacey', 'Liberty', 'Liv', 'Lyra', 'Louisa', 'Louise', 'Laney', 'Lara', 'Leyla', 'Lennox', 'Lina', 'Lea', 'Laurel', 'Livia', 'Mia', 'Mila', 'Madison', 'Maya', 'Madelyn', 'Madeline', 'Maria', 'Melanie', 'Mackenzie', 'Melody', 'Mary', 'Margaret', 'Molly', 'Morgan', 'Mya', 'Marley', 'Mckenzie', 'Millie', 'Magnolia', 'Maeve', 'Malia', 'Makayla', 'Mariana', 'Mariah', 'Miriam', 'Mckenna', 'Michelle', 'Maggie', 'Myla', 'Margot', 'Madilyn', 'Makenzie', 'Melissa', 'Maisie', 'Milani', 'Madeleine', 'Miracle', 'Makenna', 'Maci', 'Maliyah', 'Maddison', 'Mabel', 'Miranda', 'Marlee', 'Matilda', 'Mira', 'Madelynn', 'Macie', 'Meadow', 'Mikayla', 'Mckinley', 'Maren', 'Maryam', 'Maia', 'Madilynn', 'Myra', 'Mae', 'Mallory', 'Malaysia', 'Mariam', 'Nora', 'Natalie', 'Nova', 'Naomi', 'Nevaeh', 'Natalia', 'Norah', 'Noelle', 'Nicole', 'Nyla', 'Nina', 'Nylah', 'Nadia', 'Nayeli', 'Nia', 'Noa', 'Nola', 'Nalani', 'Nala', 'Noemi', 'Navy', 'Novalee', 'Nellie', 'Natasha', 'Nataly', 'Nathalie', 'Nancy', 'Novah', 'Noor', 'Olivia', 'Olive', 'Oakley', 'Octavia', 'Ophelia', 'Oaklynn', 'Oaklyn', 'Opal', 'Oaklee', 'Oakleigh', 'Penelope', 'Paisley', 'Piper', 'Peyton', 'Parker', 'Presley', 'Payton', 'Paige', 'Phoebe', 'Phoenix', 'Paris', 'Paislee', 'Palmer', 'Poppy', 'Priscilla', 'Pearl', 'Paula', 'Princess', 'Penny', 'Paulina', 'Paisleigh', 'Promise', 'Persephone', 'Paloma', 'Paola', 'Patricia', 'Paityn', 'Riley', 'Ruby', 'Rylee', 'Reagan', 'Raelynn', 'Rose', 'Ryleigh', 'Remi', 'Reese', 'Rachel', 'Rosalie', 'River', 'Raegan', 'Rowan', 'Ruth', 'Rebecca', 'Royalty', 'Rylie', 'Raelyn', 'Remington', 'Reign', 'Ryan', 'Rosemary', 'Regina', 'Raven', 'Rory', 'Renata', 'Remy', 'Rosie', 'Reyna', 'Reina', 'Rayna', 'Romina', 'Rosa', 'Roselyn', 'Rhea', 'Ryann', 'Rebekah', 'Rayne', 'Rivka', 'Raina', 'Royal', 'Ramona', 'Rosalyn', 'Rylan', 'Raquel', 'Rosalee', 'Renee', 'Robin', 'Sophia', 'Sofia', 'Scarlett', 'Stella', 'Savannah', 'Skylar', 'Serenity', 'Samantha', 'Sarah', 'Sophie', 'Sadie', 'Sara', 'Summer', 'Sienna', 'Sloane', 'Sydney', 'Selena', 'Sawyer', 'Sage', 'Saylor', 'Samara', 'Stephanie', 'Scarlet', 'Sabrina', 'Sutton', 'Skye', 'Serena', 'Sarai', 'Skyler', 'Selah', 'Shiloh', 'Shelby', 'Sierra', 'Sylvia', 'Stevie', 'Skyla', 'Siena', 'Savanna', 'Sloan', 'Sasha', 'Saige', 'Simone', 'Salem', 'Sariyah', 'Sunny', 'Sky', 'Saoirse', 'Selene', 'Sylvie', 'Scarlette', 'Salma', 'Sevyn', 'Sariah', 'Sandra', 'Samira', 'Taylor', 'Trinity', 'Teagan', 'Tessa', 'Thea', 'Talia', 'Tatum', 'Tiana', 'Tiffany', 'Treasure', 'Teresa', 'Tinsley', 'Thalia', 'Theodora', 'Tori', 'Tenley', 'Tatiana', 'Tinley', 'Taliyah', 'Victoria', 'Violet', 'Valentina', 'Vivian', 'Valeria', 'Valerie', 'Vera', 'Vanessa', 'Vivienne', 'Veronica', 'Viviana', 'Virginia', 'Vienna', 'Veda', 'Valery', 'Vada', 'Violeta', 'Willow', 'Winter', 'Willa', 'Wren', 'Wynter', 'Winnie', 'Waverly', 'Whitney', 'Whitley', 'Yaretzi', 'Yareli', 'Yara', 'Yaritza', 'Yasmin', 'Zoey', 'Zoe', 'Zara', 'Zuri', 'Zariah', 'Zahra', 'Zelda', 'Zaylee', 'Zariyah', 'Zaria', 'Zora', 'Zaniyah', 'Zainab', 'Zoie', 'Zola', 'Zendaya'
]
const syl1M = [
  'Ace', 'Beau', 'Blake', 'Brooks', 'Bryce', 'Cade', 'Cash', 'Chance', 'Charles', 'Chase', 'Clark', 'Cole', 'Colt', 'Crew', 'Cruz', 'Dean', 'Finn', 'Gael', 'George', 'Graham', 'Grant', 'Hayes', 'Jace', 'Jack', 'Jake', 'James', 'Jax', 'Jay', 'Jayce', 'Jett', 'Joel', 'John', 'Juan', 'Jude', 'Kade', 'Kai', 'Kane', 'Kash', 'King', 'Knox', 'Kyle', 'Lane', 'Luke', 'Mark', 'Max', 'Miles', 'Myles', 'Nash', 'Paul', 'Prince', 'Reed', 'Reid', 'Rhett', 'Royce', 'Sean', 'Seth', 'Troy', 'Wade', 'Zane', 'Zayn'
]
const syl1F = [
  'Ann', 'Anne', 'Belle', 'Blair', 'Blaire', 'Blake', 'Brooke', 'Brynn', 'Claire', 'Clare', 'Dream', 'Elle', 'Eve', 'Faith', 'Faye', 'Grace', 'Gwen', 'Hope', 'Jade', 'Jane', 'Jayde', 'Joy', 'Joyce', 'June', 'Kai', 'Kate', 'Liv', 'Luz', 'Maeve', 'Noor', 'Paige', 'Pearl', 'Queen', 'Quinn', 'Rayne', 'Reese', 'Reign', 'Rose', 'Ruth', 'Sage', 'Saige', 'Sky', 'Skye', 'Sloan', 'Sloane', 'Wren'
]
const syl2M = [
  'Aaron', 'Adam', 'Aiden', 'Andrew', 'Angel', 'Asher', 'Austin', 'Axel', 'Caleb', 'Carson', 'Carter', 'Colton', 'Connor', 'Cooper', 'Daniel', 'David', 'Declan', 'Dylan', 'Easton', 'Eli', 'Ethan', 'Evan', 'Ezra', 'Grayson', 'Greyson', 'Henry', 'Hudson', 'Hunter', 'Ian', 'Isaac', 'Jackson', 'Jacob', 'Jaxon', 'Jaxson', 'Jayden', 'Jordan', 'Jose', 'Joseph', 'Kayden', 'Landon', 'Leo', 'Levi', 'Liam', 'Lincoln', 'Logan', 'Luca', 'Lucas', 'Mason', 'Matthew', 'Michael', 'Nathan', 'Noah', 'Nolan', 'Owen', 'Parker', 'Robert', 'Roman', 'Ryan', 'Thomas', 'Wyatt'
]
const syl2F = [
  'Alice', 'Anna', 'Arya', 'Aubree', 'Aubrey', 'Audrey', 'Autumn', 'Ava', 'Bella', 'Brielle', 'Brooklyn', 'Charlotte', 'Chloe', 'Clara', 'Cora', 'Ella', 'Ellie', 'Emma', 'Eva', 'Hadley', 'Hailey', 'Hannah', 'Harper', 'Hazel', 'Iris', 'Isla', 'Ivy', 'Jasmine', 'Kaylee', 'Kinsley', 'Kylie', 'Layla', 'Leah', 'Lily', 'Lucy', 'Luna', 'Lyla', 'Mary', 'Maya', 'Mia', 'Mila', 'Nora', 'Nova', 'Paisley', 'Peyton', 'Piper', 'Raelynn', 'Reagan', 'Riley', 'Ruby', 'Rylee', 'Sadie', 'Sarah', 'Scarlett', 'Skylar', 'Sophie', 'Stella', 'Willow', 'Zoe', 'Zoey'
]
const syl3M = [
  'Abraham', 'Adonis', 'Adrian', 'Adriel', 'Amari', 'Anthony', 'Atticus', 'Avery', 'Benjamin', 'Cameron', 'Christian', 'Christopher', 'Cristian', 'Damian', 'Damien', 'Diego', 'Dominic', 'Eduardo', 'Elias', 'Elijah', 'Elliot', 'Elliott', 'Emerson', 'Everett', 'Fernando', 'Francisco', 'Gabriel', 'Harrison', 'Isaiah', 'Jameson', 'Javier', 'Jeremy', 'Jonathan', 'Joshua', 'Josiah', 'Julian', 'Kameron', 'Killian', 'Lorenzo', 'Malachi', 'Malakai', 'Mateo', 'Matias', 'Matteo', 'Maverick', 'Maximus', 'Messiah', 'Nicholas', 'Nicolas', 'Oliver', 'Orion', 'Remington', 'Samuel', 'Theodore', 'Thiago', 'Timothy', 'Tobias', 'William', 'Xavier', 'Zachary'
]
const syl3F = [
  'Aaliyah', 'Abigail', 'Adalyn', 'Adalynn', 'Addison', 'Adeline', 'Alexa', 'Alina', 'Allison', 'Amara', 'Amaya', 'Aria', 'Athena', 'Aurora', 'Avery', 'Brianna', 'Camila', 'Caroline', 'Delilah', 'Eleanor', 'Elena', 'Eliza', 'Emerson', 'Emersyn', 'Emery', 'Emily', 'Evelyn', 'Everleigh', 'Everly', 'Genesis', 'Gianna', 'Isabel', 'Isabelle', 'Josephine', 'Julia', 'Katherine', 'Kennedy', 'Leilani', 'Lillian', 'Lucia', 'Lydia', 'Mackenzie', 'Madeline', 'Madelyn', 'Madison', 'Margaret', 'Maria', 'Melanie', 'Melody', 'Naomi', 'Natalie', 'Nevaeh', 'Samantha', 'Savannah', 'Sofia', 'Sophia', 'Valerie', 'Violet', 'Vivian', 'Ximena'
]
const syl4M = [
  'Alejandro', 'Alessandro', 'Alexander', 'Alexzander', 'Antonio', 'Azariah', 'Benicio', 'Eliseo', 'Emilio', 'Emmanuel', 'Ezekiel', 'Ezequiel', 'Giovanni', 'Hezekiah', 'Ignacio', 'Jedidiah', 'Jeremiah', 'Jeremias', 'Leonardo', 'Leonidas', 'Luciano', 'Mauricio', 'Nathaniel', 'Nehemiah', 'Santiago', 'Sebastian', 'Valentino', 'Zachariah', 'Zechariah'
]
const syl4F = [
  'Adelina', 'Adriana', 'Adrianna', 'Alejandra', 'Alessandra', 'Alessia', 'Alexandra', 'Alicia', 'Alivia', 'Amalia', 'Amelia', 'Angelica', 'Angelina', 'Antonella', 'Arabella', 'Ariana', 'Arianna', 'Ariella', 'Aviana', 'Avianna', 'Carolina', 'Cataleya', 'Catalina', 'Cecelia', 'Cecilia', 'Eliana', 'Elianna', 'Elizabeth', 'Elliana', 'Emelia', 'Emilia', 'Esmeralda', 'Evangeline', 'Felicity', 'Gabriela', 'Gabriella', 'Isabella', 'Izabella', 'Juliana', 'Julianna', 'Julieta', 'Katalina', 'Liliana', 'Lilliana', 'Luciana', 'Magnolia', 'Malaysia', 'Mariana', 'Natalia', 'Octavia', 'Olivia', 'Ophelia', 'Penelope', 'Serenity', 'Valentina', 'Valeria', 'Veronica', 'Victoria', 'Virginia', 'Viviana'
]
const syl5M = [
  'Emiliano', 'Maximilian'
]
const syl5F = [
  'Alexandria', 'Anastasia'
]
const notTopArrayM = [
  '#1001', 'Achilles', '#1002', 'Dimitri', '#1003', 'Nickolas', '#1004', 'Cedric', '#1005', 'Damir', '#1006', 'Isai', '#1007', 'Kacen', '#1008', 'Mikael', '#1009', 'Skylar', '#1010', 'Willie', '#1011', 'Cayde', '#1012', 'Craig', '#1013', 'Lev', '#1014', 'Davian', '#1015', 'Mccoy', '#1016', 'Yasir', '#1017', 'Duncan', '#1018', 'Eason', '#1019', 'Leif', '#1020', 'Osiris', '#1021', 'Ulysses', '#1022', 'Ralph', '#1023', 'Rashad', '#1024', 'Cristiano', '#1025', 'Draven', '#1026', 'Harris', '#1027', 'Immanuel', '#1028', 'Zamir', '#1029', 'Harper', '#1030', 'Shepard'
]
const notTopArrayF = [
  '#1001', 'Naya', '#1002', 'Adrienne', '#1003', 'Rilynn', '#1004', 'Nyomi', '#1005', 'Seraphina', '#1006', 'Artemis', '#1007', 'Kadence', '#1008', 'Leena', '#1009', 'Libby', '#1010', 'Marcella', '#1011', 'Marisol', '#1012', 'Tara', '#1013', 'Aspyn', '#1014', 'Loretta', '#1015', 'Azaria', '#1016', 'Bellamy', '#1017', 'Cara', '#1018', 'Carla', '#1019', 'Etta', '#1020', 'Majesty', '#1021', 'Honesty', '#1022', 'Jaylene', '#1023', 'Joselyn', '#1024', 'Lillianna', '#1025', 'Violette', '#1026', 'Aadhya', '#1027', 'Cherish', '#1028', 'Arely', '#1029', 'Ayva', '#1030', 'Emilie'
]
const unuArrayM = [
  'Abner', 'Adiel', 'Adler', 'Ander', 'Andreas', 'Avi', 'Azael', 'Benedict', 'Benton', 'Bishop', 'Boaz', 'Brayson', 'Brysen', 'Cillian', 'Coen', 'Coleson', 'Decker', 'Eliam', 'Elon', 'Emmet', 'Evander', 'Everest', 'Ezrah', 'Gannon', 'Gianluca', 'Greysen', 'Imran', 'Jenson', 'Jones', 'Kaine', 'Kaisen', 'Karim', 'Karsen', 'Karsyn', 'Kolt', 'Kooper', 'Korbyn', 'Kyzer', 'Laith', 'Macklin', 'Meir', 'Montgomery', 'Murphy', 'Nazir', 'Noble', 'Ocean', 'Pharaoh', 'Raheem', 'Rio', 'Rylen', 'Shimon', 'Shlomo', 'Syncere', 'Torin', 'Viaan', 'Yitzchok', 'Yoel', 'Zakari', 'Zeus', 'Zev'
]
const unuArrayF = [
  'Aislinn', 'Aliah', 'Amia', 'Aminah', 'Annalee', 'Aranza', 'Arleth', 'Avalyn', 'Ayah', 'Brynleigh', 'Chevelle', 'Clover', 'Cordelia', 'Eleanora', 'Elia', 'Emiliana', 'Evalyn', 'Evalynn', 'Everley', 'Giavanna', 'Iyla', 'Jovie', 'Jurnee', 'Kaleah', 'Kamilla', 'Kamora', 'Khadija', 'Khalani', 'Khari', 'Layan', 'Layne', 'Leilany', 'Lianna', 'Loyalty', 'Maddie', 'Maisy', 'Marlowe', 'Meera', 'Melani', 'Melania', 'Naila', 'Nailah', 'Noah', 'Nori', 'Nuri', 'Raya', 'Raylee', 'Raylynn', 'Rhylee', 'Rosalina', 'Rowyn', 'Rylynn', 'Saanvi', 'Scout', 'Soraya', 'Spencer', 'Vayda', 'Zayla', 'Zhavia', 'Zoya'
]
const spaArrayM = [
  'Alejandro', 'ah-leh-HAHN-dro', 'Alonzo', 'ah-LAHN-zoh', 'Alleto', 'AL-vah-roh', 'Antonio', 'ahn-TOH-nee-oh', 'Carlos', 'KAHR-lohs', 'Cesar', 'seh-SAHR', 'Cruz', 'kroos', 'Diego', 'dee-AY-goh', 'Elian', 'EHL-ee-ahn', 'Enrique', 'ehn-REE-kay', 'Esteban', 'ehs-TEH-bahn', 'Felipe', 'feh-LEE-peh', 'Francisco', 'frahn-SEES-koh', 'Guillermo', 'gee-YEHR-moh', 'Hector', 'HEHK-tor', 'Javier', 'ha-VEE-air', 'Jesus', 'hay-SOOS', 'Joaquin', 'wah-KEEN', 'Jorge', 'HOR-hay', 'Jose', 'ho-ZAY', 'Juan', 'wahn', 'Lorenzo', 'lor-EHN-zoh', 'Manuel', 'mahn-WEHL', 'Mateo', 'mah-TAY-oh', 'Miguel', 'mee-GEHL', 'Pedro', 'PEH-droh', 'Rafael', 'rah-fah-EHL, rah-fay-EHL', 'Ricardo', 'ree-KAHR-doh', 'Rodrigo', 'rohd-REE-goh', 'Salvador', 'SAL-vah-dohr', 'Santana', 'san-TAN-ah', 'Santiago', 'sahn-tee-AH-goh'
]
const spaArrayF = [
  'Alejandra', 'ah-leh-HAHN-dra', 'Alondra', 'ah-LON-drah', 'Carmen', 'KAR-mehn', 'Catalina', 'ka-ta-LEE-na', 'Daniela', 'dan-YEHL-ah', 'Dulce', 'DOOL-seh', 'Eliana', 'el-ee-AH-nah', 'Emilia', 'eh-MEE-lee-ah', 'Esme', 'EHZ-may, EHZ-mee', 'Esmeralda', 'ehz-meh-RAHL-dah', 'Esperanza', 'ehs-peh-RAHN-sah', 'Guadalupe', 'gwah-dah-LOO-peh', 'Isabelle', 'iz-ah-behl', 'Jimena', 'heh-MEH-nah', 'Liliana', 'lil-ee-AN-ah', 'Linda', 'LIN-dah', 'Lola', 'LO-lah', 'Lucia', 'loo-SEE-ah', 'Maria', 'mah-REE-ah', 'Mariana', 'mar-ee-AH-nah', 'Marisol', 'ma-ree-SOL', 'Natalia', 'nah-TAH-lee-ah', 'Paloma', 'pah-LOH-mah', 'Paola', 'pow-OH-lah', 'Ramona', 'rah-MOHN-ah', 'Raquel', 'rah-KEHL', 'Rosa', 'ROH-sah', 'Sierra', 'see-EHR-ah'
]
const unisexEarly20th = [
  'Billie', 'Bobbie', 'Carmen', 'Carol', 'Cleo', 'Dale', 'Dana', 'Eddie', 'Francis', 'Frankie', 'Gale', 'Guadalupe', 'Jackie', 'James', 'Jan', 'Jean', 'Jerry', 'Jessie', 'Jimmie', 'John', 'Johnnie', 'Laverne', 'Lee', 'Leslie', 'Lynn', 'Marion', 'Mary', 'Merle', 'Ollie', 'Pat', 'Patsy', 'Robert', 'Robin', 'Shirley', 'Terry', 'Willie'
]
const unisexLate20th = [
  'Addison', 'Alexis', 'Angel', 'Ariel', 'Ashley', 'Ashton', 'Avery', 'Bailey', 'Cameron', 'Casey', 'Chris', 'Christian', 'Courtney', 'Dakota', 'Devin', 'Devon', 'Dominique', 'Harley', 'Hunter', 'Jaden', 'Jaime', 'Jamie', 'Jody', 'Jordan', 'Kasey', 'Kelly', 'Kendall', 'Kerry', 'Kim', 'Logan', 'Mackenzie', 'Michael', 'Morgan', 'Payton', 'Peyton', 'Rene', 'Riley', 'Ryan', 'Shannon', 'Shawn', 'Sidney', 'Skylar', 'Skyler', 'Stacey', 'Stacy', 'Taylor', 'Tracy', 'Tyler'
]
const unisex21st = [
  'Amari', 'Ari', 'Armani', 'Blake', 'Carson', 'Carter', 'Charlie', 'Dallas', 'Dylan', 'Eden', 'Elliot', 'Elliott', 'Ellis', 'Emerson', 'Emery', 'Finley', 'Harper', 'Hayden', 'Jaiden', 'Jayden', 'Jaylin', 'Jordyn', 'Justice', 'Kayden', 'Leighton', 'Lennon', 'Lennox', 'London', 'Micah', 'Milan', 'Oakley', 'Parker', 'Phoenix', 'Quinn', 'Reese', 'Remington', 'Remy', 'River', 'Rory', 'Rowan', 'Rylee', 'Sage', 'Sawyer', 'Shiloh', 'Sutton', 'Tatum', 'Teagan', 'Zion'
]
const boys1st = [
  'Angel', 'Boys 1907 / Girls 1956', 'Ari', 'Boys 1968 / Girls 2016', 'Ariel', 'Boys 1967 / Girls 1978', 'Armani', 'Boys 1994 / Girls 1997', 'August', 'Boys 1999 / Girls 2018', 'Avery', 'Boys 1900 / Girls 1989', 'Blake', 'Boys 1903 / Girls 1990', 'Cameron', 'Boys 1900 / Girls 1980', 'Carter', 'Boys 1900 / Girls 2013', 'Charlie', 'Boys 1900 / Girls 1900', 'Dakota', 'Boys 1985 / Girls 1990', 'Dallas', 'Boys 1900 / Girls 1910', 'Denver', 'Boys 1900 / Girls 2019', 'Dylan', 'Boys 1966 / Girls 1993', 'Elliot', 'Boys 1900 / Girls 2011', 'Elliott', 'Boys 1900 / Girls 2013', 'Ellis', 'Boys 1900 / Girls 2015', 'Emerson', 'Boys 1900 / Girls 2002', 'Emery', 'Boys 1900 / Girls 2005', 'Ezra', 'Boys 1900 / Girls 2018', 'Finley', 'Boys 1900 / Girls 2005', 'Hayden', 'Boys 1900 / Girls 1998', 'Hunter', 'Boys 1900 / Girls 1993', 'Jordan', 'Boys 1900 / Girls 1978', 'Justice', 'Boys 1992 / Girls 1994', 'Kai', 'Boys 1979 / Girls 2010', 'Kamari', 'Boys 2003 / Girls 2008', 'Karter', 'Boys 2005 / Girls 2014', 'Leighton', 'Boys 1908 / Girls 2009', 'Lennon', 'Boys 2008 / Girls 2013', 'Lennox', 'Boys 2010 / Girls 2015', 'Logan', 'Boys 1900 / Girls 1988', 'Milan', 'Boys 1912 / Girls 2009', 'Morgan', 'Boys 1900 / Girls 1976', 'Oakley', 'Boys 1901 / Girls 2013', 'Parker', 'Boys 1900 / Girls 1999', 'Peyton', 'Boys 1989 / Girls 1992', 'Phoenix', 'Boys 1995 / Girls 2003', 'Quinn', 'Boys 1960 / Girls 1979', 'Reese', 'Boys 1900 / Girls 2000', 'Remington', 'Boys 1983 / Girls 2014', 'Remy', 'Boys 2009 / Girls 2014', 'Riley', 'Boys 1900 / Girls 1990', 'River', 'Boys 1994 / Girls 2009', 'Rory', 'Boys 1947 / Girls 2003', 'Rowan', 'Boys 1999 / Girls 2003', 'Royal', 'Boys 1900 / Girls 2015', 'Ryan', 'Boys 1906 / Girls 1974', 'Rylan', 'Boys 1997 / Girls 2009', 'Sage', 'Boys 1991 / Girls 1993', 'Sawyer', 'Boys 1991 / Girls 2010', 'Skyler', 'Boys 1981 / Girls 1990', 'Taylor', 'Boys 1900 / Girls 1979'
]
const girls1st = [
  'Alexis', 'Girls 1943 / Boys 1960', 'Amari', 'Girls 1996 / Boys 1997', 'Azariah', 'Girls 2009 / Boys 2013', 'Briar', 'Girls 2015 / Boys 2017', 'Eden', 'Girls 1986 / Boys 2008', 'Jamie', 'Girls 1900 / Boys 1904', 'Reign', 'Girls 2016 / Boys 2017', 'Shiloh', 'Girls 2007 / Boys 2015', 'Sutton', 'Girls 2013 / Boys 2015', 'Tatum', 'Girls 1994 / Boys 2010'
]
const the1880sM = [
  'Aaron', 'Abraham', 'Adam', 'Adolph', 'Albert', 'Alex', 'Alexander', 'Alfred', 'Allen', 'Alonzo', 'Alva', 'Alvin', 'Amos', 'Andrew', 'Anthony', 'Anton', 'Archie', 'Arthur', 'August', 'Ben', 'Benjamin', 'Bernard', 'Bert', 'Calvin', 'Carl', 'Cecil', 'Charles', 'Charley', 'Charlie', 'Chester', 'Christopher', 'Clarence', 'Claud', 'Claude', 'Clayton', 'Cleveland', 'Clifford', 'Clinton', 'Clyde', 'Cornelius', 'Curtis', 'Dan', 'Daniel', 'Dave', 'David', 'Dennis', 'Earl', 'Earnest', 'Ed', 'Eddie', 'Edgar', 'Edmund', 'Edward', 'Edwin', 'Elbert', 'Eli', 'Elijah', 'Ellis', 'Elmer', 'Emil', 'Emmett', 'Ernest', 'Eugene', 'Everett', 'Felix', 'Floyd', 'Francis', 'Frank', 'Franklin', 'Fred', 'Frederick', 'Fredrick', 'George', 'Gilbert', 'Glenn', 'Grover', 'Gus', 'Guy', 'Harley', 'Harold', 'Harrison', 'Harry', 'Harvey', 'Henry', 'Herbert', 'Herman', 'Hiram', 'Homer', 'Horace', 'Howard', 'Hubert', 'Hugh', 'Ira', 'Irvin', 'Irving', 'Isaac', 'Jack', 'Jacob', 'Jake', 'James', 'Jasper', 'Jay', 'Jeff', 'Jerry', 'Jess', 'Jesse', 'Jessie', 'Jim', 'Joe', 'John', 'Jose', 'Joseph', 'Julius', 'Karl', 'Kenneth', 'King', 'Lawrence', 'Lee', 'Leo', 'Leon', 'Leonard', 'Leroy', 'Leslie', 'Lester', 'Levi', 'Lewis', 'Lloyd', 'Lonnie', 'Louis', 'Luther', 'Mack', 'Manuel', 'Marion', 'Mark', 'Marshall', 'Martin', 'Marvin', 'Matthew', 'Maurice', 'Max', 'Melvin', 'Michael', 'Mike', 'Milton', 'Morris', 'Moses', 'Nathan', 'Nelson', 'Nicholas', 'Noah', 'Norman', 'Oliver', 'Ollie', 'Oscar', 'Otis', 'Otto', 'Owen', 'Patrick', 'Paul', 'Percy', 'Perry', 'Peter', 'Philip', 'Phillip', 'Ralph', 'Ray', 'Raymond', 'Reuben', 'Richard', 'Robert', 'Roscoe', 'Ross', 'Roy', 'Rudolph', 'Rufus', 'Russell', 'Sam', 'Samuel', 'Sidney', 'Silas', 'Simon', 'Stanley', 'Stephen', 'Sylvester', 'Theodore', 'Thomas', 'Timothy', 'Tom', 'Vernon', 'Victor', 'Virgil', 'Wallace', 'Walter', 'Warren', 'Wesley', 'Wilbur', 'Wiley', 'Will', 'Willard', 'William', 'Willie', 'Willis', 'Wilson', 'Young', 'Zack'
]
const the1890sM = [
  'Arnold', 'Bennie', 'Bill', 'Clifton', 'Dewey', 'Donald', 'Gerald', 'Glen', 'Gordon', 'Johnnie', 'Orville', 'Roland', 'Sherman', 'Steve', 'Vincent'
]
const the1900sM = [
  'Alton', 'Douglas', 'Jerome', 'Jimmie', 'Johnie', 'Juan', 'Nathaniel', 'Pete', 'Roger', 'Roosevelt', 'Ted', 'Tony', 'Wayne'
]
const the1910sM = [
  'Allan', 'Angelo', 'Antonio', 'Austin', 'Billy', 'Bob', 'Boyd', 'Bruce', 'Burton', 'Byron', 'Carroll', 'Dale', 'Dean', 'Delbert', 'Dominic', 'Dominick', 'Don', 'Eldon', 'Elwood', 'Ervin', 'Erwin', 'Forrest', 'Freddie', 'Gene', 'Gerard', 'Grady', 'Grant', 'Ivan', 'Jesus', 'Johnny', 'Julian', 'Junior', 'Keith', 'Kermit', 'Laurence', 'Leland', 'Loren', 'Louie', 'Lowell', 'Loyd', 'Lyle', 'Malcolm', 'Merle', 'Millard', 'Murray', 'Myron', 'Nick', 'Norbert', 'Preston', 'Quentin', 'Rex', 'Ronald', 'Salvatore', 'Seymour', 'Tommie', 'Troy', 'Wendell', 'Wilbert', 'Wilfred', 'Woodrow'
]
const the1920sM = [
  'Alfredo', 'Ambrose', 'Armando', 'Arturo', 'Bertram', 'Bobbie', 'Bobby', 'Buddy', 'Carol', 'Danny', 'Darrel', 'Darwin', 'Eric', 'Foster', 'Frankie', 'Freeman', 'Gabriel', 'Gary', 'Gregory', 'Guadalupe', 'Harding', 'Hoover', 'Jackie', 'Lamar', 'Lenard', 'Lorenzo', 'Marlin', 'Mary', 'Miguel', 'Milo', 'Noel', 'Normand', 'Pasquale', 'Pat', 'Rafael', 'Randall', 'Raul', 'Ricardo', 'Roberto', 'Rodolfo', 'Rolland', 'Royce', 'Rudy', 'Salvador', 'Sammy', 'Sheldon', 'Shirley', 'Spencer', 'Terry', 'Van', 'Vance'
]
const the1930sM = [
  'Barry', 'Bradley', 'Brian', 'Chris', 'Craig', 'Darryl', 'Daryl', 'Denis', 'Denny', 'Donnie', 'Dudley', 'Dwayne', 'Errol', 'Freddy', 'Frederic', 'Gail', 'Gale', 'Garry', 'Hal', 'Jan', 'Jeffrey', 'Jerald', 'Jon', 'Jonathan', 'Ken', 'Kenny', 'Kent', 'Kevin', 'Lance', 'Lanny', 'Melvyn', 'Micheal', 'Mickey', 'Monte', 'Nolan', 'Pablo', 'Phil', 'Rene', 'Rodger', 'Ronnie', 'Scott', 'Shelby', 'Terrance', 'Terrence', 'Tim', 'Tyrone'
]
const the1940sM = [
  'Al', 'Alberto', 'Alphonso', 'Andre', 'Brad', 'Bradford', 'Brent', 'Bryan', 'Cary', 'Christian', 'Chuck', 'Colin', 'Dana', 'Dannie', 'Dewayne', 'Donn', 'Donny', 'Doug', 'Drew', 'Elliott', 'Enrique', 'Ernesto', 'Ernie', 'Fernando', 'Galen', 'Geoffrey', 'Gerry', 'Greg', 'Gregg', 'Hector', 'Jason', 'Jeffery', 'Kelly', 'Kerry', 'Kim', 'Kirk', 'Kurt', 'Linwood', 'Lon', 'Marc', 'Monty', 'Randal', 'Randell', 'Randy', 'Reed', 'Rick', 'Rickey', 'Rickie', 'Ricky', 'Robin', 'Rocky', 'Roderick', 'Ron', 'Ronny', 'Stephan', 'Terence', 'Terrell', 'Todd', 'Tracy', 'Vaughn'
]
const the1950sM = [
  'Angel', 'Bart', 'Blaine', 'Blake', 'Bret', 'Brett', 'Bryant', 'Carey', 'Casey', 'Cedric', 'Clay', 'Clint', 'Cory', 'Curt', 'Damon', 'Dane', 'Darnell', 'Darren', 'Derek', 'Derrick', 'Dexter', 'Dino', 'Dirk', 'Eduardo', 'Erik', 'Evan', 'Jaime', 'Jamie', 'Javier', 'Jeffry', 'Jerrold', 'Jody', 'Joey', 'Jorge', 'Joshua', 'Justin', 'Kelvin', 'Kendall', 'Kirby', 'Kris', 'Kyle', 'Lane', 'Luke', 'Marty', 'Matt', 'Rob', 'Robbie', 'Rod', 'Rory', 'Russ', 'Rusty', 'Ryan', 'Scot', 'Sean', 'Shane', 'Shawn', 'Stan', 'Stevie', 'Timmy', 'Vince'
]
const the1960sM = [
  'Antoine', 'Bernie', 'Brady', 'Brandon', 'Brendan', 'Bryce', 'Cesar', 'Chadwick', 'Cody', 'Damian', 'Daren', 'Darin', 'Darius', 'Darrick', 'Darrin', 'Darron', 'Demetrius', 'Derick', 'Devin', 'Dion', 'Donovan', 'Dustin', 'Dylan', 'Erich', 'Erick', 'Erin', 'Ethan', 'Garrett', 'Gavin', 'Guillermo', 'Gustavo', 'Hans', 'Heath', 'Ismael', 'Jamal', 'Jared', 'Jarrod', 'Jayson', 'Jeremy', 'Johnathan', 'Jonathon', 'Jordan', 'Kip', 'Kristopher', 'Kurtis', 'Lyndon', 'Marcos', 'Omar', 'Robb', 'Rogelio', 'Scottie', 'Shon', 'Stacey', 'Stefan', 'Thad', 'Tracey', 'Trevor', 'Ty', 'Tyler', 'Xavier'
]
const the1970sM = [
  'Ahmad', 'Alexis', 'Ali', 'Antwan', 'Aron', 'Ashley', 'Beau', 'Branden', 'Brock', 'Caleb', 'Chance', 'Colby', 'Collin', 'Damien', 'Damion', 'Dante', 'Desmond', 'Devon', 'Donte', 'Efrain', 'Emmanuel', 'Esteban', 'Fabian', 'Graham', 'Hugo', 'Isaiah', 'Jamar', 'Jamel', 'Jamey', 'Jarod', 'Jarrett', 'Jarvis', 'Jeremiah', 'Jermaine', 'Jerrod', 'Johnathon', 'Jonah', 'Josh', 'Kareem', 'Kendrick', 'Landon', 'Leonardo', 'Logan', 'Lucas', 'Marquis', 'Mason', 'Micah', 'Moises', 'Nathanael', 'Nickolas', 'Nicolas', 'Quincy', 'Rashad', 'Tanner', 'Taylor', 'Tobias', 'Trenton', 'Tyson', 'Waylon', 'Zachariah'
]
const the1980sM = [
  'Akeem', 'Alec', 'Alvaro', 'Arsenio', 'Ashton', 'Braden', 'Brennan', 'Brenton', 'Brice', 'Brooks', 'Carson', 'Chase', 'Chaz', 'Christop', 'Cole', 'Colton', 'Connor', 'Conor', 'Corbin', 'Coty', 'Cristian', 'Dakota', 'Dalton', 'Davon', 'Deangelo', 'Demarcus', 'Demario', 'Devan', 'Diego', 'Dillon', 'Dominique', 'Dusty', 'Giovanni', 'Hunter', 'Isiah', 'Jaron', 'Jordon', 'Kaleb', 'Kameron', 'Keegan', 'Keenan', 'Kody', 'Korey', 'Lukas', 'Maxwell', 'Myles', 'Nikolas', 'Parker', 'Riley', 'Sebastian', 'Skyler', 'Trey', 'Tristan', 'Tucker', 'Tyrell', 'Weston', 'Wyatt', 'Zackary', 'Zackery', 'Zane'
]
const the1990sM = [
  'Ahmed', 'Aidan', 'Aiden', 'Bailey', 'Braeden', 'Braxton', 'Brayden', 'Brody', 'Cade', 'Caden', 'Camden', 'Camron', 'Conner', 'Cooper', 'Davion', 'Dawson', 'Denzel', 'Deven', 'Devonte', 'Ezra', 'Gage', 'Grayson', 'Holden', 'Jaden', 'Jalen', 'Jaquan', 'Jayden', 'Jaylen', 'Jaylin', 'Jaylon', 'Justice', 'Kade', 'Kaden', 'Kai', 'Khalil', 'Kobe', 'Kolby', 'Kyler', 'Malachi', 'Mateo', 'Maximilian', 'Mohamed', 'Payton', 'Peyton', 'Reece', 'Reese', 'Sage', 'Sawyer', 'Tate', 'Tevin', 'Trace', 'Trevon', 'Tristen', 'Tristin', 'Triston', 'Tyrese', 'Ulises', 'Uriel', 'Walker', 'Zion'
]
const the2000sM = [
  'Aaden', 'Abram', 'Aden', 'Adriel', 'Alijah', 'Ari', 'Axel', 'Ayden', 'Beckett', 'Bentley', 'Braiden', 'Braylen', 'Braylon', 'Brodie', 'Brycen', 'Caiden', 'Cash', 'Cohen', 'Colt', 'Elian', 'Emiliano', 'Finn', 'Gael', 'Jacoby', 'Jamari', 'Jamarion', 'Jax', 'Jaxson', 'Jaydon', 'Jett', 'Johan', 'Judah', 'Jude', 'Kaiden', 'Kale', 'Karson', 'Kason', 'Kayden', 'Keagan', 'Kevon', 'Kingston', 'Landyn', 'London', 'Luca', 'Maddox', 'Matteo', 'Maximiliano', 'Maximus', 'Mekhi', 'Nehemiah', 'Paxton', 'Phoenix', 'Porter', 'Rowan', 'Ryder', 'Ryker', 'Xander', 'Yahir', 'Zander', 'Zayden'
]
const the2010sM = [
  'Apollo', 'Ares', 'Arlo', 'Atlas', 'Axton', 'Benson', 'Bently', 'Bodhi', 'Boone', 'Bowen', 'Brantley', 'Briggs', 'Cairo', 'Callan', 'Callen', 'Cassius', 'Cayson', 'Channing', 'Colson', 'Crew', 'Dariel', 'Duke', 'Edison', 'Emmitt', 'Finnley', 'Ford', 'Hank', 'Hendrix', 'Huxley', 'Iker', 'Jayceon', 'Kairo', 'Kaison', 'Kannon', 'Kase', 'Kashton', 'Kaysen', 'Kingsley', 'Kohen', 'Kyree', 'Kyrie', 'Legend', 'Lennox', 'Lucca', 'Major', 'Milan', 'Nixon', 'Oakley', 'Princeton', 'Raylan', 'Rowen', 'Stetson', 'Tatum', 'Theo', 'Thiago', 'Titan', 'Vihaan', 'Wilder', 'Zayn', 'Zeke'
]
const the1880sF = [
  'Abbie', 'Ada', 'Addie', 'Adeline', 'Agnes', 'Alberta', 'Alice', 'Allie', 'Alma', 'Alta', 'Amanda', 'Amelia', 'Amy', 'Ann', 'Anna', 'Anne', 'Annie', 'Augusta', 'Barbara', 'Beatrice', 'Belle', 'Bernice', 'Bertha', 'Bertie', 'Bess', 'Bessie', 'Bettie', 'Betty', 'Beulah', 'Birdie', 'Blanche', 'Callie', 'Caroline', 'Carrie', 'Catherine', 'Celia', 'Charlotte', 'Christina', 'Christine', 'Clara', 'Cora', 'Cornelia', 'Daisy', 'Delia', 'Della', 'Dollie', 'Dora', 'Dorothy', 'Edith', 'Edna', 'Effie', 'Eleanor', 'Eliza', 'Elizabeth', 'Ella', 'Ellen', 'Elsie', 'Emily', 'Emma', 'Essie', 'Estella', 'Estelle', 'Esther', 'Ethel', 'Etta', 'Eula', 'Eunice', 'Eva', 'Evelyn', 'Fannie', 'Flora', 'Florence', 'Flossie', 'Frances', 'Genevieve', 'Georgia', 'Gertrude', 'Gladys', 'Goldie', 'Grace', 'Hannah', 'Harriet', 'Harriett', 'Hattie', 'Hazel', 'Helen', 'Henrietta', 'Hilda', 'Ida', 'Ina', 'Inez', 'Irene', 'Isabel', 'Isabelle', 'Iva', 'Jane', 'Janie', 'Jean', 'Jennie', 'Jessie', 'Josephine', 'Josie', 'Julia', 'Kate', 'Katherine', 'Kathryn', 'Katie', 'Laura', 'Leila', 'Lela', 'Lelia', 'Lena', 'Leona', 'Lillian', 'Lillie', 'Lizzie', 'Lois', 'Lola', 'Loretta', 'Lottie', 'Lou', 'Louisa', 'Louise', 'Lucille', 'Lucy', 'Luella', 'Lula', 'Lulu', 'Lydia', 'Mabel', 'Mable', 'Mae', 'Maggie', 'Mamie', 'Margaret', 'Marguerite', 'Maria', 'Marie', 'Marion', 'Martha', 'Mary', 'Mathilda', 'Matilda', 'Mattie', 'Maud', 'Maude', 'May', 'Mayme', 'Mildred', 'Millie', 'Minnie', 'Mollie', 'Myra', 'Myrtle', 'Nancy', 'Nannie', 'Nell', 'Nellie', 'Nettie', 'Nina', 'Nora', 'Ola', 'Olga', 'Olive', 'Ollie', 'Ora', 'Pauline', 'Pearl', 'Rachel', 'Rebecca', 'Rena', 'Rhoda', 'Rosa', 'Rose', 'Rosie', 'Roxie', 'Ruby', 'Ruth', 'Sadie', 'Sallie', 'Sally', 'Sara', 'Sarah', 'Sophia', 'Sophie', 'Stella', 'Sue', 'Susan', 'Susie', 'Sylvia', 'Theresa', 'Tillie', 'Vera', 'Verna', 'Victoria', 'Viola', 'Virginia', 'Willie', 'Winifred', 'Winnie', 'Yetta', 'Zella', 'Zelma', 'Zoe', 'Zora', 'Zula'
]
const the1890sF = [
  'Doris', 'Elva', 'Erma', 'Fern', 'Freda', 'Frieda', 'Irma', 'Kathleen', 'Lucile', 'Madeline', 'Marian', 'Marjorie', 'Naomi', 'Norma', 'Selma', 'Thelma', 'Velma', 'Violet', 'Virgie', 'Vivian'
]
const the1900sF = [
  'Adele', 'Angela', 'Angelina', 'Angeline', 'Anita', 'Antoinette', 'Audrey', 'Bonnie', 'Carolyn', 'Cecelia', 'Cecilia', 'Claire', 'Cleo', 'Constance', 'Dolores', 'Dorothea', 'Eileen', 'Elma', 'Elnora', 'Eloise', 'Fay', 'Faye', 'Geneva', 'Geraldine', 'Gussie', 'Ila', 'Janet', 'Jeanette', 'Jeanne', 'Jeannette', 'Jewel', 'Jewell', 'Johnnie', 'Juanita', 'June', 'Leola', 'Lila', 'Lorene', 'Lorraine', 'Marcella', 'Margie', 'Maxine', 'Miriam', 'Muriel', 'Opal', 'Patricia', 'Phyllis', 'Reba', 'Regina', 'Rita', 'Roberta', 'Shirley', 'Teresa', 'Veronica', 'Wanda', 'Wilma'
]
const the1910sF = [
  'Adelaide', 'Annabelle', 'Annette', 'Arlene', 'Arline', 'Bernadine', 'Bette', 'Beverly', 'Billie', 'Carmela', 'Carmella', 'Carmen', 'Carol', 'Cecile', 'Clarice', 'Connie', 'Delores', 'Donna', 'Edythe', 'Elaine', 'Eleanore', 'Elinor', 'Elvira', 'Ernestine', 'Eugenia', 'Francis', 'Frankie', 'Gloria', 'Gracie', 'Gwendolyn', 'Hallie', 'Helena', 'Helene', 'Hester', 'Imogene', 'Iris', 'Janice', 'Joan', 'Joyce', 'Laverne', 'Leah', 'Lee', 'Lenora', 'Lessie', 'Letha', 'Loraine', 'Lorena', 'Madge', 'Melba', 'Nadine', 'Natalie', 'Odessa', 'Olivia', 'Peggy', 'Priscilla', 'Rosalie', 'Rosemary', 'Rosetta', 'Sybil', 'Yvonne'
]
const the1920sF = [
  'Alicia', 'Bennie', 'Betsy', 'Bettye', 'Beverley', 'Carole', 'Charles', 'Colleen', 'Dawn', 'Delphine', 'Diane', 'Dona', 'Doreen', 'Earlene', 'Earnestine', 'Elena', 'Elouise', 'Esperanza', 'Fanny', 'Freddie', 'Gilda', 'Greta', 'Jackie', 'Jacquelyn', 'James', 'Janis', 'Jaunita', 'Jeannine', 'Jerry', 'Joann', 'Joanna', 'Joanne', 'Joe', 'Judy', 'Julie', 'Lavonne', 'Leatrice', 'Leta', 'Madeleine', 'Margarita', 'Marianne', 'Maryann', 'Maureen', 'Myrna', 'Nelda', 'Pat', 'Patsy', 'Patty', 'Renee', 'Robert', 'Rosemarie', 'Roslyn', 'Ruthie', 'Sandra', 'Sharon', 'Sheila', 'Suzanne', 'Therese', 'William', 'Winona'
]
const the1930sF = [
  'Adrienne', 'Andrea', 'Arleen', 'Becky', 'Bonita', 'Brenda', 'Camille', 'Carla', 'Carlene', 'Cheryl', 'Claudette', 'Dale', 'Darla', 'Deanna', 'Deborah', 'Denise', 'Dianne', 'Faith', 'Francine', 'Gail', 'Gale', 'Gay', 'Gayle', 'Glenda', 'Gretchen', 'Jan', 'Janette', 'Jill', 'Karen', 'Kathy', 'Kaye', 'Laurel', 'Lynda', 'Lynn', 'Lynne', 'Margo', 'Marilynn', 'Marlene', 'Marlys', 'Marsha', 'Marva', 'Marylou', 'Pamela', 'Penelope', 'Penny', 'Rochelle', 'Rosalyn', 'Sandy', 'Saundra', 'Sharron', 'Shelby', 'Sherry', 'Sondra', 'Sonia', 'Sonja', 'Susanne', 'Terry', 'Toni', 'Valerie', 'Vicki'
]
const the1940sF = [
  'April', 'Belinda', 'Candace', 'Candice', 'Cassandra', 'Cathleen', 'Cathy', 'Celeste', 'Cheri', 'Cherie', 'Christy', 'Cindy', 'Dana', 'Debbie', 'Debra', 'Diann', 'Dianna', 'Ginger', 'Holly', 'Jamie', 'Jeanie', 'Jeannie', 'Jennifer', 'Jeri', 'Jessica', 'Karin', 'Karla', 'Kathie', 'Kerry', 'Kimberly', 'Kristine', 'Lana', 'Lauren', 'Laurie', 'Leslie', 'Lisa', 'Lynette', 'Marla', 'Melanie', 'Melinda', 'Melissa', 'Melody', 'Michele', 'Michelle', 'Pam', 'Paulette', 'Rhonda', 'Robin', 'Shari', 'Shelia', 'Shelley', 'Sherri', 'Sherrie', 'Sheryl', 'Tamara', 'Terri', 'Tina', 'Trudy', 'Vickie', 'Vicky'
]
const the1950sF = [
  'Alisa', 'Allison', 'Cindi', 'Colette', 'Debora', 'Dena', 'Desiree', 'Erin', 'Felicia', 'Gina', 'Jerri', 'Jodi', 'Jodie', 'Joni', 'Kari', 'Kathi', 'Katrina', 'Kelley', 'Kelli', 'Kellie', 'Kelly', 'Kimberley', 'Kris', 'Kristen', 'Kristi', 'Kristy', 'Lauri', 'Leann', 'Leanne', 'Leigh', 'Lesa', 'Leticia', 'Liz', 'Lori', 'Lorie', 'Lorri', 'Lorrie', 'Luann', 'Marta', 'Mindy', 'Patrice', 'Rene', 'Robbin', 'Sabrina', 'Shawn', 'Shelly', 'Stacey', 'Stacy', 'Tamera', 'Tami', 'Tammi', 'Tammie', 'Tammy', 'Tamra', 'Tara', 'Tonya', 'Tracey', 'Tracy', 'Trina', 'Vanessa'
]
const the1960sF = [
  'Adriana', 'Aimee', 'Alexandra', 'Alisha', 'Alyssa', 'Angelica', 'Angelique', 'Anissa', 'Ashley', 'Audra', 'Bethany', 'Brandi', 'Bridgett', 'Brooke', 'Carey', 'Cari', 'Chandra', 'Christa', 'Courtney', 'Cristina', 'Dionne', 'Erika', 'Gena', 'Jami', 'Kara', 'Kirsten', 'Lara', 'Lashawn', 'Latonya', 'Maribel', 'Marisol', 'Marlo', 'Marnie', 'Melisa', 'Mia', 'Misty', 'Natasha', 'Nichole', 'Noelle', 'Paige', 'Rachael', 'Samantha', 'Serena', 'Shana', 'Shanna', 'Shawna', 'Shellie', 'Shonda', 'Staci', 'Stefanie', 'Tabatha', 'Tabitha', 'Tania', 'Tasha', 'Tiffany', 'Tisha', 'Tonja', 'Trisha', 'Ursula', 'Wendi'
]
const the1970sF = [
  'Adrianne', 'Aisha', 'Alyson', 'Athena', 'Aubrey', 'Autumn', 'Bianca', 'Brandie', 'Briana', 'Brianna', 'Brianne', 'Brittany', 'Carissa', 'Carly', 'Carolina', 'Casey', 'Chasity', 'Chastity', 'Chrissy', 'Chrystal', 'Devon', 'Ebony', 'Elisha', 'Esmeralda', 'Haley', 'Hillary', 'Jaclyn', 'Jaime', 'Jasmine', 'Jenna', 'Jillian', 'Karina', 'Kasey', 'Katy', 'Kylie', 'Lacey', 'Lakeisha', 'Lakesha', 'Lakisha', 'Lashonda', 'Latasha', 'Latisha', 'Latosha', 'Latoya', 'Lindsay', 'Lindsey', 'Mandi', 'Mayra', 'Meagan', 'Misti', 'Morgan', 'Nadia', 'Ryan', 'Summer', 'Tameka', 'Tamika', 'Tanisha', 'Terra', 'Tessa', 'Yesenia'
]
const the1980sF = [
  'Adrianna', 'Alexa', 'Alexandria', 'Alysha', 'Ariana', 'Ariel', 'Arielle', 'Ashleigh', 'Ashlie', 'Ashton', 'Asia', 'Bailey', 'Breanna', 'Britney', 'Brittani', 'Brittni', 'Caitlyn', 'Chelsey', 'Chelsie', 'Chloe', 'Ciara', 'Cierra', 'Daniela', 'Elyse', 'Gabriella', 'Hailey', 'Hanna', 'Jaleesa', 'Jalisa', 'Jazmin', 'Jazmine', 'Juliana', 'Kaitlin', 'Kaitlyn', 'Karissa', 'Kassandra', 'Katelyn', 'Katelynn', 'Katlyn', 'Kaylee', 'Kayleigh', 'Kelsie', 'Kendall', 'Kiara', 'Krystle', 'Kylee', 'Mackenzie', 'Madison', 'Mallory', 'Sade', 'Savannah', 'Shaina', 'Shayna', 'Sheena', 'Sierra', 'Stephani', 'Tatiana', 'Taylor', 'Tiara', 'Tierra'
]
const the1990sF = [
  'Aaliyah', 'Addison', 'Alayna', 'Alexus', 'Aliyah', 'Alondra', 'Amaya', 'Ashlynn', 'Avery', 'Ayanna', 'Bailee', 'Baylee', 'Brooklyn', 'Camryn', 'Cheyanne', 'Dakota', 'Delaney', 'Destinee', 'Ellie', 'Felicity', 'Gisselle', 'Haleigh', 'Halle', 'Harley', 'Haylee', 'Heaven', 'Hunter', 'Imani', 'Jaden', 'Jayla', 'Kamryn', 'Kassidy', 'Kennedy', 'Lesly', 'Lexi', 'Macy', 'Madalyn', 'Makenna', 'Makenzie', 'Mckayla', 'Mckenna', 'Mya', 'Nia', 'Payton', 'Peyton', 'Reagan', 'Riley', 'Rylee', 'Shania', 'Shaniqua', 'Sidney', 'Skylar', 'Skyler', 'Tamia', 'Tatum', 'Tatyana', 'Tayler', 'Tianna', 'Trinity', 'Yasmine'
]
const the2000sF = [
  'Adalyn', 'Addisyn', 'Addyson', 'Adelyn', 'Ainsley', 'Amiyah', 'Analia', 'Anaya', 'Annabella', 'Arabella', 'Aubrie', 'Audrina', 'Braelyn', 'Brisa', 'Brylee', 'Cadence', 'Caylee', 'Dayana', 'Elle', 'Emerson', 'Emery', 'Hadley', 'Harper', 'Isla', 'Jaliyah', 'Janiya', 'Janiyah', 'Jaylynn', 'Jimena', 'Kadence', 'Kayden', 'Kaydence', 'Keira', 'Khloe', 'Kimora', 'Kinley', 'Kinsley', 'Laila', 'Lilah', 'Lilliana', 'Litzy', 'Londyn', 'Luna', 'Lyla', 'Maliyah', 'Melany', 'Mila', 'Miley', 'Nevaeh', 'Norah', 'Nyla', 'Paisley', 'Reese', 'Rihanna', 'Rowan', 'Saniyah', 'Ximena', 'Yareli', 'Yaretzi', 'Zariah'
]
const the2010sF = [
  'Adaline', 'Addilyn', 'Aitana', 'Alayah', 'Antonella', 'Ariah', 'Ariyah', 'Arya', 'Aviana', 'Avianna', 'Azalea', 'Blakely', 'Braelynn', 'Briella', 'Carter', 'Cataleya', 'Charleigh', 'Charli', 'Collins', 'Daleyza', 'Elliott', 'Emberly', 'Emersyn', 'Emmalyn', 'Emory', 'Everleigh', 'Everly', 'Freya', 'Gracelynn', 'Jemma', 'Journee', 'Julieta', 'Juniper', 'Kailani', 'Kaylani', 'Kehlani', 'Kensley', 'Kora', 'Lennon', 'Lilith', 'Magnolia', 'Maisie', 'Malaysia', 'Margot', 'Milani', 'Nova', 'Oakley', 'Oaklyn', 'Paislee', 'Reign', 'Remi', 'Remington', 'Royalty', 'Sawyer', 'Saylor', 'Tenley', 'Thea', 'Wren', 'Wynter', 'Zuri'
]
const modernM = [
  'Aayan', 'Alistair', 'Amias', 'Atreus', 'Ayan', 'Aziel', 'Azrael', 'Banks', 'Bear', 'Bellamy', 'Callahan', 'Calum', 'Colter', 'Dhruv', 'Eithan', 'Eliel', 'Emir', 'Ermias', 'Jakari', 'Kiaan', 'Kylian', 'Kyro', 'Legacy', 'Mac', 'Malakhi', 'Mylo', 'Niklaus', 'Remi', 'Rome', 'Salem', 'Sekani', 'Seven', 'Simeon', 'Tru', 'Wes', 'Yahya', 'Yisroel', 'Zyon'
]
const modernF = [
  'Aila', 'Ainhoa', 'Alaiya', 'Amoura', 'Beatrix', 'Blessing', 'Denver', 'Elodie', 'Freyja', 'Halo', 'Indie', 'Kaisley', 'Malayah', 'Navy', 'Oakleigh', 'Persephone', 'Salem', 'Sevyn', 'Theodora', 'Zendaya'
]

// Need both listHolder and Div for flexbox to work
const components = [
  // By Syllable
  {
    listDiv: document.querySelector('#syl1DivM'),
    listHolder: document.querySelector('#syl1ListM'),
    listArray: syl1M,
    type: 'reg'
  },
  {
    listDiv: document.querySelector('#syl1DivF'),
    listHolder: document.querySelector('#syl1ListF'),
    listArray: syl1F,
    type: 'reg'
  },
  {
    listDiv: document.querySelector('#syl2DivM'),
    listHolder: document.querySelector('#syl2ListM'),
    listArray: syl2M,
    type: 'reg'
  },
  {
    listDiv: document.querySelector('#syl2DivF'),
    listHolder: document.querySelector('#syl2ListF'),
    listArray: syl2F,
    type: 'reg'
  },
  {
    listDiv: document.querySelector('#syl3DivM'),
    listHolder: document.querySelector('#syl3ListM'),
    listArray: syl3M,
    type: 'reg'
  },
  {
    listDiv: document.querySelector('#syl3DivF'),
    listHolder: document.querySelector('#syl3ListF'),
    listArray: syl3F,
    type: 'reg'
  },
  {
    listDiv: document.querySelector('#syl4DivM'),
    listHolder: document.querySelector('#syl4ListM'),
    listArray: syl4M,
    type: 'reg'
  },
  {
    listDiv: document.querySelector('#syl4DivF'),
    listHolder: document.querySelector('#syl4ListF'),
    listArray: syl4F,
    type: 'reg'
  },
  {
    listDiv: document.querySelector('#syl5DivM'),
    listHolder: document.querySelector('#syl5ListM'),
    listArray: syl5M,
    type: 'reg'
  },
  {
    listDiv: document.querySelector('#syl5DivF'),
    listHolder: document.querySelector('#syl5ListF'),
    listArray: syl5F,
    type: 'reg'
  },
  // notTop
  {
    listDiv: document.querySelector('#notTopDivM'),
    listHolder: document.querySelector('#notTopListM'),
    listArray: notTopArrayM,
    type: 'h5thenH4'
  },
  {
    listDiv: document.querySelector('#notTopDivF'),
    listHolder: document.querySelector('#notTopListF'),
    listArray: notTopArrayF,
    type: 'h5thenH4'
  },

  // Unusual
  {
    listDiv: document.querySelector('#unuDivM'),
    listHolder: document.querySelector('#unuListM'),
    listArray: unuArrayM,
    type: 'reg'
  },
  {
    listDiv: document.querySelector('#unuDivF'),
    listHolder: document.querySelector('#unuListF'),
    listArray: unuArrayF,
    type: 'reg'
  },
  // Spanish
  {
    listDiv: document.querySelector('#spaDivM'),
    listHolder: document.querySelector('#spaListM'),
    listArray: spaArrayM,
    type: 'h4thenH5'
  },
  {
    listDiv: document.querySelector('#spaDivF'),
    listHolder: document.querySelector('#spaListF'),
    listArray: spaArrayF,
    type: 'h4thenH5'
  },
  // Unisex
  {
    listDiv: document.querySelector('#unisexEarly20thDiv'),
    listHolder: document.querySelector('#unisexEarly20thList'),
    listArray: unisexEarly20th,
    type: 'reg'
  },
  {
    listDiv: document.querySelector('#unisexLate20thDiv'),
    listHolder: document.querySelector('#unisexLate20thList'),
    listArray: unisexLate20th,
    type: 'reg'
  },
  {
    listDiv: document.querySelector('#unisex21stDiv'),
    listHolder: document.querySelector('#unisex21stList'),
    listArray: unisex21st,
    type: 'reg'
  },
  {
    listDiv: document.querySelector('#boys1stDiv'),
    listHolder: document.querySelector('#boys1stList'),
    listArray: boys1st,
    type: 'h4thenH5'
  },
  {
    listDiv: document.querySelector('#girls1stDiv'),
    listHolder: document.querySelector('#girls1stList'),
    listArray: girls1st,
    type: 'h4thenH5'
  },
  {
    listDiv: document.querySelector('#the1890sDivM'),
    listHolder: document.querySelector('#the1890sListM'),
    listArray: the1890sM,
    type: 'reg'
  },
  {
    listDiv: document.querySelector('#the1890sDivF'),
    listHolder: document.querySelector('#the1890sListF'),
    listArray: the1890sF,
    type: 'reg'
  },
  // Early 20th Century
  {
    listDiv: document.querySelector('#the1900sDivM'),
    listHolder: document.querySelector('#the1900sListM'),
    listArray: the1900sM,
    type: 'reg'
  },
  {
    listDiv: document.querySelector('#the1900sDivF'),
    listHolder: document.querySelector('#the1900sListF'),
    listArray: the1900sF,
    type: 'reg'
  },
  {
    listDiv: document.querySelector('#the1910sDivM'),
    listHolder: document.querySelector('#the1910sListM'),
    listArray: the1910sM,
    type: 'reg'
  },
  {
    listDiv: document.querySelector('#the1910sDivF'),
    listHolder: document.querySelector('#the1910sListF'),
    listArray: the1910sF,
    type: 'reg'
  },
  {
    listDiv: document.querySelector('#the1920sDivM'),
    listHolder: document.querySelector('#the1920sListM'),
    listArray: the1920sM,
    type: 'reg'
  },
  {
    listDiv: document.querySelector('#the1920sDivF'),
    listHolder: document.querySelector('#the1920sListF'),
    listArray: the1920sF,
    type: 'reg'
  },
  {
    listDiv: document.querySelector('#the1930sDivM'),
    listHolder: document.querySelector('#the1930sListM'),
    listArray: the1930sM,
    type: 'reg'
  },
  {
    listDiv: document.querySelector('#the1930sDivF'),
    listHolder: document.querySelector('#the1930sListF'),
    listArray: the1930sF,
    type: 'reg'
  },
  {
    listDiv: document.querySelector('#the1940sDivM'),
    listHolder: document.querySelector('#the1940sListM'),
    listArray: the1940sM,
    type: 'reg'
  },
  {
    listDiv: document.querySelector('#the1940sDivF'),
    listHolder: document.querySelector('#the1940sListF'),
    listArray: the1940sF,
    type: 'reg'
  },
  // Late 20th Century
  {
    listDiv: document.querySelector('#the1950sDivM'),
    listHolder: document.querySelector('#the1950sListM'),
    listArray: the1950sM,
    type: 'reg'
  },
  {
    listDiv: document.querySelector('#the1950sDivF'),
    listHolder: document.querySelector('#the1950sListF'),
    listArray: the1950sF,
    type: 'reg'
  },
  {
    listDiv: document.querySelector('#the1960sDivM'),
    listHolder: document.querySelector('#the1960sListM'),
    listArray: the1960sM,
    type: 'reg'
  },
  {
    listDiv: document.querySelector('#the1960sDivF'),
    listHolder: document.querySelector('#the1960sListF'),
    listArray: the1960sF,
    type: 'reg'
  },
  {
    listDiv: document.querySelector('#the1970sDivM'),
    listHolder: document.querySelector('#the1970sListM'),
    listArray: the1970sM,
    type: 'reg'
  },
  {
    listDiv: document.querySelector('#the1970sDivF'),
    listHolder: document.querySelector('#the1970sListF'),
    listArray: the1970sF,
    type: 'reg'
  },
  {
    listDiv: document.querySelector('#the1980sDivM'),
    listHolder: document.querySelector('#the1980sListM'),
    listArray: the1980sM,
    type: 'reg'
  },
  {
    listDiv: document.querySelector('#the1980sDivF'),
    listHolder: document.querySelector('#the1980sListF'),
    listArray: the1980sF,
    type: 'reg'
  },
  {
    listDiv: document.querySelector('#the1990sDivM'),
    listHolder: document.querySelector('#the1990sListM'),
    listArray: the1990sM,
    type: 'reg'
  },
  {
    listDiv: document.querySelector('#the1990sDivF'),
    listHolder: document.querySelector('#the1990sListF'),
    listArray: the1990sF,
    type: 'reg'
  },
  // 21st Century
  {
    listDiv: document.querySelector('#the2000sDivM'),
    listHolder: document.querySelector('#the2000sListM'),
    listArray: the2000sM,
    type: 'reg'
  },
  {
    listDiv: document.querySelector('#the2000sDivF'),
    listHolder: document.querySelector('#the2000sListF'),
    listArray: the2000sF,
    type: 'reg'
  },
  {
    listDiv: document.querySelector('#the2010sDivM'),
    listHolder: document.querySelector('#the2010sListM'),
    listArray: the2010sM,
    type: 'reg'
  },
  {
    listDiv: document.querySelector('#the2010sDivF'),
    listHolder: document.querySelector('#the2010sListF'),
    listArray: the2010sF,
    type: 'reg'
  },
  // Modern
  {
    listDiv: document.querySelector('#modDivM'),
    listHolder: document.querySelector('#modListM'),
    listArray: modernM,
    type: 'reg'
  },
  {
    listDiv: document.querySelector('#modDivF'),
    listHolder: document.querySelector('#modListF'),
    listArray: modernF,
    type: 'reg'
  }
]

const clearAndSlideDown = (listDiv, listHolder) => {
  while (listDiv.firstChild) {
    listDiv.removeChild(listDiv.firstChild)
  }
  $(listHolder).slideDown()
}
const showNames = (listDiv, listArray) => {
  for (let i = 0; i < listArray.length; i++) {
    const name = listArray[i]
    const h4forName = document.createElement('h4')
    const listName = document.createTextNode(name)
    h4forName.appendChild(listName)
    listDiv.appendChild(h4forName)
    h4forName.classList.add('h4forNameShort')
  }
}

// menu .......................................................................
const menuHolder = document.querySelector('.menuHolder')
const menuIcon = document.querySelector('.menuIcon')
menuIcon.addEventListener('click', (event) => {
  if (menuHolder.style.display !== 'block') {
    $(menuHolder).slideDown()
  } else {
    $(menuHolder).slideUp()
  }
})

const menuItems = document.querySelectorAll('.menuItem')
const menuScrollToMarkers = document.querySelectorAll('.menuScrollToMarker')
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', (e) => {
    for (let i = 0; i < menuItems.length; i++) {
      const menuItem = menuItems[i]
      const menuScrollToMarker = menuScrollToMarkers[i]
      if (menuItem === e.target) {
        $(menuHolder).slideUp()
        menuScrollToMarker.scrollIntoView({
          behavior: 'smooth', block: 'start'
        })
      }
    }
  })
}

// name generator...............................................................
/*
Ran the name generator beforehand to determine which names included on this site
were generated, and only put those names in the actualNames array, so they could
be excluded without slowing down the site.
*/
const actualNames = [
  'Adalee', 'Adaline', 'Adalyn', 'Adeline', 'Adelyn', 'Adiel', 'Adonis', 'Alana', 'Alani', 'Alanna', 'Alaric', 'Alaya', 'Alayna', 'Albert', 'Alden', 'Alena', 'Aliah', 'Aliana', 'Alijah', 'Alina', 'Alisa', 'Alisha', 'Alison', 'Alissa', 'Aliya', 'Aliza', 'Allan', 'Allison', 'Alondra', 'Alonso', 'Alonzo', 'Alora', 'Alvaro', 'Alvina', 'Amanda', 'Amani', 'Amara', 'Amari', 'Amaris', 'Amaya', 'Amiah', 'Amias', 'Amina', 'Amira', 'Amiya', 'Amora', 'Amoura', 'Anabel', 'Anahi', 'Anaya', 'Anika', 'Anita', 'Aniya', 'Ariah', 'Arian', 'Ariana', 'Ariel', 'Ariya', 'Arleen', 'Arlene', 'Arline', 'Armando', 'Armani', 'Avalyn', 'Averie', 'Avery', 'Aviana', 'Azalea', 'Aziel', 'Barney', 'Belen', 'Bella', 'Bellamy', 'Benita', 'Bessie', 'Bonita', 'Brinley', 'Caden', 'Callan', 'Cameron', 'Camila', 'Camilo', 'Caren', 'Carina', 'Carla', 'Carlene', 'Carlos', 'Carlotta', 'Caroline', 'Carolyn', 'Casandra', 'Casen', 'Cassie', 'Celina', 'Charity', 'Charla', 'Charleen', 'Charlene', 'Charlize', 'Colby', 'Coleen', 'Coleson', 'Colette', 'Coraline', 'Corina', 'Dalary', 'Daleyza', 'Dallas', 'Danette', 'Daniel', 'Daniela', 'Danika', 'Danita', 'Daren', 'Darian', 'Dariana', 'Dariel', 'Darien', 'Dario', 'Darion', 'Darius', 'Darla', 'Darleen', 'Darlene', 'Darnell', 'Davian', 'Davina', 'Davion', 'Daylen', 'Dayna', 'Dessie', 'Dilan', 'Dillan', 'Dillon', 'Doreen', 'Dorian', 'Elbert', 'Elena', 'Elian', 'Eliana', 'Elias', 'Elijah', 'Elina', 'Elisa', 'Eliseo', 'Elisha', 'Elissa', 'Eliza', 'Elliana', 'Elliot', 'Ellis', 'Ellison', 'Elora', 'Emani', 'Emerie', 'Emerson', 'Emery', 'Emilee', 'Emory', 'Erika', 'Ernesto', 'Evalyn', 'Evelyn', 'Evette', 'Finley', 'Franco', 'Galen', 'Garland', 'Goldie', 'Haven', 'Jakari', 'Jakayla', 'Jalen', 'Jalisa', 'Jamari', 'Jameson', 'Jamila', 'Jamison', 'Janette', 'Janiah', 'Janiya', 'Jayla', 'Jaylen', 'Jayson', 'Jenifer', 'Jesiah', 'Jessica', 'Jessie', 'Jillian', 'Jordan', 'Jordin', 'Jordon', 'Joselyn', 'Josette', 'Josiah', 'Joslyn', 'Jovan', 'Jovani', 'Julian', 'Juliana', 'Julien', 'Julio', 'Julius', 'Junior', 'Juniper', 'Kaden', 'Kalani', 'Kamari', 'Kameron', 'Kamila', 'Kamora', 'Karen', 'Karina', 'Karla', 'Karsyn', 'Kasandra', 'Kasen', 'Kassie', 'Katelyn', 'Katina', 'Kayla', 'Kaylani', 'Kaylen', 'Kayson', 'Kendall', 'Kenisha', 'Kenley', 'Khalani', 'Killian', 'Kimora', 'Kirsten', 'Kirstin', 'Kolby', 'Latasha', 'Latisha', 'Layla', 'Lessie', 'Lilian', 'Liliana', 'Lillian', 'Lilliana', 'Lilly', 'Lorelai', 'Loren', 'Lorena', 'Lorenzo', 'Loretta', 'Lorna', 'Madalyn', 'Madeline', 'Madelyn', 'Madison', 'Madisyn', 'Malachi', 'Malakai', 'Malani', 'Malaya', 'Maliah', 'Manuel', 'Maranda', 'Maren', 'Mariah', 'Marian', 'Mariana', 'Mariela', 'Marina', 'Mario', 'Marion', 'Marisa', 'Maritza', 'Marla', 'Marlen', 'Marlena', 'Marlene', 'Marlon', 'Marsha', 'Marshall', 'Maximo', 'Maximus', 'Mayra', 'Mayson', 'Melani', 'Melina', 'Melisa', 'Melody', 'Mikayla', 'Milan', 'Milana', 'Milani', 'Milena', 'Miller', 'Monika', 'Monique', 'Morgan', 'Moriah', 'Noreen', 'Orion', 'Randall', 'Raven', 'Rayna', 'Renata', 'Renita', 'Rolando', 'Rolland', 'Roman', 'Romeo', 'Romina', 'Rosalee', 'Rosalyn', 'Rosanna', 'Roselyn', 'Rosetta', 'Roslyn', 'Sally', 'Samara', 'Samira', 'Samuel', 'Saniya', 'Sarahi', 'Sariah', 'Sarina', 'Savana', 'Savanna', 'Savion', 'Shayla', 'Shayna', 'Soraya', 'Soren', 'Talan', 'Tanika', 'Tanisha', 'Taniya', 'Teresa', 'Tessa', 'Tessie', 'Tinley', 'Valentin', 'Valerie', 'Valery', 'Vanesa', 'Wilbert', 'Wilda', 'Willa', 'William', 'Willis', 'Zayla', 'Zelda', 'Zella', // 349
  // Added
  'Adison', 'Adisyn', 'Aleson', 'Anisa', 'Aubriel', 'Aubriela', 'Belamy', 'Calan', 'Calen', 'Cally', 'Carisa', 'Casidy', 'Casius', 'Casondra', 'Elison', 'Evanna', 'Hally', 'Hasan', 'Jakeline', 'Jakoline', 'Jakson', 'Janesa', 'Kally', 'Karisa', 'Kasidy', 'Kendel', 'Kilian', 'Madaline', 'Madeson', 'Malisa', 'Malory', 'Mikenzie', 'Randel', 'Rosela', 'Wilard', 'Willy'
]
const rejects = [
  'Alias', 'Alien', 'Allas', 'Amino', 'Amity', 'Arena', 'Aroma', 'Ashen', 'Audio', 'Avian', 'Baren', 'Belly', 'Caller', 'Cameo', 'Candor', 'Casino', 'Casio', 'Celery', 'Colen', 'Colic', 'Colony', 'Corney', 'Corona', 'Dally', 'Evenly', 'Every', 'Evian', 'Finery', 'Galery', 'Galore', 'Golden', 'Golly', 'Jeneric', 'Jolly', 'Killer', 'Koran', 'Korona', 'Lesen', 'Lesion', 'Linen', 'Manic', 'Manley', 'Minaret', 'Minion', 'Organ', 'Pardin', 'Pardon', 'Pariah', 'Parody', 'Rayon', 'Rosary', 'Salamy', 'Salary', 'Sandall', 'Sandel', 'Sanity', 'Sinima', 'Sonic', 'Taleban', 'Talker', 'Taller', 'Tallon', 'Tally', 'Tanery', 'Tonic', 'Vally', 'Vandall', 'Vanila'
]
const unwanted = [
  'Aist', 'Aurst', 'brd', 'brg', 'brl', 'brn', 'brs', 'eses', 'Hala', 'ilic',
  'ises', 'Jili', 'sesto', 'shash', 'shish', 'sias', 'sis', 'sius'
]
const firstParts = [
  'Ab', 'Ad', 'Ain', 'Ais', 'Al', 'Alis', 'Aliv', 'Alv', 'Am', 'Amar', 'An', 'Ar', 'Arm', 'Ash', 'Aubr', 'Aud', 'Aur', 'Av', 'Aver', 'Ay', 'Az', 'Bar', 'Bay', 'Bel', 'Ben', 'Bes', 'Bev', 'Bon', 'Brin', 'Bris', 'Cad', 'Cal', 'Cam', 'Can', 'Car', 'Cas', 'Cel', 'Char', 'Chay', 'Chel', 'Col', 'Cor', 'Dal', 'Dan', 'Dar', 'Dav', 'Day', 'Des', 'Dil', 'Dom', 'Don', 'Dor', 'El', 'Elan', 'Elis', 'Elor', 'Em', 'Emal', 'Er', 'Ev', 'Fay', 'Fin', 'Fran', 'Gal', 'Gar', 'Gav', 'Gis', 'Glen', 'Gol', 'Hal', 'Has', 'Hav', 'Jak', 'Jal', 'Jam', 'Jan', 'Jay', 'Jen', 'Jes', 'Jil', 'Jol', 'Jon', 'Jor', 'Jos', 'Jov', 'Jul', 'Jun', 'Kad', 'Kal', 'Kam', 'Kar', 'Kas', 'Kat', 'Kav', 'Kay', 'Ken', 'Khal', 'Kil', 'Kim', 'Kir', 'Kol', 'Kor', 'Lan', 'Lar', 'Las', 'Lat', 'Lay', 'Les', 'Lil', 'Lin', 'Lon', 'Lor', 'Mad', 'Mal', 'Man', 'Mar', 'Mas', 'Mav', 'Max', 'May', 'Mel', 'Mik', 'Mil', 'Min', 'Mon', 'Mor', 'Nay', 'Nev', 'Nor', 'Or', 'Par', 'Pay', 'Ran', 'Rav', 'Ray', 'Ren', 'Rol', 'Rom', 'Ron', 'Ros', 'Rus', 'Sal', 'Sam', 'San', 'Sar', 'Sav', 'Shay', 'Sher', 'Sin', 'Son', 'Sor', 'Tal', 'Tan', 'Tay', 'Ter', 'Tes', 'Tin', 'Ton', 'Trav', 'Trev', 'Trey', 'Val', 'Van', 'Vay', 'Way', 'Wil', 'Zan', 'Zay', 'Zel'
]
const afterL = [
  'ber', 'bert', 'bo', 'by', 'da', 'den', 'die', 'ker', 'kin', 'la', 'lamy',
  'lan', 'land', 'lary', 'las', 'ler', 'liam', 'lian', 'liana', 'liot', 'lis',
  'lison', 'livan', 'lo', 'lon', 'ly'
]
const afterN = [
  'by', 'co', 'dall', 'del', 'do', 'dor', 'dro', 'dyn', 'kin', 'ley', 'lyn', 'ton'
]
const afterR = [
  'dan', 'dee', 'del', 'din', 'do', 'don', 'gan', 'la', 'lan', 'land', 'leen',
  'lem', 'len', 'lena', 'lene', 'line', 'lize', 'lon', 'los', 'lotta', 'low',
  'na', 'nell', 'nesto', 'ney', 'nic', 'sha', 'shall', 'sten', 'stin', 'syn'
]
const afterS = [
  'lyn', 'sa', 'sica', 'sie', 'tal', 'tan', 'tavo', 'tina', 'tine', 'to', 'ton'
]
const afterY = [
  'la', 'lani', 'len', 'na', 'on', 'ona', 'oni', 'ra', 'son'
]
const afterCons = [
  'abel', 'achi', 'acy', 'ador', 'ago', 'ahi', 'akai', 'akin', 'alea', 'alee', 'aline', 'alise', 'alyn', 'amin', 'amy', 'an', 'ana', 'anca', 'anda', 'ando', 'andra', 'aney', 'ani', 'anna', 'ara', 'ard', 'ardo', 'aret', 'ari', 'aric', 'aris', 'aro', 'ary', 'asa', 'asha', 'ata', 'atore', 'avo', 'aya', 'ayla', 'ayna', 'eban', 'eca', 'echai', 'edi', 'edo', 'edy', 'een', 'egan', 'ego', 'ela', 'elai', 'eli', 'eline', 'elo', 'elyn', 'emy', 'en', 'ena', 'enly', 'entin', 'enzie', 'enzo', 'eo', 'eon', 'era', 'eric', 'erie', 'erine', 'erite', 'ermo', 'eron', 'erson', 'erta', 'erto', 'erty', 'ery', 'esa', 'esca', 'eson', 'ester', 'esto', 'eton', 'etta', 'ette', 'eus', 'eyza', 'iah', 'ian', 'iana', 'ias', 'ic', 'icho', 'icus', 'idy', 'iel', 'iela', 'ien', 'ifer', 'ifred', 'ijah', 'ika', 'ila', 'ilda', 'ilea', 'ilee', 'ilo', 'ima', 'imo', 'imus', 'ina', 'inley', 'ino', 'iny', 'io', 'ion', 'ior', 'iper', 'ique', 'ira', 'isa', 'isco', 'isha', 'ison', 'isyn', 'ita', 'ity', 'itza', 'ius', 'ivan', 'iver', 'iya', 'iza', 'oa', 'oby', 'ody', 'oel', 'ofer', 'ola', 'olai', 'olas', 'olet', 'oline', 'olo', 'olyn', 'oma', 'omi', 'omon', 'ona', 'ondra', 'onis', 'onso', 'ony', 'onzo', 'ora', 'ore', 'oria', 'ory', 'ota', 'oura', 'ovan', 'ua', 'uda', 'uel', 'uro', 'usta'
]
const letters = [
  'd', 'm', 'n', 'r', 'v'
]
let genNames = []
let newNames = []
let reject

const check1stAndLast = (first, firstEnds, last, name) => {
  reject = false
  for (let i = 0; i < letters.length; i++) {
    if (firstEnds === letters[i] && last.includes(letters[i])) {
      reject = true
    }
  }
  if (first.includes('l') && last.includes('l') && name.includes('ll') === false) {
    reject = true
  }
}

const checkName = (name) => {
  if (actualNames.includes(name) || rejects.includes(name) ||
      name.length < 5 || name.length > 8) {
    reject = true
  }
  for (let i = 0; i < unwanted.length; i++) {
    if (name.includes(unwanted[i])) {
      reject = true
    }
  }
}

const finishName = (first, firstEnds, lastArray) => {
  const last = lastArray[Math.floor(Math.random() * lastArray.length)]
  const name = first + last
  check1stAndLast(first, firstEnds, last, name)
  checkName(name)
  if (genNames.includes(name) === false &&
      newNames.includes(name) === false &&
      reject === false) {
    genNames.push(name)
    newNames.push(name)
  }
}

const startName = () => {
  const first = firstParts[Math.floor(Math.random() * firstParts.length)]
  const firstEnds = first.charAt(first.length - 1)
  const randomOf7 = Math.floor(Math.random() * 7) + 1
  const randomOf6 = Math.floor(Math.random() * 6) + 1
  const randomOf15 = Math.floor(Math.random() * 15) + 1
  const randomOf16 = Math.floor(Math.random() * 16) + 1

  if (firstEnds === 'y') {
    finishName(first, firstEnds, afterY)
  } else if (firstEnds === 'l' && randomOf7 === 1) {
    finishName(first, firstEnds, afterL)
  } else if (firstEnds === 'r' && randomOf6 === 1) {
    finishName(first, firstEnds, afterR)
  } else if (firstEnds === 'n' && randomOf15 === 1) {
    finishName(first, firstEnds, afterN)
  } else if (firstEnds === 's' && randomOf16 === 1) {
    finishName(first, firstEnds, afterS)
  } else {
    finishName(first, firstEnds, afterCons)
  }
}

const genDiv = document.querySelector('#genDiv')
const makeNames = () => {
  while (genDiv.firstChild) {
    genDiv.removeChild(genDiv.firstChild)
  }
  while (newNames.length < 60) {
    startName()
  }
  showNames(genDiv, newNames)
  newNames = []
  // makes 21905 names, 60 x 365 = 21900
  if (genNames.length >= 21900) {
    genNames = []
  }
}

const genList = document.querySelector('#genList')
const genButton = document.querySelector('.genButton')
genButton.addEventListener('click', () => {
  if (genList.style.display === 'block') {
    $(genList).slideUp()
  } else {
    makeNames()
    $(genList).slideDown()
  }
})
const genNew1 = document.querySelector('#genNew1')
genNew1.addEventListener('click', (e) => {
  makeNames()
})
const genNew2 = document.querySelector('#genNew2')
const genNewScrollTo = document.querySelector('.genNewScrollTo')
genNew2.addEventListener('click', (e) => {
  makeNames()
  genNewScrollTo.scrollIntoView({
    behavior: 'smooth', block: 'start'
  })
})

const genClosers = document.querySelectorAll('.genCloser')
for (let i = 0; i < genClosers.length; i++) {
  genClosers[i].addEventListener('click', (e) => {
    $(genList).slideUp()
    genNewScrollTo.scrollIntoView({
      behavior: 'smooth', block: 'start'
    })
  })
}

// regular buttons ............................................................
const showNamesWith2Lines = (type, listDiv, listArray) => {
  for (let i = 0; i < listArray.length; i++) {
    const divFor2 = document.createElement('div')
    const h4Element = document.createElement('h4')
    const h5Element = document.createElement('h5')
    const item1 = listArray[i]
    const item2 = listArray[i + 1]
    const item1Text = document.createTextNode(item1)
    const item2Text = document.createTextNode(item2)
    // Spanish, boys1st, girls1st
    if (type === 'h4thenH5') {
      h4Element.appendChild(item1Text)
      h5Element.appendChild(item2Text)
      divFor2.appendChild(h4Element)
      divFor2.appendChild(h5Element)
      h4Element.classList.add('h4forNameWide')
      h5Element.classList.add('h5withNameWide')
      divFor2.classList.add('divWithH4andH5wide')
    } else {
    // notTop
      h5Element.appendChild(item1Text)
      h4Element.appendChild(item2Text)
      divFor2.appendChild(h5Element)
      divFor2.appendChild(h4Element)
      divFor2.classList.add('divWithH4andH5short')
    }
    listDiv.appendChild(divFor2)
    i += 1
  }
}

// order of objects in components array must match the order of buttons on page
const buttons = document.querySelectorAll('.button')
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', (e) => {
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i]
      if (button === e.target) {
        const listMakeup = components[i]
        const listHolder = listMakeup.listHolder
        const listDiv = listMakeup.listDiv
        const listArray = listMakeup.listArray
        const type = listMakeup.type
        if (listHolder.style.display === 'block') {
          $(listHolder).slideUp()
        } else {
          clearAndSlideDown(listDiv, listHolder)
          if (type === 'reg') {
            showNames(listDiv, listArray)
          } else {
            showNamesWith2Lines(type, listDiv, listArray)
          }
        }
      }
    }
  })
}

// by letter....................................................................
const letterArrayBoy = []
const letterListBoy = document.querySelector('#letterListBoy')
const letterDivBoy = document.querySelector('#letterDivBoy')

const letterArrayGirl = []
const letterListGirl = document.querySelector('#letterListGirl')
const letterDivGirl = document.querySelector('#letterDivGirl')

const letterArrayM = []
const letterListM = document.querySelector('#letterListM')
const letterDivM = document.querySelector('#letterDivM')

const letterArrayF = []
const letterListF = document.querySelector('#letterListF')
const letterDivF = document.querySelector('#letterDivF')

let boyShowing = 'nothing'
let girlShowing = 'nothing'
let maleShowing = 'nothing'
let femShowing = 'nothing'

const showLetterList = (group, letter1, clickedLetter, listHolder) => {
  let letterDiv
  let nameArray
  let letterArray

  if (group === 'boy') {
    letterDiv = letterDivBoy
    nameArray = maleLetterNames
    letterArray = letterArrayBoy
    boyShowing = clickedLetter
  } else if (group === 'girl') {
    letterDiv = letterDivGirl
    nameArray = femLetterNames
    letterArray = letterArrayGirl
    girlShowing = clickedLetter
  } else if (group === 'male') {
    letterDiv = letterDivM
    nameArray = the1880sM
    letterArray = letterArrayM
    maleShowing = clickedLetter
  } else if (group === 'fem') {
    letterDiv = letterDivF
    nameArray = the1880sF
    letterArray = letterArrayF
    femShowing = clickedLetter
  }
  clearAndSlideDown(letterDiv, listHolder)

  for (let i = 0; i < nameArray.length; i++) {
    const name = nameArray[i]
    if ((name.charAt(0) === letter1) && (letterArray.length < 60)) {
      letterArray.push(name)
    }
  }
  letterArray.sort()
  showNames(letterDiv, letterArray)
  letterArray.length = 0
}

const lettersBoy = document.querySelectorAll('.letterBoy')
for (let i = 0; i < lettersBoy.length; i++) {
  lettersBoy[i].addEventListener('click', (e) => {
    const clickedLetter = e.target.id
    const group = 'boy'
    const listHolder = letterListBoy
    const letter1 = clickedLetter.charAt(clickedLetter.length - 1)
    if (listHolder.style.display === 'block') {
      if (boyShowing !== clickedLetter) {
        showLetterList(group, letter1, clickedLetter, listHolder)
      } else {
        $(listHolder).slideUp()
        boyShowing = 'nothing'
      }
    } else {
      showLetterList(group, letter1, clickedLetter, listHolder)
    }
  })
}
const lettersGirl = document.querySelectorAll('.letterGirl')
for (let i = 0; i < lettersGirl.length; i++) {
  lettersGirl[i].addEventListener('click', (e) => {
    const clickedLetter = e.target.id
    const group = 'girl'
    const listHolder = letterListGirl
    const letter1 = clickedLetter.charAt(clickedLetter.length - 1)
    if (listHolder.style.display === 'block') {
      if (girlShowing !== clickedLetter) {
        showLetterList(group, letter1, clickedLetter, listHolder)
      } else {
        $(listHolder).slideUp()
        girlShowing = 'nothing'
      }
    } else {
      showLetterList(group, letter1, clickedLetter, listHolder)
    }
  })
}
const lettersMale = document.querySelectorAll('.letterMale')
for (let i = 0; i < lettersMale.length; i++) {
  lettersMale[i].addEventListener('click', (e) => {
    const clickedLetter = e.target.id
    const group = 'male'
    const listHolder = letterListM
    const letter1 = clickedLetter.charAt(clickedLetter.length - 1)
    if (listHolder.style.display === 'block') {
      if (maleShowing !== clickedLetter) {
        showLetterList(group, letter1, clickedLetter, listHolder)
      } else {
        $(listHolder).slideUp()
        maleShowing = 'nothing'
      }
    } else {
      showLetterList(group, letter1, clickedLetter, listHolder)
    }
  })
}
const lettersFem = document.querySelectorAll('.letterFem')
for (let i = 0; i < lettersFem.length; i++) {
  lettersFem[i].addEventListener('click', (e) => {
    const clickedLetter = e.target.id
    const group = 'fem'
    const listHolder = letterListF
    const letter1 = clickedLetter.charAt(clickedLetter.length - 1)
    if (listHolder.style.display === 'block') {
      if (femShowing !== clickedLetter) {
        showLetterList(group, letter1, clickedLetter, listHolder)
      } else {
        $(listHolder).slideUp()
        femShowing = 'nothing'
      }
    } else {
      showLetterList(group, letter1, clickedLetter, listHolder)
    }
  })
}

// refresh: close all lists and scroll to top....................................
const refresh = document.querySelector('.refresh')
const intro = document.querySelector('.intro')
const listHolders = document.querySelectorAll('.listHolder')
refresh.addEventListener('click', (e) => {
  $(listHolders).slideUp()
  intro.scrollIntoView({
    behavior: 'smooth', block: 'center'
  })
})

// close list using close at the end............................................
const closers = document.querySelectorAll('.closer')
for (let i = 0; i < closers.length; i++) {
  closers[i].addEventListener('click', (e) => {
    const closer = closers[i]
    if (closer === e.target) {
      const listHolder = closer.parentNode
      $(listHolder).slideUp()
      const scrollTo = listHolder.previousElementSibling // buttonHolder
      scrollTo.scrollIntoView({
        behavior: 'smooth', block: 'center'
      })
    }
  })
}

// return to top ...............................................................
const returnTo = document.querySelector('.returnTo')
returnTo.addEventListener('click', (e) => {
  intro.scrollIntoView({
    behavior: 'smooth', block: 'center'
  })
})

// email camouflage ............................................................
const emailDiv = document.querySelector('.emailDiv')
const username = 'sarahbwebdev'
const hostname = 'gmail.com'
const urltext = username + '@' + hostname
const email = document.createTextNode(urltext)
emailDiv.appendChild(email)
emailDiv.classList.add('info')
