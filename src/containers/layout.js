import React from 'react'
import { connect } from 'react-redux'
import styles from './app.css'

const Layout = (props) => {
  const {form} = props

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        Start New Claim
      </div>
      <div className={styles.body}>
        <div className={styles.formProgressC}>
          <div className={styles.menu}>
            <div className={styles.menuItem}>
              Your Information
              {form.currentSection === 'yourInformation' &&
                <div className={styles.selectedItem} />
              }
            </div>
            <div className={styles.menuItem}>
              Defendant's Info
              {form.currentSection === 'defendantsInfo' &&
                <div className={styles.selectedItem} />
              }
            </div>
            <div className={styles.menuItem}>
              Claim Information
              {form.currentSection === 'claimInformation' &&
                <div className={styles.selectedItem} />
              }
            </div>
            <div className={styles.menuItem}>
              Agent of service
              {form.currentSection === 'agentOfService' &&
                <div className={styles.selectedItem} />
              }
            </div>
            <div className={styles.menuItem}>
              Filing fees
              {form.currentSection === 'fillingFees' &&
                <div className={styles.selectedItem} />
              }
            </div>
            <div className={styles.menuItem}>
              Review
              {form.currentSection === 'review' &&
                <div className={styles.selectedItem} />
              }
            </div>
            <div className={styles.menuItem}>
              Submit
              {form.currentSection === 'submit' &&
                <div className={styles.selectedItem} />
              }
            </div>
          </div>
          <div className={styles.menuBar} />
        </div>
        <div className={styles.formC}>
          {props.children}
        </div>
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    form: state.app
  }
}

export default connect(mapStateToProps)(Layout)
