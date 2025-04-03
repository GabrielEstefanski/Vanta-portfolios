import React from 'react';
import { DragDropContext, Droppable, Draggable, DropResult, DroppableProvided, DraggableProvided } from 'react-beautiful-dnd';
import { TemplateConfig } from '@/app/types/TemplateConfig';

interface SectionOrderProps {
  config: TemplateConfig;
  onReorder: (newOrder: number[]) => void;
}

export function SectionOrder({ config, onReorder }: SectionOrderProps) {
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(Object.entries(config.props.sections));
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    const newOrder = items.map((_, index) => index);
    onReorder(newOrder);
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Ordem das Seções</h3>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="sections">
          {(provided: DroppableProvided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-2"
            >
              {Object.entries(config.props.sections)
                .sort(([_, a], [__, b]) => a.order - b.order)
                .map(([id, section], index) => (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided: DraggableProvided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-move"
                      >
                        <div className="flex items-center space-x-4">
                          <span className="text-gray-500 dark:text-gray-400">
                            {index + 1}
                          </span>
                          <div>
                            <h4 className="font-medium">{section.title}</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {section.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {section.enabled ? 'Ativo' : 'Inativo'}
                          </span>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
} 