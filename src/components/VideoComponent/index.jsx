import React from "react";
import styles from './videoComponent.module.css';
import video from '../../assets/video.mp4'

const VideoComponent = () => {
    return (
        <div className={styles.video}>
        <video src={video} type="video/mp4" autoPlay controls={false} muted loop/>
        <div className={styles.videoText}>
            <h1>Paradise Zoo</h1>
            <h2>Here you can meet Australian Animals and got time know them better!!</h2>
            <p>Australian animals are known for their uniqueness, from the hopping kangaroo to the elusive platypus. Many are found nowhere else on Earth, thriving in the continent's diverse ecosystems.</p>
            <p>The Australian Zoo is home to a wide range of native and exotic animals, but one of its most iconic residents is the koala. Koalas are marsupials known for their fluffy ears, large noses, and tree-dwelling habits. At the zoo, they live in eucalyptus-rich enclosures that mimic their natural habitat. Visitors can learn about their diet, behavior, and conservation efforts aimed at protecting these beloved Australian creatures.</p>
            
        </div>
    </div>    
    )
}

export default VideoComponent