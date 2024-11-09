"use server";

import { redirect } from 'next/navigation'
import Stripe from "stripe";




export async function checkoutCredits({
    amount,
    credits,
    user_id,
}: {
    amount: number;
    credits: number;
    user_id: string;
}) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

    const unit_amount: number = Math.round(amount * 100)
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    unit_amount: unit_amount,
                    product_data: {
                        // name: transaction.plan,
                        name: "test"
                    }
                },
                quantity: 1
            }
        ],
        metadata: {
            unit_amount: unit_amount,
            credits: credits,
            user_id: user_id,
        },
        mode: 'payment',
        success_url: `https://deeposter.com/home`,
        cancel_url: `https://deeposter.com/home`,
    })
    redirect(session.url!)
}