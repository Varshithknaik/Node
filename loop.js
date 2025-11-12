// node myFile.js

//Bookkeeping stuff
const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// New timers, operations are recorded from myFile running
myFile.runContents();

function shouldCountinue(){
  //  check one: Any pending setTimeout, setInterval, setImmediate?
  //  check two: Any pending OS tasks? ( Like server listening to port );
  //  Check three: Any pending long running operations? ( Like fs module );
  return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;
}

// Entire body executes in one 'tick'
while(shouldCountinue()){
 // 1) Node looks at pendingTimers and sees if any functions are ready to be called. setTimeout and setInterval
 // 2) Node looks at pendingOSTasks and pendingOperations and calls revelant callback;
 // 3) Pause execution. Countinue when...
  //  a) A new pendingOSTask is done
  //  b) A new pendingOperation is done
  //  c) A timer is about to complete
  // 4) Look at pendingTimers. Call any setImmediate.
  // 5) Handle any 'close' events
}

//exit back to terminal