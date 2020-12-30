// Write your game logic here in JavaScript
'use strict';



const start = (say, sendButton) => {
    
    say('Gene is an emoji that lives in Textopolis 🏙, a digital city, inside the phone 📱 of his user, Alex 👦.\n\nGene is originally a \'Meh\' 😒 emoji, but unlike all the other emojis, he has the special ability to make any face he wants 😀 😋 🤣 😎 😍 😝 !\n\nAt the Text Center 🏢 of Textopolis 🏙, every emoji waits at its appointed box. Whenever Alex 👦 wants to send an emoji, that emoji jumps from its box and gets sent to the recipient !' ).then(() => {sendButton('Should I proceed with our story 🙂 ?', [{title: 'Yes', payload: '1'}, 'No']);
    });
    
};



const state = (payload, say, sendButton) => {
    
    if (payload === '1') {
    
    
    // **************  Chapter 1 *********************
    
    say('Chapter 1\n\nOur story starts at Alex\'s 👦 school 🏫, where Addie 👧, to whom Alex has a major crush ❤️, sends him a message 💬 .\n\nAlex 👦 sees the message 💬  of Addie 👧  and gets really nervous 😰💗 ! He has to reply something soon !\n\n\" Okay \", Alex 👦  thinks. \" I will reply with a \'Meh\' 😒 \", and he presses the \'Meh\' 😒 emoji !').then(
        () => {sendButton('Immediately, at Textopolis 🏙, Gene gets a notification from the Text Center 🏢 , that Alex pressed the \'Meh\' 😒 emoji ! It is his unique moment to shine 🌟 for the first time !! \n\nGene gets ready to jump from his box, but he is a bit confused 😬. He thinks: \" Which face should I make ? \" ', [{title: 'I\'ll be 😒 ', payload: '2a'}, {title: 'IDK ! 🤨 🙄 😫 😳 🤪 ', payload: '2b'}]);
    });
    
    }
    
    
};





module.exports = {
	filename: 'es',
	title: '😄 The Emoji Story',
	introduction: [
		'Welcome! This is a lesson on stacks and queues, two different yet similar data structures. A data structure is a data organization, management, and storage format that enables efficient access and modification. More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data.!!'
	],
	start: start,
	state: state
};
