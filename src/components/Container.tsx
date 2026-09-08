import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/cn";

type ContainerProps<T extends ElementType> = {
  as?: T;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "className" | "as">;

export function Container<T extends ElementType = "div">({
  as,
  className,
  ...rest
}: ContainerProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  return (
    <Tag
      className={cn("mx-auto w-full max-w-[1152px] px-6", className)}
      {...rest}
    />
  );
}
