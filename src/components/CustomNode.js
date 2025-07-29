import { Handle, Position } from "reactflow";

export const CustomNode = ({ data }) => {
  const aprobado = data.aprobado;

  return (
    <div className={`text-black font-bold sm:p-4 p-2 sm:text-base text-xs rounded-lg shadow-md text-center relative ${aprobado ? "bg-mycolors-2" : "bg-yellow-200"}`}>
      <Handle type="target" position={Position.Top}  />
      {data.label}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};
