# Frequently asked questions:

##    1.	async await vs promise


https://www.geeksforgeeks.org/difference-between-promise-and-async-await-in-node-js/
https://medium.com/version-1/difference-between-promise-and-async-await-95e453182f55
https://www.youtube.com/@akshaymarch7
https://www.youtube.com/watch?v=78Homn79Qsk&list=PLlasXeu85E9eWOpw9jxHOQyGMRiBZ60aX&ab_channel=AkshaySaini


##    2.	500 series of status - client side or server side?

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

### Client error responses

> 400 Bad Request

The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).

> 401 Unauthorized

Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.

> 403 Forbidden

The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the server.

> 404 Not Found

The server cannot find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 Forbidden to hide the existence of a resource from an unauthorized client. This response code is probably the most well known due to its frequent occurrence on the web.

> 405 Method Not Allowed

The request method is known by the server but is not supported by the target resource. For example, an API may not allow calling DELETE to remove a resource.

### Server error responses

> 500 Internal Server Error

The server has encountered a situation it does not know how to handle.

> 501 Not Implemented

The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.

> 502 Bad Gateway

This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.

> 503 Service Unavailable

The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This response should be used for temporary conditions and the Retry-After HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.

> 504 Gateway Timeout

This error response is given when the server is acting as a gateway and cannot get a response in time.


##    3.	custom pipe write in angular

##    4.	Custom Map () Function using Prototypes in JavaScript 

https://medium.com/@vaishaliranjan2/custom-map-function-using-prototypes-in-javascript-3aa67c94d9af

```
Array.prototype.map = function(logic){
        let output=[];
        for(let i=0;i<this.length;i++){  // this represents object which calls this map method (in our case "arr")
            var value= logic(this[i]);
            output.push(value);
        }
        return output
}

const circumference =(value)=>{
    return Math.PI*2*value;
}

const area =(value)=>{
    return Math.PI*value*value;
}

arr=[1,2,3,4]
console.log(arr.map(circumference))
console.log(arr.map(area))

```

##    5.	HTTP request methods

https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

> GET

The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.

> HEAD

The HEAD method asks for a response identical to a GET request, but without the response body.

> POST

The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server.

> PUT

The PUT method replaces all current representations of the target resource with the request payload.

> DELETE

The DELETE method deletes the specified resource.

> CONNECT

The CONNECT method establishes a tunnel to the server identified by the target resource.

> OPTIONS

The OPTIONS method describes the communication options for the target resource.

> TRACE

The TRACE method performs a message loop-back test along the path to the target resource.

> PATCH

The PATCH method applies partial modifications to a resource.

##    6.	Create a fixed/sticky header on scroll with CSS and JavaScript.

https://www.w3schools.com/howto/howto_js_sticky_header.asp

``` 
HTML

<div class="header" id="myHeader">
  <h2>My Header</h2>
</div>
```

```
CSS

/* The sticky class is added to the header with JS when it reaches its scroll position */
.sticky {
  position: fixed;
  top: 0;
  width: 100%
}

/* Add some top padding to the page content to prevent sudden quick movement (as the header gets a new position at the top of the page (position:fixed and top:0) */
.sticky + .content {
  padding-top: 102px;
}

```

```
Javascript

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
```

##    7.	async await promise console.log example (TODO)
##    8.	component factory resolver is for dynamic component or custom elements (TODO)
##    9.	diff between subject & behaviour subject (TODO)
##    10.	viewchild & viewChildren (TODO)
##    11.	diff between mergemap, switchmap & concatmap

https://medium.com/@rk-tech/simplified-explanation-of-switchmap-concatmap-mergemap-and-exhaustmap-bceb98081714

> switchMap: 

When a bunch of values are emitted quickly, switchMap only cares about the latest one and ignores the rest. It does not wait for the previous calls to complete before making new ones.

> concatMap: 

This operator creates a queue of requests and handles them one after the other. It waits for the previous call to finish before making the next one. It maintains the order of requests and creates a link between them.

> mergeMap: 

Unlike concatMap, mergeMap does not wait for the previous call to finish. It emits all requests as they come in, processing them at the same time. However, the response order may not match the request order.

> exhaustMap: 

This operator deals with the first request and ignores all subsequent requests until the first one is done. Once the first request is finished, it's ready to handle the next one. It ensures that requests are not queued or processed simultaneously.

