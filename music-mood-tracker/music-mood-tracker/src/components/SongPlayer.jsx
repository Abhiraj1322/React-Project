import React from 'react'

const songs={
    happy: [
        "Happy by Pharrell Williams", 
        "Can't Stop the Feeling by Justin Timberlake", 
        "Walking on Sunshine by Katrina and the Waves"
      ],
      sad: [
        "Someone Like You by Adele", 
        "Stay by Rihanna", 
        "Fix You by Coldplay"
      ],
      relaxed: [
        "Weightless by Marconi Union", 
        "Sunset Lover by Petit Biscuit", 
        "Budapest by George Ezra"
      ],
      country: [
        "Take Me Home, Country Roads by John Denver",
        "Jolene by Dolly Parton",
        "The Gambler by Kenny Rogers"
      ],
      workout: [
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
        "Don't Stop the Music by Rihanna"
      ]
    };

const SongPlayer = ({mood}) => {                        ////const SongPlayer functionwhere mood prop is desifned
const getRandomsongs=()=>{                         ///// getrandomsongs is a function  in which if mood&& means if mood is false value means if mood have
                                                        //// null value than return false if songs [mood] than return moodsong[Math.floor(Math.random()*)]
    if(mood&&songs[mood]){
    const moodsong=songs[mood];
    return moodsong[Math.floor(Math.random()*moodsong.length)];
    }
    return null ;
};
const randomsong =getRandomsongs()

return(
<div>
{randomsong?(
<p>Now playing:{randomsong}</p>    ////if randoam songs have value it wolud play songs now playing
): (
<p>Select a Mood to play</p>        //////random song have null than else will  
)}                                  

</div>

);}

export default SongPlayer
