import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>

    <div className="content">
      <div className="inner">
        <h1>Velkommen til Cornelius dåb</h1>
        <p>Den 2. maj 2020 kl. 10.30<br></br>
        Tilmelding inden 3. april til Jon: 28891300 eller Mette: 20685668</p>
    
		</div>
		</div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('info')
            }}
          >
             Information
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('transport')
            }}
          >
            Transport & Parkering
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('liste')
            }}
          >
            Ønskeliste
          </button>
        </li>

      </ul>
    </nav>
    <span class="op-media fa fa-map-marker fa-5x"></span>
      <h3>
        Praktisk info
      </h3>
      <p>Hans Egedes Kirke på Østerbro - Vardegade 14 2100 København Ø</p>
		<span class="op-media fa fa-train fa-5x"></span>
		<h3>
      Transport og parkering
    </h3>
    <p>Parkering: P-hus Lüders i Helsinkigade,- S-tog: Nordhavn Station </p>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
