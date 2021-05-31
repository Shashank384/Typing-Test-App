const Parragraph = () => {
    const texts = [
      "The Mice once called a meeting to decide on a plan to free themselves"
      +"of their enemy, the Cat. At least they wished to find some way of" 
      +"knowing when she was coming, so they might have time to run away. Indeed,"
      +"something had to be done, for they lived in such constant fear of her "
      +"claws that they hardly dared stir from their dens by night or day."
      +"Many plans were discussed, but none of them was thought good enough. "
      +"At last a very young Mouse got up and said: "
      +"I have a plan that seems very simple, but I know it will be successful.",
  
      "A Town Mouse once visited a relative who lived in the country. For lunch the" 
      +"Country Mouse served wheat stalks, roots, and acorns, with a dash of cold water" 
      +"for drink. The Town Mouse ate very sparingly, nibbling a little of this and a" 
      +"little of that, and by her manner making it very plain that she ate the simple" 
      +"food only to be polite."
      +"After the meal the friends had a long talk, or rather the Town Mouse talked" 
      +"about her life in the city while the Country Mouse listened. They then went to" 
      +"bed in a cozy nest in the hedgerow and slept in quiet and comfort until morning." 
      +"In her sleep the Country Mouse dreamed she was a Town Mouse with all the luxuries" 
      +"and delights of city life that her friend had described for her. So the next day" 
      +"when the Town Mouse asked the Country Mouse to go home with her to the city, she gladly said yes.",
  
      "A Fox one day spied a beautiful bunch of ripe grapes hanging from a vine trained along" 
      +"the branches of a tree. The grapes seemed ready to burst with juice, and the Fox's mouth"
      +"watered as he gazed longingly at them. The bunch hung from a high branch, and the Fox" 
      +"had to jump for it. The first time he jumped he missed it by a long way. So he walked" 
      +"off a short distance and took a running leap at it, only to fall short once more." 
      +"Again and again he tried, but in vain. Now he sat down and looked at the grapes in disgust."
      +"What a fool I am, he said. Here I am wearing myself out to get a bunch of sour grapes" 
      +"that are not worth gaping for.And off he walked very, very scornfully."
    ];
    
    return texts[Math.floor(Math.random()*texts.length)];
}

  export default Parragraph;