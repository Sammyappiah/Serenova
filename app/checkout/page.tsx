import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "@/components/PaymentForm";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

export default function CheckoutPage({ searchParams }: { searchParams: any }) {
  const { total } = searchParams;

  return (
    <div className="max-w-3xl mx-auto py-12">
      <h1 className="text-3xl font-serif mb-8">Checkout</h1>

      {/* Wrap PaymentForm inside Elements */}
      <Elements stripe={stripePromise}>
        <PaymentForm total={Number(total) || 0} />
      </Elements>
    </div>
  );
}
