import React, { useState, useEffect } from 'react';
 
const songs = {
  Happy: [
    "Happy by Pharrell Williams",
    "Can't Stop the Feeling by Justin Timberlake",
    "Walking on Sunshine by Katrina and the Waves",
    "Good Vibrations by The Beach Boys",
    "I'm Still Standing by Elton John",
    "Don't Stop 'Til You Get Enough by Michael Jackson",
    "Dancing Queen by ABBA",
    "I Got You (I Feel Good) by James Brown",
    "Shake It Off by Taylor Swift",
    "Uptown Funk by Mark Ronson ft. Bruno Mars",
    "Roar by Katy Perry",
    "Just Dance by Lady Gaga",
    "Stronger by Kanye West",
    "Firework by Katy Perry",
    "Can't Stop the Feeling! by Justin Timberlake",
    "Happy Together by The Turtles",
    "Good Times by Chic",
    "I'm a Believer by The Monkees",
    "Three Little Birds by Bob Marley and the Wailers",
    "Here Comes the Sun by The Beatles"
  ],
  Sad: [
    "Someone Like You by Adele",
    "Stay by Rihanna",
    "Fix You by Coldplay",
    "The Night We Met by Lord Huron",
    "Tears in Heaven by Eric Clapton",
    "Hurt by Johnny Cash",
    "Yesterday by The Beatles",
    "Someone You Loved by Lewis Capaldi",
    "Creep by Radiohead",
    "Skinny Love by Bon Iver",
    "The Scientist by Coldplay",
    "Hallelujah by Jeff Buckley",
    "Mad World by Gary Jules",
    "I Will Remember You by Sarah McLachlan",
    "Let Her Go by Passenger",
    "Chasing Cars by Snow Patrol",
    "I Can't Make You Love Me by Bonnie Raitt",
    "Un-break My Heart by Toni Braxton",
    "All I Want by Kodaline",
    "Say Something by A Great Big World ft. Christina Aguilera"
  ],
  Relaxed: [
    "Weightless by Marconi Union",
    "Sunset Lover by Petit Biscuit",
    "Budapest by George Ezra",
    "Sunflower by Post Malone & Swae Lee",
    "Banana Pancakes by Jack Johnson",
    "Put It All On Me by Ed Sheeran",
    "Gravity by John Mayer",
    "Better Together by Jack Johnson",
    "Come Away With Me by Norah Jones",
    "Bubbly by Colbie Caillat",
    "Landslide by Fleetwood Mac",
    "Dreams by Fleetwood Mac",
    "The Lazy Song by Bruno Mars",
    "Island in the Sun by Weezer",
    "Put It All On Me by Ed Sheeran",
    "Budapest by George Ezra",
    "Better Together by Jack Johnson",
    "Come Away With Me by Norah Jones",
    "Bubbly by Colbie Caillat",
    "Landslide by Fleetwood Mac"
  ],
  Country: [
    "Take Me Home, Country Roads by John Denver",
    "Jolene by Dolly Parton",
    "The Gambler by Kenny Rogers",
    "Friends in Low Places by Garth Brooks",
    "Ring of Fire by Johnny Cash",
    "Tennessee Whiskey by Chris Stapleton",
    "Before He Cheats by Carrie Underwood",
    "Man! I Feel Like a Woman! by Shania Twain",
    "I Walk the Line by Johnny Cash",
    "Need You Now by Lady A",
    "Stand by Your Man by Tammy Wynette",
    "Crazy by Patsy Cline",
    "I Will Always Love You by Dolly Parton",
    "Take It Easy by Eagles",
    "On the Road Again by Willie Nelson",
    "Folsom Prison Blues by Johnny Cash",
    "The Devil Went Down to Georgia by Charlie Daniels Band",
    "Coal Miner's Daughter by Loretta Lynn",
    "He Stopped Loving Her Today by George Jones",
    "If I Had a Boat by Lyle Lovett"
  ],
  Workout: [
    "Eye of the Tiger by Survivor",
    "Stronger by Kanye West",
    "Lose Yourself by Eminem",
    "Can't Hold Us by Macklemore & Ryan Lewis",
    "Till I Collapse by Eminem",
    "Remember the Name by Fort Minor",
    "We Will Rock You by Queen",
    "Power by Kanye West",
    "Pump It by Black Eyed Peas",
    "Work Hard, Play Hard by Wiz Khalifa",
    "Jump by Van Halen",
    "X Gon' Give It To Ya by DMX",
    "The Champion by Carrie Underwood ft. Ludacris",
    "Run This Town by Jay-Z, Rihanna & Kanye West",
    "Stronger by Britney Spears",
    "Bodak Yellow by Cardi B",
    "Warriors by Imagine Dragons",
    "Rock You Like a Hurricane by Scorpions",
    "Fight Song by Rachel Platten",
    "Don't Stop the Music by Rihanna",
    "Lose Control by Missy Elliott",
    "Can't Stop the Feeling! by Justin Timberlake",
    "Happy by Pharrell Williams",
    "Uptown Funk by Mark Ronson ft. Bruno Mars",
    "Shake It Off by Taylor Swift",
    "Stronger by Kanye West",
    "Firework by Katy Perry",
    "Can't Stop the Feeling! by Justin Timberlake",
    "Happy Together by The Turtles",
    "Good Times by Chic",
    "I'm a Believer by The Monkees",
    "Three Little Birds by Bob Marley and the Wailers",
    "Here Comes the Sun by The Beatles"
  ]
  
  
};

const SongPlayer = ({ mood }) => {
    const [selectedSongs, setSelectedSongs] = useState([]);


    const getRandomSongs = () => {
        if (mood && songs[mood]) {
            const shuffled = [...songs[mood]].sort(() => Math.random() - 0.5);
            const randomSongs = shuffled.slice(0, 3);
            setSelectedSongs(randomSongs);
            console.log(randomSongs);
        }
    };

    useEffect(() => {
        if (mood) {
            getRandomSongs();
        }
    }, [mood]);

    return (
        <div className="w-full bg-nowplaying text-red-400 flex flex-nowrap content-stretch items-baseline flex-row justify-center">
       
            {selectedSongs.length > 0 ? (
                <div className="">
                    <h4 className="text-xl text-red-500 ">Now Playing</h4>
                    <ul>
                        {selectedSongs.map((song, index) => (
                            <li className='text-xl text-red-500 mt-5 font-bold' key={index}>{song}</li>
                     
                     
                     ))}
                        
                    </ul>
                </div>
            ) : (
                <p>Select a mood to play songs!</p>
            )}
        </div>
    );
};

export default SongPlayer;
