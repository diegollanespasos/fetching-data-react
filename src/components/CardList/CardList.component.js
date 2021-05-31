import Card from '../Card/Card.component';
import './CardList.styles.css';

const CardList = ({ users }) => {
    return(
        <div className='cardlist-container'>
        {
            users.map((user) => <Card key={user.id} user={user}/>)
        }
        </div>
    )
}

export default CardList;