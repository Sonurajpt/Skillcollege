// app/contact/page.tsx
'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });
  
  const onSubmit = async (data: any) => {
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    alert('Message sent successfully!');
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto p-8">
      <input {...register('name')} placeholder="Your Name" className="w-full p-4 mb-4 border rounded-lg" />
      <input {...register('email')} placeholder="Email" className="w-full p-4 mb-4 border rounded-lg" />
      <textarea {...register('message')} rows={6} placeholder="Message" className="w-full p-4 mb-6 border rounded-lg" />
      <button type="submit" className="bg-orange-500 text-white px-12 py-4 rounded-full">
        Send Message
      </button>
    </form>
  );
}
