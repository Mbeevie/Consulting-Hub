import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

/* -------------------- Validation Schema -------------------- */
const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  /* -------------------- Mailto Submit Handler -------------------- */
  function onSubmit(values: z.infer<typeof formSchema>) {
    const mailtoLink = `mailto:info@mwimaconsulting.com
?subject=${encodeURIComponent(values.subject)}
&body=${encodeURIComponent(
  `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`
)}`;

    window.open(mailtoLink, "_blank");

    toast({
      title: "Email client opened",
      description: "Please click Send to complete your message.",
    });

    form.reset();
  }

  return (
    <div className="bg-background min-h-screen flex flex-col">
      {/* -------------------- Header -------------------- */}
      <div className="bg-background text-foreground py-20 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start a project or have a question? We'd love to hear from you.
          </p>
        </div>
      </div>

      {/* -------------------- Content -------------------- */}
      <div className="container mx-auto px-4 py-16 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

          {/* -------------------- Contact Info -------------------- */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-8">
              Get in Touch
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                            
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email Us</h3>
                  <p className="text-muted-foreground mb-1">
                    General Inquiries:
                  </p>
                  <a
                    href="mailto:info@mwimaconsulting.com"
                    className="text-primary font-medium hover:underline"
                  >
                    info@mwimaconsulting.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                  <Phone className="w-6 h-6" />
                </div>              
              </div>
            </div>           
            <div className="mt-12 p-8 bg-muted rounded-2xl border">
              <h3 className="font-bold text-lg mb-3">Consulting Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday – Friday</span>
                  <span className="font-medium">8:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-medium">9:00 AM – 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>        
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Send us a Message
            </h2>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="John Doe" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="john@company.com" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Project Inquiry" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Tell us about your project..."
                          className="min-h-[150px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full h-12 text-lg font-bold">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
