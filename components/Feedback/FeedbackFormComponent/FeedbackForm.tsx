"use client";
import { useFormState } from "react-dom";
import { sendFeedBack } from "../function/sendFeedback";
import FormSubmitButton from "./FormSubmitButton";
import { useEffect, useRef, useState } from "react";

const FeedbackForm = () => {
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const [state, formAction] = useFormState(sendFeedBack, null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const ele = document.querySelector("#feedbackViewer");
    if (ele && state?.success) {
      ele.scrollTo({ top: ele.scrollHeight, behavior: "smooth" });
    }
    if (state?.success) {
      formRef.current?.reset();
      setIsAdded(true);
      window.localStorage.setItem("reviewed", JSON.stringify(isAdded));
    }
  }, [isAdded, state?.success]);

  return (
    <section className="w-full sm:w-3/4 md:w-1/2">
      <form
        ref={formRef}
        action={formAction}
        className=" flex flex-col w-full gap-y-4 ">
        <input
          type="text"
          placeholder="name"
          name="userName"
          className="dark:bg-darkestBlue/50 w-1/2 px-2 py-1 rounded-md "
        />
        <textarea
          className="dark:bg-darkestBlue/50 placeholder:pt-2 placeholder:text-xs resize-none px-2 py-1 w-full rounded-md "
          rows={5}
          cols={60}
          placeholder="Enter your feedback here --
          your feedback will be invaluable in helping me improving, Please note that it will be saved directly on this website's database."
          name="userFeedback"
        />
        <FormSubmitButton suspend={isAdded} />
      </form>
      <p className="w-fit mx-auto text-sm font-semibold text-red-800 mt-4">
        {!state?.success && state?.message}
      </p>
    </section>
  );
};

export default FeedbackForm;
