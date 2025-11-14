"use client";

import { useEffect, useState } from "react";

import DataCard from "@/components/common/DataCard";

interface BodyVisualizationProps {
  modelUrl: string;
  highlightRegion?: string;
}

export default function BodyVisualization({ modelUrl, highlightRegion = "" }: BodyVisualizationProps) {
  const [isViewerReady, setIsViewerReady] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    const registerViewer = async () => {
      try {
        await import("@google/model-viewer");
        if (isMounted) {
          setIsViewerReady(true);
        }
      } catch (error) {
        if (process.env.NODE_ENV !== "production") {
          console.error("Unable to register model-viewer", error);
        }
        if (isMounted) {
          setHasError(true);
        }
      }
    };

    void registerViewer();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <DataCard title="Patient Anatomy">
      <div className="space-y-4">
        {isViewerReady && !hasError ? (
          <model-viewer
            src={modelUrl}
            camera-controls
            auto-rotate
            interaction-prompt="auto"
            camera-orbit="0deg 80deg 1.6m"
            exposure="1.15"
            shadow-intensity="0.6"
            style={{ width: "100%", height: "320px", background: "#020617", borderRadius: "1rem" }}
            onError={() => setHasError(true)}
          >
            <div slot="poster" className="flex h-full w-full items-center justify-center text-sm text-slate-400">
              Loading anatomy model…
            </div>
            <div slot="fallback" className="flex h-full w-full items-center justify-center text-sm text-slate-400">
              Unable to load 3D anatomy.
            </div>
          </model-viewer>
        ) : (
          <div className="flex h-80 w-full items-center justify-center rounded-2xl border border-slate-800/80 bg-slate-950/60 text-sm text-slate-400">
            {hasError ? "Unable to load 3D anatomy." : "Preparing 3D anatomy viewer…"}
          </div>
        )}
        <p className="text-xs text-slate-400">
          {highlightRegion
            ? `Monitoring focus: ${highlightRegion}.`
            : "Interactive full-body model updated with live sensor overlays."}
        </p>
      </div>
    </DataCard>
  );
}
