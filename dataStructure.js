// Write your game logic here in JavaScript
'use strict';


//payload format: [stack visited?][queue visited?][section number]
const start = (say, sendButton) => {
    
    say('Which data structure would you like to learn first?' ).then(() => {sendButton('Available lessons', [{title: 'Stack', payload: 'TFA0'},{title:'Queue',payload:'FTB0'}]);
    });
    
};



const state = (payload, say, sendButton) => {
    
    say(payload);
	//STACKS (start with 'A')
    if (payload.substring(2) == 'A0') {
	    say('Stack is a collection of items that literally “stack” on top of each other. It follows the “Last In First Out” principle, meaning you could only add, remove, and look at the item on the top.');
	    
	    say('Think of a stack as a literal “stack” of shirts. You are only allowed to take the topmost shirt or add to the top of the stack, while the rest of the shirts are not accessible to you.').then(
        () => {sendButton('Got it?', [{title: 'yes!', payload: payload.substring(0,2)+'A1'}]);
    });
    
    }
	
    if (payload.substring(2) === 'A1') {
    say('ok!').then(
        () => {sendButton('Done with stacks! ', [{title: 'yes ', payload: payload.substring(0,2)+'Af'}]);
    });
    }



    //QUEUES (start with 'B')
    if (payload.substring(2)=='B0'){
        say ('A queue is a collection of entities that forms a “queue”. It follows the “First in first out” principle, meaning items can only be added at the end of the queue and removed at the beginning.');
        say('Now think of a queue like the shirts that line up in your closet. You are only allowed to put a new shirt at the end of the queue and take out the first piece of cloth. Meanwhile, you can also peek at the start of the queue, which means you can take a look at the first shirt in your closet.').then(
        () => {sendButton('Got it?', [{title: 'yes!', payload: payload.substring(0,2)+'B1'}]);
    });
        
    }
    
    if (payload.substring(2) === 'B1') {
    say('ok!').then(
        () => {sendButton('Done with queues! ', [{title: 'yes ', payload: payload.substring(0,2)+'Bf'}]);
    });
    }
    
    
    
    
    //END STATEMENTS
    if (payload==='TTAf' || payload==='TTBf'){
        say('Congrats!').then(
        () => {sendButton('restart? ', [{title: 'yes', payload: 'restart'},'No']);
    });
    }
    
    if (payload === 'TFAf'){
        say('').then(
        () => {sendButton('Learn queues now? ', [{title: 'yes', payload: 'TTB0'},'No']);
        });
    }
    if (payload === 'FTBf'){
        say('').then(
        () => {sendButton('Learn stacks now? ', [{title: 'yes', payload: 'TTA0'},'No']);
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
