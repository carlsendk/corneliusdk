import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="info"
          className={`${this.props.article === 'info' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">PRAKTISK INFO</h2>
          <p>Dåben finder sted i Hans Egedes Kirke på Østerbro d. 2. maj kl 10.30. Der er indgang via Vardegade. Herefter følges vi til Restaurant Fryd hvor vi inviterer til brunch. Vi sørger for spændende underholdning til børnene.</p>      
          <p>Adressen til Restaurant Fryd er: Hamborg Plads 6, 2150 Nordhavn</p>
          <p>Tilmelding inden 3. april til Jon: 28891300 eller Mette: 20685668</p>
          <span className="image main">
           <img src={pic01} alt=""/>
          </span>
          {close}
        </article>
       
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">TRANSPORT & PARKERING</h2>
          <p>
          Kirken ligger på Vardegade, og i maj vil der både være tog, Metro og busser der fører der til. Restaurant Fryd ligger lige ved siden af hvor vi bor, i nybyggede lokaler under BigBio biografen. 
          </p>
          <p>
            Hvis I kører i bil og gerne vil parkere tæt på kirken, så skal I være hurtige og snuppe en af de parkeringspladser der er på Vordingborggade. 
          </p>
          <p>Alternativt kan I parkere bilen i parkeringshuset P-hus Lüders i Helsinkigade, det tager nemlig maks 12 minutter at gå derfra, og parkeringshuset ligger kun to minutter fra den restaurant vi skal være på.  
          </p>  
          <span className="image main">
          <a href="https://www.google.com/maps/d/u/0/viewer?mid=1uKbC-2shbH7GWccyvkOn02hUxWLAYNlt&hl=en&ll=55.705772331969065%2C12.594151860064699&z=16">
          <img src={pic02} alt="" /></a>
          </span>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Ønskelisten</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
          <ul style="list-style-type:disc;">
            <li>Uldstrømper og ulddragter str.92</li>
            <li>Magna-tiles</li>
            <li>Magformers</li>
            <li>Magsmarters</li>
            <li>BRIO</li>
            <li>Duplo</li>
            <li>Goki gåbil i metal/Sølv med lædersæde</li>
            <li>Gode højtlæsningsbøger fx Den kæmpestore pære eller Grimms illustrerede eventyr</li>
            <li>Højdemåler</li>
            <li>Stableklodser</li>
            <li>Uro med solsystemet: https://www.karrusella.dk/indretning/uroer/1920/uro-solsystem</li>
            <li>Kirsebærtræ</li>
          </ul>
          </p>
          {close}
        </article>
        </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
