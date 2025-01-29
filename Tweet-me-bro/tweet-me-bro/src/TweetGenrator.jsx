import React from 'react'
import AddTweets from './AddTweets';
import { useState } from 'react'
const TweetGenrator = () => {
      const [item ,setItem]=useState("");

    const tweets = [
        "I just realized my coffee is more successful than me.",
        "Life is short. Don’t spend it watching your phone’s battery percentage drop.",
        "I spent 20 minutes looking for my glasses while wearing them.",
        "I’m not arguing, I’m just explaining why I’m right.",
        "If I could rearrange my life, I'd keep the confusion and add more pizza.",
        "I don't need an inspirational quote, I need coffee.",
        "I would agree with you, but then we’d both be wrong.",
        "If I ever go missing, I’m probably at the nearest pizza place.",
        "Some days I amaze myself, other days I put my keys in the fridge.",
        "I need six months of vacation, twice a year.",
        "The only time I’m a morning person is when I stay up all night.",
        "I have a fear of getting a job where the coffee is bad.",
        "I tried to be normal once. Worst two minutes ever.",
        "Procrastination is my specialty. I'll get to it tomorrow.",
        "My diet plan: Make all my friends cookies. The fatter they get, the thinner I look.",
        "I’m not lazy, I’m on energy-saving mode.",
        "I’m not saying I’m Wonder Woman, I’m just saying no one has ever seen me and Wonder Woman in the same room.",
        "I think I’ve discovered the secret to life... it's coffee.",
        "I can't adult today. Please send help and tacos.",
        "I need a six-month vacation, twice a year.",
        "I asked the librarian if the library had books on paranoia. She whispered, 'They’re right behind you.'",
        "Why do I keep pressing the snooze button? I’m clearly not going back to sleep.",
        "Just burned 1200 calories. I forgot the pizza in the oven.",
        "The first step to being productive is looking at your phone for 20 minutes.",
        "I don’t need an inspirational quote, I need a nap.",
        "If I don’t reply, it’s not that I’m ignoring you, I’m just mentally gone.",
        "Sometimes I wonder if I’m the only one who remembers to breathe.",
        "I should start a podcast called, 'I’m not sure what I’m doing.'",
        "The worst part about being on the phone is when they ask if you’re still there and you’re like, 'I’ve been here for 30 minutes!'",
        "You know you’re getting old when you bend down to tie your shoe and wonder what else you can do while you're down there.",
        "I’m not arguing. I’m just explaining why I’m right.",
        "Why is there a ‘don’t touch’ sign on the bread? It’s bread, not a dangerous animal.",
        "I don't know what I'm doing, but I’m doing it anyway.",
        "I wish I could lose weight as easily as I lose my keys.",
        "I hate when people ask me what I’m doing with my life. I’m just trying to figure out what to eat for lunch.",
        "I got 99 problems, but a pizza slice ain’t one.",
        "If I could make one wish, it would be for unlimited pizza... oh wait, I already have that. It's called 'ordering pizza every day.'",
        "I’m trying to lose weight, but it’s not working. I keep gaining snacks.",
        "Can we stop acting like walking into a room and forgetting why is something that only happens to us?",
        "Who needs therapy when you can just text your friend a meme?",
        "I don’t get why people say 'don’t drink and drive' when they clearly mean 'don’t drink and text.'",
        "I feel like I should do something with my life, but it’s a lot of work.",
        "I think the best way to learn how to do something is by doing it wrong first.",
        "I’m the type of person who gets distracted by their own thoughts.",
        "I hate when people say, ‘Let’s go for a walk.’ I can barely walk to the fridge.",
        "I'm multitasking: I can listen, ignore, and forget all at the same time.",
        "When life gives you lemons, just say, ‘I ordered a pizza, not lemonade.’",
        "I could be a morning person... if mornings started at noon.",
        "It's not that I don't care, it's that I care about too many things.",
        "The only thing I’m committed to is making coffee every day.",
        "If I were a superhero, my power would be procrastination.",
        "I think I’ve officially reached that age where I can’t sleep in past 9 AM.",
        "I'm not lazy, I'm just on energy-saving mode.",
        "I told my computer I needed a break, and it froze. Very relatable.",
        "I came, I saw, I made it awkward.",
        "Early to bed and early to rise makes man angry twice.",
        "Everytime a house owner tells me he won't rent his house to me because he wants a family I ask him if his daughter is single."
      ];
const Darktweets=["Everytime a house owner tells me he won't rent his house to me because he wants a family i ask him if his daughter is single",
                 "Girls pls buy crypto because they will go down on you ",
                 "Sucks how every girl  i'm  intersted in is either taken or has good taste in men"
]

const random=()=>{
    const randomIndex = Math.floor(Math.random() * tweets.length);
setItem(tweets[randomIndex])

}  
const darkRandom=()=>{
  const randomdark=Math.floor(Math.random()*Darktweets.length);

  setItem(Darktweets[randomdark])
}
      
const addTweet=(newTweet)=>{
if (newTweet.trim()){
  setItem([...item,newTweet])
  alert("new tweet is added");
}
}



  return (
    
    <div>
      <div>
        <ul>
          <li>Home</li>
          <li>Add tweets</li>
          <li>Best tweets</li>

        </ul>
      </div>
<button onClick={random}>TWeeT ME</button>
<button onClick={darkRandom}>Dark Tweets</button>
<h1>Tweet of the day for you is</h1>
<p>{item}</p>
<AddTweets onaddtweets={addTweet} />



    </div>
  )
}

export default TweetGenrator
