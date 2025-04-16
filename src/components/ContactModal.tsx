"use client";

import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Button, ButtonProps } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";

interface ContactModalProps extends ButtonProps {
  buttonText?: string;
  variant?: "default" | "outline" | "link";
  triggerClassName?: string;
}

export function ContactModal({ 
  buttonText = "Skontaktuj się z nami", 
  variant = "default", 
  triggerClassName,
  className,
  ...props 
}: ContactModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant={variant} 
          className={triggerClassName || className} 
          {...props}
        >
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">Skontaktuj się z nami</DialogTitle>
          <DialogDescription className="text-center">
            Wypełnij formularz, a my odezwiemy się do Ciebie w ciągu 24 godzin.
          </DialogDescription>
        </DialogHeader>
        <div className="pt-4">
          <ContactForm />
        </div>
      </DialogContent>
    </Dialog>
  );
} 