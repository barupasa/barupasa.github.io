const Greeting = () => {
    const greetings = [
      'Hello!',
      'Hi there!',
      'Welcome!',
      'Greetings!',
      'Nice to see you!',
    ];
  
    const randomIndex = Math.floor(Math.random() * greetings.length);
    const randomGreeting = greetings[randomIndex];
  
    return React.createElement('h2', null, randomGreeting);
  };
  
  ReactDOM.render(React.createElement(Greeting, null), document.getElementById('greeting'));
  