import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../../data';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('✓ Message sent. I\'ll respond within 24h.');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-24 bg-bg relative">
      <div className="max-w-7xl mx-auto">
        <div className="font-mono text-cyan text-sm mb-4">// CONTACT</div>
        <h2 className="font-bebas text-7xl text-white glow-text mb-2">LET'S BUILD SOMETHING</h2>
        <div className="font-rajdhani text-xl text-gray mb-16">Open to Internships · Collaborations · Full-time Roles</div>
        
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full lg:w-1/2">
            <div className="space-y-6 mb-12">
              {[
                { i: 'fa-solid fa-envelope', l: 'Email', v: 'offical.saurabhsingh@gmail.com', u: 'mailto:offical.saurabhsingh@gmail.com' }, 
                { i: 'fa-brands fa-linkedin-in', l: 'LinkedIn', v: 'linkedin.com/in/saurabh-singh-258a23289', u: 'https://www.linkedin.com/in/saurabh-singh-258a23289/' }, 
                { i: 'fa-brands fa-github', l: 'GitHub', v: 'github.com/saurabhxcod', u: 'https://github.com/saurabhxcod' }, 
                { i: 'fa-solid fa-phone', l: 'Phone', v: '+91-7905145529', u: 'tel:+917905145529' }, 
                { i: 'fa-solid fa-location-dot', l: 'Location', v: 'Greater Noida, Uttar Pradesh, India', u: '#' }, 
                { i: 'fa-solid fa-file-pdf', l: 'Resume', v: 'Download PDF', u: 'https://drive.google.com/file/d/1GQXjbMceklT8IDPIOUHTrkTc260D-j3L/view' }
              ].map(item => (
                <a href={item.u} target={item.u === '#' ? '_self' : '_blank'} rel="noreferrer" key={item.l} className="flex items-center gap-4 group hover:glow-shadow p-2 -ml-2 rounded transition-all cursor-none">
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-gray group-hover:text-cyan group-hover:border-cyan transition-colors">
                    <i className={item.i}></i>
                  </div>
                  <div>
                    <div className="font-rajdhani text-sm text-gray">{item.l}</div>
                    <div className="font-mono text-sm text-white group-hover:text-cyan transition-colors">{item.v}</div>
                  </div>
                </a>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((s, i) => (
                <a key={i} href={s.url} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full border border-cyan flex items-center justify-center text-cyan hover:bg-cyan hover:text-bg2 hover:scale-110 transition-all group cursor-none">
                  <i className={`${s.icon} text-2xl group-hover:animate-bounce`}></i>
                </a>
              ))}
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full lg:w-1/2">
            <div className="bg-card rounded-lg border border-border shadow-2xl overflow-hidden">
              <div className="bg-[#1a1a2e] px-4 py-2 border-b border-border font-mono text-xs text-gray">saurabh@portfolio:~/contact$</div>
              <form onSubmit={handleSubmit} className="p-6 font-mono text-sm text-cyan flex flex-col gap-6">
                <div>
                  <label className="flex items-center">
                    <span className="w-24 text-gray">{'> name:'}</span>
                    <span className="mr-2">[</span>
                    <input 
                      type="text" 
                      required 
                      value={formState.name} 
                      onChange={e => setFormState({...formState, name: e.target.value})} 
                      className="bg-transparent border-b border-transparent focus:border-cyan outline-none text-white w-full flex-grow cursor-none" 
                    />
                    <span className="ml-2">]</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center">
                    <span className="w-24 text-gray">{'> email:'}</span>
                    <span className="mr-2">[</span>
                    <input 
                      type="email" 
                      required 
                      value={formState.email} 
                      onChange={e => setFormState({...formState, email: e.target.value})} 
                      className="bg-transparent border-b border-transparent focus:border-cyan outline-none text-white w-full flex-grow cursor-none" 
                    />
                    <span className="ml-2">]</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-start">
                    <span className="w-24 text-gray pt-1">{'> message:'}</span>
                    <span className="mr-2 pt-1">[</span>
                    <textarea 
                      required 
                      rows="4" 
                      value={formState.message} 
                      onChange={e => setFormState({...formState, message: e.target.value})} 
                      className="bg-transparent border-b border-transparent focus:border-cyan outline-none text-white w-full flex-grow resize-none cursor-none" 
                    />
                    <span className="ml-2 self-end">]</span>
                  </label>
                </div>
                {status && <div className="text-green-400 mt-2">{status}</div>}
                <button type="submit" className="mt-4 w-full bg-cyan text-bg2 font-bold py-3 rounded relative overflow-hidden group cursor-none">
                  <span className="relative z-10">SEND MESSAGE ▶</span>
                  <div className="absolute inset-0 bg-white/40 -translate-x-full group-hover:animate-[shimmer_1s_forwards]" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
