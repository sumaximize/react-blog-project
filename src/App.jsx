import PostsList from "../components/PostsList";
import MainHeader from '../components/MainHeader';
// useState is a React hook
import { useState } from "react";

function App() {
  // state controls visibility of modal overlay
  const [modalIsVisible, setModalIsVisible] = useState(false);

  // MainHeader -> Modal
  function showModalHandler() {
    setModalIsVisible(true)
  }
  //PostsList -> Modal
  function hideModalHandler() {
    // set's modal visibility to false on clicking outside modal
        setModalIsVisible(false)
    }
    

  return (
    <>
      {/* 'onCreatePost' (on + fn name) is prop convention when prop value is passed */}
      <MainHeader onCreatePost={showModalHandler}/>
      <main>
        {/* Instruction if post modal should be visible */}
        <PostsList 
          // makes Modal truthy
          isPosting={modalIsVisible}

          onStopPosting={hideModalHandler}
        />
      </main>
    </>
  );
}
  

export default App;
