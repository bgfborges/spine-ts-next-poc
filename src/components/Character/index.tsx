// const jsonUrl = '../public/spine/character-front.json';
// const atlasUrl = '../public/spine/character-front.atlas.txt';
// const jsonUrl = 'http://localhost:3000/spinequatroum/character-front.json';
// const atlasUrl = 'http://localhost:3000/spinequatroum/character-front.atlas';

// const jsonUrl = "http://localhost:3000/assets/raptor-pro.json";
// const atlasUrl = "http://localhost:3000/assets/raptor-pma.atlas";

// const jsonUrl = "http://localhost:3000/spinequatroum/character-front.json";
// const atlasUrl = "http://localhost:3000/spinequatroum/character-front.atlas";

const jsonUrl = "http://localhost:3000/spine-gui/4.1/character-front.json";
const atlasUrl = "http://localhost:3000/spine-gui/4.1/character-front.atlas.txt";

import React, { useEffect, useState } from 'react';
import { SpinePlayer, Skin } from '@esotericsoftware/spine-player';

const defaultSkin = 'Pernas/Ahri-Pernas'

const Character = () => {
const [skin, setSkin] = useState<Skin>()
const [SpinePlayerObj, setSpinePlayerObj] = useState<SpinePlayer>()

//// Here no work
useEffect(() => {

    const newSkin = new Skin('novaSkin')

    const generatePerson = new SpinePlayer('player-container', {
        jsonUrl: jsonUrl,
        atlasUrl: atlasUrl,
        showControls: false,
        preserveDrawingBuffer: true,
        animation: 'Idle',
        skin: 'FullBody/Base',
        debug: {
            bones: true, 
            regions: true,
            meshes: true,
            bounds: true,
            paths: true,
            clipping: true,
            points: true,
            hulls: true
         },
         success: (player) => {
            newSkin.addSkin(player.skeleton?.data.findSkin('FullBody/Base')!)
            newSkin.addSkin(player.skeleton?.data.findSkin(defaultSkin)!)
            player.skeleton?.setSkin(newSkin)
            player.skeleton?.setSlotsToSetupPose()
            console.log(player.skeleton?.data)
         }
    });

    setSpinePlayerObj(generatePerson)
    setSkin(newSkin)
}, [])

const handleAddSkin = () => { 

    skin?.addSkin(SpinePlayerObj?.skeleton?.data.findSkin('Pernas/Banana-Pernas')!)

    SpinePlayerObj?.skeleton?.setSkin(skin!)
    SpinePlayerObj?.skeleton?.setSlotsToSetupPose()

    console.log('executed')

}


    return (
    <>
        <button onClick={handleAddSkin}>Add Skin</button>
        <div className="spine" id="player-container">
            <div className="bb" id="bb" style={{marginTop: '50px'}} />
        </div>
    </>
    )
}

export { Character }