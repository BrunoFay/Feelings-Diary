
/* reference https://bestofreactjs.com/repo/g-delmo-use-draggable-scroll-react-awesome-react-hooks */

export default function useDragScroll(ref, options) {

  const { direction } = options;

  // The initial position (scroll progress and mouse location) when the mouse is pressed down on the element
  let initialPosition = { scrollTop: 0, scrollLeft: 0, mouseX: 0, mouseY: 0 };

  const mouseMoveHandler = (event) => {
      if (ref.current) {
      const dx = event.clientX - initialPosition.mouseX;
      if (direction !== 'vertical')
        ref.current.scrollLeft = initialPosition.scrollLeft - dx;
    }
  };

  const mouseUpHandler = () => {
   // Remove the event listeners since it is not necessary to track the mouse position anymore
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  };

  const onMouseDown = (event) => {
    if (ref.current) {
      // Save the position at the moment the user presses down
      initialPosition = {
        scrollLeft: ref.current.scrollLeft,
        scrollTop: ref.current.scrollTop,
        mouseX: event.clientX,
        mouseY: event.clientY,
      };

      // Show a cursor: grabbing style and set user-select: none to avoid highlighting text while dragging
      ref.current.style.cursor = 'normal';
      ref.current.style.userSelect = 'none';

      // Add the event listeners that will track the mouse position for the rest of the interaction
      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
    }
  };

  return { onMouseDown };
}