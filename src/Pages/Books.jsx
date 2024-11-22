import Bookcard from "../Components/Card.jsx";
import Header from "../Components/Header.jsx";
import bookPic from '../assets/nsff.jpg'
import bookPic1 from '../assets/gm.jpg'
import bookPic2 from '../assets/sjfh.jpg'
import bookPic3 from '../assets/ggota.jpg'
import bookPic4 from '../assets/km.jpg'

function Books() {

  return (
    <>
      <Header></Header>
      <Bookcard title="Nympho shark fuck frenzy" bookPic={bookPic} shoplink="https://www.adlibris.com/se/bok/nympho-shark-fuck-frenzy-9781955745710" price="224"/>
      <Bookcard title="Gestapo mars" bookPic={bookPic1} shoplink="https://www.adlibris.com/se/bok/gestapo-mars-9781783297351" price="110"/>
      <Bookcard title="Spermjackers from hell" bookPic={bookPic2} shoplink="https://www.adlibris.com/se/bok/spermjackers-from-hell-9781621052470" price="181"/>
      <Bookcard title="Go-go girls of the apocalypse" bookPic={bookPic3} shoplink="https://www.adlibris.com/se/bok/go-go-girls-of-the-apocalypse-9781416552253" price="277"/>
      <Bookcard title="Kommunistiska manifestet" bookPic={bookPic4} shoplink="https://www.adlibris.com/se/bok/kommunistiska-manifestet-9789177813071" price="90"/>
    </>
  );
}

export default Books;