In a nutshell:

`switchMap` 

only considers the most recent request, ignoring all previous ones.

`concatMap` 

processes request one by one, waiting for each to complete before starting the next.

`mergeMap` 

processes requests at the same time, returning responses as they arrive.

`exhaustMap` 

processes the first request and ignores all other requests until the first one is done.

```
With mergeMap

When an airplane arrives, the luggage is put on the conveyor belt, one after the other. When another airplane arrives as well, the luggage of that one is also put on the conveyor belt, merged with the luggage of the other airplane. So the conveyor belt will show a mix of luggage from the first and second airplane.

With switchMap

When an airplane arrives, the luggage is put on the conveyor belt, one after the other. But as soon as another airplane arrives, they stop putting any luggage from the previous airplane on the conveyor belt. They cancel any further luggage handling for that airplane and begin handling the luggage for the newly arrived airplane.

With concatMap

When an airplane arrives, the luggage is put on the conveyor belt, one after the other. When a new airplane arrives, all the luggage from the first airplane is put on the conveyor belt. Only when all that luggage is handled will the handling of the luggage on the second airplane start.

With exhaustMap

When an airplane arrives, the luggage is put on the conveyor belt, one after the other. When a new airplane arrives and the luggage of the first airplane is still handled, the luggage handling personnel simply ignores the second airplane. The luggage on the second airplane will not be handled.
```

##    12.	context vs this

context refers to the object to which a function belongs or is bound. It determines how the function is executed and how it can access variables, properties, and methods within its scope.

The this keyword in JavaScript provides a reference to the current context that can allow a function to access and manipulate the methods and properties of the context object. This changes dynamically: where the function is invoked matters, and where the this keyword is used matters.

##    13.	prototype vs __proto__

https://medium.com/@venkatiyengar/proto-vs-prototype-d3c9df933f58

##    14.	explain changeDetectionStrategy  (TODO)


##    15.	union and intersection types

https://www.typescriptlang.org/play/?#code/C4TwDgpgBAFghgZwHJwLbQLxQN5QHZoQBcUCwATgJZ4DmANAgK7kHpFlW0C+A3AFChIsRAEEamHFDjiSeRqgBGEcrz4Dw0eMkIi8AEzEStKdFAA+whIf58AxgHs8ZKADc4AG0bQSxnfsNQWNh8UPiEJADkeJQIMJTAMBF0IaTMrMRQEQBMAMxJKdLEAIxZfKp2jgj27hAAdO72NAAUbp4QAJRqQA

##    16.	diff between omit and partial, pick

```
type hasName = { name: string,surname:string, age:number};
type hasAge = { age: number};

type hasNameOrAgeOrSurname = Partial<hasName>;
type hasSurname = Omit<hasName, 'name' | 'age'>;

const value : hasNameAndAge = {
  name: 'nishith',
  age:12
};

console.log(value)
```



##    17.	call apply bind

call(arg1, argn..) - takes 1st argument as reference of object & followed arguments are arguments to the function
apply(arg1, [argn..]) - takes 1st argument as reference of object & 2nd argument is arguments as array to the function
bind(arg1, argn..) - takes 1st argument as reference of object & followed arguments are arguments to the function
however this doesn't invoke the function rather it returns a new function who refers the obj. we need to explicitly invoke the new function ().

##    18.	SOLID principals
##    19.	design patterns
##    20.	covert 1.345 to 2 decimal value

let decimalNo = 1.345;

console.log(decimalNo.toFixed(2))

##    21.	static vs private vs public 	

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static

##    22.	life cycle hooks (TODO)
##    23.	parent child components data sharing (TODO)
##    24.	@Input (TODO)
##    25.	@ViewChild (TODO)
##    26.	@Output & EventEmitter  (TODO)
##    27.	Custom validator (TODO)
##    28.	Polyfills 

https://javascript.info/polyfills

Polyfills and prototyping are powerful techniques for extending JavaScript functionality, but they serve different purposes. Polyfills are designed to ensure backward compatibility by providing modern features in older environments, while prototyping allows for custom extensions to built-in objects.

##    29.	Form dirty, pristine & other classes of css

