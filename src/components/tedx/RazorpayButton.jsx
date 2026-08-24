import React, { useEffect, useRef } from "react";

/**
 * Renders a Razorpay Payment Button.
 *
 * Razorpay gives you a snippet like:
 *   <form>
 *     <script src="https://checkout.razorpay.com/v1/payment-button.js"
 *             data-payment_button_id="pl_XXXXXXXXXXXX" async></script>
 *   </form>
 *
 * React won't execute a <script> tag dropped directly into JSX, so this
 * component creates the <script> element manually and appends it to a
 * <form> ref on mount. Razorpay's script then replaces/injects the actual
 * button inside that form.
 */
export default function RazorpayButton({ paymentButtonId, className = "" }) {
  const formRef = useRef(null);

  useEffect(() => {
    if (!formRef.current || !paymentButtonId) return;

    // Clear out any previous button (e.g. if paymentButtonId changes)
    formRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.dataset.payment_button_id = paymentButtonId;
    script.async = true;

    formRef.current.appendChild(script);
  }, [paymentButtonId]);

  return <form ref={formRef} className={className} />;
}
