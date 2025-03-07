import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Form } from "@/components/ui/form"
import { roommateDetailsSchema } from "@/schemas/roommate-details-schema"
import InputField from "@/components/InputField/InputField"
import Icon from "@/components/ui/Icon"
import { toast } from "sonner"
import { FormFieldType } from "@/models/enums"

interface RoommateDetailsProps {

}

const RoommateDetails: React.FC<RoommateDetailsProps> = ({ }) => {

  const form = useForm<z.infer<typeof roommateDetailsSchema>>({
    resolver: zodResolver(roommateDetailsSchema),
    defaultValues: {
      firstName: "",
      middleInitial: "",
      lastName: "",
      gender: undefined,
      phoneNumber: "",
      email: "",
      university: "",
      registrationNumber: ""
    },
  })

  function onSubmit(values: z.infer<typeof roommateDetailsSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    toast(
      <div>
        <strong>Form Submitted With Values</strong>
        <br />
        First Name: {values.firstName} <br />
        Middle Initial: {values.middleInitial} <br />
        Last Name: {values.lastName} <br />
        Gender: {values.gender} <br />
        Phone Number: {values.phoneNumber} <br />
        Email Address: {values.email} <br />
        University/College: {values.university} <br />
        Registration Number: {values.registrationNumber}
      </div>
    )

  }

  function onReject() {
    form.reset(); // Clears the form
    toast("Form Cleared")
  }


  return (
    <>
      <h3 className="font-semibold text-darkGrey mb-8 text-[16px]">student’s personal details</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 lg:w-[400px]">
          <InputField
            FormFieldType={FormFieldType.TEXT}
            control={form.control}
            type="text"
            name="firstName"
            label="First Name"
            placeholder="John"
          />
          <InputField
            FormFieldType={FormFieldType.TEXT}
            control={form.control}
            type="text"
            name="middleInitial"
            label="Middle Intial"
            placeholder="N/A"
          />
          <InputField
            FormFieldType={FormFieldType.TEXT}
            control={form.control} 
            type="text"
            name="lastName"
            label="Last Name"
            placeholder="Wajackoyah"
          />
          <InputField
            FormFieldType={FormFieldType.TEXT}
            control={form.control}
            type="text"
            name="gender"
            label="Gender"
            placeholder="Male"
          />
          <InputField 
            FormFieldType={FormFieldType.TEXT}
            control={form.control}
            type="text"
            name="phoneNumber"
            label="Phone number"
            placeholder="0700000000"
          />
          <InputField 
            FormFieldType={FormFieldType.TEXT}
            control={form.control}
            type="text"
            name="email"
            label="Email address"
            placeholder="wajack_@email.com"
          />
          <InputField 
            FormFieldType={FormFieldType.TEXT}
            control={form.control}
            type="text"
            name="university"
            label="University/college"
            placeholder="Kabarak University" 
          />
          <InputField
            FormFieldType={FormFieldType.TEXT}
            control={form.control}
            type="text"
            name="registrationNumber"
            label="Registration number"
            placeholder="ITS/DIP-ET72/123" 
          />

          <div className="flex gap-3 pl-14">

            <button type="button" onClick={onReject} className="flex items-center justify-center h-10 w-10 rounded-full bg-[#FFC2C2]">
              <Icon name="reject" className="text-[#FF0000]" />
            </button>

            <button type="submit" className="flex items-center justify-center h-10 w-10 rounded-full bg-[#D3FFD3]">
              <Icon name="accept" className="text-[#00FF00]" />
            </button>

          </div>
        </form>
      </Form>
    </>
  );
};

export default RoommateDetails;