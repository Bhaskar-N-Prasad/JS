# Projects related to DOM

## project Link 

[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## project 1

```javascript
function clicked(z) {
  const x = document
    .querySelector('body')
    .setAttribute('style', `background-color:${z};`);
}

const y = document.querySelectorAll('.button');
console.log(y);
y.forEach((button) => {
  const x = button.getAttribute('id');
  if (
    (document.getElementById(x).onclick = () => {
      if (true) {
        console.log(x);
        clicked(x);
      }
    })
  );
});
```