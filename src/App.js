
import './App.css';

import {OBJModel,GLTFModel ,AmbientLight,DirectionLight} from 'react-3d-viewer'


const App = () => {
	
  let cameraPosition = {
    x:150,
    y:300,
    z:350
  }
	return (
		<>
      <div>
        
        {/* <OBJModel 
                // position={{x:0,y:-100,z:0}}
                src="./asset_1651301306190.obj" texPath=""
        /> */}
        <GLTFModel
                // cameraPosition={cameraPosition}
                // position={{x:0,y:0,z:0}}
                // src="./asset_1651301306190.obj" texPath=""
                src="https://superkluster-bucket.s3.amazonaws.com/assets/41/0x0A2cE58F3F278c858DD4D869Bc883b502F0d85f900000008/asset_1651571624215.gltf" texPath=""
                
        />
        
      </div>
    </>
		
	)


}
export default App ;
