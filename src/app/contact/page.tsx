'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';

export default function Contact() {
  const [command, setCommand] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (command.toLowerCase() === 'send_message' || command.toLowerCase() === 'contact') {
      setShowForm(true);
      setCommand('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setShowForm(false);
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-black text-[#ededed] font-mono">
      <Navigation />
      
      <main className="flex-1 overflow-auto p-4 md:p-8 pt-16 md:pt-8">
        <div className="max-w-4xl mx-auto">
          {!showForm ? (
            <>
              {/* Terminal Prompt */}
              <div className="mb-6">
                <div className="text-sm mb-4 text-[#ff5e5e]">$ cat contact_info.txt</div>
                <div className="bg-[#0a0a0a] border-2 border-[#333333] p-6 space-y-3">
                  <div className="text-[#999999]">
                    <div className="font-bold text-[#ff5e5e] mb-2">CONTACT INFORMATION</div>
                    <div>├─ Email: maithilpatil9@gmail.com</div>
                    <div>├─ Phone: +91 9370533275</div>
                    <div>├─ GitHub: github.com/Chronos778</div>
                    <div>├─ LinkedIn: linkedin.com/in/maithil-patil-aa74b5326</div>
                    <div>└─ Location: Virar West, Mumbai, Maharashtra</div>
                  </div>
                </div>
              </div>

              {/* Command Input */}
              <div className="mb-4">
                <div className="text-sm mb-2 text-[#999999]">
                  Type <span className="text-[#ff5e5e]">'send_message'</span> or <span className="text-[#ff5e5e]">'contact'</span> and press <span className="text-[#ff5e5e]">ENTER</span>
                </div>
                <form onSubmit={handleCommand} className="flex items-center gap-2">
                  <span className="text-[#999999]">user@portfolio:~$</span>
                  <input
                    type="text"
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-[#ededed] placeholder:text-[#666666]"
                    placeholder="type command here and press enter..."
                    autoFocus
                  />
                </form>
                <div className="h-0.5 bg-[#ff5e5e] animate-pulse mt-1"></div>
                {command && command.toLowerCase() !== 'send_message' && command.toLowerCase() !== 'contact' && (
                  <div className="text-xs text-[#ff5e5e] mt-2">
                    Command not recognized. Try 'send_message' or 'contact'
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              {!submitted ? (
                <div className="bg-[#0a0a0a] border-2 border-[#333333] p-8">
                  <div className="text-sm mb-6 text-[#ff5e5e]">$ nano message.txt</div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-[#ff5e5e] mb-2">NAME:</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-black border border-[#333333] p-3 text-[#ededed] outline-none focus:border-[#ff5e5e]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[#ff5e5e] mb-2">EMAIL:</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-black border border-[#333333] p-3 text-[#ededed] outline-none focus:border-[#ff5e5e]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[#ff5e5e] mb-2">MESSAGE:</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={6}
                        className="w-full bg-black border border-[#333333] p-3 text-[#ededed] outline-none focus:border-[#ff5e5e] resize-none"
                        required
                      />
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="submit"
                        className="px-6 py-2 bg-[#ff5e5e] text-black font-bold hover:bg-[#ff4040] transition-colors"
                      >
                        SEND
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        className="px-6 py-2 border border-[#ff5e5e] text-[#ff5e5e] hover:bg-[#1a1a1a] transition-colors"
                      >
                        CANCEL
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="bg-[#0a0a0a] border-2 border-[#333333] p-8">
                  <div className="text-[#ff5e5e] text-center">
                    <div className="text-2xl mb-4">✓ MESSAGE SENT</div>
                    <div className="text-[#999999]">
                      Your message has been transmitted successfully.
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}
