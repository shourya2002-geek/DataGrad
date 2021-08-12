import React from 'react';
import { useEffect , useState , useCallback} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';


const COMMANDS = {
  ABOUT: 'what is this app about?'
}


const useAlan = () => {

  const [alanInstance, setAlanInstance] = useState();

  const about = useCallback(() => {
    alanInstance.playText("This is a course recommender application");
  },[alanInstance])


  useEffect(() => {
    window.addEventListener(COMMANDS.ABOUT,about)
    
    return () => {
      window.removeEventListener(COMMANDS.ABOUT,about)
    }
  }, [about])



  useEffect(() => {
    setAlanInstance(

      alanBtn({
        key: process.env.REACT_APP_ALAN_KEY,
        onCommand: ({command}) => {
          window.dispatchEvent(new CustomEvent(command))
        }
      })





      )


}, []);




return (
  <div>

  </div>
)
}

export default useAlan;