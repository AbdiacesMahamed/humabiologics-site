import { useState } from "react";
import client from "../../utils/client";
import styles from './Tabs.module.css'
import { useEffect } from "react";

function Tabs() {
  

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
    
  }


 
  const [state, setState] = useState({
    product: null,
    loading: true,
    error: "",
  });
  const { product, loading, error } = state;
  // eslint-disable-next-line
  useEffect(
    () => {
      const fetchData = async () => {
        try {
          const product = await client.fetch(
            `
            *[_type == "product" && slug.current == $slug][0]`,

            
          );

          setState({ ...state, product, loading: false });
        } catch (err) {
          setState({ ...state, error: err.message, loading: false });
        }
      };
      fetchData();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps

    [ state]
  );


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
              {product.protocals}
            </p>
          </div>

          <div className={tabTwo}>
            <h2>Content 2</h2>
           
            <p>
              {product.qualityTesting}
            </p>
          </div>


          <div className={tabThree}>
            <h2>Content 3</h2>
           
            <p>
              {product.materialsSafetyDataSheet}
            </p>
          </div>

          <div className={tabFour}>
            <h2>Content 4</h2>
           
            <p>
              {product.applicationNotes}
            </p>
          </div>
  
         
           
          
  
         
            
         
        </div>
      </div>
    );
  }
  
  export default Tabs;