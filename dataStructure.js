// Write your game logic here in JavaScript
'use strict';



const start = (say, sendButton) => {
    
    say('Which data structure would you like to learn first?' ).then(() => {sendButton('Available lessons', [{title: 'Yes', payload: ['T','A0']}, 'No']);
    });
    
};



const state = (payload, say, sendButton) => {
    
	//STACKS (start with 'A')
    if (payload[1] === 'A0') {
	    say("Stack is a collection of items that literally “stack” on top of each other. It follows the “Last In First Out” principle, meaning you could only add, remove, and look at the item on the top.");
	    
	    say('Think of a stack as a literal “stack” of shirts. You are only allowed to take the topmost shirt or add to the top of the stack, while the rest of the shirts are not accessible to you.').then(
        () => {sendButton('Got it?', [{title: 'yes!', payload: [payload[0],'A1']}]);
    });
    
    }
	
if (payload[1] === 'A1') {
    say('Chapter 1\n\nOur story starts at Alex\'s 👦 school 🏫, where Addie 👧, to whom Alex has a major crush ❤️, sends him a message 💬 .\n\nAlex 👦 sees the message 💬  of Addie 👧  and gets really nervous 😰💗 ! He has to reply something soon !\n\n\" Okay \", Alex 👦  thinks. \" I will reply with a \'Meh\' 😒 \", and he presses the \'Meh\' 😒 emoji !').then(
        () => {sendButton('Immediately, at Textopolis 🏙, Gene gets a notification from the Text Center 🏢 , that Alex pressed the \'Meh\' 😒 emoji ! It is his unique moment to shine 🌟 for the first time !! \n\nGene gets ready to jump from his box, but he is a bit confused 😬. He thinks: \" Which face should I make ? \" ', [{title: 'I\'ll be 😒 ', payload: '2a'}, {title: 'IDK ! 🤨 🙄 😫 😳 🤪 ', payload: '2b'}]);
    });
    
    }

    
    
};





module.exports = {
	filename: 'es',
	title: 'Data Structure',
	introduction: [
		'Welcome! This is a lesson on stacks and queues, two different yet similar data structures. A data structure is a data organization, management, and storage format that enables efficient access and modification. More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data.!!'
	],
	start: start,
	state: state
};
