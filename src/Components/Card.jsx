import '../Card.css'

function Bookcard(props) {

    return (
    <div className="bookcard-container" ><a href={props.shoplink}>
      <img className="book-cover" src={props.bookPic} alt="bookcover"/>
      <div className="bookcard-textcontainer">
        <h3 className="book-title">{props.title}</h3>
        <p className="book-pricetag">{props.price}:-</p>
      </div>
    </a></div>
  )
}

export default Bookcard;
