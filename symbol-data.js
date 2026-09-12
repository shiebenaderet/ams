/* Symbol Exploration — content for symbol-exploration.html
   Four explorations, four symbols each, matching the printed handout
   (Symbol-Exploration.docx) symbol-for-symbol and prompt-for-prompt.

   Each symbol carries two texts, and they are ADDITIVE, not alternatives:
     simple  — for readers well below grade level. Same concepts and the same
               terms as the primer, but short sentences and every causal link
               spelled out. It is NOT the primer with words removed.
     primer  — the standard version. A complete explanation on its own.
     deeper  — shown when "Advanced" is on. Adds to the primer; never repeats
               or replaces it.
   The primer is never the deeper text with words taken out. Shortening
   history prose usually deletes the connective carrying the causation
   (Davison & Kantor 1982), which makes it harder, not easier. So each
   primer is written whole.

   Images live in symbol-images/. The first image of a symbol is the main
   one; any after it are labelled details (A, B, C) shown in the strip. */

var UNIT_QUESTION = "What does it mean to be “American”?";

var SYMBOL_EXPLORATIONS = [
  {
    id: "e1",
    number: 1,
    title: "Traditional American Symbols",
    partner: 1,
    prompt: "Which of these classic American symbols do you feel like you have seen the most often?",
    starter: "The symbols that we have seen the most often are…",
    symbols: [
      {
        slug: "statue-of-liberty",
        title: "The Statue of Liberty",
        simple: "France gave this statue to the United States. It was opened in 1886. It stands on an island in New York Harbor. Ships full of people sailed into that harbor. So this statue was the first thing millions of immigrants saw. Most people call it the Statue of Liberty. That is not its real name. Its real name is “Liberty Enlightening the World.”",
        primer: "France gave this statue to the United States, and it was dedicated in 1886 on an island in New York Harbor. Because it stands where ships came in, it was the first thing millions of immigrants saw when they arrived. Its real name is not the Statue of Liberty at all. It is “Liberty Enlightening the World.”",
        deeper: "Édouard de Laboulaye, a French opponent of slavery, first proposed the monument, and the sculptor Frédéric-Auguste Bartholdi designed it. The National Park Service writes that the statue stood for “American independence and the end of all types of servitude and oppression” — and then adds that in 1886 that meaning “was not yet a reality for African Americans.” The symbol arrived before the thing it promised did.",
        images: [
          { src: "statue-main.webp", alt: "The Statue of Liberty seen from the water, green with age, torch raised." },
          { src: "statue-crown.webp", label: "A", title: "The crown",
            alt: "Close-up of the statue's head and the seven spikes of her crown against a blue sky.",
            caption: "Seven rays spike out of her crown. They are usually explained as reaching the seven seas and seven continents — a welcome pointed everywhere at once." },
          { src: "statue-chains.webp", label: "B", title: "The broken chains",
            alt: "A broken shackle and length of chain lying at the statue's feet, mostly hidden under her robe.",
            caption: "A broken shackle and chain lie at her feet, the last link snapped open. Almost nobody sees them. From the ground, her robe hides them completely." }
        ]
      },
      {
        slug: "great-seal",
        title: "The Seal of the United States",
        simple: "The Great Seal is a stamp. The government presses it onto official papers. The stamp proves a paper is real and not a fake. Look at the eagle in the middle. It holds two things at the same time. In one claw it holds an olive branch. In the other claw it holds thirteen arrows. Now count the arrows, the stripes and the stars. You get thirteen every time. Thirteen stands for the first thirteen states.",
        primer: "The Great Seal is stamped on official government papers to prove they are genuine. In the middle, an eagle holds two things at once: an olive branch in one claw and thirteen arrows in the other. The thirteen arrows, thirteen stripes and thirteen stars all stand for the first thirteen states.",
        deeper: "Congress approved this design in 1782, after six years and three separate committees failed to agree on one. The eagle's head turns toward the olive branch and away from the arrows, which was read as a country that would rather have peace but keeps war within reach. You can check the design yourself — it is printed on the back of a one-dollar bill.",
        images: [
          { src: "seal-main.webp", alt: "The Great Seal of the United States: a bald eagle with a striped shield, holding an olive branch and arrows." },
          { src: "seal-motto.webp", label: "A", title: "E Pluribus Unum",
            alt: "Close-up of the ribbon in the eagle's beak reading E PLURIBUS UNUM.",
            caption: "“E Pluribus Unum” is Latin for “Out of many, one.” It described thirteen separate states agreeing to count as a single country." },
          { src: "seal-olive.webp", label: "B", title: "The olive branch",
            alt: "Close-up of the eagle's right claw gripping an olive branch with leaves and berries.",
            caption: "The olive branch means peace. The eagle's head is turned toward this side." },
          { src: "seal-arrows.webp", label: "C", title: "The arrows",
            alt: "Close-up of the eagle's left claw gripping a bundle of thirteen arrows.",
            caption: "Thirteen arrows mean war. The eagle holds them tightly, but looks away from them." }
        ]
      },
      {
        slug: "american-flag",
        title: "The American Flag",
        simple: "Count the stars on the flag. There are 50. There is one star for each state. Now count the stripes. There are 13. There is one stripe for each of the first 13 colonies. The stars have been redrawn 27 times. Here is why. Every time a new state joined, somebody had to fit another star into the blue. The last change happened in 1960. That is the year Hawaii became a state.",
        primer: "The flag carries 50 stars for the 50 states and 13 stripes for the 13 original colonies. The star pattern has been redrawn 27 times, because each new state meant another star had to fit into the blue. The most recent change came in 1960, after Hawaii became a state.",
        deeper: "People often say red means courage, white means purity and blue means justice. But Congress gave the flag's colours no meaning at all when it adopted the design in 1777. Those meanings belong to the Great Seal instead. In 1782, Charles Thomson explained the seal's colours: “White signifies purity and innocence, Red, hardiness & valour, and Blue… vigilance, perseverance & justice.” The meanings were invented for one symbol and later borrowed onto another.",
        images: [
          { src: "flag-main.webp", alt: "The flag of the United States: fifty white stars on blue, with thirteen red and white stripes." },
          { src: "flag-stars.webp", label: "A", title: "Fifty stars",
            alt: "Close-up of the blue canton showing all fifty white stars in alternating rows.",
            caption: "Fifty stars, in alternating rows of six and five. Count them — this arrangement is only as old as 1960." },
          { src: "flag-stripes.webp", label: "B", title: "Thirteen stripes",
            alt: "Close-up of the red and white stripes of the flag.",
            caption: "Thirteen stripes, seven red and six white — one for each colony that broke from Britain." }
        ]
      },
      {
        slug: "liberty-bell",
        title: "The Liberty Bell",
        simple: "The Liberty Bell hangs in Philadelphia. Words are cast into the metal. They say: “Proclaim Liberty Throughout All the Land Unto All the Inhabitants thereof.” Those words come from the Bible. They describe a year called the Jubilee. In a Jubilee year, people got their property back. Enslaved people were set free. So the words on this bell are about freeing people.",
        primer: "The bell hangs in Philadelphia, and the words cast into it read “Proclaim Liberty Throughout All the Land Unto All the Inhabitants thereof.” That line comes from the Bible. It describes the Jubilee, a year when property was returned to its owners and enslaved people were set free.",
        deeper: "The famous crack has nothing to do with 1776. The National Park Service states there is “no evidence that the bell rang on July 4 or 8, 1776,” and that the split appeared in the early 1840s, after about ninety years of ringing. The name is not from 1776 either. Abolitionists gave it: an anti-slavery paper, the Anti-Slavery Record, called it the “Liberty Bell” in 1835, because an inscription about freeing people said exactly what they were arguing.",
        images: [
          { src: "bell-main.webp", alt: "The Liberty Bell hanging from its wooden yoke, with Independence Hall visible behind it." },
          { src: "bell-inscription.webp", label: "A", title: "The inscription",
            alt: "Close-up of the raised lettering around the bell reading PROCLAIM LIBERTY and PASS AND STOW.",
            caption: "The words run right around the top of the bell. “Pass and Stow” are the two men who recast it in Philadelphia in 1753." },
          { src: "bell-crack.webp", label: "B", title: "The crack",
            alt: "Close-up of the wide dark crack running down the side of the Liberty Bell.",
            caption: "This wide crack is not the original damage. Workers cut it deliberately in 1846, trying to repair a thin split — and the bell fell silent for good." }
        ]
      }
    ]
  },

  {
    id: "e2",
    number: 2,
    title: "Symbols from Different Communities",
    partner: 2,
    prompt: "Which community’s symbols felt most meaningful to you two? Why?",
    starter: "The symbols that felt the most meaningful to us were… because…",
    symbols: [
      {
        slug: "black-power-fist",
        title: "The Black Power Fist",
        simple: "A raised fist means strength. It also means you will not accept being treated unfairly. In the 1960s, Black Americans were fighting for their civil rights. During those years the raised fist became a symbol of Black pride and Black power in the United States. People still raise a fist today. You see it at marches and at protests. So a gesture from sixty years ago is still alive now.",
        primer: "A raised fist stands for strength, and for refusing to accept unfair treatment. During the Civil Rights era of the 1960s it became a symbol of Black pride and Black power in the United States. People still raise a fist at marches and protests today, which is how a gesture from sixty years ago stays current.",
        deeper: "On 16 October 1968, at the Mexico City Olympics, Tommie Smith won the 200 metres in a world record and John Carlos took bronze. On the podium they raised black-gloved fists and bowed their heads, standing in black socks with no shoes to stand for poverty. Carlos had left his gloves behind, so the two men split one pair — which is why one fist is a right hand and the other a left. Both were expelled from the Games. Smith later wrote that it was never a Black Power salute at all, but “a human rights salute.”",
        images: [
          { src: "fist-main.webp", alt: "A crowd at an outdoor rally with many arms raised, fists clenched." },
          { src: "fist-graphic.webp", label: "A", title: "The drawn symbol",
            alt: "A simple graphic of a clenched raised fist.",
            caption: "Drawn simply, the fist travels anywhere — onto posters, pins, murals and shirts. That portability is part of why it lasted." }
        ]
      },
      {
        slug: "mexican-flag",
        title: "The Mexican Flag",
        simple: "Many Mexican Americans fly this flag. Some wear its colours. Some hang it up at home. They do this to show pride in where their family came from. Flying this flag does not make somebody less American. People often show this flag and the US flag side by side. They do that because both flags describe who they really are.",
        primer: "Many Mexican Americans fly this flag, wear its colours, or hang it at home to show pride in where their family came from. Flying it is not a way of being less American. People often display the Mexican flag and the US flag together, because both of them describe who they actually are.",
        deeper: "The eagle at the centre comes from an Aztec story. The Mexica people were told to build their city where they found an eagle perched on a cactus, and they founded Tenochtitlan on that spot around 1325. Mexico City stands there today. So the middle of this flag carries a history older than either modern country — which is part of why people treat it as heritage rather than politics.",
        images: [
          { src: "mexflag-main.webp", alt: "The flag of Mexico: green, white and red vertical bands with an eagle on a cactus at the centre." },
          { src: "mexflag-eagle.webp", label: "A", title: "The eagle",
            alt: "Close-up of the Mexican coat of arms: a golden eagle standing on a cactus, gripping a snake in its beak and claw.",
            caption: "An eagle on a cactus, holding a snake. This is the exact sign the Mexica were told to look for, and they built their city where they found it." },
          { src: "mexflag-tattoo.webp", label: "B", title: "Both at once",
            alt: "A forearm tattoo blending the stripes of the American flag with the green, white and red of the Mexican flag.",
            caption: "Some people merge the two flags into one design — a tattoo, a jersey, a sticker — so that neither half has to be given up." }
        ]
      },
      {
        slug: "native-american-symbols",
        title: "Native American Symbols",
        simple: "Native nations are many separate peoples. They are not one single group. So their art is not all the same. An artist here in Washington makes designs one way. A nation in the Southwest makes them a different way. Artists use these designs to carry stories. The designs carry family history too. They show who somebody belongs to. So a design is a record. It is not only a decoration.",
        primer: "Native nations are many separate peoples, not one group, and their art is not all alike. A design made by an artist here in Washington looks nothing like a design from a nation in the Southwest. Artists use these forms to carry stories, family history and belonging — so the design is a record, not only a decoration.",
        deeper: "The dreamcatcher began with the Ojibwe people of the Great Lakes, and spread to many other nations during the twentieth century. From there it spread again, into gift shops and airport displays. That second spread is the argument: some people see it as sharing something good, and others see a sacred object turned into merchandise by people with no connection to it.",
        images: [
          { src: "native-art.webp", label: "A", title: "Formline design",
            alt: "A Northwest Coast formline design in red and black, curved ovoid and U shapes forming an animal.",
            caption: "This is Northwest Coast formline — the ovoid and U-shapes used by nations along this coastline, including here in Washington." },
          { src: "native-dreamcatcher.webp", label: "B", title: "The dreamcatcher",
            alt: "A dreamcatcher with a woven web and hanging feathers, photographed outdoors among green leaves.",
            caption: "A woven hoop hung where someone sleeps. Ojibwe in origin, and now sold almost everywhere — which is exactly the debate." },
          { src: "native-totem.webp", label: "C", title: "A totem pole",
            alt: "A tall carved and painted totem pole standing in Pioneer Square in Seattle, with trees and city buildings behind it.",
            caption: "This pole stands in Pioneer Square in Seattle, and it did not start there. It was carved about 1790 in a Tlingit village on Tongass Island, Alaska, to honour a woman called Chief-of-All-Women — one of very few poles raised for a woman. In 1899 a party of Seattle businessmen chopped it down, sawed it in two and shipped it home. Eight of them were charged with theft and the case was dropped. The Tlingit asked for $20,000 and were paid $500. The pole standing there today is a replica, carved by descendants of the families who made the first one." },
          { src: "native-powwow.webp", label: "D", title: "Regalia",
            alt: "A dancer at a powwow seen from behind, wearing bright yellow and red regalia with beaded cuffs.",
            caption: "Worn at a powwow in Montana. The word is regalia, never “costume” — a costume is something you pretend in, and this is not pretending." },
          { src: "native-beadwork.webp", label: "E", title: "Beadwork",
            alt: "A Lakota beaded vest, fully covered in fine white, red and green glass beadwork in geometric patterns.",
            caption: "Lakota beadwork. Every bead on this vest was sewn on separately, and the patterns carry family and nation — this is writing as much as decoration." }
        ]
      },
      {
        slug: "pride-flag",
        title: "The Pride American Flag",
        simple: "This flag mixes two flags together. It takes the stars and stripes. Then it adds the rainbow of the Pride flag. People fly it to say one thing. Being LGBTQ+ and being American go together. They are not two things fighting each other. The Mexican American flags work the same way. Two identities are held in one image.",
        primer: "This flag puts the stars and stripes together with the rainbow of the Pride flag. People fly it to say that being LGBTQ+ and being American are one thing rather than two competing things. It works the same way the combined Mexican and American designs do: two identities held in a single image.",
        deeper: "The rainbow flag was designed in 1978 by Gilbert Baker, an artist and army veteran in San Francisco, and the first versions carried eight stripes rather than today's six. Combining it with the stars and stripes follows an old American habit — taking the national flag and altering it deliberately, in order to make a claim about who the country is supposed to belong to.",
        images: [
          { src: "pride-main.webp", alt: "An American flag with the usual white stars on blue, but with rainbow-coloured stripes instead of red and white." },
          { src: "pride-rainbow.webp", label: "A", title: "The rainbow flag",
            alt: "A small handheld rainbow Pride flag held up outdoors at a parade.",
            caption: "The flag this borrows from. Gilbert Baker designed it in San Francisco in 1978, and the first ones he sewed had eight stripes rather than six." },
          { src: "pride-progress.webp", label: "B", title: "The Progress flag",
            alt: "The Progress Pride flag: rainbow stripes with a chevron of white, pink, pale blue, brown and black at the hoist.",
            caption: "A newer version. The added chevron stands for transgender people and for Black and brown people — a symbol being argued with and rewritten, in public, right now." }
        ]
      }
    ]
  },

  {
    id: "e3",
    number: 3,
    title: "Working America Symbols",
    partner: 1,
    prompt: "What do these work symbols show about American values?",
    starter: "These work symbols show that…",
    symbols: [
      {
        slug: "hard-hat",
        title: "The Hard Hat",
        simple: "A hard hat is safety equipment. Tools get dropped on building sites. The hat stops a falling tool from killing the person underneath. But the hat means more than that. It stands for physical work done properly. Sometimes people call a worker “a hard hat.” They usually mean somebody who is proud of building something real.",
        primer: "A hard hat is safety equipment, worn so that a falling tool does not kill the person underneath. But it also stands for physical work done properly. When people call someone “a hard hat,” they usually mean a worker who takes pride in building something real and visible.",
        deeper: "The hat exists because the work was dangerous: early versions were worn on big 1930s projects like the Hoover Dam and the Golden Gate Bridge. On a modern site the colour often signals the job — who is a visitor, who is an engineer, who is a supervisor. The hat also became political in 1970, when construction workers marched through New York City still wearing them, and the phrase started to mean a set of opinions as well as a job.",
        images: [
          { src: "hardhat-main.webp", alt: "A group of construction workers in hard hats and orange high-visibility vests standing together on a site." },
          { src: "hardhat-colours.webp", label: "A", title: "Look at the colours",
            alt: "Close-up along a row of workers, showing hard hats in white, brown and dark red.",
            caption: "Look along the row: the colours are not decoration. On many sites the colour of the hat tells you who somebody is before they speak — a visitor, a supervisor, an engineer." }
        ]
      },
      {
        slug: "farms-farmers",
        title: "Farms & Farmers",
        simple: "Farms stand for feeding the whole country. Farm work does not follow an office clock. It follows the weather, the land and the seasons. For most of American history, most Americans were farmers. That has changed. Today fewer than two workers out of every hundred farm. Most of those jobs went away. But the symbol stayed strong anyway.",
        primer: "Farms stand for feeding the country, and for work that depends on weather, land and time rather than on an office clock. For most of American history, most Americans farmed. Today fewer than two workers in a hundred do — so the symbol stayed powerful even after most of the jobs went away.",
        deeper: "Who counts as “the farmer” in this picture is worth asking. The image is almost always a family working its own land, and yet a great deal of American food is picked by hired farmworkers, many of them immigrants, on land owned by companies. The symbol and the industry drifted apart from each other, and the symbol is the one that stayed still.",
        images: [
          { src: "farm-main.webp", alt: "A field of ripe golden wheat filling the frame." },
          { src: "farm-farmer.webp", label: "A", title: "The farmer",
            alt: "A smiling older farmer in a plaid shirt and apron holding a tray of freshly harvested greens.",
            caption: "The person, not the acreage. Most of what Americans picture as farming is really a picture of a particular farmer." },
          { src: "farm-pitchfork.webp", label: "B", title: "The pitchfork",
            alt: "An old wooden-handled pitchfork with three metal tines.",
            caption: "Older than the tractor, and still the shorthand for farm work — which is why the painting American Gothic is instantly readable." },
          { src: "farm-tractor.webp", label: "C", title: "The combine",
            alt: "A green combine harvester cutting a wide stripe through a field of ripe wheat.",
            caption: "The pitchfork's replacement. One machine now does the cutting, threshing and cleaning that once took a whole crew a whole season — which is most of the reason the farming jobs went away." },
          { src: "farm-barn.webp", label: "D", title: "The barn and silo",
            alt: "A red barn with a white roof and a tall concrete silo beside it, on a wet farm track.",
            caption: "Red barn, tall silo. Nobody has to be told this is a farm — which is what makes it a symbol rather than just a building." }
        ]
      },
      {
        slug: "factory-gears",
        title: "Factory & Gears",
        simple: "Gears and factories stand for making things. A factory uses an assembly line. An assembly line breaks one big job into many small jobs. Each worker does a single step, over and over. The product moves past them on the line. Henry Ford built his factories this way. It became the American way of making things. Then other countries copied it.",
        primer: "Gears and factories stand for making things. An assembly line breaks one large job into many small ones, so each worker repeats a single step while the product moves past them. Henry Ford's factories made this the American way of building, and other countries copied it.",
        deeper: "This symbol carries pride and loss at the same time. American manufacturing employment peaked in 1979 and then fell steeply, and whole towns that had been built around a single plant were left behind when it closed. So when a politician stands in front of a factory, they are usually pointing at that loss rather than at the machinery itself.",
        images: [
          { src: "factory-main.webp", alt: "A worker in a machine shop bending over a large industrial gear assembly." },
          { src: "factory-teeth.webp", label: "A", title: "The teeth",
            alt: "Extreme close-up of the cut metal teeth around the edge of a large industrial gear.",
            caption: "Close up, a gear is only precisely cut teeth. Every one has to meet the next one exactly, or the whole machine jams — which is the same demand an assembly line makes of people." },
          { src: "factory-modelt.webp", label: "B", title: "What came off the line",
            alt: "A restored red 1913 Ford Model T with black bodywork, a folding roof and red spoked wheels.",
            caption: "A Ford Model T. The assembly line cut the time to build one from about twelve hours to about ninety minutes, and that is what put a car within reach of the people building it." }
        ]
      },
      {
        slug: "lightbulb-rocket",
        title: "Light Bulb & Rocket",
        simple: "The light bulb and the rocket both stand for inventing. They say America is a place where somebody can build a new thing. One of them is small. It sits in a lamp in your house. The other one is huge. It leaves the planet completely. They are very different sizes. But they make the same claim.",
        primer: "The light bulb and the rocket both stand for inventing — the idea that America is a place where a new thing can be built. One is small and sits in a lamp in your house. The other is enormous and leaves the planet. Put together, they claim the same thing at two different sizes.",
        deeper: "Neither invention was one person working alone. Edison's laboratory at Menlo Park employed a whole team of researchers, and the bulb was built on top of earlier inventors' work. Rockets today are built by private companies paid under government contracts. The lone-genius story is simply easier to draw than the truth, which is exactly why the symbol is a single bulb and not a laboratory.",
        images: [
          { src: "bulb-main.webp", label: "A", title: "The light bulb",
            alt: "A clear incandescent light bulb showing its filament.",
            caption: "Small, cheap, and in every room — the everyday end of invention." },
          { src: "bulb-filament.webp", label: "B", title: "Inside the bulb",
            alt: "Close-up of the coiled wire filament suspended inside a clear glass light bulb.",
            caption: "The whole invention is this: a thin coiled wire that glows without burning up. Edison's team tested thousands of materials to find one that lasted." },
          { src: "rocket-main.webp", label: "C", title: "The rocket",
            alt: "A tall silver rocket standing on the surface of the Moon with Earth visible in the black sky.",
            caption: "The other end of the same idea: invention as something that leaves the planet entirely." }
        ]
      }
    ]
  },

  {
    id: "e4",
    number: 4,
    title: "Objects & Clothing Symbols",
    partner: 2,
    prompt: "What objects best represent modern American identity? Why?",
    starter: "The objects that best represent modern American identity are… because…",
    symbols: [
      {
        slug: "dog-tags",
        title: "Dog Tags",
        simple: "Dog tags are small metal tags. People in the military wear them. Each tag has a name and a few basic facts on it. The tags let the army work out who a soldier is. That includes a soldier who has been killed. So this symbol holds two things at once. It holds service. It also holds loss.",
        primer: "Dog tags are metal identification tags worn by members of the military. They carry a name and a few basic facts, so that a soldier can be identified — including if they are killed. That is the reason this symbol holds service and loss together instead of standing for just one of them.",
        deeper: "They come in a pair for a blunt reason: one tag stays with the body and the other goes to the people keeping records. Families often hold on to a relative's tags for generations, which turns a piece of army-issued equipment into something personal. Very few objects start as standard government supply and end up as an heirloom.",
        images: [
          { src: "dogtags-main.webp", alt: "Two metal military dog tags on a beaded chain, resting in an open palm." },
          { src: "dogtags-worn.webp", label: "A", title: "The second tag",
            alt: "A single dog tag laced into the side of a tan military combat boot.",
            caption: "Here is where the second tag of the pair goes: laced into a boot. The pair is split on purpose, so that identification survives even if the two are separated." }
        ]
      },
      {
        slug: "religious-symbols",
        title: "Religious Symbols",
        simple: "Americans practise many different religions. Many Americans practise no religion at all. The First Amendment protects both choices. It says the government cannot set up an official religion. It also says the government cannot stop you practising yours. Put these symbols together and they stand for that freedom. They do not stand for any single faith.",
        primer: "Americans practise many different religions, and many practise none at all. The First Amendment protects both: the government may not set up an official religion, and it may not stop you practising yours. Taken together, these symbols stand for that freedom rather than for any single faith.",
        deeper: "The protection was written by people who had watched religious persecution in Europe, and in the colonies themselves. It has been tested constantly ever since — over prayer in schools, over which holidays close an office, over what a courthouse is allowed to display. So the real question the symbol raises is not whether freedom of religion exists on paper, but who has actually received it in practice.",
        images: [
          { src: "religion-chart.webp", alt: "A chart of many religious symbols from faiths around the world, each labelled." },
          { src: "religion-cross.webp", label: "A", title: "The cross",
            alt: "A plain Christian cross.", caption: "Christianity — the most widely practised faith in the United States." },
          { src: "religion-star.webp", label: "B", title: "The Star of David",
            alt: "A blue six-pointed Star of David.", caption: "Judaism — practised in America since the 1600s." },
          { src: "religion-crescent.webp", label: "C", title: "The star and crescent",
            alt: "A white star and crescent moon.", caption: "Islam — carried to America in part by enslaved West African Muslims." },
          { src: "religion-dharma.webp", label: "D", title: "The dharma wheel",
            alt: "A golden eight-spoked dharma wheel.",
            caption: "Buddhism. The eight spokes stand for the eightfold path — the wheel is a diagram of a teaching, not only a badge." },
          { src: "religion-om.webp", label: "E", title: "Om",
            alt: "The Om symbol, a curved Sanskrit character with a dot and crescent above it.",
            caption: "Hinduism. Om is a sound before it is a shape — this is a drawing of something you are meant to hear." }
        ]
      },
      {
        slug: "baseball-hat",
        title: "The Baseball Hat",
        simple: "A baseball cap started out as sports equipment. The brim sticks out at the front. It keeps the sun out of a fielder's eyes. Then the cap became ordinary American clothing. Almost anybody wears one now. A cap can tell people where you are from. It can show which team you follow, or what you believe. All of that comes from whatever is printed on the front.",
        primer: "A baseball cap began as sports equipment, because the brim keeps the sun out of a fielder's eyes. It turned into ordinary American clothing that almost anybody wears. A cap can say where you are from, which team you follow, or what you believe — entirely through whatever is printed on the front of it.",
        deeper: "The one shown here is a Seattle Mariners cap, which makes the point locally: around here, that logo tells other people something about you before you have said a word. The cap is cheap, plain, and has a flat panel right at eye level. That combination is why it became the standard American way to advertise a loyalty.",
        images: [
          { src: "cap-main.webp", alt: "A teal and navy Seattle Mariners baseball cap with the stylised S logo on the front." },
          { src: "cap-team.webp", label: "A", title: "Where it started",
            alt: "A black and white photograph of the 1914 West Point baseball team, most of the players wearing caps.",
            caption: "The 1914 West Point team. The cap was equipment first — the brim exists to keep the sun out of a fielder's eyes, and everything else came later." },
          { src: "cap-display.webp", label: "B", title: "A wall of them",
            alt: "A market stall stacked with dozens of baseball caps in many colours and logos.",
            caption: "Dozens of them, all the same shape, all saying different things. The object is identical; the front panel is the message." }
        ]
      },
      {
        slug: "smartphone",
        title: "The Smartphone",
        simple: "Most Americans use a smartphone every day. They talk to each other on it. They read the news on it. They take photographs and find their way with it. So the phone stands for being connected to everybody at once. It stands for something else too. Almost every pocket in the country holds the same object.",
        primer: "A smartphone is how most Americans talk to each other, read the news, take photographs and find their way around. It stands for being connected to everybody at once. It also stands for a country where very nearly the same object is sitting in almost every single pocket.",
        deeper: "It cuts both ways at once. The same device that lets a movement organise thousands of people in a few hours also records where its owner goes all day, and it is assembled from materials and labour gathered across many countries. So choosing the phone as a symbol of America means choosing connection and dependence together — you cannot pick up only one of them.",
        images: [
          { src: "phone-iphone.webp", alt: "An iPhone seen from the front, showing its home screen of app icons." },
          { src: "phone-samsung.webp", label: "A", title: "A different make",
            alt: "A Samsung Galaxy phone seen from the front, showing its home screen.",
            caption: "Different company, near-identical object. That sameness is part of what makes it work as a symbol." },
          { src: "phone-teen.webp", label: "B", title: "In use",
            alt: "A teenager sitting on the floor against a wall, looking down at a phone held in both hands.",
            caption: "The posture is the symbol as much as the device is. A stranger across a room can tell what you are doing without seeing the screen." }
        ]
      }
    ]
  }
];

