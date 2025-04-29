"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface ContactFormProps {
  onSubmit?: (data: FormData) => void;
  onSuccess?: () => void;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  company: string;
  message: string;
}

export function ContactForm({ onSubmit, onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Tutaj możnaby dodać integrację z API wysyłki e-maili
      // np. z API SendGrid, Mailchimp, itp.
      console.log("Wysyłanie formularza:", formData);
      
      // Symulacja opóźnienia wysyłki
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (onSubmit) {
        onSubmit(formData);
      }
      
      setFormSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        company: "",
        message: "",
      });
      
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error("Błąd podczas wysyłania formularza:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (formSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-[#2209B8] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2">Dziękujemy za wiadomość!</h3>
        <p className="text-gray-700 mb-4">
          Odezwiemy się do Ciebie w ciągu 24 godzin roboczych.
        </p>
        <Button 
          className="bg-[#2209B8] hover:bg-[#1B0792] text-white"
          onClick={() => setFormSubmitted(false)}
        >
          Wyślij kolejną wiadomość
        </Button>
      </div>
    );
  }
  
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">Imię i nazwisko</label>
          <Input 
            id="name" 
            placeholder="Jan Kowalski" 
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block mb-1 font-medium">Telefon</label>
          <Input 
            id="phone" 
            placeholder="+48 123 456 789" 
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block mb-1 font-medium">Email</label>
        <Input 
          id="email" 
          type="email" 
          placeholder="jankowalski@example.com" 
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="company" className="block mb-1 font-medium">Nazwa firmy</label>
        <Input 
          id="company" 
          placeholder="Startup Tech Sp. z o.o." 
          value={formData.company}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="message" className="block mb-1 font-medium">Wiadomość</label>
        <Textarea 
          id="message" 
          placeholder="Jak możemy Ci pomóc?" 
          rows={4} 
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <Button 
        type="submit"
        className="w-full bg-[#FF6D2C] hover:bg-[#e65a1c] text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
      </Button>
    </form>
  );
} 