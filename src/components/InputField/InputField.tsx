import { INPUT_FIELD_MAP } from "@/data/inputFields";
import { FormFieldType } from "@/models/enums";
import { Control } from "react-hook-form";

export interface InputFieldProps extends React.ComponentProps<"input"> {
  FormFieldType: FormFieldType;
  control: Control<any>; // React Hook Form control
  name: string;
  label: string;
  description?: string;
}

const InputField: React.FC<InputFieldProps> = (inputProps) => {
  
  const RenderInput = (params: InputFieldProps) => {
    const renderFunction = INPUT_FIELD_MAP[inputProps.FormFieldType];
    return renderFunction ? renderFunction({...params}) : null;
  };


  return (
    RenderInput(inputProps)
  );
};

export default InputField;
