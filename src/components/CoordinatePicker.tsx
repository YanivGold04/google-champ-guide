import { useState, useRef, useEffect } from 'react';
import { Copy, Target, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface Rectangle {
  left: number;
  top: number;
  width: number;
  height: number;
}

const REFERENCE_WIDTH = 2940;
const REFERENCE_HEIGHT = 1482;

export const CoordinatePicker = () => {
  const [isActive, setIsActive] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [currentRect, setCurrentRect] = useState<Rectangle | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) {
      setCurrentRect(null);
      setIsDrawing(false);
    }
  }, [isActive]);

  const getScaleFactor = () => {
    const pageWidth = document.documentElement.scrollWidth;
    const pageHeight = document.documentElement.scrollHeight;
    
    const scaleX = REFERENCE_WIDTH / pageWidth;
    const scaleY = REFERENCE_HEIGHT / pageHeight;
    
    return { scaleX, scaleY };
  };

  const getAbsoluteCoordinates = (clientX: number, clientY: number) => {
    const screenX = clientX + window.scrollX;
    const screenY = clientY + window.scrollY;
    
    const { scaleX, scaleY } = getScaleFactor();
    
    const x = Math.round(screenX * scaleX);
    const y = Math.round(screenY * scaleY);
    
    return { x, y };
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isActive) return;
    const screenX = e.clientX + window.scrollX;
    const screenY = e.clientY + window.scrollY;
    setStartPos({ x: screenX, y: screenY });
    setIsDrawing(true);
    
    const { x, y } = getAbsoluteCoordinates(e.clientX, e.clientY);
    setCurrentRect({ left: x, top: y, width: 0, height: 0 });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDrawing || !isActive) return;
    const screenX = e.clientX + window.scrollX;
    const screenY = e.clientY + window.scrollY;
    
    const { x, y } = getAbsoluteCoordinates(e.clientX, e.clientY);
    
    const left = Math.min(startPos.x, screenX);
    const top = Math.min(startPos.y, screenY);
    const screenWidth = Math.abs(screenX - startPos.x);
    const screenHeight = Math.abs(screenY - startPos.y);
    
    const { scaleX, scaleY } = getScaleFactor();
    const scaledLeft = Math.round(left * scaleX);
    const scaledTop = Math.round(top * scaleY);
    const scaledWidth = Math.round(screenWidth * scaleX);
    const scaledHeight = Math.round(screenHeight * scaleY);
    
    setCurrentRect({ 
      left: scaledLeft, 
      top: scaledTop, 
      width: scaledWidth, 
      height: scaledHeight 
    });
  };

  const handleMouseUp = () => {
    if (isDrawing) {
      setIsDrawing(false);
    }
  };

  const getStyleString = () => {
    if (!currentRect) return '';
    const leftPercent = ((currentRect.left / REFERENCE_WIDTH) * 100).toFixed(2);
    const topPercent = ((currentRect.top / REFERENCE_HEIGHT) * 100).toFixed(2);
    const widthPercent = ((currentRect.width / REFERENCE_WIDTH) * 100).toFixed(2);
    const heightPercent = ((currentRect.height / REFERENCE_HEIGHT) * 100).toFixed(2);
    return `style="top:${topPercent}%; left:${leftPercent}%; width:${widthPercent}%; height:${heightPercent}%;"`;
  };

  const copyToClipboard = () => {
    const styleString = getStyleString();
    navigator.clipboard.writeText(styleString);
    toast.success('Style copied to clipboard!');
  };

  if (!isActive) {
    return (
      <Button
        onClick={() => setIsActive(true)}
        className="fixed bottom-4 right-4 z-50 shadow-lg"
        size="lg"
        variant="default"
      >
        <Target className="mr-2 h-5 w-5" />
        Coordinate Picker
      </Button>
    );
  }

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 bg-black/10 cursor-crosshair"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{ pointerEvents: 'all' }}
      >
        {/* Selection rectangle */}
        {currentRect && currentRect.width > 0 && currentRect.height > 0 && (() => {
          const { scaleX, scaleY } = getScaleFactor();
          const displayLeft = currentRect.left / scaleX;
          const displayTop = currentRect.top / scaleY;
          const displayWidth = currentRect.width / scaleX;
          const displayHeight = currentRect.height / scaleY;
          
          return (
            <div
              className="absolute border-2 border-blue-500 bg-blue-500/20"
              style={{
                left: `${displayLeft - window.scrollX}px`,
                top: `${displayTop - window.scrollY}px`,
                width: `${displayWidth}px`,
                height: `${displayHeight}px`,
                pointerEvents: 'none',
              }}
            >
              {/* Live coordinates display */}
              <div className="absolute -top-8 left-0 bg-blue-500 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                X: {currentRect.left}, Y: {currentRect.top} | W: {currentRect.width} × H: {currentRect.height}
              </div>
            </div>
          );
        })()}
      </div>

      {/* Control panel */}
      <div className="fixed bottom-4 right-4 z-[60] bg-background border rounded-lg shadow-xl p-4 max-w-lg">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold flex items-center gap-2">
            <Target className="h-4 w-4" />
            Coordinate Picker Active
          </h3>
          <Button
            onClick={() => setIsActive(false)}
            variant="ghost"
            size="sm"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {currentRect && currentRect.width > 0 && currentRect.height > 0 ? (
          <>
            <div className="bg-muted p-3 rounded font-mono text-xs mb-2 break-all">
              {getStyleString()}
            </div>
            <Button
              onClick={copyToClipboard}
              className="w-full"
              size="sm"
            >
              <Copy className="mr-2 h-4 w-4" />
              Copy Style
            </Button>
          </>
        ) : (
          <p className="text-sm text-muted-foreground">
            Click and drag anywhere on the page to select an area
          </p>
        )}
      </div>
    </>
  );
};
