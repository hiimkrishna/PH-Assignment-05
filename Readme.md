1. getElementById is we can get the element using the id property given in the html and getElementsByClassName is we can get the element using the class property.
querySelector is a more general approach to solve the same thing. like here we can target any element using their id or class using it. we just need to explicitly mention the property. And in querySelector it will take the first value but in querySelectorAll it will take all the value with that property.
i will create a new element using document.createElement() and insert it using appendChild method.
Event bubbling is like in the dom tree wherever the event it triggered fro there we can go up and access the parent, sibling or the grandparent or the targetted node.
Event delegation is a approach to handle event bubbling in a more efficient eay.
in preventDefault() we use it to stop from reloading whenever we use form submit, But stopPropogation() methods stops the event from bubbling up.