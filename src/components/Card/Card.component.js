import './Card.styles.css';

const Card = ({ user }) => {
    const { first_name, last_name, email, avatar } = user;

    return(
        <div className='usercard-info'>
            <img src={avatar} alt='avatar' />
            <h3>{`Name: ${first_name} ${last_name}`}</h3>
            <h3>{`Email: ${email}`}</h3>
        </div>
    )
}

export default Card;