Pristine: Both email and password fields are initially pristine, so no validation messages are shown.
Dirty: Once the user starts typing in the email field, it becomes dirty, and validation can start displaying messages if the input is invalid.
Touched: If the user clicks into the password field and then clicks out without typing anything, it becomes touched, and a "required" validation message might be shown.
Valid/Invalid: After the user types a valid email and password, both fields become valid, allowing the form to be submitted.
Pending: If the form performs an async validation (e.g., checking the email against a server), the email field might be in a pending state during the check.

##    30.	Other methods around forms (TODO)
##    31.	Reactive forms (TODO)
##    32.	How to bootstrap two components in angular (TODO)
##    33.	forRoot vs forChild (TODO)
##    34.	loadChildren in routes for lazy load of module (TODO)
##    35.	Routes properties – canActivate & canDeactivate difference (TODO)
##    36.	routerLink vs href in angular html (TODO)
##    37.	CanActivate	Check that access is allowed before going to a route (TODO)
##    38.	CanActivateChild	Check that access is allowed before going to a child route (TODO)
##    39.	CanDeactivate	Decides if a route can be deactivated (TODO)
##    40.	Resolve	Retrieves data before loading a route (TODO)
##    41.	CanLoad	Checks that access is allowed before loading a module (TODO)
##    42.	providedIn – service injectable – any platform and root (TODO)
##    43.	custom pipe & custom directive (TODO)
##    44.	provider object literal (TODO)
##    45.	Alternative class providers (TODO)
##    46.	Value providers (TODO)
##    47.	Factory providers (TODO)
##    48.	access modifiers in TypeScript: public, private and protected.

`Public`:

Accessible from anywhere. Default visibility

`Private`:

 Accessible only within the declaring class.

`Protected`: 

Accessible within the declaring class and its subclasses.



##    49.	Hot vs cold observables (TODO)
##    50.	Multicasting – hot  (TODO)
##    51.	Unicasting cold (TODO)
##    52.	Creational operators (TODO)

https://rxjs.dev/guide/operators

##    53.	Conditional operators (TODO)
##    54.	Combinational operators (TODO)
##    55.	Error handling operators (TODO)
##    56.	Transformational operators (TODO) 
##    57.	fromEvent() rxjs (TODO)
##    58.	Behaviour subject (TODO)
##    59.	ReplaySubject (TODO)
##    60.	AsyncSubject (TODO)
##    61.	Change detection strategy – how it works (TODO)
##    62.	setup and teardown functions
##    63.	Event loop and priortisation

The event loop is a fundamental concept in JavaScript, essential for understanding how asynchronous operations are handled. It allows JavaScript to perform non-blocking operations despite being single-threaded. Here's an in-depth look at the event loop, including how it works and how it prioritizes tasks.

### Event Loop

#### How It Works:
1. **Call Stack**:
    - The call stack is where the JavaScript engine keeps track of function calls.
    - When a function is invoked, it’s pushed onto the call stack.
    - When the function completes, it’s popped off the stack.

2. **Event Queue (Task Queue)**:
    - The event queue (or task queue) is where messages (tasks) are queued to be processed.
    - Each message corresponds to a callback function to be executed.

3. **Web APIs**:
    - Web APIs (provided by the browser) handle asynchronous tasks like `setTimeout`, AJAX calls, DOM events, etc.
    - Once an asynchronous task is complete, a callback function is added to the event queue.

4. **Event Loop**:
    - The event loop continuously checks the call stack and the event queue.
    - If the call stack is empty, the event loop dequeues the first message from the event queue and pushes its associated callback onto the call stack.
    - This process ensures that asynchronous callbacks are executed only when the stack is clear.

#### Steps in the Event Loop:
1. **Check Call Stack**: If the call stack is not empty, the event loop waits.
2. **Check Event Queue**: If the call stack is empty, the event loop looks at the event queue.
3. **Execute Callback**: The event loop takes the first callback from the event queue and pushes it onto the call stack, executing it.

### Prioritization

JavaScript prioritizes tasks using different queues and a microtask queue. Here's how prioritization works:

1. **Macro Tasks (Tasks)**:
    - Macro tasks (or simply tasks) include events like `setTimeout`, `setInterval`, and I/O operations.
    - Each iteration of the event loop processes one macro task from the event queue.

2. **Micro Tasks (Microtask Queue)**:
    - Microtasks are tasks that need to be executed as soon as possible after the current execution context.
    - Promises and `MutationObserver` callbacks are examples of microtasks.
    - Microtasks are processed immediately after the currently executing script and before any additional rendering or the next macro task.

