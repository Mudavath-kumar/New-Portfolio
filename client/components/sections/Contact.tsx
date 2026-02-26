import { useForm, ValidationError } from "@formspree/react";
import { Check, Mail, MapPin, Phone, Send } from "lucide-react";

export const Contact = () => {
  const [state, handleSubmit] = useForm("mojnrqyp");

  return (
    <section id="contact" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Info Side */}
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Get in touch</h2>
            <h3 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter mb-10 leading-none">
              LET'S <br /> <span className="outline-text">CREATE.</span>
            </h3>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 rounded-3xl glass dark:glass-dark flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <Mail />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold mb-1">Email</p>
                  <p className="text-lg sm:text-2xl font-bold break-all">kc893825@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 rounded-3xl glass dark:glass-dark flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <MapPin />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold mb-1">Location</p>
                  <p className="text-lg sm:text-2xl font-bold">Hyderabad, India</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 rounded-3xl glass dark:glass-dark flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <Phone />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold mb-1">Phone</p>
                  <p className="text-lg sm:text-2xl font-bold">+91 75690 55938</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-1/2">
            <div className="glass dark:glass-dark p-10 md:p-16 rounded-[60px] relative overflow-hidden">
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest ml-1">Name</label>
                    <input
                      id="name"
                      required
                      type="text"
                      name="name"
                      className="w-full bg-transparent border-b-2 border-border focus:border-primary outline-none py-3 transition-colors text-xl font-medium"
                      placeholder="John Doe"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest ml-1">Email</label>
                    <input
                      id="email"
                      required
                      type="email"
                      name="email"
                      className="w-full bg-transparent border-b-2 border-border focus:border-primary outline-none py-3 transition-colors text-xl font-medium"
                      placeholder="john@example.com"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-bold uppercase tracking-widest ml-1">Subject</label>
                  <input
                    id="subject"
                    required
                    type="text"
                    name="subject"
                    className="w-full bg-transparent border-b-2 border-border focus:border-primary outline-none py-3 transition-colors text-xl font-medium"
                    placeholder="Project Inquiry"
                  />
                  <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest ml-1">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    name="message"
                    className="w-full bg-transparent border-b-2 border-border focus:border-primary outline-none py-3 transition-colors text-xl font-medium resize-none"
                    placeholder="Tell me about your project..."
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting || state.succeeded}
                  className={`w-full py-6 rounded-full text-xl font-bold flex items-center justify-center gap-3 transition-all duration-500 ${
                    state.succeeded 
                      ? "bg-green-500 text-white" 
                      : "bg-primary text-primary-foreground hover:scale-[1.02]"
                  }`}
                >
                  {!state.submitting && !state.succeeded && (
                    <>
                      Send Message <Send size={24} />
                    </>
                  )}
                  {state.submitting && (
                    <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                  )}
                  {state.succeeded && (
                    <>
                      Sent Successfully! <Check size={24} />
                    </>
                  )}
                </button>
              </form>
              
              {/* Abstract Background for form */}
              <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-10 right-10 w-64 h-64 bg-primary rounded-full blur-[100px]" />
                <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-[100px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
