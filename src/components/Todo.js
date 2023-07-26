import componentsImage from '../assets/images/components.png'
import stateImage from '../assets/images/state.png'
import eventsImage from '../assets/images/events.png'


const Todo = (props) =>{
    return (
        <ul id="concepts">
        <li className="concept">
          <img src={componentsImage} alt="TODO: TITLE" />
          <h2>{props.name[0].title}</h2>
          <h4>{props.name[0].description}</h4>
        </li>
        <li className="concept">
          <img src={stateImage} alt="TODO: TITLE" />
          <h2>{props.name[1].title}</h2>
          <h4>{props.name[1].description}</h4>
        </li>
        <li className="concept">
          <img src={eventsImage} alt="TODO: TITLE" />
          <h2>{props.name[2].title}</h2>
          <h4>{props.name[2].description}</h4>
        </li>
      </ul>
    )
}
export default Todo