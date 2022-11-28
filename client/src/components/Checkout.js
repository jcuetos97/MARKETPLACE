import React, { useState, useEffect } from "react";
import Card from "./Card";

const Message = ({ message }) => (
    <section>
        <p>{message}</p>
    </section>
);

export default function Checkout() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);

        if (query.get("success")) {

            //send email function
            setMessage("Order placed! You will receive an email confirmation.");
        }

        if (query.get("canceled")) {
            setMessage(
                "Order canceled -- continue to shop around and checkout when you're ready."
            );
        }
    }, []);

    return message ? (
        <Message message={message} />
    ) : (
        ""
    );
}
