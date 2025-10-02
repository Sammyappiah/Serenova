import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <Image src="/team.jpg" alt="Our Team" width={600} height={400} className="rounded-xl shadow-lg" />
        <div>
          <h2 className="text-3xl font-bold mb-4">About Serenova</h2>
          <p>
            Serenova Hotel combines luxury, comfort, and tradition. Our mission is to provide an
            unforgettable stay in the heart of Romania, surrounded by nature and elegance.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Philosophy</h2>
          <p>
            We believe in creating an atmosphere of peace and serenity, where guests feel at home while
            enjoying the highest standards of hospitality.
          </p>
        </div>
        <Image src="/garden.jpg" alt="Philosophy" width={600} height={400} className="rounded-xl shadow-lg" />
      </section>
    </div>
  );
}
