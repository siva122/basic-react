/*
<div id="parent">
<div id="container">
<h1>iam h1</h1>
<div>
</div>
Reactelement object converted into html then browser undertsand
*/

// const heading = React.createElement(
//   'h1',
//   { className: 'test' },
//   'Hello world from React'
// );
const myDom = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child1' }, [
    React.createElement('h1', {}, 'iam an h1 tag'),
    React.createElement('h2', {}, 'iam an h2 tag'),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', {}, 'iam an h1 tag'),
    React.createElement('h2', {}, 'iam an h2 tag'),
  ]),
]);
//jsx
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myDom);
