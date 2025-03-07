import { FormFieldType } from "@/models/enums";
import { RenderInputFunction } from "@/models/types";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const INPUT_FIELD_MAP: Record<FormFieldType, RenderInputFunction> = {

    [FormFieldType.TEXT]: ({ control, name, label, description, ...inputProps }) => (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="relative">
            <FormLabel className="absolute px-1 -top-2 left-4 bg-white">{label}</FormLabel>
            <FormControl>
              <Input {...field} {...inputProps} />
            </FormControl>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        )}
      />
    ),
  
    // Add more field types here...
  
  };