# react-paint
React implementation of a simple paint tool in html5's canvas.

It consists of a canvas, a brush tool with color and width, and undo and redo options.

## How To Run It
Git clone this repository and, inside the folder, do:
```
npm i
npm start
```

Otherwise, I will publish it as a github page in <http://kwirke.github.io/react-paint> for everyone's delight.

## How To Test It
After git cloning this repository and running `npm i`, just do:
```
npm test
```

## About Time-Travelling (undo/redo)
The canvas time-travelling functionality has been implemented using **Redux** 
and `CanvasRenderingContext2D.drawImage()` and `.getImageData()`. This is 
because in the worst case, storing strokes and reproducing them occupies 
more data than storing the image itself, and its application would run
slower in most of the cases. And, for that matter, the implementation 
would be way too bigger for a project of this size and scope.

If someone wants to implement the time-travelling storing and reproducing
strokes, I would recommend using an approach similar to Event-Sourcing:
Storing every now and then a snapshot or summary of previous N events 
with `CanvasRenderingContext2D.getImageData()` anyway.