/* Load-bearing words the readability pass flagged as off-list. The remedy for
   a hard word is to gloss it where it stands, never to delete or downgrade it
   — the concept has to survive. Matched case-insensitively on word boundaries
   in both the primer and the deeper text. */
var SYMBOL_GLOSSARY = {
  "immigrants": "People who move to a new country to live there permanently.",
  "immigrant": "A person who moves to a new country to live there permanently.",
  "dedicated": "Officially opened, with a ceremony.",
  "monument": "Something built to make people remember a person, event, or idea.",
  "servitude": "Being forced to work for someone else and not being free to leave.",
  "inscription": "Words carved or cast into something solid, like metal or stone.",
  "abolitionists": "People who fought to end slavery in the United States.",
  "Jubilee": "In the Bible, a year when debts were cancelled, land was given back, and enslaved people were freed.",
  "genuine": "Real, and not a fake.",
  "persecution": "Being treated cruelly, often because of your religion, race, or beliefs.",
  "assembly line": "A way of building things where the product moves past workers and each one does a single step.",
  "manufacturing": "Making goods in factories, usually in large numbers.",
  "formline": "The Northwest Coast art style built from curved ovoid and U shapes.",
  "sacred": "Treated as holy, and set apart for religious use.",
  "heirloom": "A valued object passed down through a family for generations.",
  "expelled": "Officially forced to leave.",
  "canton": "The rectangle in the top corner of a flag — on the US flag, the blue part with the stars."
};
