"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ComponentProps,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

type DropdownContextValue = {
  contentId: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  toggleOpen: () => void;
  close: () => void;
};

const DropdownContext = createContext<DropdownContextValue | null>(null);

type DropdownProps = Omit<ComponentProps<"div">, "children" | "ref"> & {
  children: ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
};

export function Dropdown({
  children,
  defaultOpen = false,
  open,
  onOpenChange,
  ...props
}: DropdownProps) {
  const contentId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const isControlled = open !== undefined;
  const isOpen = open ?? uncontrolledOpen;

  const setIsOpen = useCallback<Dispatch<SetStateAction<boolean>>>(
    (next) => {
      const nextOpen = typeof next === "function" ? next(isOpen) : next;

      if (nextOpen === isOpen) {
        return;
      }

      if (!isControlled) {
        setUncontrolledOpen(nextOpen);
      }

      onOpenChange?.(nextOpen);
    },
    [isControlled, isOpen, onOpenChange]
  );

  const close = useCallback(() => setIsOpen(false), [setIsOpen]);
  const toggleOpen = useCallback(() => setIsOpen((current) => !current), [setIsOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (event.target instanceof Node && !rootRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, setIsOpen]);

  const contextValue = useMemo(
    () => ({ contentId, isOpen, setIsOpen, toggleOpen, close }),
    [close, contentId, isOpen, setIsOpen, toggleOpen]
  );

  return (
    <DropdownContext value={contextValue}>
      <div ref={rootRef} {...props}>
        {children}
      </div>
    </DropdownContext>
  );
}

type DropdownTriggerProps = Omit<ComponentProps<"button">, "ref">;

export function DropdownTrigger({ type = "button", onClick, ...props }: DropdownTriggerProps) {
  const { contentId, isOpen, toggleOpen } = useDropdownContext("DropdownTrigger");

  return (
    <button
      type={type}
      aria-expanded={isOpen}
      aria-controls={contentId}
      onClick={(event) => {
        onClick?.(event);

        if (!event.defaultPrevented) {
          toggleOpen();
        }
      }}
      {...props}
    />
  );
}

type DropdownContentProps = Omit<ComponentProps<"div">, "ref"> & {
  forceMount?: boolean;
};

export function DropdownContent({
  children,
  forceMount = false,
  id,
  hidden,
  ...props
}: DropdownContentProps) {
  const { contentId, isOpen } = useDropdownContext("DropdownContent");

  if (!isOpen && !forceMount) {
    return null;
  }

  return (
    <div id={id ?? contentId} hidden={hidden ?? !isOpen} {...props}>
      {children}
    </div>
  );
}

function useDropdownContext(componentName: string) {
  const context = useContext(DropdownContext);

  if (!context) {
    throw new Error(`${componentName} must be used inside Dropdown.`);
  }

  return context;
}
