import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import Header from "../Header/Header";
import { useRef } from "react";
import './Skill.css'
function Skill()
{

    function Model({ modelPath, position = [0, 0, 0] }) {
        const { scene } = useGLTF(modelPath);
        const modelRef = useRef();
      
        useFrame(() => {
          if (modelRef.current) {
            modelRef.current.rotation.y += 0.01; 
          }
        });
        return <primitive ref={modelRef} object={scene} />;
    }

    return(
        <>
            <Header/>
            <main id="mainskill">
            <div className="modeldiv">
            <div id="model">
          <Canvas orthographic camera={{ zoom: 50, position: [0, 0, 10] }} >

            <ambientLight intensity={1} />
            <directionalLight position={[1, 1, 1]} intensity={0.5} />

            <Model position={[2, 1, 2]} modelPath="../../public/models/mongodb.glb" />

           

            <OrbitControls enablePan={false} />
          </Canvas>
          </div>  
          <div className="h1skill"><h1>Mongodb</h1>
          <div className="container">
                <div className="skills html">70%</div>
         </div>
          </div>
          </div>
          
          <div className="modeldiv">
            <div id="model">
          <Canvas orthographic camera={{ zoom: 50, position: [0, 0, 10] }} >

            <ambientLight intensity={1} />
            <directionalLight position={[1, 1, 1]} intensity={0.5} />

            <Model position={[2, 1, 2]} modelPath="../../public/models/expresss.glb" />

            

            <OrbitControls enablePan={false} />
          </Canvas>
          </div>  
          <div className="h1skill"><h1>Express Js</h1>
          <div className="container">
                <div className="skills express">50%</div>
         </div>
          </div>
          </div>

          <div className="modeldiv">
            <div id="model">
          <Canvas orthographic camera={{ zoom: 50, position: [0, 0, 10] }} >

            <ambientLight intensity={1} />
            <directionalLight position={[1, 1, 1]} intensity={0.5} />

            <Model position={[2, 1, 2]} modelPath="../../public/models/react_logo.glb" />

          

            <OrbitControls enablePan={false} />
          </Canvas>
          </div>  
          <div className="h1skill"><h1>React Js</h1>
          <div className="container">
                <div className="skills react">60%</div>
         </div>
          </div>
          </div>

          <div className="modeldiv">
            <div id="model">
          <Canvas orthographic camera={{ zoom: 50, position: [0, 0, 10] }} >

            <ambientLight intensity={1} />
            <directionalLight position={[1, 1, 1]} intensity={0.5} />

            <Model position={[2, 1, 2]} modelPath="../../public/models/nodejs.glb" />

            <EffectComposer>
              <Bloom
                mipmapBlur
                intensity={0.3} 
                luminanceThreshold={0.2} 
                luminanceSmoothing={0.9} 
              />
            </EffectComposer>

            <OrbitControls enablePan={false} />
          </Canvas>
          </div>  
          <div className="h1skill"><h1>Node Js</h1>
          <div className="container">
                <div className="skills express">50%</div>
         </div>
          </div>
          </div>

          <div className="modeldiv">
            <div id="model">
          <Canvas orthographic camera={{ zoom: 50, position: [0, 0, 10] }} >

            <ambientLight intensity={1} />
            <directionalLight position={[1, 1, 1]} intensity={0.5} />

            <Model position={[2, 1, 2]} modelPath="../../public/models/htmllogo6.glb" />


            <OrbitControls enablePan={false} />
          </Canvas>
          </div>  
          <div className="h1skill"><h1>Html</h1>
          <div className="container">
                <div className="skills html">80%</div>
         </div>
          </div>
          </div>


          <div className="modeldiv">
            <div id="model">
          <Canvas orthographic camera={{ zoom: 70, position: [0, 0, 10] }} >

            <ambientLight intensity={1} />
            <directionalLight position={[1, 1, 1]} intensity={0.5} />

            <Model position={[2, 1, 2]} modelPath="../../public/models/CSS.glb" />

            <OrbitControls enablePan={false} />
          </Canvas>
          </div>  
          <div className="h1skill"><h1>CSS</h1>
          <div className="container">
                <div className="skills html">70%</div>
         </div>
          </div>
          </div>


          <div className="modeldiv">
            <div id="model">
          <Canvas orthographic camera={{ zoom: 70, position: [0, 0, 10] }} >

            <ambientLight intensity={1} />
            <directionalLight position={[1, 1, 1]} intensity={0.5} />

            <Model position={[2, 1, 2]} modelPath="../../public/models/javascript.glb" />

          

            <OrbitControls enablePan={false} />
          </Canvas>
          </div>  
          <div className="h1skill"><h1>Javascrpit</h1>
          <div className="container">
                <div className="skills react">60%</div>
         </div>
          </div>
          </div>

          </main>
        </>
    )
}

export default Skill