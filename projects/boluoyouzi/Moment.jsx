import {StrictMode, Suspense } from "react";
import { Loader } from "@react-three/drei";
import { OldPhotos } from "./layout/OldPhotos";

function Overlay() {
  return <div>波螺油子</div>;
}

export default function Moment() {
  return (
    <StrictMode>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: "#151515",
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
        }}
      >
        <Suspense fallback={<Loader />}>
          <OldPhotos />
        </Suspense>
        <Overlay />
      </div>
    </StrictMode>
  );
}
