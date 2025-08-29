1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:getElementById=A Method that select an element by specific ID
    getElementsByClassName= A method that select elements by specific class name
    querySelector= A method that select the first element matched Buy specific CSS selector
    querySelectorAll= A method that selects all elements matched buy specific CSS selector


2.How do you create and insert a new element into the DOM?
Ans: You can create an element by document.createElement(), And insert it by using .appendChild method.


3.What is Event Bubbling and how does it work?
Ans:Event bubbling means when an event happens on a child element, it first runs on that element and then moves upward to its parents

4.What is Event Delegation in JavaScript? Why is it useful?
Ans:Event Delegation is a technic where you attach an event listener in a parent and handel events for all of its child elements , instead of using single element in each child .


5.What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault() = stop browsers default behavior 
    stopPropagation() = stops bubbling behavior 