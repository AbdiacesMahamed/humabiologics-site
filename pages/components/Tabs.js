import { useState } from "react";
import styles from './Tabs.module.css'

function Tabs() {
  // let [One, setOne] = useState(styles.dropDown);
  function dropDown2() {
    if (One === styles.dropDown) {
      setOne(styles.dropDownActive);
    }

    if (One === styles.dropDownActive) {
      setOne(styles.dropDown);
    }
    if (third === styles.dropDownActive) {
      setThird(styles.dropDown);
    }
  }

  let [tabOne, setTabOne] = useState(styles.tabOneClosed);
  function tabOneToggle() {
    if (tabOne === styles.tabOneClosed) {
      setTabThree(styles.tabThreeClosed);
      setTabOne(styles.tabOneActive);
      setTabTwo(styles.tabTwoClosed);
      setTabFour(styles.tabFourClosed)
      
    }

    if (tabOne === styles.tabOneActive) {
      setTabOne(styles.tabOneClosed);
    }
    
  }
  let [tabTwo, setTabTwo] = useState(styles.tabTwoClosed);
  function tabTwoToggle() {
    if (tabTwo === styles.tabTwoClosed) {
      setTabTwo(styles.tabTwoActive);
      setTabOne(styles.tabOneClosed);
      setTabThree(styles.tabThreeClosed)
      setTabFour(styles.tabFourClosed)
    }

    if (tabTwo === styles.tabTwoActive) {
      setTabTwo(styles.tabTwoClosed);
    }
    
    // if (third === styles.tabOneActive) {
    //   setThird(styles.tabOneClosed);
    // }
  }

  let [tabThree, setTabThree] = useState(styles.tabThreeClosed);
  function tabThreeToggle() {
    if (tabThree === styles.tabThreeClosed) {
      setTabThree(styles.tabThreeActive);
      setTabOne(styles.tabOneClosed);
      setTabTwo(styles.tabTwoClosed);
      setTabFour(styles.tabFourClosed)
    }

    if (tabThree === styles.tabThreeActive) {
      setTabThree(styles.tabThreeClosed);
    }
    // if (third === styles.tabOneActive) {
    //   setThird(styles.tabOneClosed);
    // }
  }

  let [tabFour, setTabFour] = useState(styles.tabFourClosed);
  function tabFourToggle() {
    if (tabFour === styles.tabFourClosed) {
      setTabThree(styles.tabThreeClosed);
      setTabOne(styles.tabOneClosed);
      setTabTwo(styles.tabTwoClosed);
      setTabFour(styles.tabFourActive)
    }

    if (tabThree === styles.tabThreeActive) {
      setTabThree(styles.tabThreeClosed);
    }
    // if (third === styles.tabOneActive) {
    //   setThird(styles.tabOneClosed);
    // }
  }


    return (
      <div className={styles.container}>
        <div className={styles.blocTabs}>
          <button
           onClick={tabOneToggle}
          >
            Protocals
          </button>
          <button
            onClick={tabTwoToggle}
          >
            Quality Testing
          </button>
          <button
            onClick={tabThreeToggle}
          >
            Materials Safety Data Sheet
          </button>
          <button
            onClick={tabFourToggle}
          >
            Application Notes
          </button>
        </div>
  
        <div className={styles.contentTabs}>
          <div className={tabOne}>
            <h2>Content 1</h2>
           
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
              vel voluptatum?
            </p>
          </div>

          <div className={tabTwo}>
            <h2>Content 2</h2>
           
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
              vel voluptatum?
            </p>
          </div>


          <div className={tabThree}>
            <h2>Content 3</h2>
           
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
              vel voluptatum?
            </p>
          </div>

          <div className={tabFour}>
            <h2>Content 4</h2>
           
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
              vel voluptatum?
            </p>
          </div>
  
         
           
          
  
         
            
         
        </div>
      </div>
    );
  }
  
  export default Tabs;