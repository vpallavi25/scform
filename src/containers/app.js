import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styles from './app.css'
import actions from '../actions/app.js'

const AppContainer = (props) => {
  const {next, previous, changeInput, goTo} = props.actions

  const {form} = props

  const {currentStep} = form

  return (
    <div className={styles.container2}>
      {currentStep === 1 &&
        <div className={styles.welcome}>
          <div className={styles.wTitle}>
            Introduction:
          </div>
          <div className={styles.wText}>
            Welcome to the Small Claims Application for California county.
            This application will help you fill out the Small Claims forms you need for your claim or counter-claim.
          </div>
        </div>
      }
      {currentStep === 2 && (
        <div className={styles.fContainer}>
          <div className={styles.f1Title}>
            Please enter your information
          </div>
          <div className={styles.f1Row}>
            <div className={styles.f1Label}>
              Name
            </div>
            <input
              onChange={(e) => changeInput(e.target.value, 'firstName')}
              placeholder='First Name'
              value={form.firstName}
            />
            <input
              onChange={(e) => changeInput(e.target.value, 'lastName')}
              placeholder='Last Name'
              value={form.lastName}
            />
            <input
              onChange={(e) => changeInput(e.target.value, 'middleInitial')}
              placeholder='Middle Initial'
              value={form.middleInitial}
            />
          </div>
          <div className={styles.f1Row}>
            <div className={styles.f1Label}>
              Address
            </div>
            <input
              onChange={(e) => changeInput(e.target.value, 'streetAddress')}
              placeholder='Street'
              value={form.streetAddress}
            />
            <input
              onChange={(e) => changeInput(e.target.value, 'aptNumber')}
              placeholder='Apt#'
              value={form.aptNumber}
            />
            <input
              onChange={(e) => changeInput(e.target.value, 'city')}
              placeholder='City'
              value={form.city}
            />
          </div>
          <div className={styles.f1Row}>
            <div className={styles.f1Label} />
            <input
              onChange={(e) => changeInput(e.target.value, 'state')}
              placeholder='State'
              value={form.state}
            />
            <input
              onChange={(e) => changeInput(e.target.value, 'zip')}
              placeholder='Zip'
              value={form.zip}
            />
          </div>
          <div className={styles.f1Row}>
            <div className={styles.f1Label}>
              Phone
            </div>
            <input
              onChange={(e) => changeInput(e.target.value, 'phone')}
              value={form.phone}
            />
          </div>
          <div className={styles.f1Row}>
            <div className={styles.f1LabelCb} />
            <input
              onChange={(e) => changeInput(e.target.checked, 'mailDifferent')}
              type='checkbox'
              checked={form.mailDifferent}
            />
            <div>Check if mailing address is different from Residence/Business address</div>
          </div>

          {form.mailDifferent &&
            <div>
              <div className={styles.f1Row}>
                <div className={styles.f1Label}>
                  Address
                </div>
                <input
                  onChange={(e) => changeInput(e.target.value, 'streetAddress_2')}
                  placeholder='Street'
                  value={form.streetAddress_2}
                />
                <input
                  onChange={(e) => changeInput(e.target.value, 'aptNumber_2')}
                  placeholder='Apt#'
                  value={form.aptNumber_2}
                />
                <input
                  onChange={(e) => changeInput(e.target.value, 'city_2')}
                  placeholder='City'
                  value={form.city_2}
                />
              </div>
              <div className={styles.f1Row}>
                <div className={styles.f1Label} />
                <input
                  onChange={(e) => changeInput(e.target.value, 'state_2')}
                  placeholder='State'
                  value={form.state_2}
                />
                <input
                  onChange={(e) => changeInput(e.target.value, 'zip_2')}
                  placeholder='Zip'
                  value={form.zip_2}
                />
              </div>
            </div>
          }

          <div className={styles.f1Row}>
            <div className={styles.f1LabelCb} />
            <input
              onChange={(e) => changeInput(e.target.checked, 'addPlainTiff')}
              type='checkbox'
              checked={form.addPlainTiff}
            />
            <div>Check if you want to add another plaintiff</div>
          </div>

          {form.addPlainTiff &&
            <div>
              <div className={styles.f1Row}>
                <div className={styles.f1Label}>
                  Name
                </div>
                <input
                  onChange={(e) => changeInput(e.target.value, 'firstName_person2')}
                  placeholder='First Name'
                  value={form.firstName_person2}
                />
                <input
                  onChange={(e) => changeInput(e.target.value, 'lastName_person2')}
                  placeholder='Last Name'
                  value={form.lastName_person2}
                />
                <input
                  onChange={(e) => changeInput(e.target.value, 'middleInitial_person2')}
                  placeholder='Middle Initial'
                  value={form.middleInitial_person2}
                />
              </div>
              <div className={styles.f1Row}>
                <div className={styles.f1Label}>
                  Address
                </div>
                <input
                  onChange={(e) => changeInput(e.target.value, 'streetAddress_person2')}
                  placeholder='Street'
                  value={form.streetAddress_person2}
                />
                <input
                  onChange={(e) => changeInput(e.target.value, 'aptNumber_person2')}
                  placeholder='Apt#'
                  value={form.aptNumber_person2}
                />
                <input
                  onChange={(e) => changeInput(e.target.value, 'city_person2')}
                  placeholder='City'
                  value={form.city_person2}
                />
              </div>
              <div className={styles.f1Row}>
                <div className={styles.f1Label} />
                <input
                  onChange={(e) => changeInput(e.target.value, 'state_person2')}
                  placeholder='State'
                  value={form.state_person2}
                />
                <input
                  onChange={(e) => changeInput(e.target.value, 'zip_person2')}
                  placeholder='Zip'
                  value={form.zip_person2}
                />
              </div>
              <div className={styles.f1Row}>
                <div className={styles.f1Label}>
                  Phone
                </div>
                <input
                  onChange={(e) => changeInput(e.target.value, 'phone_person2')}
                  value={form.phone_person2}
                />
              </div>
            </div>
          }

          <div className={styles.f1Row}>
            <div className={styles.f1Label}>
              Are you?
            </div>
            <select
              onChange={(e) => changeInput(e.target.value, 'personType')}
              value={form.personType}
            >
              <option>Select below</option>
              <option value='individual'>Individual</option>
              <option value='corporation'>Corporation</option>
              <option value='partnership'>Partnership</option>
              <option value='association'>Association</option>
              <option value='publicEntity'>Public Entity/Government Agency</option>
            </select>
          </div>
        </div>
      )}
      {currentStep === 3 && (
        <div className={styles.f2Container}>
          <div className={styles.f2Title}>
            Is this Corporation doing business under a fictitious name?
          </div>
          <div className={styles.f1Row}>
            <input
              type='radio'
              name='fictitiousNameCorp'
              checked={form.fictitiousNameCorp === 'yes'}
              value='yes'
              onChange={(e) => changeInput(e.target.value, 'fictitiousNameCorp')}
            />
            <div>Yes</div>
          </div>
          <div className={styles.f1Row}>
            <input
              type='radio'
              name='fictitiousNameCorp'
              value='no'
              onChange={(e) => changeInput(e.target.value, 'fictitiousNameCorp')}
              checked={form.fictitiousNameCorp === 'no'}
            />
            <div>No</div>
          </div>
          <div className={styles.f1Row}>
            <div className={styles.f2Label}>
              Business Name
            </div>
            <div className={styles.f2Input}>
              <input
                onChange={(e) => changeInput(e.target.value, 'businessName')}
                value={form.businessName}
                disabled={form.fictitiousNameCorp !== 'yes'}
              />
            </div>
          </div>
          <div className={styles.f1Row}>
            <div className={styles.f2Label}>
              Business Name Statement Number
            </div>
            <div className={styles.f2Input}>
              <input
                onChange={(e) => changeInput(e.target.value, 'businessNameStatement')}
                value={form.businessNameStatement}
                disabled={form.fictitiousNameCorp !== 'yes'}
              />
            </div>
          </div>
          <div className={styles.f1Row}>
            <div className={styles.f2Label}>
              Statement Expiration Date
            </div>
            <div className={styles.f2Input}>
              <input
                type='date'
                onChange={(e) => changeInput(e.target.value, 'statementExpirationDate')}
                value={form.statementExpirationDate}
                disabled={form.fictitiousNameCorp !== 'yes'}
              />
            </div>
          </div>
        </div>
      )}
      {currentStep === 4 && (
        <div className={styles.fContainer}>
          <div className={styles.f1Title}>
            Please enter information of person you are suing
          </div>
          <div className={styles.f1Row}>
            <div className={styles.f1Label}>
              Name
            </div>
            <input
              onChange={(e) => changeInput(e.target.value, 'firstName_suing')}
              placeholder='First Name'
              value={form.firstName_suing}
            />
            <input
              onChange={(e) => changeInput(e.target.value, 'lastName_suing')}
              placeholder='Last Name'
              value={form.lastName_suing}
            />
            <input
              onChange={(e) => changeInput(e.target.value, 'middleInitial_suing')}
              placeholder='Middle Initial'
              value={form.middleInitial_suing}
            />
          </div>
          <div className={styles.f1Row}>
            <div className={styles.f1Label}>
              Address
            </div>
            <input
              onChange={(e) => changeInput(e.target.value, 'streetAddress_suing')}
              placeholder='Street'
              value={form.streetAddress_suing}
            />
            <input
              onChange={(e) => changeInput(e.target.value, 'aptNumber_suing')}
              placeholder='Apt#'
              value={form.aptNumber_suing}
            />
            <input
              onChange={(e) => changeInput(e.target.value, 'city_suing')}
              placeholder='City'
              value={form.city_suing}
            />
          </div>
          <div className={styles.f1Row}>
            <div className={styles.f1Label} />
            <input
              onChange={(e) => changeInput(e.target.value, 'state_suing')}
              placeholder='State'
              value={form.state_suing}
            />
            <input
              onChange={(e) => changeInput(e.target.value, 'zip_suing')}
              placeholder='Zip'
              value={form.zip_suing}
            />
          </div>
          <div className={styles.f1Row}>
            <div className={styles.f1Label}>
              Phone
            </div>
            <input
              onChange={(e) => changeInput(e.target.value, 'phone_suing')}
              value={form.phone_suing}
            />
          </div>
          <div className={styles.f1Row}>
            <div className={styles.f1LabelCb} />
            <input
              onChange={(e) => changeInput(e.target.checked, 'mailDifferent_suing')}
              type='checkbox'
              checked={form.mailDifferent_suing}
            />
            <div>Check if mailing address is different from Residence/Business address</div>
          </div>

          {form.mailDifferent_suing &&
            <div>
              <div className={styles.f1Row}>
                <div className={styles.f1Label}>
                  Address
                </div>
                <input
                  onChange={(e) => changeInput(e.target.value, 'streetAddress_suing_2')}
                  placeholder='Street'
                  value={form.streetAddress_suing_2}
                />
                <input
                  onChange={(e) => changeInput(e.target.value, 'aptNumber_suing_2')}
                  placeholder='Apt#'
                  value={form.aptNumber_suing_2}
                />
                <input
                  onChange={(e) => changeInput(e.target.value, 'city_suing_2')}
                  placeholder='City'
                  value={form.city_suing_2}
                />
              </div>
              <div className={styles.f1Row}>
                <div className={styles.f1Label} />
                <input
                  onChange={(e) => changeInput(e.target.value, 'state_suing_2')}
                  placeholder='State'
                  value={form.state_suing_2}
                />
                <input
                  onChange={(e) => changeInput(e.target.value, 'zip_suing_2')}
                  placeholder='Zip'
                  value={form.zip_suing_2}
                />
              </div>
            </div>
          }

          <div className={styles.f1Row}>
            <div className={styles.f1LabelCb} />
            <input
              onChange={(e) => changeInput(e.target.checked, 'addPlainTiff_suing')}
              type='checkbox'
              checked={form.addPlainTiff_suing}
            />
            <div>Check if you want to add another defendant</div>
          </div>

          {form.addPlainTiff_suing &&
            <div>
              <div className={styles.f1Row}>
                <div className={styles.f1Label}>
                  Name
                </div>
                <input
                  onChange={(e) => changeInput(e.target.value, 'firstName_suing_person2')}
                  placeholder='First Name'
                  value={form.firstName_suing_person2}
                />
                <input
                  onChange={(e) => changeInput(e.target.value, 'lastName_suing_person2')}
                  placeholder='Last Name'
                  value={form.lastName_suing_person2}
                />
                <input
                  onChange={(e) => changeInput(e.target.value, 'middleInitial_suing_person2')}
                  placeholder='Middle Initial'
                  value={form.middleInitial_suing_person2}
                />
              </div>
              <div className={styles.f1Row}>
                <div className={styles.f1Label}>
                  Address
                </div>
                <input
                  onChange={(e) => changeInput(e.target.value, 'streetAddress_suing_person2')}
                  placeholder='Street'
                  value={form.streetAddress_suing_person2}
                />
                <input
                  onChange={(e) => changeInput(e.target.value, 'aptNumber_suing_person2')}
                  placeholder='Apt#'
                  value={form.aptNumber_suing_person2}
                />
                <input
                  onChange={(e) => changeInput(e.target.value, 'city_suing_person2')}
                  placeholder='City'
                  value={form.city_suing_person2}
                />
              </div>
              <div className={styles.f1Row}>
                <div className={styles.f1Label} />
                <input
                  onChange={(e) => changeInput(e.target.value, 'state_suing_person2')}
                  placeholder='State'
                  value={form.state_suing_person2}
                />
                <input
                  onChange={(e) => changeInput(e.target.value, 'zip_suing_person2')}
                  placeholder='Zip'
                  value={form.zip_suing_person2}
                />
              </div>
              <div className={styles.f1Row}>
                <div className={styles.f1Label}>
                  Phone
                </div>
                <input
                  onChange={(e) => changeInput(e.target.value, 'phone_suing_person2')}
                  value={form.phone_suing_person2}
                />
              </div>
            </div>
          }

          <div className={styles.f3Row}>
            <div className={styles.f3Label}>
              Is the person you are suing?
            </div>
            <select
              onChange={(e) => changeInput(e.target.value, 'personType_suing')}
              value={form.personType_suing}
              className={styles.selectHeight}
            >
              <option>Select below</option>
              <option value='individual'>Individual</option>
              <option value='corporation'>Corporation</option>
              <option value='partnership'>Partnership</option>
              <option value='association'>Association</option>
              <option value='publicEntity'>Public Entity/Government Agency</option>
            </select>
          </div>
        </div>
      )}
      {currentStep === 5 && (
        <div className={styles.f2Container}>
          <div className={styles.f2Title}>
            Is this Corporation doing business under a fictitious name?
          </div>
          <div className={styles.f1Row}>
            <input
              type='radio'
              name='fictitiousNameCorp_suing'
              checked={form.fictitiousNameCorp_suing === 'yes'}
              value='yes'
              onChange={(e) => changeInput(e.target.value, 'fictitiousNameCorp_suing')}
            />
            <div>Yes</div>
          </div>
          <div className={styles.f1Row}>
            <input
              type='radio'
              name='fictitiousNameCorp_suing'
              value='no'
              onChange={(e) => changeInput(e.target.value, 'fictitiousNameCorp_suing')}
              checked={form.fictitiousNameCorp_suing === 'no'}
            />
            <div>No</div>
          </div>
          <div className={styles.f1Row}>
            <div className={styles.f2Label}>
              Business Name
            </div>
            <div className={styles.f2Input}>
              <input
                onChange={(e) => changeInput(e.target.value, 'businessName_suing')}
                value={form.businessName_suing}
                disabled={form.fictitiousNameCorp_suing !== 'yes'}
              />
            </div>
          </div>
          <div className={styles.f1Row}>
            <div className={styles.f2Label}>
              Business Name Statement Number
            </div>
            <div className={styles.f2Input}>
              <input
                onChange={(e) => changeInput(e.target.value, 'businessNameStatement_suing')}
                value={form.businessNameStatement_suing}
                disabled={form.fictitiousNameCorp_suing !== 'yes'}
              />
            </div>
          </div>
          <div className={styles.f1Row}>
            <div className={styles.f2Label}>
              Statement Expiration Date
            </div>
            <div className={styles.f2Input}>
              <input
                type='date'
                onChange={(e) => changeInput(e.target.value, 'statementExpirationDate_suing')}
                value={form.statementExpirationDate_suing}
                disabled={form.fictitiousNameCorp_suing !== 'yes'}
              />
            </div>
          </div>
        </div>
      )}
      {currentStep === 6 && (
        <div className={styles.f2Container}>
          <div className={styles.f5Row}>
            <div>
              How much money do the Defendant(s) owe you?
            </div>
            <div>
              $
              <input
                onChange={(e) => changeInput(e.target.value, 'moneyOwes')}
                value={form.moneyOwes}
              />
            </div>
          </div>
          <div className={styles.f5Row}>
            <div>
              Why does Defendant owe you money?
            </div>
            <div>
              <textarea
                cols='30'
                rows='5'
                onChange={(e) => changeInput(e.target.value, 'whyOwes')}
                value={form.whyOwes}
              />
            </div>
          </div>
          <div className={styles.f5Dates}>
            <div>
              Did this happen on a specific date or over period of time?
            </div>
            <div className={styles.f5DateRow}>
              <input
                type='radio'
                name='dateType'
                value='specific'
                onChange={(e) => changeInput(e.target.value, 'dateType')}
                checked={form.dateType === 'specific'}
              />
              <div>
                On a specific time
              </div>
              {form.dateType === 'specific' &&
                <div className={styles.f5DatesI}>
                  <input type='date'
                    onChange={(e) => changeInput(e.target.value, 'onSpecificDate')}
                    value={form.onSpecificDate}
                  />
                </div>
              }
            </div>

            <div className={styles.f5DateRow}>
              <input
                type='radio'
                name='dateType'
                value='period'
                onChange={(e) => changeInput(e.target.value, 'dateType')}
                checked={form.dateType === 'period'}
              />
              <div>
                Over period of time
              </div>
              {form.dateType === 'period' &&
                <div className={styles.dateInputs}>
                  <div>from</div>
                  <div>
                    <input type='date'
                      onChange={(e) => changeInput(e.target.value, 'timePeriodFrom')}
                      value={form.timePeriodFrom}
                    />
                  </div>
                  <div>to</div>
                  <div>
                    <input type='date'
                      onChange={(e) => changeInput(e.target.value, 'timePeriodTo')}
                      value={form.timePeriodTo}
                    />
                  </div>
                </div>
              }
            </div>
          </div>
          <div className={styles.f5Row}>
            <div>
              How did you calculate money owed to you? (Do not include court fees for service)
            </div>
            <textarea
              cols='30'
              rows='5'
              onChange={(e) => changeInput(e.target.value, 'moneyOwedCalculation')}
              value={form.moneyOwedCalculation}
            />
          </div>
        </div>
      )}
      {currentStep === 7 && (
        <div className={styles.f6Container}>
          <div className={styles.f6Row}>
            <div>
              Did you ask the defendant to pay?
            </div>
            <div>
              <input
                type='radio'
                name='didYouAskToPay'
                value='yes'
                onChange={(e) => changeInput(e.target.value, 'didYouAskToPay')}
                checked={form.didYouAskToPay === 'yes'}
              />
              Yes
            </div>
            <div>
              <input
                type='radio'
                name='didYouAskToPay'
                value='no'
                onChange={(e) => changeInput(e.target.value, 'didYouAskToPay')}
                checked={form.didYouAskToPay === 'no'}
              />
              No
            </div>
            <div>
              <div style={{marginTop: '10px'}}>(If you answer is No, please provide reason)</div>
              <textarea
                style={{marginTop: '10px'}}
                cols='30'
                rows='5'
                onChange={(e) => changeInput(e.target.value, 'reasonToNoAsk')}
                value={form.reasonToNoAsk}
                disabled={form.didYouAskToPay !== 'no'}
              />
            </div>
          </div>
          <div className={styles.f6Row}>
            <div>
              Why did you select this Court House?
            </div>
            <div>
              <select
                style={{marginTop: '10px'}}
                onChange={(e) => changeInput(e.target.value, 'whyDidSelectThisCourt')}
                value={form.whyDidSelectThisCourt}
              >
                <option>Select from below</option>
                <option value='op1'>Defendant lives/does business here/ my property got damaged/ i was injured</option>
              <option value='op2'>The contract was made/signed/performed/broken by defendant</option>
              <option value='op3'>Where Buyer lives now/lived when contract is signed and claim is about retail installment</option>
              <option value='op4'>Where Buyer lives now/lived when contract is signed and claim is about vehicle finance sale</option>
              <option value='op5'>Where Buyer lives now/lived when contract is signed and claim is about personal, household goods or loans</option>
           
              </select>
            </div>
          </div>
          <div className={styles.f6Row}>
            <div>
              Enter zip code for courthouse location
            </div>
            <div>
              <input
                onChange={(e) => changeInput(e.target.value, 'courthouseZip')}
                value={form.courthouseZip}
                placeholder='zip code'
              />
            </div>
          </div>
          <div className={styles.f6Row}>
            <div>
              Is this claim about attorney-client fee dipute?
            </div>
            <div>
              <input
                type='radio'
                name='AttorneyClientDispute'
                value='yes'
                onChange={(e) => changeInput(e.target.value, 'AttorneyClientDispute')}
                checked={form.AttorneyClientDispute === 'yes'}
              />
              Yes
            </div>
            <div>
              <input
                type='radio'
                name='AttorneyClientDispute'
                value='no'
                onChange={(e) => changeInput(e.target.value, 'AttorneyClientDispute')}
                checked={form.AttorneyClientDispute === 'no'}
              />
              No
            </div>
          </div>
          <div className={styles.f6Row}>
            <div>
              Have you filed more than 12 claims over past 12 months?
            </div>
            <div>
              <input
                type='radio'
                name='twelveDisputes'
                value='yes'
                onChange={(e) => changeInput(e.target.value, 'twelveDisputes')}
                checked={form.twelveDisputes === 'yes'}
              />
              Yes
            </div>
            <div>
              <input
                type='radio'
                name='twelveDisputes'
                value='no'
                onChange={(e) => changeInput(e.target.value, 'twelveDisputes')}
                checked={form.twelveDisputes === 'no'}
              />
              No
            </div>
          </div>
        </div>
      )}
      {currentStep === 8 && (
        <div className={styles.f6Container}>
          <div>How would you like to serve the person?</div>
          <div className={styles.f6Row}>
            <div className={styles.f6RowC}>
              <input
                type='radio'
                name='serveThePerson'
                value='certifiedMail'
                onChange={(e) => changeInput(e.target.value, 'serveThePerson')}
                checked={form.serveThePerson === 'certifiedMail'}
              />
              <div title='Certified mail service can be done only through the court and needs additional $15 fees.'>
                Certified Mail
              </div>
            </div>
            <div className={styles.f6RowC}>
              <input
                type='radio'
                name='serveThePerson'
                value='personalService'
                onChange={(e) => changeInput(e.target.value, 'serveThePerson')}
                checked={form.serveThePerson === 'personalService'}
              />
              <div title='"Personal service" means that someone – NOT a party to the case – must personally delivery the court documents to the other side.'>
                Personal Service
              </div>
            </div>
            <div className={styles.f6RowC}>
              <input
                type='radio'
                name='serveThePerson'
                value='substitutedService'
                onChange={(e) => changeInput(e.target.value, 'serveThePerson')}
                checked={form.serveThePerson === 'substitutedService'}
              />
              <div title='"Substituted service" is used after several attempts to personally serve the papers have failed.'>
                Substituted Service
              </div>
            </div>
          </div>
        </div>
      )}
      {currentStep === 9 && (
        <div className={styles.f6Container}>
          <div className={styles.f6Row}>
            <div>You have following options for filing fees. Select the best applies for you</div>
            <div className={styles.f6RowC}>
              <input
                type='radio'
                name='fillingFeeOption'
                value='payOnline'
                onChange={(e) => changeInput(e.target.value, 'fillingFeeOption')}
                checked={form.fillingFeeOption === 'payOnline'}
              />
              <div title='You can pay fees online after completing the form'>
                Pay filing fees online
              </div>
            </div>
            <div className={styles.f6RowC}>
              <input
                type='radio'
                name='fillingFeeOption'
                value='feeExemption'
                onChange={(e) => changeInput(e.target.value, 'fillingFeeOption')}
                checked={form.fillingFeeOption === 'feeExemption'}
              />
              <div title='Fee exemption is applicable for parties who already been granted fee waiver. Government agencies are exempt from filing fees.'>
                Fee exemption
              </div>
            </div>
            <div className={styles.f6RowC}>
              <input
                type='radio'
                name='fillingFeeOption'
                value='feeWaiver'
                onChange={(e) => changeInput(e.target.value, 'fillingFeeOption')}
                checked={form.fillingFeeOption === 'feeWaiver'}
              />
              <div title='You will need to apply by filling out form FW-001 and filing a Request to Waive Court Fees.'>
                Apply for fee waiver
              </div>
            </div>
          </div>
        </div>
      )}
      {currentStep === 10 && (
        <div>
          <div>
            <div
              className={styles.reviewTitle}
              onClick={() => goTo(2)}
            >
              Your information
            </div>
            <div className={styles.dataC}>
              <div>
                Name: {form.firstName} {form.lastName} {form.middleInitial}
              </div>
              <div>
                Address: {form.streetAddress} {form.aptNumber} {form.city} {form.state} {form.zip}
              </div>
              <div>
                Phone: {form.phone}
              </div>
              <div>
                Person Type: {form.personType}
              </div>
              {form.mailDifferent && (
                <div>
                  <div className={styles.reviewTitle2}>
                    Mailing address is different from Residence/Business address
                  </div>
                  <div>
                    Address: {form.streetAddress_2} {form.aptNumber_2} {form.city_2} {form.state_2} {form.zip_2}
                  </div>
                </div>
              )}

              {form.addPlainTiff && (
                <div>
                  <div className={styles.reviewTitle2}>
                    Defendant #2
                  </div>
                  <div>
                    Name: {form.firstName_person2} {form.lastName_person2} {form.middleInitial_person2}
                  </div>
                  <div>
                    Address: {form.streetAddress_person2} {form.aptNumber_person2} {form.city_person2} {form.state_person2} {form.zip_person2}
                  </div>
                  <div>
                    Phone: {form.phone_person2}
                  </div>
                </div>
              )}
              {form.fictitiousNameCorp && (
                <div>
                  <div
                    className={styles.reviewTitle2}
                    onClick={() => goTo(3)}
                  >
                    Business with fictitious name
                  </div>
                  <div>
                    Business Name: {form.businessName}
                  </div>
                  <div>
                    Business Name Statement Number: {form.businessNameStatement}
                  </div>
                  <div>
                    Statement Expiration Date: {form.statementExpirationDate}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <div
              className={styles.reviewTitle}
              onClick={() => goTo(2)}
            >
              Please enter information of person you are suing
            </div>
            <div className={styles.dataC}>
              <div>
                Name: {form.firstName_suing} {form.lastName_suing} {form.middleInitial_suing}
              </div>
              <div>
                Address: {form.streetAddress_suing} {form.aptNumber_suing} {form.city_suing} {form.state_suing} {form.zip_suing}
              </div>
              <div>
                Phone: {form.phone_suing}
              </div>
              <div>
                Person Type: {form.personType_suing}
              </div>
              {form.mailDifferent_suing && (
                <div>
                  <div className={styles.reviewTitle2}>
                    Mailing address is different from Residence/Business address
                  </div>
                  <div>
                    Address: {form.streetAddress_suing_2} {form.aptNumber_suing_2} {form.city_suing_2} {form.state_suing_2} {form.zip_suing_2}
                  </div>
                </div>
              )}

              {form.addPlainTiff_suing && (
                <div>
                  <div className={styles.reviewTitle2}>
                    Defendant #2
                  </div>
                  <div>
                    Name: {form.firstName_suing_person2} {form.lastName_suing_person2} {form.middleInitial_suing_person2}
                  </div>
                  <div>
                    Address: {form.streetAddress_suing_person2} {form.aptNumber_suing_person2} {form.city_suing_person2} {form.state_suing_person2} {form.zip_suing_person2}
                  </div>
                  <div>
                    Phone: {form.phone_suing_person2}
                  </div>
                </div>
              )}
              {form.fictitiousNameCorp_suing && (
                <div>
                  <div
                    className={styles.reviewTitle2}
                    onClick={() => goTo(3)}
                  >
                    Business with fictitious name
                  </div>
                  <div>
                    Business Name: {form.businessName_suing}
                  </div>
                  <div>
                    Business Name Statement Number: {form.businessNameStatement_suing}
                  </div>
                  <div>
                    Statement Expiration Date: {form.statementExpirationDate_suing}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <div
              style={{marginTop: '10px'}}
              className={styles.reviewTitle}
              onClick={() => goTo(6)}
            >
              Claim Information
            </div>
            <div className={styles.dataC}>
              <div>
                How much money do the Defendant(s) owe you? ${form.moneyOwes}
              </div>
              <div>
                Why does Defendant owe you money? {form.whyOwes}
              </div>
              {form.dateType === 'specific' &&
                <div>
                  specific date: {form.onSpecificDate}
                </div>
              }

              {form.dateType === 'period' &&
                <div>
                  period date: {form.timePeriodTo} - {form.timePeriodFrom}
                </div>
              }
              <div>
                How did you calculate money owed to you? (Do not include court fees for service)
                {form.moneyOwedCalculation}
              </div>
              {form.didYouAskToPay === 'no' &&
                <div>
                  reason to not ask
                  {form.reasonToNoAsk}
                </div>
              }
              <div>
                Why did you select this Court House?

                {form.whyDidSelectThisCourt}
              </div>

              <div>
                This claim about attorney-client fee dipute' "{form.AttorneyClientDispute}"
              </div>

              <div>
                You filed more than 12 claims over past 12 months "{form.twelveDisputes}"
              </div>
            </div>
          </div>
          <div>
            <div
              style={{marginTop: '10px'}}
              className={styles.reviewTitle}
              onClick={() => goTo(8)}
            >
              Agent of service
            </div>
            <div className={styles.dataC}>
              <div>
                How would you like to serve the person? {form.serveThePerson}
              </div>
            </div>
          </div>
          <div>
            <div
              style={{marginTop: '10px'}}
              className={styles.reviewTitle}
              onClick={() => goTo(9)}
            >
              Filing fees
            </div>
            <div className={styles.dataC}>
              <div>
                Filing fees option {form.fillingFeeOption}
              </div>
            </div>
          </div>
        </div>
      )}
      {currentStep === 11 &&
        <div>
          Submit your data
        </div>
      }
      <div
        className={styles.buttons}
        style={{flexDirection: currentStep === 1 ? 'row-reverse' : 'row'}}
      >
        {currentStep > 1 && <div onClick={previous}>Previous</div>}
        {currentStep < 11 && <div onClick={next}>Next</div>}
        {currentStep === 11 && <div onClick={() => window.alert('You have completed filing your small claim process')}>Submit</div>}
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

const mapStateToProps = (state) => ({form: state.app})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
