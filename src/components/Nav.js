import React, { Component } from 'react'
import styles from "../styles/nav.module.scss";

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: true
    }
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState((state) => {
      return {isOpen: !state.isOpen}
    })
  }

  render(props) {
    return (
      <div>
      <div className={styles.container}>
        {/*Desktop Nav */}
        <div className={styles.linkContainer}>
          <div className={styles.branding} onClick={this.toggleNav}>Logo</div>
          <ul className={styles.navLinks}>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {/*Nav Container*/}
      <div className={styles.mobileContainer}></div>
      <div className={this.state.isOpen ? styles.show : styles.hide} onClick={() => {this.toggleNav()}}>
      
      </div>
    </div>
    )
  }
}



export default Nav;
