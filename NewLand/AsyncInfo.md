```Javascript


ASYNC CODE

Javascript
1. synchronous language = 
2. single threaded
the above is default javascript


Execution Context
|
| Execution one line of code at a time
|
|-   console log - 1
|-   console log - 2
|
|-   Call Stack || Memory Heap
|
|
|----- " THIS IS A SINGLE THREAD "

Each operations waits for the last one to be executed 






___________________________________________________________________________________
|---------------------------------------------------------------------------------
|  Blocking Code VS                     |               Non Blocking Code
|                                       |
|                                       |
|  Blocks the Flow of the Program       |  Does not blocks the previouscode 
|                                       |
|  Reads File Sync                      |  Reads file Async
|                                       |
|                                       |
|                                       |
|---------------------------------------------------------------------------------
___________________________________________________________________________________

Biggest Blocking code is Reading file it takes time and can block the next code as it waits for the file to be read


Javascript itself cannot read the fle as it is being in the browser it is done by using node



JS ENGINE = a;one js engine = made from call stack and memory heap
the browsers and node is not just js engine alone

Memory heap || Call stack 

               fn ---------|
               fn          |
               fn          |
               global      |
                           |
                           |
               function then calls web API/NODE
               thus a procedure begins where
               1. DOM API
               2. Set TimeOut -------  ====== a time set to do an event or response
               3. Set Interval      |
               4. FETCH()-          |__________-> Register Call back
               from fetch() to promise, where promise goes to high priority call backs and 


               RCB(Registered call back) goes to call back and adds to call stack

               Call Stack = 



               this entire is an event loop

```
