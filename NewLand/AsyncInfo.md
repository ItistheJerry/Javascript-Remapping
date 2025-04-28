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



```
