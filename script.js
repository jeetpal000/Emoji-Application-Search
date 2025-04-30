
let input = document.querySelector('#input');
let button = document.querySelector('#button');
let recent_search = document.querySelector('#recent');
let quick_search = document.querySelectorAll(".quick_search")
let emoji_container = document.querySelector('#emoji_container');


function displayEmoji(searchQuery){

    let filterEmoji = emojiList.filter((emoji)=>{
        if(searchQuery.length===undefined){
            return true;
        }
            if(emoji.description.indexOf(searchQuery) != -1){
                return true;
            }
            if(emoji.aliases.includes(searchQuery)===true){
                return true;
            }
            if(emoji.tags.includes(searchQuery)===true){
                return true;
            }
           
    });


    // console.log(filterEmoji);


    emoji_container.innerHTML="";
    filterEmoji.forEach((emoji)=>{

        // console.log(emoji);

       let emojiDiv = document.createElement("div");
       let emojee = document.createElement("div");
       let emojiName = document.createElement("p");
       emojiDiv.classList.add("emoji_div");
       emojiName.classList.add("emoji_name");
       emojee.classList.add("emojee");

       emojiName.innerText = emoji.description;
       emojee.innerText = emoji.emoji;
       emojiDiv.appendChild(emojee);
       emojiDiv.appendChild(emojiName);
       emoji_container.appendChild(emojiDiv); 
    //    console.log(EmojiList);
    //    console.log(emoji.description);
    //    console.log(emoji.emoji);
       
       
        
    });
}

input.addEventListener("keyup", function(){
    let searcField = input.value.toLowerCase();
    // console.log(searcField);
    displayEmoji(searcField);
    
});
quick_search.forEach((ele)=>{
     ele.addEventListener("click", ()=>{

        ele.classList.toggle('quick_search_changeBg');

        let recent = ele.innerText.toLowerCase();
        // console.log(recent);
        if(recent=="all"){
            displayEmoji("");
        }else{
       displayEmoji(recent);
        }
        
     });
        
});

button.addEventListener('click', function(){
    let btnValue = input.value;
    displayEmoji(btnValue);
    input.value = "";

});

window.addEventListener("load", displayEmoji);

















