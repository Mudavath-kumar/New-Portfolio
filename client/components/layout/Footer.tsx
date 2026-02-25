export const Footer = () => {
  return (
    <footer className="w-full py-20 px-6 border-t border-border bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter outline-text mb-4">
            MUDAVATH KUMAR
          </h2>
          <p className="text-muted-foreground max-w-md">
            Crafting next-generation digital experiences with precision and
            creativity. Available for freelance opportunities and full-time
            collaborations.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-colors">GitHub</a>
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mudavath Kumar. All rights reserved.
          </p>
        </div>
      </div>
      
      {/* Background Marquee */}
      <div className="absolute -bottom-10 left-0 w-full whitespace-nowrap opacity-[0.02] pointer-events-none select-none">
        <span className="text-[200px] font-black uppercase tracking-tighter inline-block animate-marquee">
          Full Stack Developer • UI/UX Designer • Problem Solver • 
        </span>
        <span className="text-[200px] font-black uppercase tracking-tighter inline-block animate-marquee">
          Full Stack Developer • UI/UX Designer • Problem Solver • 
        </span>
      </div>
    </footer>
  );
};
