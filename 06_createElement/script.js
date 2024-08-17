// const h2 = React.createElement('h2', {className: 'subheading'}, 'Hello React');
// const root = ReactDom.createRoot(document.querySelector('#root'));
// root.render(h2);

// const container = React.createElement('h2', { className: 'subheading' }, 'Hello React');
// const root = ReactDOM.createRoot(document.querySelector('#root'));
// root.render(container);


// example
const container = React.createElement(
  'div',
  { className: 'subheading' },
  [
    React.createElement('section', {}, [
      React.createElement(
        'p',
        {},
        'the libray fro web and native user interfaces')
    ])
  ]
);
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(container);     