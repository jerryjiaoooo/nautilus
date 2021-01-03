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
    	if (payload.substring(2) === 'A0') {
	    say(['Stack is a collection of items that literally “stack” on top of each other. It follows the “Last In First Out” principle, meaning you could only add, remove, and look at the item on the top.',
	    'Think of a stack as a literal “stack” of shirts. You are only allowed to take the topmost shirt or add to the top of the stack, while the rest of the shirts are not accessible to you.']).then(() 
	    => { sendButton('Got it?', [{title: 'Yes!', payload: payload.substring(0,2)+'A1'}]);
	       });
    }
	// push method
    	if (payload.substring(2) === 'A1') {
   	 say(['Ok!', 'Now, we will learn about the push method. The push method adds an item on top of your existing stack. It’s like putting a new shirt onto your stack of shirts!']);
	 say({
		attachment: 'image',
		url: 'https://i.postimg.cc/qq8C1dZ6/IMG-0230.jpg'
	 }).then(() 
	 => { sendButton('Got it?', [{title: 'Yes!', payload: payload.substring(0,2)+'A2'}]);  
		});
    }
	// pop method
     	if (payload.substring(2) === 'A2') {
   	 say(['Ok!', 'Now, we will learn about the pop method. The pop method removes the topmost item from your stack. Remember: last in, first out. Also, you can’t use pop if your stack is empty! You can’t take away any shirts if you have none ;(', 'BONUS concept: most implementation of pop actually returns the item which you removed. Think of this as you’re holding onto the shirt that you just took off the stack for other purposes (perhaps you want to “push” it onto another stack!)', 'Using the same stack as before, we perform the following operations.']);
	 say({
		attachment: 'stacks_pop',
		url: 'https://i.postimg.cc/K8msrGsL/IMG-0231.jpg'
	 }).then(() 
	 => { sendButton('Got it?', [{title: 'Yes!', payload: payload.substring(0,2)+'A3'}]);   
   	});
	}
	// peek method
     	if (payload.substring(2) === 'A3') {
   	 say(['Ok!', 'Now, we will learn about the peek method. The Peek method returns the topmost item without altering the stack. Think of this as you’re grabbing onto the topmost shirt without taking it off the stack. You can do various things with the peek method, such as inspecting the different properties of the topmost item, like looking at the size of your topmost shirt!', 'Using the same stack as before, we perform the following operations.']);
	 say({
		attachment: 'stacks_peek',
		url: 'https://i.postimg.cc/X7jwsr4V/IMG-0233.jpg'
	 }).then(() 
	 => { sendButton('Got it?', [{title: 'Yes!', payload: payload.substring(0,2)+'A4'}]);   
	 });  
    }
	if (payload.substring(2) === 'A4') {	
		say('If you combine the example operations from peek, push, and pop, you would have an example of multiple operations done on a single stack.').then(() 
	 => {
		sendButton('Ready for the quiz?', [{title: 'Ready!', payload: payload.substring(0,2)+'A5'}, {title: 'Review', payload: payload.substring(0,2)+'A0'}]); // returns to the beginning of stack, A0
	});  
	}
	// quiz section
	if (payload.substring(2) === 'A5') {
		say(['Quiz time!', 'What will the stack look like after performing these operations?', 
		     'Push 🤠\n Push ✨\n Pop\n Push ✌️\n Push 😁']).then(() 
	 => { 
		// answer choices 
		sendButton('All the choices below are from arranged from top to bottom:', [{title: '🤠✨✌️😁', payload: payload.substring(0,4)+'a'}, {title: '🤠✌️😁', payload: payload.substring(0,4)+'b'}, {title: '😁✌️✨🤠', payload: payload.substring(0,4)+'c'}, {title: '😁✌️🤠', payload: payload.substring(0,4)+'d'}]);
	});
		}
	// incorrect
	if (payload.substring(2) === 'A5a') {
		say('Incorrect. Stacks are first in last out, meaning 🤠 goes to the "bottom" of the stack, and anything pushed after goes on top. And the popping would remove the ✨!').then(() 
	 => {
		sendButton('Next Question?', [{title: 'Ready!', payload: payload.substring(0,2) + 'A6'}]);
	});
	}
	// incorrect
	if (payload.substring(2) === 'A5b') {
		say('Incorrect. Stacks are first in last out, meaning 🤠 goes to the "bottom" of the stack, and anything pushed after goes on top.').then(() 
	 => {
		sendButton('Next Question?', [{title: 'Ready!', payload: payload.substring(0,2) + 'A6'}]);
	});
	}
	// correct
	if (payload.substring(2) === 'A5d') {
		say('Correct!').then(() 
	 => {
		sendButton('Next Question?', [{title: 'Ready!', payload: payload.substring(0,2) + 'A6'}]);
	});
	}
	// incorrect
	if (payload.substring(2) === 'A5c') {
		say('Incorrect. Close, but you seem to have forgotten to pop ✨!').then(() 
	 => {
		sendButton('Next Question?', [{title: 'Ready!', payload: payload.substring(0,2) + 'A6'}]);
	});
	}
	// next quiz question
	if (payload.substring(2) === 'A6') {
		say('The stack now looks like (top)😁✌️🤠(bottom). What does popping the stack return?').then(() 
	 => {
		sendButton('Question', [{title: '😁', payload: payload.substring(0,4) + 'a'}, {title: '✌️', payload: payload.substring(0,4) + 'b'}, {title: '🤠', payload: payload.substring(0,4) + 'c'}]);
	});
	}
	//correct
	if (payload.substring(2) === 'A6a') {
		say('Correct!').then(() 
	 => {
		sendButton('Next Question?', [{title: 'Ready!', payload: payload.substring(0,2) + 'A7'}]);
	});
	}
	// incorrect
	if (payload.substring(2) === 'A6b') {
		say('Incorrect. Stacks are first in last out, meaning the last in, or the top of the stack, is the first out. Popping would return and remove 😁 from the stack.').then(() 
	 => {
		sendButton('Next Question?', [{title: 'Ready!', payload: payload.substring(0,2) + 'A7'}]);
	});
	}
	// incorrect
	if (payload.substring(2) === 'A6c') {
		say('Incorrect. Stacks are first in last out, meaning the last in, or the top of the stack, is the first out. Popping would return and remove 😁 from the stack.').then(() 
	 => {
		sendButton('Next Question?', [{title: 'Ready!', payload: payload.substring(0,2) + 'A7'}]);
	});
	}
	
	if (payload.substring(2)==='A7'){
		sendButton('Done with stacks! ', [{title: 'yes ', payload: payload.substring(0,2)+'Af'}]);
	}

    //QUEUES (start with 'B')
    if (payload.substring(2)==='B0'){
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
	
	// FINAL QUIZ
    if (payload==='TTAf' || payload==='TTBf'){
        say('READY FOR FINAL QUIZ??').then(
        () => {sendButton('🤩', [{title: 'yes!', payload: 'F1'}]);
    });
    }
	
	if (payload==='F1'){
		
			say('What principle does STACK follow?').then(
		() => {sendButton('Question', [{title: 'First In First Out', payload: 'F2'}, {title: 'Last In First Out', payload: 'F3'}]);
				});
	}
	
	if (payload === 'F2') {
		say('Incorrect. The correct answer is Last In First Out.').then(
		() => {sendButton('Next Question?', [{title: 'Ready!', payload: 'F4'}]);
				});
	}
	
	if (payload ==='F3'){
		say ('Correct!').then(
		() => {sendButton('Next Question?', [{title: 'Ready!', payload: 'F4'}]);
				});
	}
	
	if (payload==='F4'){
		
			say('What principle does Queue follow?').then(
		() => {sendButton('Question', [{title: 'First In First Out', payload: 'F5'}, {title: 'Last In First Out', payload: 'F6'}]);
				});
	}
	
	if (payload === 'F6') {
		say('Incorrect. The correct answer is First In First Out.');
		sendButton('Next Question?', [{title: 'Ready!', payload: 'F7'}]);
	}
	
	if (payload ==='F5'){
		say ('Correct!').then(
		()=>{sendButton('Next Question?', [{title: 'Ready!', payload: 'F7'}]);
				});
	}
	
	if (payload==='F7'){
		
			say('What data structure is used to solve recursive problems?').then(
		()=> {sendButton('Question', [{title: 'Stack', payload: 'F8'}, {title: 'Queue', payload: 'F9'}]);
				});
	}
	
	if (payload === 'F9') {
		say('Incorrect. The correct answer is Stack. Because in recursive problems, you want to tackle the most fundamental problem and work your way BACKWARD, remember stack is Last In First Out! On the other hand, queues are used to solve sequential problems. \n CONGRATS, YOU HAVE MASTERED STACKS AND QUEUES!!🎉').then(
		() => {sendButton('restart?', [{title: 'learn it again!', payload: 'restart'},'No']);
				});
	}
	
	if (payload ==='F8'){
		say ('Correct! \n CONGRATS, YOU HAVE MASTERED STACKS AND QUEUES!!🎉').then(
		()=>{sendButton('restart?', [{title: 'learn it again!', payload: 'restart'},'No']);
				});
	}

    
	// GO TO THE LESSON NOT YET LEARNED
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
		'Welcome! This is a lesson on stacks and queues, two different yet similar data structures. A data structure is a data organization, management, and storage format that enables efficient access and modification. More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data!!'
	],
	start: start,
	state: state
};
