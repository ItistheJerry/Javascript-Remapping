// const myArr = []

// %DebugPrint(myArr);


// Tool to study v8 engine and d8
// INSTALL JSVU(Javascript (v8) version updater)


// to install open terminal

// as while installing the jsvu we type 
// npm i -g jsvu
// and then when we run it as jsvu
// it asks for os and then the engine to install

// we select os and then engine just in case we left one or more out while installing we can run this command
/*
jsvu --os=mac64arm --engines=all (for installing all at once)

to install selected oned type this

jsvu --os=macOS M1 64-bit --engines=chakra,graaljs,hermes,javascriptcore,quickjs,spidermonkey,v8,v8debug
*/


// v8debug = provides many new features debug lets complete details about arrays
// v8 is node
// v8debug is itself run excecutable utility .exe

//  ~/.jsvu/bin/v8-debug --allow-natives-syntax test.js
// the line above means 
// % related code should be allowed inside this file
// the above line is an error to write it better is below



//  ~/.jsvu/bin/v8-debug --allow-natives-syntax = runs d8 version
// const arr = []
// %DebugPrint(arr)

/*
 ~/.jsvu/bin/v8-debug --allow-natives-syntax       
V8 version 13.9.54
d8> const arr = []
undefined
d8> %DebugPrint(arr)
DebugPrint: 0x153f001c9509: [JSArray]
 - map: 0x153f000544b1 <Map[16](PACKED_SMI_ELEMENTS)> [FastProperties]
 - prototype: 0x153f00054731 <JSArray[0]>
 - elements: 0x153f000007bd <FixedArray[0]> [PACKED_SMI_ELEMENTS]
 - length: 0
 - properties: 0x153f000007bd <FixedArray[0]>
 - All own properties (excluding elements): {
    0x153f00000e3d: [String] in ReadOnlySpace: #length: 0x153f0020270d <AccessorInfo name= 0x153f00000e3d <String[6]: #length>, data= 0x153f00000011 <undefined>> (const accessor descriptor, attrs: [W__]), location: descriptor
 }
0x153f000544b1: [Map] in OldSpace
 - map: 0x153f0004c571 <MetaMap (0x153f0004c5c1 <NativeContext[303]>)>
 - type: JS_ARRAY_TYPE
 - instance size: 16
 - inobject properties: 0
 - unused property fields: 0
 - elements kind: PACKED_SMI_ELEMENTS *DISCUSSED BELOW*
 - enum length: invalid
 - back pointer: 0x153f00000011 <undefined>
 - prototype_validity cell: 0x153f00000ad5 <Cell value= 1>
 - instance descriptors #1: 0x153f00054d4d <DescriptorArray[1]>
 - transitions #1: 0x153f00054d6d <TransitionArray[5]>
   Transitions #1:
     0x153f00000e81 <Symbol: (elements_transition_symbol)>: (transition to HOLEY_SMI_ELEMENTS) -> 0x153f00054d89 <Map[16](HOLEY_SMI_ELEMENTS)>
 - prototype: 0x153f00054731 <JSArray[0]>
 - constructor: 0x153f00054401 <JSFunction Array (sfi = 0x153f00207d75)>
 - dependent code: 0x153f000007cd <Other heap object (WEAK_ARRAY_LIST_TYPE)>
 - construction counter: 0

[]


*/





// Write summary on this lesson


// Types of Array
// Continious, Holey Array(Holes)


// Optimization happens in js by below
// ([SMI] Small Integer)
// ([Packed element])
// ([Double] float, function, string)

// Both Continious and Holey has 3 types each

// what Array elements and position is optimised by javascript

// what elements and position of it (value at 0 , 1, 2 but also what element and type, )

// like where the element is a hole means empty, has different optimisation 


// elements of array no matter (string, function, float, numbers) techncal term

// Methods (for, while, forEach, map) what element, at what position has each different optimization(not only dsa each usecase scenario)

const arrTwo = [1, 2, 3, 4, 5]

// Packed_SMI_Elements as this does not have any holes (continious)

// Most optimised and first type,  restricted elements aproval only numbers, 

arrTwo.push(6.0)

// packed_double_elements (because of double values inserted)

arrTwo.push('2') // (string) now turned packed_elements not SMI


// elements are By default is packed_smi_element

arrTwo[10] = 11 // (Holey_Elements)

console.log(arrTwo);

console.log(arrTwo.length);

console.log(arrTwo[9]); // Undefined 

// (Are costly operation) 
//  To find it does a bound check (arr start here |  and length i this / outside is bound(easy))

// In above where we ask for 9 it is inside the length 
// hasOwnProperty(arrTwo, 9) (check if true or false)

// hasOwnProperty(arrTwo.prototype, 10) as js has prototype nature it regourisly Checks

// hasOwnProperty(Object.prototype, 10) // most expensive check in JS

// Holes are Very Expensive the above check is very normal in hole




const arrThree = [1, 2, 3, 5, 4, 6]

console.log(arrThree[8]);

// out of bound is true so its the only check

// if 
console.log(arrThree[4]);

// the output is defined and not out of bound so no issue (also continious)

// These are top priority
    //    ||||
    //    ||||
    //    ||||
    //     \/
// SMI (Highest optimised)
// Double (Second)
// Packed (Third) {Continous {everything in it}}

// 

// Holes_SMI 
// H_Double
// H_Packed


// Once Downgraded cannot be updraded
// no matter we pop or remove the added one 

// when we shift in hole it then as well cannot be upgraded to the continious wvwn as well



const arrFour = new Array(3)

// just three holes = HOLEY_SMI_ELEMENTS

// Downgrading

arrFour(0) = '1'

// as now it will be in h_packed = HOLEY_ELEMENTS
// Nothing can revert it back to its original

arrFour(1) = '1' // HOLEY_ELEMENTS
arrFour(2) = '1' // HOLEY_ELEMENTS
arrFour(3) = '1' // HOLEY_ELEMENTS


// We could have added the elements initially

const arrFive = [] // an array is empty and a SMI
arrFive.push('1') // Packed_Elements (better Optimised version)


const arrSix = [1, 2, 3, 5, 4]

arrSix.push(NaN) // Packed_Double

arrSix.push(Infinity) // Packed_Double

console.log(arrSix);


// Recommendation

// For, for-of, forEach = {[(Method Usage is prefered )]}
