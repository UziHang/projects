import { StrictMode, Suspense, useState } from "react";
import { Loader } from "@react-three/drei";
import { OldPhotos } from "./layout/OldPhotos";
import styles from "./Moment.module.css";
import Image from "next/image";

function Overlay() {
  const [imgwords, setImgwords] = useState(
    [0, 1, 2, 3, 4, 5, 6, 7, 8].map(
      (u) => `/projectsAssets/boluoyouzi/images/words/${u}.png`
    )
  );
  return (
    <div className={styles.words}>
      {/* <Image width={87} height={600} src={imgwords[1]} /> */}
    </div>
  );
}

export default function Moment() {
  return (
    <StrictMode>
      <div className={styles.root}>
        <Suspense fallback={<Loader />}>
          <OldPhotos />
        </Suspense>
        <Overlay />
      </div>
    </StrictMode>
  );
}
