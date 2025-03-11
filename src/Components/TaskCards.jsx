import Badge from "./Badge";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const TaskCards = ({ tarjeta }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: tarjeta._id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div
      className="border border-zinc-400 bg-bg-cards relative p-2 flex flex-col gap-2 rounded-md"
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      <div className="flex gap-2 flex-wrap">
        <Badge texto={tarjeta.prioridad} />
      </div>
      <span className="font-semibold">{tarjeta.titulo}</span>
      <p>{tarjeta.descripcion}</p>
      <button
        type="button"
        className="cursor-pointer size-5 rounded-md absolute top-2 right-2"
      >
        X
      </button>
    </div>
  );
};

export default TaskCards;
