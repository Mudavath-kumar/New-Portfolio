const fs = require('fs');

let certFile = 'client/components/sections/Certifications.tsx';
let c = fs.readFileSync(certFile, 'utf8');

c = c.replace(
  '<button\\n                onClick={() => setSelected(null)}\\n                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors"\\n              >',
  '<button\\n                onClick={() => setSelected(null)}\\n                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors"\\n                title="Close modal"\\n                aria-label="Close modal"\\n              >'
);
c = c.replace(
  '<button\\r\\n                onClick={() => setSelected(null)}\\r\\n                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors"\\r\\n              >',
  '<button\\r\\n                onClick={() => setSelected(null)}\\r\\n                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors"\\r\\n                title="Close modal"\\r\\n                aria-label="Close modal"\\r\\n              >'
);

fs.writeFileSync(certFile, c);

let projFile = 'client/components/sections/Projects.tsx';
let p = fs.readFileSync(projFile, 'utf8');

const maskOld = 'style={{\\n            maskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",\\n            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",\\n          }}';
const maskNew = 'className="relative w-full [mask-image:linear-gradient(to_right,transparent_0%,black_6%,black_94%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_6%,black_94%,transparent_100%)]"';

p = p.replace(maskOld, maskNew);
p = p.replace(maskOld.replaceAll('\\n', '\\r\\n'), maskNew);

const aOld = '<a\\n                      href={project.github}\\n                      target="_blank"\\n                      rel="noopener noreferrer"\\n                      onClick={(e) => e.stopPropagation()}\\n                      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"\\n                    >';
const aNew = '<a\\n                      href={project.github}\\n                      target="_blank"\\n                      rel="noopener noreferrer"\\n                      onClick={(e) => e.stopPropagation()}\\n                      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"\\n                      title="Source Code"\\n                      aria-label="Source Code"\\n                    >';

p = p.replace(aOld, aNew);
p = p.replace(aOld.replaceAll('\\n', '\\r\\n'), aNew.replaceAll('\\n', '\\r\\n'));

fs.writeFileSync(projFile, p);
console.log('done!');
