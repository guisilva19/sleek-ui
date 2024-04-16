"use client";
import { useEffect } from "react";
import { Application } from "@splinetool/runtime";

const Spline = () => {
  useEffect(() => {
    const loadSpline = async () => {
      const canvas: any = document.getElementById("canvas3d");
      const app = new Application(canvas);
      await app.load(
        "https://prod.spline.design/k-I07y7ep29VLqsL/scene.splinecode"
      );
    };

    loadSpline();
    return () => {};
  }, []);

  return (
    <div className="absolute z-0 w-screen h-screen">
      <canvas id="canvas3d" />
    </div>
  );
};

export default Spline;
