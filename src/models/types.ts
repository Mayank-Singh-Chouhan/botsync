import { InputFieldProps } from "@/components/InputField/InputField";
import { ReactNode } from "react";
// import { ControllerRenderProps } from "react-hook-form";

export type IconVariant = "application" | "home" | "reject" | "accept";

export type RenderInputFunction = (params: InputFieldProps) => ReactNode;
