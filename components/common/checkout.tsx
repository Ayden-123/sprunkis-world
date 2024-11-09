"use client";

import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";

import { useToast } from "@/components/ui/use-toast";

import { Button } from "../ui/button";
import { checkoutCredits } from "./checkout.action";
import { Transaction } from "@/model/transaction";
import { message } from "antd";

const Checkout = ({
    amount,
    credits,
    buyerId,
}: {
    amount: number;
    credits: number;
    buyerId: string;
}) => {
    const { toast } = useToast();

    useEffect(() => {
        loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
    }, []);

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
        if (query.get("success")) {
            toast({
                title: "Order placed!",
                description: "You will receive an email confirmation",
                duration: 5000,
                className: "success-toast",
            });
        }

        if (query.get("canceled")) {
            toast({
                title: "Order canceled!",
                description: "Continue to shop around and checkout when you're ready",
                duration: 5000,
                className: "error-toast",
            });
        }
    }, []);

    const onCheckout = async () => {
        if (!buyerId || buyerId == "") {
            message.warning("Please sign in")
            return;
        }
        const transaction: Transaction = {
            amount,
            credits,
            user_id: buyerId,
        };
        await checkoutCredits(transaction);
    };

    return (
        <Button
            type="submit"
            role="link"
            className="w-full rounded-full bg-purple-700 bg-cover text-white"
            onClick={() => onCheckout()}
        >
            Buy Credit
        </Button>
    );
};

export default Checkout;