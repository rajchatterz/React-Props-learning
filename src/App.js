import keyConceptsImage from './assets/images/key-concepts.png';
import Header from './components/Header';

import Todo from './components/Todo'
const concepts = [
  {
    title: 'Components',

    description:
      'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
  },
  {
    title: 'State',
   
    description:
      'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
  },
  {
    title: 'Events',

    description:
      'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
  },
];

function App() {
  return (
    <div>
      <Header/>
      <ul>
      <Todo name={concepts} />
      </ul>
    </div>
  );
}

export default App;