#### Prioritization Steps:
1. **Execution Context**: Execute the top item on the call stack until it is empty.
2. **Microtask Queue**: Process all microtasks in the microtask queue. If new microtasks are added while processing, continue processing until the queue is empty.
3. **Render**: Perform any rendering updates required by the browser.
4. **Macro Task Queue**: Process the next macro task from the task queue.

#### Example:

```javascript
console.log('Start');

setTimeout(() => {
    console.log('Timeout');
}, 0);

Promise.resolve().then(() => {
    console.log('Promise');
});

console.log('End');
```

**Output**:
```
Start
End
Promise
Timeout
```

**Explanation**:
1. `console.log('Start')` is executed and logged immediately.
2. `setTimeout` is called, its callback is added to the macro task queue.
3. `Promise.resolve().then` is called, its callback is added to the microtask queue.
4. `console.log('End')` is executed and logged immediately.
5. The current execution context is complete, so the event loop checks the microtask queue and executes the promise callback, logging `Promise`.
6. After the microtask queue is empty, the event loop moves to the macro task queue and executes the timeout callback, logging `Timeout`.

### Summary

- The **call stack** handles function invocation and execution.
- The **event queue** holds tasks (macro tasks) like `setTimeout` and I/O operations.
- The **microtask queue** holds microtasks like promise resolutions and `MutationObserver` callbacks.
- The **event loop** continuously checks and processes these queues, prioritizing microtasks over macro tasks to ensure timely execution of critical asynchronous code.

Understanding the event loop and task prioritization is crucial for writing efficient and performant asynchronous JavaScript code.

##    64.	Authentication v/s Authorisation

Auhentication is verifying the true identity of a user or entity, while authorization determines
what a user can access and ensures that a user or entity receives the right access or permissions in a system. Authentication is a prerequisite to authorization. 

##    65.	Script tag: regular v/s async v/s defer


In HTML, you can include JavaScript using the `<script>` tag. There are different ways to load and execute JavaScript using attributes like `async` and `defer`. Here's a comparison of `regular`, `async`, and `defer` script loading:

### Regular Script
```html
<script src="script.js"></script>
```
- **Blocking**: The browser stops rendering the HTML until the script is downloaded and executed.
- **Execution Order**: Scripts are executed in the order they appear in the document.
- **Usage**: Suitable for scripts that need to manipulate the DOM or depend on the document being parsed up to that point.

### Async Script
```html
<script src="script.js" async></script>
```
- **Non-blocking**: The browser continues to parse the HTML while the script is being downloaded.
- **Execution**: The script is executed as soon as it is downloaded, which might be before or after the document is fully parsed.
- **Execution Order**: Scripts with `async` are not guaranteed to execute in the order they appear. They execute as soon as they are available.
- **Usage**: Suitable for scripts that do not depend on each other or on the DOM being fully parsed, such as analytics or ads.

### Defer Script
```html
<script src="script.js" defer></script>
```
- **Non-blocking**: The browser continues to parse the HTML while the script is being downloaded.
- **Execution**: The script is executed after the document has been fully parsed but before the `DOMContentLoaded` event.
- **Execution Order**: Scripts with `defer` are guaranteed to execute in the order they appear in the document.
- **Usage**: Suitable for scripts that need to be executed after the document is fully parsed but before other events (e.g., initialization scripts).

### Comparison Table

| Attribute | Blocking | Execution Time | Execution Order | Use Case |
|-----------|----------|----------------|-----------------|----------|
| None      | Yes      | Immediately    | In order        | DOM manipulation scripts that need to run immediately. |
| async     | No       | As soon as possible | Not guaranteed  | Independent scripts like analytics or ads. |
| defer     | No       | After HTML parsing | In order        | Initialization scripts that depend on the fully parsed DOM. |

### Example Usage

To demonstrate, here's how you might use all three types in a single HTML document:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Script Loading Example</title>
    <script src="script1.js"></script> <!-- Regular script -->
    <script src="script2.js" async></script> <!-- Async script -->
    <script src="script3.js" defer></script> <!-- Defer script -->
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>
```

### Key Points
- Use `async` for scripts that are independent and can load in any order.
- Use `defer` for scripts that need to maintain order and should execute after the document is parsed.
- Use regular script tags for scripts that need to execute immediately and may depend on the document being parsed up to that point.