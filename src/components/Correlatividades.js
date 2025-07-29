import React from "react";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";

import { CustomNode } from "./CustomNode";

const nodeTypes = { custom: CustomNode };

const nodeStyle = "bg-mycolors-2 text-black font-bold"

const nodes = [
  { id: "cbc", type: "custom", data: { label: "Ciclo Común Básico", aprobado:true } , position: { x: 0, y: -100 } },
  { id: "algebra", type: "custom", data: { label: "Álgebra I", aprobado:true } , position: { x: 0, y: 0 } },
  { id: "intro", type: "custom", data: { label: "Introducción a la Programación", aprobado:true }, position: { x: 200, y: 0 } },
  { id: "aed", type: "custom", data: { label: "Algoritmos y Estructuras de Datos", aprobado:true }, position: { x: 0, y: 100 } },
  { id: "sistemas", type: "custom", data: { label: "Sistemas Digitales", aprobado:true }, position: { x: 300, y: 100 } },
  { id: "arquitectura", type: "custom", data: { label: "Arquitectura y Organización de los Computadores", aprobado:false }, position: { x: 200, y: 200 } },
  { id: "tda", type: "custom", data: { label: "Técnicas de Diseño de Algoritmos", aprobado:false }, position: { x: -200, y: 200 } },
  { id: "plp", type: "custom", data: { label: "Paradigmas de la Programación", aprobado:false }, position: { x: 100, y: 300 } },
];


const edges = [
  { id: "e0", source: "cbc", target: "algebra", animated: true },
  { id: "e1", source: "cbc", target: "intro", animated: true },
  { id: "e2", source: "algebra", target: "aed", animated: true },
  { id: "e3", source: "intro", target: "aed", animated: true },
  { id: "e4", source: "intro", target: "sistemas", animated: true },
  { id: "e5", source: "sistemas", target: "arquitectura", animated: true },
  { id: "e6", source: "aed", target: "tda", animated: true },
  { id: "e8", source: "aed", target: "plp", animated: true },
];

const Correlatividades = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
            <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            fitView
            fitViewOptions={{ padding: 0.2 }}
    />

    </div>
  );
};

export default Correlatividades;
